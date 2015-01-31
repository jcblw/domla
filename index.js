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