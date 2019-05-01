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
import { tableConfig } from './index.js';
import createNotifyElement from '@/mixins/createNotifyElement';

export default {
  name: 'pure-table',

  mixins: [createNotifyElement],

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
