<template>
  <div class="header">
    <section class="header__nav">
      <div class="nav__title">
        <img alt="Vue logo"
             class="title__icon"
             src="../../assets/images/logo.png">
        <span class="title__text">Component Practice</span>
      </div>
      <div class="nav__content">
        <a :href="url"
           class="content__github">
          <img alt="Vue logo"
               class="content__icon"
               src="../../assets/images/github.png">
        </a>
      </div>
    </section>
    <section class="header__bar">
      <div class="bar__tips">
        <h1 class="bar__tips--h1"
            v-text="title" />
        <span class="bar__tips--h4"
              v-text="tips" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Vue 通用组件集合',
    },
    tips: {
      type: String,
      default: '基于 vue 框架封装的组件集合, 减少重复的开发， 提升开发效率, 快速组合搭建应用',
    },
  },
  data() {
    return {
      url: 'https://github.com/cllemon',
    };
  },
};
// Some practices based on vue are configured to generate components that are satisfied with the relevant business scenarios.
// mr.lenmon
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
.header {
  background-color: white;
  &__nav {
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    .nav__title {
      display: flex;
      .title__icon {
        width: 25px;
        height: 25px;
        margin: 0 6px;
      }
      .title__text {
        color: #9e9e9e;
        font-size: 16;
        font-weight: 700;
      }
    }
    .nav__content {
      .content__github {
      }
      .content__icon {
        width: 30px;
        height: 30px;
        color: #9e9e9e;
        animation: rotating 10s linear infinite;
      }
    }
  }
  &__bar {
    width: 100%;
    height: 380px;
    background-color: #6875e9;
    background: url('../../assets/images/bg-tab.png') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .bar__tips {
      position: relative;
      color: white;
      &--h1 {
        font-size: 42px;
        text-align: center;
        margin-top: 0;
      }
    }
  }
}
</style>

