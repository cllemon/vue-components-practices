<!-- 这里暴露出一个基础的 带 顶部操作栏 表格页 底部分页 的基础类组件 -->
<template>
  <section class="base-assembler"
           v-loading="isLoading">
    <filter-panel ref="filterPanel"
                  v-model="filterSourceModel"
                  v-bind="filterPanelProps"
                  @remotePullData="handlerOrForwardingQueryParams">
    </filter-panel>
    <table-panel v-bind="tablePanelProps"></table-panel>
    <pagination-panel v-model="pageOptions"
                      v-bind="paginationPanelProps"
                      @pageSizeChange="onPageSizeChange"
                      @currentPageChange="onCurrentPageChange">
    </pagination-panel>
  </section>
</template>

<script>
// import filterPanel from '../filter-panel';
// import tablePanel from '../table-panel';
// import paginationPanel from '../pagination-panel';

export default {
  componentName: 'base-assembler',
  // components: {
  //   filterPanel,
  //   tablePanel,
  //   paginationPanel,
  // },

  props: {
    config: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {
      isLoading: false,
      modelRule: this.config(this),
      filterSourceModel: {},
      totalCount: 100,
      pageOptions: {
        currentPage: 1,
        pageSize: 5,
      },
    };
  },

  watch: {
    config(val, oldVal) {
      if (val !== oldVal) {
        this.modelRule = val(this);
        this.handlerOrForwardingQueryParams(); // 纯粹是为了实时预览而写
      }
    },
  },

  computed: {
    /**
     * 筛选面板
     * @param {Array} filterList 筛选器配置列表
     * @param {Boolean} realTimeRemoteSearch 实时搜索阀门
     * @returns {Object}
     */
    filterPanelProps() {
      if (this.modelRule && this.modelRule.table && this.modelRule.table.tableColumnList) {
        return {
          filterList: this.getFilterList(this.modelRule.table.tableColumnList),
          realTimeRemoteSearch: this.modelRule.realTimeRemoteSearch
            ? this.modelRule.realTimeRemoteSearch
            : false,
        };
      }
      return {};
    },
    tablePanelProps() {
      if (this.modelRule && this.modelRule.table) {
        return this.modelRule.table;
      }
      return {};
    },
    paginationPanelProps() {
      if (this.modelRule && this.modelRule.pagination) {
        return {
          totalCount: this.totalCount,
          pageSizes: this.modelRule.pagination.pageSizes,
        };
      }
      return {};
    },
  },

  methods: {
    getFilterList(columnList) {
      if (columnList instanceof Array && columnList.length) {
        const list = [];
        columnList.forEach((column) => {
          if (column.query && column.query.is) {
            this.$set(this.filterSourceModel, column.prop, null);
            list.push({
              label: column.label,
              value: column.prop,
              is: column.query.is,
              props: column.query.props,
            });
          }
        });
        return list;
      }
      return [];
    },

    /**
     * 拉取数据列表
     * 这里取数据 - 接口需要规范好 否则拿不到数据源
     */
    async getDataMethods(queryParams) {
      try {
        this.isLoading = true;
        const { data, total } = await this.modelRule.getListToRequest(queryParams);
        this.totalCount = total;
        this.modelRule.table.tableProps.data = data;
        // 这里可以暴露一个钩子给配置去处理接口数据
      } catch (error) {
        console.log(' base-assembler: 拉取数据列表错误：', error);
      } finally {
        this.isLoading = false;
      }
    },

    handlerOrForwardingQueryParams(init = true) {
      const API = {
        page: init ? 1 : this.pageOptions.currentPage,
        count: this.pageOptions.pageSize,
        query: this.filterSourceModel,
      };
      this.getDataMethods(API);
    },

    onPageSizeChange() {
      this.handlerOrForwardingQueryParams();
    },

    onCurrentPageChange() {
      this.handlerOrForwardingQueryParams(false);
    },
  },

  mounted() {
    this.handlerOrForwardingQueryParams();
  },
};
</script>

<style lang="scss" scoped>
.base-assembler {
  padding: 20px 20px;
  background: #fff;
}
</style>
