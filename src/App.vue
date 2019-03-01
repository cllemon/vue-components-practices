<template>
  <el-container id="app">
    <el-header class="header">
      <header-tips></header-tips>
    </el-header>
    <el-container class="container">
      <el-aside class="container-aside">
        <menu-bar></menu-bar>
      </el-aside>
      <el-main>
        <transition name="el-fade-in"
                    mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MenuBar from './components/basic-widgets/menu-bar';
import HeaderTips from './components/basic-widgets/header-tips';

export default {
  name: 'app',
  components: {
    MenuBar,
    HeaderTips,
  },
};
</script>

<style lang="scss">
@import '@/assets/style/index.scss';

.header {
  border-bottom: 1px solid #e6e6e6;
}
.container {
  &-aside {
    min-height: 100vh;
    width: 140px !important;
    border-right: 1px solid #e6e6e6;
    /deep/ .el-menu {
      border-right: none;
    }
  }
}
</style>

