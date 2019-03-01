

  <template>
  <div class="home">
    <section class="show-wraper-item">
      <div class="wraper-item-tips">
        <h2>简介</h2>
        <div class="wraper-item-tips--content">
          阐述以Vue为技术栈，封装过的一些组件，主要为了加快业务开发效率。
        </div>
      </div>
    </section>

    <section class="show-wraper-item">
      <div class="wraper-item-tips">
        <h3 @click="form">表单</h3>
        <div class="wraper-item-tips--content">
          主要是以 element-UI => el-form 为基础，封装的一套可配置化生成表单。
        </div>
        <div class="wraper-item-tips--content">
          <h5>封装初衷：</h5>
          <ul>
            <li>1. 项目中脱离了大量重复的代码块，如：大量标签元素（但 同时也失去了一些灵活性，就目前实践来看满足我们的业务完全足够我们认为是可取的！）</li>
            <li>2. 提高了开发效率，如：直接引用相关配置，改起来也很爽🤗</li>
            <li>3. 复杂模块单独分离。</li>
            <li>4. 灵活度相较 el-form 标签写法有所欠缺。</li>
          </ul>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'home',

  methods: {
    form() {
      this.$router.push({
        name: 'form',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 80vh;
}
</style>

