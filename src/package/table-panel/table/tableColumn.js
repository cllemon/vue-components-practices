import { TableColumn } from 'element-ui';

const EMPTY_PLACEHOLDER = '-/-';

/**
 * @desc 类型判断
 * @param {Any} val 输入
 * @param {String} type 类型
 * @returns {Boolean}
 */
export function judgeType(val, type) {
  const typeStr = Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
  if (!type) return typeStr;
  return typeStr === String(type).toLocaleLowerCase();
}

/**
 * @desc 默认的空值过滤格式化函数
 *
 * @param {Object} row 行信息
 * @param {Object} column 列信息
 * @param {Any} val 单元格值
 * @param {Number} index 序号
 * @returns {Any} 单元格值
 */
function defaultFormatter(row, column, val, index) {
  if (!judgeType(val, 'number') && !val) {
    return EMPTY_PLACEHOLDER
  }
  if (judgeType(val, 'array') && !val.length) {
    return EMPTY_PLACEHOLDER
  }
  if (judgeType(val, 'object') && !Object.keys(val).length) {
    return EMPTY_PLACEHOLDER
  }
  return val;
}

/**
 * @desc 包装 formatter
 * @param {Object} column 列配置信息
 * @returns {Function} formatter
 */
function wraperFormatter(columnInfo = {}) {
  const { formatter } = columnInfo;
  if (!formatter) return defaultFormatter;
  return function (row, column, val, index) {
    const useVal = formatter(row, column, val, index);
    return defaultFormatter(row, column, useVal, index);
  }
}

// enumerations 方法去请求， 数组去映射，

/**
 * @desc Table-column Attributes 前置一些属性。
 */
const DEFAULT_TABLE_COLUMN_ATTR = {
  'min-width': '100',
  'show-overflow-tooltip': true,
  'header-align': 'left',
}

/**
 * @desc 规范化 props
 * @params {Object} ctx vue 实例
 * @returns {Object} Table-column Attributes
 */
function normalizeProps(ctx) {
  const { column } = ctx.props;
  const formatter = wraperFormatter(column);
  // const enumerations = wraperEnumerations(column);
  return {
    ...DEFAULT_TABLE_COLUMN_ATTR,
    ...column,
    formatter,
  }
}

function appropriateComponent(h, ctx) {
  const props = normalizeProps(ctx);
  if (props.component) {
    return h(TableColumn, {
      props,
      scopedSlots: {
        default: ({ $index, row }) => h(props.component, { props: { row, index: $index } })
      }
    });
  }
  return h(TableColumn, { props });
}

export default {

  name: 'json-schema-table-column',

  functional: true,

  props: {
    column: {
      type: Object,
      default: () => ({})
    },
  },

  render(createElement, ctx) {
    return appropriateComponent(createElement, ctx);
  }
}
