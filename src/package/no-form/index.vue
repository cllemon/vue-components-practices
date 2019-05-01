<template>
  <div v-if="config">
    <el-form ref="noForm"
             class="no-form"
             v-bind="elFormProps"
             v-on="elFormEvents">
      <template v-if="elFormItems && elFormItems.length">
        <template v-for="(item, index) in elFormItems">
          <el-form-item v-bind="item.props"
                        :key="`el-form-item-${index}`">
            <!-- <template v-if="item.slot && item.slot.length">
              <template v-for="(slot, index) in item.slot"> -->
            <component :is="item.slot.name"
                       v-model="elFormProps.model[item.props.prop]"
                       v-bind="item.slot.props"
                       v-on="item.slot.events"
                       class="form-item-slot">
              <!-- 这里主要是为了兼容ele带插槽组件 同时也兼容到自定义复杂组件 -->
              <template v-if="handlerSlotChildren(item.slot.slot)">
                  <template v-for="(child, index) in item.slot.slot.list">
                    <component :key="index"
                               :is="item.slot.slot.name"
                               v-bind="child">
                    </component>
                  </template>
              </template>
            </component>
            <!-- </template> -->
            <!-- </template> -->
          </el-form-item>
        </template>
      </template>
    </el-form>
    <section style="display: flex; justify-content: center;">
      <template v-if="elFormOperates && elFormOperates.length">
        <template v-for="(operate, index) in elFormOperates">
          <el-button v-bind="operate.props"
                     @click="handlerOperate(operate)"
                     :key="index"
                     style="width: 80px;">
            {{ operate.label }}
          </el-button>
        </template>
      </template>
    </section>
  </div>
</template>

<script>
export default {
  name: 'no-form',

  props: {
    value: { require: true },
  },

  data() {
    return {
      config: this.value,
    };
  },

  computed: {
    elFormProps() {
      if (this.checkFormRuleAttr()) {
        return this.config.formRule.props;
      }
      return {};
    },
    elFormEvents() {
      if (this.checkFormRuleAttr('events')) {
        return this.config.formRule.events;
      }
      return {};
    },

    elFormItems() {
      if (this.config && Array.isArray(this.config.formItemsRule)) {
        return this.config.formItemsRule;
      }
      return [];
    },

    elFormOperates() {
      if (this.config && Array.isArray(this.config.formOperateRule)) {
        return this.config.formOperateRule;
      }
      if (this.config && this.isObject(this.config.formOperateRule)) {
        return [this.config.formOperateRule];
      }
      return [];
    },
  },

  watch: {
    config: {
      handler(val, oldVal) {
        if (val !== oldVal) {
          this.$emit('input', val);
        }
      },
      deep: true,
    },
    value: {
      handler(val, oldVal) {
        if (val !== oldVal) {
          this.config = val;
        }
      },
      deep: true,
    },
  },

  methods: {
    isObject(obj) {
      return obj !== null && typeof obj === 'object';
    },
    checkFormRuleAttr(attr = 'props') {
      const aliasCofnig = this.config;
      return aliasCofnig && aliasCofnig.formRule && this.isObject(aliasCofnig.formRule[attr]);
    },
    handlerSlotDataType() {
      if (this.config && Array.isArray(this.config.formItemsRule)) {
        this.config.formItemsRule.forEach((item) => {
          if (item && !Array.isArray(item.slot)) {
            item.slot = [item.slot];
          }
        });
      }
    },
    handlerOperate(operate) {
      if (operate && operate.method instanceof Function) {
        operate.method(operate, this.$refs.noForm);
      } else {
        console.error(
          `[no-form warn]: ${JSON.stringify(
            operate.method,
          )}  -  The operation response does not exist or the response is not a function`,
        );
      }
    },
    handlerSlotChildren(children) {
      if (children && this.isObject(children)) {
        return children;
      }
      if (children && !this.isObject(children)) {
        console.error(
          `[no-form warn]: ${JSON.stringify(
            children,
          )}  - 「 formItemsRule  slot - slot 」must be an object.`,
        );
      }
      return false;
    },
  },

  created() {
    // this.handlerSlotDataType(); // 不提供复杂组件的渲染 - 自己去实现
  },
};
</script>

<style lang="scss" scoped>
.form-item-slot {
  width: 100%;
}
</style>
