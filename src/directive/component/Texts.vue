<template>
  <div class="texts">
    <div v-for="l in lines"
         :key="l"
         class="text" />
  </div>
</template>

<script>
export default {
  name: 'texts',

  props: {
    lines: {
      type: Number,
      default: 6,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './common.scss';

.texts {
  width: 100%;
  padding-top: 10px;
  .text {
    @include placeholders;
    width: 100%;
    margin-bottom: 10px;
    &:nth-child(2n + 1) {
      width: 80%;
    }

    &:nth-child(2n + 2) {
      width: 90%;
    }

    &:nth-child(2n + 3) {
      width: 100%;
    }

    &:nth-child(2n + 4) {
      width: 85%;
    }

    &:nth-child(2n + 5) {
      width: 100%;
    }
  }
}
</style>
