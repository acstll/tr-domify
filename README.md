tr-domify
=========

Browserify transform module for requiring html files through [domify](https://github.com/component/domify).

## Usage

With [npm](http://npmjs.org) do:

```bash
npm install tr-domify
```

This will also install `domify` as a [peerDependency](http://blog.nodejs.org/2013/02/07/peer-dependencies/).

Then in your browser code you can do:

```js
var template = require('./templates/example.html');
var el = template.cloneNode(true);
```

so you get a DOM object you can clone, ready to insert into the DOM.

### To know more about Browserify transforms

https://github.com/substack/node-browserify#btransformopts-tr
