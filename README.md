css-cursor
==========

Normalize the value of CSS Cursor.


Unfortunately cursor CSS property value sometimes needs to be browser prefixed.
This module solves this issue.

Example
-------

```javascript
var cssCursor = require("css-cursor");
element.style.cursor = cssCursor("grab"); // can be grab, -webkit-grab or -moz-grab depending on the browser
```
