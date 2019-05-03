<template>
  <div class="wraper-item-preview">
    <div class="form-container">
      <section style="display: 'flex';">
        <img v-for="(url, index) in imageList"
             :key="index"
             style="width: 130px; height: 160px; padding: 5px;"
             :src="url"
             @click="showSelectedImage(index)">
      </section>
    </div>

    <Operate @operate="tryIt"
             :list="list" />
  </div>
</template>

<script>
import { OPERATE_LIST } from '@/plugins/constance';
import createNotifyElement from '@/mixins/createNotifyElement.js';
import IMAGE_LIST from './db.js';
import previewPicture from '../index.js';

const PATH = 'preview-picture/demo';

export default {
  name: 'preview-picture',

  mixins: [createNotifyElement],

  data() {
    return {
      PATH,
      list: new Array(OPERATE_LIST[1]),
      imageList: IMAGE_LIST,
    };
  },

  methods: {
    showSelectedImage(index) {
      previewPicture(this.imageList, index);
    },
  },
};
</script>

