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