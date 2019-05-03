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
    <Operate @operate="tryIt" />
  </div>
</template>

<script>
import { executeFunctionBlock } from '@/plugins/utils.js';
import { formConfig } from './index.js';
import createNotifyElement from '@/mixins/createNotifyElement.js';
import NoForm from '../../index.vue';

const PATH = 'no-form/demo/static-form';

export default {
  name: 'static-form',

  components: {
    NoForm,
  },

  mixins: [createNotifyElement],

  data() {
    return {
      PATH,
      config: executeFunctionBlock(formConfig)(this),
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
          const options = executeFunctionBlock(val)(this);
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


