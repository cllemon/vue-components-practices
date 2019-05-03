<template>
  <div class="wraper-item-preview">
    <div class="form-container">
      <Tree :data="area" />
    </div>

    <Operate @operate="tryIt"
             :list="list" />
  </div>
</template>

<script>
import AREA from './area';
import { OPERATE_LIST } from '@/plugins/constance';
import createNotifyElement from '@/mixins/createNotifyElement.js';
import Tree from '../index.vue';

const PATH = 'tree/demo';

export default {
  name: 'tree-structure',

  components: {
    Tree,
  },

  mixins: [createNotifyElement],

  data() {
    return {
      PATH,
      area: AREA,
      list: new Array(OPERATE_LIST[1]),
    };
  },
};
</script>


