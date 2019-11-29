<template>
  <div class="tmpl-first">
    <div class="header">
      <Texts :lines="2" />
    </div>
    <div class="content">
      <div v-for="(item, index) in list" :key="index" class="card">
        <Rectangular :radius="10" style="width: 300px; height: 230px;" />
        <Texts :lines="1" />
      </div>
    </div>
  </div>
</template>

<script>
import Texts from '../component/Texts';
import Rectangular from '../component/Rectangular';

export default {
  components: {
    Texts,
    Rectangular,
  },
  data() {
    return {
      list: new Array(6).fill(''),
    };
  },
};
</script>

<style lang="scss" scoped>
.tmpl-first {
  .header {
    display: flex;
    height: 120px;
  }
  .content {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-left: 20px;
    .card {
      margin: 18px 70px 18px 18px;
      width: 300px;
      height: 240px;
    }
  }
}
</style>
