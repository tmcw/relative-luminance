[![Greenkeeper badge](https://badges.greenkeeper.io/tmcw/relative-luminance.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/tmcw/relative-luminance.svg)](https://travis-ci.org/tmcw/relative-luminance)

## relative-luminance


    npm install relative-luminance

Calculate the [relative luminance](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef) of
an RGB triplet color.

### api

#### `luminance(rgb)`

Given a 3-element array of R, G, B varying from 0 to 255, return the luminance
as a number from 0 to 1.

### example

```js
var luminance = require('relative-luminance');

var black_lum = luminance([0, 0, 0]); // 0
```
