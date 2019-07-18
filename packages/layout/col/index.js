/**
 * @author zmz
 * Date: 2019-7-18
 * QQ:1028470211
 * Email:1028470211@qq.com
 */

import ZmzCol from './src/zmz-col';

ZmzCol.install = Vue => function(Vue) {
  Vue.component(ZmzCol.name, ZmzCol);
};

export default ZmzCol;
