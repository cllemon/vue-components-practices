<h3 style="border-bottom:1px dashed #ccc; width: 570px; padding-bottom: 10px;">tree-structure</h3>

<div style="background-color: #0c2a34; padding: 10px; border-radius: 4px;  width: 552px; overflow: scroll;">

```xml
<template>
   <Tree :data="area" />
</template>

<script>

  // 引入 Tree 核心封装组件
  import Tree from 'tree.vue';

  export default {
    components: {
      Tree,
    },

    /**
     * 树 - 数据模型
     * 如：{
     *   name: '中国',
     *   children: [
     *     {
     *       name: ‘浙江省',
     *       children: [
     *         {
     *           name: '杭州',
     *           children: [
     *             {
     *               name: '西湖区’,
     *               hildren: [...]
     *             }, {
     *               name: '滨江区'
     *             }
     *           ]
     *         }, {
     *           name: '湖州市’,
     *           children: [...]
     *         }
     *       ]
     *     }, {
     *       name: '江苏省‘,
     *       children: [...]
     *     }
     *   ]
     * }
     */
    data() {
      return {
        area: [],
      };
    },
  };

</script>
```

</div>

<h3 style="border-bottom:1px dashed #ccc; width: 570px; padding-bottom: 10px;">Steps</h3>

- template - 引入组件
- 传入相关 props
