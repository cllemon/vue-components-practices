<template>
  <div class="wraper-item-preview">
    <div class="form-container">
      <section v-if="errorStr"
               class="form-container-error">
        {{ errorStr }}
      </section>
      <no-form v-model="config"
               ref="noForm"
               v-else>
      </no-form>
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
import NoForm from '@/components/no-form/index.vue';
import CodeToggle from '@/components/basic-widgets/code-toggle.vue';
import LiveEditPreview from '@/components/basic-widgets/live-edit-preview.vue';
import { formConfig } from './index.js';
import MarkdownConfig from './config.md';
import MarkdownVue from './vue.md';

export default {
  components: {
    NoForm,
    CodeToggle,
    LiveEditPreview,
    MarkdownConfig,
    MarkdownVue,
  },

  data() {
    return {
      config: formConfig(this),
      configStr: formConfig,
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
          const result = new Function(`return ${val}`)();
          const options = result(this);
          this.config = options;
          this.errorStr = null;
          if (this.$refs.noForm && this.$refs.noForm.$children && this.$refs.noForm.$children[0]) {
            setTimeout(() => {
              this.$refs.noForm.$children[0].clearValidate();
            }, 10);
          }
        }
      } catch (error) {
        this.errorStr = error.toString();
      }
    },
  },
};
</script>
