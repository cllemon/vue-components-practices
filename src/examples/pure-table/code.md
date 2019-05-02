<h3 style="border-bottom:1px dashed #ccc; width: 570px; padding-bottom: 10px;">pure-table</h3>

<div style="background-color: #0c2a34; padding: 10px; border-radius: 4px;  width: 552px; overflow: scroll;">

```xml
<template>
  <table-panel v-model="config"></table-panel>
</template>

<script>

// 引入 table-panel核心封装组件
import TablePanel from 'table-panel.vue';
// 引入你写的自定义 tableConfig 配置项
import tableConfig from 'tableConfig.js';

export default {
  components: {
    TablePanel,
  },

  data() {
    return {
      config: tableConfig(this),
    };
  },
};
</script>

```

</div>

<h3 style="border-bottom:1px dashed #ccc; width: 570px; padding-bottom: 10px;">Steps</h3>

- template - 引入表格组件
- script - 引入配置项
- 将配置对象 挂载 到 data 选项中
- 注入 Vue 组件实例供配置项使用 - 根据业务需求可选。
