<template>
  <div class="classification">
    <ul v-if="list.length"
        class="classification__content">
      <li v-for="(item,index) in list"
          :key="index"
          v-text="`${item.label}  ${item.children.length}`"
          @click="onOperate(item, index)"
          :class="{
            content__item: true,
            active: currentIndex === index
          }" />
    </ul>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },

  methods: {
    onOperate({ children }, index) {
      this.currentIndex = index;
      this.$emit('pull', children);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/variable.scss';

.classification {
  min-height: 80px;
  box-shadow: $basic-box-shadow;
  margin-top: -40px;
  margin-bottom: 20px;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  &__content {
    display: flex;
    padding: 20px 10px;
    flex-wrap: wrap;
    .content__item {
      transition: all 0.3s ease;
      list-style: none;
      border-radius: 24px;
      padding: 2px 20px;
      font-size: 13px;
      height: 24px;
      line-height: 24px;
      color: #666;
      margin: 10px 20px;
      cursor: pointer;
      &:hover {
        color: #fff;
        background: #1b73ff;
        opacity: 0.8;
      }
    }
  }
  .active {
    color: #fff;
    background: #1b73ff;
  }
}
</style>

