/** 例子组件所需要用到的公用组件 */
import DynamicSelect from '@/components/dynamic-select/index.vue'; // 纯示例(模拟一种场景)
import Operate from '@/components/operate/index.vue';
import TableColumnImages from '@/components/table-column-images/index.vue';

/** 全局注册例子组件 - 服务于根据数据渲染动态组件 */
import StaticForm from './no-form/demo/static-form/index.vue';
import DynamicForm from './no-form/demo/dynamic-form/index.vue';
import PureTable from './table-panel/demo/index.vue';
import FilterPagingTable from './base-assembler/demo/index.vue';
import TreeStructure from './tree/demo/index.vue';
import PreviewPicture from './preview-picture/demo/index.vue';

export default {
  'dynamic-select': DynamicSelect,
  'table-column-images': TableColumnImages,
  Operate: Operate,

  'static-form': StaticForm,
  'dynamic-form': DynamicForm,
  'pure-table': PureTable,
  'filter-paging-table': FilterPagingTable,
  'tree-structure': TreeStructure,
  'preview-picture': PreviewPicture,
};
