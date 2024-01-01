# Flex布局

好处：为盒子模型提供了最大的灵活性。

- 任何一个容器都可以指定为Flex布局。

::: details 行内元素也可以指定flex布局

- 什么是行内元素？

  答：行内元素（内联元素）：不占有独立的区域，仅仅依靠自己的字体大小或者是图像大小来支撑结构

​		一般不可以设置宽度，高度以及对齐等属性。  

```
常见的行内元素有：<a>,<strong>,<b>,<em>,<del>,<span >等
```

总结：元素发分类

1. 默认的宽度就是它本身的宽度 【内容多宽我就多宽。】
2. 和相邻的行内元素在一行上
3. height、width、属性设置无效。
4. 水平方向上：padding和margin可以设置。【左右上下设置】
5. 垂直方向上：无效
6. 行内元素只能容纳纯文本或者是其他的行内元素（a标签除外）

- 什么是块级元素呢？

  答：每个块级元素通常都会独占一行或者是多行，可以对其单独设置高度,宽度以及对齐等属性。

```
常见的块级元素有：<h1>~<h6>,<p>,<div>,<ul>,<ol>,<li>等 
```

总结：块级元素特点

1. 霸道一行显示。
2. 高度，行高，外边距和内边距都可以单独设置。
3. 宽度默认是容器的100%
4. 可以容纳行内元素和其他的块级元素

- 什么是行内块级元素？(简称：行内块元素)

块级元素，它既具有块级元素的特点，也有行内元素的特点，它可以自由设置宽度和高度， 也可以在一行中放置多个行内块级元素。比如input、img就是行内块级元素，它可以设置高宽以及一行多个。

总结：行内块级元素特点

1. 可以一行放多个input、img。
2. 可以设置高宽。
3. 他有行内元素和块级元素的特点。

- 如何将行内元素转为块级元素？

答：使用display属性。

```css
display：block ，定义元素为块级元素 
display : inline ，定义元素为行内元素 
display：inline-block，定义元素为行
```

:::

## 01)设置弹性布局容器

- display属性简介：

**`display`** 属性设置元素是否被视为[块或者内联元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flow_layout)以及用于子元素的布局，例如[流式布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flow_layout)、[网格布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout)或[弹性布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)。

















