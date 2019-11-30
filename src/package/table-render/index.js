
/**
 * @desc 处理表格数据
 * @param {Array | Object} data 原始数据
 * @returns {Array} data 表格数据
 *
 * @tips data 为对象时，必须需要指明，请求数据的方法 fetchData,
 *       以及 如何取数据的回调 cb: 该回调必须返回一个表格数据数组，
 *       否则内部将其处理为空数组。
 */
async function hanlderTableData(data) {
  if (judgeType(data, 'array')) {
    return data
  } else if (judgeType(data, 'Object')) {
    try {
      const { fetchData, cb } = data;
      const res = await fetchData();
      const useFilterData = cb(res)
      if (judgeType(useFilterData, 'Array')) {
        return useFilterData;
      } else {
        console.warn(`
          [json-schema-table]: The return value processed by the callback function "cb" is not an array.
          Please check the logic of the callback handler. The logic is as follows: \n ${ cb.toString && cb.toString()}
        `);
        return [];
      }
    } catch ({ message }) {
      console.error(
        `[json-schema-table]: fetch table data exception through fetchData.
         Please check the method and the pass-through callback handler.
         The error information is as follows: ${message}`
      );
      return [];
    }
  } else {
    return [];
  }
}
