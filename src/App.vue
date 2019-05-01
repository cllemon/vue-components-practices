<template>
  <div id="app">
    <Header></Header>
    <transition name="el-fade-in"
                mode="out-in">
      <Dashboard></Dashboard>
      <!-- <router-view></router-view> -->
    </transition>
  </div>
</template>

<script>
import Header from './components/header/index';
import Dashboard from './components/dashboard/index';

export default {
  name: 'app',
  components: {
    Dashboard,
    Header,
  },
};
</script>

<style lang="scss">
@import '@/assets/style/index.scss';

#app {
  min-width: 1200px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #fafafa, #fbfbfb);
}
</style>

