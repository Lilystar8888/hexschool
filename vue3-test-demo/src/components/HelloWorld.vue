<script>
import {ref} from "vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: "",
    }
  },
  //https://v3.vuejs.org/api/options-data.html#emits
  //emits: ["handEmit"],
  emits: {
    handEmit: (payload) => {
      //驗證emits
      console.log(payload);
      return true;
    }
  },
  setup(props, context){
    const text = ref("Test Lily Emit");
    const handEmitClick = () => {
      console.log(context);
      //參數1:事件名稱, 參數2:payload
      context.emit("handEmit", {data: 1});
    }
    return {
      props,
      text,
      handEmitClick,
    }
  }
}
</script>

<template>
  <!--Vue3開始component裡面不需要entry div包起來-->
  <!--額外的element也會造成渲染的負擔!!-->
  <h1>Mike</h1>
  <h2>Vue3</h2>
  <!--props傳進來的參數，建議不要直接{{msg}}-->
  <!--因為這樣會不知道是setup傳進來的，props傳進來的-->
  <!--可以在setup return出來變成{{props.msg}}-->
  <h3>{{props.msg}}</h3>
  <button @click="handEmitClick">emit</button>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>