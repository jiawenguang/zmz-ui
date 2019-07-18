
# Card 标签
----
### 概述
提供card外围轮廓，方便用户搭建自定义页面块布局，将信息编辑到card然后放入指定的位置。

### 基础用法
包含标题 ``header`` ，内容 ``body`` 和操作 ``button或其他``，指定slot为 ``title`` 方可生成 card 的 ``title`` , ``body`` 也可指定slot为 ``body`` 也可忽略不写。

<div class="demo-block">
<zmz-card>
<div slot="title">
<span class="header-title">卡片名称</span>
<span class="header-button">操作按钮</span>
</div>
<div>
<div class="card-item">列表内容一</div>
<div class="card-item">列表内容二</div>
<div class="card-item">列表内容三</div>
<div class="card-item">列表内容四</div>
<div class="card-item">列表内容五</div>
</div>
</zmz-card>
</div>

::: demo
```html

<zmz-card>
  <div slot="title">
    <span class="header-title">卡片名称</span>
    <span class="header-button">操作按钮</span>
  </div>
  <div>
    <div class="card-item">列表内容一</div>
    <div class="card-item">列表内容二</div>
    <div class="card-item">列表内容三</div>
    <div class="card-item">列表内容四</div>
    <div class="card-item">列表内容五</div>
  </div>
</zmz-card>
	
```
:::



### 无title卡片
只显示内容`body`区,可在内容区配置定义更丰富的内容展示。

<div class="demo-block">
<zmz-card>
<div>
<div class="card-item">列表内容一</div>
<div class="card-item">列表内容二</div>
<div class="card-item">列表内容三</div>
<div class="card-item">列表内容四</div>
<div class="card-item">列表内容五</div>
</div>
</zmz-card>
</div>

::: demo
```html


<zmz-card>
  <div>
    <div class="card-item">列表内容一</div>
    <div class="card-item">列表内容二</div>
    <div class="card-item">列表内容三</div>
    <div class="card-item">列表内容四</div>
    <div class="card-item">列表内容五</div>
  </div>
</zmz-card>


```
:::



### 卡片阴影
通过 ``box-shadow`` 属性设置卡片阴影出现的时机：``always``、``hover`` 或 ``never``。

<div class="demo-block">
<div class="demo-card">
<zmz-card box-shadow="always">
<div>
<div class="card-item">总是显示阴影（always）</div>
</div>
</zmz-card>
<zmz-card box-shadow="hover">
<div>
<div class="card-item">鼠标经过显示阴影（hover）</div>
</div>
</zmz-card>
<zmz-card box-shadow="never">
<div>
<div class="card-item">从不显示阴影（never）</div>
</div>
</zmz-card>
</div>
</div>

::: demo
```html


<zmz-card box-shadow="always">
  <div>
    <div class="card-item">总是显示阴影（always）</div>
  </div>
</zmz-card>
<zmz-card box-shadow="hover">
  <div>
    <div class="card-item">鼠标经过显示阴影（hover）</div>
  </div>
</zmz-card>
<zmz-card box-shadow="never">
  <div>
    <div class="card-item">从不显示阴影（never）</div>
  </div>
</zmz-card>


```
:::



## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| box-shadow | 是否显示阴影 | String | ``always`` , ``hover`` , ``never`` | always |
| slot | 标题插槽 | String |  title | — |


