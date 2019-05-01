export const executeFunctionBlock = (block) => {
  const func = `return ${block}`;
  return new Function(func)();
};

export const registeredComponent = (Vue, components) => {
  for (const key in components) {
    Vue.use({
      install(Vue) {
        Vue.component(key, components[key]);
      },
    });
  }
};
