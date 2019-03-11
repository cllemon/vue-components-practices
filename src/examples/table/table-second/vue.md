```js
<template>
  <base-assembler v-model="config"></base-assembler>
</template>

<script>

import BaseAssembler from '.../base-assembler/index.vue';
import { baseAssembler } from '.../index.js';

export default {
  components: {
    BaseAssembler,
  },

  data() {
    return {
      config: baseAssembler(this),
    };
  },
};
</script>

```

```js
* template - 引入表格装配器组件
* script - 引入配置项
* 将配置对象 挂载 到 data 选项中
* 注入 Vue 组件实例供配置项使用 - 根据业务需求可选。
```
