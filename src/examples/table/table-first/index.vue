<template>
  <div class="wraper-item-preview">
    <div class="form-container">
      <section v-if="errorStr"
               class="form-container-error">
        {{ errorStr }}
      </section>
      <table-panel v-bind="config"
                   v-else>
      </table-panel>
    </div>

    <code-toggle>
      <markdown-config slot="config"></markdown-config>
      <markdown-vue slot="vue"></markdown-vue>
      <live-edit-preview slot="code"
                         v-model="configStr">
      </live-edit-preview>
    </code-toggle>
  </div>
</template>

<script>
import TablePanel from '@/components/table/table-panel/index.vue';
import CodeToggle from '@/components/basic-widgets/code-toggle.vue';
import LiveEditPreview from '@/components/basic-widgets/live-edit-preview.vue';
import { executeFunctionBlock } from '@/plugins/utils.js';
import { tableConfig } from './index.js';
import MarkdownConfig from './config.md';
import MarkdownVue from './vue.md';

export default {
  components: {
    TablePanel,
    CodeToggle,
    LiveEditPreview,
    MarkdownConfig,
    MarkdownVue,
  },

  data() {
    return {
      config: executeFunctionBlock(tableConfig)(this),
      configStr: tableConfig,
      errorStr: null,
    };
  },

  watch: {
    /**
     * 注：这个地方实现的比较粗糙 - 等空闲的时候修缮下。
     */
    configStr(val, oldVal) {
      try {
        if (val !== oldVal) {
          const options = executeFunctionBlock(val)(this);
          this.config = options;
          this.errorStr = null;
        }
      } catch (error) {
        this.errorStr = error.toString();
      }
    },
  },
};
</script>
