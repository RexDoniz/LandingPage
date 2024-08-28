<template>
  <transition @enter="enter" @leave="leave">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'AccordionTransition',
  methods: {
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave(el) {
      el.style.height = el.scrollHeight + 'px';
      requestAnimationFrame(() => {
        el.style.height = '0';
      });
    },
  },
};
</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active {
  transition: height 1s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 1s ease;
}
.accordion-enter, .accordion-leave-to /* .accordion-leave-active in <2.1.8 */ {
  height: 0;
  opacity: 0;
}
</style>
