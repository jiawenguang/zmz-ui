# Breadcrumb 面包屑
----
用于页面中展示重要的提示信息。

### 基本用法
网站路径基本用法，帮助浏览者告知当前位置
<div class="dome-alert demo-block">
<zmz-breadcrumb segmenter="/">
<zmz-breadcrumb-item>首页</zmz-breadcrumb-item>
<zmz-breadcrumb-item>内容页</zmz-breadcrumb-item>
<zmz-breadcrumb-item>详情</zmz-breadcrumb-item>
</zmz-breadcrumb>
</div>

::: demo
```html

<div>
  <zmz-breadcrumb segmenter="/">
    <zmz-breadcrumb-item>首页</zmz-breadcrumb-item>
    <zmz-breadcrumb-item>内容页</zmz-breadcrumb-item>
    <zmz-breadcrumb-item>详情</zmz-breadcrumb-item>
  </zmz-breadcrumb>
</div>

```
:::

### icon分割符
表示某种状态时提升可读性。
<div class="dome-alert demo-block">
<zmz-breadcrumb segmenter-icon="zmz-icon-arrow-r-f">
<zmz-breadcrumb-item><a href="">首页</a></zmz-breadcrumb-item>
<zmz-breadcrumb-item><a href="">内容页</a></zmz-breadcrumb-item>
<zmz-breadcrumb-item><a href="">详情</a></zmz-breadcrumb-item>
</zmz-breadcrumb>
</div>

::: demo
```html

<div>
  <zmz-breadcrumb segmenter-icon="zmz-icon-arrow-r-f">
    <zmz-breadcrumb-item><a href="">首页</a></zmz-breadcrumb-item>
    <zmz-breadcrumb-item><a href="">内容页</a></zmz-breadcrumb-item>
    <zmz-breadcrumb-item><a href="">详情</a></zmz-breadcrumb-item>
  </zmz-breadcrumb>
</div>

```
:::

### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|segmenter	      | 分割符                                |	string    |	—|	斜杠'/' |
|segmenter-icon      |	图标分割符 |	string   |	icon图标           |	—       |

