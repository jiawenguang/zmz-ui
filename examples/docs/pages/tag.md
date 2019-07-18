
# Tag 标签
----
### 基础用法
由`type`属性来选择tag的类型，也可以通过`color`属性来自定义背景色。

<div class="demo-block">
  <zmz-tag>标签一</zmz-tag>
  <zmz-tag color="success">标签二</zmz-tag>
  <zmz-tag color="confirm">标签三</zmz-tag>
  <zmz-tag color="warning">标签四</zmz-tag>
  <zmz-tag color="error">标签五</zmz-tag>
	<zmz-tag color="info">标签六</zmz-tag>
</div>

::: demo
```html

  <zmz-tag>标签一</zmz-tag>
  <zmz-tag color="success">标签二</zmz-tag>
  <zmz-tag color="confirm">标签三</zmz-tag>
  <zmz-tag color="warning">标签四</zmz-tag>
  <zmz-tag color="error">标签五</zmz-tag>
	<zmz-tag color="info">标签六</zmz-tag>
	
```
:::



### 可移除标签
设置```closable```属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，它接受一个Boolean，true 为关闭。
<div class="demo-block">
<zmz-tag
  :key="index"
  v-for="(tag,index) in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)" :color="tag.color">
  {{tag.name}}
</zmz-tag>
<script>
export default {
    data() {
      return {
        dynamicTags: [{
           name: '标签一',
           color: 'default' 
        }, {
           name: '标签二',
           color: 'success' 
        }, {
           name: '标签三',
           color: 'confirm'           
        }, {
            name: '标签四',
            color: 'warning'
        }, {
            name: '标签五',
            color: 'error'
        }, {
            name: '标签六',
            color: 'info'
        }]
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }
</script>
</div>

::: demo
```html

<zmz-tag
  :key="index"
  v-for="(tag,index) in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)" :color="tag.color">
  {{tag.name}}
</zmz-tag>
<script>
export default {
    data() {
      return {
        dynamicTags: [{
           name: '标签一',
           color: 'default' 
        }, {
           name: '标签二',
           color: 'success' 
        }, {
           name: '标签三',
           color: 'confirm'           
        }, {
            name: '标签四',
            color: 'warning'
        }, {
            name: '标签五',
            color: 'error'
        }]
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }
</script>

```
:::

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 用于触发关闭事件时的回调 | Boolean | — | false |
| color | 类型 | String |  `default`, `success`, `error`, `warning`, `confirm`，`info` | default |
| closable | 是否可关闭 | Boolean | — | false |

## Tag 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| close | 点击关闭按钮时触发 | event |
