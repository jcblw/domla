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
    var eventName, value;
    for( var key in attrs ) {
        value = attrs[ key ];
        if ( key === 'className' ) {
            el.className = value;
        } else if ( /^on/.test( key ) && typeof value === 'function' ) {
            eventName = key.replace( /^on/, '' ).toLowerCase();
            el.addEventListener( eventName, value );
        } else {
            el.setAttribute( key, value );
        }
    }
}

var isElement =
module.exports._isElement =
function isElement( el ) {
    return ( el && typeof el === 'object' && el.tagName ) ? true : false;
}

var createElement =
module.exports._createElement =
function createElement( tagName, attrs ) {

    if ( !~tags.indexOf( tagName ) ) {
        throw new Error( 'could not create ' + tagName + ' element it is not a valid tag' );
    }

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
