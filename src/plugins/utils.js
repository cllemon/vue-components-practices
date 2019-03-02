export const executeFunctionBlock = (block) => {
  const func = `return ${block}`;
  return new Function(func)();
};
