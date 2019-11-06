<template>
  <transition name="fade">
    <div class="skeleton"
         v-show="visible">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.skeleton {
  position: absolute;
  z-index: 2000;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
}
</style>
