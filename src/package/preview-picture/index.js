import Vue from 'vue';
import previewImageComponent from './index.vue';

const Preview = Vue.extend(previewImageComponent);

let instance;
let instances = [];
let seed = 1;

const previewImage = (list, index) => {
  let imageUrlList = [];
  if (Array.isArray(list)) {
    imageUrlList = list;
  } else {
    imageUrlList.push(list);
  }
  let options = {
    imageUrlList: imageUrlList,
    currentIndex: index,
  };

  let userOnClose = options.onClose;
  let id = 'message_' + (seed += 1);

  options.onClose = function() {
    previewImage.close(id, userOnClose);
  };

  instance = new Preview({
    data: options,
  });

  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = 3000;
  instances.push(instance);
  return instance.vm;
};

previewImage.close = function(id, userOnClose) {
  for (let i = 0; i < instances.length; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

export default previewImage;
