// import 'highlight.js/styles/monokai.css';
// import 'highlight.js/styles/solarized-light.css';
import 'highlight.js/styles/solarized-dark.css';
import LiveEditPreview from '@/components/basic-widgets/live-edit-preview.vue';

export default {
  data() {
    return {
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
      //变更目录及例子与组件命名不统一故注释掉
      // `@/package/${this.$options._componentTag}/demo/${operate.value}.md`
      const module = await import(`@/package/${this.PATH}/${operate.value}.md`);
      return h(module.default);
    },

    closeNotify() {
      if (this.Notification) {
        this.Notification.close();
      }
    },
  },
};
