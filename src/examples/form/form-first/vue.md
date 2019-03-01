```js
<template>
  <no-form v-model="config"></no-form>
</template>

<script>

import NoForm from '.../index.vue';
import { formConfig } from '.../index.js';

export default {
  components: {
    NoForm,
  },

  data() {
    return {
      config: formConfig(this),
    };
  },
};
</script>

```

```js
* template - 引入表单组件
* script - 引入配置项
* 将配置对象 挂载 到 data 选项中
* 注入 Vue 组件实例供配置项使用 - 根据业务需求可选。
```
