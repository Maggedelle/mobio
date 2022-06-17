var PlayerController = {
  init() {
    main();
  },
};

function main() {
  var pressedKeys = {};
  window.onkeyup = function (e) {
    pressedKeys[e.keyCode] = false;
  };
  window.onkeydown = function (e) {
    pressedKeys[e.keyCode] = true;
    console.log(pressedKeys[65]);
  };
}

export default PlayerController;
