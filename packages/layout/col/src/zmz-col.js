/**
 * @author zmz
 * Date: 2019-7-18
 * QQ:1028470211
 * Email:1028470211@qq.com
 */
export default {
  name: 'ZmzCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
		xl: [Number, Object],
  },

  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'ZmzRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  render(h) {
    let classList = [];
    let style = {};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }

    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop]) {
        classList.push(
          prop !== 'span'
            ? `zmz-col-${prop}-${this[prop]}`
            : `zmz-col-${this[prop]}`
        );
      }
    });

    ['xs', 'sm', 'md', 'lg','xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`zmz-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `zmz-col-${size}-${prop}-${props[prop]}`
              : `zmz-col-${size}-${props[prop]}`
          );
        });
      }
    });

    return h(this.tag, {
      class: ['zmz-col', classList],
      style
    }, this.$slots.default);
  }
};
