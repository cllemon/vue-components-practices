<template>
  <el-dialog :visible.sync="dialogVisible"
             width="60%">
    <template v-for="(item, index) in url">
      <img alt="Vue form"
           :key="index"
           :src="item"
           style="width: 100%;">
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: {
    url: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      dialogVisible: false,
    };
  },
};
</script>
