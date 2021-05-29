<script>
import {useMouse} from './composition-api/useMouse'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    const {x, y} = useMouse();
    const handFunction = () => {
      console.log('handFunction');
    }
    return {
      x,
      y,
      handFunction,
    }
  }
}
</script>

<template>
  <h1>{{x}}:{{y}}</h1>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" @handEmit="handFunction" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
