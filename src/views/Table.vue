<template>
  <div class="show-wraper">
    <section class="show-wraper-item">
      <div class="wraper-item-tips">
        <h2>表格配置</h2>
        <div class="wraper-item-tips--content">
          基于 element-UI 组件封装 - 配置化生成表格, 提升开发效率。
          <!-- <span class="content-a"
                @click="showConfig"> ( 查看配置解析 )</span> -->
        </div>
      </div>
    </section>

    <section class="show-wraper-item">
      <div class="wraper-item-tips">
        <h3>基础业务场景</h3>
        <div class="wraper-item-tips--content">一些简单, 纯表格的配置。</div>
      </div>
      <table-first></table-first>
    </section>

    <section class="show-wraper-item">
      <div class="wraper-item-tips">
        <h3>复杂业务场景</h3>
        <div class="wraper-item-tips--content">筛选，表格，分页为一体的业务场景。( 需要完善修饰，只是暂时做个壳... )</div>
      </div>
      <table-second></table-second>
    </section>

    <show-config ref="showConfig"
                 :url="url">
    </show-config>
  </div>
</template>

<script>
import TableFirst from '@/examples/table/table-first/index.vue';
import TableSecond from '@/examples/table/table-second/index.vue';
import ShowConfig from '@/components/basic-widgets/show-config.vue';
import { configShowUrls } from '@/plugins/constance.js';

export default {
  name: 'table',
  components: {
    TableFirst,
    ShowConfig,
    TableSecond,
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
