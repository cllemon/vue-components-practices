<template>
  <div class="header-tips">
    <a :href="url"
       class="header-tips--jump">
      <el-tooltip class="item"
                  content=" 查看更多 "
                  effect="light"
                  placement="left-end">
        <i class="el-icon-share jump-icon"></i>
      </el-tooltip>
    </a>
    <img alt="Vue logo"
         class="header-tips--vue "
         src="../../assets/images/logo.png">
    <div class="header-tips--content">
      <i class="el-icon-loading"></i> Some practices based on vue are configured to generate components that are satisfied with the relevant business scenarios.
    </div>
    <div class="header-tips--author">
      -- mr.lenmon
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://github.com/cllemon',
    };
  },
};
</script>


<style lang="scss" scoped>
@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.header-tips {
  position: relative;
  padding: 14px 4px 4px 4px;
  width: 100%;
  min-width: 1200px;
  text-align: center;
  color: #9c9c9c;
  &--jump {
    position: absolute;
    top: 12px;
    right: 50px;
    .jump-icon {
      font-size: 30px;
      color: #9e9e9e;
      animation: rotating 10s linear infinite;
    }
  }
  &--vue {
    position: absolute;
    top: 4px;
    left: 20px;
    width: 50px;
    height: 50px;
  }
  &--content {
    font-size: 14px;
  }
  &--author {
    font-size: 12px;
    text-align: right;
    margin-right: 180px;
  }
}
</style>
