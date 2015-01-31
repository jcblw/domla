# Domla [![Build Status](https://travis-ci.org/jcblw/domla.svg?branch=master)](https://travis-ci.org/jcblw/domla)

wrapper around dom element creation, making dom nodes in javascript less verbose an more declaritive

## Usage

Domla has a ton of methods. Pretty much all of which are tagNames of elements. [See available](https://github.com/jcblw/domla/blob/master/src/tags.js). Eg.

```javascript
var dom = require( 'domla' ),
    div = dom.div; 

div(); // < DIV > element
```

To add attributes pass in an object as the first argument.

```javascript
div( { className: 'foo', style: 'box-sizing: border-box;' } ); 
// <div class="foo" style="box-sizing:border-box;"></div>
```

> Important to note that you should use `className` rather then `class` because `class` is a reserved word in javascript.

Next you might want to string multiple elements together.

```javascript
div( {}, span() ); // appends span to div
```

This allso works with text

```javascript
span( {}, 'hello world' );
// or
span( 'hello world' );
```
Everything together makes some cool looking javascript

```javascript
var el = (
    div( { className: 'foo' },
        span( 'hello world' ),
    );
);
// add it to the page
document.body.appendChild( el );
```

Have fun with it and file any bugs you find.

