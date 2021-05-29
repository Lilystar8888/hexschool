<script>
import {useMouse} from './composition-api/useMouse'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    const {x, y, name} = useMouse();
    console.log(name);
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
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" @handEmit="handFunction" />
  <h1>{{x}}:{{y}}</h1>
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
