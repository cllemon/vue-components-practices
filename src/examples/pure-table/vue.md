```js
<template>
  <table-panel v-model="config"></table-panel>
</template>

<script>

import TablePanel from '.../index.vue';
import { tableConfig } from '.../index.js';

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

```js
* template - 引入表格组件
* script - 引入配置项
* 将配置对象 挂载 到 data 选项中
* 注入 Vue 组件实例供配置项使用 - 根据业务需求可选。
```