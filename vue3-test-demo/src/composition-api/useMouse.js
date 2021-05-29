import {onMounted, onUnmounted, ref} from 'vue';

export function useMouse() {
    const x = ref(0);
    const y = ref(0);
    
    const handPosition = (e) => {
        x.value = e.pageX;
        y.value = e.pageY;
    };

    onMounted(() => {
        window.addEventListener('mousemove',handPosition);
    });

    onUnmounted(() => {
        window.addEventListener('mousemove',handPosition);
    });

    return {
        x,
        y,
    }
}