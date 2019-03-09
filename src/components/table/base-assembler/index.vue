<!-- 这里暴露出一个基础的 带 顶部操作栏 表格页 底部分页 的基础类组件 -->

<template>
  <section class="base-assembler"
           v-loading="isLoading">

    <!-- 筛选面板 -->
    <filter-panel ref="filterPanel"
                  v-model="filterSourceModel"
                  v-bind="filterPanelProps"
                  @remotePullData="onRemotePullData">
    </filter-panel>

    <!-- 表格面板 -->
    <table-panel v-bind="tablePanelProps"></table-panel>

    <!-- 分页面板 -->
    <pagination-panel v-model="pageOptions"
                      v-bind="paginationPanelProps">
                      <!-- @pageSizeChange="onPageSizeChange"
                      @currentPageChange="onCurrentPageChange"> -->
    </pagination-panel>

  </section>
</template>

<script>
import filterPanel from '../filter-panel';
import tablePanel from '../table-panel';
import paginationPanel from '../pagination-panel';

export default {
  componentName: 'base-assembler',
  components: {
    filterPanel,
    tablePanel,
    paginationPanel,
  },
  props: {
    /**
     * 渲染对应业务配置表
     */
    config: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
      modelRule: this.config(this), // 配置解析 - 获取整体配置表

      filterSourceModel: {}, // 筛选器数据源模型

      // entryDataList: [], // 表格数据源
      pageOptions: {
        currentPage: 1, // 分页器当前页
        pageSize: 10, // 分页器页尺寸
      },
      // totalCount: 0, // 总条数
      // selection: [], // 存行选择信息
      // sortModel: {}, // 排序信息
    };
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
          realTimeRemoteSearch: this.modelRule.realTimeRemoteSearch ? this.modelRule.realTimeRemoteSearch : false,
        };
      }
      return {};
    },

    /**
     * 表格面板下发配置
     */
    tablePanelProps() {
      if (this.modelRule && this.modelRule.table) {
        return this.modelRule.table;
      }
      return {};
    },

    /**
     * 分页面板下发数据
     */
    paginationPanelProps() {
      if (this.modelRule && this.modelRule.pagination) {
        return {
          totalCount: 2,
          pageSizes: this.modelRule.table.pageSizes,
        };
      }
      return {};
    },
  },

  methods: {
    getFilterList(columnList) {
      if (columnList instanceof Array && columnList.length) {
        const list = [];
        columnList.forEach(column => {
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

    onRemotePullData() {
      const result = this.$createElement('div', { style: 'color: red; width: 300px; overflow: auto;' }, JSON.stringify(this.filterSourceModel))
      this.$notify({
        title: '当前筛选数据',
        message: result,
      })
    }

    // handlerQueryParams() {
    //   return {
    //     page: this.pageOptions.currentPage, // 当前页
    //     count: this.pageOptions.pageSize, // 页尺寸
    //     query: this.filterObj, // 筛选参数
    //     sort: this.sortModel, // 排序参数
    //     selection: this.selection, // 行选结果
    //   };
    // },

    /**
     * 拉取数据列表
     * 这里取数据 - 接口需要规范好 否则拿不到数据源
     */
  //   async getDataMethods(queryParams) {
  //   },
  },
};

</script>

<style lang="scss" scoped>
.base-assembler {
  padding: 20px 20px;
  background: #fff;
}
</style>
