
var test = require( 'tape' ),
    domla = require( '..' );

test( 'testing domla._makeArray', function( t ) {
    var obj = { 0: 'foo' };
    t.equals( Array.isArray( domla._makeArray( obj ) ), true, '_makeArray when passed an array like object will convert it into a true array' );
    t.end();
} );

test( 'testing domla._addAttributes', function( t ) {
    var el = document.createElement( 'input' ),
        attrs = { className: 'foo', type: 'text' };

    domla._addAttributes( el, attrs );
    t.equals( el.type, 'text', 'when passing an key value in the second argument it will set the key value of the element passes in as the first argument to the key and value specified' );
    t.equals( el.classList.contains( 'foo' ), true, 'when passing an attribute with the key of className in the second argument it will set the class of the element passes in as the first argument' );
    t.end();
} );

test( 'testing domla._isElement', function( t ) {
    var el = document.createElement( 'div' ),
        notEl = 'foo';

    t.equals( domla._isElement( el ), true, 'when passing a DOM element to domla._isElement the function will return true' );
    t.equals( domla._isElement( notEl ), false, 'when passing a non DOM element to domla._isElement the function will return false' );
    t.end( );
} );

test( 'testing domla._createElement', function( t ) {
    var child = document.createElement( 'div' ),
        child2 = document.createElement( 'div' ),
        child3 = document.createElement( 'div' );

    t.equals( typeof domla._createElement( 'div' ), 'object', 'when passing a valid tagName to domla._createElement it will return an object' );
    t.equals( domla._createElement( 'div' ).tagName, 'DIV', 'when passing a valid tagName to domla._createElement it will return an DOM element with the tagName accorning to the first agument' );
    t.throws( domla._createElement.bind( null, 'foo' ), /foo/g, 'when passing an invalid tagName doomla._createElement will throw an error with the tagName in it' );
    t.equals( domla._createElement( 'div', { 'data-foo': 'bar' } ).getAttribute( 'data-foo' ), 'bar', 'When passing in an attributes object into the second arugment of _createElement it will add those key values as attribute on the return element' );
    t.equals( domla._createElement( 'div', {}, child ).children.length, 1, 'when passing in a valid DOM element into the third argument of _createElement it will append that element to the DOM node returned' );
    t.equals( domla._createElement( 'div', {}, child2, child3 ).children.length, 2, 'when passing in a valid DOM element into the third argument and fourth arugment of _createElement it will append that element to the DOM node returned' );    
    t.equals( domla._createElement( 'div', {}, 'foo' ).textContent, 'foo', 'when passing in a string into the third argument of _createElement it will set the textContent of the DOM node returned' );
    t.equals( domla._createElement( 'div', 'bar' ).textContent, 'bar', 'when passing in a string into the second argument of _createElement it will set the textContent of the DOM node returned' );    
    t.end();
} );

test( 'testing to see if tagNames are loading correctly', function( t ) {

    var tag = require( '../src/tags' );
    tag.forEach( function( tagName ) {
        t.equals( typeof domla[ tagName ], 'function', tagName + ' is loaded as a method in domla' );
    });
    t.end();

} )
