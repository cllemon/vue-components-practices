<template>
  <div class="wraper-item-preview">
    <div class="form-container">
      <section v-if="errorStr"
               class="form-container-error">
        {{ errorStr }}
      </section>
      <!-- 核心组件 -->
      <table-panel v-bind="config"
                   v-else />
    </div>
    <Operate @operate="tryIt" />
  </div>
</template>

<script>
import { executeFunctionBlock } from '@/plugins/utils.js';
import createNotifyElement from '@/mixins/createNotifyElement';
import { tableConfig } from './index.js';
import TablePanel from '../index.vue';

const PATH = 'table-panel/demo';

export default {
  name: 'pure-table',

  components: {
    TablePanel,
  },

  mixins: [createNotifyElement],

  data() {
    return {
      PATH,
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
