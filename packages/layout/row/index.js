/**
 * @author zmz
 * Date: 2019-7-18
 * QQ:1028470211
 * Email:1028470211@qq.com
 */

import ZmzRow from './src/zmz-row';

ZmzRow.install = Vue => function(Vue) {
  Vue.component(ZmzRow.name, ZmzRow);
};

export default ZmzRow;
