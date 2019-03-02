<template>
  <div class="show-wraper">
    tips: 代码在编译时被压缩，试一试可更改，目前暂时没时间解决自行编辑查看效果！
    <section class="show-wraper-item">
      <div class="wraper-item-tips">
        <h2>表单配置</h2>
        <div class="wraper-item-tips--content">
          基于 element-UI 组件封装 - 真正使表单充分可定制化，可配置化, 提高开发效率。
          <span class="content-a"
                @click="showConfig"> ( 查看配置解析 )</span>
        </div>

      </div>

    </section>

    <section class="show-wraper-item">
      <div class="wraper-item-tips">
        <h3>基础业务场景</h3>
        <div class="wraper-item-tips--content">一些简单, 且表单项与项之间没有关联性的配置。</div>
      </div>
      <form-first></form-first>
    </section>

    <section class="show-wraper-item">
      <div class="wraper-item-tips">
        <h3>复杂业务场景</h3>
        <div class="wraper-item-tips--content">表单项与项之间存在关联性，如项与项之间存在级联，且内部信息存在级联的配置。</div>
      </div>
      <form-Second></form-Second>
    </section>

    <show-config ref="showConfig"
                 :url="url"></show-config>
  </div>
</template>

<script>
import FormFirst from '@/examples/form/form-first/index.vue';
import FormSecond from '@/examples/form/form-second/index.vue';
import ShowConfig from '@/components/basic-widgets/show-config.vue';
import { configShowUrls } from '@/plugins/constance.js';

export default {
  name: 'no-form',
  components: {
    FormFirst,
    FormSecond,
    ShowConfig,
  },

  data() {
    return {
      url: configShowUrls,
    };
  },

  methods: {
    showConfig() {
      this.$refs.showConfig.dialogVisible = true;
    },
  },
};
</script>
