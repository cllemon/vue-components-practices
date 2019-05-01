import LiveEditPreview from '@/components/basic-widgets/live-edit-preview.vue';

export default {
  data() {
    return {
      options: {},
      Notification: null,
    };
  },

  methods: {
    async tryIt(operate) {
      if (!this.Notification) {
        this.Notification = this.$notify({
          duration: 0,
          message: await this.handlerMessage(operate),
          customClass: 'notify-code',
          onClose: () => {
            this.Notification = null;
          },
        });
      }
    },

    async handlerMessage(operate) {
      const h = this.$createElement;
      if (operate.value === 'edit') {
        return h(LiveEditPreview, {
          props: {
            value: this.configStr,
          },
          on: {
            input: (val) => {
              this.configStr = val;
            },
          },
        });
      }
      return h('div', {}, [
        h('h3', operate.label),
        h('div', '待更新...做成直接解析 markdown 文档'),
      ]);
    },

    closeNotify() {
      if (this.Notification) {
        this.Notification.close();
      }
    },
  },
};
