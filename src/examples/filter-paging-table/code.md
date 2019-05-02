<h3 style="border-bottom:1px dashed #ccc; width: 570px; padding-bottom: 10px;">filter-paging-form</h3>

<div style="background-color: #0c2a34; padding: 10px; border-radius: 4px;  width: 552px; overflow: scroll;">

```xml
<template>
  <base-assembler v-model="config"></base-assembler>
</template>

<script>

// 引入 baseAssembler 核心封装组件
import baseAssembler from 'base-assembler.vue';
// 引入你写的自定义 formConfig 配置项
import formCobaseAssemblerConfignfig from 'baseAssemblerConfig.js';

export default {
  components: {
    BaseAssembler,
  },

  data() {
    return {
      config: formCobaseAssemblerConfignfig(this),
    };
  },
};
</script>

```

</div>

<h3 style="border-bottom:1px dashed #ccc; width: 570px; padding-bottom: 10px;">Steps</h3>

- template - 引入表格装配器组件
- script - 引入配置项
- 将配置对象 挂载 到 data 选项中
- 注入 Vue 组件实例供配置项使用 - 根据业务需求可选。
