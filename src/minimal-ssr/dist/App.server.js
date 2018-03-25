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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("safe-buffer");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jsonSafeStringify = __webpack_require__(46)
var crypto = __webpack_require__(9)
var Buffer = __webpack_require__(0).Buffer

var defer = typeof setImmediate === 'undefined'
  ? process.nextTick
  : setImmediate

function paramsHaveRequestBody (params) {
  return (
    params.body ||
    params.requestBodyStream ||
    (params.json && typeof params.json !== 'boolean') ||
    params.multipart
  )
}

function safeStringify (obj, replacer) {
  var ret
  try {
    ret = JSON.stringify(obj, replacer)
  } catch (e) {
    ret = jsonSafeStringify(obj, replacer)
  }
  return ret
}

function md5 (str) {
  return crypto.createHash('md5').update(str).digest('hex')
}

function isReadStream (rs) {
  return rs.readable && rs.path && rs.mode
}

function toBase64 (str) {
  return Buffer.from(str || '', 'utf8').toString('base64')
}

function copy (obj) {
  var o = {}
  Object.keys(obj).forEach(function (i) {
    o[i] = obj[i]
  })
  return o
}

function version () {
  var numbers = process.version.replace('v', '').split('.')
  return {
    major: parseInt(numbers[0], 10),
    minor: parseInt(numbers[1], 10),
    patch: parseInt(numbers[2], 10)
  }
}

exports.paramsHaveRequestBody = paramsHaveRequestBody
exports.safeStringify = safeStringify
exports.md5 = md5
exports.isReadStream = isReadStream
exports.toBase64 = toBase64
exports.copy = copy
exports.version = version
exports.defer = defer


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("caseless");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("extend");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _Scope = __webpack_require__(2);
	
	var _Scope2 = _interopRequireDefault(_Scope);
	
	var _Store = __webpack_require__(6);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	var _scopable = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// will use as external the index in dist
	var $global = typeof window !== 'undefined' ? window : global; /*
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
	
	if ($global.___rescope) {
	    console.warn("ReScope is defined multiple times !! \nCheck you're packaging");
	} else {
	
	    $global.___rescope = _index2.default;
	    _Scope2.default.Store = _Store2.default;
	    _index2.default.Scope = _Scope2.default;
	    _index2.default.Context = _Scope2.default;
	    _index2.default.Store = _Store2.default;
	    _index2.default.reScope = _scopable.reScope;
	    _index2.default.scopeToState = _scopable.scopeToState;
	    _index2.default.reScopeState = _scopable.scopeToState;
	    _index2.default.addScopableType = _scopable.addScopableType;
	    _index2.default.scopeRef = function scopeRef(map, key) {
	        map[key] = new _Scope2.default.scopeRef(map[key]);
	        return map;
	    };
	}
	exports.default = $global.___rescope || _index2.default;
	module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(33);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	var is = __webpack_require__(3),
	    EventEmitter = __webpack_require__(4),
	    shortid = __webpack_require__(5),
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
	        // all active scopes
	
	
	        value: function getScope(scopes) {
	            var skey = is.array(scopes) ? scopes.sort(function (a, b) {
	                if (a.firstname < b.firstname) return -1;
	                if (a.firstname > b.firstname) return 1;
	                return 0;
	            }).join('::') : scopes;
	            return openScopes[skey] = openScopes[skey] || new Scope({}, { id: skey });
	        } // if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
	
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
	
	            var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
	
	            Object.keys(sm).forEach(function (key) {
	                var cpath = path ? path + '.' + key : key;
	                sm[key] instanceof Scope.scopeRef ? _refs.push(sm[key].path + ':' + cpath) : sm[key] && sm[key] instanceof Function ? _refs.push(sm[key]().path + ':' + cpath) : sm[key] && sm[key].prototype instanceof Scope.Store ? _refs.push(sm[key].as(cpath)) : state[cpath] = sm[key];
	                //: this.stateMapToRefList(sm[key], _refs, path + '.' + key)
	            });
	            return _refs;
	        }
	
	        /**
	         * Init a ReScope scope
	         *
	         * @param storesMap {Object} Object with the initial stores definition / instances
	         * @param id {string} @optional id ( if this id exist storesMap will be merge on the 'id' scope)
	         * @param parent
	         * @param state
	         * @param data
	         * @param name
	         * @param defaultMaxListeners
	         * @param persistenceTm {number) if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
	         * @param autoDestroy  {bool} will trigger retain & dispose after start
	         * @returns {Scope}
	         */
	
	    }]);
	
	    function Scope(storesMap) {
	        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	            parent = _ref2.parent,
	            key = _ref2.key,
	            id = _ref2.id,
	            state = _ref2.state,
	            data = _ref2.data,
	            name = _ref2.name,
	            _ref2$incrementId = _ref2.incrementId,
	            incrementId = _ref2$incrementId === undefined ? !!key : _ref2$incrementId,
	            defaultMaxListeners = _ref2.defaultMaxListeners,
	            persistenceTm = _ref2.persistenceTm,
	            autoDestroy = _ref2.autoDestroy,
	            rootEmitter = _ref2.rootEmitter,
	            boundedActions = _ref2.boundedActions;
	
	        _classCallCheck(this, Scope);
	
	        var _this = _possibleConstructorReturn(this, (Scope.__proto__ || Object.getPrototypeOf(Scope)).call(this));
	
	        var _ = {};
	
	        _.maxListeners = defaultMaxListeners || _this.constructor.defaultMaxListeners;
	
	        id = id || key && (parent && parent._id || '') + '::' + key;
	
	        _.isLocalId = !id;
	
	        id = id || "_____" + shortid.generate();
	
	        if (openScopes[id] && !incrementId) {
	            var _ret;
	
	            _this._id = id;
	            openScopes[id].register(storesMap);
	            return _ret = openScopes[id], _possibleConstructorReturn(_this, _ret);
	        } else if (openScopes[id] && incrementId) {
	            var i = -1;
	            while (openScopes[id + '[' + ++i + ']']) {}
	            id = id + '[' + i + ']';
	        }
	
	        _this._id = id;
	        openScopes[id] = _this;
	        _.persistenceTm = persistenceTm || _this.constructor.persistenceTm;
	
	        _this.actions = {};
	        _this.stores = {};
	        _this.state = {};
	        _this.data = {};
	
	        _this.parent = parent;
	        _this._ = _;
	
	        if (parent && parent.dead) throw new Error("Can't use a dead scope as parent !");
	
	        __proto__push(_this, 'actions', parent);
	        __proto__push(_this, 'stores', parent);
	        __proto__push(_this, 'state', parent);
	        __proto__push(_this, 'data', parent);
	
	        _this.sources = [];
	        _.childScopes = [];
	        _.childScopesList = [];
	        _.unStableChilds = 0;
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 1 };
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
	        if (autoDestroy) setTimeout(function (tm) {
	            _this.retain("autoDestroy");
	            _this.dispose("autoDestroy");
	        });
	
	        return _this;
	    }
	
	    /**
	     * @deprecated
	     * @returns {*}
	     */
	
	
	    _createClass(Scope, [{
	        key: 'mount',
	
	
	        /**
	         *
	         * Mount the stores in storesList, in this scope or in its parents or mixed scopes
	         *
	         * @param storesList {string|storeRef} Store name, Array of Store names, or Rescope store ref from Store::as or
	         *     Store:as
	         * @param state
	         * @param data
	         * @returns {Scope}
	         */
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
	            if (typeof id !== 'string') {
	                this.register(_defineProperty({}, id.name, id.store));
	                id = id.name;
	            }
	
	            if (!this._._scope[id]) {
	                var _parent;
	
	                //ask mixed || parent
	                if (this._._mixed.reduce(function (mounted, ctx) {
	                    return mounted || ctx._mount(id, snapshot, state, data);
	                }, false) || !this.parent) return;
	                return (_parent = this.parent)._mount.apply(_parent, arguments);
	            } else {
	                var store = this._._scope[id],
	                    ctx = void 0;
	                if (is.fn(store)) {
	                    this._._scope[id] = new store(this, { snapshot: snapshot, name: id, state: state, data: data });
	                } else if (snapshot) store.restore(snapshot);else {
	                    if (state !== undefined && data === undefined) store.setState(state);else if (state !== undefined) store.state = state;
	
	                    if (data !== undefined) store.push(data);
	                }
	                this._watchStore(id);
	            }
	
	            return this._._scope[id];
	        }
	    }, {
	        key: '_watchStore',
	        value: function _watchStore(id, state, data) {
	            var _this3 = this;
	
	            //if ( !this.__scope[id] ) {//ask mixed || parent
	            //    if ( this.__mixed.reduce(( mounted, ctx ) => (mounted || ctx._watchStore(id, state, data)), false) ||
	            //        !this.parent )
	            //        return;
	            //    return this.parent._watchStore(...arguments);
	            //}
	            if (!this._._listening[id] && !is.fn(this._._scope[id])) {
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
	                    get: function get() {
	                        return _this6._._scope[id];
	                    }
	                });
	                Object.defineProperty(targetCtx._.state.prototype, id, {
	                    get: function get() {
	                        return _this6._._scope[id] && _this6._._scope[id].state;
	                    },
	                    set: function set(v) {
	                        return _this6._mount(id, undefined, v);
	                    }
	                });
	                Object.defineProperty(targetCtx._.data.prototype, id, {
	                    get: function get() {
	                        return _this6._._scope[id] && _this6._._scope[id].data;
	                    },
	                    set: function set(v) {
	                        return _this6._mount(id, undefined, v);
	                    }
	                });
	
	                var actions = srcCtx[id] instanceof Scope.Store ? srcCtx[id].constructor.actions : srcCtx[id].actions,
	                    activeActions = targetCtx._.actions.prototype;
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
	            this.mount(refList.map(function (ref) {
	                return ref.storeId;
	            }));
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
	            return storesList.reduce(function (data, id) {
	                if (!is.string(id)) id = id.name;
	                id = id.split(':'); //@todo
	                id[0] = id[0].split('.');
	                data[id[1] || id[0][id[0].length - 1]] = _this8.stores[id[0][0]] && _this8.stores[id[0][0]].retrieve && _this8.stores[id[0][0]].retrieve(id[0].splice(1));
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
	                if (!output.hasOwnProperty(id) && !is.fn(ctx[id]) && (!storesRevMap || storesRevMap.hasOwnProperty(id) && storesRevMap[id] === undefined || !(!storesRevMap.hasOwnProperty(id) || ctx[id]._rev <= storesRevMap[id].rev))) {
	
	                    updated = true;
	                    output[id] = _this9.data[id];
	
	                    if (storesRevMap && storesRevMap.hasOwnProperty(id)) {
	                        storesRevMap[id].rev = ctx[id]._rev;
	                        storesRevMap[id].refs.forEach(function (ref) {
	                            //console.warn("update ref ", ref.ref, this.retrieve(ref.path));
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
	            var _this10 = this;
	
	            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	                alias = _ref3.alias,
	                _ref3$withChilds = _ref3.withChilds,
	                withChilds = _ref3$withChilds === undefined ? true : _ref3$withChilds,
	                withParents = _ref3.withParents,
	                _ref3$withMixed = _ref3.withMixed,
	                withMixed = _ref3$withMixed === undefined ? true : _ref3$withMixed,
	                norefs = _ref3.norefs;
	
	            var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	            var ctx = this._._scope;
	            if (output[this._id]) return;
	
	            //@todo : better serialize method
	            output[this._id] = {};
	
	            Object.keys(ctx).forEach(function (id) {
	                if (is.fn(ctx[id])) return;
	
	                ctx[id].serialize(!norefs, output);
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
	                    return h[k.replace(_this10._id, alias)] = output[k], h;
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
	        value: function restore(snapshot, force) {
	            var _this11 = this;
	
	            var ctx = this._._scope;
	
	            snapshot[this._id] && Object.keys(ctx).forEach(function (name) {
	                var snap = snapshot[_this11._id + '/' + name];
	
	                if (snap) {
	
	                    if (force && !is.fn(ctx[name])) ctx[name].destroy();
	
	                    _this11.mount(name, snapshot); // quiet
	                }
	            });
	
	            this._._mixed.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.restore(snapshot, force);
	            });
	
	            this._.childScopes.forEach(function (ctx) {
	                !ctx._.isLocalId && ctx.restore(snapshot, force);
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
	
	                if (!is.fn(_this12._._scope[id])) (_$_scope$id = _this12._._scope[id]).trigger.apply(_$_scope$id, [action].concat(argz));
	            });
	
	            if (bActs && bActs.test(action)) return;
	
	            this._._mixed.forEach(function (ctx) {
	                return ctx.dispatch.apply(ctx, [action].concat(argz));
	            });
	            this.parent && (_parent2 = this.parent).dispatch.apply(_parent2, [action].concat(argz));
	            return this;
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
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this13.data);
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
	
	            if (this._.followers.length) this._.followers.forEach(function (_ref4) {
	                var obj = _ref4[0],
	                    key = _ref4[1],
	                    as = _ref4[2],
	                    lastRevs = _ref4[3],
	                    remaps = _ref4[3];
	
	                var data = _this18.getUpdates(lastRevs);
	                if (!data) return;
	                if (typeof obj != "function") {
	                    //console.log("setState ",obj, Object.keys(data))
	                    if (as) obj.setState(_defineProperty({}, as, data));else obj.setState(data);
	                } else {
	                    obj(data, lastRevs && [].concat(_toConsumableArray(lastRevs)) || "no revs");
	                }
	                // lastRevs &&
	                // key.forEach(id => (lastRevs[id] = this.stores[id] && this.stores[id]._rev || 0));
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
	                        !_this20.__retains.all && _this20.destroy();
	                        //});
	                    }, this._.persistenceTm);
	                } else {
	                    //this.then(s =>
	                    !this.__retains.all && this.destroy();
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
	            this.emit("destroy", this);
	            for (var key in ctx) {
	                if (!is.fn(ctx[key])) {
	                    !ctx[key]._autoDestroy && ctx[key].dispose("scoped");
	                }
	            }this.dead = true;
	            [].concat(_toConsumableArray(this._.followers)).map(function (follower) {
	                return _this21.unBind.apply(_this21, _toConsumableArray(follower));
	            });
	            Object.keys(this._._listening).forEach(function (id) {
	                return _this21._._scope[id].removeListener(_this21._._listening[id]);
	            });
	
	            this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
	            this._.propagTM && clearTimeout(this._.propagTM);
	
	            if (!this._.isLocalId) delete openScopes[this._id];
	
	            while (this._._mixedList.length) {
	                this._._mixed[0].removeListener(this._._mixedList.shift());
	                this._._mixed.shift().dispose("mixedTo");
	            }
	            if (this._._parentList) {
	                this.parent._rmChild(this);
	                this.parent.removeListener(this._._parentList);
	                this.parent.dispose("isMyParent");
	                this._._parentList = null;
	            }
	            this._ = null;
	        }
	    }, {
	        key: 'datas',
	        get: function get() {
	            return this.data;
	        }
	    }]);
	
	    return Scope;
	}(EventEmitter), _class.persistenceTm = 1, _class.Store = null, _class.scopeRef = function scopeRef(path) {
	    this.path = path;
	}, _class.scopes = openScopes, _temp);
	exports.default = Scope;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(10);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(7);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	/**
	 * Ultra scalable state-aware store
	 *
	 * @todo : lot of optims...
	 */
	
	var is = __webpack_require__(3),
	    Scope = __webpack_require__(2),
	    EventEmitter = __webpack_require__(4),
	    TaskSequencer = __webpack_require__(7),
	    shortid = __webpack_require__(5),
	    objProto = Object.getPrototypeOf({});
	
	/**
	 * @class Store
	 */
	var Store = (_temp = _class = function (_EventEmitter) {
	    _inherits(Store, _EventEmitter);
	
	    _createClass(Store, null, [{
	        key: 'as',
	
	
	        /**
	         * get a Builder-key pair for Store::map
	         * @param {string} name
	         * @returns {{store: Store, name: *}}
	         */
	        // overridable list of store that will allow push if updated
	        value: function as(name) {
	            return { store: this, name: name };
	        }
	
	        /**
	         * Map all named stores in {keys} to the {object}'s state
	         * Hook componentWillUnmount (for react comp) or destroy to unBind them automatically
	         * @static
	         * @param object {Object} target state aware object (React.Component|Store|...)
	         * @param keys {Array} Ex : ["session", "otherStaticNamedStore:key", store.as('anotherKey')]
	         */
	        // default state
	        /**
	         * if retain goes to 0 :
	         * false to not destroy,
	         * 0 to sync auto destroy
	         * Ms to autodestroy after tm ms if no retain has been called
	         * @type {boolean|Int}
	         */
	        // overridable list of source stores
	
	    }, {
	        key: 'map',
	        value: function map(component, keys, scope, origin) {
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
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                    store = key.store;
	                } else if (is.fn(key)) {
	                    name = alias = key.name || key.defaultName;
	                    store = key;
	                } else {
	                    key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                    name = key[1];
	                    path = key[2] && key[2].substr(1);
	                    store = scope.stores[key[1]];
	                    alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
	                }
	
	                if (targetRevs[name]) return false; // ignore dbl uses for now
	
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
	                (_component$_sources = component._sources).push.apply(_component$_sources, _toConsumableArray(scope.stores[name]._sources));
	
	                targetRevs[alias] = targetRevs[alias] || true;
	                !targetScope[name] && (targetScope[name] = scope.stores[name]);
	                if (scope.stores[name].hasOwnProperty('data')) initialOutputs[name] = scope.data[name];
	                return true;
	            });
	
	            // ...
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
	        }
	
	        /**
	         * Constructor, will build a rescope store
	         *
	         * (scope, {require,use,apply,state, data})
	         * (scope)
	         *
	         * @param scope {object} scope where to find the other stores (default : static staticScope )
	         * @param keys {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
	         */
	
	    }]);
	
	    function Store() {
	        var _this$_require, _this$_require2;
	
	        _classCallCheck(this, Store);
	
	        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));
	
	        var argz = [].concat(Array.prototype.slice.call(arguments)),
	            _static = _this.constructor,
	            scope = argz[0] instanceof Scope ? argz.shift() : _static.scope ? Scope.getScope(_static.scope) : is.string(argz[0]) ? Scope.getScope(argz.shift()) : _static.staticScope,
	            cfg = argz[0] && !is.array(argz[0]) && !is.string(argz[0]) ? argz.shift() : {},
	            name = is.string(argz[0]) ? argz[0] : cfg.name || _static.name,
	            watchs = is.array(argz[0]) ? argz.shift() : cfg.use || [],
	            // watchs need to be defined after all the
	        // store are registered : so we can't deal
	        // with any "static use" automaticly
	        apply = is.fn(argz[0]) ? argz.shift() : cfg.apply || null,
	            initialState = _static.state || _static.initialState,
	            applied;
	
	        _this._uid = cfg._uid || shortid.generate();
	
	        _this.__retains = { all: 0 };
	        _this.__locks = { all: 0 };
	        _this._onStabilize = [];
	
	        // autoDestroyTm
	        _this._autoDestroy = !!_this._persistenceTm;
	        _this._persistenceTm = cfg.persistenceTm || _static.persistenceTm || (cfg.autoDestroy || _static.autoDestroy) && 5;
	
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
	        _this._changesSW = {};
	        if (apply) _this.apply = apply;
	
	        if (cfg.snapshot && cfg.snapshot[_this.scopeObj._id + '/' + name]) {
	            _this.restore(cfg.snapshot);
	            _this._stable = true;
	            scope.bind(_this, _this._use, false);
	        } else {
	
	            if (_static.data !== undefined) _this.data = _extends({}, _static.data);
	            if (cfg.hasOwnProperty("data") && cfg.data !== undefined) _this.data = cfg.data;
	            if (cfg.hasOwnProperty("state") && cfg.state !== undefined) initialState = _extends({}, initialState, cfg.state);
	
	            if (initialState || _this._use.length) {
	                // sync apply
	                _this._changesSW = _extends({}, initialState || {}, scope.map(_this, _this._use));
	                _this.state = {};
	                if (_this.shouldApply(_this._changesSW) && _this.data === undefined) {
	                    _this.data = _this.apply(_this.data, _this._changesSW, _this._changesSW);
	                    applied = true;
	                    _this.state = _this._changesSW;
	                    _this._changesSW = {};
	                }
	            }
	        }
	        if ((_this.data !== undefined || applied) && !_this.__locks.all) {
	            _this._stable = true;
	            _this._rev++;
	        } else {
	            _this._stable = false;
	            if (!_static.managed && !_this.state && (!_this._use || !_this._use.length)) {
	                console.warn("ReScope store '", _this.name, "' have no initial data, state or use. It can't stabilize...");
	            }
	        }
	        !_this._stable && _this.emit('unstable', _this.state);
	
	        return _this;
	    }
	
	    /**
	     * @deprecated
	     * @returns {*}
	     */
	
	
	    _createClass(Store, [{
	        key: 'shouldPropag',
	
	
	        /**
	         * Overridable method to know if a data change should be propag to the listening stores & components
	         */
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
	         * If state or lastPublicState are simple hash maps apply will return {...data, ...state}
	         * if not it will return the last private state
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
	
	            for (var _len = arguments.length, argz = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                argz[_key - 1] = arguments[_key];
	            }
	
	            (_scopeObj = this.scopeObj).dispatch.apply(_scopeObj, [action].concat(argz));
	        }
	    }, {
	        key: 'trigger',
	        value: function trigger(action) {
	            var actions = this.constructor.actions;
	
	            if (actions && actions[action]) {
	                var _actions$action;
	
	                for (var _len2 = arguments.length, argz = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                    argz[_key2 - 1] = arguments[_key2];
	                }
	
	                var ns = (_actions$action = actions[action]).call.apply(_actions$action, [this].concat(argz));
	                ns && this.setState(ns);
	            }
	        }
	
	        /**
	         * Pull stores in the private state
	         * @param stores  {Array} (passed to Store::map) Ex : ["session", "otherNamedStore:key", otherStore.as("otherKey")]
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
	         * Call the apply fn using the current accumulated state update then, push the resulting data if stable
	         * @param force
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'pushState',
	        value: function pushState(force) {
	
	            if (!force && !this._changesSW && this.data) return;
	
	            var nextState = _extends({}, this.state, this._changesSW || {}),
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
	            }if (!this.shouldApply(_extends({}, this.state, changes))) {
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
	
	            var withRefs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	            var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	            var refs = withRefs && is.array(this._use) && this._use.reduce(function (map, key) {
	                //todo
	                var name = void 0,
	                    alias = void 0,
	                    path = void 0,
	                    store = void 0;
	                if (key.store && key.name) {
	                    alias = name = key.name;
	                } else if (is.fn(key)) {
	                    name = alias = key.name || key.defaultName;
	                } else {
	                    key = key.match(/([\w_]+)((?:\.[\w_]+)*)(?:\:([\w_]+))?/);
	                    name = key[1];
	                    path = key[2] && key[2].substr(1);
	                    alias = key[3] || path && path.match(/([^\.]*)$/)[0] || key[1];
	                }
	
	                if (!_this6.scopeObj.stores[name].scopeObj._.isLocalId) map[alias] = _this6.scopeObj.stores[name].scopeObj._id + '/' + name;
	
	                return map;
	            }, {}) || {};
	
	            output[this.scopeObj._id + '/' + this.name] = {
	                state: this.state && (!withRefs ? _extends({}, this.state) : Object.keys(this.state).reduce(function (h, k) {
	                    return !refs[k] && (h[k] = _this6.state[k]), h;
	                }, {})),
	                data: this.data,
	                refs: refs
	            };
	            return output;
	        }
	
	        /**
	         * restore state & data
	         * @returns bool
	         */
	
	    }, {
	        key: 'restore',
	        value: function restore(snapshot) {
	            var snap = snapshot[this.scopeObj._id + '/' + this.name];
	            if (snap) {
	                this.state = snap.state;
	                Object.keys(snap.refs).forEach(function (key) {
	                    //todo
	                    if (snapshot[snap.refs[key]]) snap.state[key] = snapshot[snap.refs[key]].data;else console.warn('not found : ', key, snap.refs[key]);
	                });
	
	                this.data = snap.data;
	            }
	        }
	
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
	            var _this7 = this;
	
	            if (this._stable) return cb(null, this.data);
	            this.once('stable', function (e) {
	                return cb(null, _this7.data);
	            });
	        }
	
	        /**
	         * Add a lock so the store will not propag it data untill release() is call
	         * @param previous {Store|number|Array} @optional wf to wait, releases to wait or array of stuff to wait
	         * @returns {TaskFlow}
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
	            var _this8 = this;
	
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
	                        _this8._destroyTM = null;
	                        //this.then(s => {
	                        !_this8.__retains.all && _this8.destroy();
	                        //});
	                    }, this._persistenceTm);
	                } else {
	                    //this.then(s =>
	                    !this.__retains.all && this.destroy();
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
	        key: 'contextObj',
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
	        ,
	        set: function set(v) {
	            //console.groupCollapsed("Rescope store : Setting datas is depreciated, use data");
	            //console.log("Rescope store : Setting datas is depreciated, use data", (new Error()).stack);
	            //console.groupEnd();
	
	            this.data = v;
	        }
	
	        /**
	         * Get the incoming state ( for immediate state relative actions )
	         * @returns {{}|*}
	         */
	
	    }, {
	        key: 'nextState',
	        get: function get() {
	            return this._changesSW && _extends({}, this.state, this._changesSW) || this.state;
	        }
	    }]);
	
	    return Store;
	}(EventEmitter), _class.use = [], _class.staticScope = new Scope({}, { id: "static" }), _class.state = undefined, _class.persistenceTm = false, _temp);
	exports.default = Store;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _is = __webpack_require__(3);
	
	var _is2 = _interopRequireDefault(_is);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Minimal push sequencer, apply stores specific task in the right order (root stores first)
	 */
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
	}; // will use as external the index in dist
	
	
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
	        var weight = obj._sources && obj._sources.length || 1,
	            stack = taskQueue[weight] = taskQueue[weight] || [];
	
	        maxWeight = Math.max(maxWeight, weight);
	        curWeight = Math.min(curWeight, weight);
	        taskCount++;
	
	        //console.log("Push Task : ", fn, " on ", obj.name, weight);
	        stack.push([obj, fn, argz]);
	        setTimeout(runNow);
	        return stack.length;
	    }
	};
	module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.scopeToState = exports.reScope = exports.addScopableType = undefined;
	
	var _is = __webpack_require__(3);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _index = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*
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
	//        let BaseStore    = (!argz[0] || argz[0].prototype instanceof Store) && argz.shift(),
	//            scope        = (!argz[0] || argz[0] instanceof Scope || is.fn(argz[0])) && argz.shift(),
	//            use          = (is.array(argz[0])) && argz.shift(),
	//            stateMap     = !use && (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift(),
	//            initialState = {};
	//
	//        let compName = BaseStore.displayName || BaseStore.name;
	//
	//        use = [...(BaseStore.use || []), ...(use || [])];
	//        stateMap && Scope.stateMapToRefList(stateMap, initialState, use);
	//
	//        class StateScopedStore extends BaseStore {
	//            static use         = use;
	//            static displayName = "stateScoped(" + compName + ")";
	//
	//            constructor( ...argz ) {
	//                super(scope, argz.slice(argz[0] instanceof Scope ? 1 : 0))
	//            }
	//        }
	//
	//        return StateScopedStore;
	//    },
	//    false,
	//    true
	//)
	
	
	exports.addScopableType = addScopableType;
	exports.reScope = reScope;
	exports.scopeToState = scopeToState;

/***/ })
/******/ ]);
//# sourceMappingURL=ReScope.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tough = __webpack_require__(52)

var Cookie = tough.Cookie
var CookieJar = tough.CookieJar

exports.parse = function (str) {
  if (str && str.uri) {
    str = str.uri
  }
  if (typeof str !== 'string') {
    throw new Error('The cookie function only accepts STRING as param')
  }
  return Cookie.parse(str, {loose: true})
}

// Adapt the sometimes-Async api of tough.CookieJar to our requirements
function RequestJar (store) {
  var self = this
  self._jar = new CookieJar(store, {looseMode: true})
}
RequestJar.prototype.setCookie = function (cookieOrStr, uri, options) {
  var self = this
  return self._jar.setCookieSync(cookieOrStr, uri, options || {})
}
RequestJar.prototype.getCookieString = function (uri) {
  var self = this
  return self._jar.getCookieStringSync(uri)
}
RequestJar.prototype.getCookies = function (uri) {
  var self = this
  return self._jar.getCookiesSync(uri)
}

exports.jar = function (store) {
  return new RequestJar(store)
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("is");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("isstream");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = (function () {
  var fn = function anonymous(it
/**/) {
var out='<!DOCTYPE html><!-- ~ Copyright (c)  2018 Wise Wild Web . ~ ~  MIT License ~ ~  Permission is hereby granted, free of charge, to any person obtaining a copy ~  of this software and associated documentation files (the "Software"), to deal ~  in the Software without restriction, including without limitation the rights ~  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell ~  copies of the Software, and to permit persons to whom the Software is ~  furnished to do so, subject to the following conditions: ~ ~  The above copyright notice and this permission notice shall be included in all ~  copies or substantial portions of the Software. ~ ~  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR ~  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, ~  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE ~  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER ~  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, ~  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE ~  SOFTWARE. ~ ~ @author : Nathanael Braun ~ @contact : caipilabs@gmail.com --><html lang="en"><head> <meta charset="UTF-8"> <title>Really basic drafty rescope + react component example</title> <script>window.__scopesState ='+(it.state || "{}")+';</script></head><body><div id="app">'+(it.app || '')+'</div><script src="./App.js"></script><script> App.renderTo(document.getElementById(\'app\'));</script></body></html>';return out;
};
  fn.render = fn;
  return fn;
})();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright 2010-2012 Mikeal Rogers
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.



var extend = __webpack_require__(4)
var cookies = __webpack_require__(8)
var helpers = __webpack_require__(2)

var paramsHaveRequestBody = helpers.paramsHaveRequestBody

// organize params for patch, post, put, head, del
function initParams (uri, options, callback) {
  if (typeof options === 'function') {
    callback = options
  }

  var params = {}
  if (typeof options === 'object') {
    extend(params, options, {uri: uri})
  } else if (typeof uri === 'string') {
    extend(params, {uri: uri})
  } else {
    extend(params, uri)
  }

  params.callback = callback || params.callback
  return params
}

function request (uri, options, callback) {
  if (typeof uri === 'undefined') {
    throw new Error('undefined is not a valid uri or options object.')
  }

  var params = initParams(uri, options, callback)

  if (params.method === 'HEAD' && paramsHaveRequestBody(params)) {
    throw new Error('HTTP HEAD requests MUST NOT include a request body.')
  }

  return new request.Request(params)
}

function verbFunc (verb) {
  var method = verb.toUpperCase()
  return function (uri, options, callback) {
    var params = initParams(uri, options, callback)
    params.method = method
    return request(params, params.callback)
  }
}

// define like this to please codeintel/intellisense IDEs
request.get = verbFunc('get')
request.head = verbFunc('head')
request.options = verbFunc('options')
request.post = verbFunc('post')
request.put = verbFunc('put')
request.patch = verbFunc('patch')
request.del = verbFunc('delete')
request['delete'] = verbFunc('delete')

request.jar = function (store) {
  return cookies.jar(store)
}

request.cookie = function (str) {
  return cookies.parse(str)
}

function wrapRequestMethod (method, options, requester, verb) {
  return function (uri, opts, callback) {
    var params = initParams(uri, opts, callback)

    var target = {}
    extend(true, target, options, params)

    target.pool = params.pool || options.pool

    if (verb) {
      target.method = verb.toUpperCase()
    }

    if (typeof requester === 'function') {
      method = requester
    }

    return method(target, target.callback)
  }
}

request.defaults = function (options, requester) {
  var self = this

  options = options || {}

  if (typeof options === 'function') {
    requester = options
    options = {}
  }

  var defaults = wrapRequestMethod(self, options, requester)

  var verbs = ['get', 'head', 'post', 'put', 'patch', 'del', 'delete']
  verbs.forEach(function (verb) {
    defaults[verb] = wrapRequestMethod(self[verb], options, requester, verb)
  })

  defaults.cookie = wrapRequestMethod(self.cookie, options, requester)
  defaults.jar = self.jar
  defaults.defaults = self.defaults
  return defaults
}

request.forever = function (agentOptions, optionsArg) {
  var options = {}
  if (optionsArg) {
    extend(options, optionsArg)
  }
  if (agentOptions) {
    options.agentOptions = agentOptions
  }

  options.forever = true
  return request.defaults(options)
}

// Exports

module.exports = request
request.Request = __webpack_require__(32)
request.initParams = initParams

// Backwards compatibility for request.debug
Object.defineProperty(request, 'debug', {
  enumerable: true,
  get: function () {
    return request.Request.debug
  },
  set: function (debug) {
    request.Request.debug = debug
  }
})


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	__webpack_require__(4);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _rescope = __webpack_require__(2);
	
	var _rescope2 = _interopRequireDefault(_rescope);
	
	var _is = __webpack_require__(3);
	
	var _is2 = _interopRequireDefault(_is);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(6);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(10);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _dec, _dec2, _desc, _value, _obj; /*
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
	
	var _is = __webpack_require__(3);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _rescope = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	var all = (_dec = (0, _rescope.isSpell)("stateMap", function (v) {
	    return _is2.default.object(v) || _is2.default.string(v);
	}), _dec2 = (0, _rescope.isSpell)("scope", function (v) {
	    return _is2.default.object(v);
	}), (_obj = {
	    stateMap: function stateMap(obj, _ref, ref) {
	        var _class, _temp;
	
	        var cfg = _ref[0];
	
	        var use = [],
	            state = {};
	        _rescope.Scope.stateMapToRefList(obj, state, use);
	        return _temp = _class = function (_Store) {
	            _inherits(StateMap, _Store);
	
	            function StateMap() {
	                _classCallCheck(this, StateMap);
	
	                return _possibleConstructorReturn(this, (StateMap.__proto__ || Object.getPrototypeOf(StateMap)).apply(this, arguments));
	            }
	
	            return StateMap;
	        }(_rescope.Store), _class.use = use, _class.state = state, _class.displayName = ref[1], _temp;
	    },
	    scope: function scope(obj, _ref2, ref) {
	        var cfg = _ref2[0];
	
	
	        return _rescope.Scope.bind(null, obj, cfg);
	    }
	}, (_applyDecoratedDescriptor(_obj, "stateMap", [_dec], Object.getOwnPropertyDescriptor(_obj, "stateMap"), _obj), _applyDecoratedDescriptor(_obj, "scope", [_dec2], Object.getOwnPropertyDescriptor(_obj, "scope"), _obj)), _obj));

/***/ })
/******/ ]);
//# sourceMappingURL=rescopeSpells.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-rescope");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-rnd");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _desc, _value, _obj, _init, _class3, _temp2, _dec2, _dec3, _desc2, _value2, _obj2, _init2, _init3, _init4, _class4; /*
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

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _shortid = __webpack_require__(7);

var _shortid2 = _interopRequireDefault(_shortid);

__webpack_require__(17);

__webpack_require__(21);

var _reactRnd = __webpack_require__(22);

var _reactRnd2 = _interopRequireDefault(_reactRnd);

var _superagent = __webpack_require__(16);

var _superagent2 = _interopRequireDefault(_superagent);

var _rescope = __webpack_require__(6);

var _rescope2 = _interopRequireDefault(_rescope);

var _server = __webpack_require__(20);

__webpack_require__(14);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var indexTpl = __webpack_require__(15);

var asStateMap = _rescope.spells.asStateMap,
    asScope = _rescope.spells.asScope;

var ReactDom = __webpack_require__(19);

var App = (_dec = (0, _rescope.scopeToState)(["appState", "someData"]), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var _state = this.state,
                someData = _state.someData,
                appState = _state.appState;

            return [_react2.default.createElement(
                "h1",
                null,
                "Really basic drafty rescope SSR example"
            ), someData.items.map(function (note) {
                return _react2.default.createElement(PostIt, { key: note._id, record: note, selected: note._id == appState.selectedItemId });
            }), _react2.default.createElement(
                "div",
                {
                    className: "newBtn button",
                    onClick: this.$actions.newPostIt },
                "Add Post It"
            ), _react2.default.createElement(
                "div",
                {
                    className: "saveBtn button",
                    onClick: this.$actions.saveState },
                "Save state"
            )];
        }
    }]);

    return App;
}(_react2.default.Component), _class2.AppScope = (_obj = {
    appState: {
        selectedItemId: null
    },
    someData: (_temp2 = _class3 = function (_Store) {
        _inherits(someData, _Store);

        function someData() {
            _classCallCheck(this, someData);

            return _possibleConstructorReturn(this, (someData.__proto__ || Object.getPrototypeOf(someData)).apply(this, arguments));
        }

        return someData;
    }(_rescope.Store), _class3.state = {
        src: "/api/hello",
        items: []
    }, _class3.actions = {
        newPostIt: function newPostIt() {
            return {
                items: [].concat(_toConsumableArray(this.nextState.items), [{
                    _id: _shortid2.default.generate(),
                    size: {
                        width: 200,
                        height: 200
                    },
                    text: "New Post It #" + this.nextState.items.length
                }])
            };
        },
        updatePostIt: function updatePostIt(postIt) {
            var items = this.nextState.items;

            items = items.map(function (it) {
                return it._id === postIt._id ? postIt : it;
            });

            return {
                items: items
            };
        },
        saveState: function saveState() {
            _superagent2.default.post('/', this.scopeObj.serialize()).then(function (e, r) {
                console.log(e, r);
            });
        }
    }, _temp2)
}, (_applyDecoratedDescriptor(_obj, "appState", [asStateMap], (_init = Object.getOwnPropertyDescriptor(_obj, "appState"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _obj)), _obj), _class2.renderTo = function (node) {
    var cScope = new _rescope.Scope(App.AppScope, { id: "App" });
    window.__scopesState && cScope.restore(window.__scopesState);
    window.context = _rescope.Scope.scopes;
    cScope.then(function (err, state, context) {
        ReactDom.render(_react2.default.createElement(App, { __scope: cScope }), node);
    });
}, _class2.renderSSR = function (cfg, cb) {
    var cScope = new _rescope.Scope(App.AppScope, { id: "App" });
    cfg.state && cScope.restore(cfg.state);
    console.log("!!", cScope.data.someData);
    cScope.then(function (err, state, context) {
        var html = void 0;
        try {
            html = indexTpl.render({
                app: (0, _server.renderToString)(_react2.default.createElement(App, { __scope: cScope })),
                state: JSON.stringify(cfg.state || cScope.serialize({ alias: "App" }))
            });
        } catch (e) {
            return cb(e);
        }
        cb(null, html);
    });
}, _temp)) || _class);
var PostIt = (_dec2 = (0, _rescope.propsToScope)(["record"], { key: 'postIt' }), _dec3 = (0, _rescope.scopeToProps)((_obj2 = { // for fun
    size: "record.size",

    position: "record.position",

    text: "record.text"
}, (_applyDecoratedDescriptor(_obj2, "size", [_rescope.scopeRef], (_init2 = Object.getOwnPropertyDescriptor(_obj2, "size"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init2;
    }
}), _obj2), _applyDecoratedDescriptor(_obj2, "position", [_rescope.scopeRef], (_init3 = Object.getOwnPropertyDescriptor(_obj2, "position"), _init3 = _init3 ? _init3.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init3;
    }
}), _obj2), _applyDecoratedDescriptor(_obj2, "text", [_rescope.scopeRef], (_init4 = Object.getOwnPropertyDescriptor(_obj2, "text"), _init4 = _init4 ? _init4.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init4;
    }
}), _obj2)), _obj2)), _dec2(_class4 = _dec3(_class4 = function (_React$Component2) {
    _inherits(PostIt, _React$Component2);

    function PostIt() {
        _classCallCheck(this, PostIt);

        return _possibleConstructorReturn(this, (PostIt.__proto__ || Object.getPrototypeOf(PostIt)).apply(this, arguments));
    }

    _createClass(PostIt, [{
        key: "render",


        //shouldComponentUpdate( np ) {
        //    console.warn("update");
        //    Object.keys(np).forEach(
        //        k => {
        //            if ( np[k] !== this.props[k] )
        //                console.warn(k);
        //        }
        //    )
        //
        //    return super.shouldComponentUpdate ? super.shouldComponentUpdate() : true;
        //}

        value: function render() {
            var _props = this.props,
                position = _props.position,
                text = _props.text,
                size = _props.size,
                $actions = _props.$actions,
                record = _props.record;

            console.log(position, text, size);
            return _react2.default.createElement(
                _reactRnd2.default,
                {
                    absolutePos: true,
                    size: size,
                    position: position,
                    onDragStop: function onDragStop(e, d) {
                        $actions.updatePostIt(_extends({}, record, {
                            position: { x: d.x, y: d.y }
                        }));
                    },
                    onResize: function onResize(e, direction, ref, delta, position) {
                        $actions.updatePostIt(_extends({}, record, {
                            position: position,
                            size: {
                                width: ref.offsetWidth,
                                height: ref.offsetHeight
                            }
                        }));
                    } },
                _react2.default.createElement(
                    "div",
                    { className: "postit handle" },
                    text,
                    "!!!"
                )
            );
        }
    }]);

    return PostIt;
}(_react2.default.Component)) || _class4) || _class4);


if (typeof window != 'undefined') {
    window.App = App;
}
exports.default = App;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var caseless = __webpack_require__(3)
var uuid = __webpack_require__(5)
var helpers = __webpack_require__(2)

var md5 = helpers.md5
var toBase64 = helpers.toBase64

function Auth (request) {
  // define all public properties here
  this.request = request
  this.hasAuth = false
  this.sentAuth = false
  this.bearerToken = null
  this.user = null
  this.pass = null
}

Auth.prototype.basic = function (user, pass, sendImmediately) {
  var self = this
  if (typeof user !== 'string' || (pass !== undefined && typeof pass !== 'string')) {
    self.request.emit('error', new Error('auth() received invalid user or password'))
  }
  self.user = user
  self.pass = pass
  self.hasAuth = true
  var header = user + ':' + (pass || '')
  if (sendImmediately || typeof sendImmediately === 'undefined') {
    var authHeader = 'Basic ' + toBase64(header)
    self.sentAuth = true
    return authHeader
  }
}

Auth.prototype.bearer = function (bearer, sendImmediately) {
  var self = this
  self.bearerToken = bearer
  self.hasAuth = true
  if (sendImmediately || typeof sendImmediately === 'undefined') {
    if (typeof bearer === 'function') {
      bearer = bearer()
    }
    var authHeader = 'Bearer ' + (bearer || '')
    self.sentAuth = true
    return authHeader
  }
}

Auth.prototype.digest = function (method, path, authHeader) {
  // TODO: More complete implementation of RFC 2617.
  //   - handle challenge.domain
  //   - support qop="auth-int" only
  //   - handle Authentication-Info (not necessarily?)
  //   - check challenge.stale (not necessarily?)
  //   - increase nc (not necessarily?)
  // For reference:
  // http://tools.ietf.org/html/rfc2617#section-3
  // https://github.com/bagder/curl/blob/master/lib/http_digest.c

  var self = this

  var challenge = {}
  var re = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi
  for (;;) {
    var match = re.exec(authHeader)
    if (!match) {
      break
    }
    challenge[match[1]] = match[2] || match[3]
  }

  /**
   * RFC 2617: handle both MD5 and MD5-sess algorithms.
   *
   * If the algorithm directive's value is "MD5" or unspecified, then HA1 is
   *   HA1=MD5(username:realm:password)
   * If the algorithm directive's value is "MD5-sess", then HA1 is
   *   HA1=MD5(MD5(username:realm:password):nonce:cnonce)
   */
  var ha1Compute = function (algorithm, user, realm, pass, nonce, cnonce) {
    var ha1 = md5(user + ':' + realm + ':' + pass)
    if (algorithm && algorithm.toLowerCase() === 'md5-sess') {
      return md5(ha1 + ':' + nonce + ':' + cnonce)
    } else {
      return ha1
    }
  }

  var qop = /(^|,)\s*auth\s*($|,)/.test(challenge.qop) && 'auth'
  var nc = qop && '00000001'
  var cnonce = qop && uuid().replace(/-/g, '')
  var ha1 = ha1Compute(challenge.algorithm, self.user, challenge.realm, self.pass, challenge.nonce, cnonce)
  var ha2 = md5(method + ':' + path)
  var digestResponse = qop
    ? md5(ha1 + ':' + challenge.nonce + ':' + nc + ':' + cnonce + ':' + qop + ':' + ha2)
    : md5(ha1 + ':' + challenge.nonce + ':' + ha2)
  var authValues = {
    username: self.user,
    realm: challenge.realm,
    nonce: challenge.nonce,
    uri: path,
    qop: qop,
    response: digestResponse,
    nc: nc,
    cnonce: cnonce,
    algorithm: challenge.algorithm,
    opaque: challenge.opaque
  }

  authHeader = []
  for (var k in authValues) {
    if (authValues[k]) {
      if (k === 'qop' || k === 'nc' || k === 'algorithm') {
        authHeader.push(k + '=' + authValues[k])
      } else {
        authHeader.push(k + '="' + authValues[k] + '"')
      }
    }
  }
  authHeader = 'Digest ' + authHeader.join(', ')
  self.sentAuth = true
  return authHeader
}

Auth.prototype.onRequest = function (user, pass, sendImmediately, bearer) {
  var self = this
  var request = self.request

  var authHeader
  if (bearer === undefined && user === undefined) {
    self.request.emit('error', new Error('no auth mechanism defined'))
  } else if (bearer !== undefined) {
    authHeader = self.bearer(bearer, sendImmediately)
  } else {
    authHeader = self.basic(user, pass, sendImmediately)
  }
  if (authHeader) {
    request.setHeader('authorization', authHeader)
  }
}

Auth.prototype.onResponse = function (response) {
  var self = this
  var request = self.request

  if (!self.hasAuth || self.sentAuth) { return null }

  var c = caseless(response.headers)

  var authHeader = c.get('www-authenticate')
  var authVerb = authHeader && authHeader.split(' ')[0].toLowerCase()
  request.debug('reauth', authVerb)

  switch (authVerb) {
    case 'basic':
      return self.basic(self.user, self.pass, true)

    case 'bearer':
      return self.bearer(self.bearerToken, true)

    case 'digest':
      return self.digest(request.method, request.path, authHeader)
  }
}

exports.Auth = Auth


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function formatHostname (hostname) {
  // canonicalize the hostname, so that 'oogle.com' won't match 'google.com'
  return hostname.replace(/^\.*/, '.').toLowerCase()
}

function parseNoProxyZone (zone) {
  zone = zone.trim().toLowerCase()

  var zoneParts = zone.split(':', 2)
  var zoneHost = formatHostname(zoneParts[0])
  var zonePort = zoneParts[1]
  var hasPort = zone.indexOf(':') > -1

  return {hostname: zoneHost, port: zonePort, hasPort: hasPort}
}

function uriInNoProxy (uri, noProxy) {
  var port = uri.port || (uri.protocol === 'https:' ? '443' : '80')
  var hostname = formatHostname(uri.hostname)
  var noProxyList = noProxy.split(',')

  // iterate through the noProxyList until it finds a match.
  return noProxyList.map(parseNoProxyZone).some(function (noProxyZone) {
    var isMatchedAt = hostname.indexOf(noProxyZone.hostname)
    var hostnameMatched = (
      isMatchedAt > -1 &&
        (isMatchedAt === hostname.length - noProxyZone.hostname.length)
    )

    if (noProxyZone.hasPort) {
      return (port === noProxyZone.port) && hostnameMatched
    }

    return hostnameMatched
  })
}

function getProxyFromURI (uri) {
  // Decide the proper request proxy to use based on the request URI object and the
  // environmental variables (NO_PROXY, HTTP_PROXY, etc.)
  // respect NO_PROXY environment variables (see: http://lynx.isc.org/current/breakout/lynx_help/keystrokes/environments.html)

  var noProxy = process.env.NO_PROXY || process.env.no_proxy || ''

  // if the noProxy is a wildcard then return null

  if (noProxy === '*') {
    return null
  }

  // if the noProxy is not empty and the uri is found return null

  if (noProxy !== '' && uriInNoProxy(uri, noProxy)) {
    return null
  }

  // Check for HTTP or HTTPS Proxy in environment Else default to null

  if (uri.protocol === 'http:') {
    return process.env.HTTP_PROXY ||
      process.env.http_proxy || null
  }

  if (uri.protocol === 'https:') {
    return process.env.HTTPS_PROXY ||
      process.env.https_proxy ||
      process.env.HTTP_PROXY ||
      process.env.http_proxy || null
  }

  // if none of that works, return null
  // (What uri protocol are you using then?)

  return null
}

module.exports = getProxyFromURI


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(39)
var qs = __webpack_require__(13)
var validate = __webpack_require__(40)
var extend = __webpack_require__(4)

function Har (request) {
  this.request = request
}

Har.prototype.reducer = function (obj, pair) {
  // new property ?
  if (obj[pair.name] === undefined) {
    obj[pair.name] = pair.value
    return obj
  }

  // existing? convert to array
  var arr = [
    obj[pair.name],
    pair.value
  ]

  obj[pair.name] = arr

  return obj
}

Har.prototype.prep = function (data) {
  // construct utility properties
  data.queryObj = {}
  data.headersObj = {}
  data.postData.jsonObj = false
  data.postData.paramsObj = false

  // construct query objects
  if (data.queryString && data.queryString.length) {
    data.queryObj = data.queryString.reduce(this.reducer, {})
  }

  // construct headers objects
  if (data.headers && data.headers.length) {
    // loweCase header keys
    data.headersObj = data.headers.reduceRight(function (headers, header) {
      headers[header.name] = header.value
      return headers
    }, {})
  }

  // construct Cookie header
  if (data.cookies && data.cookies.length) {
    var cookies = data.cookies.map(function (cookie) {
      return cookie.name + '=' + cookie.value
    })

    if (cookies.length) {
      data.headersObj.cookie = cookies.join('; ')
    }
  }

  // prep body
  function some (arr) {
    return arr.some(function (type) {
      return data.postData.mimeType.indexOf(type) === 0
    })
  }

  if (some([
    'multipart/mixed',
    'multipart/related',
    'multipart/form-data',
    'multipart/alternative'])) {
    // reset values
    data.postData.mimeType = 'multipart/form-data'
  } else if (some([
    'application/x-www-form-urlencoded'])) {
    if (!data.postData.params) {
      data.postData.text = ''
    } else {
      data.postData.paramsObj = data.postData.params.reduce(this.reducer, {})

      // always overwrite
      data.postData.text = qs.stringify(data.postData.paramsObj)
    }
  } else if (some([
    'text/json',
    'text/x-json',
    'application/json',
    'application/x-json'])) {
    data.postData.mimeType = 'application/json'

    if (data.postData.text) {
      try {
        data.postData.jsonObj = JSON.parse(data.postData.text)
      } catch (e) {
        this.request.debug(e)

        // force back to text/plain
        data.postData.mimeType = 'text/plain'
      }
    }
  }

  return data
}

Har.prototype.options = function (options) {
  // skip if no har property defined
  if (!options.har) {
    return options
  }

  var har = {}
  extend(har, options.har)

  // only process the first entry
  if (har.log && har.log.entries) {
    har = har.log.entries[0]
  }

  // add optional properties to make validation successful
  har.url = har.url || options.url || options.uri || options.baseUrl || '/'
  har.httpVersion = har.httpVersion || 'HTTP/1.1'
  har.queryString = har.queryString || []
  har.headers = har.headers || []
  har.cookies = har.cookies || []
  har.postData = har.postData || {}
  har.postData.mimeType = har.postData.mimeType || 'application/octet-stream'

  har.bodySize = 0
  har.headersSize = 0
  har.postData.size = 0

  if (!validate.request(har)) {
    return options
  }

  // clean up and get some utility properties
  var req = this.prep(har)

  // construct new options
  if (req.url) {
    options.url = req.url
  }

  if (req.method) {
    options.method = req.method
  }

  if (Object.keys(req.queryObj).length) {
    options.qs = req.queryObj
  }

  if (Object.keys(req.headersObj).length) {
    options.headers = req.headersObj
  }

  function test (type) {
    return req.postData.mimeType.indexOf(type) === 0
  }
  if (test('application/x-www-form-urlencoded')) {
    options.form = req.postData.paramsObj
  } else if (test('application/json')) {
    if (req.postData.jsonObj) {
      options.body = req.postData.jsonObj
      options.json = true
    }
  } else if (test('multipart/form-data')) {
    options.formData = {}

    req.postData.params.forEach(function (param) {
      var attachment = {}

      if (!param.fileName && !param.fileName && !param.contentType) {
        options.formData[param.name] = param.value
        return
      }

      // attempt to read from disk!
      if (param.fileName && !param.value) {
        attachment.value = fs.createReadStream(param.fileName)
      } else if (param.value) {
        attachment.value = param.value
      }

      if (param.fileName) {
        attachment.options = {
          filename: param.fileName,
          contentType: param.contentType ? param.contentType : null
        }
      }

      options.formData[param.name] = attachment
    })
  } else {
    if (req.postData.text) {
      options.body = req.postData.text
    }
  }

  return options
}

exports.Har = Har


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uuid = __webpack_require__(5)
var CombinedStream = __webpack_require__(36)
var isstream = __webpack_require__(11)
var Buffer = __webpack_require__(0).Buffer

function Multipart (request) {
  this.request = request
  this.boundary = uuid()
  this.chunked = false
  this.body = null
}

Multipart.prototype.isChunked = function (options) {
  var self = this
  var chunked = false
  var parts = options.data || options

  if (!parts.forEach) {
    self.request.emit('error', new Error('Argument error, options.multipart.'))
  }

  if (options.chunked !== undefined) {
    chunked = options.chunked
  }

  if (self.request.getHeader('transfer-encoding') === 'chunked') {
    chunked = true
  }

  if (!chunked) {
    parts.forEach(function (part) {
      if (typeof part.body === 'undefined') {
        self.request.emit('error', new Error('Body attribute missing in multipart.'))
      }
      if (isstream(part.body)) {
        chunked = true
      }
    })
  }

  return chunked
}

Multipart.prototype.setHeaders = function (chunked) {
  var self = this

  if (chunked && !self.request.hasHeader('transfer-encoding')) {
    self.request.setHeader('transfer-encoding', 'chunked')
  }

  var header = self.request.getHeader('content-type')

  if (!header || header.indexOf('multipart') === -1) {
    self.request.setHeader('content-type', 'multipart/related; boundary=' + self.boundary)
  } else {
    if (header.indexOf('boundary') !== -1) {
      self.boundary = header.replace(/.*boundary=([^\s;]+).*/, '$1')
    } else {
      self.request.setHeader('content-type', header + '; boundary=' + self.boundary)
    }
  }
}

Multipart.prototype.build = function (parts, chunked) {
  var self = this
  var body = chunked ? new CombinedStream() : []

  function add (part) {
    if (typeof part === 'number') {
      part = part.toString()
    }
    return chunked ? body.append(part) : body.push(Buffer.from(part))
  }

  if (self.request.preambleCRLF) {
    add('\r\n')
  }

  parts.forEach(function (part) {
    var preamble = '--' + self.boundary + '\r\n'
    Object.keys(part).forEach(function (key) {
      if (key === 'body') { return }
      preamble += key + ': ' + part[key] + '\r\n'
    })
    preamble += '\r\n'
    add(preamble)
    add(part.body)
    add('\r\n')
  })
  add('--' + self.boundary + '--')

  if (self.request.postambleCRLF) {
    add('\r\n')
  }

  return body
}

Multipart.prototype.onRequest = function (options) {
  var self = this

  var chunked = self.isChunked(options)
  var parts = options.data || options

  self.setHeaders(chunked)
  self.chunked = chunked
  self.body = self.build(parts, chunked)
}

exports.Multipart = Multipart


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(1)
var qs = __webpack_require__(12)
var caseless = __webpack_require__(3)
var uuid = __webpack_require__(5)
var oauth = __webpack_require__(48)
var crypto = __webpack_require__(9)
var Buffer = __webpack_require__(0).Buffer

function OAuth (request) {
  this.request = request
  this.params = null
}

OAuth.prototype.buildParams = function (_oauth, uri, method, query, form, qsLib) {
  var oa = {}
  for (var i in _oauth) {
    oa['oauth_' + i] = _oauth[i]
  }
  if (!oa.oauth_version) {
    oa.oauth_version = '1.0'
  }
  if (!oa.oauth_timestamp) {
    oa.oauth_timestamp = Math.floor(Date.now() / 1000).toString()
  }
  if (!oa.oauth_nonce) {
    oa.oauth_nonce = uuid().replace(/-/g, '')
  }
  if (!oa.oauth_signature_method) {
    oa.oauth_signature_method = 'HMAC-SHA1'
  }

  var consumer_secret_or_private_key = oa.oauth_consumer_secret || oa.oauth_private_key // eslint-disable-line camelcase
  delete oa.oauth_consumer_secret
  delete oa.oauth_private_key

  var token_secret = oa.oauth_token_secret // eslint-disable-line camelcase
  delete oa.oauth_token_secret

  var realm = oa.oauth_realm
  delete oa.oauth_realm
  delete oa.oauth_transport_method

  var baseurl = uri.protocol + '//' + uri.host + uri.pathname
  var params = qsLib.parse([].concat(query, form, qsLib.stringify(oa)).join('&'))

  oa.oauth_signature = oauth.sign(
    oa.oauth_signature_method,
    method,
    baseurl,
    params,
    consumer_secret_or_private_key, // eslint-disable-line camelcase
    token_secret // eslint-disable-line camelcase
  )

  if (realm) {
    oa.realm = realm
  }

  return oa
}

OAuth.prototype.buildBodyHash = function (_oauth, body) {
  if (['HMAC-SHA1', 'RSA-SHA1'].indexOf(_oauth.signature_method || 'HMAC-SHA1') < 0) {
    this.request.emit('error', new Error('oauth: ' + _oauth.signature_method +
      ' signature_method not supported with body_hash signing.'))
  }

  var shasum = crypto.createHash('sha1')
  shasum.update(body || '')
  var sha1 = shasum.digest('hex')

  return Buffer.from(sha1, 'hex').toString('base64')
}

OAuth.prototype.concatParams = function (oa, sep, wrap) {
  wrap = wrap || ''

  var params = Object.keys(oa).filter(function (i) {
    return i !== 'realm' && i !== 'oauth_signature'
  }).sort()

  if (oa.realm) {
    params.splice(0, 0, 'realm')
  }
  params.push('oauth_signature')

  return params.map(function (i) {
    return i + '=' + wrap + oauth.rfc3986(oa[i]) + wrap
  }).join(sep)
}

OAuth.prototype.onRequest = function (_oauth) {
  var self = this
  self.params = _oauth

  var uri = self.request.uri || {}
  var method = self.request.method || ''
  var headers = caseless(self.request.headers)
  var body = self.request.body || ''
  var qsLib = self.request.qsLib || qs

  var form
  var query
  var contentType = headers.get('content-type') || ''
  var formContentType = 'application/x-www-form-urlencoded'
  var transport = _oauth.transport_method || 'header'

  if (contentType.slice(0, formContentType.length) === formContentType) {
    contentType = formContentType
    form = body
  }
  if (uri.query) {
    query = uri.query
  }
  if (transport === 'body' && (method !== 'POST' || contentType !== formContentType)) {
    self.request.emit('error', new Error('oauth: transport_method of body requires POST ' +
      'and content-type ' + formContentType))
  }

  if (!form && typeof _oauth.body_hash === 'boolean') {
    _oauth.body_hash = self.buildBodyHash(_oauth, self.request.body.toString())
  }

  var oa = self.buildParams(_oauth, uri, method, query, form, qsLib)

  switch (transport) {
    case 'header':
      self.request.setHeader('Authorization', 'OAuth ' + self.concatParams(oa, ',', '"'))
      break

    case 'query':
      var href = self.request.uri.href += (query ? '&' : '?') + self.concatParams(oa, '&')
      self.request.uri = url.parse(href)
      self.request.path = self.request.uri.path
      break

    case 'body':
      self.request.body = (form ? form + '&' : '') + self.concatParams(oa, '&')
      break

    default:
      self.request.emit('error', new Error('oauth: transport_method invalid'))
  }
}

exports.OAuth = OAuth


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var qs = __webpack_require__(12)
var querystring = __webpack_require__(13)

function Querystring (request) {
  this.request = request
  this.lib = null
  this.useQuerystring = null
  this.parseOptions = null
  this.stringifyOptions = null
}

Querystring.prototype.init = function (options) {
  if (this.lib) { return }

  this.useQuerystring = options.useQuerystring
  this.lib = (this.useQuerystring ? querystring : qs)

  this.parseOptions = options.qsParseOptions || {}
  this.stringifyOptions = options.qsStringifyOptions || {}
}

Querystring.prototype.stringify = function (obj) {
  return (this.useQuerystring)
    ? this.rfc3986(this.lib.stringify(obj,
      this.stringifyOptions.sep || null,
      this.stringifyOptions.eq || null,
      this.stringifyOptions))
    : this.lib.stringify(obj, this.stringifyOptions)
}

Querystring.prototype.parse = function (str) {
  return (this.useQuerystring)
    ? this.lib.parse(str,
      this.parseOptions.sep || null,
      this.parseOptions.eq || null,
      this.parseOptions)
    : this.lib.parse(str, this.parseOptions)
}

Querystring.prototype.rfc3986 = function (str) {
  return str.replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

Querystring.prototype.unescape = querystring.unescape

exports.Querystring = Querystring


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(1)
var isUrl = /^https?:/

function Redirect (request) {
  this.request = request
  this.followRedirect = true
  this.followRedirects = true
  this.followAllRedirects = false
  this.followOriginalHttpMethod = false
  this.allowRedirect = function () { return true }
  this.maxRedirects = 10
  this.redirects = []
  this.redirectsFollowed = 0
  this.removeRefererHeader = false
}

Redirect.prototype.onRequest = function (options) {
  var self = this

  if (options.maxRedirects !== undefined) {
    self.maxRedirects = options.maxRedirects
  }
  if (typeof options.followRedirect === 'function') {
    self.allowRedirect = options.followRedirect
  }
  if (options.followRedirect !== undefined) {
    self.followRedirects = !!options.followRedirect
  }
  if (options.followAllRedirects !== undefined) {
    self.followAllRedirects = options.followAllRedirects
  }
  if (self.followRedirects || self.followAllRedirects) {
    self.redirects = self.redirects || []
  }
  if (options.removeRefererHeader !== undefined) {
    self.removeRefererHeader = options.removeRefererHeader
  }
  if (options.followOriginalHttpMethod !== undefined) {
    self.followOriginalHttpMethod = options.followOriginalHttpMethod
  }
}

Redirect.prototype.redirectTo = function (response) {
  var self = this
  var request = self.request

  var redirectTo = null
  if (response.statusCode >= 300 && response.statusCode < 400 && response.caseless.has('location')) {
    var location = response.caseless.get('location')
    request.debug('redirect', location)

    if (self.followAllRedirects) {
      redirectTo = location
    } else if (self.followRedirects) {
      switch (request.method) {
        case 'PATCH':
        case 'PUT':
        case 'POST':
        case 'DELETE':
          // Do not follow redirects
          break
        default:
          redirectTo = location
          break
      }
    }
  } else if (response.statusCode === 401) {
    var authHeader = request._auth.onResponse(response)
    if (authHeader) {
      request.setHeader('authorization', authHeader)
      redirectTo = request.uri
    }
  }
  return redirectTo
}

Redirect.prototype.onResponse = function (response) {
  var self = this
  var request = self.request

  var redirectTo = self.redirectTo(response)
  if (!redirectTo || !self.allowRedirect.call(request, response)) {
    return false
  }

  request.debug('redirect to', redirectTo)

  // ignore any potential response body.  it cannot possibly be useful
  // to us at this point.
  // response.resume should be defined, but check anyway before calling. Workaround for browserify.
  if (response.resume) {
    response.resume()
  }

  if (self.redirectsFollowed >= self.maxRedirects) {
    request.emit('error', new Error('Exceeded maxRedirects. Probably stuck in a redirect loop ' + request.uri.href))
    return false
  }
  self.redirectsFollowed += 1

  if (!isUrl.test(redirectTo)) {
    redirectTo = url.resolve(request.uri.href, redirectTo)
  }

  var uriPrev = request.uri
  request.uri = url.parse(redirectTo)

  // handle the case where we change protocol from https to http or vice versa
  if (request.uri.protocol !== uriPrev.protocol) {
    delete request.agent
  }

  self.redirects.push({ statusCode: response.statusCode, redirectUri: redirectTo })

  if (self.followAllRedirects && request.method !== 'HEAD' &&
    response.statusCode !== 401 && response.statusCode !== 307) {
    request.method = self.followOriginalHttpMethod ? request.method : 'GET'
  }
  // request.method = 'GET' // Force all redirects to use GET || commented out fixes #215
  delete request.src
  delete request.req
  delete request._started
  if (response.statusCode !== 401 && response.statusCode !== 307) {
    // Remove parameters from the previous response, unless this is the second request
    // for a server that requires digest authentication.
    delete request.body
    delete request._form
    if (request.headers) {
      request.removeHeader('host')
      request.removeHeader('content-type')
      request.removeHeader('content-length')
      if (request.uri.hostname !== request.originalHost.split(':')[0]) {
        // Remove authorization if changing hostnames (but not if just
        // changing ports or protocols).  This matches the behavior of curl:
        // https://github.com/bagder/curl/blob/6beb0eee/lib/http.c#L710
        request.removeHeader('authorization')
      }
    }
  }

  if (!self.removeRefererHeader) {
    request.setHeader('referer', uriPrev.href)
  }

  request.emit('redirect')

  request.init()

  return true
}

exports.Redirect = Redirect


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(1)
var tunnel = __webpack_require__(53)

var defaultProxyHeaderWhiteList = [
  'accept',
  'accept-charset',
  'accept-encoding',
  'accept-language',
  'accept-ranges',
  'cache-control',
  'content-encoding',
  'content-language',
  'content-location',
  'content-md5',
  'content-range',
  'content-type',
  'connection',
  'date',
  'expect',
  'max-forwards',
  'pragma',
  'referer',
  'te',
  'user-agent',
  'via'
]

var defaultProxyHeaderExclusiveList = [
  'proxy-authorization'
]

function constructProxyHost (uriObject) {
  var port = uriObject.port
  var protocol = uriObject.protocol
  var proxyHost = uriObject.hostname + ':'

  if (port) {
    proxyHost += port
  } else if (protocol === 'https:') {
    proxyHost += '443'
  } else {
    proxyHost += '80'
  }

  return proxyHost
}

function constructProxyHeaderWhiteList (headers, proxyHeaderWhiteList) {
  var whiteList = proxyHeaderWhiteList
    .reduce(function (set, header) {
      set[header.toLowerCase()] = true
      return set
    }, {})

  return Object.keys(headers)
    .filter(function (header) {
      return whiteList[header.toLowerCase()]
    })
    .reduce(function (set, header) {
      set[header] = headers[header]
      return set
    }, {})
}

function constructTunnelOptions (request, proxyHeaders) {
  var proxy = request.proxy

  var tunnelOptions = {
    proxy: {
      host: proxy.hostname,
      port: +proxy.port,
      proxyAuth: proxy.auth,
      headers: proxyHeaders
    },
    headers: request.headers,
    ca: request.ca,
    cert: request.cert,
    key: request.key,
    passphrase: request.passphrase,
    pfx: request.pfx,
    ciphers: request.ciphers,
    rejectUnauthorized: request.rejectUnauthorized,
    secureOptions: request.secureOptions,
    secureProtocol: request.secureProtocol
  }

  return tunnelOptions
}

function constructTunnelFnName (uri, proxy) {
  var uriProtocol = (uri.protocol === 'https:' ? 'https' : 'http')
  var proxyProtocol = (proxy.protocol === 'https:' ? 'Https' : 'Http')
  return [uriProtocol, proxyProtocol].join('Over')
}

function getTunnelFn (request) {
  var uri = request.uri
  var proxy = request.proxy
  var tunnelFnName = constructTunnelFnName(uri, proxy)
  return tunnel[tunnelFnName]
}

function Tunnel (request) {
  this.request = request
  this.proxyHeaderWhiteList = defaultProxyHeaderWhiteList
  this.proxyHeaderExclusiveList = []
  if (typeof request.tunnel !== 'undefined') {
    this.tunnelOverride = request.tunnel
  }
}

Tunnel.prototype.isEnabled = function () {
  var self = this
  var request = self.request
    // Tunnel HTTPS by default. Allow the user to override this setting.

  // If self.tunnelOverride is set (the user specified a value), use it.
  if (typeof self.tunnelOverride !== 'undefined') {
    return self.tunnelOverride
  }

  // If the destination is HTTPS, tunnel.
  if (request.uri.protocol === 'https:') {
    return true
  }

  // Otherwise, do not use tunnel.
  return false
}

Tunnel.prototype.setup = function (options) {
  var self = this
  var request = self.request

  options = options || {}

  if (typeof request.proxy === 'string') {
    request.proxy = url.parse(request.proxy)
  }

  if (!request.proxy || !request.tunnel) {
    return false
  }

  // Setup Proxy Header Exclusive List and White List
  if (options.proxyHeaderWhiteList) {
    self.proxyHeaderWhiteList = options.proxyHeaderWhiteList
  }
  if (options.proxyHeaderExclusiveList) {
    self.proxyHeaderExclusiveList = options.proxyHeaderExclusiveList
  }

  var proxyHeaderExclusiveList = self.proxyHeaderExclusiveList.concat(defaultProxyHeaderExclusiveList)
  var proxyHeaderWhiteList = self.proxyHeaderWhiteList.concat(proxyHeaderExclusiveList)

  // Setup Proxy Headers and Proxy Headers Host
  // Only send the Proxy White Listed Header names
  var proxyHeaders = constructProxyHeaderWhiteList(request.headers, proxyHeaderWhiteList)
  proxyHeaders.host = constructProxyHost(request.uri)

  proxyHeaderExclusiveList.forEach(request.removeHeader, request)

  // Set Agent from Tunnel Data
  var tunnelFn = getTunnelFn(request)
  var tunnelOptions = constructTunnelOptions(request, proxyHeaders)
  request.agent = tunnelFn(tunnelOptions)

  return true
}

Tunnel.defaultProxyHeaderWhiteList = defaultProxyHeaderWhiteList
Tunnel.defaultProxyHeaderExclusiveList = defaultProxyHeaderExclusiveList
exports.Tunnel = Tunnel


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var http = __webpack_require__(42)
var https = __webpack_require__(44)
var url = __webpack_require__(1)
var util = __webpack_require__(54)
var stream = __webpack_require__(50)
var zlib = __webpack_require__(55)
var hawk = __webpack_require__(41)
var aws2 = __webpack_require__(34)
var aws4 = __webpack_require__(35)
var httpSignature = __webpack_require__(43)
var mime = __webpack_require__(47)
var stringstream = __webpack_require__(51)
var caseless = __webpack_require__(3)
var ForeverAgent = __webpack_require__(37)
var FormData = __webpack_require__(38)
var extend = __webpack_require__(4)
var isstream = __webpack_require__(11)
var isTypedArray = __webpack_require__(45).strict
var helpers = __webpack_require__(2)
var cookies = __webpack_require__(8)
var getProxyFromURI = __webpack_require__(25)
var Querystring = __webpack_require__(29).Querystring
var Har = __webpack_require__(26).Har
var Auth = __webpack_require__(24).Auth
var OAuth = __webpack_require__(28).OAuth
var Multipart = __webpack_require__(27).Multipart
var Redirect = __webpack_require__(30).Redirect
var Tunnel = __webpack_require__(31).Tunnel
var now = __webpack_require__(49)
var Buffer = __webpack_require__(0).Buffer

var safeStringify = helpers.safeStringify
var isReadStream = helpers.isReadStream
var toBase64 = helpers.toBase64
var defer = helpers.defer
var copy = helpers.copy
var version = helpers.version
var globalCookieJar = cookies.jar()

var globalPool = {}

function filterForNonReserved (reserved, options) {
  // Filter out properties that are not reserved.
  // Reserved values are passed in at call site.

  var object = {}
  for (var i in options) {
    var notReserved = (reserved.indexOf(i) === -1)
    if (notReserved) {
      object[i] = options[i]
    }
  }
  return object
}

function filterOutReservedFunctions (reserved, options) {
  // Filter out properties that are functions and are reserved.
  // Reserved values are passed in at call site.

  var object = {}
  for (var i in options) {
    var isReserved = !(reserved.indexOf(i) === -1)
    var isFunction = (typeof options[i] === 'function')
    if (!(isReserved && isFunction)) {
      object[i] = options[i]
    }
  }
  return object
}

// Return a simpler request object to allow serialization
function requestToJSON () {
  var self = this
  return {
    uri: self.uri,
    method: self.method,
    headers: self.headers
  }
}

// Return a simpler response object to allow serialization
function responseToJSON () {
  var self = this
  return {
    statusCode: self.statusCode,
    body: self.body,
    headers: self.headers,
    request: requestToJSON.call(self.request)
  }
}

function Request (options) {
  // if given the method property in options, set property explicitMethod to true

  // extend the Request instance with any non-reserved properties
  // remove any reserved functions from the options object
  // set Request instance to be readable and writable
  // call init

  var self = this

  // start with HAR, then override with additional options
  if (options.har) {
    self._har = new Har(self)
    options = self._har.options(options)
  }

  stream.Stream.call(self)
  var reserved = Object.keys(Request.prototype)
  var nonReserved = filterForNonReserved(reserved, options)

  extend(self, nonReserved)
  options = filterOutReservedFunctions(reserved, options)

  self.readable = true
  self.writable = true
  if (options.method) {
    self.explicitMethod = true
  }
  self._qs = new Querystring(self)
  self._auth = new Auth(self)
  self._oauth = new OAuth(self)
  self._multipart = new Multipart(self)
  self._redirect = new Redirect(self)
  self._tunnel = new Tunnel(self)
  self.init(options)
}

util.inherits(Request, stream.Stream)

// Debugging
Request.debug = process.env.NODE_DEBUG && /\brequest\b/.test(process.env.NODE_DEBUG)
function debug () {
  if (Request.debug) {
    console.error('REQUEST %s', util.format.apply(util, arguments))
  }
}
Request.prototype.debug = debug

Request.prototype.init = function (options) {
  // init() contains all the code to setup the request object.
  // the actual outgoing request is not started until start() is called
  // this function is called from both the constructor and on redirect.
  var self = this
  if (!options) {
    options = {}
  }
  self.headers = self.headers ? copy(self.headers) : {}

  // Delete headers with value undefined since they break
  // ClientRequest.OutgoingMessage.setHeader in node 0.12
  for (var headerName in self.headers) {
    if (typeof self.headers[headerName] === 'undefined') {
      delete self.headers[headerName]
    }
  }

  caseless.httpify(self, self.headers)

  if (!self.method) {
    self.method = options.method || 'GET'
  }
  if (!self.localAddress) {
    self.localAddress = options.localAddress
  }

  self._qs.init(options)

  debug(options)
  if (!self.pool && self.pool !== false) {
    self.pool = globalPool
  }
  self.dests = self.dests || []
  self.__isRequestRequest = true

  // Protect against double callback
  if (!self._callback && self.callback) {
    self._callback = self.callback
    self.callback = function () {
      if (self._callbackCalled) {
        return // Print a warning maybe?
      }
      self._callbackCalled = true
      self._callback.apply(self, arguments)
    }
    self.on('error', self.callback.bind())
    self.on('complete', self.callback.bind(self, null))
  }

  // People use this property instead all the time, so support it
  if (!self.uri && self.url) {
    self.uri = self.url
    delete self.url
  }

  // If there's a baseUrl, then use it as the base URL (i.e. uri must be
  // specified as a relative path and is appended to baseUrl).
  if (self.baseUrl) {
    if (typeof self.baseUrl !== 'string') {
      return self.emit('error', new Error('options.baseUrl must be a string'))
    }

    if (typeof self.uri !== 'string') {
      return self.emit('error', new Error('options.uri must be a string when using options.baseUrl'))
    }

    if (self.uri.indexOf('//') === 0 || self.uri.indexOf('://') !== -1) {
      return self.emit('error', new Error('options.uri must be a path when using options.baseUrl'))
    }

    // Handle all cases to make sure that there's only one slash between
    // baseUrl and uri.
    var baseUrlEndsWithSlash = self.baseUrl.lastIndexOf('/') === self.baseUrl.length - 1
    var uriStartsWithSlash = self.uri.indexOf('/') === 0

    if (baseUrlEndsWithSlash && uriStartsWithSlash) {
      self.uri = self.baseUrl + self.uri.slice(1)
    } else if (baseUrlEndsWithSlash || uriStartsWithSlash) {
      self.uri = self.baseUrl + self.uri
    } else if (self.uri === '') {
      self.uri = self.baseUrl
    } else {
      self.uri = self.baseUrl + '/' + self.uri
    }
    delete self.baseUrl
  }

  // A URI is needed by this point, emit error if we haven't been able to get one
  if (!self.uri) {
    return self.emit('error', new Error('options.uri is a required argument'))
  }

  // If a string URI/URL was given, parse it into a URL object
  if (typeof self.uri === 'string') {
    self.uri = url.parse(self.uri)
  }

  // Some URL objects are not from a URL parsed string and need href added
  if (!self.uri.href) {
    self.uri.href = url.format(self.uri)
  }

  // DEPRECATED: Warning for users of the old Unix Sockets URL Scheme
  if (self.uri.protocol === 'unix:') {
    return self.emit('error', new Error('`unix://` URL scheme is no longer supported. Please use the format `http://unix:SOCKET:PATH`'))
  }

  // Support Unix Sockets
  if (self.uri.host === 'unix') {
    self.enableUnixSocket()
  }

  if (self.strictSSL === false) {
    self.rejectUnauthorized = false
  }

  if (!self.uri.pathname) { self.uri.pathname = '/' }

  if (!(self.uri.host || (self.uri.hostname && self.uri.port)) && !self.uri.isUnix) {
    // Invalid URI: it may generate lot of bad errors, like 'TypeError: Cannot call method `indexOf` of undefined' in CookieJar
    // Detect and reject it as soon as possible
    var faultyUri = url.format(self.uri)
    var message = 'Invalid URI "' + faultyUri + '"'
    if (Object.keys(options).length === 0) {
      // No option ? This can be the sign of a redirect
      // As this is a case where the user cannot do anything (they didn't call request directly with this URL)
      // they should be warned that it can be caused by a redirection (can save some hair)
      message += '. This can be caused by a crappy redirection.'
    }
    // This error was fatal
    self.abort()
    return self.emit('error', new Error(message))
  }

  if (!self.hasOwnProperty('proxy')) {
    self.proxy = getProxyFromURI(self.uri)
  }

  self.tunnel = self._tunnel.isEnabled()
  if (self.proxy) {
    self._tunnel.setup(options)
  }

  self._redirect.onRequest(options)

  self.setHost = false
  if (!self.hasHeader('host')) {
    var hostHeaderName = self.originalHostHeaderName || 'host'
    // When used with an IPv6 address, `host` will provide
    // the correct bracketed format, unlike using `hostname` and
    // optionally adding the `port` when necessary.
    self.setHeader(hostHeaderName, self.uri.host)
    self.setHost = true
  }

  self.jar(self._jar || options.jar)

  if (!self.uri.port) {
    if (self.uri.protocol === 'http:') { self.uri.port = 80 } else if (self.uri.protocol === 'https:') { self.uri.port = 443 }
  }

  if (self.proxy && !self.tunnel) {
    self.port = self.proxy.port
    self.host = self.proxy.hostname
  } else {
    self.port = self.uri.port
    self.host = self.uri.hostname
  }

  if (options.form) {
    self.form(options.form)
  }

  if (options.formData) {
    var formData = options.formData
    var requestForm = self.form()
    var appendFormValue = function (key, value) {
      if (value && value.hasOwnProperty('value') && value.hasOwnProperty('options')) {
        requestForm.append(key, value.value, value.options)
      } else {
        requestForm.append(key, value)
      }
    }
    for (var formKey in formData) {
      if (formData.hasOwnProperty(formKey)) {
        var formValue = formData[formKey]
        if (formValue instanceof Array) {
          for (var j = 0; j < formValue.length; j++) {
            appendFormValue(formKey, formValue[j])
          }
        } else {
          appendFormValue(formKey, formValue)
        }
      }
    }
  }

  if (options.qs) {
    self.qs(options.qs)
  }

  if (self.uri.path) {
    self.path = self.uri.path
  } else {
    self.path = self.uri.pathname + (self.uri.search || '')
  }

  if (self.path.length === 0) {
    self.path = '/'
  }

  // Auth must happen last in case signing is dependent on other headers
  if (options.aws) {
    self.aws(options.aws)
  }

  if (options.hawk) {
    self.hawk(options.hawk)
  }

  if (options.httpSignature) {
    self.httpSignature(options.httpSignature)
  }

  if (options.auth) {
    if (Object.prototype.hasOwnProperty.call(options.auth, 'username')) {
      options.auth.user = options.auth.username
    }
    if (Object.prototype.hasOwnProperty.call(options.auth, 'password')) {
      options.auth.pass = options.auth.password
    }

    self.auth(
      options.auth.user,
      options.auth.pass,
      options.auth.sendImmediately,
      options.auth.bearer
    )
  }

  if (self.gzip && !self.hasHeader('accept-encoding')) {
    self.setHeader('accept-encoding', 'gzip, deflate')
  }

  if (self.uri.auth && !self.hasHeader('authorization')) {
    var uriAuthPieces = self.uri.auth.split(':').map(function (item) { return self._qs.unescape(item) })
    self.auth(uriAuthPieces[0], uriAuthPieces.slice(1).join(':'), true)
  }

  if (!self.tunnel && self.proxy && self.proxy.auth && !self.hasHeader('proxy-authorization')) {
    var proxyAuthPieces = self.proxy.auth.split(':').map(function (item) { return self._qs.unescape(item) })
    var authHeader = 'Basic ' + toBase64(proxyAuthPieces.join(':'))
    self.setHeader('proxy-authorization', authHeader)
  }

  if (self.proxy && !self.tunnel) {
    self.path = (self.uri.protocol + '//' + self.uri.host + self.path)
  }

  if (options.json) {
    self.json(options.json)
  }
  if (options.multipart) {
    self.multipart(options.multipart)
  }

  if (options.time) {
    self.timing = true

    // NOTE: elapsedTime is deprecated in favor of .timings
    self.elapsedTime = self.elapsedTime || 0
  }

  function setContentLength () {
    if (isTypedArray(self.body)) {
      self.body = Buffer.from(self.body)
    }

    if (!self.hasHeader('content-length')) {
      var length
      if (typeof self.body === 'string') {
        length = Buffer.byteLength(self.body)
      } else if (Array.isArray(self.body)) {
        length = self.body.reduce(function (a, b) { return a + b.length }, 0)
      } else {
        length = self.body.length
      }

      if (length) {
        self.setHeader('content-length', length)
      } else {
        self.emit('error', new Error('Argument error, options.body.'))
      }
    }
  }
  if (self.body && !isstream(self.body)) {
    setContentLength()
  }

  if (options.oauth) {
    self.oauth(options.oauth)
  } else if (self._oauth.params && self.hasHeader('authorization')) {
    self.oauth(self._oauth.params)
  }

  var protocol = self.proxy && !self.tunnel ? self.proxy.protocol : self.uri.protocol
  var defaultModules = {'http:': http, 'https:': https}
  var httpModules = self.httpModules || {}

  self.httpModule = httpModules[protocol] || defaultModules[protocol]

  if (!self.httpModule) {
    return self.emit('error', new Error('Invalid protocol: ' + protocol))
  }

  if (options.ca) {
    self.ca = options.ca
  }

  if (!self.agent) {
    if (options.agentOptions) {
      self.agentOptions = options.agentOptions
    }

    if (options.agentClass) {
      self.agentClass = options.agentClass
    } else if (options.forever) {
      var v = version()
      // use ForeverAgent in node 0.10- only
      if (v.major === 0 && v.minor <= 10) {
        self.agentClass = protocol === 'http:' ? ForeverAgent : ForeverAgent.SSL
      } else {
        self.agentClass = self.httpModule.Agent
        self.agentOptions = self.agentOptions || {}
        self.agentOptions.keepAlive = true
      }
    } else {
      self.agentClass = self.httpModule.Agent
    }
  }

  if (self.pool === false) {
    self.agent = false
  } else {
    self.agent = self.agent || self.getNewAgent()
  }

  self.on('pipe', function (src) {
    if (self.ntick && self._started) {
      self.emit('error', new Error('You cannot pipe to this stream after the outbound request has started.'))
    }
    self.src = src
    if (isReadStream(src)) {
      if (!self.hasHeader('content-type')) {
        self.setHeader('content-type', mime.lookup(src.path))
      }
    } else {
      if (src.headers) {
        for (var i in src.headers) {
          if (!self.hasHeader(i)) {
            self.setHeader(i, src.headers[i])
          }
        }
      }
      if (self._json && !self.hasHeader('content-type')) {
        self.setHeader('content-type', 'application/json')
      }
      if (src.method && !self.explicitMethod) {
        self.method = src.method
      }
    }

  // self.on('pipe', function () {
  //   console.error('You have already piped to this stream. Pipeing twice is likely to break the request.')
  // })
  })

  defer(function () {
    if (self._aborted) {
      return
    }

    var end = function () {
      if (self._form) {
        if (!self._auth.hasAuth) {
          self._form.pipe(self)
        } else if (self._auth.hasAuth && self._auth.sentAuth) {
          self._form.pipe(self)
        }
      }
      if (self._multipart && self._multipart.chunked) {
        self._multipart.body.pipe(self)
      }
      if (self.body) {
        if (isstream(self.body)) {
          self.body.pipe(self)
        } else {
          setContentLength()
          if (Array.isArray(self.body)) {
            self.body.forEach(function (part) {
              self.write(part)
            })
          } else {
            self.write(self.body)
          }
          self.end()
        }
      } else if (self.requestBodyStream) {
        console.warn('options.requestBodyStream is deprecated, please pass the request object to stream.pipe.')
        self.requestBodyStream.pipe(self)
      } else if (!self.src) {
        if (self._auth.hasAuth && !self._auth.sentAuth) {
          self.end()
          return
        }
        if (self.method !== 'GET' && typeof self.method !== 'undefined') {
          self.setHeader('content-length', 0)
        }
        self.end()
      }
    }

    if (self._form && !self.hasHeader('content-length')) {
      // Before ending the request, we had to compute the length of the whole form, asyncly
      self.setHeader(self._form.getHeaders(), true)
      self._form.getLength(function (err, length) {
        if (!err && !isNaN(length)) {
          self.setHeader('content-length', length)
        }
        end()
      })
    } else {
      end()
    }

    self.ntick = true
  })
}

Request.prototype.getNewAgent = function () {
  var self = this
  var Agent = self.agentClass
  var options = {}
  if (self.agentOptions) {
    for (var i in self.agentOptions) {
      options[i] = self.agentOptions[i]
    }
  }
  if (self.ca) {
    options.ca = self.ca
  }
  if (self.ciphers) {
    options.ciphers = self.ciphers
  }
  if (self.secureProtocol) {
    options.secureProtocol = self.secureProtocol
  }
  if (self.secureOptions) {
    options.secureOptions = self.secureOptions
  }
  if (typeof self.rejectUnauthorized !== 'undefined') {
    options.rejectUnauthorized = self.rejectUnauthorized
  }

  if (self.cert && self.key) {
    options.key = self.key
    options.cert = self.cert
  }

  if (self.pfx) {
    options.pfx = self.pfx
  }

  if (self.passphrase) {
    options.passphrase = self.passphrase
  }

  var poolKey = ''

  // different types of agents are in different pools
  if (Agent !== self.httpModule.Agent) {
    poolKey += Agent.name
  }

  // ca option is only relevant if proxy or destination are https
  var proxy = self.proxy
  if (typeof proxy === 'string') {
    proxy = url.parse(proxy)
  }
  var isHttps = (proxy && proxy.protocol === 'https:') || this.uri.protocol === 'https:'

  if (isHttps) {
    if (options.ca) {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.ca
    }

    if (typeof options.rejectUnauthorized !== 'undefined') {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.rejectUnauthorized
    }

    if (options.cert) {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.cert.toString('ascii') + options.key.toString('ascii')
    }

    if (options.pfx) {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.pfx.toString('ascii')
    }

    if (options.ciphers) {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.ciphers
    }

    if (options.secureProtocol) {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.secureProtocol
    }

    if (options.secureOptions) {
      if (poolKey) {
        poolKey += ':'
      }
      poolKey += options.secureOptions
    }
  }

  if (self.pool === globalPool && !poolKey && Object.keys(options).length === 0 && self.httpModule.globalAgent) {
    // not doing anything special.  Use the globalAgent
    return self.httpModule.globalAgent
  }

  // we're using a stored agent.  Make sure it's protocol-specific
  poolKey = self.uri.protocol + poolKey

  // generate a new agent for this setting if none yet exists
  if (!self.pool[poolKey]) {
    self.pool[poolKey] = new Agent(options)
    // properly set maxSockets on new agents
    if (self.pool.maxSockets) {
      self.pool[poolKey].maxSockets = self.pool.maxSockets
    }
  }

  return self.pool[poolKey]
}

Request.prototype.start = function () {
  // start() is called once we are ready to send the outgoing HTTP request.
  // this is usually called on the first write(), end() or on nextTick()
  var self = this

  if (self.timing) {
    // All timings will be relative to this request's startTime.  In order to do this,
    // we need to capture the wall-clock start time (via Date), immediately followed
    // by the high-resolution timer (via now()).  While these two won't be set
    // at the _exact_ same time, they should be close enough to be able to calculate
    // high-resolution, monotonically non-decreasing timestamps relative to startTime.
    var startTime = new Date().getTime()
    var startTimeNow = now()
  }

  if (self._aborted) {
    return
  }

  self._started = true
  self.method = self.method || 'GET'
  self.href = self.uri.href

  if (self.src && self.src.stat && self.src.stat.size && !self.hasHeader('content-length')) {
    self.setHeader('content-length', self.src.stat.size)
  }
  if (self._aws) {
    self.aws(self._aws, true)
  }

  // We have a method named auth, which is completely different from the http.request
  // auth option.  If we don't remove it, we're gonna have a bad time.
  var reqOptions = copy(self)
  delete reqOptions.auth

  debug('make request', self.uri.href)

  // node v6.8.0 now supports a `timeout` value in `http.request()`, but we
  // should delete it for now since we handle timeouts manually for better
  // consistency with node versions before v6.8.0
  delete reqOptions.timeout

  try {
    self.req = self.httpModule.request(reqOptions)
  } catch (err) {
    self.emit('error', err)
    return
  }

  if (self.timing) {
    self.startTime = startTime
    self.startTimeNow = startTimeNow

    // Timing values will all be relative to startTime (by comparing to startTimeNow
    // so we have an accurate clock)
    self.timings = {}
  }

  var timeout
  if (self.timeout && !self.timeoutTimer) {
    if (self.timeout < 0) {
      timeout = 0
    } else if (typeof self.timeout === 'number' && isFinite(self.timeout)) {
      timeout = self.timeout
    }
  }

  self.req.on('response', self.onRequestResponse.bind(self))
  self.req.on('error', self.onRequestError.bind(self))
  self.req.on('drain', function () {
    self.emit('drain')
  })

  self.req.on('socket', function (socket) {
    // `._connecting` was the old property which was made public in node v6.1.0
    var isConnecting = socket._connecting || socket.connecting
    if (self.timing) {
      self.timings.socket = now() - self.startTimeNow

      if (isConnecting) {
        var onLookupTiming = function () {
          self.timings.lookup = now() - self.startTimeNow
        }

        var onConnectTiming = function () {
          self.timings.connect = now() - self.startTimeNow
        }

        socket.once('lookup', onLookupTiming)
        socket.once('connect', onConnectTiming)

        // clean up timing event listeners if needed on error
        self.req.once('error', function () {
          socket.removeListener('lookup', onLookupTiming)
          socket.removeListener('connect', onConnectTiming)
        })
      }
    }

    var setReqTimeout = function () {
      // This timeout sets the amount of time to wait *between* bytes sent
      // from the server once connected.
      //
      // In particular, it's useful for erroring if the server fails to send
      // data halfway through streaming a response.
      self.req.setTimeout(timeout, function () {
        if (self.req) {
          self.abort()
          var e = new Error('ESOCKETTIMEDOUT')
          e.code = 'ESOCKETTIMEDOUT'
          e.connect = false
          self.emit('error', e)
        }
      })
    }
    if (timeout !== undefined) {
      // Only start the connection timer if we're actually connecting a new
      // socket, otherwise if we're already connected (because this is a
      // keep-alive connection) do not bother. This is important since we won't
      // get a 'connect' event for an already connected socket.
      if (isConnecting) {
        var onReqSockConnect = function () {
          socket.removeListener('connect', onReqSockConnect)
          clearTimeout(self.timeoutTimer)
          self.timeoutTimer = null
          setReqTimeout()
        }

        socket.on('connect', onReqSockConnect)

        self.req.on('error', function (err) { // eslint-disable-line handle-callback-err
          socket.removeListener('connect', onReqSockConnect)
        })

        // Set a timeout in memory - this block will throw if the server takes more
        // than `timeout` to write the HTTP status and headers (corresponding to
        // the on('response') event on the client). NB: this measures wall-clock
        // time, not the time between bytes sent by the server.
        self.timeoutTimer = setTimeout(function () {
          socket.removeListener('connect', onReqSockConnect)
          self.abort()
          var e = new Error('ETIMEDOUT')
          e.code = 'ETIMEDOUT'
          e.connect = true
          self.emit('error', e)
        }, timeout)
      } else {
        // We're already connected
        setReqTimeout()
      }
    }
    self.emit('socket', socket)
  })

  self.emit('request', self.req)
}

Request.prototype.onRequestError = function (error) {
  var self = this
  if (self._aborted) {
    return
  }
  if (self.req && self.req._reusedSocket && error.code === 'ECONNRESET' &&
    self.agent.addRequestNoreuse) {
    self.agent = { addRequest: self.agent.addRequestNoreuse.bind(self.agent) }
    self.start()
    self.req.end()
    return
  }
  if (self.timeout && self.timeoutTimer) {
    clearTimeout(self.timeoutTimer)
    self.timeoutTimer = null
  }
  self.emit('error', error)
}

Request.prototype.onRequestResponse = function (response) {
  var self = this

  if (self.timing) {
    self.timings.response = now() - self.startTimeNow
  }

  debug('onRequestResponse', self.uri.href, response.statusCode, response.headers)
  response.on('end', function () {
    if (self.timing) {
      self.timings.end = now() - self.startTimeNow
      response.timingStart = self.startTime

      // fill in the blanks for any periods that didn't trigger, such as
      // no lookup or connect due to keep alive
      if (!self.timings.socket) {
        self.timings.socket = 0
      }
      if (!self.timings.lookup) {
        self.timings.lookup = self.timings.socket
      }
      if (!self.timings.connect) {
        self.timings.connect = self.timings.lookup
      }
      if (!self.timings.response) {
        self.timings.response = self.timings.connect
      }

      debug('elapsed time', self.timings.end)

      // elapsedTime includes all redirects
      self.elapsedTime += Math.round(self.timings.end)

      // NOTE: elapsedTime is deprecated in favor of .timings
      response.elapsedTime = self.elapsedTime

      // timings is just for the final fetch
      response.timings = self.timings

      // pre-calculate phase timings as well
      response.timingPhases = {
        wait: self.timings.socket,
        dns: self.timings.lookup - self.timings.socket,
        tcp: self.timings.connect - self.timings.lookup,
        firstByte: self.timings.response - self.timings.connect,
        download: self.timings.end - self.timings.response,
        total: self.timings.end
      }
    }
    debug('response end', self.uri.href, response.statusCode, response.headers)
  })

  if (self._aborted) {
    debug('aborted', self.uri.href)
    response.resume()
    return
  }

  self.response = response
  response.request = self
  response.toJSON = responseToJSON

  // XXX This is different on 0.10, because SSL is strict by default
  if (self.httpModule === https &&
    self.strictSSL && (!response.hasOwnProperty('socket') ||
    !response.socket.authorized)) {
    debug('strict ssl error', self.uri.href)
    var sslErr = response.hasOwnProperty('socket') ? response.socket.authorizationError : self.uri.href + ' does not support SSL'
    self.emit('error', new Error('SSL Error: ' + sslErr))
    return
  }

  // Save the original host before any redirect (if it changes, we need to
  // remove any authorization headers).  Also remember the case of the header
  // name because lots of broken servers expect Host instead of host and we
  // want the caller to be able to specify this.
  self.originalHost = self.getHeader('host')
  if (!self.originalHostHeaderName) {
    self.originalHostHeaderName = self.hasHeader('host')
  }
  if (self.setHost) {
    self.removeHeader('host')
  }
  if (self.timeout && self.timeoutTimer) {
    clearTimeout(self.timeoutTimer)
    self.timeoutTimer = null
  }

  var targetCookieJar = (self._jar && self._jar.setCookie) ? self._jar : globalCookieJar
  var addCookie = function (cookie) {
    // set the cookie if it's domain in the href's domain.
    try {
      targetCookieJar.setCookie(cookie, self.uri.href, {ignoreError: true})
    } catch (e) {
      self.emit('error', e)
    }
  }

  response.caseless = caseless(response.headers)

  if (response.caseless.has('set-cookie') && (!self._disableCookies)) {
    var headerName = response.caseless.has('set-cookie')
    if (Array.isArray(response.headers[headerName])) {
      response.headers[headerName].forEach(addCookie)
    } else {
      addCookie(response.headers[headerName])
    }
  }

  if (self._redirect.onResponse(response)) {
    return // Ignore the rest of the response
  } else {
    // Be a good stream and emit end when the response is finished.
    // Hack to emit end on close because of a core bug that never fires end
    response.on('close', function () {
      if (!self._ended) {
        self.response.emit('end')
      }
    })

    response.once('end', function () {
      self._ended = true
    })

    var noBody = function (code) {
      return (
        self.method === 'HEAD' ||
        // Informational
        (code >= 100 && code < 200) ||
        // No Content
        code === 204 ||
        // Not Modified
        code === 304
      )
    }

    var responseContent
    if (self.gzip && !noBody(response.statusCode)) {
      var contentEncoding = response.headers['content-encoding'] || 'identity'
      contentEncoding = contentEncoding.trim().toLowerCase()

      // Be more lenient with decoding compressed responses, since (very rarely)
      // servers send slightly invalid gzip responses that are still accepted
      // by common browsers.
      // Always using Z_SYNC_FLUSH is what cURL does.
      var zlibOptions = {
        flush: zlib.Z_SYNC_FLUSH,
        finishFlush: zlib.Z_SYNC_FLUSH
      }

      if (contentEncoding === 'gzip') {
        responseContent = zlib.createGunzip(zlibOptions)
        response.pipe(responseContent)
      } else if (contentEncoding === 'deflate') {
        responseContent = zlib.createInflate(zlibOptions)
        response.pipe(responseContent)
      } else {
        // Since previous versions didn't check for Content-Encoding header,
        // ignore any invalid values to preserve backwards-compatibility
        if (contentEncoding !== 'identity') {
          debug('ignoring unrecognized Content-Encoding ' + contentEncoding)
        }
        responseContent = response
      }
    } else {
      responseContent = response
    }

    if (self.encoding) {
      if (self.dests.length !== 0) {
        console.error('Ignoring encoding parameter as this stream is being piped to another stream which makes the encoding option invalid.')
      } else if (responseContent.setEncoding) {
        responseContent.setEncoding(self.encoding)
      } else {
        // Should only occur on node pre-v0.9.4 (joyent/node@9b5abe5) with
        // zlib streams.
        // If/When support for 0.9.4 is dropped, this should be unnecessary.
        responseContent = responseContent.pipe(stringstream(self.encoding))
      }
    }

    if (self._paused) {
      responseContent.pause()
    }

    self.responseContent = responseContent

    self.emit('response', response)

    self.dests.forEach(function (dest) {
      self.pipeDest(dest)
    })

    responseContent.on('data', function (chunk) {
      if (self.timing && !self.responseStarted) {
        self.responseStartTime = (new Date()).getTime()

        // NOTE: responseStartTime is deprecated in favor of .timings
        response.responseStartTime = self.responseStartTime
      }
      self._destdata = true
      self.emit('data', chunk)
    })
    responseContent.once('end', function (chunk) {
      self.emit('end', chunk)
    })
    responseContent.on('error', function (error) {
      self.emit('error', error)
    })
    responseContent.on('close', function () { self.emit('close') })

    if (self.callback) {
      self.readResponseBody(response)
    } else { // if no callback
      self.on('end', function () {
        if (self._aborted) {
          debug('aborted', self.uri.href)
          return
        }
        self.emit('complete', response)
      })
    }
  }
  debug('finish init function', self.uri.href)
}

Request.prototype.readResponseBody = function (response) {
  var self = this
  debug("reading response's body")
  var buffers = []
  var bufferLength = 0
  var strings = []

  self.on('data', function (chunk) {
    if (!Buffer.isBuffer(chunk)) {
      strings.push(chunk)
    } else if (chunk.length) {
      bufferLength += chunk.length
      buffers.push(chunk)
    }
  })
  self.on('end', function () {
    debug('end event', self.uri.href)
    if (self._aborted) {
      debug('aborted', self.uri.href)
      // `buffer` is defined in the parent scope and used in a closure it exists for the life of the request.
      // This can lead to leaky behavior if the user retains a reference to the request object.
      buffers = []
      bufferLength = 0
      return
    }

    if (bufferLength) {
      debug('has body', self.uri.href, bufferLength)
      response.body = Buffer.concat(buffers, bufferLength)
      if (self.encoding !== null) {
        response.body = response.body.toString(self.encoding)
      }
      // `buffer` is defined in the parent scope and used in a closure it exists for the life of the Request.
      // This can lead to leaky behavior if the user retains a reference to the request object.
      buffers = []
      bufferLength = 0
    } else if (strings.length) {
      // The UTF8 BOM [0xEF,0xBB,0xBF] is converted to [0xFE,0xFF] in the JS UTC16/UCS2 representation.
      // Strip this value out when the encoding is set to 'utf8', as upstream consumers won't expect it and it breaks JSON.parse().
      if (self.encoding === 'utf8' && strings[0].length > 0 && strings[0][0] === '\uFEFF') {
        strings[0] = strings[0].substring(1)
      }
      response.body = strings.join('')
    }

    if (self._json) {
      try {
        response.body = JSON.parse(response.body, self._jsonReviver)
      } catch (e) {
        debug('invalid JSON received', self.uri.href)
      }
    }
    debug('emitting complete', self.uri.href)
    if (typeof response.body === 'undefined' && !self._json) {
      response.body = self.encoding === null ? Buffer.alloc(0) : ''
    }
    self.emit('complete', response, response.body)
  })
}

Request.prototype.abort = function () {
  var self = this
  self._aborted = true

  if (self.req) {
    self.req.abort()
  } else if (self.response) {
    self.response.destroy()
  }

  self.emit('abort')
}

Request.prototype.pipeDest = function (dest) {
  var self = this
  var response = self.response
  // Called after the response is received
  if (dest.headers && !dest.headersSent) {
    if (response.caseless.has('content-type')) {
      var ctname = response.caseless.has('content-type')
      if (dest.setHeader) {
        dest.setHeader(ctname, response.headers[ctname])
      } else {
        dest.headers[ctname] = response.headers[ctname]
      }
    }

    if (response.caseless.has('content-length')) {
      var clname = response.caseless.has('content-length')
      if (dest.setHeader) {
        dest.setHeader(clname, response.headers[clname])
      } else {
        dest.headers[clname] = response.headers[clname]
      }
    }
  }
  if (dest.setHeader && !dest.headersSent) {
    for (var i in response.headers) {
      // If the response content is being decoded, the Content-Encoding header
      // of the response doesn't represent the piped content, so don't pass it.
      if (!self.gzip || i !== 'content-encoding') {
        dest.setHeader(i, response.headers[i])
      }
    }
    dest.statusCode = response.statusCode
  }
  if (self.pipefilter) {
    self.pipefilter(response, dest)
  }
}

Request.prototype.qs = function (q, clobber) {
  var self = this
  var base
  if (!clobber && self.uri.query) {
    base = self._qs.parse(self.uri.query)
  } else {
    base = {}
  }

  for (var i in q) {
    base[i] = q[i]
  }

  var qs = self._qs.stringify(base)

  if (qs === '') {
    return self
  }

  self.uri = url.parse(self.uri.href.split('?')[0] + '?' + qs)
  self.url = self.uri
  self.path = self.uri.path

  if (self.uri.host === 'unix') {
    self.enableUnixSocket()
  }

  return self
}
Request.prototype.form = function (form) {
  var self = this
  if (form) {
    if (!/^application\/x-www-form-urlencoded\b/.test(self.getHeader('content-type'))) {
      self.setHeader('content-type', 'application/x-www-form-urlencoded')
    }
    self.body = (typeof form === 'string')
      ? self._qs.rfc3986(form.toString('utf8'))
      : self._qs.stringify(form).toString('utf8')
    return self
  }
  // create form-data object
  self._form = new FormData()
  self._form.on('error', function (err) {
    err.message = 'form-data: ' + err.message
    self.emit('error', err)
    self.abort()
  })
  return self._form
}
Request.prototype.multipart = function (multipart) {
  var self = this

  self._multipart.onRequest(multipart)

  if (!self._multipart.chunked) {
    self.body = self._multipart.body
  }

  return self
}
Request.prototype.json = function (val) {
  var self = this

  if (!self.hasHeader('accept')) {
    self.setHeader('accept', 'application/json')
  }

  if (typeof self.jsonReplacer === 'function') {
    self._jsonReplacer = self.jsonReplacer
  }

  self._json = true
  if (typeof val === 'boolean') {
    if (self.body !== undefined) {
      if (!/^application\/x-www-form-urlencoded\b/.test(self.getHeader('content-type'))) {
        self.body = safeStringify(self.body, self._jsonReplacer)
      } else {
        self.body = self._qs.rfc3986(self.body)
      }
      if (!self.hasHeader('content-type')) {
        self.setHeader('content-type', 'application/json')
      }
    }
  } else {
    self.body = safeStringify(val, self._jsonReplacer)
    if (!self.hasHeader('content-type')) {
      self.setHeader('content-type', 'application/json')
    }
  }

  if (typeof self.jsonReviver === 'function') {
    self._jsonReviver = self.jsonReviver
  }

  return self
}
Request.prototype.getHeader = function (name, headers) {
  var self = this
  var result, re, match
  if (!headers) {
    headers = self.headers
  }
  Object.keys(headers).forEach(function (key) {
    if (key.length !== name.length) {
      return
    }
    re = new RegExp(name, 'i')
    match = key.match(re)
    if (match) {
      result = headers[key]
    }
  })
  return result
}
Request.prototype.enableUnixSocket = function () {
  // Get the socket & request paths from the URL
  var unixParts = this.uri.path.split(':')
  var host = unixParts[0]
  var path = unixParts[1]
  // Apply unix properties to request
  this.socketPath = host
  this.uri.pathname = path
  this.uri.path = path
  this.uri.host = host
  this.uri.hostname = host
  this.uri.isUnix = true
}

Request.prototype.auth = function (user, pass, sendImmediately, bearer) {
  var self = this

  self._auth.onRequest(user, pass, sendImmediately, bearer)

  return self
}
Request.prototype.aws = function (opts, now) {
  var self = this

  if (!now) {
    self._aws = opts
    return self
  }

  if (opts.sign_version === 4 || opts.sign_version === '4') {
    // use aws4
    var options = {
      host: self.uri.host,
      path: self.uri.path,
      method: self.method,
      headers: {
        'content-type': self.getHeader('content-type') || ''
      },
      body: self.body
    }
    var signRes = aws4.sign(options, {
      accessKeyId: opts.key,
      secretAccessKey: opts.secret,
      sessionToken: opts.session
    })
    self.setHeader('authorization', signRes.headers.Authorization)
    self.setHeader('x-amz-date', signRes.headers['X-Amz-Date'])
    if (signRes.headers['X-Amz-Security-Token']) {
      self.setHeader('x-amz-security-token', signRes.headers['X-Amz-Security-Token'])
    }
  } else {
    // default: use aws-sign2
    var date = new Date()
    self.setHeader('date', date.toUTCString())
    var auth = {
      key: opts.key,
      secret: opts.secret,
      verb: self.method.toUpperCase(),
      date: date,
      contentType: self.getHeader('content-type') || '',
      md5: self.getHeader('content-md5') || '',
      amazonHeaders: aws2.canonicalizeHeaders(self.headers)
    }
    var path = self.uri.path
    if (opts.bucket && path) {
      auth.resource = '/' + opts.bucket + path
    } else if (opts.bucket && !path) {
      auth.resource = '/' + opts.bucket
    } else if (!opts.bucket && path) {
      auth.resource = path
    } else if (!opts.bucket && !path) {
      auth.resource = '/'
    }
    auth.resource = aws2.canonicalizeResource(auth.resource)
    self.setHeader('authorization', aws2.authorization(auth))
  }

  return self
}
Request.prototype.httpSignature = function (opts) {
  var self = this
  httpSignature.signRequest({
    getHeader: function (header) {
      return self.getHeader(header, self.headers)
    },
    setHeader: function (header, value) {
      self.setHeader(header, value)
    },
    method: self.method,
    path: self.path
  }, opts)
  debug('httpSignature authorization', self.getHeader('authorization'))

  return self
}
Request.prototype.hawk = function (opts) {
  var self = this
  self.setHeader('Authorization', hawk.client.header(self.uri, self.method, opts).field)
}
Request.prototype.oauth = function (_oauth) {
  var self = this

  self._oauth.onRequest(_oauth)

  return self
}

Request.prototype.jar = function (jar) {
  var self = this
  var cookies

  if (self._redirect.redirectsFollowed === 0) {
    self.originalCookieHeader = self.getHeader('cookie')
  }

  if (!jar) {
    // disable cookies
    cookies = false
    self._disableCookies = true
  } else {
    var targetCookieJar = (jar && jar.getCookieString) ? jar : globalCookieJar
    var urihref = self.uri.href
    // fetch cookie in the Specified host
    if (targetCookieJar) {
      cookies = targetCookieJar.getCookieString(urihref)
    }
  }

  // if need cookie and cookie is not empty
  if (cookies && cookies.length) {
    if (self.originalCookieHeader) {
      // Don't overwrite existing Cookie header
      self.setHeader('cookie', self.originalCookieHeader + '; ' + cookies)
    } else {
      self.setHeader('cookie', cookies)
    }
  }
  self._jar = jar
  return self
}

// Stream API
Request.prototype.pipe = function (dest, opts) {
  var self = this

  if (self.response) {
    if (self._destdata) {
      self.emit('error', new Error('You cannot pipe after data has been emitted from the response.'))
    } else if (self._ended) {
      self.emit('error', new Error('You cannot pipe after the response has been ended.'))
    } else {
      stream.Stream.prototype.pipe.call(self, dest, opts)
      self.pipeDest(dest)
      return dest
    }
  } else {
    self.dests.push(dest)
    stream.Stream.prototype.pipe.call(self, dest, opts)
    return dest
  }
}
Request.prototype.write = function () {
  var self = this
  if (self._aborted) { return }

  if (!self._started) {
    self.start()
  }
  if (self.req) {
    return self.req.write.apply(self.req, arguments)
  }
}
Request.prototype.end = function (chunk) {
  var self = this
  if (self._aborted) { return }

  if (chunk) {
    self.write(chunk)
  }
  if (!self._started) {
    self.start()
  }
  if (self.req) {
    self.req.end()
  }
}
Request.prototype.pause = function () {
  var self = this
  if (!self.responseContent) {
    self._paused = true
  } else {
    self.responseContent.pause.apply(self.responseContent, arguments)
  }
}
Request.prototype.resume = function () {
  var self = this
  if (!self.responseContent) {
    self._paused = false
  } else {
    self.responseContent.resume.apply(self.responseContent, arguments)
  }
}
Request.prototype.destroy = function () {
  var self = this
  if (!self._ended) {
    self.end()
  } else if (self.response) {
    self.response.destroy()
  }
}

Request.defaultProxyHeaderWhiteList =
  Tunnel.defaultProxyHeaderWhiteList.slice()

Request.defaultProxyHeaderExclusiveList =
  Tunnel.defaultProxyHeaderExclusiveList.slice()

// Exports

Request.prototype.toJSON = requestToJSON
module.exports = Request


/***/ }),
/* 33 */
/***/ (function(module, exports) {

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
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	// Common rescope modules int
	exports.default = {};
	module.exports = exports["default"];

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("aws-sign2");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("aws4");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("combined-stream");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("forever-agent");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("form-data");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("har-validator");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("hawk");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("http-signature");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("is-typedarray");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("json-stringify-safe");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("mime-types");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("oauth-sign");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("performance-now");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("stringstream");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("tough-cookie");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("tunnel-agent");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })
/******/ ]);
//# sourceMappingURL=App.server.js.map