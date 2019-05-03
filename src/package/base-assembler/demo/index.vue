<template>
  <div class="wraper-item-preview">
    <div class="form-container">
      <section v-if="errorStr"
               class="form-container-error">
        {{ errorStr }}
      </section>
      <!-- 核心代码 -->
      <base-assembler v-else
                      :config="config">
      </base-assembler>
    </div>
    <Operate @operate="tryIt" />

  </div>
</template>

<script>
import { executeFunctionBlock } from '@/plugins/utils.js';
import createNotifyElement from '@/mixins/createNotifyElement';
import { baseAssemblerConfig } from './index.js';
import BaseAssembler from '../index.vue';

const PATH = 'base-assembler/demo';

export default {
  name: 'filter-paging-table',

  components: {
    BaseAssembler,
  },

  mixins: [createNotifyElement],

  data() {
    return {
      PATH,
      config: executeFunctionBlock(baseAssemblerConfig),
      configStr: baseAssemblerConfig,
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
          const options = executeFunctionBlock(val);
          this.config = options;
          console.log(options);
          this.errorStr = null;
        }
      } catch (error) {
        this.errorStr = error.toString();
      }
    },
  },
};
</script>

