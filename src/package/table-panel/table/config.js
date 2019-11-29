// import getUserList from '@/services';

const status = [
  {
    label: '状态a',
    value: 'a'
  },
  {
    label: '状态b',
    value: 'b'
  }
]

const contentComponent = {
  props: {
    // 行数据
    row: {
      type: Object,
      default: {}
    },
    // 行序号
    index: Number,
  },

  // template: '<h3>{{ JSON.stringify(row) }}</h3>', // 需要配置模板编译器

  mounted() {
    console.log(this, '----');
  },

  render(h) {
    return h('h3', null, JSON.stringify(this.row))
  },
}

const columns = [
  {
    label: '序号',
    type: 'index',
    width: '100'
  },
  {
    label: '日期',
    prop: 'date',
    formatter: (row, column, val, index) => new Date(val).toString(),
    width: '130'
  },
  {
    label: '内容',
    prop: 'content',
    component: contentComponent
  },
  {
    label: '状态',
    prop: 'status',
    formatter: (row, column, val, index) => {
      return status.filter(({ value }) => value === val)[0].label
    },
    // enumeration: status
  }
]

export default (vm) => ({
  // 表格要显示的数据 ✨
  // data: {
  //   fetchData: getUserList(query),
  //   cb: (res) => res.data
  // },
  // data: [],

  // Table Attributes
  prop: {
    data,
    'empty-text': '暂无数据 😯',
    border: false,
  },

  // Table Events
  on: {
    'row-click': (row, column, event) => { console.log('row-click') }
  },

  columns,

  operates
})

const operates = [
  {
    label: '打印一个',
    method: (row, column, index, e) => {
      console.log(index)
    }
  },
  {
    label: '警告',
    method: (row, column, index, e) => {
      console.warn(index)
    }
  },
]

const data = [
  {
    date: 1575015494905,
    content: {
      remark: '贸易所得',
      count: 1,
      price: 20,
    },
    status: 'a'
  },
  {
    date: 1575075494905,
    content: {
      remark: '写代码所得',
      count: 4,
      price: 110,
    },
    status: 'b'
  }
]
