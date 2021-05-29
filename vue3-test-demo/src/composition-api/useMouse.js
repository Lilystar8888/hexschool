//封裝非同步的邏輯、比較靜態的方法等等，例如restful api

import {onMounted, onUnmounted, reactive, ref, toRefs} from 'vue';

export function useMouse() {
    // const x = ref(0);
    // const y = ref(0);

    const name = ref("name");

    //reactive是不能被解構的，因為它必須被proxy包住
    const pos = reactive({
        x:0,
        y:0,
    });
    
    const handPosition = (e) => {
        // x = e.pageX;
        // y = e.pageY;
        pos.x = e.pageX;
        pos.y = e.pageY;
    };

    onMounted(() => {
        window.addEventListener('mousemove',handPosition);
    });

    onUnmounted(() => {
        window.addEventListener('mousemove',handPosition);
    });

    // return {
    //     x,
    //     y,
    // }

    //可以用toRefs幫助reactive被解構出來
    //return toRefs(pos)

    //透過展開運算子的方式加進物件
    return {
        ...toRefs(pos),
        name,
    };
}