import { Table, TableColumn, Button } from 'element-ui';
import jsonSchemaTableColumn, { judgeType } from './tableColumn';

// 默认表格下发属性配置
const DEFAULT_TABLE_ATTR = {
  stripe: true,
  size: 'small',
  'highlight-current-row': true
}

/**
 * @desc 计算操作字符长度，并计算出所占长度
 * @param {Array} operates 操作枚举
 * @returns {String} 长度量
 */
function computedOperateLabelLength(operates) {
  const wordsTotalCount = operates.reduce((pre, cur) => {
    return pre + String(cur.label).length
  }, 0)
  return `${wordsTotalCount * 13}`
}

/**
 * @desc 预处理处理操作下发属性
 *
 * @param {*} operate
 * @param {*} row
 * @param {*} column
 */
function handlerOperate(operate, row, column) {
  let operateProps = { ...operate };
  const { hidden, disabled } = operate;
  if (hidden && judgeType(hidden, 'function')) {
    operateProps.hidden = hidden(row, column);
  }
  if (disabled && judgeType(disabled, 'function')) {
    operateProps.disabled = disabled(row, column);
  }
  delete operateProps.method;
  return operateProps;
}

/**
 * @desc 生成一般操作列
 * @param {Function} h createElement
 * @param {Array} operates 操作配置表
 * @returns {Array} 操作列
 */
function genrateOperatesColumn(h, operates) {
  return h(TableColumn, {
    props: {
      label: '操作',
      fixed: 'right',
      'min-width': computedOperateLabelLength(operates),
    },
    scopedSlots: {
      default: ({ row, column }) => operates.map(operate => {
        const finalOperateProps = handlerOperate(operate, row, column);
        if (finalOperateProps.hidden) return null;
        return h(Button, {
          props: {
            type: 'text',
            ...finalOperateProps
          },
          on: {
            click: (e) => {
              e.stopPropagation();
              operate.method(row, column, e);
            }
          }
        }, operate.label);
      })
    }
  });
}

/**
 * @desc 生成列
 * @param {Function} h createElement
 * @param {Object} ctx 组件实例
 * @returns {Array | Object} 多列组件
 */
function genrateColumns(h, ctx) {
  const { columns, operates } = ctx.props;
  let result = null;
  if (judgeType(columns, 'array') && columns.length) {
    result = columns.map(column => {
      return h(jsonSchemaTableColumn, { props: { column } });
    });
  }
  if (result && judgeType(operates, 'array')) {
    result.push(genrateOperatesColumn(h, operates));
  }
  return result;
}

/**
 * @desc 规范化表格 props
 * @param {Object} ctx Vue 实例
 * @returns {Object} props
 */
function normalizeTableProps(ctx) {
  const { prop, on } = ctx.props;
  return {
    props: {
      ...DEFAULT_TABLE_ATTR,
      ...prop,
      data: judgeType(prop.data, 'array') ? prop.data : []
    },
    on: on || {}
  }
}

export default {

  name: 'json-schema-table',

  functional: true,

  props: {

    // Table Events
    on: {
      type: Object,
      default: () => ({})
    },

    // Table Attributes
    prop: {
      type: Object,
      default: () => ({})
    },

    // 表格列
    columns: {
      type: Array,
      default: () => []
    },

    // 表格操作列，可省略
    operates: {
      type: Array,
      default: () => []
    }
  },

  render(createElement, ctx) {
    return createElement(
      Table,
      normalizeTableProps(ctx),
      genrateColumns(createElement, ctx)
    );
  }
}

