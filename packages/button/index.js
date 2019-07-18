/**
 * @author zmz
 * Date: 2019-7-18
 * QQ:1028470211
 * Email:1028470211@qq.com
 */

import ZmzButon from './src/zmz-button';

ZmzButon.install = Vue => function(Vue) {
  Vue.component(ZmzButon.name, ZmzButon);
};

export default ZmzButon;
