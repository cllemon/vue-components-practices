<template>
  <div :style="style"
       class="rectangular"></div>
</template>

<script>
export default {
  props: {
    radius: {
      type: Number,
      default: 4,
    },
    height: {
      type: Number,
      default: 80,
    },
    width: {
      type: Number,
      default: 80,
    },
  },

  computed: {
    style() {
      return {
        'border-radius': `${this.radius}px`,
        height: `${this.height}px`,
        width: `${this.width}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import './common.scss';

.rectangular {
  @include placeholders;
}
</style>
