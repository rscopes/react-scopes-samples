/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(51);
} else {
  module.exports = __webpack_require__(50);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(2);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals window, HTMLElement */



/**!
 * is
 * the definitive JavaScript type testing library
 *
 * @copyright 2013-2014 Enrico Marino / Jordan Harband
 * @license MIT
 */

var objProto = Object.prototype;
var owns = objProto.hasOwnProperty;
var toStr = objProto.toString;
var symbolValueOf;
if (typeof Symbol === 'function') {
  symbolValueOf = Symbol.prototype.valueOf;
}
var isActualNaN = function (value) {
  return value !== value;
};
var NON_HOST_TYPES = {
  'boolean': 1,
  number: 1,
  string: 1,
  undefined: 1
};

var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
var hexRegex = /^[A-Fa-f0-9]+$/;

/**
 * Expose `is`
 */

var is = {};

/**
 * Test general.
 */

/**
 * is.type
 * Test if `value` is a type of `type`.
 *
 * @param {Mixed} value value to test
 * @param {String} type type
 * @return {Boolean} true if `value` is a type of `type`, false otherwise
 * @api public
 */

is.a = is.type = function (value, type) {
  return typeof value === type;
};

/**
 * is.defined
 * Test if `value` is defined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is defined, false otherwise
 * @api public
 */

is.defined = function (value) {
  return typeof value !== 'undefined';
};

/**
 * is.empty
 * Test if `value` is empty.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is empty, false otherwise
 * @api public
 */

is.empty = function (value) {
  var type = toStr.call(value);
  var key;

  if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
    return value.length === 0;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (owns.call(value, key)) {
        return false;
      }
    }
    return true;
  }

  return !value;
};

/**
 * is.equal
 * Test if `value` is equal to `other`.
 *
 * @param {Mixed} value value to test
 * @param {Mixed} other value to compare with
 * @return {Boolean} true if `value` is equal to `other`, false otherwise
 */

is.equal = function equal(value, other) {
  if (value === other) {
    return true;
  }

  var type = toStr.call(value);
  var key;

  if (type !== toStr.call(other)) {
    return false;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (!is.equal(value[key], other[key]) || !(key in other)) {
        return false;
      }
    }
    for (key in other) {
      if (!is.equal(value[key], other[key]) || !(key in value)) {
        return false;
      }
    }
    return true;
  }

  if (type === '[object Array]') {
    key = value.length;
    if (key !== other.length) {
      return false;
    }
    while (key--) {
      if (!is.equal(value[key], other[key])) {
        return false;
      }
    }
    return true;
  }

  if (type === '[object Function]') {
    return value.prototype === other.prototype;
  }

  if (type === '[object Date]') {
    return value.getTime() === other.getTime();
  }

  return false;
};

/**
 * is.hosted
 * Test if `value` is hosted by `host`.
 *
 * @param {Mixed} value to test
 * @param {Mixed} host host to test with
 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
 * @api public
 */

is.hosted = function (value, host) {
  var type = typeof host[value];
  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
};

/**
 * is.instance
 * Test if `value` is an instance of `constructor`.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an instance of `constructor`
 * @api public
 */

is.instance = is['instanceof'] = function (value, constructor) {
  return value instanceof constructor;
};

/**
 * is.nil / is.null
 * Test if `value` is null.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is null, false otherwise
 * @api public
 */

is.nil = is['null'] = function (value) {
  return value === null;
};

/**
 * is.undef / is.undefined
 * Test if `value` is undefined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is undefined, false otherwise
 * @api public
 */

is.undef = is.undefined = function (value) {
  return typeof value === 'undefined';
};

/**
 * Test arguments.
 */

/**
 * is.args
 * Test if `value` is an arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.args = is.arguments = function (value) {
  var isStandardArguments = toStr.call(value) === '[object Arguments]';
  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
  return isStandardArguments || isOldArguments;
};

/**
 * Test array.
 */

/**
 * is.array
 * Test if 'value' is an array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an array, false otherwise
 * @api public
 */

is.array = Array.isArray || function (value) {
  return toStr.call(value) === '[object Array]';
};

/**
 * is.arguments.empty
 * Test if `value` is an empty arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
 * @api public
 */
is.args.empty = function (value) {
  return is.args(value) && value.length === 0;
};

/**
 * is.array.empty
 * Test if `value` is an empty array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty array, false otherwise
 * @api public
 */
is.array.empty = function (value) {
  return is.array(value) && value.length === 0;
};

/**
 * is.arraylike
 * Test if `value` is an arraylike object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.arraylike = function (value) {
  return !!value && !is.bool(value)
    && owns.call(value, 'length')
    && isFinite(value.length)
    && is.number(value.length)
    && value.length >= 0;
};

/**
 * Test boolean.
 */

/**
 * is.bool
 * Test if `value` is a boolean.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a boolean, false otherwise
 * @api public
 */

is.bool = is['boolean'] = function (value) {
  return toStr.call(value) === '[object Boolean]';
};

/**
 * is.false
 * Test if `value` is false.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is false, false otherwise
 * @api public
 */

is['false'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === false;
};

/**
 * is.true
 * Test if `value` is true.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is true, false otherwise
 * @api public
 */

is['true'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === true;
};

/**
 * Test date.
 */

/**
 * is.date
 * Test if `value` is a date.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a date, false otherwise
 * @api public
 */

is.date = function (value) {
  return toStr.call(value) === '[object Date]';
};

/**
 * is.date.valid
 * Test if `value` is a valid date.
 *
 * @param {Mixed} value value to test
 * @returns {Boolean} true if `value` is a valid date, false otherwise
 */
is.date.valid = function (value) {
  return is.date(value) && !isNaN(Number(value));
};

/**
 * Test element.
 */

/**
 * is.element
 * Test if `value` is an html element.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an HTML Element, false otherwise
 * @api public
 */

is.element = function (value) {
  return value !== undefined
    && typeof HTMLElement !== 'undefined'
    && value instanceof HTMLElement
    && value.nodeType === 1;
};

/**
 * Test error.
 */

/**
 * is.error
 * Test if `value` is an error object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an error object, false otherwise
 * @api public
 */

is.error = function (value) {
  return toStr.call(value) === '[object Error]';
};

/**
 * Test function.
 */

/**
 * is.fn / is.function (deprecated)
 * Test if `value` is a function.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a function, false otherwise
 * @api public
 */

is.fn = is['function'] = function (value) {
  var isAlert = typeof window !== 'undefined' && value === window.alert;
  if (isAlert) {
    return true;
  }
  var str = toStr.call(value);
  return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
};

/**
 * Test number.
 */

/**
 * is.number
 * Test if `value` is a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a number, false otherwise
 * @api public
 */

is.number = function (value) {
  return toStr.call(value) === '[object Number]';
};

/**
 * is.infinite
 * Test if `value` is positive or negative infinity.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
 * @api public
 */
is.infinite = function (value) {
  return value === Infinity || value === -Infinity;
};

/**
 * is.decimal
 * Test if `value` is a decimal number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a decimal number, false otherwise
 * @api public
 */

is.decimal = function (value) {
  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
};

/**
 * is.divisibleBy
 * Test if `value` is divisible by `n`.
 *
 * @param {Number} value value to test
 * @param {Number} n dividend
 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
 * @api public
 */

is.divisibleBy = function (value, n) {
  var isDividendInfinite = is.infinite(value);
  var isDivisorInfinite = is.infinite(n);
  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
  return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
};

/**
 * is.integer
 * Test if `value` is an integer.
 *
 * @param value to test
 * @return {Boolean} true if `value` is an integer, false otherwise
 * @api public
 */

is.integer = is['int'] = function (value) {
  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
};

/**
 * is.maximum
 * Test if `value` is greater than 'others' values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is greater than `others` values
 * @api public
 */

is.maximum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value < others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.minimum
 * Test if `value` is less than `others` values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is less than `others` values
 * @api public
 */

is.minimum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value > others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.nan
 * Test if `value` is not a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is not a number, false otherwise
 * @api public
 */

is.nan = function (value) {
  return !is.number(value) || value !== value;
};

/**
 * is.even
 * Test if `value` is an even number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an even number, false otherwise
 * @api public
 */

is.even = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
};

/**
 * is.odd
 * Test if `value` is an odd number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an odd number, false otherwise
 * @api public
 */

is.odd = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
};

/**
 * is.ge
 * Test if `value` is greater than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.ge = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value >= other;
};

/**
 * is.gt
 * Test if `value` is greater than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.gt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value > other;
};

/**
 * is.le
 * Test if `value` is less than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if 'value' is less than or equal to 'other'
 * @api public
 */

is.le = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value <= other;
};

/**
 * is.lt
 * Test if `value` is less than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if `value` is less than `other`
 * @api public
 */

is.lt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value < other;
};

/**
 * is.within
 * Test if `value` is within `start` and `finish`.
 *
 * @param {Number} value value to test
 * @param {Number} start lower bound
 * @param {Number} finish upper bound
 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
 * @api public
 */
is.within = function (value, start, finish) {
  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
    throw new TypeError('all arguments must be numbers');
  }
  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
  return isAnyInfinite || (value >= start && value <= finish);
};

/**
 * Test object.
 */

/**
 * is.object
 * Test if `value` is an object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an object, false otherwise
 * @api public
 */
is.object = function (value) {
  return toStr.call(value) === '[object Object]';
};

/**
 * is.primitive
 * Test if `value` is a primitive.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a primitive, false otherwise
 * @api public
 */
is.primitive = function isPrimitive(value) {
  if (!value) {
    return true;
  }
  if (typeof value === 'object' || is.object(value) || is.fn(value) || is.array(value)) {
    return false;
  }
  return true;
};

/**
 * is.hash
 * Test if `value` is a hash - a plain object literal.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a hash, false otherwise
 * @api public
 */

is.hash = function (value) {
  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
};

/**
 * Test regexp.
 */

/**
 * is.regexp
 * Test if `value` is a regular expression.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a regexp, false otherwise
 * @api public
 */

is.regexp = function (value) {
  return toStr.call(value) === '[object RegExp]';
};

/**
 * Test string.
 */

/**
 * is.string
 * Test if `value` is a string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a string, false otherwise
 * @api public
 */

is.string = function (value) {
  return toStr.call(value) === '[object String]';
};

/**
 * Test base64 string.
 */

/**
 * is.base64
 * Test if `value` is a valid base64 encoded string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
 * @api public
 */

is.base64 = function (value) {
  return is.string(value) && (!value.length || base64Regex.test(value));
};

/**
 * Test base64 string.
 */

/**
 * is.hex
 * Test if `value` is a valid hex encoded string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
 * @api public
 */

is.hex = function (value) {
  return is.string(value) && (!value.length || hexRegex.test(value));
};

/**
 * is.symbol
 * Test if `value` is an ES6 Symbol
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a Symbol, false otherise
 * @api public
 */

is.symbol = function (value) {
  return typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol';
};

module.exports = is;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(3);
  var warning = __webpack_require__(6);
  var ReactPropTypesSecret = __webpack_require__(12);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\react-dom\\index.js'");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\shortid\\index.js'");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
module.exports =
/******/function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};
	/******/
	/******/ // The require function
	/******/function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;
		/******/
		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };
		/******/
		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/module.loaded = true;
		/******/
		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;
	/******/
	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "/";
	/******/
	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _rescope = __webpack_require__(1);

	var _rescope2 = _interopRequireDefault(_rescope);

	var _ReactHocs = __webpack_require__(2);

	var RTools = _interopRequireWildcard(_ReactHocs);

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}newObj.default = obj;return newObj;
		}
	}

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	/*
  * Copyright (c)  2018 Wise Wild Web .
  *
  *  MIT License
  *
  *  Permission is hereby granted, free of charge, to any person obtaining a copy
  *  of this software and associated documentation files (the "Software"), to deal
  *  in the Software without restriction, including without limitation the rights
  *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  *  copies of the Software, and to permit persons to whom the Software is
  *  furnished to do so, subject to the following conditions:
  *
  *  The above copyright notice and this permission notice shall be included in all
  *  copies or substantial portions of the Software.
  *
  *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  *  SOFTWARE.
  *
  * @author : Nathanael Braun
  * @contact : caipilabs@gmail.com
  */

	_rescope2.default.Component = RTools.Component;
	_rescope2.default.reScopeProps = RTools.reScopeProps;
	_rescope2.default.scopeToProps = RTools.reScopeProps;
	_rescope2.default.propsToScope = RTools.propsToScope;
	_rescope2.default.propsToStore = RTools.propsToStore;
	exports.default = _rescope2.default;
	module.exports = exports["default"];

	/***/
},
/* 1 */
/***/function (module, exports) {

	module.exports = __webpack_require__(16);

	/***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.propsToStore = exports.propsToScope = exports.reScopeProps = exports.Component = exports.default = undefined;

	var _get = function get(object, property, receiver) {
		if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);if (parent === null) {
				return undefined;
			} else {
				return get(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;if (getter === undefined) {
				return undefined;
			}return getter.call(receiver);
		}
	};

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _rescope = __webpack_require__(1);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _is = __webpack_require__(4);

	var _is2 = _interopRequireDefault(_is);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
		} else {
			obj[key] = value;
		}return obj;
	}

	function _toConsumableArray(arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
				arr2[i] = arr[i];
			}return arr2;
		} else {
			return Array.from(arr);
		}
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /*
    * Copyright (c)  2018 Wise Wild Web .
    *
    *  MIT License
    *  
    *  Permission is hereby granted, free of charge, to any person obtaining a copy
    *  of this software and associated documentation files (the "Software"), to deal
    *  in the Software without restriction, including without limitation the rights
    *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    *  copies of the Software, and to permit persons to whom the Software is
    *  furnished to do so, subject to the following conditions:
    *  
    *  The above copyright notice and this permission notice shall be included in all
    *  copies or substantial portions of the Software.
    *  
    *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    *  SOFTWARE.
    *  
    * @author : Nathanael Braun
    * @contact : caipilabs@gmail.com
    */

	var SimpleObjectProto = {}.constructor;

	/**
  * Return a React "HOC" (High Order Component) that :
  *  - Inject & maintain the stores listed baseComponent::use and/or (use) in the
  * instances props.
  *  - Propag (scope) in the returned React Component context
  *
  * @param BaseComponent {React.Component} Base React Component ( default :
  *     React.Component )
  * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be
  *     searched ( default : the default ReScope::Scope::scopes.static scope )
  * @param use {array} the list of stores to inject from the current scope
  * @returns {ReScopeProvider}
  */
	function reScopeProps() {
		var _class, _temp;

		for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
			argz[_key] = arguments[_key];
		}

		var BaseComponent = (!argz[0] || argz[0].prototype instanceof _react2.default.Component || argz[0] === _react2.default.Component) && argz.shift(),
		    scope = (!argz[0] || argz[0] instanceof _rescope.Scope || _is2.default.fn(argz[0])) && argz.shift(),
		    use = (!argz[0] || _is2.default.array(argz[0]) || argz[0] instanceof SimpleObjectProto) && argz.shift();

		if (!(BaseComponent && (BaseComponent.prototype instanceof _react2.default.Component || BaseComponent === _react2.default.Component))) {
			return function (BaseComponent) {
				return reScopeProps(BaseComponent, scope, use);
			};
		}

		var provider = reScopeToState((_temp = _class = function (_React$Component) {
			_inherits(ReScopePropsProvider, _React$Component);

			function ReScopePropsProvider() {
				_classCallCheck(this, ReScopePropsProvider);

				return _possibleConstructorReturn(this, (ReScopePropsProvider.__proto__ || Object.getPrototypeOf(ReScopePropsProvider)).apply(this, arguments));
			}

			_createClass(ReScopePropsProvider, [{
				key: 'getChildContext',
				value: function getChildContext() {
					return this.context;
				}
			}, {
				key: 'render',
				value: function render() {
					return _react2.default.createElement(BaseComponent, _extends({}, this.props, this.state, {
						$dispatch: this.$dispatch,
						$actions: this.$actions,
						$stores: this.$stores }));
				}
			}]);

			return ReScopePropsProvider;
		}(_react2.default.Component), _class._originComponent = BaseComponent._originComponent || BaseComponent, _class.use = BaseComponent.use, _class.childContextTypes = _extends({}, BaseComponent.contextTypes || {}, {
			rescope: _propTypes2.default.object,
			$stores: _propTypes2.default.object
		}), _class.contextTypes = _extends({}, BaseComponent.contextTypes || {}, {
			rescope: _propTypes2.default.object,
			$stores: _propTypes2.default.object
		}), _temp), scope, use);
		provider.displayName = "s2p(" + (BaseComponent.displayName || BaseComponent.name) + ")";
		return provider;
	}

	/**
  * Return a React "HOC" (High Order Component) that :
  *  - Inherit BaseComponent,
  *  - Inject & maintain the stores in BaseComponent::use and/or (use) in the instances
  * state.
  *  - Propag (scope) in the returned React Component context
  *
  *
  * @param BaseComponent {React.Component} Base React Component ( default :
  *     React.Component )
  * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be
  *     searched
  * @param use {array} the list of stores injected from the current scope
  * @param additionalContext {Object} context to be propagated
  * @returns {ReScopeProvider}
  */
	function reScopeToState() {
		var _class2, _temp2;

		for (var _len2 = arguments.length, argz = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			argz[_key2] = arguments[_key2];
		}

		var BaseComponent = (!argz[0] || argz[0].prototype instanceof _react2.default.Component || argz[0] === _react2.default.Component) && argz.shift(),
		    scope = (!argz[0] || argz[0] instanceof _rescope.Scope || _is2.default.fn(argz[0])) && argz.shift(),
		    use = _is2.default.array(argz[0]) && argz.shift(),
		    stateMap = !use && (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift(),
		    additionalContext = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift(),
		    initialState = {};

		use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
		stateMap && _rescope.Scope.stateMapToRefList(stateMap, initialState, use);

		additionalContext = additionalContext && Object.keys(additionalContext).reduce(function (h, k) {
			return h[k] = _propTypes2.default.any, h;
		}, {}) || {};

		var ReScopeProvider = (_temp2 = _class2 = function (_BaseComponent) {
			_inherits(ReScopeProvider, _BaseComponent);

			function ReScopeProvider(p, ctx, q) {
				_classCallCheck(this, ReScopeProvider);

				var _this2 = _possibleConstructorReturn(this, (ReScopeProvider.__proto__ || Object.getPrototypeOf(ReScopeProvider)).call(this, p, ctx, q));

				_this2._scopeWillUpdate = function (state) {
					// trigger update hook
					_this2.scopeWillUpdate && _this2.scopeWillUpdate(state, _this2.$stores);

					// clone updated objects so react will propag them...
					state = Object.keys(state).reduce(function (h, k) {
						return h[k] = _is2.default.array(state[k]) ? [].concat(_toConsumableArray(state[k])) : state[k] instanceof SimpleObjectProto ? _extends({}, state[k]) : state[k], h;
					}, {});
					_this2.setState(state);
				};

				_this2.$scope = _this2.$scope || p.__scope || _is2.default.fn(scope) && scope(_this2, p, ctx) || scope || ctx.rescope;

				if (_this2.$scope && _this2.$scope.dead) {
					console.error("ReScoping using dead scope !");
					_this2.$scope = null;
				}

				_this2.$stores = _this2.$scope && _this2.$scope.stores;
				_this2.$actions = _this2.$scope && _this2.$scope.actions;
				if (_this2.$scope && use.length) {
					_this2.state = _extends({}, _this2.state, initialState, _this2.$scope.map(_this2, use, false));
				} else if (!_this2.$scope) _this2.render = function () {
					return _react2.default.createElement('div', null, 'No Scope found in ', BaseComponent.name);
				};

				_this2.$dispatch = _this2.$dispatch.bind(_this2);
				return _this2;
			}

			_createClass(ReScopeProvider, [{
				key: '$dispatch',
				value: function $dispatch() {
					var _$scope;

					this.$scope && (_$scope = this.$scope).dispatch.apply(_$scope, arguments);
				}
			}, {
				key: 'componentDidMount',
				value: function componentDidMount() {
					this.$scope && _is2.default.fn(scope) && this.$scope.retain("hoc");
				}
			}, {
				key: 'componentWillMount',
				value: function componentWillMount() {
					if (use.length) {
						this.$scope.bind(this._scopeWillUpdate, use, false);
					}
					_get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillMount', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillMount', this).call(this);
				}
			}, {
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
					_get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillUnmount', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillUnmount', this).call(this);
					if (this.$scope && !this.$scope.dead) {
						use.length && this.$scope.unBind(this._scopeWillUpdate, use);
						_is2.default.fn(scope) && this.$scope.dispose("hoc");
					}
				}
			}, {
				key: 'componentWillReceiveProps',
				value: function componentWillReceiveProps(np, nc) {
					var nScope = np.__scope || scope && this.$scope || nc.rescope || this.$scope;

					if (nScope != this.$scope) {
						use.length && this.$scope.unBind(this._scopeWillUpdate, use);
						this.$scope = nScope;

						if (this.$scope && this.$scope.dead) {
							console.error("ReScoping using dead scope");
							this.$actions = this.$stores = this.$scope = null;
						} else {
							this.$actions = this.$scope.actions;
							this.$stores = this.$scope.stores;
							use.length && nScope.bind(this._scopeWillUpdate, use);
						}
					}
					_get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillReceiveProps', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillReceiveProps', this).call(this, np, nc);
				}
			}, {
				key: 'getChildContext',
				value: function getChildContext() {
					var ctx = _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'getChildContext', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'getChildContext', this).call(this) || {};
					return _extends({}, ctx, {
						rescope: this.$scope || this.context.rescope,
						$stores: this.$scope.stores || this.context.$stores
					});
				}
			}]);

			return ReScopeProvider;
		}(BaseComponent), _class2._originComponent = BaseComponent._originComponent || BaseComponent, _class2.childContextTypes = _extends({}, BaseComponent.childContextTypes || {}, additionalContext, {
			rescope: _propTypes2.default.object,
			$stores: _propTypes2.default.object
		}), _class2.contextTypes = _extends({}, BaseComponent.contextTypes || {}, additionalContext, {
			rescope: _propTypes2.default.object,
			$stores: _propTypes2.default.object
		}), _class2.defaultProps = _extends({}, BaseComponent.defaultProps || {}), _class2.displayName = "s2s(" + (BaseComponent.displayName || BaseComponent.name) + ")", _temp2);

		return ReScopeProvider;
	}

	(0, _rescope.addScopableType)(function (Comp) {
		return Comp && (Comp.prototype instanceof _react2.default.Component || Comp === _react2.default.Component);
	}, reScopeToState, false, true);

	/**
  * Return a React "HOC" (High Order Component) that :
  *  - Render BaseComponent with new scope that inherit the given scope or context scope
  *
  * @param BaseComponent {React.Component} Base React Component ( default :
  *     React.Component )
  * @param storesMap {Object} the propagated Scope where the stores will be searched
  * @param parentScope {Scope} the propagated Scope where the stores will be searched
  * @param parentScopeId {string} the propagated Scope where the stores will be searched
  * @param additionalContext {Object} context to be propagated
  * @returns {*}
  */
	function reScope() {
		var _class3, _temp3;

		for (var _len3 = arguments.length, argz = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			argz[_key3] = arguments[_key3];
		}

		var BaseComponent = (!argz[0] || argz[0].prototype instanceof _react2.default.Component || argz[0] === _react2.default.Component) && argz.shift(),
		    scoped = (!argz[0] || argz[0] instanceof SimpleObjectProto && !(argz[0] instanceof _rescope.Scope)) && argz.shift(),
		    scopeCfg = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift() || {},
		    parent = (!argz[0] || argz[0] instanceof _rescope.Scope) && argz.shift(),
		    parentId = (!argz[0] || _is2.default.string(argz[0])) && argz.shift();

		var compName = BaseComponent.displayName || BaseComponent.name;

		var ScopeProvider = (_temp3 = _class3 = function (_React$Component2) {
			_inherits(ScopeProvider, _React$Component2);

			function ScopeProvider(p, ctx, q) {
				_classCallCheck(this, ScopeProvider);

				var _parent = parent || parentId && _rescope.Scope.getScope(parentId) || p.__scope || ctx.rescope,
				    $scope = new _rescope.Scope(scoped || {}, _extends({
					autoDestroy: true,
					key: compName,
					parent: _parent
				}, scopeCfg));

				var _this3 = _possibleConstructorReturn(this, (ScopeProvider.__proto__ || Object.getPrototypeOf(ScopeProvider)).call(this, p, _extends({}, ctx, { rescope: $scope, $stores: $scope.stores }), q));

				_this3.$scope = _this3.$scope || $scope;

				if (!_this3.$scope) {
					if (_this3.$scope && _this3.$scope.dead) {
						console.error("Scoping using dead scope parent");
						_this3.$scope = null;
					}

					_this3.$scope = new _rescope.Scope(scoped || {}, {
						autoDestroy: true,
						key: compName,
						parent: _this3.$scope
					});

					_this3.$actions = _this3.$scope && _this3.$scope.actions;
					_this3.$stores = _this3.$scope && _this3.$scope.stores;
				}
				_this3.$scope.retain();
				return _this3;
			}

			_createClass(ScopeProvider, [{
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
					_get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillUnmount', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillUnmount', this).call(this);
					this.$scope && this.$scope.dispose();
				}
			}, {
				key: 'getChildContext',
				value: function getChildContext() {
					var ctx = _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'getChildContext', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'getChildContext', this).call(this) || {};
					return _extends({}, ctx, {
						rescope: this.$scope,
						$stores: this.$scope.stores
					});
				}
			}, {
				key: 'render',
				value: function render() {
					return _react2.default.createElement(BaseComponent, _extends({}, this.props, {
						$dispatch: this.$dispatch,
						$actions: this.$actions,
						$stores: this.$stores }));
				}
			}]);

			return ScopeProvider;
		}(_react2.default.Component), _class3._originComponent = BaseComponent._originComponent || BaseComponent, _class3.childContextTypes = _extends({}, BaseComponent.childContextTypes || {}, {
			rescope: _propTypes2.default.object,
			$stores: _propTypes2.default.object
		}), _class3.contextTypes = _extends({}, BaseComponent.contextTypes || {}, {
			rescope: _propTypes2.default.object,
			$stores: _propTypes2.default.object
		}), _class3.defaultProps = _extends({}, BaseComponent.defaultProps || {}), _class3.displayName = "rs(" + compName + ")", _temp3);

		return ScopeProvider;
	}

	(0, _rescope.addScopableType)(function (Comp) {
		return Comp && (Comp.prototype instanceof _react2.default.Component || Comp === _react2.default.Component);
	}, reScope);

	/**
  * Map specified props to
  * @param BaseComponent {React.Component} Base React Component ( default :
  *     React.Component )
  * @param storesMap {Object} the propagated Scope where the stores will be searched
  * @param parentScope {Scope} the propagated Scope where the stores will be searched
  * @param parentScopeId {string} the propagated Scope where the stores will be searched
  * @param additionalContext {Object} context to be propagated
  * @returns {*}
  */
	function propsToScope() {
		var _class4, _temp4;

		for (var _len4 = arguments.length, argz = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
			argz[_key4] = arguments[_key4];
		}

		var BaseComponent = (!argz[0] || argz[0].prototype instanceof _react2.default.Component || argz[0] === _react2.default.Component) && argz.shift(),
		    scopedProps = (!argz[0] || _is2.default.array(argz[0])) && argz.shift() || [],
		    scopeCfg = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift() || {},
		    parent = (!argz[0] || argz[0] instanceof _rescope.Scope) && argz.shift(),
		    parentId = (!argz[0] || _is2.default.string(argz[0])) && argz.shift();

		var compName = BaseComponent.displayName || BaseComponent.name;

		if (!(BaseComponent && (BaseComponent.prototype instanceof _react2.default.Component || BaseComponent === _react2.default.Component))) {
			return function (BaseComponent) {
				return propsToScope(BaseComponent, scopedProps, scopeCfg, parent, parentId);
			};
		}

		var ScopeProvider = (_temp4 = _class4 = function (_React$Component3) {
			_inherits(ScopeProvider, _React$Component3);

			function ScopeProvider(p, ctx, q) {
				_classCallCheck(this, ScopeProvider);

				var _parent = parent || parentId && _rescope.Scope.getScope(parentId) || p.__scope || ctx.rescope,
				    $scope = new _rescope.Scope(_extends({}, scopedProps.filter(function (k) {
					return !_parent.stores[k];
				}).reduce(function (h, k) {
					return h[k] = _rescope.Store, h;
				}, {})), _extends({
					autoDestroy: true,
					key: compName,
					parent: _parent
				}, scopeCfg));

				var _this4 = _possibleConstructorReturn(this, (ScopeProvider.__proto__ || Object.getPrototypeOf(ScopeProvider)).call(this, p, _extends({}, ctx, { rescope: $scope, $stores: $scope.stores }), q));

				_this4.$scope = _this4.$scope || $scope;
				_this4.$actions = _this4.$scope && _this4.$scope.actions;
				_this4.$stores = _this4.$scope && _this4.$scope.stores;
				_this4.$scope.retain();
				scopedProps.forEach(function (k) {
					return _this4.$scope.state[k] = p[k] || BaseComponent.defaultProps && BaseComponent.defaultProps[k];
				});
				return _this4;
			}

			_createClass(ScopeProvider, [{
				key: 'componentWillReceiveProps',
				value: function componentWillReceiveProps(np) {
					var _this5 = this;

					scopedProps.forEach(function (p) {
						return _this5.props[p] !== np[p] && _this5.$stores[p].setState(np[p]);
					});
					_get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillReceiveProps', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillReceiveProps', this).apply(this, arguments);
				}
			}, {
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
					_get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillUnmount', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillUnmount', this).call(this);
					this.$scope && this.$scope.dispose();
				}
			}, {
				key: 'getChildContext',
				value: function getChildContext() {
					var ctx = _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'getChildContext', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'getChildContext', this).call(this) || {};
					return _extends({}, ctx, {
						rescope: this.$scope,
						$stores: this.$scope.stores
					});
				}
			}, {
				key: 'render',
				value: function render() {
					var _this6 = this;

					var fProps = Object.keys(this.props).reduce(function (h, k) {
						return !scopedProps.includes(k) && (h[k] = _this6.props[k]), h;
					}, {});
					return _react2.default.createElement(BaseComponent, _extends({}, fProps, this.state, {
						$dispatch: this.$dispatch,
						$actions: this.$actions,
						$stores: this.$stores }));
				}
			}]);

			return ScopeProvider;
		}(_react2.default.Component), _class4._originComponent = BaseComponent._originComponent || BaseComponent, _class4.childContextTypes = _extends({}, BaseComponent.childContextTypes || {}, {
			rescope: _propTypes2.default.object,
			$stores: _propTypes2.default.object
		}), _class4.contextTypes = _extends({}, BaseComponent.contextTypes || {}, {
			rescope: _propTypes2.default.object,
			$stores: _propTypes2.default.object
		}), _class4.defaultProps = _extends({}, BaseComponent.defaultProps || {}), _class4.displayName = "p2sc(" + compName + ")", _temp4);

		return ScopeProvider;
	}

	/**
  * Bind a component props to the specified store,
  * render with the specified store result data
  *
  * @param BaseComponent {React.Component} Base React Component ( default :
  *     React.Component )
  * @param storesMap {Object} the propagated Scope where the stores will be searched
  * @param parentScope {Scope} the propagated Scope where the stores will be searched
  * @param parentScopeId {string} the propagated Scope where the stores will be searched
  * @param additionalContext {Object} context to be propagated
  * @returns {*}
  */
	function propsToStore() {
		var _class5, _temp5;

		for (var _len5 = arguments.length, argz = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
			argz[_key5] = arguments[_key5];
		}

		var BaseComponent = (!argz[0] || argz[0].prototype instanceof _react2.default.Component || argz[0] === _react2.default.Component) && argz.shift(),
		    storeComp = (!argz[0] || argz[0] instanceof _rescope.Store) && argz.shift() || _rescope.Store,
		    storeName = (!argz[0] || _is2.default.string(argz[0])) && argz.shift() || storeComp.displayName || "props",
		    scopeCfg = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift() || {},
		    parent = (!argz[0] || argz[0] instanceof _rescope.Scope) && argz.shift(),
		    parentId = (!argz[0] || _is2.default.string(argz[0])) && argz.shift();

		var compName = BaseComponent.displayName || BaseComponent.name;

		if (!(BaseComponent && (BaseComponent.prototype instanceof _react2.default.Component || BaseComponent === _react2.default.Component))) {
			return function (BaseComponent) {
				return propsToStore(BaseComponent, storeComp, storeName, scopeCfg, parent, parentId);
			};
		}

		var ScopeProvider = (_temp5 = _class5 = function (_reScopeToState) {
			_inherits(ScopeProvider, _reScopeToState);

			function ScopeProvider(p, ctx, q) {
				_classCallCheck(this, ScopeProvider);

				var _parent = parent || parentId && _rescope.Scope.getScope(parentId) || p.__scope || ctx.rescope,
				    $scope = _parent && _parent.stores[storeName] && _parent || new _rescope.Scope(_defineProperty({}, storeName, storeComp), _extends({
					autoDestroy: true,
					key: compName,
					parent: _parent
				}, scopeCfg));

				var _this7 = _possibleConstructorReturn(this, (ScopeProvider.__proto__ || Object.getPrototypeOf(ScopeProvider)).call(this, p, _extends({}, ctx, { rescope: $scope, $stores: $scope.stores }), q));

				_this7.$scope = _this7.$scope || $scope;
				_this7.$actions = _this7.$scope && _this7.$scope.actions;
				_this7.$stores = _this7.$scope && _this7.$scope.stores;
				_this7.$scope.retain();
				_this7.$scope.state[storeName] = _extends({}, BaseComponent.defaultProps || {}, p);
				return _this7;
			}

			_createClass(ScopeProvider, [{
				key: 'componentWillReceiveProps',
				value: function componentWillReceiveProps(np) {
					// @todo context switching
					this.$stores && this.$stores[storeName] && this.$stores[storeName].setState(np);
					_get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillReceiveProps', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillReceiveProps', this).apply(this, arguments);
				}
			}, {
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
					_get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillUnmount', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'componentWillUnmount', this).call(this);
					this.$scope && this.$scope.dispose();
				}
			}, {
				key: 'getChildContext',
				value: function getChildContext() {
					var ctx = _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'getChildContext', this) && _get(ScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ScopeProvider.prototype), 'getChildContext', this).call(this) || {};
					return _extends({}, ctx, {
						rescope: this.$scope,
						$stores: this.$scope.stores
					});
				}
			}, {
				key: 'render',
				value: function render() {
					return _react2.default.createElement(BaseComponent, _extends({}, this.state && this.state[storeName] || {}, {
						$dispatch: this.$dispatch,
						$actions: this.$actions,
						$stores: this.$stores }));
				}
			}]);

			return ScopeProvider;
		}(reScopeToState(_react2.default.Component, [storeName])), _class5._originComponent = BaseComponent._originComponent || BaseComponent, _class5.childContextTypes = _extends({}, BaseComponent.childContextTypes || {}, {
			rescope: _propTypes2.default.object,
			$stores: _propTypes2.default.object
		}), _class5.contextTypes = _extends({}, BaseComponent.contextTypes || {}, {
			rescope: _propTypes2.default.object,
			$stores: _propTypes2.default.object
		}), _class5.defaultProps = _extends({}, BaseComponent.defaultProps || {}), _class5.displayName = "p2st(" + compName + ")", _temp5);

		return ScopeProvider;
	}

	var Component = reScopeToState(_react2.default.Component);

	exports.default = Component;
	exports.Component = Component;
	exports.reScopeProps = reScopeProps;
	exports.propsToScope = propsToScope;
	exports.propsToStore = propsToStore;

	/***/
},
/* 3 */
/***/function (module, exports) {

	module.exports = __webpack_require__(1);

	/***/
},
/* 4 */
/***/function (module, exports) {

	module.exports = __webpack_require__(7);

	/***/
},
/* 5 */
/***/function (module, exports) {

	module.exports = __webpack_require__(43);

	/***/
}]
/******/);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\react-dom\\server.browser.js'");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
    module.exports = __webpack_require__(33);
} else {
    module.exports = __webpack_require__(32);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _dec2, _dec3, _desc, _value, _obj, _init, _desc2, _value2, _obj2, _init2, _init3, _init4, _init5, _desc3, _value3, _obj3, _init6, _init7;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _superagent = __webpack_require__(62);

var _superagent2 = _interopRequireDefault(_superagent);

var _shortid = __webpack_require__(13);

var _shortid2 = _interopRequireDefault(_shortid);

var _reactRnd = __webpack_require__(29);

var _reactRnd2 = _interopRequireDefault(_reactRnd);

var _rescopeSpells = __webpack_require__(31);

var _server = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

exports.default = (_dec = (0, _rescopeSpells.asRenderer)(["!Home"]), _dec2 = (0, _rescopeSpells.asRenderer)(["!AppState.appState", "!AppState.someData", "!PostIt"]), _dec3 = (0, _rescopeSpells.asRenderer)((_obj = {
    DaSearch: {
        src: "https://query.yahooapis.com/v1/public/yql?format=json&env=sto&q=",

        updateSearch: function updateSearch(searching) {
            var _this = this;

            var state = this.nextState;

            if (searching == state.searching) return;
            if (searching.length < 4) return { searching: searching };

            _superagent2.default.get(state.src + 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + searching + '")').then(function (res) {
                if (searching != _this.nextState.searching) return;
                try {
                    _this.data.results = {
                        place: res.body.query.results.channel.location,
                        img: res.body.query.results.channel.image.url,
                        descr: res.body.query.results.channel.item.description.replace('<![CDATA[', '').replace(']]>', '')
                    };
                } catch (e) {
                    _this.data.results = {
                        place: { city: "no results" }
                    };
                }
                _this.push(_this.data);
                _this.release();
            });
            this.wait();
            return { searching: searching };
        }
    }

}, (_applyDecoratedDescriptor(_obj, "DaSearch", [_rescopeSpells.asStateMap], (_init = Object.getOwnPropertyDescriptor(_obj, "DaSearch"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _obj)), _obj), ["DaSearch"]), (_obj2 = {
    AppState: (_obj3 = {
        appState: {
            selectedPostItId: null,
            selectPostIt: function selectPostIt(selectedPostItId) {
                //debugger
                return { selectedPostItId: selectedPostItId };
            }
        },

        someData: {
            // initial state
            src: "/api/hello",
            items: [{
                "_id": "rkUQHZrqM",
                "size": { "width": 300, "height": 400 },
                "text": "New Post It #0 somewhere we wait some new shit out there !",
                "position": { "x": 321, "y": 167 }
            }, {
                "_id": "r1bcuMrcM",
                "size": { "width": 300, "height": 400 },
                "text": "do somethink",
                "position": { "x": 260, "y": 576 }
            }],
            // actions
            newPostIt: function newPostIt() {
                return {
                    items: [].concat(_toConsumableArray(this.nextState.items), [{
                        _id: _shortid2.default.generate(),
                        size: {
                            width: 200,
                            height: 200
                        },
                        position: {
                            x: 100 + ~~(Math.random() * 600),
                            y: 100 + ~~(Math.random() * 600)
                        },
                        text: "New Post It #" + this.nextState.items.length
                    }])
                };
            },
            updatePostIt: function updatePostIt(postIt) {
                return {
                    items: this.nextState.items.map(function (it) {
                        return it._id === postIt._id ? postIt : it;
                    })
                };
            },
            rmPostIt: function rmPostIt(postIt) {
                return {
                    items: this.nextState.items.filter(function (it) {
                        return it._id !== postIt._id;
                    })
                };
            },
            saveState: function saveState() {
                _superagent2.default.post('/', this.$stores.$parent.serialize()).then(function (e, r) {
                    console.log(e, r);
                });
            }
        }
    }, (_applyDecoratedDescriptor(_obj3, "appState", [_rescopeSpells.asStateMap], (_init6 = Object.getOwnPropertyDescriptor(_obj3, "appState"), _init6 = _init6 ? _init6.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
            return _init6;
        }
    }), _obj3), _applyDecoratedDescriptor(_obj3, "someData", [_rescopeSpells.asStateMap], (_init7 = Object.getOwnPropertyDescriptor(_obj3, "someData"), _init7 = _init7 ? _init7.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
            return _init7;
        }
    }), _obj3)), _obj3),

    SSRIndex: function SSRIndex(_ref, _ref2) {
        var Home = _ref.Home,
            sessionId = _ref.props.sessionId;
        var $scope = _ref2.$scope;
        return _react2.default.createElement(
            "html",
            { lang: "en" },
            _react2.default.createElement(
                "head",
                null,
                _react2.default.createElement("meta", { charSet: "UTF-8" }),
                _react2.default.createElement(
                    "title",
                    null,
                    "Really basic drafty rescope + react SSR example"
                )
            ),
            _react2.default.createElement(
                "body",
                null,
                _react2.default.createElement(
                    "div",
                    { id: "app" },
                    _react2.default.createElement(Home, null)
                ),
                _react2.default.createElement("script", { src: "./App.js" }),
                _react2.default.createElement("script", {
                    dangerouslySetInnerHTML: { __html: "App.renderTo(document.getElementById('app'), " + JSON.stringify($scope.parent.parent.serialize()[sessionId]) + ", document.cookie);" } })
            )
        );
    },

    Home: function Home(_ref3, _ref4) {
        var someData = _ref3.someData,
            appState = _ref3.appState,
            PostIt = _ref3.PostIt;
        var $actions = _ref4.$actions,
            $stores = _ref4.$stores,
            $store = _ref4.$store;
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "h1",
                null,
                "Really basic drafty rescope SSR example"
            ),
            _react2.default.createElement(
                "div",
                {
                    className: "newBtn button",
                    onClick: $actions.AppState.newPostIt },
                "Add Post It"
            ),
            _react2.default.createElement(
                "div",
                {
                    className: "saveBtn button",
                    onClick: $actions.AppState.saveState },
                "Save state"
            ),
            someData.items.map(function (note) {
                return _react2.default.createElement(PostIt, { key: note._id, record: note,
                    onSelect: function onSelect(e) {
                        return $actions.AppState.selectPostIt(note._id);
                    },
                    selected: note._id == appState.selectedPostItId });
            })
        );
    },

    PostIt: function PostIt(_ref5, _ref6) {
        var _ref5$props = _ref5.props,
            record = _ref5$props.record,
            onSelect = _ref5$props.onSelect,
            selected = _ref5$props.selected,
            position = _ref5.position,
            text = _ref5.text,
            size = _ref5.size,
            editing = _ref5.editing,
            DaSearch = _ref5.DaSearch,
            _ref5$doSave = _ref5.doSave,
            doSave = _ref5$doSave === undefined ? function () {
            return $actions.AppState.updatePostIt(_extends({}, record, {
                size: size || record.size,
                position: position
            }));
        } : _ref5$doSave;
        var $actions = _ref6.$actions,
            $stores = _ref6.$stores,
            $store = _ref6.$store;

        return _react2.default.createElement(
            _reactRnd2.default,
            {
                absolutePos: true,
                z: selected ? 2000 : 1,
                size: size || record.size,
                position: position || record.position,
                onDragStop: doSave,
                onResizeStop: doSave,
                onDrag: function onDrag(e, d) {
                    !selected && onSelect(record);
                    $store.setState({
                        position: { x: d.x, y: d.y }
                    });
                },
                onResize: function onResize(e, direction, ref, delta, position) {
                    $store.setState({
                        position: position,
                        size: {
                            width: ref.offsetWidth,
                            height: ref.offsetHeight
                        }
                    });
                } },
            _react2.default.createElement(
                "div",
                { className: "postit handle" },
                _react2.default.createElement(
                    "div",
                    { className: "search" },
                    _react2.default.createElement("input", {
                        onChange: function onChange(e) {
                            $actions.updateSearch(e.target.value);
                        }
                        //defaultValue={ DaSearch.searching }
                        , onMouseDown: function onMouseDown(e) {
                            return e.stopPropagation();
                        } })
                ),
                DaSearch && DaSearch.results && DaSearch.results.place && _react2.default.createElement(
                    "div",
                    null,
                    DaSearch.results.place.city,
                    " - ",
                    DaSearch.results.place.country
                ),
                _react2.default.createElement("div", { className: "text",
                    dangerouslySetInnerHTML: {
                        __html: DaSearch && DaSearch.results && DaSearch.results.descr
                    } })
            )
        );
    }
}, (_applyDecoratedDescriptor(_obj2, "AppState", [_rescopeSpells.asScope], (_init2 = Object.getOwnPropertyDescriptor(_obj2, "AppState"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init2;
    }
}), _obj2), _applyDecoratedDescriptor(_obj2, "SSRIndex", [_dec], (_init3 = Object.getOwnPropertyDescriptor(_obj2, "SSRIndex"), _init3 = _init3 ? _init3.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init3;
    }
}), _obj2), _applyDecoratedDescriptor(_obj2, "Home", [_dec2], (_init4 = Object.getOwnPropertyDescriptor(_obj2, "Home"), _init4 = _init4 ? _init4.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init4;
    }
}), _obj2), _applyDecoratedDescriptor(_obj2, "PostIt", [_dec3], (_init5 = Object.getOwnPropertyDescriptor(_obj2, "PostIt"), _init5 = _init5 ? _init5.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init5;
    }
}), _obj2)), _obj2));
module.exports = exports["default"];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(35);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(59)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/sass-loader/lib/loader.js??ref--2-3!./App.scss", function() {
		var newContent = require("!!../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/sass-loader/lib/loader.js??ref--2-3!./App.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_draggable__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_re_resizable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_re_resizable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_re_resizable__);





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var resizableStyle = {
  width: 'auto',
  height: 'auto',
  display: 'inline-block',
  position: 'absolute',
  top: 0,
  left: 0
};

var Rnd = function (_React$Component) {
  inherits(Rnd, _React$Component);

  function Rnd(props) {
    classCallCheck(this, Rnd);

    var _this = possibleConstructorReturn(this, (Rnd.__proto__ || Object.getPrototypeOf(Rnd)).call(this, props));

    _this.state = {
      z: props.z,
      original: {
        x: 0,
        y: 0
      },
      bounds: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      maxWidth: props.maxWidth,
      maxHeight: props.maxHeight,
      isMounted: false
    };
    _this.onResizeStart = _this.onResizeStart.bind(_this);
    _this.onResize = _this.onResize.bind(_this);
    _this.onResizeStop = _this.onResizeStop.bind(_this);
    _this.onDragStart = _this.onDragStart.bind(_this);
    _this.onDrag = _this.onDrag.bind(_this);
    _this.onDragStop = _this.onDragStop.bind(_this);
    _this.getMaxSizesFromProps = _this.getMaxSizesFromProps.bind(_this);
    return _this;
  }

  createClass(Rnd, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.z !== nextProps.z) {
        this.setState({ z: nextProps.z });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setParentPosition();
    }
  }, {
    key: 'getParentSize',
    value: function getParentSize() {
      return this.resizable.getParentSize();
    }
  }, {
    key: 'getMaxSizesFromProps',
    value: function getMaxSizesFromProps() {
      var maxWidth = typeof this.props.maxWidth === 'undefined' ? Number.MAX_SAFE_INTEGER : this.props.maxWidth;
      var maxHeight = typeof this.props.maxHeight === 'undefined' ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
      return { maxWidth: maxWidth, maxHeight: maxHeight };
    }
  }, {
    key: 'getSelfElement',
    value: function getSelfElement() {
      if (!this) return null;
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);
    }
  }, {
    key: 'setParentPosition',
    value: function setParentPosition() {
      var element = this.getSelfElement();
      if (element instanceof Element) {
        var parent = element.parentNode;
        if (!parent || typeof window === 'undefined') return;
        if (!(parent instanceof HTMLElement)) return;
        if (getComputedStyle(parent).position !== 'static') {
          this.setState({ isMounted: true });
          return;
        }
        parent.style.position = 'relative';
        this.setState({ isMounted: true });
      }
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart(e, data) {
      if (this.props.onDragStart) {
        this.props.onDragStart(e, data);
      }
      if (!this.props.bounds) return;
      var parent = this.resizable && this.resizable.parentNode;
      var target = this.props.bounds === 'parent' ? parent : document.querySelector(this.props.bounds);
      if (!(target instanceof HTMLElement) || !(parent instanceof HTMLElement)) {
        return;
      }
      var targetRect = target.getBoundingClientRect();
      var targetLeft = targetRect.left;
      var targetTop = targetRect.top;
      var parentRect = parent.getBoundingClientRect();
      var parentLeft = parentRect.left;
      var parentTop = parentRect.top;
      var left = targetLeft - parentLeft;
      var top = targetTop - parentTop;
      if (!this.resizable) return;
      this.setState({
        bounds: {
          top: top,
          right: left + (target.offsetWidth - this.resizable.size.width),
          bottom: this.props._freeBottomBounds // eslint-disable-line
          ? 2147483647 : top + (target.offsetHeight - this.resizable.size.height),
          left: left
        }
      });
    }
  }, {
    key: 'onDrag',
    value: function onDrag(e, data) {
      if (this.props.onDrag) {
        this.props.onDrag(e, data);
      }
    }
  }, {
    key: 'onDragStop',
    value: function onDragStop(e, data) {
      if (this.props.onDragStop) {
        this.props.onDragStop(e, data);
      }
    }
  }, {
    key: 'onResizeStart',
    value: function onResizeStart(e, dir, refToElement) {
      e.stopPropagation();
      this.setState({
        original: { x: this.draggable.state.x, y: this.draggable.state.y }
      });
      if (this.props.bounds) {
        var parent = this.resizable && this.resizable.parentNode;
        var target = this.props.bounds === 'parent' ? parent : document.querySelector(this.props.bounds);
        var self = this.getSelfElement();
        if (self instanceof Element && target instanceof HTMLElement && parent instanceof HTMLElement) {
          var _getMaxSizesFromProps = this.getMaxSizesFromProps(),
              _maxWidth = _getMaxSizesFromProps.maxWidth,
              _maxHeight = _getMaxSizesFromProps.maxHeight;

          var parentSize = this.getParentSize();
          if (_maxWidth && typeof _maxWidth === 'string') {
            if (_maxWidth.endsWith('%')) {
              var ratio = Number(_maxWidth.replace('%', '')) / 100;
              _maxWidth = parentSize.width * ratio;
            } else if (_maxWidth.endsWith('px')) {
              _maxWidth = Number(_maxWidth.replace('px', ''));
            }
          }
          if (_maxHeight && typeof _maxHeight === 'string') {
            if (_maxHeight.endsWith('%')) {
              var _ratio = Number(_maxHeight.replace('%', '')) / 100;
              _maxHeight = parentSize.width * _ratio;
            } else if (_maxHeight.endsWith('px')) {
              _maxHeight = Number(_maxHeight.replace('px', ''));
            }
          }
          var selfRect = self.getBoundingClientRect();
          var selfLeft = selfRect.left;
          var selfTop = selfRect.top;
          var targetRect = target.getBoundingClientRect();
          var targetLeft = targetRect.left;
          var targetTop = targetRect.top;
          if (/left/i.test(dir) && this.resizable) {
            var max = selfLeft - targetLeft + this.resizable.size.width;
            this.setState({ maxWidth: max > Number(_maxWidth) ? _maxWidth : max });
          }
          if (/right/i.test(dir)) {
            var _max = target.offsetWidth + (targetLeft - selfLeft);
            this.setState({ maxWidth: _max > Number(_maxWidth) ? _maxWidth : _max });
          }
          if (/top/i.test(dir) && this.resizable) {
            var _max2 = selfTop - targetTop + this.resizable.size.height;
            this.setState({
              maxHeight: _max2 > Number(_maxHeight) ? _maxHeight : _max2
            });
          }
          if (/bottom/i.test(dir)) {
            var _max3 = target.offsetHeight + (targetTop - selfTop);
            this.setState({
              maxHeight: _max3 > Number(_maxHeight) ? _maxHeight : _max3
            });
          }
        }
      } else {
        this.setState({
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight
        });
      }
      if (this.props.onResizeStart) {
        this.props.onResizeStart(e, dir, refToElement);
      }
    }
  }, {
    key: 'onResize',
    value: function onResize(e, direction, refToResizableElement, delta) {
      var x = void 0;
      var y = void 0;
      if (/left/i.test(direction)) {
        x = this.state.original.x - delta.width;
        this.draggable.setState({ x: x });
      }
      if (/top/i.test(direction)) {
        y = this.state.original.y - delta.height;
        this.draggable.setState({ y: y });
      }
      if (this.props.onResize) {
        this.props.onResize(e, direction, refToResizableElement, delta, {
          x: x || this.draggable.state.x,
          y: y || this.draggable.state.y
        });
      }
    }
  }, {
    key: 'onResizeStop',
    value: function onResizeStop(e, direction, refToResizableElement, delta) {
      var _getMaxSizesFromProps2 = this.getMaxSizesFromProps(),
          maxWidth = _getMaxSizesFromProps2.maxWidth,
          maxHeight = _getMaxSizesFromProps2.maxHeight;

      this.setState({ maxWidth: maxWidth, maxHeight: maxHeight });
      if (this.props.onResizeStop) {
        var _position = {
          x: this.draggable.state.x,
          y: this.draggable.state.y
        };
        this.props.onResizeStop(e, direction, refToResizableElement, delta, _position);
      }
    }
  }, {
    key: 'updateSize',
    value: function updateSize(size) {
      if (!this.resizable) return;
      this.resizable.updateSize({ width: size.width, height: size.height });
    }
  }, {
    key: 'updatePosition',
    value: function updatePosition(position) {
      this.draggable.setState(position);
    }
  }, {
    key: 'updateZIndex',
    value: function updateZIndex(z) {
      this.setState({ z: z });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var cursorStyle = this.props.disableDragging || this.props.dragHandleClassName ? { cursor: 'normal' } : { cursor: 'move' };
      var innerStyle = _extends({}, resizableStyle, {
        zIndex: this.state.z
      }, cursorStyle, this.props.style);
      // HACK: Wait for setting relative to parent element, if props.absolutePos was not set ( SSR need initial render ). 
      if (!this.state.isMounted && !this.props.hasOwnProperty("absolutePos")) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('div', null);
      var maxHeight = this.props._freeBottomBounds ? 2147483647 : this.state.maxHeight; // eslint-disable-line
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
        __WEBPACK_IMPORTED_MODULE_2_react_draggable__["default"],
        {
          ref: function ref(c) {
            _this2.draggable = c;
          },
          handle: this.props.dragHandleClassName,
          defaultPosition: this.props.default,
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop,
          axis: this.props.dragAxis,
          disabled: this.props.disableDragging,
          grid: this.props.dragGrid,
          bounds: this.props.bounds ? this.state.bounds : undefined,
          position: this.props.position,
          enableUserSelectHack: this.props.enableUserSelectHack,
          cancel: this.props.cancel
        },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(
          __WEBPACK_IMPORTED_MODULE_3_re_resizable__["default"],
          _extends({}, this.props.extendsProps, {
            className: this.props.className,
            ref: function ref(c) {
              _this2.resizable = c;
            },
            defaultSize: this.props.default,
            size: this.props.size,
            enable: this.props.enableResizing,
            onResizeStart: this.onResizeStart,
            onResize: this.onResize,
            onResizeStop: this.onResizeStop,
            style: innerStyle,
            minWidth: this.props.minWidth,
            minHeight: this.props.minHeight,
            maxWidth: this.state.maxWidth,
            maxHeight: maxHeight,
            grid: this.props.resizeGrid,
            handleWrapperClass: this.props.resizeHandleWrapperClass,
            handleWrapperStyle: this.props.resizeHandleWrapperStyle,
            lockAspectRatio: this.props.lockAspectRatio,
            lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth,
            lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight,
            handleStyles: this.props.resizeHandleStyles,
            handleClasses: this.props.resizeHandleClasses
          }),
          this.props.children
        )
      );
    }
  }]);
  return Rnd;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Rnd.defaultProps = {
  maxWidth: Number.MAX_SAFE_INTEGER,
  maxHeight: Number.MAX_SAFE_INTEGER,
  onResizeStart: function onResizeStart() {},
  onResize: function onResize() {},
  onResizeStop: function onResizeStop() {},
  onDragStart: function onDragStart() {},
  onDrag: function onDrag() {},
  onDragStop: function onDragStop() {}
};

/* harmony default export */ __webpack_exports__["default"] = (Rnd);
//# sourceMappingURL=index.js.map


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class, _temp; /*
                    * Copyright (c)  2018 Wise Wild Web .
                    *
                    *  MIT License
                    *
                    *  Permission is hereby granted, free of charge, to any person obtaining a copy
                    *  of this software and associated documentation files (the "Software"), to deal
                    *  in the Software without restriction, including without limitation the rights
                    *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    *  copies of the Software, and to permit persons to whom the Software is
                    *  furnished to do so, subject to the following conditions:
                    *
                    *  The above copyright notice and this permission notice shall be included in all
                    *  copies or substantial portions of the Software.
                    *
                    *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    *  SOFTWARE.
                    *
                    * @author : Nathanael Braun
                    * @contact : caipilabs@gmail.com
                    */

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _AppScope = __webpack_require__(26);

var _AppScope2 = _interopRequireDefault(_AppScope);

var _rscopes = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rscopes\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _server = __webpack_require__(15);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cookie = __webpack_require__(27);

var ReactDom = __webpack_require__(10);

var App = (_temp = _class = function App() {
    _classCallCheck(this, App);
}, _class.renderTo = function (node, state) {
    var cScope = new _rscopes.Scope(_AppScope2.default, { id: "App" }),
        sid = (cookie.parse(document.cookie) || {})["connect.sid"];
    sid = sid && sid.replace(/^s\:([^\.]+)(?:$|\..*$)/ig, "$1");
    window.scopes = _rscopes.Scope.scopes;
    window.test = function () {
        App.renderSSR({
            state: cScope.serialize(),
            sessionId: sid
        }, function (e, r) {
            return console.log(r);
        });
    };
    state && cScope.restore(state);
    cScope.mount(["Home"]).then(function (_ref) {
        var Home = _ref.Home;

        ReactDom.hydrate(_react2.default.createElement(Home, { sessionId: sid }), node);
    });
}, _class.renderSSR = function (cfg, cb) {
    var env = new _rscopes.Scope({}, {}),
        cScope = new _rscopes.Scope(_AppScope2.default, {
        key: "App",
        parent: env,
        snapshot: _defineProperty({}, env._id, cfg.state)
    }),
        state = _defineProperty({}, env._id, cfg.state);
    //cfg.state && cScope.restore(state);
    console.log(cfg.sessionId, state);
    cScope.mount(["SSRIndex"]).then(function (State) {
        ///mount deps
        (0, _server.renderToString)(_react2.default.createElement(State.SSRIndex, { sessionId: env._id }));
        cScope.then(function (State) {
            cb(null, (0, _server.renderToString)(_react2.default.createElement(State.SSRIndex, { sessionId: env._id })));
            console.log(cfg.sessionId, cScope.serialize());
            cScope.destroy();
        });
    });
}, _temp);


if (typeof window != 'undefined') {
    window.App = App;
}
exports.default = App;
module.exports = exports["default"];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
module.exports =
/******/function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};
	/******/
	/******/ // The require function
	/******/function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;
		/******/
		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };
		/******/
		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/module.loaded = true;
		/******/
		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;
	/******/
	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "/";
	/******/
	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _rescope = __webpack_require__(1);

	var _rescope2 = _interopRequireDefault(_rescope);

	__webpack_require__(2);

	__webpack_require__(4);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _rescope2.default.spells; /*
                                              * Copyright (c)  2018 Wise Wild Web .
                                              *
                                              *  MIT License
                                              *
                                              *  Permission is hereby granted, free of charge, to any person obtaining a copy
                                              *  of this software and associated documentation files (the "Software"), to deal
                                              *  in the Software without restriction, including without limitation the rights
                                              *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                              *  copies of the Software, and to permit persons to whom the Software is
                                              *  furnished to do so, subject to the following conditions:
                                              *
                                              *  The above copyright notice and this permission notice shall be included in all
                                              *  copies or substantial portions of the Software.
                                              *
                                              *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                              *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                              *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                              *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                              *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                              *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                              *  SOFTWARE.
                                              *
                                              * @author : Nathanael Braun
                                              * @contact : caipilabs@gmail.com
                                              */

	module.exports = exports["default"];

	/***/
},
/* 1 */
/***/function (module, exports) {

	module.exports = __webpack_require__(16);

	/***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _rescope = __webpack_require__(1);

	var _rescope2 = _interopRequireDefault(_rescope);

	var _is = __webpack_require__(3);

	var _is2 = _interopRequireDefault(_is);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	// will use as external the index in dist

	/*
  * Copyright (c)  2018 Wise Wild Web .
  *
  *  MIT License
  *
  *  Permission is hereby granted, free of charge, to any person obtaining a copy
  *  of this software and associated documentation files (the "Software"), to deal
  *  in the Software without restriction, including without limitation the rights
  *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  *  copies of the Software, and to permit persons to whom the Software is
  *  furnished to do so, subject to the following conditions:
  *
  *  The above copyright notice and this permission notice shall be included in all
  *  copies or substantial portions of the Software.
  *
  *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  *  SOFTWARE.
  *
  * @author : Nathanael Braun
  * @contact : caipilabs@gmail.com
  */
	var SimpleObjectProto = {}.constructor;
	_rescope2.default.spells = {};

	var castTypesToAppliable = {};
	var castTypes = {};

	_rescope2.default.isSpell = function caster() {
		for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
			argz[_key] = arguments[_key];
		}

		// are we decorating a member / without argz
		if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
			argz[2].value = addCaster(argz[0][argz[1]], argz);
			return argz[0];
		} else if (!_is2.default.fn(argz[0])) {
			return function () {
				for (var _len2 = arguments.length, argz2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					argz2[_key2] = arguments[_key2];
				}

				// are we decorating a member / with argz
				if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
					argz2[2].value = addCaster.apply(undefined, [argz2[0][argz2[1]]].concat(argz, [argz2]));
					return argz2[0];
				} else return caster.apply(undefined, [argz2[0]].concat(argz));
			};
		}
		return addCaster.apply(undefined, argz);
	};

	function addCaster() {
		for (var _len3 = arguments.length, argz = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			argz[_key3] = arguments[_key3];
		}

		var cast = (!argz[0] || _is2.default.fn(argz[0])) && argz.shift();
		if (!cast) throw "ReScope cast : bad decorator function";
		var typeName = (!argz[0] || _is2.default.string(argz[0])) && argz.shift() || cast.name || cast.displayName,
		    test = (!argz[0] || _is2.default.fn(argz[0])) && argz.shift(),
		    prefix = (!argz[0] || _is2.default.string(argz[0])) && argz.shift() || "as",
		    memberDescr = (!argz[0] || _is2.default.bool(argz[0]) || _is2.default.array(argz[0])) && argz.shift() || true,
		    casterName = typeName && prefix + typeName[0].toUpperCase() + typeName.substr(1);

		if (!castTypesToAppliable[typeName]) {
			castTypesToAppliable[typeName] = [];

			_rescope2.default.spells[casterName] = castTypes[typeName] = function doCast() {
				for (var _len4 = arguments.length, argz = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
					argz[_key4] = arguments[_key4];
				}

				// are we decorating a member / without argz
				if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
					argz[0][argz[1]] = applyCastableType(typeName, argz[0][argz[1]], [], argz);
					return argz[0];
				} else if (!isCastableType(typeName, argz[0])) {
					return function () {
						for (var _len5 = arguments.length, argz2 = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
							argz2[_key5] = arguments[_key5];
						}

						// are we decorating a member / with argz
						if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
							argz2[0][argz2[1]] = applyCastableType(typeName, argz2[0][argz2[1]], argz, argz2);
							return argz2[0];
						} else return doCast.apply(undefined, [argz2[0]].concat(argz));
					};
				}
				return applyCastableType(typeName, argz[0], argz.slice(1));
			};
		}
		castTypesToAppliable[typeName].unshift({
			typeName: typeName, test: test, memberDescr: memberDescr, cast: cast
		});
		return cast;
	}

	function isCastableType(typeName, Comp, member, stateScope) {
		var castable = castTypesToAppliable[typeName];
		for (var i = 0; i < castable.length; i++) {
			if ((member === undefined || !!member == !!castable[i].memberDescr) && castable[i].test(Comp)) return castable[i];
		}return false;
	}

	function applyCastableType(typeName, Comp, argz, member, stateScope) {

		var castable = castTypesToAppliable[typeName] || [];
		for (var i = 0; i < castable.length; i++) {
			if ((member === undefined || !!member == !!castable[i].memberDescr) && castable[i].test(Comp)) return castable[i].cast(Comp, argz, member);
		}console.warn("reScope cast : Unknown type", typeName, Comp);
		return false;
	}

	exports.default = _rescope2.default;
	module.exports = exports["default"];

	/***/
},
/* 3 */
/***/function (module, exports) {

	module.exports = __webpack_require__(7);

	/***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _get = function get(object, property, receiver) {
		if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);if (parent === null) {
				return undefined;
			} else {
				return get(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;if (getter === undefined) {
				return undefined;
			}return getter.call(receiver);
		}
	};

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _dec, _dec2, _class, _dec3, _dec4, _dec5, _dec6, _dec7, _desc, _value, _obj; /*
                                                                                   * Copyright (c)  2018 Wise Wild Web .
                                                                                   *
                                                                                   *  MIT License
                                                                                   *
                                                                                   *  Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                   *  of this software and associated documentation files (the "Software"), to deal
                                                                                   *  in the Software without restriction, including without limitation the rights
                                                                                   *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                   *  copies of the Software, and to permit persons to whom the Software is
                                                                                   *  furnished to do so, subject to the following conditions:
                                                                                   *
                                                                                   *  The above copyright notice and this permission notice shall be included in all
                                                                                   *  copies or substantial portions of the Software.
                                                                                   *
                                                                                   *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                   *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                   *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                   *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                   *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                   *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                                                                   *  SOFTWARE.
                                                                                   *
                                                                                   * @author : Nathanael Braun
                                                                                   * @contact : caipilabs@gmail.com
                                                                                   */

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(6);

	var _is = __webpack_require__(3);

	var _is2 = _interopRequireDefault(_is);

	var _reactRescope = __webpack_require__(7);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
		} else {
			obj[key] = value;
		}return obj;
	}

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;

		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}

		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);

		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}

		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}

		return desc;
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var RSComp = (_dec = (0, _reactRescope.propsToScope)(['props']), _dec2 = (0, _reactRescope.scopeToProps)(['props']), _dec(_class = _dec2(_class = function (_Component) {
		_inherits(RSComp, _Component);

		function RSComp() {
			_classCallCheck(this, RSComp);

			return _possibleConstructorReturn(this, (RSComp.__proto__ || Object.getPrototypeOf(RSComp)).apply(this, arguments));
		}

		_createClass(RSComp, [{
			key: "render",
			value: function render() {
				return this.props.children || [];
			}
		}]);

		return RSComp;
	}(_reactRescope.Component)) || _class) || _class);

	var Lib = (_dec3 = (0, _reactRescope.isSpell)("stateMap", function (v) {
		return _is2.default.object(v) || _is2.default.string(v);
	}), _dec4 = (0, _reactRescope.isSpell)("scope", function (v) {
		return _is2.default.object(v);
	}), _dec5 = (0, _reactRescope.isSpell)("renderer", function (v) {
		return _is2.default.fn(v);
	}), _dec6 = (0, _reactRescope.isSpell)("rootRenderer", function (v) {
		return _is2.default.fn(v);
	}), _dec7 = (0, _reactRescope.isSpell)("store", function (v) {
		return _is2.default.fn(v);
	}), (_obj = {
		stateMap: function stateMap(obj, _ref, ref) {
			var _class2, _temp;

			var cfg = _ref[0];

			var use = [],
			    state = {},
			    actions = {};
			_reactRescope.Scope.stateMapToRefList(obj, state, use, actions);
			return _temp = _class2 = function (_Store) {
				_inherits(StateMap, _Store);

				function StateMap() {
					_classCallCheck(this, StateMap);

					return _possibleConstructorReturn(this, (StateMap.__proto__ || Object.getPrototypeOf(StateMap)).apply(this, arguments));
				}

				return StateMap;
			}(_reactRescope.Store), _class2.displayName = ref[1], _class2.use = use, _class2.state = state, _class2.actions = actions, _temp;
		},
		scope: function scope(obj, _ref2, ref) {
			var cfg = _ref2[0];

			return function (_Scope) {
				_inherits(childScope, _Scope);

				function childScope(map, cfg2) {
					_classCallCheck(this, childScope);

					return _possibleConstructorReturn(this, (childScope.__proto__ || Object.getPrototypeOf(childScope)).call(this, _extends({}, obj, map), _extends({}, cfg, cfg2)));
				}

				return childScope;
			}(_reactRescope.Scope);
		},
		renderer: function renderer(obj, argz, ref) {
			var _class3, _temp2;

			var use = void 0,
			    state = void 0,
			    scope = argz[1] && argz[0],
			    sm = argz[1] || argz[0];
			//if ( !argz[ 0 ] ) {
			state = {};
			//argz[ 0 ] = []
			//}
			//else if ( is.array(argz[ 0 ]) ) {
			//    use   = argz[ 0 ];
			//    state = !use.length && {};
			//}
			//else
			//    argz[ 0 ] && Scope.stateMapToRefList(argz[ 0 ], state = {}, use = [],
			// actions = {});

			//!use.includes('props') && use.push('props');
			return _temp2 = _class3 = function (_Store2) {
				_inherits(RSRenderer, _Store2);

				function RSRenderer(scope, cfg) {
					_classCallCheck(this, RSRenderer);

					var _this4 = _possibleConstructorReturn(this, (RSRenderer.__proto__ || Object.getPrototypeOf(RSRenderer)).apply(this, arguments));

					_this4._compScope = new _reactRescope.Scope({}, {
						key: RSRenderer.displayName,
						parent: _this4.$scope,
						autoDestroy: true

					});

					_this4._compScope.retain("RSRenderer");
					_this4.__snapshot = cfg.snapshot;
					return _this4;
				}

				//static actions     = actions;

				//static use         = use;


				_createClass(RSRenderer, [{
					key: "serialize",
					value: function serialize(cfg, output) {
						var _compScope;

						_get(RSRenderer.prototype.__proto__ || Object.getPrototypeOf(RSRenderer.prototype), "serialize", this).apply(this, arguments);
						(_compScope = this._compScope).serialize.apply(_compScope, arguments);
						return output;
					}

					//static actions     = actions;

				}, {
					key: "restore",
					value: function restore() {
						var _compScope2;

						_get(RSRenderer.prototype.__proto__ || Object.getPrototypeOf(RSRenderer.prototype), "restore", this).apply(this, arguments);
						(_compScope2 = this._compScope).restore.apply(_compScope2, arguments);
					}

					//static actions     = actions;

				}, {
					key: "destroy",
					value: function destroy() {
						this._compScope.dispose("RSRenderer");
						_get(RSRenderer.prototype.__proto__ || Object.getPrototypeOf(RSRenderer.prototype), "destroy", this).call(this);
					}
				}, {
					key: "apply",
					value: function apply(d, s, c) {
						var _dec8,
						    _this5 = this,
						    _class4;

						if (d) {
							//this._comp.setState(c);
							return d;
						}

						var RSCompRenderer = (_dec8 = (0, _reactRescope.scopeToState)(function (comp, props, ctx) {
							var viewScope = new _reactRescope.Scope(_extends(_defineProperty({}, RSRenderer.displayName, Lib.rootRenderer(obj, [sm], [, RSRenderer.displayName])), scope || {}), {
								key: "comp",
								parent: _this5._compScope,
								autoDestroy: true,

								state: _defineProperty({}, RSRenderer.displayName, { props: props })
							});
							return viewScope;
						}, [RSRenderer.displayName]), _dec8(_class4 = function (_React$Component) {
							_inherits(RSCompRenderer, _React$Component);

							function RSCompRenderer() {
								_classCallCheck(this, RSCompRenderer);

								return _possibleConstructorReturn(this, (RSCompRenderer.__proto__ || Object.getPrototypeOf(RSCompRenderer)).apply(this, arguments));
							}

							_createClass(RSCompRenderer, [{
								key: "componentWillMount",
								value: function componentWillMount() {
									var _this7 = this;

									_get(RSCompRenderer.prototype.__proto__ || Object.getPrototypeOf(RSCompRenderer.prototype), "componentWillMount", this).apply(this, arguments);
									var props = this.props;
									this._ssrTest = setTimeout(function (tm) {
										return _this7.$scope.then(function (_ref3) {
											var CMP = _ref3[RSRenderer.displayName];
											return (0, _server.renderToString)(_react2.default.createElement(RSCompRenderer, props));
										});
									});
								}
							}, {
								key: "componentDidMount",
								value: function componentDidMount() {
									clearTimeout(this._ssrTest);
									_get(RSCompRenderer.prototype.__proto__ || Object.getPrototypeOf(RSCompRenderer.prototype), "componentDidMount", this).apply(this, arguments);
								}
							}, {
								key: "componentWillReceiveProps",
								value: function componentWillReceiveProps(props) {
									var Comp = this.$stores[RSRenderer.displayName];

									//Comp && Comp.setState({ props });
								}
							}, {
								key: "render",
								value: function render() {
									var Comp = this.state[RSRenderer.displayName];
									return Comp || _react2.default.createElement("span", { className: "__rsLoad" });
								}
							}]);

							return RSCompRenderer;
						}(_react2.default.Component)) || _class4);

						return RSCompRenderer;
					}
				}]);

				return RSRenderer;
			}(_reactRescope.Store), _class3.displayName = ref[1], _class3.state = state, _temp2;
		},
		rootRenderer: function rootRenderer(obj, argz, ref) {
			var _class5, _temp3;

			var use = void 0,
			    state = void 0,
			    actions = void 0;
			if (!argz[0]) {
				state = {};
				//argz[ 0 ] = []
			} else if (_is2.default.array(argz[0])) {
				use = argz[0];
				state = !use.length && {};
			} else argz[0] && _reactRescope.Scope.stateMapToRefList(argz[0], state = {}, use = [], actions = {});

			//!use.includes('props') && use.push('props');
			return _temp3 = _class5 = function (_Store3) {
				_inherits(RSRenderer, _Store3);

				function RSRenderer() {
					_classCallCheck(this, RSRenderer);

					return _possibleConstructorReturn(this, (RSRenderer.__proto__ || Object.getPrototypeOf(RSRenderer)).apply(this, arguments));
				}

				_createClass(RSRenderer, [{
					key: "serialize",

					//static actions     = actions;
					value: function serialize(cfg, output) {
						_get(RSRenderer.prototype.__proto__ || Object.getPrototypeOf(RSRenderer.prototype), "serialize", this).apply(this, arguments);
						var snap = this.scopeObj.getSnapshotByKeyExt(output, this.$scope._id + '/' + this.name);
						if (snap.state && snap.state.props) delete snap.state.props;
						delete snap.data;
						return output;
					}
				}, {
					key: "apply",
					value: function apply(d, s, c) {
						//if ( d ) {
						//    //this._comp.setState(c);
						//    return d;
						//}
						return obj(s, {
							$actions: this.$actions,
							$stores: this.$stores,
							$scope: this.$scope,
							$store: this
						});
					}
				}]);

				return RSRenderer;
			}(_reactRescope.Store), _class5.displayName = ref[1], _class5.use = use, _class5.state = state || {}, _class5.actions = actions, _temp3;
		},
		store: function store(obj, _ref4, ref) {
			var cfg = _ref4[0];

			return _reactRescope.Store.bind(null, obj, _extends({}, cfg, { apply: function apply(d, s, c) {
					return obj(d, s, c);
				} }));
		}
	}, (_applyDecoratedDescriptor(_obj, "stateMap", [_dec3], Object.getOwnPropertyDescriptor(_obj, "stateMap"), _obj), _applyDecoratedDescriptor(_obj, "scope", [_dec4], Object.getOwnPropertyDescriptor(_obj, "scope"), _obj), _applyDecoratedDescriptor(_obj, "renderer", [_dec5], Object.getOwnPropertyDescriptor(_obj, "renderer"), _obj), _applyDecoratedDescriptor(_obj, "rootRenderer", [_dec6], Object.getOwnPropertyDescriptor(_obj, "rootRenderer"), _obj), _applyDecoratedDescriptor(_obj, "store", [_dec7], Object.getOwnPropertyDescriptor(_obj, "store"), _obj)), _obj));

	exports.default = Lib;
	module.exports = exports["default"];

	/***/
},
/* 5 */
/***/function (module, exports) {

	module.exports = __webpack_require__(1);

	/***/
},
/* 6 */
/***/function (module, exports) {

	module.exports = __webpack_require__(15);

	/***/
},
/* 7 */
/***/function (module, exports) {

	module.exports = __webpack_require__(14);

	/***/
}]
/******/);
//# sourceMappingURL=rescopeSpells.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
module.exports =
/******/function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};
	/******/
	/******/ // The require function
	/******/function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;
		/******/
		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };
		/******/
		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/module.loaded = true;
		/******/
		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;
	/******/
	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "/";
	/******/
	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Scope = __webpack_require__(1);

	var _Scope2 = _interopRequireDefault(_Scope);

	var _Store = __webpack_require__(7);

	var _Store2 = _interopRequireDefault(_Store);

	var _scopable = __webpack_require__(9);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	/*
  * Copyright (c)  2018 Wise Wild Web .
  *
  *  MIT License
  *
  *  Permission is hereby granted, free of charge, to any person obtaining a copy
  *  of this software and associated documentation files (the "Software"), to deal
  *  in the Software without restriction, including without limitation the rights
  *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  *  copies of the Software, and to permit persons to whom the Software is
  *  furnished to do so, subject to the following conditions:
  *
  *  The above copyright notice and this permission notice shall be included in all
  *  copies or substantial portions of the Software.
  *
  *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  *  SOFTWARE.
  *
  * @author : Nathanael Braun
  * @contact : caipilabs@gmail.com
  */

	var $global = typeof window !== 'undefined' ? window : global;

	var RS = $global.___rescope || {};
	if ($global.___rescope) {
		console.warn("ReScope is defined multiple times !! \nCheck you're packaging");
	} else {

		$global.___rescope = RS;
		_Scope2.default.Store = _Store2.default;
		RS.Scope = _Scope2.default;
		RS.Context = _Scope2.default;
		RS.Store = _Store2.default;
		RS.reScope = _scopable.reScope;
		RS.scopeToState = _scopable.scopeToState;
		RS.reScopeState = _scopable.scopeToState;
		RS.addScopableType = _scopable.addScopableType;
		RS.scopeRef = function scopeRef(map, key) {
			map[key] = new _Scope2.default.scopeRef(map[key]);
			return map;
		};
	}
	exports.default = RS;
	module.exports = exports["default"];

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _class, _temp;

	function _toConsumableArray(arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
				arr2[i] = arr[i];
			}return arr2;
		} else {
			return Array.from(arr);
		}
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
		} else {
			obj[key] = value;
		}return obj;
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/*
  * Copyright (c)  2018 Wise Wild Web .
  *
  *  MIT License
  *
  *  Permission is hereby granted, free of charge, to any person obtaining a copy
  *  of this software and associated documentation files (the "Software"), to deal
  *  in the Software without restriction, including without limitation the rights
  *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  *  copies of the Software, and to permit persons to whom the Software is
  *  furnished to do so, subject to the following conditions:
  *
  *  The above copyright notice and this permission notice shall be included in all
  *  copies or substantial portions of the Software.
  *
  *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  *  SOFTWARE.
  *
  * @author : Nathanael Braun
  * @contact : caipilabs@gmail.com
  */

	var is = __webpack_require__(2),
	    _require = __webpack_require__(4),
	    walknSet = _require.walknSet,
	    walknGet = _require.walknGet,
	    keyWalknSet = _require.keyWalknSet,
	    keyWalknGet = _require.keyWalknGet,
	    EventEmitter = __webpack_require__(5),
	    shortid = __webpack_require__(6),
	    __proto__push = function __proto__push(target, id, parent) {
		var fn = function fn() {};
		fn.prototype = parent ? new parent._[id]() : target[id] || {};
		target[id] = new fn();
		target._[id] = fn;
	},
	    openScopes = {},
	    SimpleObjectProto = {}.constructor;

	/**
  * Base Scope object
  */
	var Scope = (_temp = _class = function (_EventEmitter) {
		_inherits(Scope, _EventEmitter);

		_createClass(Scope, null, [{
			key: 'getScope',
			value: function getScope(scopes) {
				var skey = is.array(scopes) ? scopes.sort(function (a, b) {
					if (a.firstname < b.firstname) return -1;
					if (a.firstname > b.firstname) return 1;
					return 0;
				}).join('+') : scopes;
				return openScopes[skey] = openScopes[skey] || new Scope({}, { id: skey });
			}
		}, {
			key: 'stateMapToRefList',

			/**
    * get a parsed reference list from stateMap
    * @param _ref
    * @returns {{storeId, path, alias: *, ref: *}}
    */
			value: function stateMapToRefList(sm) {
				var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				var _refs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

				var actions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
				var path = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";

				Object.keys(sm).forEach(function (key) {
					var cpath = path ? path + '.' + key : key;
					sm[key] instanceof Scope.scopeRef ? _refs.push(sm[key].path + ':' + cpath) : sm[key] && sm[key] instanceof Function ? actions[key] = sm[key] : sm[key] && sm[key].prototype instanceof Scope.Store ? _refs.push(sm[key].as(cpath)) : state[cpath] = sm[key];
					//: this.stateMapToRefList(sm[key], _refs, path + '.' + key)
				});
				return _refs;
			} // if > 0, will wait 'persistenceTm' ms before destroy
			// when
			// dispose reach 0

		}]);

		// all active scopes


		/**
   * Init a ReScope scope
   *
   * @param storesMap {Object} Object with the initial stores definition / instances
   * @param config {Object} Scope config
   * {
   *  parent {scope} @optional parent scope
   *
   *  id {string} @optional id ( if this id exist storesMap will be merge on the 'id'
   *     scope) key {string} @optional key of the scope ( if no id is set, the scope id
   *     will be (parent.id+'>'+key) incrementId {bool} @optional true to add a suffix
   *     id, if the provided key or id globally exist
   *
   *  state {Object} @optional initial state by store alias
   *  data {Object} @optional initial data by store alias
   *
   *  rootEmitter {bool} @optional true to not being destabilized by parent
   *  boundedActions {array | regexp} @optional list or regexp of actions not
   *     propagated to the parent
   *
   *  persistenceTm {number) if > 0, will wait 'persistenceTm' ms before destroy when
   *     dispose reach 0 autoDestroy  {bool} will trigger retain & dispose after start
   *  }
   * @returns {Scope}
   */
		function Scope(storesMap) {
			var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
			    parent = _ref2.parent,
			    key = _ref2.key,
			    id = _ref2.id,
			    snapshot = _ref2.snapshot,
			    state = _ref2.state,
			    data = _ref2.data,
			    _ref2$incrementId = _ref2.incrementId,
			    incrementId = _ref2$incrementId === undefined ? !!key : _ref2$incrementId,
			    persistenceTm = _ref2.persistenceTm,
			    autoDestroy = _ref2.autoDestroy,
			    rootEmitter = _ref2.rootEmitter,
			    boundedActions = _ref2.boundedActions;

			_classCallCheck(this, Scope);

			var _this = _possibleConstructorReturn(this, (Scope.__proto__ || Object.getPrototypeOf(Scope)).call(this));

			var _ = {},
			    keyIndex;

			id = id || key && (parent && parent._id || '') + '>' + key;

			_.isLocalId = !id;

			//if ( parent && key ) {
			//    keyIndex = parent._.childScopes.find(ctx=>(ctx._id==id));
			//    if ( keyIndex == -1 ) keyIndex = parent._.seenChilds;
			//    keyIndex++;
			//    if ( keyIndex )
			//        id = id + '[' + keyIndex + ']';
			//}

			id = id || "_____" + shortid.generate();

			if (openScopes[id]) {
				var _ret;

				_this._id = id;
				//openScopes[ id ].register(storesMap);
				return _ret = openScopes[id], _possibleConstructorReturn(_this, _ret);
			} else if (openScopes[id] && incrementId) {
				var i = -1;
				while (openScopes[id + '[' + ++i + ']']) {}
				id = id + '[' + i + ']';
			}

			_this._id = id;
			_this._rev = 0;
			openScopes[id] = _this;
			_.persistenceTm = persistenceTm || _this.constructor.persistenceTm;

			_this.actions = {};
			_this.stores = {};
			_this.state = {};
			_this.data = {};

			_this.parent = parent;
			_this._ = _;
			_this._autoDestroy = autoDestroy;

			if (parent && parent.dead) throw new Error("Can't use a dead scope as parent !");

			__proto__push(_this, 'actions', parent);
			__proto__push(_this, 'stores', parent);
			__proto__push(_this, 'state', parent);
			__proto__push(_this, 'data', parent);

			_this.sources = [];
			_.childScopes = [];
			_.childScopesList = [];
			_.unStableChilds = 0;
			_.seenChilds = 0;

			_this.__retains = { all: 0 };
			_this.__locks = { all: 1 };

			//_.snapshot        = snapshot;
			//_.snapshot        = snapshot;
			_._boundedActions = is.array(boundedActions) ? { test: boundedActions.includes.bind(boundedActions) } : boundedActions;
			_._listening = {};
			_._scope = {};
			_._mixed = [];
			_._mixedList = [];
			_.followers = [];
			if (parent) {
				parent.retain("isMyParent");
				if (!rootEmitter) {
					!parent._stable && _this.wait("waitingParent");
					parent.on(_._parentList = {
						'stable': function stable(s) {
							return _this.release("waitingParent");
						},
						'unstable': function unstable(s) {
							return _this.wait("waitingParent");
						},
						'update': function update(s) {
							return _this._propag();
						}
					});
				} else {
					parent.on(_._parentList = {
						'update': function update(s) {
							return _this._propag();
						}
					});
				}
				// this.register(parent.__scope, state, data);
			}

			_this.register(storesMap, state, data);
			_this.__locks.all--;
			_this._stable = !_this.__locks.all;

			if (parent) {
				parent._addChild(_this);
			}

			_this.restore(snapshot);

			if (autoDestroy) setTimeout(function (tm) {
				_this.retain("autoDestroy");
				_this.dispose("autoDestroy");
			});

			return _this;
		}

		/**
   *
   * Mount the stores in storesList, in this scope or in its parents or mixed scopes
   *
   * @param storesList {string|storeRef} Store name, Array of Store names, or Rescope
   *     store ref from Store::as or Store:as
   * @param state
   * @param data
   * @returns {Scope}
   */

		_createClass(Scope, [{
			key: 'mount',
			value: function mount(storesList, snapshot, state, data) {
				var _this2 = this;

				if (is.array(storesList)) {
					storesList.forEach(function (k) {
						return _this2._mount(k, snapshot, state, data);
					});
				} else {
					this._mount.apply(this, arguments);
				}
				return this;
			}
		}, {
			key: '_mount',
			value: function _mount(id, snapshot, state, data) {
				var ref = void 0,
				    snap = void 0;

				ref = this.parseRef(id);

				if (id == "$parent") return;
				if (!this._._scope[ref.storeId]) {
					var _parent;

					//ask mixed || parent
					if (this._._mixed.reduce(function (mounted, ctx) {
						return mounted || ctx._mount(id, snapshot, state, data);
					}, false) || !this.parent) return;
					return (_parent = this.parent)._mount.apply(_parent, arguments);
				} else {
					var store = this._._scope[ref.storeId],
					    taskQueue = [];
					if (is.rsStore(store.prototype)) {
						this._._scope[ref.storeId] = new store(this, {
							//snapshot,
							name: ref.storeId,
							state: state,
							data: data
						}, taskQueue);
						while (taskQueue.length) {
							taskQueue.shift()();
						}
					} else if (is.rsScope(store.prototype)) {
						store = this._._scope[ref.storeId] = new store({ $parent: this }, {
							id: this._id + '/' + ref.storeId
							//autoDestroy: true
							//parent: this
						});
						//this._._scope[ ref.storeId ].retain("scopedChildScope");
						//this._watchStore(ref.storeId);
						if (ref.path.length > 1) this._._scope[ref.storeId].mount(ref.path.slice(1).join('.'), snapshot, state, data);
						//else return this._._scope[ ref.storeId ];
					}
					//if ( snapshot && is.rsScope(store) && ( snap = keyWalknGet(snapshot,
					// store._id) ) && snap[ '/' ] ) { return store.mount(Object.keys(snap[ '/'
					// ])) } else if ( snapshot && is.rsStore(store) ) store.restore();
					if (is.rsStore(store)) {
						if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;

						if (data !== undefined) store.push(data);
					}
					this._watchStore(ref.storeId);
				}

				return this._._scope[ref.storeId];
			}
		}, {
			key: '_watchStore',
			value: function _watchStore(id, state, data) {
				var _this3 = this;

				if (!this._._listening[id] && !is.fn(this._._scope[id])) {
					//if ( is.rsStore(this._._scope[ id ]) ) {
					!this._._scope[id]._autoDestroy && this._._scope[id].retain("scoped");
					!this._._scope[id].isStable() && this.wait(id);
					this._._scope[id].on(this._._listening[id] = {
						'destroy': function destroy(s) {
							delete _this3._._listening[id];
							_this3._._scope[id] = _this3._._scope[id].constructor;
						},
						'update': function update(s) {
							return _this3.propag();
						},
						'stable': function stable(s) {
							return _this3.release(id);
						},
						'unstable': function unstable(s) {
							return _this3.wait(id);
						}
					});
				}
				return true;
			}

			/**
    * Mix targetCtx on this scope
    * Mixed scope parents are NOT mapped
    * @param targetCtx
    */

		}, {
			key: 'mixin',
			value: function mixin(targetCtx) {
				var _this4 = this;

				var parent = this.parent,
				    lists = void 0;
				this._._mixed.push(targetCtx);
				targetCtx.retain("mixedTo");
				if (!targetCtx._stable) this.wait(targetCtx._id);

				this._._mixedList.push(lists = {
					'stable': function stable(s) {
						return _this4.release(targetCtx._id);
					},
					'unstable': function unstable(s) {
						return _this4.wait(targetCtx._id);
					},
					'update': function update(s) {
						return _this4._propag();
					}
				});

				this.actions = {};
				this.stores = {};
				this.state = {};
				this.data = {};
				targetCtx.on(lists);
				__proto__push(this, 'actions', parent);
				__proto__push(this, 'stores', parent);
				__proto__push(this, 'state', parent);
				__proto__push(this, 'data', parent);

				this.relink(this._._scope, this, false, true);
				this._._mixed.forEach(function (ctx) {
					__proto__push(_this4, 'actions');
					__proto__push(_this4, 'stores');
					__proto__push(_this4, 'state');
					__proto__push(_this4, 'data');
					ctx.relink(ctx._._scope, _this4, true, true);
				});
			}

			/**
    * Register stores in storesMap & link them in the protos
    * @param storesMap
    * @param state
    * @param data
    */

		}, {
			key: 'register',
			value: function register(storesMap) {
				var _this5 = this;

				var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

				this.relink(storesMap, this, false, false);
				Object.keys(storesMap).forEach(function (id) {
					if (id == "$parent") return;
					if (storesMap[id].singleton || is.fn(storesMap[id]) && (state[id] || data[id])) {
						_this5._mount(id, undefined, state[id], data[id]);
					} else if (state[id] || data[id]) {
						if (data[id]) {
							if (state[id]) _this5.stores[id].state = state[id];
							_this5.stores[id].push(data[id]);
						} else if (state[id]) {
							_this5.stores[id].setState(state[id]);
						}
					} else {
						_this5._watchStore(id);
					}
				});
			}

			/**
    * Map srcCtx store's on targetCtx headers proto's
    * @param srcCtx
    * @param targetCtx
    * @param state
    * @param data
    */

		}, {
			key: 'relink',
			value: function relink(srcCtx) {
				var targetCtx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

				var _this6 = this;

				var external = arguments[2];
				var force = arguments[3];

				var lctx = targetCtx._.stores.prototype;
				Object.keys(srcCtx).forEach(function (id) {
					if (!force && targetCtx._._scope[id] === srcCtx[id] || targetCtx._._scope[id] && targetCtx._._scope[id].constructor === srcCtx[id]) return;

					if (!force && targetCtx._._scope[id]) {
						if (!external && !is.fn(targetCtx._._scope[id])) {
							console.info("Rescope Store : ", id, " already exist in this scope ! ( try __proto__ hot patch )");
							targetCtx._._scope[id].__proto__ = srcCtx[id].prototype;
						}
						if (!external && is.fn(targetCtx._._scope[id])) targetCtx._._scope[id] = srcCtx[id];

						return;
					} else if (!force && !external) _this6._._scope[id] = srcCtx[id];

					Object.defineProperty(lctx, id, {
						enumerable: true,
						configurable: true,
						get: function get() {
							return _this6._._scope[id];
						}
					});
					if (id == "$parent") return;
					Object.defineProperty(targetCtx._.state.prototype, id, {
						enumerable: true,
						configurable: true,
						get: function get() {
							return _this6._._scope[id] && _this6._._scope[id].state;
						},
						set: function set(v) {
							return _this6._mount(id, undefined, v);
						}
					});
					Object.defineProperty(targetCtx._.data.prototype, id, {
						enumerable: true,
						configurable: true,
						get: function get() {
							return _this6._._scope[id] && _this6._._scope[id].data;
						},
						set: function set(v) {
							return _this6._mount(id, undefined, undefined, v);
						}
					});

					var actions = srcCtx[id] instanceof Scope.Store ? srcCtx[id].constructor.actions : srcCtx[id].actions,
					    activeActions = targetCtx._.actions.prototype;
					if (is.rsScope(_this6._._scope[id].prototype)) _this6._mount(id);
					if (is.rsScope(_this6._._scope[id])) {
						activeActions[id] = _this6._._scope[id].actions;
					}
					if (!is.rsStore(_this6._._scope[id]) && !is.rsStore(_this6._._scope[id].prototype)) return;

					actions && Object.keys(actions).forEach(function (act) {
						if (activeActions.hasOwnProperty(act)) activeActions[act].__targetStores++;else {
							activeActions[act] = _this6.dispatch.bind(_this6, act);
							activeActions[act].__targetStores = 1;
						}
					});
				});
			}

			/**
    * Bind stores from this scope, his parents and mixed scope
    *
    * @param obj {React.Component|Store|function}
    * @param key {string} stores keys to bind updates
    * @param as
    * @param setInitial {bool} false to not propag initial value (default : true)
    */

		}, {
			key: 'bind',
			value: function bind(obj, key, as) {
				var _this7 = this;

				var setInitial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

				var lastRevs = void 0,
				    data = void 0,
				    refKeys = void 0;
				if (key && !is.array(key)) key = [key];

				if (as === false || as === true) {
					setInitial = as;
					as = null;
				}

				refKeys = key.map(function (id) {
					return is.string(id) ? id : id.name;
				}).map(function (id) {
					return _this7.parseRef(id);
				});

				this._.followers.push([obj, key, as || undefined, lastRevs = refKeys.reduce(function (revs, ref) {
					revs[ref.storeId] = revs[ref.storeId] || {
						rev: 0,
						refs: []
					};
					revs[ref.storeId].refs.push(ref);
					return revs;
				}, {})]);

				this.mount(key);
				this.retainStores(Object.keys(lastRevs), 'listeners');

				if (setInitial && this._stable) {
					data = this.getUpdates(lastRevs);
					if (!data) return;
					if (typeof obj != "function") {
						if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
					} else {
						obj(data);
					}
				}
				return this;
			}

			/**
    * Un bind this scope off the given component-keys
    * @param obj
    * @param key
    * @returns {Array.<*>}
    */

		}, {
			key: 'unBind',
			value: function unBind(obj, key, as) {
				var followers = this._.followers,
				    i = followers && followers.length;
				while (followers && i--) {
					if (followers[i][0] === obj && '' + followers[i][1] == '' + key && followers[i][2] == as) {
						this.disposeStores(Object.keys(followers[i][3]), 'listeners');
						return followers.splice(i, 1);
					}
				}
			}

			/**
    * Mount the stores in storesList from this scope, its parents and mixed scope
    * Bind them to 'to'
    * Hook 'to' so it will auto unbind on 'destroy' or 'componentWillUnmount'
    * @param to
    * @param storesList
    * @param bind
    * @returns {Object} Initial outputs of the stores in 'storesList'
    */

		}, {
			key: 'map',
			value: function map(to, storesList) {
				var _this8 = this;

				var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

				var Store = this.constructor.Store;
				storesList = is.array(storesList) ? storesList : [storesList];
				var refList = storesList.map(this.parseRef);
				this.mount(storesList);
				if (bind && to instanceof Store) {
					Store.map(to, storesList, this, this, false);
				} else if (bind) {
					this.bind(to, storesList, undefined, false);

					var mixedCWUnmount = void 0,
					    unMountKey = to.isReactComponent ? "componentWillUnmount" : "destroy";

					if (to.hasOwnProperty(unMountKey)) {
						mixedCWUnmount = to[unMountKey];
					}

					to[unMountKey] = function () {
						delete to[unMountKey];
						if (mixedCWUnmount) to[unMountKey] = mixedCWUnmount;

						_this8.unBind(to, storesList);
						return to[unMountKey] && to[unMountKey].apply(to, arguments);
					};
				}
				return refList.reduce(function (data, ref) {
					walknSet(data, ref.alias || ref.path, _this8.retrieve(ref.path));
					return data;
				}, {});
			}

			/**
    * Get current data value from json path
    * @param path
    * @returns {string|*}
    */

		}, {
			key: 'retrieve',
			value: function retrieve() {
				var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

				path = is.string(path) ? path.split('.') : path;
				return path && this.stores[path[0]] && this.stores[path[0]].retrieve(path.slice(1));
			}

			/**
    * Get current store from json path
    * @param path
    * @returns {string|*}
    */

		}, {
			key: 'retrieveStore',
			value: function retrieveStore() {
				var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

				path = is.string(path) ? path.split('.') : path;
				return path && path.length && (path.length != 1 && this.stores[path[0]].retrieveStore ? this.stores[path[0]].retrieveStore(path.slice(1)) : path.length == 1 && this.stores[path[0]]);
			}

			/**
    * Get or update storesRevMap's revisions
    * @param storesRevMap
    * @param local
    * @returns {{}}
    */

		}, {
			key: 'getStoresRevs',
			value: function getStoresRevs() {
				var storesRevMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var local = arguments[1];

				var ctx = this._._scope;
				if (!storesRevMap) {
					storesRevMap = {};
				}
				Object.keys(ctx).forEach(function (id) {
					if (id == "$parent") return;
					if (!is.fn(ctx[id])) {
						storesRevMap[id] = ctx[id]._rev;
					} else if (!storesRevMap.hasOwnProperty(id)) storesRevMap[id] = false;
				});
				if (!local) {
					this._._mixed.reduce(function (updated, ctx) {
						return ctx.getStoresRevs(storesRevMap), storesRevMap;
					}, storesRevMap);
					this.parent && this.parent.getStoresRevs(storesRevMap);
				}
				return storesRevMap;
			}

			/**
    * Get or update output basing storesRevMap's revisions.
    * If a store in 'storesRevMap' was updated; add it to 'output' & update storesRevMap
    * @param storesRevMap
    * @param output
    * @param updated
    * @returns {*|{}}
    */

		}, {
			key: 'getUpdates',
			value: function getUpdates(storesRevMap, output, updated) {
				var _this9 = this;

				var ctx = this._._scope;

				output = output || {};
				Object.keys(ctx).forEach(function (id) {
					if (id == "$parent") return;
					if (!output.hasOwnProperty(id) && !is.fn(ctx[id]) && (!storesRevMap || storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined || !(!storesRevMap.hasOwnProperty(id) || ctx[id]._rev <= storesRevMap[id].rev))) {

						updated = true;
						output[id] = _this9.data[id];

						if (storesRevMap && storesRevMap.hasOwnProperty(id)) {
							storesRevMap[id].rev = ctx[id]._rev;
							storesRevMap[id].refs.forEach(function (ref) {
								//console.warn("update ref ", ref.ref,
								// this.retrieve(ref.path));
								output[ref.alias] = _this9.retrieve(ref.path);
							});
						} else {
							//console.warn("update ", id, this.data[id]);
							output[id] = _this9.data[id];
						}
					}
				});
				updated = this._._mixed.reduce(function (updated, ctx) {
					return ctx.getUpdates(storesRevMap, output, updated) || updated;
				}, updated);
				updated = this.parent && this.parent.getUpdates(storesRevMap, output, updated) || updated;
				return updated && output;
			}

			/**
    * Recursively get all child scopes
    * @param childs
    * @returns {Array}
    * @private
    */

		}, {
			key: '_getAllChilds',
			value: function _getAllChilds() {
				var childs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

				childs.push.apply(childs, _toConsumableArray(this._.childScopes));
				this._.childScopes.forEach(function (ctx) {
					ctx._getAllChilds(childs);
				});
				return childs;
			}

			/**
    * Serialize all active stores state & data in every childs & mixed scopes
    *
    * Scopes without key or id are ignored
    * @param output
    * @returns {{}}
    */

		}, {
			key: 'serialize',
			value: function serialize() {
				var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var ctx = this._._scope,
				    alias = cfg.alias,
				    _cfg$withChilds = cfg.withChilds,
				    withChilds = _cfg$withChilds === undefined ? true : _cfg$withChilds,
				    withParents = cfg.withParents,
				    _cfg$withMixed = cfg.withMixed,
				    withMixed = _cfg$withMixed === undefined ? true : _cfg$withMixed,
				    norefs = cfg.norefs;

				if (keyWalknGet(output, this._id)) return output;

				//@todo : better serialize method
				keyWalknSet(output, this._id, {});

				Object.keys(ctx).forEach(function (id) {
					if (id == "$parent" || is.fn(ctx[id])) return;

					ctx[id].serialize(cfg, output);
				});

				withParents && this.parent && this.parent.serialize({
					withChild: false,
					withParents: true,
					withMixed: withMixed,
					norefs: norefs
				}, output);

				withChilds && this._.childScopes.forEach(function (ctx) {
					!ctx._.isLocalId && ctx.serialize({
						withChild: true,
						withParents: false,
						withMixed: withMixed,
						norefs: norefs
					}, output);
				});

				withMixed && this._._mixed.forEach(function (ctx) {
					!ctx._.isLocalId && ctx.serialize({
						withChild: false,
						withParents: false,
						withMixed: withMixed,
						norefs: norefs
					}, output);
				});

				if (alias) {
					output = Object.keys(output).reduce(function (h, k) {
						return h[k.startsWith(alias) ? alias + k.substr(alias.length) : k] = output[k], h;
					}, {});
				}
				return output;
			}

			/**
    * Restore state & data from the serialize fn
    * @param snapshot
    * @param force
    */

		}, {
			key: 'restore',
			value: function restore(snapshot) {
				var _this10 = this;

				var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : is.bool(cfg) && cfg;

				var ctx = this._._scope,
				    snap = void 0;
				snapshot = snapshot && keyWalknGet(snapshot, this._id) || this.takeSnapshotByKey(this._id);

				if (!snapshot) return;

				this._.snapshot = snapshot;

				snap = snapshot['/'];

				snap && Object.keys(snap).forEach(function (name) {
					if (name == "$parent") return;

					if (ctx[name]) {

						if (force && !is.fn(ctx[name])) ctx[name].destroy();

						_this10._mount(name); // quiet
					}
				});

				this._._mixed.forEach(function (ctx) {
					!ctx._.isLocalId && ctx.restore(undefined, force);
				});

				this._.childScopes.forEach(function (ctx) {
					!ctx._.isLocalId && ctx.restore(undefined, force);
				});
			}
		}, {
			key: 'getSnapshotByKey',
			value: function getSnapshotByKey(key, local) {
				// only have the local snap
				if (this._.snapshot && key.startsWith(this._id)) {
					var obj = keyWalknGet(this._.snapshot, key.substr(this._id.length));
					//if ( obj ) {
					//    this.deleteSnapshotByKey(key);
					//}
					return obj;
				} else return !local && this.parent && this.parent.getSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.getSnapshotByKey(key);
			}
		}, {
			key: 'getSnapshotByKeyExt',
			value: function getSnapshotByKeyExt(snapshot, key, local) {
				// only have the local snap
				if (snapshot) {
					var obj = keyWalknGet(snapshot, key);
					return obj;
				}
			}
		}, {
			key: 'takeSnapshotByKey',
			value: function takeSnapshotByKey(key, local) {
				if (this._.snapshot && key.startsWith(this._id)) {
					var obj = keyWalknGet(this._.snapshot, key.substr(this._id.length));
					if (obj) {
						//this.deleteSnapshotByKey(key, true);
					}
					return obj;
				} else return !local && this.parent && this.parent.takeSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.takeSnapshotByKey(key);
			}
		}, {
			key: 'deleteSnapshotByKey',
			value: function deleteSnapshotByKey(key, local) {
				if (this._.snapshot && key.startsWith(this._id)) {
					var obj = keyWalknGet(this._.snapshot, key.substr(this._id.length).replace(/^(.*[\>|\/])[^\>|\/]+$/ig, '$1'));
					if (obj) delete obj[key.replace(/^.*[\>|\/]([^\>|\/]+)$/ig, '$1')];
				}
				return !local && this.parent && this.parent.deleteSnapshotByKey(key) || this.stores.$parent && this.stores.$parent.deleteSnapshotByKey(key);
			}
		}, {
			key: 'setState',
			value: function setState(pState) {
				var _this11 = this;

				Object.keys(pState).forEach(function (k) {
					return _this11.state[k] = pState[k];
				});
			}

			/**
    * get a parsed reference
    * @param _ref
    * @returns {{storeId, path, alias: *, ref: *}}
    */

		}, {
			key: 'parseRef',
			value: function parseRef(_ref) {
				if (typeof _ref !== 'string') {
					this.register(_defineProperty({}, _ref.name, _ref.store));
					_ref = _ref.name;
				}
				var ref = _ref.split(':');
				ref[0] = ref[0].split('.');
				return {
					storeId: ref[0][0],
					path: ref[0],
					alias: ref[1] || ref[0][ref[0].length - 1],
					ref: _ref
				};
			}

			/**
    * Dispatch an action to the top parent & mixed scopes, in all stores
    *
    * @param action
    * @param data
    * @returns {Scope}
    */

		}, {
			key: 'dispatch',
			value: function dispatch(action) {
				var _this12 = this,
				    _parent2;

				for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					argz[_key - 1] = arguments[_key];
				}

				if (this.dead) {
					console.warn("Dispatch was called on a dead scope, check you're async functions in this stack...", new Error().stack);
					return;
				}
				var bActs = this._._boundedActions;
				Object.keys(this._._scope).forEach(function (id) {
					var _$_scope$id;

					if (id == "$parent") return;
					if (!is.fn(_this12._._scope[id])) (_$_scope$id = _this12._._scope[id]).trigger.apply(_$_scope$id, [action].concat(argz));
				});

				if (bActs && bActs.test(action)) return;

				this._._mixed.forEach(function (ctx) {
					return ctx.dispatch.apply(ctx, [action].concat(argz));
				});
				this.parent && (_parent2 = this.parent).dispatch.apply(_parent2, [action].concat(argz));
				return this;
			}

			//

		}, {
			key: 'trigger',
			value: function trigger() {
				this.dispatch.apply(this, arguments);
			}

			/**
    * once('stable', cb)
    * @param obj {React.Component|Store|function)
    * @param key {string} optional key where to map the public state
    */

		}, {
			key: 'then',
			value: function then(cb) {
				var _this13 = this;

				if (this._stable) return cb(this.data);
				this.once('stable', function (e) {
					return cb(_this13.data);
				});
			}

			/**
    * Call retain on the scoped stores basing given
    *
    * @param stores
    * @param reason
    */

		}, {
			key: 'retainStores',
			value: function retainStores() {
				var _this14 = this;

				var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
				var reason = arguments[1];

				stores.forEach(function (id) {
					return _this14.stores[id] && _this14.stores[id].retain && _this14.stores[id].retain(reason);
				});
			}

			/**
    * Call retain on the scoped stores
    *
    * @param stores
    * @param reason
    */

		}, {
			key: 'disposeStores',
			value: function disposeStores() {
				var _this15 = this;

				var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
				var reason = arguments[1];

				stores.forEach(function (id) {
					return _this15.stores[id] && _this15.stores[id].dispose && _this15.stores[id].dispose(reason);
				});
			}

			/**
    * Keep the scope unstable until release is called
    * @param reason
    */

		}, {
			key: 'wait',
			value: function wait(reason) {
				//console.log("wait", reason);
				this._stable && !this.__locks.all && this.emit("unstable", this);
				this._stable = false;
				this.__locks.all++;
				if (reason) {
					this.__locks[reason] = this.__locks[reason] || 0;
					this.__locks[reason]++;
				}
			}

			/**
    * Stabilize the scope if no more locks remain (wait fn)
    * @param reason
    */

		}, {
			key: 'release',
			value: function release(reason) {
				var _this16 = this;

				if (reason) {
					if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
					this.__locks[reason] = this.__locks[reason] || 0;
					this.__locks[reason]--;
				}
				if (!reason && this.__locks.all == 0) console.error("Release more than locking !");

				this.__locks.all--;
				if (!this.__locks.all) {
					this._.stabilizerTM && clearTimeout(this._.stabilizerTM);

					this._.stabilizerTM = setTimeout(function (e) {
						_this16._.stabilizerTM = null;
						if (_this16.__locks.all) return;

						_this16._.propagTM && clearTimeout(_this16._.propagTM);
						_this16._rev++;
						_this16._stable = true;
						_this16.emit("stable", _this16);

						!_this16.dead && _this16._propag(); // stability can induce destroy
					});
				}
			}

			/**
    * Propag stores updates basing theirs last updates
    */

		}, {
			key: 'propag',
			value: function propag() {
				var _this17 = this;

				this._.propagTM && clearTimeout(this._.propagTM);
				this._.propagTM = setTimeout(function (e) {
					_this17._.propagTM = null;
					_this17._propag();
				}, 2);
			}
		}, {
			key: '_propag',
			value: function _propag() {
				var _this18 = this;

				if (this._.followers.length) this._.followers.forEach(function (_ref3) {
					var obj = _ref3[0],
					    key = _ref3[1],
					    as = _ref3[2],
					    lastRevs = _ref3[3],
					    remaps = _ref3[3];

					var data = _this18.getUpdates(lastRevs);
					if (!data) return;
					if (typeof obj != "function") {
						//console.log("setState ",obj, Object.keys(data))
						if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
					} else {
						obj(data, lastRevs && [].concat(_toConsumableArray(lastRevs)) || "no revs");
					}
					// lastRevs &&
					// key.forEach(id => (lastRevs[id] = this.stores[id] &&
					// this.stores[id]._rev || 0));
				});
				this.emit("update", this.getUpdates());
			}

			/**
    * is stable
    * @returns bool
    */

		}, {
			key: 'isStable',
			value: function isStable() {
				return this._stable;
			}
		}, {
			key: '_addChild',
			value: function _addChild(ctx) {
				var _this19 = this;

				this._.childScopes.push(ctx);
				this._.seenChilds++;
				var lists = {
					'stable': function stable(s) {
						_this19._.unStableChilds--;
						if (!_this19._.unStableChilds) _this19.emit("stableTree", _this19);
					},
					'unstable': function unstable(s) {
						_this19._.unStableChilds++;
						if (1 == _this19._.unStableChilds) _this19.emit("unstableTree", _this19);
					},
					'stableTree': function stableTree(s) {
						_this19._.unStableChilds--;
						if (!_this19._.unStableChilds) _this19.emit("stableTree", _this19);
					},
					'unstableTree': function unstableTree(s) {
						_this19._.unStableChilds++;
						if (1 == _this19._.unStableChilds) _this19.emit("unstableTree", _this19);
					},
					'destroy': function destroy(ctx) {
						if (ctx._.unStableChilds) _this19._.unStableChilds--;
						if (!ctx.isStable()) _this19._.unStableChilds--;

						if (!_this19._.unStableChilds) _this19.emit("stableTree", _this19);
					}
				},
				    wasStable = this._.unStableChilds;
				//!ctx.isStable() && console.warn('add unstable child');
				!ctx.isStable() && this._.unStableChilds++;
				ctx._.unStableChilds && this._.unStableChilds++;
				this._.childScopesList.push(lists);
				if (!wasStable && this._.unStableChilds) this.emit("unstableTree", this);
				ctx.on(lists);
			}
		}, {
			key: '_rmChild',
			value: function _rmChild(ctx) {
				var i = this._.childScopes.indexOf(ctx),
				    wasStable = this._.unStableChilds;
				if (i != -1) {
					this._.childScopes.splice(i, 1);
					!ctx.isStable() && this._.unStableChilds--;
					ctx._.unStableChilds && this._.unStableChilds--;
					ctx.un(this._.childScopesList.splice(i, 1)[0]);
					if (wasStable && !this._.unStableChilds) this.emit("stableTree");
				}
			}
		}, {
			key: 'retain',
			value: function retain(reason) {
				this.__retains.all++;
				//console.log("retain", this._id, reason);
				if (reason) {
					this.__retains[reason] = this.__retains[reason] || 0;
					this.__retains[reason]++;
				}
			}
		}, {
			key: 'dispose',
			value: function dispose(reason) {
				var _this20 = this;

				//console.log("dispose", this._id, reason);
				if (reason) {
					if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);
					this.__retains[reason]--;
				}

				if (!this.__retains.all) throw new Error("Dispose more than retaining !");

				this.__retains.all--;

				if (!this.__retains.all) {
					//console.log("dispose do destroy ", this._id, this._persistenceTm);
					if (this._.persistenceTm) {
						this._.destroyTM && clearTimeout(this._.destroyTM);
						this._.destroyTM = setTimeout(function (e) {
							//this.then(s => {
							!_this20.__retains.all && !_this20.dead && _this20.destroy();
							//});
						}, this._.persistenceTm);
					} else {
						//this.then(s =>
						!this.__retains.all && !this.dead && this.destroy();
						//);
					}
				}
			}

			/**
    * order destroy of local stores
    */

		}, {
			key: 'destroy',
			value: function destroy() {
				var _this21 = this;

				var ctx = this._._scope;
				//console.warn("destroy", this._id);
				this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
				this._.propagTM && clearTimeout(this._.propagTM);
				Object.keys(this._._listening).forEach(function (id) {
					return id !== "$parent" && _this21._._scope[id].removeListener(_this21._._listening[id]);
				});
				while (this._._mixedList.length) {
					this._._mixed[0].removeListener(this._._mixedList.shift());
					this._._mixed.shift().dispose("mixedTo");
				}
				[].concat(_toConsumableArray(this._.followers)).map(function (follower) {
					return _this21.unBind.apply(_this21, _toConsumableArray(follower));
				});
				for (var key in ctx) {
					if (!is.fn(ctx[key])) {
						if (key == "$parent") continue;
						!ctx[key]._autoDestroy && ctx[key].dispose("scoped");
					}
				}if (this._._parentList) {
					this.parent._rmChild(this);
					this.parent.removeListener(this._._parentList);
					this.parent.dispose("isMyParent");
					this._._parentList = null;
				}
				this.dead = true;
				this.emit("destroy", this);

				//if ( !this._.isLocalId )
				delete openScopes[this._id];

				//this._ = null;
			}
		}]);

		return Scope;
	}(EventEmitter), _class.persistenceTm = 1, _class.Store = null, _class.scopeRef = function scopeRef(path) {
		this.path = path;
	}, _class.scopes = openScopes, _temp);

	is.rsScope = function (obj) {
		return obj instanceof Scope;
	};

	exports.default = Scope;
	module.exports = exports['default'];

	/***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};

	var is = __webpack_require__(3);

	exports.default = _extends({}, is);
	module.exports = exports['default'];

	/***/
},
/* 3 */
/***/function (module, exports) {

	module.exports = __webpack_require__(7);

	/***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.walknSet = walknSet;
	exports.walknGet = walknGet;
	exports.keyWalknSet = keyWalknSet;
	exports.keyWalknGet = keyWalknGet;

	function _toConsumableArray(arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
				arr2[i] = arr[i];
			}return arr2;
		} else {
			return Array.from(arr);
		}
	}

	var is = __webpack_require__(2);

	function walknSet(obj, path, value, stack) {
		if (is.string(path)) path = path.split('.');
		if (!path.length) return false;else if (path.length == 1) return obj[path[0]] = stack ? [].concat(_toConsumableArray(obj[path[0]] || []), [value]) : value;else return walknSet(obj[path[0]] = obj[path[0]] || {}, path.slice(1), value, stack);
	}

	function walknGet(obj, path, isKey) {
		if (is.string(path)) path = path.split('.');
		return path.length ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1)) : obj;
	}

	//@todo
	function keyWalknSet(obj, path, value, stack) {
		if (is.string(path)) path = path.split(/(\>|\/)/ig).filter(function (v) {
			return v !== '>' && v;
		});
		return walknSet(obj, path, value);
	}

	function keyWalknGet(obj, path, isKey) {
		if (is.string(path)) path = path.split(/(\>|\/)/ig).filter(function (v) {
			return v !== '>' && v;
		});
		return path.length ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1)) : obj;
	}

	/***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	function _toConsumableArray(arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
				arr2[i] = arr[i];
			}return arr2;
		} else {
			return Array.from(arr);
		}
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	/*
  * Copyright (c)  2018 Wise Wild Web .
  *
  *  MIT License
  *  
  *  Permission is hereby granted, free of charge, to any person obtaining a copy
  *  of this software and associated documentation files (the "Software"), to deal
  *  in the Software without restriction, including without limitation the rights
  *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  *  copies of the Software, and to permit persons to whom the Software is
  *  furnished to do so, subject to the following conditions:
  *  
  *  The above copyright notice and this permission notice shall be included in all
  *  copies or substantial portions of the Software.
  *  
  *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  *  SOFTWARE.
  *  
  * @author : Nathanael Braun
  * @contact : caipilabs@gmail.com
  */
	var is = __webpack_require__(3);

	var Emitter = function () {
		function Emitter() {
			_classCallCheck(this, Emitter);

			this._events = {};
		}

		_createClass(Emitter, [{
			key: 'on',
			value: function on(evt, cb) {
				var _this = this;

				if (!is.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
					return _this.on(k, evt[k]);
				});

				this._events[evt] = this._events[evt] || [];
				this._events[evt].push(cb);
			}
		}, {
			key: 'un',
			value: function un(evt, cb) {
				var _this2 = this;

				if (!is.string(evt) && evt) return Object.keys(evt).forEach(function (k) {
					return _this2.un(k, evt[k]);
				});

				if (!this._events[evt]) return;
				var i = this._events[evt].indexOf(cb);
				this._events[evt].splice(i, 1);
			}
		}, {
			key: 'emit',
			value: function emit(evt) {
				if (!this._events[evt]) return;
				var lists = [].concat(_toConsumableArray(this._events[evt]));

				for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					argz[_key - 1] = arguments[_key];
				}

				for (var i = 0; i < lists.length; i++) {
					lists[i].apply(lists, argz);
				}
			}
		}, {
			key: 'addListener',
			value: function addListener() {
				this.on.apply(this, arguments);
			}
		}, {
			key: 'removeListener',
			value: function removeListener() {
				this.un.apply(this, arguments);
			}
		}, {
			key: 'removeAllListeners',
			value: function removeAllListeners() {
				this._events = {};
			}
		}, {
			key: 'once',
			value: function once(evt, cb) {
				var _this3 = this;

				var _fn = void 0;
				this.on(evt, _fn = function fn() {
					_this3.un(evt, _fn);
					cb.apply(undefined, arguments);
				});
			}
		}]);

		return Emitter;
	}();

	exports.default = Emitter;
	module.exports = exports['default'];

	/***/
},
/* 6 */
/***/function (module, exports) {

	module.exports = __webpack_require__(13);

	/***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _get = function get(object, property, receiver) {
		if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);if (parent === null) {
				return undefined;
			} else {
				return get(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;if (getter === undefined) {
				return undefined;
			}return getter.call(receiver);
		}
	};

	var _class, _temp;

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
		} else {
			obj[key] = value;
		}return obj;
	}

	function _toConsumableArray(arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
				arr2[i] = arr[i];
			}return arr2;
		} else {
			return Array.from(arr);
		}
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/*
  * Copyright (c)  2018 Wise Wild Web .
  *
  *  MIT License
  *
  *  Permission is hereby granted, free of charge, to any person obtaining a copy
  *  of this software and associated documentation files (the "Software"), to deal
  *  in the Software without restriction, including without limitation the rights
  *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  *  copies of the Software, and to permit persons to whom the Software is
  *  furnished to do so, subject to the following conditions:
  *
  *  The above copyright notice and this permission notice shall be included in all
  *  copies or substantial portions of the Software.
  *
  *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  *  SOFTWARE.
  *
  * @author : Nathanael Braun
  * @contact : caipilabs@gmail.com
  */

	var is = __webpack_require__(2),
	    Scope = __webpack_require__(1),
	    _require = __webpack_require__(4),
	    keyWalknSet = _require.keyWalknSet,
	    keyWalknGet = _require.keyWalknGet,
	    EventEmitter = __webpack_require__(5),
	    TaskSequencer = __webpack_require__(8),
	    shortid = __webpack_require__(6),
	    objProto = Object.getPrototypeOf({});
	var Store = (_temp = _class = function (_EventEmitter) {
		_inherits(Store, _EventEmitter);

		/**
   * Constructor, will build a rescope store
   *
   * (scope, {require,use,apply,state, data})
   * (scope)
   *
   * @param scope {object} scope where to find the other stores (default : static
   *     staticScope )
   * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key",
   *     otherStore.as("otherKey")]
   */
		// overridable list of store that will allow push if updated
		function Store() {
			var _this$_require, _this$_require2;

			_classCallCheck(this, Store);

			var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));

			var argz = [].concat(Array.prototype.slice.call(arguments)),
			    _static = _this.constructor,
			    scope = argz[0] instanceof Scope ? argz.shift() : _static.scope ? Scope.getScope(_static.scope) : is.string(argz[0]) ? Scope.getScope(argz.shift()) : _static.staticScope,
			    cfg = argz[0] && !is.array(argz[0]) && !is.string(argz[0]) ? argz.shift() : {},
			    taskQueue = is.array(argz[0]) ? argz.shift() : null,
			    name = cfg.name || _static.name,
			    watchs = cfg.use || [],
			    apply = cfg.apply || null,
			    initialState = _static.state || _static.initialState || _static.defaultState,
			    applied;

			_this._uid = cfg._uid || shortid.generate();

			_this.__retains = { all: 0 };
			_this.__locks = { all: 0 };
			_this._onStabilize = [];

			// autoDestroyTm
			_this._autoDestroy = !!_this._persistenceTm;
			_this._persistenceTm = cfg.persistenceTm || _static.persistenceTm || (cfg.autoDestroy || _static.autoDestroy) && 5;
			_this._cfg = cfg;
			if (cfg && cfg.on) {
				_this.on(cfg.on);
			}

			_this.name = name;

			if (scope.stores) {
				_this.scopeObj = scope;
				_this.scope = scope.stores;
			} else {
				_this.scopeObj = new Scope(scope);
				_this.scope = scope.stores;
			}

			// standardized scope access
			_this.$scope = _this.scopeObj;
			_this.$stores = _this.scopeObj.stores;
			_this.$actions = _this.scopeObj.actions;
			_this.$dispatch = _this.scopeObj.dispatch.bind(_this.scopeObj);

			_this._rev = _this.constructor._rev || 0;
			_this._revs = {};
			_this.stores = {};
			_this._require = [];
			_this._sources = [name];

			if (is.array(_static.use)) {
				_this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray((_static.use || []).map(function (key) {
					var ref = key.match(/^(\!?)([^\:]*)(?:\:(.*))?$/);
					if (ref[1]) {
						var ref2 = ref[2].split('.');
						_this._require.push(ref[3] || ref2[ref2.length - 1]);
					}
					return ref[2];
				})));
			} else {
				_this._use = [].concat(_toConsumableArray(watchs), _toConsumableArray(_static.use ? Object.keys(_static.use).map(function (key) {
					var ref = key.match(/^(\!?)(.*)$/);
					ref[1] && _this._require.push(_static.use[key]);
					return ref[2] + (_static.use[key] === true ? '' : ':' + _static.use[key]);
				}) : []));
			}

			if (_static.require) (_this$_require = _this._require).push.apply(_this$_require, _toConsumableArray(_static.require));
			if (cfg.require) (_this$_require2 = _this._require).push.apply(_this$_require2, _toConsumableArray(cfg.require));

			_this._followers = [];
			_this._changesSW = initialState || {};
			_this.state = initialState && {};
			if (apply) _this.apply = apply;

			/**
    * Initial state isn't fully initialized ( childs constructors can set it )
    * Scope based instance have taskQueue to delay init synchronously, if not
    * present we use setTimeout
    */
			if (taskQueue) {
				taskQueue.push(_this._afterConstructor.bind(_this));
			} else setTimeout(_this._afterConstructor.bind(_this));
			return _this;
		}

		/**
   * Get the incoming state ( for immediate state relative actions )
   * @returns {{}|*}
   */
		// default state
		/**
   * if retain goes to 0 :
   * false to not destroy,
   * 0 to sync auto destroy
   * Ms to autodestroy after tm ms if no retain has been called
   * @type {boolean|Int}
   */

		//static use                  = [];// overridable list of source stores


		_createClass(Store, [{
			key: '_afterConstructor',
			value: function _afterConstructor() {
				var cfg = this._cfg,
				    _static = this.constructor,
				    snapshot = this.restore(undefined, true),
				    initialState = this.state,
				    initialData = this.data,
				    applied = void 0;
				{

					if (initialData) this.data = initialData;else if (_static.data !== undefined) this.data = _extends({}, _static.data);else if (cfg.hasOwnProperty("data")) this.data = cfg.data;

					if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = _extends({}, initialState, cfg.state);

					if (this.data === undefined) {
						if (initialState || this._use.length) {
							// sync apply
							this._changesSW = _extends({}, this._changesSW, initialState || {}, this.$scope.map(this, this._use));
							this.state = {};
							if (this.shouldApply(this._changesSW) && this.data === undefined) {
								this.data = this.apply(this.data, this._changesSW, this._changesSW);
								applied = true;
								this.state = this._changesSW;
								this._changesSW = {};
							}
						}
					} else {
						applied = true;
						this.state = _extends({}, this._changesSW, initialState || {}, this.$scope.map(this, this._use));
						this._changesSW = {};
					}
				}
				if ((this.data !== undefined || applied) && !this.__locks.all) {
					this._stable = true;
					this._rev++;
				} else {
					this._stable = false;
					if (!_static.managed && !this.state && (!this._use || !this._use.length)) {
						console.warn("ReScope store '", this.name, "' have no initial data, state or use. It can't stabilize...");
					}
				}
				!this._stable && this.emit('unstable', this.state);
			}

			/**
    * Overridable method to know if a data change should be propag to the listening
    * stores & components
    */

		}, {
			key: 'shouldPropag',
			value: function shouldPropag(nDatas) {

				return true;
			}
		}, {
			key: 'hasDataChange',
			value: function hasDataChange(nDatas) {
				var _static = this.constructor,
				    r,
				    cDatas = this.data;
				r = !cDatas && nDatas || cDatas !== nDatas;
				!r && cDatas && Object.keys(cDatas).forEach(function (key) {
					r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
				});
				!r && nDatas && Object.keys(nDatas).forEach(function (key) {
					r = r || (nDatas ? cDatas[key] !== nDatas[key] : cDatas && cDatas[key]);
				});
				return r;
			}

			/**
    * Overridable method to know if a state change should be applied
    */

		}, {
			key: 'shouldApply',
			value: function shouldApply() {
				var _this2 = this;

				var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;

				var _static = this.constructor;

				return !!this.isComplete(state) && (is.array(_static.follow) ? _static.follow.reduce(function (r, i) {
					return r || state && state[i];
				}, false) : _static.follow ? Object.keys(_static.follow).reduce(function (r, i) {
					return r || state && is.fn(_static.follow[i]) && _static.follow[i].call(_this2, state[i]) || _static.follow[i] && state[i] !== _this2.state[i];
				}, false) : true);
			}

			/**
    * Overridable applier / remapper
    * If state or lastPublicState are simple hash maps apply will return {...data,
    * ...state} if not it will return the last private state
    * @param data
    * @param state
    * @returns {*}
    */

		}, {
			key: 'apply',
			value: function apply(data, state, changes) {
				state = state || this.state;

				if (this.refine) return this.refine.apply(this, arguments);

				if (!data || data.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, data, state);
			}

			/**
    * @depreciated
    * @param data
    * @param state
    * @param changes
    * @returns {*}
    */

		}, {
			key: 'refine',
			value: function refine(data, state, changes) {
				state = state || this.state;

				if (!data || data.__proto__ !== objProto || state.__proto__ !== objProto) return state;else return _extends({}, data, state);
			}

			/**
    * Debounce this store propagation ( & reducing )
    * @param cb
    */

		}, {
			key: 'stabilize',
			value: function stabilize(cb) {
				cb && this.once('stable', cb);
				this._stable && this.emit('unstable', this.state, this.data);

				this._stable = false;

				if (this._stabilizer) return;

				this._stabilizer = TaskSequencer.pushTask(this, 'pushState');
			}
		}, {
			key: 'retrieve',
			value: function retrieve(path) {
				var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
				var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.data;

				path = is.string(path) ? path.split('.') : path;
				return !obj || !path || !path.length ? obj : path.length == i + 1 ? obj[path[i]] : this.retrieve(path, i + 1, obj[path[i]]);
			}
		}, {
			key: 'dispatch',
			value: function dispatch(action) {
				var _scopeObj;

				for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
					argz[_key2 - 1] = arguments[_key2];
				}

				(_scopeObj = this.scopeObj).dispatch.apply(_scopeObj, [action].concat(argz));
			}
		}, {
			key: 'trigger',
			value: function trigger(action) {
				var actions = this.constructor.actions;

				if (actions && actions[action]) {
					var _actions$action;

					for (var _len2 = arguments.length, argz = Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
						argz[_key3 - 1] = arguments[_key3];
					}

					var ns = (_actions$action = actions[action]).call.apply(_actions$action, [this].concat(argz));
					ns && this.setState(ns);
				}
			}

			/**
    * Pull stores in the private state
    * @param stores  {Array} (passed to Store::map) Ex : ["session",
    *     "otherNamedStore:key", otherStore.as("otherKey")]
    */

		}, {
			key: 'pull',
			value: function pull(stores, doWait, origin) {
				var _this3 = this;

				var initialOutputs = this.scopeObj.map(this, stores);
				if (doWait) {
					this.wait();
					stores.forEach(function (s) {
						return _this3.scope[s] && _this3.wait(_this3.scope[s]);
					});
					this.release();
				}
				return initialOutputs;
			}

			/**
    * Set & Push the result data to followers if stable
    * @param cb
    */

		}, {
			key: 'push',
			value: function push(data, force, cb) {
				cb = force === true ? cb : force;
				force = force === true;
				if (!force && !this.hasDataChange(data)) {
					cb && cb();
					if (!this.__locks.all) {
						var stable = this._stable;
						this._stable = true;
						!stable && this.emit('stable', this.state, this.data);
						this._stabilizer = null;
					}
					return false;
				}

				this.data = data;
				this.wait();
				this.release(cb);
			}

			/**
    * Call the apply fn using the current accumulated state update then, push the
    * resulting data if stable
    * @param force
    * @returns {boolean}
    */

		}, {
			key: 'pushState',
			value: function pushState(force) {

				if (!force && !this._changesSW && this.data) return;

				var nextState = this._nextState || _extends({}, this.state, this._changesSW || {}),
				    nextData = this.apply(this.data, nextState, this._changesSW);

				this._stabilizer = null;
				this.state = nextState;
				this._changesSW = null;

				if (!force && !this.hasDataChange(nextData)) {
					if (!this.__locks.all) {
						var stable = this._stable;
						this._stable = true;
						!stable && this.emit('stable', this.state, this.data);
						this._stabilizer = null;
					}
					return false;
				}

				this.data = nextData;
				this.wait();
				this.release();
			}

			/**
    * Add 'pState' to the current accumulated state updates
    * & wait source stores stabilization before pushing these state updates
    * @param pState
    * @param cb
    */

		}, {
			key: 'setState',
			value: function setState(pState, cb, sync) {
				var i = 0,
				    change,
				    changes = this._changesSW = this._changesSW || {};
				for (var k in pState) {
					if (!this.state || changes.hasOwnProperty(k) // todo
					&& pState[k] !== changes[k] || pState.hasOwnProperty(k) && (pState[k] !== this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
					)) {
						change = true;
						this._revs[k] = pState[k] && pState[k]._rev || true;
						changes[k] = pState[k];
					}
				}this._nextState = _extends({}, this.state, changes);
				if (!this.shouldApply(this._nextState)) {
					return;
				}

				if (sync) {
					this.pushState();
					cb && cb();
				} else {
					if (change) {
						this.stabilize(cb);
					} else cb && cb();
				}
				return this;
			}

			/**
    * Update the current state & push it
    * @param pState
    * @param cb
    */

		}, {
			key: 'setStateSync',
			value: function setStateSync(pState) {
				var i = 0,
				    change,
				    changes = this._changesSW = this._changesSW || {};
				for (var k in pState) {
					if (!this.state || pState.hasOwnProperty(k) && (pState[k] != this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
					)) {
						change = true;
						this._revs[k] = pState[k] && pState[k]._rev || true;
						changes[k] = pState[k];
					}
				}this.shouldApply(_extends({}, this.state || {}, changes)) && this.pushState();
				return this.data;
			}

			/**
    * get a store-key pair for Store::map
    * @param {string} name
    * @returns {{store: Store, name: *}}
    */

		}, {
			key: 'as',
			value: function as(name) {
				return { store: this, name: name };
			}
		}, {
			key: 'on',
			value: function on(lists) {
				var _this4 = this;

				if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
					return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', _this4).call(_this4, k, lists[k]);
				});else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'on', this).apply(this, arguments);
			}
		}, {
			key: 'removeListener',
			value: function removeListener(lists) {
				var _this5 = this;

				if (!is.string(lists) && lists) Object.keys(lists).forEach(function (k) {
					return _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', _this5).call(_this5, k, lists[k]);
				});else _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'removeListener', this).apply(this, arguments);
			}

			/**
    * is complete (all requiered keys are here)
    * @returns bool
    */

		}, {
			key: 'isComplete',
			value: function isComplete() {
				var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;

				var _static = this.constructor;
				return !this._require || !this._require.length || state && this._require.reduce(function (r, key) {
					return r && state[key];
				}, true);
			}

			/**
    * is stable
    * @returns bool
    */

		}, {
			key: 'isStable',
			value: function isStable() {
				return this._stable;
			}

			/**
    * Serialize state & data with sources refs
    * @returns bool
    */

		}, {
			key: 'serialize',
			value: function serialize() {
				var _this6 = this;

				var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				var refs = !cfg.norefs && is.array(this._use) && this._use.reduce(function (map, key) {
					//todo
					var name = void 0,
					    alias = void 0,
					    path = void 0,
					    store = void 0;
					if (key.store && key.name) {
						alias = name = key.name;
						store = _this6.scopeObj.stores[name];
					} else if (is.fn(key)) {
						name = alias = key.name || key.defaultName;
						store = _this6.scopeObj.stores[name];
					} else {
						key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
						name = key[1];
						path = key[2] && key[2].substr(1);
						alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
						store = _this6.scopeObj.retrieveStore(path);
					}
					if (store && !store.scopeObj._.isLocalId) map[alias] = store.scopeObj._id + '/' + name;

					return map;
				}, {}) || {};

				keyWalknSet(output, this.scopeObj._id + '/' + this.name, {
					state: this.state && (cfg.norefs ? _extends({}, this.state) : Object.keys(this.state).reduce(function (h, k) {
						return !refs[k] && (h[k] = _this6.state[k]), h;
					}, {})),
					data: (this.data && this.data.__proto__ === objProto ? this.data : (is.bool(this.data) || is.number(this.data) || is.string(this.data)) && this.data) || undefined,

					refs: refs
				});
				return output;
			}

			/**
    * restore state & data
    * @returns bool
    */

		}, {
			key: 'restore',
			value: function (_restore) {
				function restore(_x, _x2) {
					return _restore.apply(this, arguments);
				}

				restore.toString = function () {
					return _restore.toString();
				};

				return restore;
			}(function (snapshot, immediate) {
				var _this7 = this;

				snapshot = snapshot && keyWalknGet(snapshot, this.scopeObj._id + '/' + this.name) || this.$scope.takeSnapshotByKey(this.scopeObj._id + '/' + this.name);

				if (!snapshot) return;

				if (snapshot) {
					if (!this.isStable() && !immediate) this.then(function () {
						return restore(snapshot);
					});
					var snap = void 0;
					this.state = _extends({}, snapshot.state);
					Object.keys(snapshot.refs).forEach(function (key) {
						//todo
						if (snap = _this7.$scope.getSnapshotByKey(snapshot.refs[key])) _this7.state[key] = snap.data;else console.warn('not found : ', key, snap.refs[key]);
					});

					this.data = snapshot.data;
				}
			})

			/**
    * Un bind this store off the given component-key
    * @param obj
    * @param key
    * @returns {Array.<*>}
    */

		}, {
			key: 'unBind',
			value: function unBind(obj, key, path) {
				var followers = this._followers,
				    i = followers && followers.length;
				while (followers && i--) {
					if (followers[i][0] === obj && followers[i][1] === key && followers[i][2] === path) return followers.splice(i, 1);
				}
			}

			/**
    * Bind this store changes to the given component-key
    * @param obj {React.Component|Store|function)
    * @param key {string} optional key where to map the public state
    */

		}, {
			key: 'bind',
			value: function bind(obj, key) {
				var setInitial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
				var path = arguments[3];

				this._followers.push([obj, key, path]);
				if (setInitial && this.data && this._stable) {
					var data = path ? this.retrieve(path) : this.data;
					if (typeof obj != "function") {
						if (key) obj.setState(_defineProperty({}, key, data));else obj.setState(data);
					} else {
						obj(data);
					}
				}
			}

			/**
    * once('stable', cb)
    * @param obj {React.Component|Store|function)
    * @param key {string} optional key where to map the public state
    */

		}, {
			key: 'then',
			value: function then(cb) {
				var _this8 = this;

				if (this._stable) return cb(this.data);
				this.once('stable', function (e) {
					return cb(_this8.data);
				});
			}

			/**
    * Add a lock so the store will not propag it data untill release() is call
    * @param previous {Store|number|Array} @optional wf to wait, releases to wait or
    *     array of stuff to wait
    * @returns {this}
    */

		}, {
			key: 'wait',
			value: function wait(previous) {
				if (typeof previous == "number") return this.__locks.all += previous;
				if (is.array(previous)) return previous.map(this.wait.bind(this));

				this._stable && this.emit('unstable', this.state, this.data);
				this._stable = false;
				this.__locks.all++;

				var reason = is.string(previous) ? previous : null;
				if (reason) {
					this.__locks[reason] = this.__locks[reason] || 0;
					this.__locks[reason]++;
				}
				if (previous && is.fn(previous.then)) {
					previous.then(this.release.bind(this, null));
				}
				return this;
			}

			/**
    * Decrease locks for this store, if it reach 0 ,
    * it will be propagated to the followers,
    * then, all stuff passed to "then" call back will be exec / released
    * @param desync
    * @returns {*}
    */

		}, {
			key: 'release',
			value: function release(reason, cb) {
				var _static = this.constructor,
				    me = this;
				var i = 0,
				    wasStable = this._stable;

				if (is.fn(reason)) {
					cb = reason;
					reason = null;
				}

				if (reason) {
					if (this.__locks[reason] == 0) console.error("Release more than locking !", reason);
					this.__locks[reason] = this.__locks[reason] || 0;
					this.__locks[reason]--;
				}

				if (!reason && this.__locks.all == 0) console.error("Release more than locking !");

				if (! --this.__locks.all && this.isComplete()) {
					var propag = this.shouldPropag(this.data);
					this._stable = true;
					propag && this._rev++; //
					if (propag && this._followers.length) this._followers.forEach(function propag(follower) {
						var data = follower[2] ? me.retrieve(follower[2]) : me.data;
						//if ( !data ) return;

						if (typeof follower[0] == "function") {
							follower[0](data);
						} else {
							//cb && i++;
							follower[0].setState(follower[1] ? _defineProperty({}, follower[1], data) : data
							//,
							//cb && (
							//    () => (!(--i) && cb())
							//)
							);
						}
					});
					//else
					!wasStable && this.emit('stable', this.data);
					propag && this.emit('update', this.data);
					cb && cb();
				} else cb && this.then(cb);
				return this;
			}
		}, {
			key: 'propag',
			value: function propag(data) {
				this.emit('update', data);
			}
		}, {
			key: 'retain',
			value: function retain(reason) {
				this.__retains.all++;
				if (reason) {
					this.__retains[reason] = this.__retains[reason] || 0;
					this.__retains[reason]++;
				}
			}
		}, {
			key: 'dispose',
			value: function dispose(reason) {
				var _this9 = this;

				//console.warn("dispose", reason, this.__retains);
				if (reason) {
					if (!this.__retains[reason]) throw new Error("Dispose more than retaining : " + reason);

					this.__retains[reason]--;
				}
				if (this.__retains.all == 0) throw new Error("Dispose more than retaining !");

				this.__retains.all--;

				if (!this.__retains.all) {
					if (this._persistenceTm) {
						this._destroyTM && clearTimeout(this._destroyTM);
						this._destroyTM = setTimeout(function (e) {
							_this9._destroyTM = null;
							//this.then(s => {
							!_this9.__retains.all && !_this9.dead && _this9.destroy();
							//});
						}, this._persistenceTm);
					} else {
						//this.then(s =>
						!this.__retains.all && !this.dead && this.destroy();
						//);
					}
				}
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				//  console.log("destroy", this._uid);

				this.emit('destroy', this);
				if (this._stabilizer) clearTimeout(this._stabilizer);

				if (this._followers.length) this._followers.forEach(function (follower) {
					if (typeof follower[0] !== "function") {
						if (follower[0].stores) delete follower[0].stores[follower[1]];
					}
				});
				this._followers.length = 0;
				this.constructor._rev = this.rev;
				this.dead = true;
				this._revs = this.data = this.state = this.scope = null;
				this.removeAllListeners();
			}
		}, {
			key: 'nextState',

			/**
    * Get the incoming state ( for immediate state relative actions )
    * @returns {{}|*}
    */
			get: function get() {
				return this._changesSW && _extends({}, this.state, this._changesSW) || this.state;
			}
		}, {
			key: 'contextObj',

			/**
    * @deprecated
    * @returns {*}
    */
			get: function get() {
				return this.scopeObj;
			}

			/**
    * @deprecated
    * @returns {*}
    */

		}, {
			key: 'context',
			get: function get() {
				return this.scope;
			}

			/**
    * @deprecated
    * @returns {*}
    */

		}, {
			key: 'datas',
			get: function get() {
				return this.data;
			}

			/**
    * @deprecated
    * @returns {*}
    */

			, set: function set(v) {
				//console.groupCollapsed("Rescope store : Setting datas is depreciated, use
				// data"); console.log("Rescope store : Setting datas is depreciated, use data",
				// (new Error()).stack); console.groupEnd();

				this.data = v;
			}
		}]);

		return Store;
	}(EventEmitter), _class.staticScope = new Scope({}, { id: "static" }), _class.state = undefined, _class.persistenceTm = false, _temp);

	/**
  * get a static aliased reference of a store
  * @param {string} name
  * @returns {{store: Store, name: *}}
  */

	Store.as = function (name) {
		return { store: this, name: name };
	};

	/**
  * Map all named stores in {keys} to the {object}'s state
  * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
  * @static
  * @param object {Object} target state aware object (React.Component|Store|...)
  * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key",
  *     store.as('anotherKey')]
  */
	Store.map = function (component, keys, scope, origin) {
		var setInitial = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

		var targetRevs = component._revs || {};
		var targetScope = component.stores || (component.stores = {});
		var initialOutputs = {};
		keys = is.array(keys) ? [].concat(_toConsumableArray(keys)) : [keys];

		scope = scope || Store.staticScope;

		keys = keys.filter(
		// @todo : use query refs
		// (store)(\.store)*(\[(\*|(props)\w+)+)\])?(\:alias)
		function (key) {
			var _component$_sources;

			if (!key) {
				console.error("Not a mappable store item '" + key + "' in " + origin + ' !!');
				return false;
			}
			var name = void 0,
			    alias = void 0,
			    path = void 0,
			    store = void 0,
			    _key = void 0;
			if (key.store && key.name) {
				alias = name = key.name;
				store = key.store;
			} else if (is.fn(key)) {
				name = alias = key.name || key.defaultName;
				store = key;
			} else {
				_key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
				name = _key[1];
				path = _key[2] && _key[2].substr(1);
				store = scope.stores[_key[1]];
				alias = _key[3] || path && path.match(/([^\.]*)$/)[0] || _key[1];
			}

			if (is.rsScope(store.prototype)) scope._mount(name);
			if (is.rsScope(store)) {
				store = scope._mount(key);
			} else if (targetRevs[name]) return false; // ignore dbl uses for now

			if (!store) {
				console.error("Not a mappable store item '" + name + "/" + alias + "' in " + (component.name || component) + ' !!', store);
				return false;
			} else if (is.fn(store)) {
				scope._mount(name);
				scope.stores[name].bind(component, alias, setInitial, path);
			} else {
				store.bind(component, alias, setInitial, path);
			}

			// give initial store weight basing sources
			scope.stores[name]._sources && (_component$_sources = component._sources).push.apply(_component$_sources, _toConsumableArray(scope.stores[name]._sources));

			targetRevs[alias] = targetRevs[alias] || true;
			!targetScope[name] && (targetScope[name] = scope.stores[name]);
			if (scope.stores[name].hasOwnProperty('data')) initialOutputs[name] = scope.data[name];
			return true;
		});

		// ... @todo
		var mixedCWUnmount,
		    unMountKey = component.isReactComponent ? "componentWillUnmount" : "destroy";

		if (component.hasOwnProperty(unMountKey)) {
			mixedCWUnmount = component[unMountKey];
		}

		component[unMountKey] = function () {
			delete component[unMountKey];
			if (mixedCWUnmount) component[unMountKey] = mixedCWUnmount;

			keys.map(function (key) {
				var name = void 0,
				    alias = void 0,
				    path = void 0,
				    store = void 0;
				if (key.store && key.name) {
					alias = name = key.name;
					store = key.store;
				} else if (is.fn(key)) {
					name = alias = key.name || key.defaultName;
					store = scope.stores[name];
				} else {
					key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
					name = key[1];
					path = key[2] && key[2].substr(1);
					store = scope.stores[key[1]];
					alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
				}

				store && !is.fn(store) && store.unBind(component, alias, path);
			});
			return component[unMountKey] && component[unMountKey].apply(component, arguments);
		};

		return initialOutputs;
	};

	is.rsStore = function (obj) {
		return obj instanceof Store;
	};

	exports.default = Store;
	module.exports = exports['default'];

	/***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _is = __webpack_require__(3);

	var _is2 = _interopRequireDefault(_is);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
  * Minimal push sequencer, apply stores specific task in the right order (root stores
  * first)
  */
	var taskQueue = [],
	    curWeight = 0,
	    maxWeight = 0,
	    minWeight = 0,
	    taskCount = 0,
	    deSync = false,
	    deSyncMaxTasks = 10,
	    task = void 0,
	    isRunning = void 0,
	    errorCatcher = {
		lastError: null,
		dispatch: function dispatch(error) {
			errorCatcher.disable();
			if (task && task[0].handleError) {
				task[0].handleError(error, task);
			} else if (task) console.error("ReScope : A task has failed !!", task[1], " on ", task[0].name || task[0].constructor.name);

			isRunning = false;
			task = null;
			runNow();
		},
		enable: typeof window !== 'undefined' ? function () {
			window.addEventListener('error', errorCatcher.dispatch);
		} : function () {
			process.on('uncaughtException', errorCatcher.dispatch);
		},
		disable: typeof window !== 'undefined' ? function () {
			window.removeEventListener('error', errorCatcher.dispatch);
		} : function () {
			process.removeListener('uncaughtException', errorCatcher.dispatch);
		}
	}; /*
     * Copyright (c)  2018 Wise Wild Web .
     *
     *  MIT License
     *
     *  Permission is hereby granted, free of charge, to any person obtaining a copy
     *  of this software and associated documentation files (the "Software"), to deal
     *  in the Software without restriction, including without limitation the rights
     *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     *  copies of the Software, and to permit persons to whom the Software is
     *  furnished to do so, subject to the following conditions:
     *
     *  The above copyright notice and this permission notice shall be included in all
     *  copies or substantial portions of the Software.
     *
     *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     *  SOFTWARE.
     *
     * @author : Nathanael Braun
     * @contact : caipilabs@gmail.com
     */

	//import index from "./index";// will use as external the index in dist


	function runNow() {
		if (!isRunning) {
			run();
		}
	}

	function run() {
		var from = Date.now();
		isRunning = true;
		errorCatcher.enable();
		while (taskCount) {

			// try for the current weight
			while (!(taskQueue[curWeight] && taskQueue[curWeight].length)) {
				curWeight++;
			}taskCount--;
			task = taskQueue[curWeight].shift();
			//console.log("Task : ", task[1], " on ", task[0].name);
			task[0][task[1]].apply(task[0], task[2]);
		}
		task = undefined;
		errorCatcher.disable();

		isRunning = false;
		if (taskCount) {
			setTimeout(runNow);
		}
	}

	//
	//index.setTaskDeSync = ( nb ) => {
	//    if ( nb === false )
	//        return deSync = false;
	//    else if ( nb === true ) {
	//        deSync         = true;
	//        deSyncMaxTasks = 10;
	//    }
	//    else (is.int(nb))
	//    {
	//        deSync         = true;
	//        deSyncMaxTasks = nb;
	//    }
	//};

	exports.default = {
		pushTask: function pushTask(obj, fn, argz) {
			/**
    * The more a store have sources, the more it should be processed first
    * So leafs stores stay sync, root stores get merged state updates and global
    * state stay coherent
    * @type {*|number}
    */
			var weight = obj._sources && obj._sources.length || 1,
			    stack = taskQueue[weight] = taskQueue[weight] || [];

			maxWeight = Math.max(maxWeight, weight);
			curWeight = Math.min(curWeight, weight);
			taskCount++;

			//console.log("Push Task : ", fn, " on ", obj.name, weight);
			stack.push([obj, fn, argz]);
			setTimeout(runNow, 0);
			return stack.length;
		}
	};
	module.exports = exports["default"];

	/***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.scopeToState = exports.reScope = exports.addScopableType = undefined;

	var _is = __webpack_require__(3);

	var _is2 = _interopRequireDefault(_is);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
				arr2[i] = arr[i];
			}return arr2;
		} else {
			return Array.from(arr);
		}
	} /*
    * Copyright (c)  2018 Wise Wild Web .
    *
    *  MIT License
    *
    *  Permission is hereby granted, free of charge, to any person obtaining a copy
    *  of this software and associated documentation files (the "Software"), to deal
    *  in the Software without restriction, including without limitation the rights
    *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    *  copies of the Software, and to permit persons to whom the Software is
    *  furnished to do so, subject to the following conditions:
    *
    *  The above copyright notice and this permission notice shall be included in all
    *  copies or substantial portions of the Software.
    *
    *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    *  SOFTWARE.
    *
    * @author : Nathanael Braun
    * @contact : caipilabs@gmail.com
    */

	var SimpleObjectProto = {}.constructor;

	var scopables = [];

	function addScopableType(test, handle) {
		var member = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
		var stateScope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

		scopables.push({
			test: test,
			member: member,
			stateScope: stateScope,
			handle: handle
		});
	}

	//
	function isScopableType(Comp, member, stateScope) {

		for (var i = 0; i < scopables.length; i++) {
			if ((member === undefined || member == scopables[i].member) && stateScope == scopables[i].stateScope && scopables[i].test(Comp)) return true;
		}return false;
	}

	function applyScopableType(Comp, argz, member, stateScope) {

		for (var i = 0; i < scopables.length; i++) {
			var _scopables$i;

			if (member == scopables[i].member && stateScope == scopables[i].stateScope && scopables[i].test(Comp)) return (_scopables$i = scopables[i]).handle.apply(_scopables$i, [Comp].concat(_toConsumableArray(argz)));
		}console.warn("reScope : Unknown type", Comp);

		return false;
	}

	function reScope() {
		for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
			argz[_key] = arguments[_key];
		}

		// are we decorating a member / without argz
		if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
			argz[2].value = applyScopableType(argz[0], [], true, false);
			return argz[0];
		} else if (!isScopableType(argz[0], undefined, false)) {
			return function () {
				for (var _len2 = arguments.length, argz2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					argz2[_key2] = arguments[_key2];
				}

				// are we decorating a member / with argz
				if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
					argz2[2].value = applyScopableType(argz2[0], argz, true, false);
					return argz2[0];
				} else return reScope.apply(undefined, [argz2[0]].concat(argz));
			};
		}
		return applyScopableType(argz[0], argz.slice(1), false, false);
	}

	function scopeToState() {
		for (var _len3 = arguments.length, argz = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			argz[_key3] = arguments[_key3];
		}

		// are we decorating a member / without argz
		if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
			argz[2].value = applyScopableType(argz[0], [], true, true);
			return argz[0];
		} else if (!isScopableType(argz[0], undefined, true)) {
			return function () {
				for (var _len4 = arguments.length, argz2 = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
					argz2[_key4] = arguments[_key4];
				}

				// are we decorating a member / with argz
				if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
					argz2[2].value = applyScopableType(argz2[0], argz, true, true);
					return argz2[0];
				} else return scopeToState.apply(undefined, [argz2[0]].concat(argz));
			};
		}
		return applyScopableType(argz[0], argz.slice(1), false, true);
	}

	//
	//addScopableType(
	//    ( Comp ) => (Comp && Comp.prototype instanceof Store),
	//    function reScope( ...argz ) {
	//        let BaseStore    = (!argz[0] || argz[0].prototype instanceof Store) &&
	// argz.shift(), scope        = (!argz[0] || argz[0] instanceof Scope || is.fn(argz[0]))
	// && argz.shift(), use          = (is.array(argz[0])) && argz.shift(), stateMap     =
	// !use && (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift(),
	// initialState = {};  let compName = BaseStore.displayName || BaseStore.name;  use =
	// [...(BaseStore.use || []), ...(use || [])]; stateMap &&
	// Scope.stateMapToRefList(stateMap, initialState, use);  class StateScopedStore extends
	// BaseStore { static use         = use; static displayName = "stateScoped(" + compName +
	// ")";  constructor( ...argz ) { super(scope, argz.slice(argz[0] instanceof Scope ? 1 :
	// 0)) } }  return StateScopedStore; }, false, true )


	exports.addScopableType = addScopableType;
	exports.reScope = reScope;
	exports.scopeToState = scopeToState;

	/***/
}]
/******/);
//# sourceMappingURL=ReScope.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25), __webpack_require__(0)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (t) {
  function e(i) {
    if (s[i]) return s[i].exports;var r = s[i] = { exports: {}, id: i, loaded: !1 };return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports;
  }var s = {};return e.m = t, e.c = s, e.p = "/", e(0);
}([function (t, e, s) {
  "use strict";
  function i(t) {
    return t && t.__esModule ? t : { default: t };
  }Object.defineProperty(e, "__esModule", { value: !0 });var r = s(3),
      n = i(r),
      o = s(7),
      a = i(o),
      h = s(9),
      u = "undefined" != typeof window ? window : global,
      c = u.___rescope || {};u.___rescope || (u.___rescope = c, n.default.Store = a.default, c.Scope = n.default, c.Context = n.default, c.Store = a.default, c.reScope = h.reScope, c.scopeToState = h.scopeToState, c.reScopeState = h.scopeToState, c.addScopableType = h.addScopableType, c.scopeRef = function (t, e) {
    return t[e] = new n.default.scopeRef(t[e]), t;
  }), e.default = c, t.exports = e.default;
}, function (t, e) {
  t.exports = __webpack_require__(7);
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 });var i = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var s = arguments[e];for (var i in s) {
        Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
      }
    }return t;
  },
      r = s(1);e.default = i({}, r), t.exports = e.default;
}, function (t, e, s) {
  "use strict";
  function i(t) {
    if (Array.isArray(t)) {
      for (var e = 0, s = Array(t.length); e < t.length; e++) {
        s[e] = t[e];
      }return s;
    }return Array.from(t);
  }function r(t, e, s) {
    return e in t ? Object.defineProperty(t, e, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = s, t;
  }function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
  }function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }Object.defineProperty(e, "__esModule", { value: !0 });var h,
      u,
      c = function () {
    function t(t, e) {
      for (var s = 0; s < e.length; s++) {
        var i = e[s];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (e, s, i) {
      return s && t(e.prototype, s), i && t(e, i), e;
    };
  }(),
      l = s(2),
      _ = s(5),
      p = _.walknSet,
      f = (_.walknGet, _.keyWalknSet),
      d = _.keyWalknGet,
      v = s(4),
      y = s(6),
      b = function b(t, e, s) {
    var i = function i() {};i.prototype = s ? new s._[e]() : t[e] || {}, t[e] = new i(), t._[e] = i;
  },
      g = {},
      m = ({}.constructor, u = h = function (t) {
    function e(t) {
      var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = s.parent,
          r = s.key,
          a = s.id,
          h = s.snapshot,
          u = s.state,
          c = s.data,
          _ = s.incrementId,
          p = void 0 === _ ? !!r : _,
          f = s.persistenceTm,
          d = s.autoDestroy,
          v = s.rootEmitter,
          m = s.boundedActions;n(this, e);var k = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)),
          S = {};if (a = a || r && (i && i._id || "") + ">" + r, S.isLocalId = !a, a = a || "_____" + y.generate(), g[a]) {
        var w;return k._id = a, w = g[a], o(k, w);
      }if (g[a] && p) {
        for (var O = -1; g[a + "[" + ++O + "]"];) {}a = a + "[" + O + "]";
      }if (k._id = a, k._rev = 0, g[a] = k, S.persistenceTm = f || k.constructor.persistenceTm, k.actions = {}, k.stores = {}, k.state = {}, k.data = {}, k.parent = i, k._ = S, k._autoDestroy = d, i && i.dead) throw new Error("Can't use a dead scope as parent !");return b(k, "actions", i), b(k, "stores", i), b(k, "state", i), b(k, "data", i), k.sources = [], S.childScopes = [], S.childScopesList = [], S.unStableChilds = 0, S.seenChilds = 0, k.__retains = { all: 0 }, k.__locks = { all: 1 }, S._boundedActions = l.array(m) ? { test: m.includes.bind(m) } : m, S._listening = {}, S._scope = {}, S._mixed = [], S._mixedList = [], S.followers = [], i && (i.retain("isMyParent"), v ? i.on(S._parentList = { update: function update(t) {
          return k._propag();
        } }) : (!i._stable && k.wait("waitingParent"), i.on(S._parentList = { stable: function stable(t) {
          return k.release("waitingParent");
        }, unstable: function unstable(t) {
          return k.wait("waitingParent");
        }, update: function update(t) {
          return k._propag();
        } }))), k.register(t, u, c), k.__locks.all--, k._stable = !k.__locks.all, i && i._addChild(k), k.restore(h), d && setTimeout(function (t) {
        k.retain("autoDestroy"), k.dispose("autoDestroy");
      }), k;
    }return a(e, t), c(e, null, [{ key: "getScope", value: function value(t) {
        var s = l.array(t) ? t.sort(function (t, e) {
          return t.firstname < e.firstname ? -1 : t.firstname > e.firstname ? 1 : 0;
        }).join("+") : t;return g[s] = g[s] || new e({}, { id: s });
      } }, { key: "stateMapToRefList", value: function value(t) {
        var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";return Object.keys(t).forEach(function (o) {
          var a = n ? n + "." + o : o;t[o] instanceof e.scopeRef ? i.push(t[o].path + ":" + a) : t[o] && t[o] instanceof Function ? r[o] = t[o] : t[o] && t[o].prototype instanceof e.Store ? i.push(t[o].as(a)) : s[a] = t[o];
        }), i;
      } }]), c(e, [{ key: "mount", value: function value(t, e, s, i) {
        var r = this;return l.array(t) ? t.forEach(function (t) {
          return r._mount(t, e, s, i);
        }) : this._mount.apply(this, arguments), this;
      } }, { key: "_mount", value: function value(t, e, s, i) {
        var r = void 0;if (r = this.parseRef(t), "$parent" != t) {
          if (!this._._scope[r.storeId]) {
            var n;if (this._._mixed.reduce(function (r, n) {
              return r || n._mount(t, e, s, i);
            }, !1) || !this.parent) return;return (n = this.parent)._mount.apply(n, arguments);
          }var o = this._._scope[r.storeId],
              a = [];if (l.rsStore(o.prototype)) for (this._._scope[r.storeId] = new o(this, { name: r.storeId, state: s, data: i }, a); a.length;) {
            a.shift()();
          } else l.rsScope(o.prototype) && (o = this._._scope[r.storeId] = new o({ $parent: this }, { id: this._id + "/" + r.storeId }), r.path.length > 1 && this._._scope[r.storeId].mount(r.path.slice(1).join("."), e, s, i));return l.rsStore(o) && (void 0 !== s && void 0 === i ? o.setState(s) : void 0 !== s && (o.state = s), void 0 !== i && o.push(i)), this._watchStore(r.storeId), this._._scope[r.storeId];
        }
      } }, { key: "_watchStore", value: function value(t, e, s) {
        var i = this;return this._._listening[t] || l.fn(this._._scope[t]) || (!this._._scope[t]._autoDestroy && this._._scope[t].retain("scoped"), !this._._scope[t].isStable() && this.wait(t), this._._scope[t].on(this._._listening[t] = { destroy: function destroy(e) {
            delete i._._listening[t], i._._scope[t] = i._._scope[t].constructor;
          }, update: function update(t) {
            return i.propag();
          }, stable: function stable(e) {
            return i.release(t);
          }, unstable: function unstable(e) {
            return i.wait(t);
          } })), !0;
      } }, { key: "mixin", value: function value(t) {
        var e = this,
            s = this.parent,
            i = void 0;this._._mixed.push(t), t.retain("mixedTo"), t._stable || this.wait(t._id), this._._mixedList.push(i = { stable: function stable(s) {
            return e.release(t._id);
          }, unstable: function unstable(s) {
            return e.wait(t._id);
          }, update: function update(t) {
            return e._propag();
          } }), this.actions = {}, this.stores = {}, this.state = {}, this.data = {}, t.on(i), b(this, "actions", s), b(this, "stores", s), b(this, "state", s), b(this, "data", s), this.relink(this._._scope, this, !1, !0), this._._mixed.forEach(function (t) {
          b(e, "actions"), b(e, "stores"), b(e, "state"), b(e, "data"), t.relink(t._._scope, e, !0, !0);
        });
      } }, { key: "register", value: function value(t) {
        var e = this,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};this.relink(t, this, !1, !1), Object.keys(t).forEach(function (r) {
          "$parent" != r && (t[r].singleton || l.fn(t[r]) && (s[r] || i[r]) ? e._mount(r, void 0, s[r], i[r]) : s[r] || i[r] ? i[r] ? (s[r] && (e.stores[r].state = s[r]), e.stores[r].push(i[r])) : s[r] && e.stores[r].setState(s[r]) : e._watchStore(r));
        });
      } }, { key: "relink", value: function value(t) {
        var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
            i = this,
            r = arguments[2],
            n = arguments[3],
            o = s._.stores.prototype;Object.keys(t).forEach(function (a) {
          if (!(!n && s._._scope[a] === t[a] || s._._scope[a] && s._._scope[a].constructor === t[a])) {
            if (!n && s._._scope[a]) return r || l.fn(s._._scope[a]) || (s._._scope[a].__proto__ = t[a].prototype), void (!r && l.fn(s._._scope[a]) && (s._._scope[a] = t[a]));if (n || r || (i._._scope[a] = t[a]), Object.defineProperty(o, a, { enumerable: !0, configurable: !0, get: function get() {
                return i._._scope[a];
              } }), "$parent" != a) {
              Object.defineProperty(s._.state.prototype, a, { enumerable: !0, configurable: !0, get: function get() {
                  return i._._scope[a] && i._._scope[a].state;
                }, set: function set(t) {
                  return i._mount(a, void 0, t);
                } }), Object.defineProperty(s._.data.prototype, a, { enumerable: !0, configurable: !0, get: function get() {
                  return i._._scope[a] && i._._scope[a].data;
                }, set: function set(t) {
                  return i._mount(a, void 0, void 0, t);
                } });var h = t[a] instanceof e.Store ? t[a].constructor.actions : t[a].actions,
                  u = s._.actions.prototype;l.rsScope(i._._scope[a].prototype) && i._mount(a), l.rsScope(i._._scope[a]) && (u[a] = i._._scope[a].actions), (l.rsStore(i._._scope[a]) || l.rsStore(i._._scope[a].prototype)) && h && Object.keys(h).forEach(function (t) {
                u.hasOwnProperty(t) ? u[t].__targetStores++ : (u[t] = i.dispatch.bind(i, t), u[t].__targetStores = 1);
              });
            }
          }
        });
      } }, { key: "bind", value: function value(t, e, s) {
        var i = this,
            n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            o = void 0,
            a = void 0,
            h = void 0;if (e && !l.array(e) && (e = [e]), s !== !1 && s !== !0 || (n = s, s = null), h = e.map(function (t) {
          return l.string(t) ? t : t.name;
        }).map(function (t) {
          return i.parseRef(t);
        }), this._.followers.push([t, e, s || void 0, o = h.reduce(function (t, e) {
          return t[e.storeId] = t[e.storeId] || { rev: 0, refs: [] }, t[e.storeId].refs.push(e), t;
        }, {})]), this.mount(e), this.retainStores(Object.keys(o), "listeners"), n && this._stable) {
          if (a = this.getUpdates(o), !a) return;"function" != typeof t ? s ? t.setState(r({}, s, a)) : t.setState(a) : t(a);
        }return this;
      } }, { key: "unBind", value: function value(t, e, s) {
        for (var i = this._.followers, r = i && i.length; i && r--;) {
          if (i[r][0] === t && "" + i[r][1] == "" + e && i[r][2] == s) return this.disposeStores(Object.keys(i[r][3]), "listeners"), i.splice(r, 1);
        }
      } }, { key: "map", value: function value(t, e) {
        var s = this,
            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            r = this.constructor.Store;e = l.array(e) ? e : [e];var n = e.map(this.parseRef);if (this.mount(e), i && t instanceof r) r.map(t, e, this, this, !1);else if (i) {
          this.bind(t, e, void 0, !1);var o = void 0,
              a = t.isReactComponent ? "componentWillUnmount" : "destroy";t.hasOwnProperty(a) && (o = t[a]), t[a] = function () {
            return delete t[a], o && (t[a] = o), s.unBind(t, e), t[a] && t[a].apply(t, arguments);
          };
        }return n.reduce(function (t, e) {
          return p(t, e.alias || e.path, s.retrieve(e.path)), t;
        }, {});
      } }, { key: "retrieve", value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";return t = l.string(t) ? t.split(".") : t, t && this.stores[t[0]] && this.stores[t[0]].retrieve(t.slice(1));
      } }, { key: "retrieveStore", value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";return t = l.string(t) ? t.split(".") : t, t && t.length && (1 != t.length && this.stores[t[0]].retrieveStore ? this.stores[t[0]].retrieveStore(t.slice(1)) : 1 == t.length && this.stores[t[0]]);
      } }, { key: "getStoresRevs", value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments[1],
            s = this._._scope;return t || (t = {}), Object.keys(s).forEach(function (e) {
          "$parent" != e && (l.fn(s[e]) ? t.hasOwnProperty(e) || (t[e] = !1) : t[e] = s[e]._rev);
        }), e || (this._._mixed.reduce(function (e, s) {
          return s.getStoresRevs(t), t;
        }, t), this.parent && this.parent.getStoresRevs(t)), t;
      } }, { key: "getUpdates", value: function value(t, e, s) {
        var i = this,
            r = this._._scope;return e = e || {}, Object.keys(r).forEach(function (n) {
          "$parent" != n && (e.hasOwnProperty(n) || l.fn(r[n]) || t && (!t.hasOwnProperty(n) || void 0 !== t[n]) && (!t.hasOwnProperty(n) || r[n]._rev <= t[n].rev) || (s = !0, e[n] = i.data[n], t && t.hasOwnProperty(n) ? (t[n].rev = r[n]._rev, t[n].refs.forEach(function (t) {
            e[t.alias] = i.retrieve(t.path);
          })) : e[n] = i.data[n]));
        }), s = this._._mixed.reduce(function (s, i) {
          return i.getUpdates(t, e, s) || s;
        }, s), s = this.parent && this.parent.getUpdates(t, e, s) || s, s && e;
      } }, { key: "_getAllChilds", value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];return t.push.apply(t, i(this._.childScopes)), this._.childScopes.forEach(function (e) {
          e._getAllChilds(t);
        }), t;
      } }, { key: "serialize", value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = this._._scope,
            i = t.alias,
            r = t.withChilds,
            n = void 0 === r || r,
            o = t.withParents,
            a = t.withMixed,
            h = void 0 === a || a,
            u = t.norefs;return d(e, this._id) ? e : (f(e, this._id, {}), Object.keys(s).forEach(function (i) {
          "$parent" == i || l.fn(s[i]) || s[i].serialize(t, e);
        }), o && this.parent && this.parent.serialize({ withChild: !1, withParents: !0, withMixed: h, norefs: u }, e), n && this._.childScopes.forEach(function (t) {
          !t._.isLocalId && t.serialize({ withChild: !0, withParents: !1, withMixed: h, norefs: u }, e);
        }), h && this._._mixed.forEach(function (t) {
          !t._.isLocalId && t.serialize({ withChild: !1, withParents: !1, withMixed: h, norefs: u }, e);
        }), i && (e = Object.keys(e).reduce(function (t, s) {
          return t[s.startsWith(i) ? i + s.substr(i.length) : s] = e[s], t;
        }, {})), e);
      } }, { key: "restore", value: function value(t) {
        var e = this,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.bool(s) && s,
            r = this._._scope,
            n = void 0;t = t && d(t, this._id) || this.takeSnapshotByKey(this._id), t && (this._.snapshot = t, n = t["/"], n && Object.keys(n).forEach(function (t) {
          "$parent" != t && r[t] && (i && !l.fn(r[t]) && r[t].destroy(), e._mount(t));
        }), this._._mixed.forEach(function (t) {
          !t._.isLocalId && t.restore(void 0, i);
        }), this._.childScopes.forEach(function (t) {
          !t._.isLocalId && t.restore(void 0, i);
        }));
      } }, { key: "getSnapshotByKey", value: function value(t, e) {
        if (this._.snapshot && t.startsWith(this._id)) {
          var s = d(this._.snapshot, t.substr(this._id.length));return s;
        }return !e && this.parent && this.parent.getSnapshotByKey(t) || this.stores.$parent && this.stores.$parent.getSnapshotByKey(t);
      } }, { key: "getSnapshotByKeyExt", value: function value(t, e, s) {
        if (t) {
          var i = d(t, e);return i;
        }
      } }, { key: "takeSnapshotByKey", value: function value(t, e) {
        if (this._.snapshot && t.startsWith(this._id)) {
          var s = d(this._.snapshot, t.substr(this._id.length));return s;
        }return !e && this.parent && this.parent.takeSnapshotByKey(t) || this.stores.$parent && this.stores.$parent.takeSnapshotByKey(t);
      } }, { key: "deleteSnapshotByKey", value: function value(t, e) {
        if (this._.snapshot && t.startsWith(this._id)) {
          var s = d(this._.snapshot, t.substr(this._id.length).replace(/^(.*[\>|\/])[^\>|\/]+$/gi, "$1"));s && delete s[t.replace(/^.*[\>|\/]([^\>|\/]+)$/gi, "$1")];
        }return !e && this.parent && this.parent.deleteSnapshotByKey(t) || this.stores.$parent && this.stores.$parent.deleteSnapshotByKey(t);
      } }, { key: "setState", value: function value(t) {
        var e = this;Object.keys(t).forEach(function (s) {
          return e.state[s] = t[s];
        });
      } }, { key: "parseRef", value: function value(t) {
        "string" != typeof t && (this.register(r({}, t.name, t.store)), t = t.name);var e = t.split(":");return e[0] = e[0].split("."), { storeId: e[0][0], path: e[0], alias: e[1] || e[0][e[0].length - 1], ref: t };
      } }, { key: "dispatch", value: function value(t) {
        for (var e, s = this, i = arguments.length, r = Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) {
          r[n - 1] = arguments[n];
        }if (!this.dead) {
          var o = this._._boundedActions;if (Object.keys(this._._scope).forEach(function (e) {
            var i;"$parent" != e && (l.fn(s._._scope[e]) || (i = s._._scope[e]).trigger.apply(i, [t].concat(r)));
          }), !o || !o.test(t)) return this._._mixed.forEach(function (e) {
            return e.dispatch.apply(e, [t].concat(r));
          }), this.parent && (e = this.parent).dispatch.apply(e, [t].concat(r)), this;
        }
      } }, { key: "trigger", value: function value() {
        this.dispatch.apply(this, arguments);
      } }, { key: "then", value: function value(t) {
        var e = this;return this._stable ? t(this.data) : void this.once("stable", function (s) {
          return t(e.data);
        });
      } }, { key: "retainStores", value: function value() {
        var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            s = arguments[1];e.forEach(function (e) {
          return t.stores[e] && t.stores[e].retain && t.stores[e].retain(s);
        });
      } }, { key: "disposeStores", value: function value() {
        var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            s = arguments[1];e.forEach(function (e) {
          return t.stores[e] && t.stores[e].dispose && t.stores[e].dispose(s);
        });
      } }, { key: "wait", value: function value(t) {
        this._stable && !this.__locks.all && this.emit("unstable", this), this._stable = !1, this.__locks.all++, t && (this.__locks[t] = this.__locks[t] || 0, this.__locks[t]++);
      } }, { key: "release", value: function value(t) {
        var e = this;t && (0 == this.__locks[t], this.__locks[t] = this.__locks[t] || 0, this.__locks[t]--), !t && 0 == this.__locks.all, this.__locks.all--, this.__locks.all || (this._.stabilizerTM && clearTimeout(this._.stabilizerTM), this._.stabilizerTM = setTimeout(function (t) {
          e._.stabilizerTM = null, e.__locks.all || (e._.propagTM && clearTimeout(e._.propagTM), e._rev++, e._stable = !0, e.emit("stable", e), !e.dead && e._propag());
        }));
      } }, { key: "propag", value: function value() {
        var t = this;this._.propagTM && clearTimeout(this._.propagTM), this._.propagTM = setTimeout(function (e) {
          t._.propagTM = null, t._propag();
        }, 2);
      } }, { key: "_propag", value: function value() {
        var t = this;this._.followers.length && this._.followers.forEach(function (e) {
          var s = e[0],
              n = (e[1], e[2]),
              o = e[3],
              a = (e[3], t.getUpdates(o));a && ("function" != typeof s ? n ? s.setState(r({}, n, a)) : s.setState(a) : s(a, o && [].concat(i(o)) || "no revs"));
        }), this.emit("update", this.getUpdates());
      } }, { key: "isStable", value: function value() {
        return this._stable;
      } }, { key: "_addChild", value: function value(t) {
        var e = this;this._.childScopes.push(t), this._.seenChilds++;var s = { stable: function stable(t) {
            e._.unStableChilds--, e._.unStableChilds || e.emit("stableTree", e);
          }, unstable: function unstable(t) {
            e._.unStableChilds++, 1 == e._.unStableChilds && e.emit("unstableTree", e);
          }, stableTree: function stableTree(t) {
            e._.unStableChilds--, e._.unStableChilds || e.emit("stableTree", e);
          }, unstableTree: function unstableTree(t) {
            e._.unStableChilds++, 1 == e._.unStableChilds && e.emit("unstableTree", e);
          }, destroy: function destroy(t) {
            t._.unStableChilds && e._.unStableChilds--, t.isStable() || e._.unStableChilds--, e._.unStableChilds || e.emit("stableTree", e);
          } },
            i = this._.unStableChilds;!t.isStable() && this._.unStableChilds++, t._.unStableChilds && this._.unStableChilds++, this._.childScopesList.push(s), !i && this._.unStableChilds && this.emit("unstableTree", this), t.on(s);
      } }, { key: "_rmChild", value: function value(t) {
        var e = this._.childScopes.indexOf(t),
            s = this._.unStableChilds;e != -1 && (this._.childScopes.splice(e, 1), !t.isStable() && this._.unStableChilds--, t._.unStableChilds && this._.unStableChilds--, t.un(this._.childScopesList.splice(e, 1)[0]), s && !this._.unStableChilds && this.emit("stableTree"));
      } }, { key: "retain", value: function value(t) {
        this.__retains.all++, t && (this.__retains[t] = this.__retains[t] || 0, this.__retains[t]++);
      } }, { key: "dispose", value: function value(t) {
        var e = this;if (t) {
          if (!this.__retains[t]) throw new Error("Dispose more than retaining : " + t);this.__retains[t]--;
        }if (!this.__retains.all) throw new Error("Dispose more than retaining !");this.__retains.all--, this.__retains.all || (this._.persistenceTm ? (this._.destroyTM && clearTimeout(this._.destroyTM), this._.destroyTM = setTimeout(function (t) {
          !e.__retains.all && !e.dead && e.destroy();
        }, this._.persistenceTm)) : !this.__retains.all && !this.dead && this.destroy());
      } }, { key: "destroy", value: function value() {
        var t = this,
            e = this._._scope;for (this._.stabilizerTM && clearTimeout(this._.stabilizerTM), this._.propagTM && clearTimeout(this._.propagTM), Object.keys(this._._listening).forEach(function (e) {
          return "$parent" !== e && t._._scope[e].removeListener(t._._listening[e]);
        }); this._._mixedList.length;) {
          this._._mixed[0].removeListener(this._._mixedList.shift()), this._._mixed.shift().dispose("mixedTo");
        }[].concat(i(this._.followers)).map(function (e) {
          return t.unBind.apply(t, i(e));
        });for (var s in e) {
          if (!l.fn(e[s])) {
            if ("$parent" == s) continue;!e[s]._autoDestroy && e[s].dispose("scoped");
          }
        }this._._parentList && (this.parent._rmChild(this), this.parent.removeListener(this._._parentList), this.parent.dispose("isMyParent"), this._._parentList = null), this.dead = !0, this.emit("destroy", this), delete g[this._id];
      } }]), e;
  }(v), h.persistenceTm = 1, h.Store = null, h.scopeRef = function (t) {
    this.path = t;
  }, h.scopes = g, u);l.rsScope = function (t) {
    return t instanceof m;
  }, e.default = m, t.exports = e.default;
}, function (t, e, s) {
  "use strict";
  function i(t) {
    if (Array.isArray(t)) {
      for (var e = 0, s = Array(t.length); e < t.length; e++) {
        s[e] = t[e];
      }return s;
    }return Array.from(t);
  }function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(e, "__esModule", { value: !0 });var n = function () {
    function t(t, e) {
      for (var s = 0; s < e.length; s++) {
        var i = e[s];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (e, s, i) {
      return s && t(e.prototype, s), i && t(e, i), e;
    };
  }(),
      o = s(1),
      a = function () {
    function t() {
      r(this, t), this._events = {};
    }return n(t, [{ key: "on", value: function value(t, e) {
        var s = this;return !o.string(t) && t ? Object.keys(t).forEach(function (e) {
          return s.on(e, t[e]);
        }) : (this._events[t] = this._events[t] || [], void this._events[t].push(e));
      } }, { key: "un", value: function value(t, e) {
        var s = this;if (!o.string(t) && t) return Object.keys(t).forEach(function (e) {
          return s.un(e, t[e]);
        });if (this._events[t]) {
          var i = this._events[t].indexOf(e);this._events[t].splice(i, 1);
        }
      } }, { key: "emit", value: function value(t) {
        if (this._events[t]) {
          for (var e = [].concat(i(this._events[t])), s = arguments.length, r = Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++) {
            r[n - 1] = arguments[n];
          }for (var o = 0; o < e.length; o++) {
            e[o].apply(e, r);
          }
        }
      } }, { key: "addListener", value: function value() {
        this.on.apply(this, arguments);
      } }, { key: "removeListener", value: function value() {
        this.un.apply(this, arguments);
      } }, { key: "removeAllListeners", value: function value() {
        this._events = {};
      } }, { key: "once", value: function value(t, e) {
        var s = this,
            _i = void 0;this.on(t, _i = function i() {
          s.un(t, _i), e.apply(void 0, arguments);
        });
      } }]), t;
  }();e.default = a, t.exports = e.default;
}, function (t, e, s) {
  "use strict";
  function i(t) {
    if (Array.isArray(t)) {
      for (var e = 0, s = Array(t.length); e < t.length; e++) {
        s[e] = t[e];
      }return s;
    }return Array.from(t);
  }function r(t, e, s, n) {
    return h.string(e) && (e = e.split(".")), !!e.length && (1 == e.length ? t[e[0]] = n ? [].concat(i(t[e[0]] || []), [s]) : s : r(t[e[0]] = t[e[0]] || {}, e.slice(1), s, n));
  }function n(t, e, s) {
    return h.string(e) && (e = e.split(".")), e.length ? t[e[0]] && n(t[e[0]], e.slice(1)) : t;
  }function o(t, e, s, i) {
    return h.string(e) && (e = e.split(/(\>|\/)/gi).filter(function (t) {
      return ">" !== t && t;
    })), r(t, e, s);
  }function a(t, e, s) {
    return h.string(e) && (e = e.split(/(\>|\/)/gi).filter(function (t) {
      return ">" !== t && t;
    })), e.length ? t[e[0]] && n(t[e[0]], e.slice(1)) : t;
  }Object.defineProperty(e, "__esModule", { value: !0 }), e.walknSet = r, e.walknGet = n, e.keyWalknSet = o, e.keyWalknGet = a;var h = s(2);
}, function (t, e) {
  t.exports = __webpack_require__(13);
}, function (t, e, s) {
  "use strict";
  function i(t, e, s) {
    return e in t ? Object.defineProperty(t, e, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = s, t;
  }function r(t) {
    if (Array.isArray(t)) {
      for (var e = 0, s = Array(t.length); e < t.length; e++) {
        s[e] = t[e];
      }return s;
    }return Array.from(t);
  }function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
  }function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }Object.defineProperty(e, "__esModule", { value: !0 });var h,
      u,
      c = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var s = arguments[e];for (var i in s) {
        Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
      }
    }return t;
  },
      l = function () {
    function t(t, e) {
      for (var s = 0; s < e.length; s++) {
        var i = e[s];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (e, s, i) {
      return s && t(e.prototype, s), i && t(e, i), e;
    };
  }(),
      _ = function t(e, s, i) {
    null === e && (e = Function.prototype);var r = Object.getOwnPropertyDescriptor(e, s);if (void 0 === r) {
      var n = Object.getPrototypeOf(e);return null === n ? void 0 : t(n, s, i);
    }if ("value" in r) return r.value;var o = r.get;return void 0 !== o ? o.call(i) : void 0;
  },
      p = s(2),
      f = s(3),
      d = s(5),
      v = d.keyWalknSet,
      y = d.keyWalknGet,
      b = s(4),
      g = s(8),
      m = s(6),
      k = Object.getPrototypeOf({}),
      S = (u = h = function (t) {
    function e() {
      var t, s;n(this, e);var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)),
          a = [].concat(Array.prototype.slice.call(arguments)),
          h = i.constructor,
          u = a[0] instanceof f ? a.shift() : h.scope ? f.getScope(h.scope) : p.string(a[0]) ? f.getScope(a.shift()) : h.staticScope,
          c = !a[0] || p.array(a[0]) || p.string(a[0]) ? {} : a.shift(),
          l = p.array(a[0]) ? a.shift() : null,
          _ = c.name || h.name,
          d = c.use || [],
          v = c.apply || null,
          y = h.state || h.initialState || h.defaultState;return i._uid = c._uid || m.generate(), i.__retains = { all: 0 }, i.__locks = { all: 0 }, i._onStabilize = [], i._autoDestroy = !!i._persistenceTm, i._persistenceTm = c.persistenceTm || h.persistenceTm || (c.autoDestroy || h.autoDestroy) && 5, i._cfg = c, c && c.on && i.on(c.on), i.name = _, u.stores ? (i.scopeObj = u, i.scope = u.stores) : (i.scopeObj = new f(u), i.scope = u.stores), i.$scope = i.scopeObj, i.$stores = i.scopeObj.stores, i.$actions = i.scopeObj.actions, i.$dispatch = i.scopeObj.dispatch.bind(i.scopeObj), i._rev = i.constructor._rev || 0, i._revs = {}, i.stores = {}, i._require = [], i._sources = [_], p.array(h.use) ? i._use = [].concat(r(d), r((h.use || []).map(function (t) {
        var e = t.match(/^(\!?)([^\:]*)(?:\:(.*))?$/);if (e[1]) {
          var s = e[2].split(".");i._require.push(e[3] || s[s.length - 1]);
        }return e[2];
      }))) : i._use = [].concat(r(d), r(h.use ? Object.keys(h.use).map(function (t) {
        var e = t.match(/^(\!?)(.*)$/);return e[1] && i._require.push(h.use[t]), e[2] + (h.use[t] === !0 ? "" : ":" + h.use[t]);
      }) : [])), h.require && (t = i._require).push.apply(t, r(h.require)), c.require && (s = i._require).push.apply(s, r(c.require)), i._followers = [], i._changesSW = y || {}, i.state = y && {}, v && (i.apply = v), l ? l.push(i._afterConstructor.bind(i)) : setTimeout(i._afterConstructor.bind(i)), i;
    }return a(e, t), l(e, [{ key: "_afterConstructor", value: function value() {
        var t = this._cfg,
            e = this.constructor,
            s = (this.restore(void 0, !0), this.state),
            i = this.data,
            r = void 0;i ? this.data = i : void 0 !== e.data ? this.data = c({}, e.data) : t.hasOwnProperty("data") && (this.data = t.data), t.hasOwnProperty("state") && void 0 !== t.state && (s = c({}, s, t.state)), void 0 === this.data ? (s || this._use.length) && (this._changesSW = c({}, this._changesSW, s || {}, this.$scope.map(this, this._use)), this.state = {}, this.shouldApply(this._changesSW) && void 0 === this.data && (this.data = this.apply(this.data, this._changesSW, this._changesSW), r = !0, this.state = this._changesSW, this._changesSW = {})) : (r = !0, this.state = c({}, this._changesSW, s || {}, this.$scope.map(this, this._use)), this._changesSW = {}), void 0 === this.data && !r || this.__locks.all ? (this._stable = !1, !(e.managed || this.state || this._use && this._use.length)) : (this._stable = !0, this._rev++), !this._stable && this.emit("unstable", this.state);
      } }, { key: "shouldPropag", value: function value(t) {
        return !0;
      } }, { key: "hasDataChange", value: function value(t) {
        var e,
            s = (this.constructor, this.data);return e = !s && t || s !== t, !e && s && Object.keys(s).forEach(function (i) {
          e = e || (t ? s[i] !== t[i] : s && s[i]);
        }), !e && t && Object.keys(t).forEach(function (i) {
          e = e || (t ? s[i] !== t[i] : s && s[i]);
        }), e;
      } }, { key: "shouldApply", value: function value() {
        var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state,
            s = this.constructor;return !!this.isComplete(e) && (p.array(s.follow) ? s.follow.reduce(function (t, s) {
          return t || e && e[s];
        }, !1) : !s.follow || Object.keys(s.follow).reduce(function (i, r) {
          return i || e && p.fn(s.follow[r]) && s.follow[r].call(t, e[r]) || s.follow[r] && e[r] !== t.state[r];
        }, !1));
      } }, { key: "apply", value: function value(t, e, s) {
        return e = e || this.state, this.refine ? this.refine.apply(this, arguments) : t && t.__proto__ === k && e.__proto__ === k ? c({}, t, e) : e;
      } }, { key: "refine", value: function value(t, e, s) {
        return e = e || this.state, t && t.__proto__ === k && e.__proto__ === k ? c({}, t, e) : e;
      } }, { key: "stabilize", value: function value(t) {
        t && this.once("stable", t), this._stable && this.emit("unstable", this.state, this.data), this._stable = !1, this._stabilizer || (this._stabilizer = g.pushTask(this, "pushState"));
      } }, { key: "retrieve", value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.data;return t = p.string(t) ? t.split(".") : t, s && t && t.length ? t.length == e + 1 ? s[t[e]] : this.retrieve(t, e + 1, s[t[e]]) : s;
      } }, { key: "dispatch", value: function value(t) {
        for (var e, s = arguments.length, i = Array(s > 1 ? s - 1 : 0), r = 1; r < s; r++) {
          i[r - 1] = arguments[r];
        }(e = this.scopeObj).dispatch.apply(e, [t].concat(i));
      } }, { key: "trigger", value: function value(t) {
        var e = this.constructor.actions;if (e && e[t]) {
          for (var s, i = arguments.length, r = Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) {
            r[n - 1] = arguments[n];
          }var o = (s = e[t]).call.apply(s, [this].concat(r));o && this.setState(o);
        }
      } }, { key: "pull", value: function value(t, e, s) {
        var i = this,
            r = this.scopeObj.map(this, t);return e && (this.wait(), t.forEach(function (t) {
          return i.scope[t] && i.wait(i.scope[t]);
        }), this.release()), r;
      } }, { key: "push", value: function value(t, e, s) {
        if (s = e === !0 ? s : e, e = e === !0, !e && !this.hasDataChange(t)) {
          if (s && s(), !this.__locks.all) {
            var i = this._stable;this._stable = !0, !i && this.emit("stable", this.state, this.data), this._stabilizer = null;
          }return !1;
        }this.data = t, this.wait(), this.release(s);
      } }, { key: "pushState", value: function value(t) {
        if (t || this._changesSW || !this.data) {
          var e = this._nextState || c({}, this.state, this._changesSW || {}),
              s = this.apply(this.data, e, this._changesSW);if (this._stabilizer = null, this.state = e, this._changesSW = null, !t && !this.hasDataChange(s)) {
            if (!this.__locks.all) {
              var i = this._stable;this._stable = !0, !i && this.emit("stable", this.state, this.data), this._stabilizer = null;
            }return !1;
          }this.data = s, this.wait(), this.release();
        }
      } }, { key: "setState", value: function value(t, e, s) {
        var i,
            r = this._changesSW = this._changesSW || {};for (var n in t) {
          (!this.state || r.hasOwnProperty(n) && t[n] !== r[n] || t.hasOwnProperty(n) && (t[n] !== this.state[n] || this.state[n] && t[n] && t[n]._rev != this._revs[n])) && (i = !0, this._revs[n] = t[n] && t[n]._rev || !0, r[n] = t[n]);
        }if (this._nextState = c({}, this.state, r), this.shouldApply(this._nextState)) return s ? (this.pushState(), e && e()) : i ? this.stabilize(e) : e && e(), this;
      } }, { key: "setStateSync", value: function value(t) {
        var e,
            s = this._changesSW = this._changesSW || {};for (var i in t) {
          (!this.state || t.hasOwnProperty(i) && (t[i] != this.state[i] || this.state[i] && t[i] && t[i]._rev != this._revs[i])) && (e = !0, this._revs[i] = t[i] && t[i]._rev || !0, s[i] = t[i]);
        }return this.shouldApply(c({}, this.state || {}, s)) && this.pushState(), this.data;
      } }, { key: "as", value: function value(t) {
        return { store: this, name: t };
      } }, { key: "on", value: function value(t) {
        var s = this;!p.string(t) && t ? Object.keys(t).forEach(function (i) {
          return _(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "on", s).call(s, i, t[i]);
        }) : _(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "on", this).apply(this, arguments);
      } }, { key: "removeListener", value: function value(t) {
        var s = this;!p.string(t) && t ? Object.keys(t).forEach(function (i) {
          return _(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeListener", s).call(s, i, t[i]);
        }) : _(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeListener", this).apply(this, arguments);
      } }, { key: "isComplete", value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state;return this.constructor, !this._require || !this._require.length || t && this._require.reduce(function (e, s) {
          return e && t[s];
        }, !0);
      } }, { key: "isStable", value: function value() {
        return this._stable;
      } }, { key: "serialize", value: function value() {
        var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = !e.norefs && p.array(this._use) && this._use.reduce(function (e, s) {
          var i = void 0,
              r = void 0,
              n = void 0,
              o = void 0;return s.store && s.name ? (r = i = s.name, o = t.scopeObj.stores[i]) : p.fn(s) ? (i = r = s.name || s.defaultName, o = t.scopeObj.stores[i]) : (s = s.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/), i = s[1], n = s[2] && s[2].substr(1), r = s[3] || n && n.match(/([^\.]*)$/)[0] || s[1], o = t.scopeObj.retrieveStore(n)), o && !o.scopeObj._.isLocalId && (e[r] = o.scopeObj._id + "/" + i), e;
        }, {}) || {};return v(s, this.scopeObj._id + "/" + this.name, { state: this.state && (e.norefs ? c({}, this.state) : Object.keys(this.state).reduce(function (e, s) {
            return !i[s] && (e[s] = t.state[s]), e;
          }, {})), data: (this.data && this.data.__proto__ === k ? this.data : (p.bool(this.data) || p.number(this.data) || p.string(this.data)) && this.data) || void 0, refs: i }), s;
      } }, { key: "restore", value: function (t) {
        function e(e, s) {
          return t.apply(this, arguments);
        }return e.toString = function () {
          return t.toString();
        }, e;
      }(function (t, e) {
        var s = this;if (t = t && y(t, this.scopeObj._id + "/" + this.name) || this.$scope.takeSnapshotByKey(this.scopeObj._id + "/" + this.name), t && t) {
          this.isStable() || e || this.then(function () {
            return restore(t);
          });var i = void 0;this.state = c({}, t.state), Object.keys(t.refs).forEach(function (e) {
            (i = s.$scope.getSnapshotByKey(t.refs[e])) && (s.state[e] = i.data);
          }), this.data = t.data;
        }
      }) }, { key: "unBind", value: function value(t, e, s) {
        for (var i = this._followers, r = i && i.length; i && r--;) {
          if (i[r][0] === t && i[r][1] === e && i[r][2] === s) return i.splice(r, 1);
        }
      } }, { key: "bind", value: function value(t, e) {
        var s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            r = arguments[3];if (this._followers.push([t, e, r]), s && this.data && this._stable) {
          var n = r ? this.retrieve(r) : this.data;"function" != typeof t ? e ? t.setState(i({}, e, n)) : t.setState(n) : t(n);
        }
      } }, { key: "then", value: function value(t) {
        var e = this;return this._stable ? t(this.data) : void this.once("stable", function (s) {
          return t(e.data);
        });
      } }, { key: "wait", value: function value(t) {
        if ("number" == typeof t) return this.__locks.all += t;
        if (p.array(t)) return t.map(this.wait.bind(this));this._stable && this.emit("unstable", this.state, this.data), this._stable = !1, this.__locks.all++;var e = p.string(t) ? t : null;return e && (this.__locks[e] = this.__locks[e] || 0, this.__locks[e]++), t && p.fn(t.then) && t.then(this.release.bind(this, null)), this;
      } }, { key: "release", value: function value(t, e) {
        var s = (this.constructor, this),
            r = this._stable;if (p.fn(t) && (e = t, t = null), t && (0 == this.__locks[t], this.__locks[t] = this.__locks[t] || 0, this.__locks[t]--), !t && 0 == this.__locks.all, ! --this.__locks.all && this.isComplete()) {
          var n = this.shouldPropag(this.data);this._stable = !0, n && this._rev++, n && this._followers.length && this._followers.forEach(function (t) {
            var e = t[2] ? s.retrieve(t[2]) : s.data;"function" == typeof t[0] ? t[0](e) : t[0].setState(t[1] ? i({}, t[1], e) : e);
          }), !r && this.emit("stable", this.data), n && this.emit("update", this.data), e && e();
        } else e && this.then(e);return this;
      } }, { key: "propag", value: function value(t) {
        this.emit("update", t);
      } }, { key: "retain", value: function value(t) {
        this.__retains.all++, t && (this.__retains[t] = this.__retains[t] || 0, this.__retains[t]++);
      } }, { key: "dispose", value: function value(t) {
        var e = this;if (t) {
          if (!this.__retains[t]) throw new Error("Dispose more than retaining : " + t);this.__retains[t]--;
        }if (0 == this.__retains.all) throw new Error("Dispose more than retaining !");this.__retains.all--, this.__retains.all || (this._persistenceTm ? (this._destroyTM && clearTimeout(this._destroyTM), this._destroyTM = setTimeout(function (t) {
          e._destroyTM = null, !e.__retains.all && !e.dead && e.destroy();
        }, this._persistenceTm)) : !this.__retains.all && !this.dead && this.destroy());
      } }, { key: "destroy", value: function value() {
        this.emit("destroy", this), this._stabilizer && clearTimeout(this._stabilizer), this._followers.length && this._followers.forEach(function (t) {
          "function" != typeof t[0] && t[0].stores && delete t[0].stores[t[1]];
        }), this._followers.length = 0, this.constructor._rev = this.rev, this.dead = !0, this._revs = this.data = this.state = this.scope = null, this.removeAllListeners();
      } }, { key: "nextState", get: function get() {
        return this._changesSW && c({}, this.state, this._changesSW) || this.state;
      } }, { key: "contextObj", get: function get() {
        return this.scopeObj;
      } }, { key: "context", get: function get() {
        return this.scope;
      } }, { key: "datas", get: function get() {
        return this.data;
      }, set: function set(t) {
        this.data = t;
      } }]), e;
  }(b), h.staticScope = new f({}, { id: "static" }), h.state = void 0, h.persistenceTm = !1, u);S.as = function (t) {
    return { store: this, name: t };
  }, S.map = function (t, e, s, i) {
    var n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = t._revs || {},
        a = t.stores || (t.stores = {}),
        h = {};e = p.array(e) ? [].concat(r(e)) : [e], s = s || S.staticScope, e = e.filter(function (e) {
      var i;if (!e) return !1;var u = void 0,
          c = void 0,
          l = void 0,
          _ = void 0,
          f = void 0;if (e.store && e.name ? (c = u = e.name, _ = e.store) : p.fn(e) ? (u = c = e.name || e.defaultName, _ = e) : (f = e.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/), u = f[1], l = f[2] && f[2].substr(1), _ = s.stores[f[1]], c = f[3] || l && l.match(/([^\.]*)$/)[0] || f[1]), p.rsScope(_.prototype) && s._mount(u), p.rsScope(_)) _ = s._mount(e);else if (o[u]) return !1;return !!_ && (p.fn(_) ? (s._mount(u), s.stores[u].bind(t, c, n, l)) : _.bind(t, c, n, l), s.stores[u]._sources && (i = t._sources).push.apply(i, r(s.stores[u]._sources)), o[c] = o[c] || !0, !a[u] && (a[u] = s.stores[u]), s.stores[u].hasOwnProperty("data") && (h[u] = s.data[u]), !0);
    });var u,
        c = t.isReactComponent ? "componentWillUnmount" : "destroy";return t.hasOwnProperty(c) && (u = t[c]), t[c] = function () {
      return delete t[c], u && (t[c] = u), e.map(function (e) {
        var i = void 0,
            r = void 0,
            n = void 0,
            o = void 0;e.store && e.name ? (r = i = e.name, o = e.store) : p.fn(e) ? (i = r = e.name || e.defaultName, o = s.stores[i]) : (e = e.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/), i = e[1], n = e[2] && e[2].substr(1), o = s.stores[e[1]], r = e[3] || n && n.match(/([^\.]*)$/)[0] || e[1]), o && !p.fn(o) && o.unBind(t, r, n);
      }), t[c] && t[c].apply(t, arguments);
    }, h;
  }, p.rsStore = function (t) {
    return t instanceof S;
  }, e.default = S, t.exports = e.default;
}, function (t, e, s) {
  "use strict";
  function i(t) {
    return t && t.__esModule ? t : { default: t };
  }function r() {
    _ || n();
  }function n() {
    for (Date.now(), _ = !0, p.enable(); c;) {
      for (; !a[h] || !a[h].length;) {
        h++;
      }c--, l = a[h].shift(), l[0][l[1]].apply(l[0], l[2]);
    }l = void 0, p.disable(), _ = !1, c && setTimeout(r);
  }Object.defineProperty(e, "__esModule", { value: !0 });var o = s(1),
      a = (i(o), []),
      h = 0,
      u = 0,
      c = 0,
      l = void 0,
      _ = void 0,
      p = { lastError: null, dispatch: function dispatch(t) {
      p.disable(), l && l[0].handleError && l[0].handleError(t, l), _ = !1, l = null, r();
    }, enable: "undefined" != typeof window ? function () {
      window.addEventListener("error", p.dispatch);
    } : function () {
      process.on("uncaughtException", p.dispatch);
    }, disable: "undefined" != typeof window ? function () {
      window.removeEventListener("error", p.dispatch);
    } : function () {
      process.removeListener("uncaughtException", p.dispatch);
    } };e.default = { pushTask: function pushTask(t, e, s) {
      var i = t._sources && t._sources.length || 1,
          n = a[i] = a[i] || [];return u = Math.max(u, i), h = Math.min(h, i), c++, n.push([t, e, s]), setTimeout(r, 0), n.length;
    } }, t.exports = e.default;
}, function (t, e, s) {
  "use strict";
  function i(t) {
    return t && t.__esModule ? t : { default: t };
  }function r(t) {
    if (Array.isArray(t)) {
      for (var e = 0, s = Array(t.length); e < t.length; e++) {
        s[e] = t[e];
      }return s;
    }return Array.from(t);
  }function n(t, e) {
    var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];_.push({ test: t, member: s, stateScope: i, handle: e });
  }function o(t, e, s) {
    for (var i = 0; i < _.length; i++) {
      if ((void 0 === e || e == _[i].member) && s == _[i].stateScope && _[i].test(t)) return !0;
    }return !1;
  }function a(t, e, s, i) {
    for (var n = 0; n < _.length; n++) {
      var o;if (s == _[n].member && i == _[n].stateScope && _[n].test(t)) return (o = _[n]).handle.apply(o, [t].concat(r(e)));
    }return !1;
  }function h() {
    for (var t = arguments.length, e = Array(t), s = 0; s < t; s++) {
      e[s] = arguments[s];
    }return e[0] instanceof l && e[2] instanceof l && e[0].hasOwnProperty(e[1]) ? (e[2].value = a(e[0], [], !0, !1), e[0]) : o(e[0], void 0, !1) ? a(e[0], e.slice(1), !1, !1) : function () {
      for (var t = arguments.length, s = Array(t), i = 0; i < t; i++) {
        s[i] = arguments[i];
      }return s[0] instanceof l && s[2] instanceof l && s[0].hasOwnProperty(s[1]) ? (s[2].value = a(s[0], e, !0, !1), s[0]) : h.apply(void 0, [s[0]].concat(e));
    };
  }function u() {
    for (var t = arguments.length, e = Array(t), s = 0; s < t; s++) {
      e[s] = arguments[s];
    }return e[0] instanceof l && e[2] instanceof l && e[0].hasOwnProperty(e[1]) ? (e[2].value = a(e[0], [], !0, !0), e[0]) : o(e[0], void 0, !0) ? a(e[0], e.slice(1), !1, !0) : function () {
      for (var t = arguments.length, s = Array(t), i = 0; i < t; i++) {
        s[i] = arguments[i];
      }return s[0] instanceof l && s[2] instanceof l && s[0].hasOwnProperty(s[1]) ? (s[2].value = a(s[0], e, !0, !0), s[0]) : u.apply(void 0, [s[0]].concat(e));
    };
  }Object.defineProperty(e, "__esModule", { value: !0 }), e.scopeToState = e.reScope = e.addScopableType = void 0;var c = s(1),
      l = (i(c), {}.constructor),
      _ = [];e.addScopableType = n, e.reScope = h, e.scopeToState = u;
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25), __webpack_require__(0)))

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)(false);
// imports


// module
exports.push([module.i, ".newBtn {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  display: inline-block; }\n\n.saveBtn {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  display: inline-block; }\n\n#app {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  #app > div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0px;\n    left: 0; }\n\n.button {\n  background-color: #3bb3e0;\n  padding: 10px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  text-decoration: none;\n  color: #fff;\n  border: solid 1px #186f8f;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#2ca0ca), to(#3eb8e5));\n  background-image: -webkit-linear-gradient(bottom, #2ca0ca 0%, #3eb8e5 100%);\n  background-image: -o-linear-gradient(bottom, #2ca0ca 0%, #3eb8e5 100%);\n  background-image: linear-gradient(bottom, #2ca0ca 0%, #3eb8e5 100%);\n  -webkit-box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;\n          box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;\n  border-radius: 5px; }\n  .button:active {\n    padding-bottom: 9px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 11px;\n    background-image: -webkit-gradient(linear, left bottom, left top, from(#3eb8e5), to(#2ca0ca));\n    background-image: -webkit-linear-gradient(bottom, #3eb8e5 0%, #2ca0ca 100%);\n    background-image: -o-linear-gradient(bottom, #3eb8e5 0%, #2ca0ca 100%);\n    background-image: linear-gradient(bottom, #3eb8e5 0%, #2ca0ca 100%); }\n\n.postit {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  line-height: 1;\n  text-align: center;\n  margin: -10px;\n  top: 0px;\n  left: 0;\n  border: 1px solid #E8E8E8;\n  border-top: 1px solid #fdfd86;\n  font-family: 'Reenie Beanie';\n  font-size: 22px;\n  border-bottom-right-radius: 60px 5px;\n  display: inline-block;\n  background: -webkit-linear-gradient(315deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  background: -o-linear-gradient(315deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* W3C */ }\n  .postit .text {\n    padding-top: 40px;\n    overflow: auto;\n    position: absolute;\n    width: 100%;\n    top: 40px;\n    bottom: 0; }\n    .postit .text .edit {\n      position: absolute;\n      bottom: 5px;\n      left: 5px; }\n    .postit .text .delete {\n      position: absolute;\n      bottom: 5px;\n      right: 5px; }\n  .postit .editor {\n    position: absolute;\n    bottom: 30px;\n    right: 10px;\n    top: 30px;\n    left: 10px; }\n    .postit .editor textarea {\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 100%; }\n    .postit .editor button {\n      position: absolute;\n      bottom: -25px;\n      left: 0px;\n      width: 100%; }\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(3);
var ReactPropTypesSecret = __webpack_require__(12);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(3);
var warning = __webpack_require__(6);
var assign = __webpack_require__(4);

var ReactPropTypesSecret = __webpack_require__(12);
var checkPropTypes = __webpack_require__(8);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(42)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(41)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\re-resizable\\lib\\index.js'");

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\react-draggable\\dist\\react-draggable.js'");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.2.0
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var _assign = __webpack_require__(4);
var emptyObject = __webpack_require__(5);
var invariant = __webpack_require__(3);
var warning = __webpack_require__(6);
var emptyFunction = __webpack_require__(2);
var checkPropTypes = __webpack_require__(8);

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.2.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    var componentName = constructor && (constructor.displayName || constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function PureComponent(props, context, updater) {
  // Duplicated from Component.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

function AsyncComponent(props, context, updater) {
  // Duplicated from Component.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

var asyncComponentPrototype = AsyncComponent.prototype = new ComponentDummy();
asyncComponentPrototype.constructor = AsyncComponent;
// Avoid an extra prototype jump for these methods.
_assign(asyncComponentPrototype, Component.prototype);
asyncComponentPrototype.unstable_isAsyncReactComponent = true;
asyncComponentPrototype.render = function () {
  return this.props.children;
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_CALL_TYPE:
          case REACT_RETURN_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum());
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'string') {
    return type;
  }
  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

{
  var currentlyValidatingElement = null;

  var propTypesMisspellWarningShown = false;

  var getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (element.type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  var getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };

  var VALID_FRAGMENT_PROPS = new Map([['children', true], ['key', true]]);
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(fragment.props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (!VALID_FRAGMENT_PROPS.has(key)) {
        warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = typeof type === 'string' || typeof type === 'function' || typeof type === 'symbol' || typeof type === 'number';
  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (typeof type === 'symbol' && type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  // Legacy hook TODO: Warn if this is accessed
  validatedFactory.type = type;

  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  Component: Component,
  PureComponent: PureComponent,
  unstable_AsyncComponent: AsyncComponent,

  Fragment: REACT_FRAGMENT_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3['default'] ? React$3['default'] : React$3;

module.exports = react;
  })();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.2.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(4),n=__webpack_require__(5),p=__webpack_require__(2),q="function"===typeof Symbol&&Symbol["for"],r=q?Symbol["for"]("react.element"):60103,t=q?Symbol["for"]("react.call"):60104,u=q?Symbol["for"]("react.return"):60105,v=q?Symbol["for"]("react.portal"):60106,w=q?Symbol["for"]("react.fragment"):60107,x="function"===typeof Symbol&&Symbol.iterator;
function y(a){for(var b=arguments.length-1,e="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)e+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);b=Error(e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function A(a,b,e){this.props=a;this.context=b;this.refs=n;this.updater=e||z}A.prototype.isReactComponent={};A.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?y("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};A.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function B(a,b,e){this.props=a;this.context=b;this.refs=n;this.updater=e||z}function C(){}C.prototype=A.prototype;var D=B.prototype=new C;D.constructor=B;m(D,A.prototype);D.isPureReactComponent=!0;function E(a,b,e){this.props=a;this.context=b;this.refs=n;this.updater=e||z}var F=E.prototype=new C;F.constructor=E;m(F,A.prototype);F.unstable_isAsyncReactComponent=!0;F.render=function(){return this.props.children};var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,e){var c,d={},g=null,k=null;if(null!=b)for(c in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)H.call(b,c)&&!I.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var h=Array(f),l=0;l<f;l++)h[l]=arguments[l+2];d.children=h}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:r,type:a,key:g,ref:k,props:d,_owner:G.current}}function K(a){return"object"===typeof a&&null!==a&&a.$$typeof===r}
function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var L=/\/+/g,M=[];function N(a,b,e,c){if(M.length){var d=M.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function O(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>M.length&&M.push(a)}
function P(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case r:case t:case u:case v:g=!0}}if(g)return e(c,a,""===b?"."+Q(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+Q(d,k);g+=P(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=x&&a[x]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=
f.call(a),k=0;!(d=a.next()).done;)d=d.value,f=b+Q(d,k++),g+=P(d,f,e,c);else"object"===d&&(e=""+a,y("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function R(a,b){a.func.call(a.context,b,a.count++)}
function S(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?T(a,c,e,p.thatReturnsArgument):null!=a&&(K(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(L,"$\x26/")+"/")+e,a={$$typeof:r,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function T(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(L,"$\x26/")+"/");b=N(b,g,c,d);null==a||P(a,"",S,b);O(b)}
var U={Children:{map:function(a,b,e){if(null==a)return a;var c=[];T(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=N(null,null,b,e);null==a||P(a,"",R,b);O(b)},count:function(a){return null==a?0:P(a,"",p.thatReturnsNull,null)},toArray:function(a){var b=[];T(a,b,null,p.thatReturnsArgument);return b},only:function(a){K(a)?void 0:y("143");return a}},Component:A,PureComponent:B,unstable_AsyncComponent:E,Fragment:w,createElement:J,cloneElement:function(a,b,e){var c=m({},a.props),
d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)H.call(b,h)&&!I.hasOwnProperty(h)&&(c[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)c.children=e;else if(1<h){f=Array(h);for(var l=0;l<h;l++)f[l]=arguments[l+2];c.children=f}return{$$typeof:r,type:a.type,key:d,ref:g,props:c,_owner:k}},createFactory:function(a){var b=J.bind(null,a);b.type=a;return b},
isValidElement:K,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:G,assign:m}},V=Object.freeze({default:U}),W=V&&U||V;module.exports=W["default"]?W["default"]:W;


/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(60);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 60 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\superagent\\lib\\client.js'");

/***/ })
/******/ ]);
//# sourceMappingURL=App.js.map