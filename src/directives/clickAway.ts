export default {
  mounted(el: any, binding: any) {
    if (!binding.value) return;
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el: any) {
    if (!el.clickOutsideEvent) return;
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
