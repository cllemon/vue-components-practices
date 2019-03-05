export const tableConfig = `(Vue) => {
  const list = [
    {
      id: 1,
      time: 1551778366013,
      head_portrait: ['asd', 'asdasd'],
      name: '张三',
      age: 18,
    },
    {
      id: 2,
      time: 1551771366013,
      head_portrait: ['asd', 'asdasd'],
      name: '张三1',
      age: 19,
    },
    {
      id: 3,
      time: 1551178366013,
      head_portrait: ['asd', 'asdasd'],
      name: '张三2',
      age: 20,
    },
    {
      id: 4,
      time: 1551778366013,
      head_portrait: ['asd', 'asdasd'],
      name: '张三',
      age: 18,
    },
    {
      id: 5,
      time: 1551771366013,
      head_portrait: ['asd', 'asdasd'],
      name: '张三1',
      age: 19,
    },
    {
      id: 6,
      time: 1551178366013,
      head_portrait: ['asd', 'asdasd'],
      name: '张三2',
      age: 20,
    },
    {
      id: 7,
      time: 1551778366013,
      head_portrait: ['asd', 'asdasd'],
      name: '张三',
      age: 18,
    },
    {
      id: 8,
      time: 1551771366013,
      head_portrait: ['asd', 'asdasd'],
      name: '张三1',
      age: 19,
    },
  ];

  return {
    // el-table => props
    // Table Attributes
    tableProps: {
      data: list, // 显示的数据
      stripe: true, // 是否为斑马纹 table
      border: false, // 是否带有纵向边框
      'row-key': (row) => row.id, // 行数据的 Key，用来优化 Table 的渲染；
    },

    // el-table => events
    // Table Events
    tableEvents: {
      'selection-change': (selection) => {
        Vue.$message({
          showClose: true,
          message: '当前选择数据:' + JSON.stringify(selection),
          type: 'success',
        });
      }, //  响应 - 行选择变化
      'sort-change': ({ prop, order }) => {}, // 响应 - 排序变化  ascending 升序, descending 降序, null 原始顺序
    },

    // el-table-column => Props
    // Table-Column Attributes
    tableColumnList: [
      {
        prop: 'time', // 对应列内容的字段名，也可以使用 property 属性
        label: '开始时间', // 显示的标题
        'header-align': 'center', // 表头文字对齐方式 （可选）
        align: 'center', // 列内容对齐方式（可选）
        'min-width': 150, // 对应列的最小宽度
        sortable: false, // 对应列是否可以排序
        // formatter: (val) => moment(val).format('YYYY-MM-DD'), // 当前列内容显示格式处理函数（可选）
      },
      {
        prop: 'head_portrait', // 对应列内容的字段名，也可以使用 property 属性
        label: '头像', // 显示的标题
        'header-align': 'center', // 表头文字对齐方式 （可选）
        align: 'center', // 列内容对齐方式（可选）
        'min-width': 155, // 对应列的最小宽度
        sortable: false, // 对应列是否可以排序
        // component: {
        //   is: 'preview-image',
        //   props: {},
        //   events: {},
        // },
      },
      {
        prop: 'name',
        label: '姓名',
      },
      {
        prop: 'age',
        label: '年龄',
      },
    ],

    // 行操作集合 支持 Function | Array
    rowOperateList: filterOperateList(Vue),

    // 是否渲染序号列
    isRenderSerialNumber: true,
    // 行选择列下发属性
    selectionColumnProps: {
      selectable: (row, index) => row.id === 5,
      width: 50,
      'reserve-selection': true,
      fixed: 'left',
    }
  };

  function filterOperateList(Vue) {
    return (row) => {
      const list = [
        createOperatePageJump(Vue, '操作一')
      ];
      if (row.id === 2) {
        list.push(createOperatePageJump(Vue, '操作二'));
      }
      return list;
    };
  }

  function createOperatePageJump(Vue, label = '操作 - 跳转') {
    return {
      label: label,
      method: (row) => {
        Vue.$message({
          showClose: true,
          message: label + '成功',
          type: 'success',
        });
      },
    };
  }
}`;
