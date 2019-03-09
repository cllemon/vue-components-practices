<template>
  <el-table ref="Table"
            style="width: 100%"
            v-bind="tableProps"
            v-on="tableEvents"
            v-if="isRenderTable">
    <el-table-column v-if="isPresenceSelectionColumnProps"
                     v-bind="selectionColumnProps"
                     type="selection">
    </el-table-column>
    <el-table-column width="50"
                     fixed="left"
                     label="序号"
                     type="index"
                     v-if="isRenderSerialNumber">
    </el-table-column>
    <template v-if="isPresenceTableColumnList">
      <el-table-column v-for="(column, index) in tableColumnList"
                       :key="`column_${index}`"
                       v-bind="column">
        <template slot-scope="scope">
          <component :is="column.component.is"
                     v-if="componentsLegal(column.component)"
                     v-model="scope.row[column.prop]"
                     v-bind="column.component.props"
                     v-on="column.component.events">
          </component>
          <template v-else>
            {{ formatter(scope.row, column) }}
          </template>
        </template>
      </el-table-column>
    </template>
    <template v-if="isPresenceRowOperateList">
      <el-table-column label="操作"
                       fixed="right"
                       align="center"
                       :min-width="140">
        <template slot-scope="scope">
          <el-button v-for="(operate, index) in getOperateList(scope.$index)"
                     :key="`operate_${index}`"
                     type="text"
                     size="small"
                     @click="onRowOperateClick(scope.$index, operate)">
            {{ operate.label }}
          </el-button>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  props: {
    tableProps: {
      type: Object,
      default: () => ({})
    },
    tableEvents: {
      type: Object,
      default: () => ({})
    },
    tableColumnList: {
      type: Array,
      default: () => []
    },
    rowOperateList: {
      type: [Function, Array],
      default: () => []
    },

    // 这里的兼容性太差，之后好好处理下！
    isRenderSerialNumber: {
      type: Boolean,
      default: true,
    },
    selectionColumnProps: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    isPresenceData() {
      return this.tableProps && this.isArray(this.tableProps.data);
    },
    isPresenceTableColumnList() {
      return this.isArray(this.tableColumnList);
    },
    isRenderTable() {
      return this.isPresenceData && this.isPresenceTableColumnList;
    },
    isPresenceRowOperateList() {
      if (this.isPresenceData) {
        if (this.rowOperateList instanceof Function) {
          const list = this.tableProps.data.filter((item) => {
            const operateList = this.rowOperateList(item);
            return operateList && operateList.length;
          });
          return list && list.length;
        }
        return this.rowOperateList && this.rowOperateList.length;
      }
      return false;
    },

    // 兼容行选择
    isPresenceSelectionColumnProps() {
      return this.isObject(this.selectionColumnProps) && Object.keys(this.selectionColumnProps).length
    },
  },

  methods: {
    isObject(obj) {
      return obj !== null && typeof obj === 'object';
    },
    isArray(val) {
      return val && val instanceof Array && val.length;
    },
    componentsLegal(component) {
      return this.isObject(component) && Object.keys(component).length > 0;
    },
    formatter(row, rowRule) {
      return rowRule.formatter
        ? rowRule.formatter(row[rowRule.prop], row)
        : row[rowRule.prop];
    },
    getOperateList(index) {
      if (this.rowOperateList instanceof Function) {
        return this.rowOperateList(this.tableProps.data[index]);
      }
      return this.rowOperateList;
    },
    onRowOperateClick(index, operate) {
      if (operate.method) {
        operate.method(this.tableProps.data[index]);
      }
    },
  },
};
</script>
