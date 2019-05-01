<template>
  <section style="display: flex;">
    <div class="wraper-item-preview--code"
         v-show="visible">
      <el-tabs value="code"
               class="code-tabs">

        <el-tab-pane label="不妨试一试"
                     name="code">
          <slot name="code"></slot>
        </el-tab-pane>

        <el-tab-pane label="业务代码"
                     name="vue">
          <slot name="vue"></slot>
          {{MarkdownVue}}
        </el-tab-pane>

        <el-tab-pane label="配置项代码"
                     name="config">
          <slot name="config"></slot>
        </el-tab-pane>

      </el-tabs>
    </div>
    <div class="wraper-item-preview--toggle"
         @click="onToggle">
      <div class="toggle-text">
        {{ toggleStr }}
      </div>
    </div>
  </section>
</template>

<script>
import 'highlight.js/styles/github.css';
import 'highlight.js/styles/solarized-light.css';

export default {
  props: {
    MarkdownVue: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      visible: true,
    };
  },

  computed: {
    toggleStr() {
      return `${this.visible ? '隐藏' : '显示'}代码`;
    },
  },

  methods: {
    onToggle() {
      this.visible = !this.visible;
    },
  },
};
</script>

