import { classification } from './data';

const getClassification = () => {
  const list = [];
  classification.forEach((item) => {
    list.push(...item.children);
  });
  classification.unshift({
    label: '全部',
    value: 'all',
    children: list,
  });
  return classification;
};

export const getList = () => {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved(getClassification());
    }, 2000);
  });
};
