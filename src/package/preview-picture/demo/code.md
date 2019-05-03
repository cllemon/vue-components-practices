<h3 style="border-bottom:1px dashed #ccc; width: 570px; padding-bottom: 10px;">preview-picture</h3>

<div style="background-color: #0c2a34; padding: 10px; border-radius: 4px;  width: 552px; overflow: scroll;">

```xml
<template>
  <section style="display: 'flex';">
    <img v-for="(url, index) in imageList"
          :key="index"
          style="width: 130px; height: 160px; padding: 5px;"
          :src="url"
          @click="showSelectedImage(index)">
  </section>
</template>

<script>

  // 引入 previewPicture 核心封装组件提供的调用方法
  import previewPicture from 'previewPicture.js';

  export default {

    data() {
      return {
        imageList: [],
      };
    },

    methods: {
      showSelectedImage(index) {
        previewPicture(this.imageList, index);
      },
    },
  };

</script>
```

</div>

<h3 style="border-bottom:1px dashed #ccc; width: 570px; padding-bottom: 10px;">Steps</h3>

- template - 引入组件
- 传入相关 props
