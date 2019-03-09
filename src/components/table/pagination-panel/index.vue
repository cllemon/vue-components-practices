<template>
  <div class="pagination-panel">
    <!-- 分页面板附加操作 -->
    <div class="panel-additional">
      <slot name="additional-operate"></slot>
    </div>
    <!-- 分页器 -->
    <template v-if="totalCount && totalCount !== 0">
      <el-pagination :current-page.sync="pageOptions.currentPage"
                     :page-size.sync="pageOptions.pageSize"
                     :page-sizes="pageSizes"
                     :layout="layout"
                     :total="totalCount"
                     @size-change="onSizeChange"
                     @current-change="onPageChange"
                     class="pagination">
      </el-pagination>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: Object,
    },
    /**
     * 总页码
     */
    totalCount: {
      type: Number,
      default: 0,
    },
    /**
     * 页尺寸规格选项 - 用于渲染页尺寸选择器
     */
    pageSizes: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      pageOptions: this.value,
    };
  },

  watch: {
    pageOptions(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('input', newVal);
      }
    },
  },

  computed: {
    /**
     * 分页组件布局
     */
    layout() {
      const sizeStr = this.pageSizes.length > 0 ? 'sizes, ' : '';
      return `total, ${sizeStr}prev, pager, next, jumper`;
    },
  },

  methods: {
    /**
     * 响应 页尺寸变化
     */
    onSizeChange(size) {
      this.$emit('pageSizeChange', size);
    },
    /**
     * 响应 页码数变化
     */
    onPageChange(page) {
      this.$emit('currentPageChange', page);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-panel {
  margin: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
