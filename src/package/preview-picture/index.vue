<template>
  <div class="flow-app"
       style="position: relative;">
    <transition name="preview-image-fade"
                @after-leave="handleAfterLeave">
      <div v-show="visible"
           class="preview-image">
        <!-- 显示区域 -->
        <section class="image-content"
                 @click.self="close">
          <i v-show="!single"
             class="el-icon-arrow-left image-content-arrow"
             @click="switchPre" />
          <img class="image-content-show"
               :src="imageUrlList[currentIndex]">
          <i v-show="!single"
             class="el-icon-arrow-right image-content-arrow"
             @click="switchNext" />
        </section>

        <!-- 缩略图展示面板 -->
        <section class="image-thumbnail-panel"
                 @click.self="close">
          <template v-for="(imageUrl, index) in imageUrlList">
            <img :key="index"
                 class="thumbnail-panel-img"
                 :class="{ 'thumbnail-panel-img__active': currentIndex === index }"
                 :src="imageUrl"
                 @click="showSelectedImage(index)">
          </template>
        </section>

        <!-- 关闭按钮 -->
        <i class="iconfont icon-shanchu image-close-btn"
           @click="close" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      imageUrlList: [],
      currentIndex: 0,
      closed: false,
      onClose: null,
    };
  },

  computed: {
    single() {
      return this.imageUrlList.length <= 1;
    },
  },

  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      }
    },
  },

  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },

    close() {
      this.closed = true;
    },

    switchPre() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },

    switchNext() {
      if (this.currentIndex < this.imageUrlList.length - 1) {
        this.currentIndex += 1;
      }
    },

    showSelectedImage(index) {
      if (index >= 0 && index <= this.imageUrlList.length - 1) {
        this.currentIndex = index;
      }
    },
  },
};
</script>

<style lang="scss">
.preview-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.88);

  .image-content {
    position: relative;
    width: 100vw;
    height: 100vh;

    .image-content-show {
      max-width: 60vw;
      max-height: 60vh;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #000;
    }

    .image-content-arrow {
      color: #fff;
      opacity: 0.5;
      position: absolute;
      top: 40vh;
      font-size: 70px;
      cursor: pointer;

      &.el-icon-arrow-left {
        left: 40px;
      }

      &.el-icon-arrow-right {
        right: 40px;
      }
    }
  }

  .image-thumbnail-panel {
    position: absolute;
    left: 30vh;
    bottom: 4vh;
    width: 70vw;
    height: 12vh;
    line-height: 12vh;
    display: inline-block;
    border-bottom: 2px solid #eee;

    .thumbnail-panel-img {
      width: 8vh;
      height: 8vh;
      margin-left: 10px;
      margin-right: 10px;
      vertical-align: middle;
    }

    .thumbnail-panel-img__active {
      border: 2px solid #fff;
    }
  }

  .image-close-btn {
    font-size: 20px;
    position: absolute;
    top: 10px;
    right: 15px;
    color: #fff;
    padding: 20px;
    cursor: pointer;
  }
}
</style>
