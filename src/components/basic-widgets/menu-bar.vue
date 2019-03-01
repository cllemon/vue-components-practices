<template>
  <div class="menu-bar">
    <el-menu :default-active="defaultActive"
             router>
      <template v-for="(menu, index) in menuList">
        <el-menu-item :key="index"
                      :index="menu.value">
          <i :class="`el-icon-${menu.icon}`"></i>
          <span slot="title">{{ menu.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          label: '简介',
          value: 'home',
          icon: 'setting',
        },
        {
          label: '表单配置',
          value: 'form',
          icon: 'document',
        },
        {
          label: '表格配置',
          value: 'table',
          icon: 'menu',
        },
      ],
      defaultActive: this.$route.name,
    };
  },

  watch: {
    $route(to) {
      this.defaultActive = to.name;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
