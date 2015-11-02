/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	$(function() {
	  $('nav a').on('click', function(e) {
	    e.preventDefault();
	    var url = this.href;

	    $('nav a.current').removeClass('current');
	    $(this).addClass('current');

	    $('#container').remove();
	    $('#content').load(url + ' #content').hide().fadeIn('fast');
	  });


	});


/***/ },
/* 2 */
/***/ function(module, exports) {

	( function( window ) {

	'use strict';

	// class helper functions from bonzo https://github.com/ded/bonzo

	function classReg( className ) {
	  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}

	// classList support for class management
	// altho to be fair, the api sucks because it won't accept multiple classes at once
	var hasClass, addClass, removeClass;

	if ( 'classList' in document.documentElement ) {
	  hasClass = function( elem, c ) {
	    return elem.classList.contains( c );
	  };
	  addClass = function( elem, c ) {
	    elem.classList.add( c );
	  };
	  removeClass = function( elem, c ) {
	    elem.classList.remove( c );
	  };
	}
	else {
	  hasClass = function( elem, c ) {
	    return classReg( c ).test( elem.className );
	  };
	  addClass = function( elem, c ) {
	    if ( !hasClass( elem, c ) ) {
	      elem.className = elem.className + ' ' + c;
	    }
	  };
	  removeClass = function( elem, c ) {
	    elem.className = elem.className.replace( classReg( c ), ' ' );
	  };
	}

	function toggleClass( elem, c ) {
	  var fn = hasClass( elem, c ) ? removeClass : addClass;
	  fn( elem, c );
	}

	window.classie = {
	  // full names
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass,
	  toggleClass: toggleClass,
	  // short names
	  has: hasClass,
	  add: addClass,
	  remove: removeClass,
	  toggle: toggleClass
	};

	})( window );


/***/ },
/* 3 */
/***/ function(module, exports) {

	var menuLeft = document.getElementById( 'nav-main-s1' ),
	    showLeft = document.getElementById( 'showLeft' ),
	    body = document.body;

	$('#showLeft').on('click', function() {
	  classie.toggle( this, 'active' );
	  classie.toggle( menuLeft, 'nav-main-open' );
	});



/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	$('#courses a').on('click', function(e) {
	  e.preventDefault();
	  var target = this.hash;
	  var $target = $(target);
	  var $targetOffset = $target.offset().top-80;
	  // top-80 is for where the scroll stops
	  // offset from top by 80px
	  $('html, body').stop().animate({
	      'scrollTop': $targetOffset
	  }, 1600, 'swing', function () {
	      window.location.hash = target;
	  });
	});

	// Adapted from: http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery


/***/ }
/******/ ]);