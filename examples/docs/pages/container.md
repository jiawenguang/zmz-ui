# Contaciner 布局容器
----
### 概述
以上组件采用了div+h5元素布局，使用前请确定使用的浏览器环境。此外，```<zmz-container>``` 的子元素可以是除 ```<zmz-container>``` 后面的元素，为了规范布局父元素也只能是 ```<zmz-container>```。。
### 基本结构
用于布局的容器组件，方便快速搭建页面的基本结构：  
		 ```<zmz-container>``` ：外层容器。  
		 ```<zmz-header>``` ：头部容器。  
		 ```<zmz-nav>``` ：导航栏容器。  
		 ```<zmz-aside>``` ：侧边栏容器。  
		 ```<zmz-main>``` ：主区域容器。  
		 ```<zmz-section>``` ：区域容器。  
		 ```<zmz-dialog>``` ：对话框容器。  
		 ```<zmz-footer>``` ：底部容器。  
### 基础布局
<div class="demo-block">
	<div class="demo-example-box">
		 <zmz-container>
				<zmz-header :default-style='true'>Header</zmz-header>
				<zmz-main :default-style='true'>Main</zmz-main>
		 </zmz-container>
		 <zmz-container>
				<zmz-header :default-style='true'>Header</zmz-header>
				<zmz-main :default-style='true'>Main</zmz-main>
				<zmz-footer :default-style='true'>Footer</zmz-footer>
		 </zmz-container>
		 <zmz-container>
				<zmz-header :default-style='true'>Header</zmz-header>
				<zmz-main>
						 <zmz-aside :default-style='true' style="width:30%;float:left;height:300px;line-height:300px">Aside</zmz-aside>
						 <zmz-main :default-style='true' style="width:70%;float:right;">Main</zmz-main>
				</zmz-main>
				<zmz-footer :default-style='true'>Footer</zmz-footer>
		 </zmz-container>
		 <zmz-container>
				<zmz-main>
						 <zmz-aside :default-style='true' style="line-height:60px;">Aside</zmz-aside>
						 <zmz-main :default-style='true' style="line-height:240px;height:240px;">Main</zmz-main>
				</zmz-main>
		 </zmz-container>
		 <zmz-container>
				<zmz-header :default-style='true'>Header</zmz-header>
				<zmz-main>
						 <zmz-aside :default-style='true' style="width:30%;float:left;height:300px;line-height:300px">Aside</zmz-aside>
						 <zmz-main :default-style='true' style="width:70%;float:right;">Main</zmz-main>
				</zmz-main>
		 </zmz-container>
		 <zmz-container>
				<zmz-main>
						 <zmz-aside :default-style='true' style="float:left;width:30%;height:300px;line-height:300px;">Aside</zmz-aside>
						 <zmz-section :default-style='true' style="float:left;width:70%;height:300px;line-height:300px;">
							 <zmz-header :default-style='true'>Header</zmz-header>
							 <zmz-main :default-style='true' style="height:240px;line-height:240px;">Main</zmz-main>
						 </zmz-section>
				</zmz-main>
		 </zmz-container>
		 <zmz-container>
				<zmz-main>
						 <zmz-aside :default-style='true' style="float:left;width:30%;height:300px;line-height:300px;">Aside</zmz-aside>
						 <zmz-section :default-style='true' style="float:left;width:70%;">
							 <zmz-header :default-style='true'>Header</zmz-header>
							 <zmz-main :default-style='true' style="height: 180px;">Main</zmz-main>
							 <zmz-footer :default-style='true'>Footer</zmz-footer>
						 </zmz-section>
				</zmz-main>
		 </zmz-container>
		 <zmz-container>
				<zmz-main class="zmz-ar">
						 <zmz-aside :default-style='true' style="width: 30%;float: left;;line-height:300px;height:300px">Aside</zmz-aside>
						 <zmz-main :default-style='true' style="width: 40%;float: left;;line-height:300px;height:300px">Main</zmz-main>
						 <zmz-aside :default-style='true' style="width: 30%;float: right;;line-height:300px;height:300px">Aside</zmz-aside>
				</zmz-main>
		 </zmz-container>
		 <zmz-container>
			 <zmz-header :default-style='true'>Header</zmz-header>
				<zmz-main class="zmz-ar">
						 <zmz-aside :default-style='true' style="width: 30%;float: left;line-height:300px;height:300px">Aside</zmz-aside>
						 <zmz-main :default-style='true' style="width: 40%;float: left;">Main</zmz-main>
						 <zmz-aside :default-style='true' style="width: 30%;float: right;line-height:300px;height:300px">Aside</zmz-aside>
				</zmz-main>
		 </zmz-container>
	</div>
</div>

::: demo
```html

<zmz-container>
  <zmz-header :default-style='true'>Header</zmz-header>  
  <zmz-main :default-style='true'>Main</zmz-main>  
</zmz-container>
<zmz-container>
  <zmz-header :default-style='true'>Header</zmz-header>
  <zmz-main :default-style='true'>Main</zmz-main>
  <zmz-footer :default-style='true'>Footer</zmz-footer>
</zmz-container>
<zmz-container>
  <zmz-header :default-style='true'>Header</zmz-header>
  <zmz-main>
    <zmz-aside :default-style='true' style="width:30%;float:left;height:300px;line-height:300px">Aside</zmz-aside>
    <zmz-main :default-style='true' style="width:70%;float:right;">Main</zmz-main>
  </zmz-main>
  <zmz-footer :default-style='true'>Footer</zmz-footer>
</zmz-container>
<zmz-container>
  <zmz-main>
    <zmz-aside :default-style='true' style="line-height:60px;">Aside</zmz-aside>
    <zmz-main :default-style='true' style="line-height:240px;height:240px;">Main</zmz-main>
  </zmz-main>
</zmz-container>
<zmz-container>
  <zmz-header :default-style='true'>Header</zmz-header>
  <zmz-main>
    <zmz-aside :default-style='true' style="width:30%;float:left;height:300px;line-height:300px">Aside</zmz-aside>
    <zmz-main :default-style='true' style="width:70%;float:right;">Main</zmz-main>
  </zmz-main>
</zmz-container>
<zmz-container>
  <zmz-main>
    <zmz-aside :default-style='true' style="float:left;width:30%;height:300px;line-height:300px;">Aside</zmz-aside>
    <zmz-section :default-style='true' style="float:left;width:70%;height:300px;line-height:300px;">
      <zmz-header :default-style='true'>Header</zmz-header>
      <zmz-main :default-style='true' style="height:240px;line-height:240px;">Main</zmz-main>
    </zmz-section>
  </zmz-main>
</zmz-container>
<zmz-container>
  <zmz-main>
    <zmz-aside :default-style='true' style="float:left;width:30%;height:300px;line-height:300px;">Aside</zmz-aside>
    <zmz-section :default-style='true' style="float:left;width:70%;">
      <zmz-header :default-style='true'>Header</zmz-header>
      <zmz-main :default-style='true' style="height: 180px;">Main</zmz-main>
      <zmz-footer :default-style='true'>Footer</zmz-footer>
    </zmz-section>
  </zmz-main>
</zmz-container>
<zmz-container>
  <zmz-main class="zmz-ar">
    <zmz-aside :default-style='true' style="width: 30%;float: left;;line-height:300px;height:300px">Aside</zmz-aside>
    <zmz-main :default-style='true' style="width: 40%;float: left;;line-height:300px;height:300px">Main</zmz-main>
    <zmz-aside :default-style='true' style="width: 30%;float: right;;line-height:300px;height:300px">Aside</zmz-aside>
  </zmz-main>
</zmz-container>
<zmz-container>
  <zmz-header :default-style='true'>Header</zmz-header>
  <zmz-main class="zmz-ar">
    <zmz-aside :default-style='true' style="width: 30%;float: left;line-height:300px;height:300px">Aside</zmz-aside>
    <zmz-main :default-style='true' style="width: 40%;float: left;">Main</zmz-main>
    <zmz-aside :default-style='true' style="width: 30%;float: right;line-height:300px;height:300px">Aside</zmz-aside>
  </zmz-main>
</zmz-container>

```
:::

### 分栏间隔

分栏之间存在间隔
Row 组件 提供 ```gutter``` 属性来指定每一栏之间的间隔，默认间隔为 0。

<div class="demo-block">
  <w-row :gutter="20">
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
</div>

::: demo

```html

<w-row :gutter="20">
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
</w-row>

```

:::

### 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<div class="demo-block">
  <w-row :gutter="20">
    <w-col :span="16"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
  <w-row :gutter="20" class="m-10">
    <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
  <w-row :gutter="20" class="m-10">
    <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="16"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
</div>

::: demo

```html

<w-row :gutter="20">
  <w-col :span="16"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row :gutter="20" class="m-10">
  <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row :gutter="20" class="m-10">
  <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="16"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
</w-row>

```

:::

### 分栏偏移

支持偏移指定的栏数。通过制定 col 组件的 ```offset``` 属性可以指定分栏偏移的栏数。

<div class="demo-block">
  <w-row :gutter="20">
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
  <w-row :gutter="20" class="m-10">
    <w-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
  <w-row :gutter="20" class="m-10">
    <w-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
</div>

::: demo

```html

<w-row :gutter="20">
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row :gutter="20" class="m-10">
  <w-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row :gutter="20" class="m-10">
  <w-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></w-col>
</w-row>

```

:::

### Flex 布局

通过 flex 布局来对分栏进行灵活的对齐。
将 ```type``` 属性赋值为 'flex'，可以启用 flex 布局，并可通过 ```justify``` 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。
<div class="demo-block">
  <w-row type="flex" class="row-bg">
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple-light"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
  <w-row type="flex" class="row-bg m-10" justify="center">
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple-light"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
  <w-row type="flex" class="row-bg m-10" justify="end">
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple-light"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
  <w-row type="flex" class="row-bg m-10" justify="space-between">
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple-light"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
  <w-row type="flex" class="row-bg m-10" justify="space-around">
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple-light"></div></w-col>
    <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
</div>

::: demo

```html

<w-row type="flex" class="row-bg">
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple-light"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row type="flex" class="row-bg m-10" justify="center">
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple-light"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row type="flex" class="row-bg m-10" justify="end">
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple-light"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row type="flex" class="row-bg m-10" justify="space-between">
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple-light"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row type="flex" class="row-bg m-10" justify="space-around">
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple-light"></div></w-col>
  <w-col :span="6"><div class="grid-content bg-purple"></div></w-col>
</w-row>

```

:::

### 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：```xs```、```sm```、```md```、```lg``` 和 ```xl```。
<div class="demo-block">
  <w-row :gutter="10">
    <w-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></w-col>
    <w-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></w-col>
    <w-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></w-col>
    <w-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></w-col>
  </w-row>
</div>


::: demo
```html

<w-row :gutter="10">
  <w-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></w-col>
  <w-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></w-col>
  <w-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></w-col>
  <w-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></w-col>
</w-row>

```

:::

### Row Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | number | — | 0 |
| type | 布局模式，可选 flex，现代浏览器下有效 | string | — | — |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | start |
| align | flex 布局下的垂直排列方式 | string | top/middle/bottom | top |
| tag | 自定义元素标签 | string | * | div |

### Col Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 栅格占据的列数 | number | — | — |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| push |  栅格向右移动格数 | number | — | 0 |
| pull |  栅格向左移动格数 | number | — | 0 |
| xs | `<768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | `≥768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md | `≥992` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | `≥1200` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| tag | 自定义元素标签 | string | * | div |
