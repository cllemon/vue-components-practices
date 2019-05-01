<template>
  <section class="operate">
    <el-button v-for="(operate, index) in OPERATE_LIST"
               :type="operate.type"
               :key="index"
               size="mini"
               style="width: 30%;"
               @click="onOperate(operate)">
      {{operate.label}}
    </el-button>
  </section>
</template>

<script>
import { OPERATE_LIST } from '@/plugins/constance';

export default {
  data() {
    return {
      OPERATE_LIST,
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
  margin: 10px;
  display: flex;
  justify-content: space-around;
}
</style>
