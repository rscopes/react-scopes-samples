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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/*! no static exports found */
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

/***/ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/App.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/App.scss ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".newBtn {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  display: inline-block; }\n\n.saveBtn {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  display: inline-block; }\n\n#app {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  #app > div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0px;\n    left: 0; }\n\n.button {\n  background-color: #3bb3e0;\n  padding: 10px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  text-decoration: none;\n  color: #fff;\n  border: solid 1px #186f8f;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#2ca0ca), to(#3eb8e5));\n  background-image: -webkit-linear-gradient(bottom, #2ca0ca 0%, #3eb8e5 100%);\n  background-image: -o-linear-gradient(bottom, #2ca0ca 0%, #3eb8e5 100%);\n  background-image: linear-gradient(bottom, #2ca0ca 0%, #3eb8e5 100%);\n  -webkit-box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;\n          box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;\n  border-radius: 5px; }\n  .button:active {\n    padding-bottom: 9px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 11px;\n    background-image: -webkit-gradient(linear, left bottom, left top, from(#3eb8e5), to(#2ca0ca));\n    background-image: -webkit-linear-gradient(bottom, #3eb8e5 0%, #2ca0ca 100%);\n    background-image: -o-linear-gradient(bottom, #3eb8e5 0%, #2ca0ca 100%);\n    background-image: linear-gradient(bottom, #3eb8e5 0%, #2ca0ca 100%); }\n\n.postit {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  line-height: 1;\n  text-align: center;\n  margin: -10px;\n  top: 0px;\n  left: 0;\n  border: 1px solid #E8E8E8;\n  border-top: 1px solid #fdfd86;\n  font-family: 'Reenie Beanie';\n  font-size: 22px;\n  border-bottom-right-radius: 60px 5px;\n  display: inline-block;\n  background: -webkit-linear-gradient(315deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  background: -o-linear-gradient(315deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  background: linear-gradient(135deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* W3C */ }\n  .postit .text {\n    padding-top: 40px;\n    overflow: auto;\n    position: absolute;\n    width: 100%;\n    top: 40px;\n    bottom: 0; }\n    .postit .text .edit {\n      position: absolute;\n      bottom: 5px;\n      left: 5px; }\n    .postit .text .delete {\n      position: absolute;\n      bottom: 5px;\n      right: 5px; }\n  .postit .editor {\n    position: absolute;\n    bottom: 30px;\n    right: 10px;\n    top: 30px;\n    left: 10px; }\n    .postit .editor textarea {\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 100%; }\n    .postit .editor button {\n      position: absolute;\n      bottom: -25px;\n      left: 0px;\n      width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\react-dom\\index.js'");

/***/ }),

/***/ "./node_modules/react-dom/server.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dom/server.browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\react-dom\\server.browser.js'");

/***/ }),

/***/ "./node_modules/react-rnd/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-rnd/lib/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\react-rnd\\lib\\index.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\react\\index.js'");

/***/ }),

/***/ "./node_modules/rscopes/index.js":
/*!***************************************!*\
  !*** ./node_modules/rscopes/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\rscopes\\index.js'");

/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\shortid\\index.js'");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\style-loader\\lib\\addStyles.js'");

/***/ }),

/***/ "./node_modules/superagent/lib/client.js":
/*!***********************************************!*\
  !*** ./node_modules/superagent/lib/client.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\n8tz\\rescope\\rescope-samples\\src\\minimal-async-ssr\\node_modules\\superagent\\lib\\client.js'");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _AppScope = __webpack_require__(/*! ./AppScope */ "./src/AppScope.js");

var _AppScope2 = _interopRequireDefault(_AppScope);

var _rscopes = __webpack_require__(/*! rscopes */ "./node_modules/rscopes/index.js");

var _server = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");

__webpack_require__(/*! ./App.scss */ "./src/App.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cookie = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");

var ReactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

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
        //renderToString(
        //    <State.SSRIndex sessionId={ env._id }/>);
        //cScope.then(State => {
        var html = (0, _server.renderToString)(_react2.default.createElement(State.SSRIndex, { sessionId: env._id }));
        cb(null, html);
        console.log(cfg.sessionId, cScope.serialize(), html);
        cScope.destroy();
        //})
    });
}, _temp);


if (typeof window != 'undefined') {
    window.App = App;
}
exports.default = App;
module.exports = exports["default"];

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--5-1!../node_modules/postcss-loader/lib??ref--5-2!../node_modules/sass-loader/lib/loader.js??ref--5-3!./App.scss */ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/AppScope.js":
/*!*************************!*\
  !*** ./src/AppScope.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _dec2, _dec3, _desc, _value, _obj, _init, _desc2, _value2, _obj2, _init2, _init3, _init4, _init5, _desc3, _value3, _obj3, _init6, _init7;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");

var _superagent2 = _interopRequireDefault(_superagent);

var _shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");

var _shortid2 = _interopRequireDefault(_shortid);

var _reactRnd = __webpack_require__(/*! react-rnd */ "./node_modules/react-rnd/lib/index.js");

var _reactRnd2 = _interopRequireDefault(_reactRnd);

var _rscopes = __webpack_require__(/*! rscopes */ "./node_modules/rscopes/index.js");

var _rscopes2 = _interopRequireDefault(_rscopes);

var _server = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");

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

var _rscopes$spells = _rscopes2.default.spells,
    asStateMap = _rscopes$spells.asStateMap,
    asScope = _rscopes$spells.asScope,
    asRenderer = _rscopes$spells.asRenderer,
    asRootRenderer = _rscopes$spells.asRootRenderer;
exports.default = (_dec = asRenderer(["!Home"]), _dec2 = asRenderer(["!AppState.appState", "!AppState.someData", "!PostIt"]), _dec3 = asRenderer((_obj = {
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

}, (_applyDecoratedDescriptor(_obj, "DaSearch", [asStateMap], (_init = Object.getOwnPropertyDescriptor(_obj, "DaSearch"), _init = _init ? _init.value : undefined, {
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
    }, (_applyDecoratedDescriptor(_obj3, "appState", [asStateMap], (_init6 = Object.getOwnPropertyDescriptor(_obj3, "appState"), _init6 = _init6 ? _init6.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
            return _init6;
        }
    }), _obj3), _applyDecoratedDescriptor(_obj3, "someData", [asStateMap], (_init7 = Object.getOwnPropertyDescriptor(_obj3, "someData"), _init7 = _init7 ? _init7.value : undefined, {
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
}, (_applyDecoratedDescriptor(_obj2, "AppState", [asScope], (_init2 = Object.getOwnPropertyDescriptor(_obj2, "AppState"), _init2 = _init2 ? _init2.value : undefined, {
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

/***/ })

/******/ });
//# sourceMappingURL=App.js.map