# 换肤实现 demo

改 demo 基于 vue3 + vite2

## 直接使用 css 变量

根据不同的主题配置不同变量的值，但是变量名得一致

```scss
// 共同变量
:root {
  /* font */
  --font-size-small: 12px;
  --font-size-base: 14px;
  --font-size-medium: 16px;

  /* color */
  --color-white: white;
  --color-dark-light: #333;
  --color-gray: #c4c4c4;
  --color-gray-light: #666;
  --color-green-light: #2EB4B5;
}

// 亮色调
[data-theme='light'] {

  /* background */
  --background-color-base: white;
  --background-color-1: #F0F2F5;

  /* menu */
  --menu-background-color: white;
  --menu-background-active-color: #248AFD;
  --menu-text-color: #333;
  --menu-text-color-hover: white;
  --menu-text-color-active: white;
  --submenu-background: #F4F8FF;

  /* table */
  --table-background: white;
  --table-background-striped: #F6F6F6;
  --table-color: #333333;
  --table-border-color: #D5D5D5;

  /* scrollbar */
  --scrollbar-thumb-background: #D8D8D8;
  --scrollbar-track-background: #56585F;
}

// 暗色调
[data-theme='dark'] {

  /* background */
  --background-color-base: #282B32;
  --background-color-1: #3D4049;

  /* menu */
  --menu-background-color: #282B32;
  --menu-background-color-active: #202228;
  --menu-text-color: #bfcbd9:
  --menu-text-color-hover: #409eff;
  --menu-text-color-active: #409eff;
  --submenu-background: #4E5262;

  /* table */
  --table-background: #282B32;
  --table-background-striped: #3D4049;
  --table-color: #ffffff;
  --table-border-color: #4e5262;

  /* scrollbar */
  --scrollbar-thumb-background: rgba(119, 119, 119, 1);
  --scrollbar-track-background: rgba(119, 119, 119, 0.37);
}
```

## 使用 sass 的 map 实现

```js
// 1. 定义主题map集合
$themes: (
  light: (
    color1: black,
  ),
  dark: (
    color1: white,
  ),
);

// 2. 定义一个设置主题内容的混合器
@mixin themeify {
  @each $theme-name, $theme-map in $themes {
    $theme-map: $theme-map !global;
    [data-theme='#{$theme-name}'] & {
      @content;
    }
  }
}

// 3. 定一个获取主题样式的函数 比如获取 light 下的color1
@function themed($key) {
  @return map-get($theme-map, $key);
}

// 4. 定义设置字体颜色混合器
@mixin font_color($color) {
  @include themeify {
    color: themed($color);
  }
}

## 这里通过按钮改变data-theme的值，通过表格、文字、状态、tag来体现护肤场景
```
