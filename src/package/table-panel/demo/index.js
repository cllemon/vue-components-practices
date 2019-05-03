export const tableConfig = `(Vue) => {
  return {
    // el-table => props
    // Table Attributes
    tableProps: {
      data: manufacturingData(), // 显示的数据
      stripe: true, // 是否为斑马纹 table
      border: false, // 是否带有纵向边框
      'row-key': (row) => row.id, // 行数据的 Key，用来优化 Table 的渲染；
    },

    // el-table => events
    // Table Events
    tableEvents: {
      'selection-change': (selection) => {
        const result = Vue.$createElement('div', { style: 'color: red; width: 300px; overflow: auto;' }, JSON.stringify(selection))
        Vue.$notify({
          title: '当前选择数据',
          message: result,
          position: 'top-left'
        })
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
        formatter: (val) => val + '-格式化', // 当前列内容显示格式处理函数（可选）
      },
      {
        prop: 'head_portrait', // 对应列内容的字段名，也可以使用 property 属性
        label: '头像', // 显示的标题
        'header-align': 'center', // 表头文字对齐方式 （可选）
        align: 'center', // 列内容对齐方式（可选）
        'min-width': 155, // 对应列的最小宽度
        sortable: false, // 对应列是否可以排序
        component: {
          is: 'table-column-images',
          props: { /* 组件下发属性 */ },
          events: { /* 组件事件分发 */ },
        }, // 复杂表格项内容单独抽离，降低复杂度。
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
    rowOperateList: operateList(Vue),

    // 是否渲染序号列
    isRenderSerialNumber: true,
    // 行选择列下发属性
    selectionColumnProps: {
      selectable: (row, index) => row.name === '张三',
      width: 50,
      'reserve-selection': true,
      fixed: 'left',
    }
  };

  function operateList(Vue) {
    return (row) => {
      const list = [
        createOperatePageJump(Vue, '操作一')
      ];
      if (row.name === '张三') {
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

  function manufacturingData() {
    return [
      {
        id: 1,
        time: '2019-09',
        head_portrait: ['https://img10.360buyimg.com/n12/jfs/t23431/303/1885264711/153012/fe4ae9b8/5b6be240N82f3fc92.jpg', 'https://img13.360buyimg.com/n12/jfs/t5245/77/2409313484/116897/d7df21a2/591aa393Naab49a51.jpg'],
        name: '张三',
        age: 18,
      },
      {
        id: 4,
        time: '2019-07',
        head_portrait: ['https://img13.360buyimg.com/n12/jfs/t21523/4/1770511554/760025/e33a4378/5b35f0dcN4986150f.jpg', 'https://img14.360buyimg.com/n12/jfs/t7408/308/2637944354/113297/6eb1e645/59b231f5Nb452921b.jpg'],
        name: '张三',
        age: 18,
      },
      {
        id: 5,
        time: '2019-06',
        head_portrait: ['https://img12.360buyimg.com/n12/jfs/t19543/141/1070385816/129952/b03d0078/5abb6647N114c486c.jpg', 'https://img10.360buyimg.com/n12/jfs/t1/5654/9/2119/24344/5b95e447Effe26dab/992b320a57ff18bd.jpg'],
        name: '张三1',
        age: 19,
      },
      {
        id: 6,
        time: '2019-03',
        head_portrait: ['https://img14.360buyimg.com/n12/jfs/t19330/342/456494898/161987/d7ca0bd0/5a7d6928Nd8d7cfce.jpg', 'https://img11.360buyimg.com/n12/jfs/t1516/168/735003506/299223/ffd19c37/55a78975N297c2ee9.jpg'],
        name: '张三2',
        age: 20,
      },
      {
        id: 7,
        time: '2019-05',
        head_portrait: ['https://img12.360buyimg.com/n12/jfs/t1462/51/1330348002/30519/6b938680/55c451d2N553564f8.jpg', 'https://img14.360buyimg.com/n12/g5/M02/13/19/rBEDik_9K20IAAAAAABktXYrlYwAAD3pQJFR2EAAGTN679.jpg'],
        name: '张三',
        age: 18,
      }
    ];
  }


}`;
