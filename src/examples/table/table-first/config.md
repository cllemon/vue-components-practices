```js

import moment from 'moment';

const list = [
  {
    id: 'id0001',
    time: 1551778366013,
    head_portrait: [],
    name: '张三',
    age: 18,
  },
  {
    id: 'id0002',
    time: 1551771366013,
    head_portrait: [],
    name: '张三1',
    age: 19,
  },
  {
    id: 'id0003',
    time: 1551178366013,
    head_portrait: [],
    name: '张三2',
    age: 20,
  }
]

/**
 * 行操作 - 规则
 */
const createOperatePageJump = (Vue, label = '操作 - 跳转') => {
  return {
    label: label,
    method: (row) => {
      Vue.$message({
        showClose: true,
        message: `${label}成功`,
        type: 'success',
      });
    },
  };
};

/**
 * 筛选不同行对应不同操作
 */
const filterOperateList = (Vue) => {
  return (row) => {
    const list = [
      createOperatePageJump(Vue, '补卡')
    ];
    if (row.id === 'id0001') {
      list.push(createOperatePageJump(Vue, '请假'));
    }
    return list;
  };
}

export const tableConfig = (Vue) => {
  return {
    // el-table => props
    // Table Attributes
    tableProps: {
      data: list, // 显示的数据
      stripe: true, // 是否为斑马纹 table
      border: true, // 是否带有纵向边框
      'highlight-current-row': true, // 是否要高亮当前行
      'row-key': (row) => row.id, // 行数据的 Key，用来优化 Table 的渲染；
    },

    // el-table => events
    // Table Events
    tableEvents: {
      'selection-change': (selection) => {}, //  响应 - 行选择变化
      'sort-change': ({ prop, order }) => {}, // 响应 - 排序变化  ascending 升序, descending 降序, null 原始顺序
    },

    // el-table-column => Props
    // Table-Column Attributes
    tableColumnList: [
      {
        type: 'selection',
        fixed: 'left',
        width: 50,
        'reserve-selection': true,
        selectable: (row, index) => {},
      },
      {
        type: 'index',
        fixed: false,
        label: '序号',
        width: 50,
      },
      {
        prop: 'time', // 对应列内容的字段名，也可以使用 property 属性
        label: '开始时间', // 显示的标题
        'header-align': 'center', // 表头文字对齐方式 （可选）
        align: 'center', // 列内容对齐方式（可选）
        'min-width': 55, // 对应列的最小宽度
        sortable: false, // 对应列是否可以排序
        formatter: (val) => moment(val).format('YYYY-MM-DD'), // 当前列内容显示格式处理函数（可选）
      },
      {
        prop: 'head_portrait', // 对应列内容的字段名，也可以使用 property 属性
        label: '头像', // 显示的标题
        'header-align': 'center', // 表头文字对齐方式 （可选）
        align: 'center', // 列内容对齐方式（可选）
        'min-width': 55, // 对应列的最小宽度
        sortable: false, // 对应列是否可以排序
        component: {
          is: 'preview-image',
          props: {},
          events: {},
        },
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'age',
          label: '年龄',
        }
      }
    ],

    // 行操作集合 支持 Function | Array
    rowOperateList: filterOperateList(Vue),
  };
};

```
