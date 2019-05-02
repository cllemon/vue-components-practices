
<template>
  <!-- 示例代码 -->
  <div class="table-column-images">
    <template v-for="(url, index) in list">
      <img :key="index"
           class="table-column-images__item"
           :src="url"
           @click="showSelectedImage(index)">
    </template>
  </div>
</template>

<script>
import previewImage from '@/package/preview-picture/index.js';

export default {
  componentName: 'table-column-images',
  props: {
    value: {
      required: true,
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
    showSelectedImage(index) {
      previewImage(this.list, index);
    },
  },
};
</script>

<style lang="scss">
.table-column-images {
  display: 'flex';
  &__item {
    width: 50px;
    height: 50px;
    padding: 5px;
  }
}
</style>
