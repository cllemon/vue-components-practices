// import getUserList from '@/services';

const customComponent = {
  name: 'custom-component',

  props: {
    // 行数据
    row: {
      type: Object,
      default: {}
    },
    // 行序号
    index: Number,
  },

  computed: {
    style() {
      return {
        border: '1px solid #409EFF',
        padding: '2px',
        cursor: 'pointer',
        color: '#409EFF',
        'font-weight': '500',
        'margin-right': '10px',
        'border-radius': '4px'
      }
    }
  },

  render(h) {
    return h('div', {
      style: { 'margin-right': '10px'}
    }, [
      h('a', {
        style: this.style,
        on: {
          click: (e) => console.log('自定义打印', this.row, this.index, e)
        }
      }, '自定义打印'),
      h('a', {
        style: this.style,
        on: {
          click: (e) => console.log('自定义警告', this.row, this.index, e)
        }
      }, '自定义警告'),
      h('a', {
        style: this.style,
        on: {
          click: (e) => console.log('自定义删除', this.row, this.index, e)
        }
      }, '自定义删除')
    ])
  }
}

const status = [
  {
    label: '状态a',
    value: 'a'
  },
  {
    label: '状态b',
    value: 'ba'
  }
]

const contentComponent = {
  name: 'content-component',

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

  computed: {
    content() {
      const { count, price, remark} = this.row.content;
      return `${remark}: ${count * price}`;
    }
  },

  render(h) {
    return h('h3', {
      style: {
        width: '140px',
        background: 'blue',
        color: '#fff',
        'border-radius': '4px',
        padding: '10px 0',
        'text-align': 'center'
      }
    }, this.content)
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
    'min-width': '130'
  },
  {
    label: '内容',
    prop: 'content',
    component: contentComponent
  },
  {
    label: '状态',
    prop: 'status',
    enumerations: status,
    formatter: (row, column, val, index) => {
      return `${val}----${index}`;
    },
  },
  {
    label: '自定义操作',
    component: customComponent
  }
]

const operates = [
  {
    label: '打印',
    hidden: (row) => row.status === 'b',
    method: (row, column, e) => {
      console.log('打印', row, column, e)
    }
  },
  {
    label: '警告',
    disabled: (row) => row.status === 'a',
    method: (row, column, e) => {
      console.log('警告', row, column, e)
    },
  },
  {
    label: '删除',
    type: 'danger',
    size: 'mini',
    method: (row, column, e) => {
      console.log('删除', row, column, e)
    },
  }
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
    'row-click': (row, column, event) => { console.log('row-click', row, column, event) }
  },

  columns,

  operates
})
