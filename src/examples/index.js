/** 例子组件所需要用到的公用组件 */
import Operate from './common/operate/index.vue';
import TableColumnImages from './common/table-column-images/index.vue';

/** 全局注册例子组件 - 服务于根据数据渲染动态组件 */
import StaticForm from './static-form/index.vue';
import DynamicForm from './dynamic-form/index.vue';
import PureTable from './pure-table/index.vue';
import FilterPagingTable from './filter-paging-table/index.vue';
import TreeStructure from './tree-structure/index.vue';
import PreviewPicture from './preview-picture/index.vue';

export default {
  'table-column-images': TableColumnImages,
  Operate: Operate,

  'static-form': StaticForm,
  'dynamic-form': DynamicForm,
  'pure-table': PureTable,
  'filter-paging-table': FilterPagingTable,
  'tree-structure': TreeStructure,
  'preview-picture': PreviewPicture,
};
