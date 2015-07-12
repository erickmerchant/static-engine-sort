# static-engine-sort

[![Dependency Status](https://david-dm.org/erickmerchant/static-engine-sort.svg?style=flat-square)](https://david-dm.org/erickmerchant/static-engine-sort) [![devDependency Status](https://david-dm.org/erickmerchant/static-engine-sort/dev-status.svg?style=flat-square)](https://david-dm.org/erickmerchant/static-engine-sort#info=devDependencies) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

This is a plugin for [static-engine](https://github.com/erickmerchant/static-engine). Sorts the collection using the provided sort function.

```javascript
var engine = require('static-engine')
var sort = require('static-engine-sort')
var pluginA = require('plugin-a')

engine([
  pluginA,
  sort(function (a, b) {
    if (a.property < b.property) {
      return -1
    }

    if (b.property < a.property) {
      return 1
    }

    return 0
  })
])
```
