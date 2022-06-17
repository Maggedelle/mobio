<template>

<div class="player" :style="cssVars">

</div>

</template>


<script>
export default {
  name: 'MyPlayer',
  props: ['name','x','y'],
   computed: {
      cssVars () {
        return{
          /* variables you want to pass to css */
          '--x': this.x + "px",
          '--y': this.y + "px",
        }
    }
   }
}

</script>

<style scoped>
.player {
  left: var(--x);
  bottom: var(--y);
  position: absolute;
  width:50px;
  height:50px;
  background-color:red;
}
</style>