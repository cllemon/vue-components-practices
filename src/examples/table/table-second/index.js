export const baseAssembler = `(Vue) => ({
  // 表格请求方法
  getListToRequest: (queryParams = {}) => {
    return null;
  },

  realTimeRemoteSearch: false,

  table: {
    tableProps: {
      data: [
        {
          id: 'id0001',
          time: 1551778366013,
          size: 12,
          name: '张三',
          age: 18,
          color: '🌹🌹🌹🌹🌹',
          professional: '教授',
          marriage: '未婚',
          address: '西湖区转塘街道',
        },
        {
          id: 'id0001',
          time: 1551778366013,
          size: 12,
          name: '张三',
          age: 18,
          color: '🌹🌹🌹🌹🌹',
          professional: '教授',
          marriage: '未婚',
          address: '西湖区转塘街道',
        },
      ],
    },
    tableEvents: {
      'selection-change': (selection) => {}, //  响应 - 行选择变化
    },
    tableColumnList: [
      {
        type: 'index',
        label: '序号',
      },
      {
        prop: 'time',
        label: '开始时间',
        query: {
          is: 'el-date-picker',
          props: {},
        },
      },
      {
        prop: 'name',
        label: '姓名',
        query: {
          is: 'el-input',
          props: {},
        },
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
    rowOperateList: [],
    isRenderSerialNumber: true,
    selectionColumnProps: {},
  },

  pagination: {
    pageSizes: [], // 分页器 - 页尺寸规格列表
  },
})`;
