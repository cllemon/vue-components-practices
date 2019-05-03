<h3 style="border-bottom:1px dashed #ccc; width: 570px; padding-bottom: 10px;">filter-paging-form 配置项代码</h3>

<div style="background-color: #0c2a34; padding: 10px; border-radius: 4px;  width: 552px; overflow: scroll;">

```js
import yourRequestMethod from 'service';

export const baseAssembler = (Vue) => ({
  /**
   * 整个表格的请求方法主要从后台拿数据源；
   * @param {Object} queryParams 筛选参数
   * 注: queryParams.query - 筛选项参数
   *     queryParams.page -  当前页
   *     queryParams.count -  当前页数量
   */
  getListToRequest: (queryParams = {}) => {
    // 根据后台字段，处理筛选参数queryParams
    return yourRequestMethod(queryParams);
  },

  realTimeRemoteSearch: false, // 是否开启实时搜索，开启实时搜索将不能被动搜索

  table: {
    tableProps: {
      // el-table 下发的所有属性
      data: [],
      stripe: true,
    },
    tableEvents: {
      // el-table 下发的所有的监听事件
      'selection-change': (selection) => {}, //  响应 - 行选择变化
    },
    tableColumnList: [
      // el-table-column 表格的每一列的配置
      {
        prop: 'time',
        label: '开始时间',
      },
      {
        prop: 'name',
        label: '姓名',
      },
      {
        prop: 'color',
        label: '颜色',
        // el-table-column 额外配置 添加query说明该项作为筛选项
        query: {
          is: 'el-input', // 组件名
          props: {
            // 组件下发的所有属性
            placeholder: '请选择筛选项：颜色',
          },
        },
        component: {
          is: 'table-column-images', // 组件名
          props: {
            /* 组件下发属性 */
          },
          events: {
            /* 组件事件分发 */
          },
        }, // 复杂表格项内容单独抽离，降低复杂度。
      },
      {
        prop: 'professional',
        label: '职业',
      },
      {
        prop: 'marriage',
        label: '婚配情况',
      },
      {
        prop: 'address',
        label: '地址',
      },
    ],
    rowOperateList: [],
    isRenderSerialNumber: true,
    selectionColumnProps: {},
  },

  pagination: {
    // el-pagination 下发的所有属性，原则上来说 一般只能用到pageSizes。
    // pageSizes: [10, 20, 30, 40], // 分页器 - 页尺寸规格列表
  },
});
```

</div>
