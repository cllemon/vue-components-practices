<template>
  <!-- v-loading="loading" -->
  <section class="dashboard"
           v-skeleton:TmplFirst="loading">
    <Classification :list="classification"
                    @pull="onPull" />
    <block-panel v-model="blocks"
                 @blockPreview="onBlockPreview" />
    <preview-panel ref="preview" />
  </section>
</template>

<script>
import Classification from '../classification/index.vue';
import BlockPanel from '../block-panel/index.vue';
import PreviewPanel from '../preview-panel/index';
import { getList } from '../../mock/index.js';
import TmplFirst from '../../directive/examples/tmpl-first';

export default {
  components: {
    Classification,
    BlockPanel,
    PreviewPanel,
    TmplFirst,
  },

  data() {
    return {
      loading: false,
      classification: [],
      blocks: [],
    };
  },

  async created() {
    try {
      this.loading = true;
      const list = await getList();
      this.classification = list;
      this.blocks = list[0].children;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  },

  methods: {
    onPull(data) {
      this.blocks = data;
    },

    onBlockPreview(item) {
      this.$refs.preview.showPreview(item);
    },
  },
};
</script>


<style lang="scss" scoped>
.dashboard {
  min-width: 900px;
  margin: 0 120px;
  height: 100%;
}
</style>

