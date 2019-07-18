
# InputTag 标签
----
### 概述
利用input框输入生成tag标签选择。
### 基础用法
通过 ``tag-array`` 传入数组或者输入生成tag标签。

<div class="demo-block">
  <zmz-input-tag :tag-array="tag1"></zmz-input-tag>
  <script>
  export default {
      data() {
        return {
          tag1: [{
             text: '标签一',
             id: '1' 
          }, {
             text: '标签二',
             id: '2' 
          }, {
             text: '标签三',
             id: '3'           
          }, {
              text: '标签四',
              id: '4'
          }, {
              text: '标签五',
              id: '5'
          }, {
              text: '标签六',
              id: '6'
          }],
          tag2: [{
             text: '标签一',
             id: '1' 
          }, {
             text: '标签二',
             id: '2' 
          }, {
             text: '标签三',
             id: '3'           
          }, {
              text: '标签四',
              id: '4'
          }, {
              text: '标签五',
              id: '5'
          }, {
              text: '标签六',
              id: '6'
          }],
          tag3: [{
             text: '标签一',
             id: '1' 
          }, {
             text: '标签二',
             id: '2' 
          }, {
             text: '标签三',
             id: '3'           
          }, {
              text: '标签四',
              id: '4'
          }, {
              text: '标签五',
              id: '5'
          }, {
              text: '标签六',
              id: '6'
          }],
          tag4: [{
             text: '标签一',
             id: '1' 
          }, {
             text: '标签二',
             id: '2' 
          }, {
             text: '标签三',
             id: '3'           
          }, {
              text: '标签四',
              id: '4'
          }, {
              text: '标签五',
              id: '5'
          }, {
              text: '标签六',
              id: '6'
          }]
        };
      },
      methods: {
        addTags(value){
          alert("当前添加："+value.text+"===="+value.id)
        },
        deleteTag(value){
          alert("当前删除："+value.text+"===="+value.id)
        },
      }
    }
  </script>
</div>

::: demo
```html

<zmz-input-tag :tag-array="tag1"></zmz-input-tag>
	
```
:::

### 限制输入
通过 ``tag-length`` 限制输入个数，最小1

<div class="demo-block">
  <zmz-input-tag :tag-array="tag2" @addTag="addTags" :tag-length="3"></zmz-input-tag>
</div>

::: demo
```html

<zmz-input-tag :tag-array="tag2" @addTag="addTags" :tag-length="3"></zmz-input-tag>
	
```
:::

### 禁用输入
通过 ``disabled`` 禁止输入

<div class="demo-block">
  <zmz-input-tag :tag-array="tag3" @addTag="addTags" :tag-length="3" :disabled="true"></zmz-input-tag>
</div>

::: demo
```html

<zmz-input-tag :tag-array="tag3" @addTag="addTags" :tag-length="3"></zmz-input-tag>
	
```
:::

### 回调用法
通过 ``@事件="方法"`` 来处理参数回调。

<div class="demo-block">
  <zmz-input-tag :tag-array="tag4" @addTag="addTags" @deleteTag="deleteTag" ></zmz-input-tag>
</div>

::: demo
```html

<zmz-input-tag :tag-array="tag4" @addTag="addTags" @deleteTag="deleteTag" ></zmz-input-tag>
	
```
:::

## InputTag Attribute

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |示例|
|---------- |-------------- |---------- |--------------------------------  |-------- |----|
| tag-array | 传入的数组用于生成默认标签 | Array | — | — |``[{text:"标签一"，id:0}]``|
| disabled | 是否禁用 | Boolean |  true/false | false |— |
| tag-length | 允许输入的个数 | Number | — | 大于0 |— |

## InputTag Event

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| addTag | 添加事件或失去焦点事件 | object |
| inputFocus | 获取焦点事件 | — |
| deleteTag | 删除标签事件 | object |
