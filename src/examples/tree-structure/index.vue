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

export default {
  mixins: [createNotifyElement],

  data() {
    return {
      area: AREA,
      list: new Array(OPERATE_LIST[1]),
    };
  },
};
</script>


