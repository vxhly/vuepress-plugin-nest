# vuepress-plugin-nest

> A vuepress plugin for canvas-nest.js

[![npm](https://img.shields.io/npm/v/vuepress-plugin-nest.svg)](https://www.npmjs.com/package/vuepress-plugin-nest)
[![GitHub stars](https://img.shields.io/github/stars/vxhly/vuepress-plugin-nest)](https://github.com/vxhly/vuepress-plugin-nest/stargazers)
[![GitHub license](https://img.shields.io/github/license/vxhly/vuepress-plugin-nest)](https://github.com/vxhly/vuepress-plugin-nest/blob/master/LICENSE)

## Install

``` bash
# install dependencies
npm i vuepress-plugin-nest -D

# or use yarn
yarn add vuepress-plugin-nest -D
```

## Usage

Write vuepress config

``` javascript
module.exports = {
  plugins: ['nest']
}
```

## Options

This plugin supports the following configurations.

``` javascript
module.exports = {
  plugins: ['nest', {
    color: '0,0,0', // color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
    pointColor: '0,0,0', // color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
    opacity: 0.5, // the opacity of line (0~1), default: 0.5.
    count: 99, // the number of lines, default: 99.
    zIndex: -1 // z-index property of the background, default: -1.
    showInMobile: false // whether to display on the mobile side, default: false.
  }]
}
```

## Thanks

- [canvas-nest.js](https://github.com/hustcc/canvas-nest.js)

## License

[MIT](https://github.com/vxhly/vuepress-plugin-nest/blob/master/LICENSE).