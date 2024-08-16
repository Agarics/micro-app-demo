import { ref } from 'vue';
import { useRouter } from 'vue-router';

function useContentSpinner() {
  const spinning = ref(false);
  const startTime = ref(0);
  const router = useRouter();
  const minShowTime = 200; // 最小显示时间

  // 结束加载动画
  const onEnd = () => {
    const processTime = performance.now() - startTime.value;
    if (processTime < minShowTime) {
      setTimeout(() => {
        spinning.value = false;
      }, minShowTime - processTime);
    } else {
      spinning.value = false;
    }
  };

  // 路由前置守卫
  router.beforeEach((_to) => {
    startTime.value = performance.now();
    spinning.value = true;
    return true;
  });

  // 路由后置守卫
  router.afterEach((_to) => {
    onEnd();
    return true;
  });

  return { spinning };
}

export { useContentSpinner };
