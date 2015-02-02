# Domla [![Build Status](https://travis-ci.org/jcblw/domla.svg?branch=master)](https://travis-ci.org/jcblw/domla)

Wrapper around dom element creation, making dom nodes in javascript less verbose and more declaritive. 

## Uh Why?

This is not meant to replace your templating engine. This is meant to help with times templating engines, or html is not available, like in a [browserify](http://browserify.org) ui component. Eg.

```javascript
// before
var buttons = document.createElement( 'div' ),
    use = document.createElement( 'button' ),
    cancel = document.createElement( 'button' );
    
buttons.className = 'button-group';
use.textContent = 'use';
cancel.textContent = 'cancel';
buttons.appendChild( use );
buttons.appendChild( cancel );

use.addEventListener( 'click', onUse );
cancel.addEventListener( 'click', onCancel );
// with domla
var dom = require( 'domla' ),
    div = dom.div,
    button = dom.button,
    buttons;

buttons = (
    div( { className: 'button-group' },
        button( { onClick: onUse }, 'use' ),
        button( { onClick: onCancel }, 'cancel' )
    )
);
```

## Usage

Domla has a ton of methods. Pretty much all of which are tagNames of elements. [See available](https://github.com/jcblw/domla/blob/master/src/tags.js). Eg.

```javascript
var dom = require( 'domla' ),
    div = dom.div; 

div(); // < DIV > element
```

To add attributes pass in an object as the first argument.

```javascript
div( { className: 'foo', style: 'box-sizing: border-box;', onClick: onFooClick } ); 
// <div class="foo" style="box-sizing:border-box;"></div> plus a event listener
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
        span( 'hello world' )
    )
);
// add it to the page
document.body.appendChild( el );
```

Have fun with it and file any bugs you find.

