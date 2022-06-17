<script>
export default {


  name: 'MyConnector',

  data() {
    return {
      socket: {},
      connectedStatus: 'Not connected!',
      message: 'No message yet!'
    }
  },
  async mounted() {

    const echoSocketUrl = 'ws://127.0.0.1:3000/ws'

    this.socket = await new WebSocket(echoSocketUrl);

    this.socket.onopen = () => {
      console.log('Websocket connected.');
      this.connectedStatus = 'Connected';
      //this.sendMessage(JSON.stringify({"message" : "Hello, server."}));
    }

    this.socket.onmessage = (event) => {
      let parsedMessage = JSON.parse(event.data);
      console.log(parsedMessage);
      if (typeof parsedMessage.message !== "undefined" && parsedMessage.message == "hello") {
        this.message = parsedMessage.message;
        console.log('We have received a message from the server!')
      }
    }
  },
  methods: {
    waitForOpenConnection: function () {
      // We use this to measure how many times we have tried to connect to the websocket server
      // If it fails, it throws an error.
      return new Promise((resolve, reject) => {
        const maxNumberOfAttempts = 10
        const intervalTime = 200

        let currentAttempt = 0
        const interval = setInterval(() => {
          if (currentAttempt > maxNumberOfAttempts - 1) {
            clearInterval(interval)
            reject(new Error('Maximum number of attempts exceeded.'));
          } else if (this.socket.readyState === this.socket.OPEN) {
            clearInterval(interval)
            resolve()
          }
          currentAttempt++
        }, intervalTime)
      })
    },
    sendMessage: async function (message) {
      if (this.socket.readyState !== this.socket.OPEN) {
        try {
          await this.waitForOpenConnection(this.socket)
          this.socket.send(message)
        } catch (err) { console.error(err) }
      } else {
        this.socket.send(message)
      }
    }
  }
}
</script>