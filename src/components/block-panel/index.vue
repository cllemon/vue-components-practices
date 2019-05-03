<template>
  <div class="block-panel">
    <section v-for="(item, index) in list"
             :key="index"
             :class="{
               'block-panel__item': true,
                'block-panel__item--disabled': item.disabled
             }"
             @click="onBlockOperate(item)">
      <img alt="component preview images"
           class="item__icon"
           :src="srcPath(item)">
      <div class="item__title">
        {{item.label}}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      list: this.value,
    };
  },

  watch: {
    value(val, oldVal) {
      if (val !== oldVal) {
        this.list = val;
      }
    },
  },

  methods: {
    onBlockOperate(item) {
      if (!item.disabled) {
        this.$emit('blockPreview', item);
      }
    },

    srcPath(item) {
      if (!item.disabled) {
        return require(`@/package/${item.componentName}/demo/${item.path || item.value}.png`);
      }
      return require('@/assets/images/default.png');
    },
  },
};
</script>


<style lang="scss" scoped>
@import '../../assets/style/variable.scss';

.block-panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  min-height: 600px;
  width: 100%;
  &__item {
    width: 360px;
    height: 270px;
    border-radius: 4px;
    box-shadow: $basic-box-shadow;
    padding: 10px;
    margin: 20px 10px;
    background: white;
    transition: all 0.3s ease;
    text-align: center;
    cursor: pointer;
    .item__icon {
      width: 350px;
      height: 230px;
    }
    .item__title {
      border-top: 1px solid #eee;
      height: 40px;
      line-height: 40px;
      color: '#999';
    }
    &:hover {
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 0px 20px rgba(0, 0, 0, 0.13);
      transform: translateY(-20px);
    }
    &--disabled {
      cursor: not-allowed;
      background: rgba(0, 0, 0, 0.05);
      transition: none;
      opacity: 0.5;
    }
    &--disabled:hover {
      transform: translateY(0px);
      box-shadow: $basic-box-shadow;
    }
  }
}
</style>

