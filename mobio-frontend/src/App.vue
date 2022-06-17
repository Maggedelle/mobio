<template>
  <MyConnector/>
  <MyHeader/>
  <button v-on:click="sendMessage('hello')">Send Message</button>

</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyConnector from './components/MyConnector.vue'
 

export default {
  name: 'App',
  components: {
    MyHeader,
    MyConnector,
  }
}
</script>
