/**
 * utils.js封装了常用方法，该库用于获取数据类型、数值计算、url参数、UUID等
 */

import utils from 'hey-utils';

const rclass = /[\t\r\n\f]/g;

export default utils.extend({}, utils, {
  getClass(elem) {
    return (elem.getAttribute && elem.getAttribute('class')) || '';
  },
  hasClass(elem, selector) {
    let className;
    className = ` ${selector} `;
    if (elem.nodeType === 1 && (` ${this.getClass(elem)} `)
      .replace(rclass, ' ')
      .indexOf(className) > -1) {
      return true;
    }

    return false;
  }
});
