<template>
  <el-dialog :visible.sync="visible"
             :width="width"
             :before-close="onBeforeClose">
    <section class="dialog-wraper">
      <section class="dialog-wraper__component">
        <component :is="options.value"
                   ref="component"></component>
      </section>
      <section class="dialog-wraper__tips">
        <div class="tips__wraper">
          <div v-text="options.label"
               class="tips__title tips__title--bold" />
          <div v-text="options.value"
               class="tips__title" />
          <el-button type="primary"
                     icon="el-icon-edit"
                     size="mini"
                     @click="showCode(options.value)">
            查看代码
          </el-button>
          <el-button type="primary"
                     icon="el-icon-document"
                     size="mini"
                     @click="showCode(options.value)">
            查看文档
          </el-button>
        </div>
        <div v-text="'模块说明'"
             class="tips__title tips__title--bold" />
        <div v-text="options.describtion"
             class="tips__title tips__title--desc" />
      </section>
    </section>
  </el-dialog>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '80%',
    },
  },

  data() {
    return {
      visible: false,
      options: {},
    };
  },

  methods: {
    showPreview(options) {
      this.visible = true;
      this.options = options;
    },

    onBeforeClose(done) {
      if (this.$refs.component && this.$refs.component.closeNotify) {
        this.$refs.component.closeNotify();
      }
      done();
    },

    showCode(name) {
      console.log(name);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/variable.scss';

/deep/ .el-dialog {
  background: #fafafa;
  min-width: 1020px;
}
/deep/ .el-dialog__body {
  padding: 10px 20px 20px 20px;
}

.dialog-wraper {
  display: flex;
  width: 100%;
  &__tips {
    min-width: 300px;
    margin-left: 30px;
    overflow: hidden;
    .tips__wraper {
      height: 120px;
      border-bottom: 1px solid #d8d8d8;
      margin-bottom: 10px;
    }
    .tips__title {
      font-size: 20px;
      color: #666;
      -webkit-font-smoothing: antialiased;
      font-weight: 300;
      margin-bottom: 10px;
      &--bold {
        font-weight: 800;
        color: #333;
      }
      &--desc {
        font-size: 14px;
      }
    }
  }
  &__component {
    width: 60%;
    flex: 1;
    overflow: hidden;
    background: #fff;
    box-shadow: $basic-box-shadow;
    border-radius: 4px;
    padding: 10px;
  }
}
</style>
