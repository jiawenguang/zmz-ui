# Textarea 文本输入控件
----
### 基础用法
用于显示多行文本输入展示，```placeholder``` 指定初始输入的提示文案
<div class="demo-block">
<zmz-textarea placeholder="请输入内容"></zmz-textarea>
</div>

::: demo
```html

<zmz-textarea placeholder="请输入内容"></zmz-textarea>

```
:::

### 限制输入字数
maxLen 可以控制用户输入的字符数，```placeholder``` 指定初始输入的提示文案
<div class="demo-block">
<zmz-textarea v-model="content" :max-len="10" placeholder="最多输入10个字符"></zmz-textarea>
</div>

::: demo
```html

<zmz-textarea v-model="content" :max-len="10" placeholder="最多输入10个字符"></zmz-textarea>

```
:::


### 裁剪超出字符
如果超过了限制的字符数，超过部分进行裁剪

<div class="demo-block">
<zmz-textarea :max-len="10" placeholder="最多输入10个字符" is-cut></zmz-textarea>
</div>

::: demo
```html

<zmz-textarea v-model="content" :max-len="10" placeholder="最多输入10个字符" is-cut></zmz-textarea>

```
:::

### 列高
通过 ```rows``` 属性指定```textarea```的高度

<div class="demo-block">
<zmz-textarea :max-len="10" :rows="3" placeholder="最多输入10个字符" is-cut></zmz-textarea>
</div>


:::demo
```html

<zmz-textarea :max-len="10" :rows="3" placeholder="最多输入10个字符" is-cut></zmz-textarea>

```
:::

<script>
export default {
  data() {
    return {
      content: ''
    };
  }
}
</script>


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| rows | 列高 | Number | — | 4 |
| max-len | Number | 最大长度限制 | - | 20 |
| is-cut | 超出字符是否裁剪 | Boolean | — | false |
| placeholder | 输入时需要显示的提示文案 | String | — | 请输入内容 |


## Limit 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| overText | 超出限制长度触发 | content |
|change   | 在 Input 值改变时触发| value |
