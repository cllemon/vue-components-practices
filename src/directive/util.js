
/**
 * Camelize a hyphen-delimited string.
 * 将中横线转驼峰 ✅
 */
const camelizeRE = /-(\w)/g
export const camelize = (str) =>
  str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))


export const getStyle = (element, styleName) => {
  if (!element || !styleName) return null;
  styleName = camelize(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
}

export const setStyle = (element, styleName, value) => {
  if (!element || !styleName) return;
  if (typeof styleName === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelize(styleName);
    element.style[styleName] = value;
  }
};
