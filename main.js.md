编译出来的`bundle.js`
----------------

```
(function (lodash) {
    'use strict';

    function hello (name) {
        return 'Hello, ' + lodash.capitalize(name) + '!'
    }

    hello('rollup');

}(_));
```