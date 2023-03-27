# 布局

## flex
居中
```css
.flex{
  display:flex;
  justify-content:center;
  align-items:center;
}
```

设置三列

```css
.flex {
  display: flex;
}
.item{
  flex:1; // grow shrink basis
}
```

根据内容选择大小
```css
.flex{
  display:flex;
}
.item{
  flex:auto;
}
```
### align-items 和 align-content
flex 容器不设置高度并且子项只有一行时，align-content 属性是不起作用的。

## grid

设置三列

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

最后一列居左

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
}
```

子容器出现在固定位置

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#box {
  grid-column-start: 3;
  grid-row-start: 3;
  grid-column-end: span 4;
}
```

## 媒体查询
```css
@media screen and (min-width:300px){
  // 超出300像素屏幕
}

@media screen and (max-width:300px){
  // 300像素屏幕以内
}
```

## 文字溢出隐藏
```css
.ellipsis{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## 无影响触发bfc
display为inline-block, table-cell, table-caption, flex,inline-flex
overflow:overflow
