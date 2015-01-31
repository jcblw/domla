require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "command",
    "content",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "video",
    "wbr"
];
},{}],"domla":[function(require,module,exports){
var DOM = {},
    tags = require( './src/tags');

module.exports = DOM;

var makeArray =
module.exports._makeArray =
function makeArray( arr, slice ) {
    return Array.prototype.slice.call( arr, slice );
}

var addAttributes =
module.exports._addAttributes = 
function addAttributes( el, attrs ) {
    for( var key in attrs ) {
        if ( key === 'className' ) {
            el.className = attrs[ key ];
        } else {
            el.setAttribute( key, attrs[ key ] );
        }
    }
}

var isElement =
module.exports._isElement =
function isElement( el ) {
    return el && typeof el === 'object' && el.tagName;
}

var createElement =
module.exports._createElement =
function createElement( tagName, attrs ) {
    var rest = makeArray( arguments, 2 ),
        el = document.createElement( tagName );

    if ( typeof attrs === 'string' ) {
        rest.unshift( attrs );
        attrs = {};
    }

    addAttributes( el, attrs );
    rest.filter( isElement )
        .forEach( el.appendChild.bind( el ) );

    if ( rest.length === 1 && typeof rest[ 0 ] === 'string' ) {
        el.textContent = rest[ 0 ];
    }

    return el;
}

var addToDOM =
module.exports._addToDOM =
function addToDOM( tagName ) {
    DOM[ tagName ] = createElement.bind( null, tagName );
}

tags.forEach( addToDOM );
},{"./src/tags":1}]},{},[]);
