import Vue from 'vue';
import Main from './main.vue';
import { PopupManager } from '../../public/popup';
import { isVNode } from '../../public/vdom';
let MessageConstructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 1;

const Message = function(options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let userOnClose = options.onClose;
  let id = 'message_' + seed++;

  options.onClose = function() {
		console.log(id)
		console.log(userOnClose)
    Message.close(id, userOnClose);
  };
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message];
    instance.message = null;
  }
  instance.$mount();
  document.body.appendChild(instance.$el);
	// 偏移量计算
  let verticalOffset = options.offset || 0;
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  verticalOffset += 16;
  instance.verticalOffset = verticalOffset;
	
  instance.visible = true;
	console.log(PopupManager.nextZIndex())
  instance.$el.style.zIndex = PopupManager.nextZIndex();
  instances.push(instance);
	console.log(instance)
  return instance;
};

['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

Message.close = function(id, userOnClose) {
	console.log(id)
  let len = instances.length;
  let index = -1;
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      index = i;
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
			console.log(instances)
      instances.splice(i, 1);
      break;
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return;
  const removedHeight = instances[index].$el.offsetHeight;
  for (let i = index; i < len - 1 ; i++) {
    let dom = instances[i].$el;
    dom.style['top'] =
      parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
  }
};

Message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Message;
