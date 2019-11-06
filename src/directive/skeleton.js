import template from './component/template.vue';
import { getStyle, setStyle } from './util';

export default {
  install: (Vue) => {
    const Template = Vue.extend(template);

    const toggle = (el, binding) => {
      if (binding.value) {
        Vue.nextTick(() => {
          const originalPosition = getStyle(el, 'position');
          if (originalPosition !== 'absolute' && originalPosition !== 'fixed') {
            setStyle(el, 'position', 'relative');
          }
          el.appendChild(el.tmpl);
          el.instance.visible = true;
        });
      } else {
        el.instance.visible = false;
      }
    };

    Vue.directive('skeleton', {
      bind: function(el, binding, vnode) {
        const vm = vnode.context;
        const template = vm.$options.components[binding.arg];
        const tmpl = new Template({
          el: document.createElement('div'),
        });
        if (template) {
          tmpl.$slots.default = tmpl.$createElement(template);
        }
        el.instance = tmpl;
        el.tmpl = tmpl.$el;
        binding.value && toggle(el, binding);
      },

      update: function(el, binding) {
        if (binding.oldValue !== binding.value) {
          toggle(el, binding);
        }
      },

      unbind: function(el) {
        el.instance && el.instance.$destroy();
      },
    });
  },
};
