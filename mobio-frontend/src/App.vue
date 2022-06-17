<template>
  <MyConnector/>
  <MyHeader/>
  <MyPlayer name="haha" x="22" y="32"/>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyConnector from './components/MyConnector.vue'
import MyPlayer from './components/MyPlayer.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyConnector,
    MyPlayer,
  }
}
</script>
