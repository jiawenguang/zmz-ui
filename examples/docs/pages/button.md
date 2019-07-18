
# Button 按钮
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。

<div class="demo-block">
  <div class="demo-button">
    <zmz-button :active="true" >默认按钮</zmz-button>
		<zmz-button type="info" :active="true" >普通按钮</zmz-button>
    <zmz-button type="confirm" :active="true" >确定按钮</zmz-button>
    <zmz-button type="success" :active="true" >成功按钮</zmz-button>
    <zmz-button type="warning" :active="true" >警告按钮</zmz-button>
    <zmz-button type="error"  :active="true" >错误按钮</zmz-button>
  </div>
  <div class="demo-button">
    <zmz-button :round="true">默认按钮</zmz-button>
		<zmz-button type="info" :round="true" >普通按钮</zmz-button>
    <zmz-button type="confirm" :round="true" >确定按钮</zmz-button>
    <zmz-button type="success" :round="true" >成功按钮</zmz-button>
    <zmz-button type="warning" :round="true" >警告按钮</zmz-button>
    <zmz-button type="error" :round="true" >错误按钮</zmz-button>
  </div>
  <div class="demo-button">
    <zmz-button :plain="true" >默认按钮</zmz-button>
    <zmz-button type="info" :plain="true" >普通按钮</zmz-button>
		<zmz-button type="confirm" :plain="true" >普通按钮</zmz-button>
    <zmz-button type="success" :plain="true" >成功按钮</zmz-button>
    <zmz-button type="warning" :plain="true" >警告按钮</zmz-button>
    <zmz-button type="error" :plain="true" >错误按钮</zmz-button>
  </div>
</div>

::: demo
```html

<div>
  <zmz-button :active="true" >默认按钮</zmz-button>
  <zmz-button type="info" :active="true" >普通按钮</zmz-button>
  <zmz-button type="confirm" :active="true" >确定按钮</zmz-button>
  <zmz-button type="success" :active="true" >成功按钮</zmz-button>
  <zmz-button type="warning" :active="true" >警告按钮</zmz-button>
  <zmz-button type="error"  :active="true" >错误按钮</zmz-button>
</div>
<div>
  <zmz-button :round="true">默认按钮</zmz-button>
  <zmz-button type="info" :round="true" >普通按钮</zmz-button>
  <zmz-button type="confirm" :round="true" >确定按钮</zmz-button>
  <zmz-button type="success" :round="true" >成功按钮</zmz-button>
  <zmz-button type="warning" :round="true" >警告按钮</zmz-button>
  <zmz-button type="error" :round="true" >错误按钮</zmz-button>
</div>
<div>
  <zmz-button :plain="true">默认按钮</zmz-button>
  <zmz-button type="info" :plain="true" >普通按钮</zmz-button>
  <zmz-button type="confirm" :plain="true" >确定按钮</zmz-button>
  <zmz-button type="success" :plain="true" >成功按钮</zmz-button>
  <zmz-button type="warning" :plain="true" >警告按钮</zmz-button>
  <zmz-button type="error" :plain="true" >错误按钮</zmz-button>
</div>

```
:::

### 禁用状态

按钮不可用状态。

<div class="demo-block">
  <div class="demo-button">
    <zmz-button :disabled="true" :active="true" >默认按钮</zmz-button>
		<zmz-button :disabled="true" type="info" :active="true" >普通按钮</zmz-button>
    <zmz-button :disabled="true" type="confirm" :active="true" >确定按钮</zmz-button>
    <zmz-button :disabled="true" type="success" :active="true" >成功按钮</zmz-button>
    <zmz-button :disabled="true" type="warning" :active="true" >警告按钮</zmz-button>
    <zmz-button :disabled="true" type="error"  :active="true" >错误按钮</zmz-button>
  </div>
  <div class="demo-button">
    <zmz-button :disabled="true" :round="true">默认按钮</zmz-button>
		<zmz-button :disabled="true" type="info" :round="true" >普通按钮</zmz-button>
    <zmz-button :disabled="true" type="confirm" :round="true" >确定按钮</zmz-button>
    <zmz-button :disabled="true" type="success" :round="true" >成功按钮</zmz-button>
    <zmz-button :disabled="true" type="warning" :round="true" >警告按钮</zmz-button>
    <zmz-button :disabled="true" type="error" :round="true" >错误按钮</zmz-button>
  </div>
  <div class="demo-button">
    <zmz-button :disabled="true" :plain="true" >默认按钮</zmz-button>
		<zmz-button :disabled="true" type="info" :plain="true" >普通按钮</zmz-button>
    <zmz-button :disabled="true" type="confirm" :plain="true" >确定按钮</zmz-button>
    <zmz-button :disabled="true" type="success" :plain="true" >成功按钮</zmz-button>
    <zmz-button :disabled="true" type="warning" :plain="true" >警告按钮</zmz-button>
    <zmz-button :disabled="true" type="error" :plain="true" >错误按钮</zmz-button>
  </div>
</div>

::: demo
```html

<div>
  <zmz-button :disabled="true" :active="true" >默认按钮</zmz-button>
  <zmz-button :disabled="true" type="info" :active="true" >普通按钮</zmz-button>
  <zmz-button :disabled="true" type="confirm" :active="true" >确定按钮</zmz-button>
  <zmz-button :disabled="true" type="success" :active="true" >成功按钮</zmz-button>
  <zmz-button :disabled="true" type="warning" :active="true" >警告按钮</zmz-button>
  <zmz-button :disabled="true" type="error"  :active="true" >错误按钮</zmz-button>
</div>
<div>
  <zmz-button :disabled="true" :round="true">默认按钮</zmz-button>
  <zmz-button :disabled="true" type="info" :active="true" >普通按钮</zmz-button>
  <zmz-button :disabled="true" type="confirm" :round="true" >确定按钮</zmz-button>
  <zmz-button :disabled="true" type="success" :round="true" >成功按钮</zmz-button>
  <zmz-button :disabled="true" type="warning" :round="true" >警告按钮</zmz-button>
  <zmz-button :disabled="true" type="error" :round="true" >错误按钮</zmz-button>
</div>
<div>
  <zmz-button :disabled="true" :plain="true" >默认按钮</zmz-button>
  <zmz-button :disabled="true" type="info" :active="true" >普通按钮</zmz-button>
  <zmz-button :disabled="true" type="confirm" :plain="true" >确定按钮</zmz-button>
  <zmz-button :disabled="true" type="success" :plain="true" >成功按钮</zmz-button>
  <zmz-button :disabled="true" type="warning" :plain="true" >警告按钮</zmz-button>
  <zmz-button :disabled="true" type="error" :plain="true" >错误按钮</zmz-button>
</div>
  
```
:::

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
设置```icon```属性即可，icon 的列表可以参考 VV-UI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用```i```标签即可，可以使用自定义图标,也可以自己定义图标的使用。
<div class="demo-block">
	<div class="demo-button">
	  <zmz-button type="confirm" icon='zmz-icon-tag'></zmz-button>
		<zmz-button type="confirm" icon='zmz-icon-close'></zmz-button>
	  <zmz-button type="confirm" icon='zmz-icon-zfb-t'></zmz-button>
	  <zmz-button type="confirm" icon='zmz-icon-search'>搜索</zmz-button>
	  <zmz-button type="confirm" icon='zmz-icon-download'>下载</zmz-button>
		<zmz-button type="confirm"><i class="zmz-icon-comments"></i> 消息</zmz-button>
		<zmz-button type="confirm">空</zmz-button>
	</div>
</div>

::: demo
```html

<div>
  <zmz-button type="confirm" icon='w-icon-tag'></zmz-button>
  <zmz-button type="confirm" icon='w-icon-close'></zmz-button>
  <zmz-button type="confirm" icon='w-icon-smile'></zmz-button>
  <zmz-button type="confirm" icon='w-icon-search'>搜索</zmz-button>
  <zmz-button type="confirm" icon='w-icon-cloudfill'>下载</zmz-button>
  <zmz-button type="confirm"><i class="w-icon-comments"></i> 消息</zmz-button>
</div>

```
:::


### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。
<div class="demo-block">
	<div class="demo-button">
    <zmz-button>默认尺寸</zmz-button>
    <zmz-button size="medium">中等按钮</zmz-button>
    <zmz-button size="small">小型按钮</zmz-button>
	</div>
</div>

::: demo
```html

<div>
  <zmz-button>默认尺寸</zmz-button>
  <zmz-button size="medium">中等按钮</zmz-button>
  <zmz-button size="small">小型按钮</zmz-button>
</div>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   `default`,`medium`,`small`            |    default    |
| type     | 类型   | string    |   `default`, `success`, `error`, `warning`, `confirm`，`info` |     default    |
| plain     | 是否朴素按钮   | Boolean    | true,false | false   |
| disabled  | 是否禁用状态    | boolean   | true,false   | false   |
| round  | 是否圆角按钮    | boolean   | true,false   | false   |
| autofocus  | 	是否默认聚焦    | boolean   | true,false   | false   |
| active  | 	是否激活按钮    | boolean   | true,false   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
