export const baseAssemblerConfig = `(Vue) => {
  return {
    // 表格请求方法
    getListToRequest: (queryParams = {}) => {
      return mock(queryParams);
    },

    realTimeRemoteSearch: false,

    table: {
      tableProps: {
        data: [],
        stripe: true,
      },
      tableEvents: {
        'selection-change': (selection) => {}, //  响应 - 行选择变化
      },
      tableColumnList: [
        {
          prop: 'time',
          label: '开始时间',
          query: {
            is: 'el-date-picker',
            props: {
              placeholder: '请选择筛选项：开始时间'
            },
          },
        },
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'color',
          label: '颜色',
          query: {
            is: 'el-input',
            props: {
              placeholder: '请选择筛选项：颜色'
            },
          },
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
      rowOperateList: operateList(Vue),
      isRenderSerialNumber: true,
      selectionColumnProps: {},
    },

    pagination: {
      // pageSizes: [10, 20, 30, 40], // 分页器 - 页尺寸规格列表
    },
  }

  function mock(queryParams) {
    let list = [];
    for (let index = 0; index < queryParams.count; index++) {
      list.push({
        id: 'id0001',
        time: '2017-10-01',
        name: '第' + queryParams.page + '页 - 张三',
        age: '18' + index,
        color: 'color-' + index,
        professional: '教授-' + index,
        marriage: '未婚-' + index,
        address: '杭州市-' + index,
      })
    }
    if (queryParams.query.color) {
      const filterList = []
      list.forEach(item => {
        if (item.color === queryParams.query.color) {
          filterList.push(item)
        }
      });
      list = filterList;
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: list,
          total: 100,
        })
      }, 1000);
    });
  }

  function operateList(Vue) {
    return (row) => {
      const list = [
        createOperatePageJump(Vue, '操作一')
      ];
      if (row.color === 'color-2') {
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
