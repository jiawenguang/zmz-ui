
# Pagination 标签
----
### 概述
当展示列表数据过多时，可以使用分页分解数据看一页展示一页。

### 基础用法

<div class="demo-block">
<zmz-pagination  :total="100" :page-num="10" :hidden-paging="true" :page-folding="5" :current-page="3"></zmz-pagination>
</div>

::: demo
```html

<zmz-pagination  
  :total="100" 
  :page-num="10" 
  :hidden-paging="true" 
  :page-folding="5" 
  :current-page="3"></zmz-pagination>
	
```
:::



### 带颜色的分页
设置 ``background`` 属性可以为分页按钮添加背景色。

<div class="demo-block">
<zmz-pagination  :total="100" :page-num="10" :hidden-paging="true" :page-folding="5" :current-page="3" background></zmz-pagination>
</div>

::: demo
```html


<zmz-pagination  
  :total="100" 
  :page-num="10" 
  :hidden-paging="true" 
  :page-folding="5" 
  current-page="3" 
  background></zmz-pagination>


```
:::





## Attribute

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| total | 分页总数量 | Number | — | 0 |
| page-num | 每页显示条数 | Number | — | 10 |
| current-page | 初始化选中页码 | Number | — | 1 |
| page-folding | 分页过多折叠 | Number | — | 5个以上(视情况而) |
| hidden-paging | 只有一页时是否隐藏分页 | boolean | false/true | true |
| background | 分页背景颜色 | boolean |  false/true | — | false

## Events

| 事件名称      | 说明          |回调参数     |
|---------- |-------------- |---------- |
| pagechange | pageSize 改变时会触发 | 每页条数 |
