<h3 style="border-bottom:1px dashed #ccc; width: 570px; padding-bottom: 10px;">static-form</h3>

<div style="background-color: #0c2a34; padding: 10px; border-radius: 4px;  width: 552px; overflow: scroll;">

```xml
<template>
  <no-form v-model="config"></no-form>
</template>

<script>

  // 引入 no-form 核心封装组件
  import NoForm from 'no-form.vue';
  // 引入你写的自定义 formConfig 配置项
  import formConfig from 'formConfig.js';

  export default {
    components: {
      NoForm,
    },

    // 这里配置提供两种数据结构 Object |
    // Function(传入当前Vue实例使你的配置更灵活)
    data() {
      return {
        config: formConfig(this),
      };
    },
  };

</script>
```

</div>

<h3 style="border-bottom:1px dashed #ccc; width: 570px; padding-bottom: 10px;">Steps</h3>

- template - 引入表单组件
- script - 引入配置项
- 将配置对象 挂载 到 data 选项中
- 注入 Vue 组件实例供配置项使用 - 根据业务需求可选。
