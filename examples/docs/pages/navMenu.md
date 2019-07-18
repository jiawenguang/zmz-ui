# NavMenu 导航菜单
----
### 概述
为网站提供菜单导航指引前进方向！
### 基础用法

#### 顶栏
网站广泛的基础用法。

<div class="demo-block">
<zmz-menu default-active="1" class="zmz-menu_demo" mode="horizontal" background-color="#545c64" active-text-color="#ffd04b">
	<zmz-menu-item index="1">一级菜单1</zmz-menu-item>
	<zmz-submenu index="2">
			   <template slot="title">一级菜单2</template>
				 <zmz-menu-item index="2-1">二级菜单2-1</zmz-menu-item>
				 <zmz-menu-item index="2-2">二级菜单2-2</zmz-menu-item>
				 <zmz-menu-item index="2-3">二级菜单2-3</zmz-menu-item>
				 <zmz-menu-item index="2-4">二级菜单2-4</zmz-menu-item>
				 <zmz-submenu  index="2-5" direction='right'>
						   <template slot="title">三级菜单3</template>
							 <zmz-menu-group >
								  <template slot="title">分组一</template>
									 <zmz-menu-item index="2-5-1" >三级菜单3-1</zmz-menu-item>
									 <zmz-menu-item index="2-5-2" >三级菜单3-2</zmz-menu-item>
							 </zmz-menu-group>
							 <zmz-menu-item index="2-5-3"> 三级菜单3-3</zmz-menu-item>
							 <zmz-menu-group>
										<template slot="title">分组二</template>
										<zmz-menu-item index="2-5-4">三级菜单3-4</zmz-menu-item>
							 </zmz-menu-group>
				 </zmz-submenu>
	</zmz-submenu>
	<zmz-menu-item index="3" :disabled="true">一级菜单3</zmz-menu-item>
	<zmz-menu-item index="4">一级菜单4</zmz-menu-item>
</zmz-menu>
</div>

::: demo
```html

<zmz-menu default-active="1" class="zmz-menu_demo" mode="horizontal" background-color="#545c64" active-text-color="#ffd04b">
  <zmz-menu-item index="1">一级菜单1</zmz-menu-item>
  <zmz-submenu index="2">
    <template slot="title">一级菜单2</template>
    <zmz-menu-item index="2-1">二级菜单2-1</zmz-menu-item>
    <zmz-menu-item index="2-2">二级菜单2-2</zmz-menu-item>
    <zmz-menu-item index="2-3">二级菜单2-3</zmz-menu-item>
    <zmz-menu-item index="2-4">二级菜单2-4</zmz-menu-item>
    <zmz-submenu  index="2-5" direction='right'>
      <template slot="title">三级菜单3</template>
      <zmz-menu-group >
        <template slot="title">分组一</template>
        <zmz-menu-item index="2-5-1" >三级菜单3-1</zmz-menu-item>
        <zmz-menu-item index="2-5-2" >三级菜单3-2</zmz-menu-item>
      </zmz-menu-group>
      <zmz-menu-item index="2-5-3"> 三级菜单3-3</zmz-menu-item>
      <zmz-menu-group>
        <template slot="title">分组二</template>
        <zmz-menu-item index="2-5-4">三级菜单3-4</zmz-menu-item>
      </zmz-menu-group>
    </zmz-submenu>
  </zmz-submenu>
  <zmz-menu-item index="3" :disabled="true">一级菜单3</zmz-menu-item>
  <zmz-menu-item index="4">一级菜单4</zmz-menu-item>
</zmz-menu>


```
:::


### 侧栏
垂直菜单，可内嵌子菜单。

<div class="demo-block">
<zmz-menu default-active="1"   class="zmz-menu_demo" mode="vertical" background-color="#545c64" active-text-color="#ffd04b" style="width: 240px;">
<zmz-menu-item index="1">一级菜单1</zmz-menu-item>
<zmz-submenu index="2">
		   <template slot="title">一级菜单2</template>
			 <zmz-menu-item index="2-1">二级菜单2-1</zmz-menu-item>
			 <zmz-menu-item index="2-2">二级菜单2-2</zmz-menu-item>
			 <zmz-menu-item index="2-3">二级菜单2-3</zmz-menu-item>
			 <zmz-menu-item index="2-4">二级菜单2-4</zmz-menu-item>
			 <zmz-submenu  index="2-5" direction='right' >
					   <template slot="title">三级菜单2-5</template>
						 <zmz-menu-group >
							  <template slot="title">分组一</template>
								 <zmz-menu-item index="2-5-1" >三级菜单3-1</zmz-menu-item>
								 <zmz-menu-item index="2-5-2" >三级菜单3-2</zmz-menu-item>
						 </zmz-menu-group>
						 <zmz-menu-item index="2-5-3"> 三级菜单3-3</zmz-menu-item>
						 <zmz-menu-group>
									<template slot="title">分组二</template>
									<zmz-menu-item index="2-5-4">三级菜单3-4</zmz-menu-item>
						 </zmz-menu-group>
			 </zmz-submenu>
</zmz-submenu>
<zmz-menu-item index="3" :disabled="true">一级菜单3</zmz-menu-item>
<zmz-menu-item index="4">一级菜单4</zmz-menu-item>
</zmz-menu>
</div>

::: demo
```html

<zmz-menu default-active="1"   class="zmz-menu_demo" mode="vertical" background-color="#545c64" active-text-color="#ffd04b" style="width: 240px;">
  <zmz-menu-item index="1">一级菜单1</zmz-menu-item>
  <zmz-submenu index="2">
    <template slot="title">一级菜单2</template>
    <zmz-menu-item index="2-1">二级菜单2-1</zmz-menu-item>
    <zmz-menu-item index="2-2">二级菜单2-2</zmz-menu-item>
    <zmz-menu-item index="2-3">二级菜单2-3</zmz-menu-item>
    <zmz-menu-item index="2-4">二级菜单2-4</zmz-menu-item>
    <zmz-submenu  index="2-5" direction='right' >
      <template slot="title">三级菜单2-5</template>
        <zmz-menu-group >
          <template slot="title">分组一</template>
          <zmz-menu-item index="2-5-1" >三级菜单3-1</zmz-menu-item>
          <zmz-menu-item index="2-5-2" >三级菜单3-2</zmz-menu-item>
        </zmz-menu-group>
        <zmz-menu-item index="2-5-3"> 三级菜单3-3</zmz-menu-item>
        <zmz-menu-group>
          <template slot="title">分组二</template>
          <zmz-menu-item index="2-5-4">三级菜单3-4</zmz-menu-item>
        </zmz-menu-group>
    </zmz-submenu>
  </zmz-submenu>
  <zmz-menu-item index="3" :disabled="true">一级菜单3</zmz-menu-item>
  <zmz-menu-item index="4">一级菜单4</zmz-menu-item>
</zmz-menu>

```
:::



## Menu Attribute

| 参数       | 说明                      | 类型      | 可选值                                         | 默认值      |
|---------- |------------------------- |---------- |--------------------------------------------  |------------- |
| mode | 模式 | string |   horizontal / vertical   | horizontal |
| background-color | 菜单的背景色（仅支持 hex 格式） | string | - | #ffffff |
| text-color | 菜单的文字颜色（仅支持 hex 格式） | string | — | #303133 |
| active-text-color | 当前激活菜单的文字颜色（仅支持 hex 格式） | String | — | #409EFF |
| default-active | 当前激活菜单的 index | String | — |  — |

## SubMenu Attribute

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| index | 唯一标志 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |

## Menu-Item Attribute

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| index | 唯一标志 | string | — | - |
| disabled | 是否禁用 | boolean | — | false |

## Menu-Group Attribute

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 分组标题 | string | — | — |