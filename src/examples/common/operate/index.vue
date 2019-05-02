<template>
  <section class="operate">
    <el-button v-for="(operate, index) in opreateList"
               :type="operate.type"
               :key="index"
               size="mini"
               style="flex: 1;"
               @click="onOperate(operate)">
      {{operate.label}}
    </el-button>
  </section>
</template>

<script>
import { OPERATE_LIST } from '@/plugins/constance';

export default {
  props: {
    list: {
      type: Array,
      default: () => OPERATE_LIST,
    },
  },

  data() {
    return {
      opreateList: this.list,
    };
  },

  methods: {
    onOperate(val) {
      this.$emit('operate', val);
    },
  },
};
</script>

<style lang="scss" scoped>
.operate {
  width: 94%;
  margin: 20px 10px 0 10px;
  display: flex;
  justify-content: space-around;
}
</style>
