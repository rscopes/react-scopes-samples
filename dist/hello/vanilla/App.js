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

	__webpack_require__(86);
	module.exports = __webpack_require__(87);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
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
	
		var _Store = __webpack_require__(5);
	
		var _Store2 = _interopRequireDefault(_Store);
	
		var _index = __webpack_require__(7);
	
		var _index2 = _interopRequireDefault(_index);
	
		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}
	
		// will use as external the index in dist
	
		_Scope2.default.Store = _Store2.default; /*
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
	
		_index2.default.Scope = _Scope2.default;
		_index2.default.Context = _Scope2.default;
		_index2.default.Store = _Store2.default;
		debugger;
		try {
			__webpack_require__(8);
		} catch (e) {}
	
		exports.default = _index2.default;
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
		    EventEmitter = __webpack_require__(3),
		    shortid = __webpack_require__(4),
		    __proto__push = function __proto__push(target, id, parent) {
			var fn = function fn() {};
			fn.prototype = parent ? new parent._[id]() : target[id] || {};
			target[id] = new fn();
			target._[id] = fn;
		},
		    openScopes = {};
	
		/**
	  * Base Scope object
	  */
		var Scope = (_temp = _class = function (_EventEmitter) {
			_inherits(Scope, _EventEmitter);
	
			_createClass(Scope, null, [{
				key: 'getScope',
				// all active scopes
	
				// if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
				value: function getScope(scopes) {
					var skey = is.array(scopes) ? scopes.sort(function (a, b) {
						if (a.firstname < b.firstname) return -1;
						if (a.firstname > b.firstname) return 1;
						return 0;
					}).join('::') : scopes;
					return openScopes[skey] = openScopes[skey] || new Scope({}, { id: skey });
				}
			}]);
	
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
				    rootEmitter = _ref2.rootEmitter;
	
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
	
				_this.stores = {};
				_this.state = {};
				_this.data = {};
	
				_this.parent = parent;
				_this._ = _;
	
				if (parent && parent.dead) throw new Error("Can't use a dead scope as parent !");
	
				__proto__push(_this, 'stores', parent);
				__proto__push(_this, 'state', parent);
				__proto__push(_this, 'data', parent);
	
				_this.sources = [];
				_.childScopes = [];
				_.childScopesList = [];
				_.unStableChilds = 0;
	
				_this.__retains = { all: 0 };
				_this.__locks = { all: 1 };
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
	
					this.stores = {};
					this.state = {};
					this.data = {};
					targetCtx.on(lists);
					__proto__push(this, 'stores', parent);
					__proto__push(this, 'state', parent);
					__proto__push(this, 'data', parent);
	
					this.relink(this._._scope, this, false, true);
					this._._mixed.forEach(function (ctx) {
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
							_this5._mount(id, state[id], data[id]);
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
								return _this6._mount(id, null, v);
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
					this.retainStores(Object.keys(lastRevs));
	
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
							this.disposeStores(Object.keys(followers[i][3]));
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
					var output = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
					var ctx = this._._scope;
					if (output[this._id]) return;
	
					output[this._id] = {};
	
					Object.keys(ctx).forEach(function (id) {
						if (is.fn(ctx[id])) return;
	
						ctx[id].serialize(output);
					});
	
					this._.childScopes.forEach(function (ctx) {
						!ctx._.isLocalId && ctx.serialize(output);
					});
	
					this._._mixed.forEach(function (ctx) {
						!ctx._.isLocalId && ctx.serialize(output);
					});
	
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
					var _this10 = this;
	
					var ctx = this._._scope;
	
					snapshot[this._id] && Object.keys(ctx).forEach(function (name) {
						var snap = snapshot[_this10._id + '/' + name];
	
						if (snap) {
	
							if (force && !is.fn(ctx[name])) ctx[name].destroy();
	
							_this10.mount(name, snapshot); // quiet
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
	    * Dispatch an action starting from the top parent & mixed scopes, in all stores
	    *
	    * @param action
	    * @param data
	    * @returns {Scope}
	    */
	
			}, {
				key: 'dispatch',
				value: function dispatch(action, data) {
					var _this11 = this;
	
					this._._mixed.forEach(function (ctx) {
						return ctx.dispatch(action, data);
					});
					this.parent && this.parent.dispatch(action, data);
					Object.keys(this._._scope).forEach(function (id) {
						if (!is.fn(_this11._._scope[id])) _this11._._scope[id].trigger(action, data);
					});
	
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
					var _this12 = this;
	
					if (this._stable) return cb(null, this.data);
					this.once('stable', function (e) {
						return cb(null, _this12.data);
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
					var _this13 = this;
	
					var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
					var reason = arguments[1];
	
					stores.forEach(function (id) {
						return _this13.stores[id] && _this13.stores[id].retain && _this13.stores[id].retain(reason);
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
					var _this14 = this;
	
					var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
					var reason = arguments[1];
	
					stores.forEach(function (id) {
						return _this14.stores[id] && _this14.stores[id].dispose && _this14.stores[id].dispose(reason);
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
					var _this15 = this;
	
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
							_this15._.stabilizerTM = null;
							if (_this15.__locks.all) return;
	
							_this15._.propagTM && clearTimeout(_this15._.propagTM);
	
							_this15._stable = true;
							_this15.emit("stable", _this15);
	
							!_this15.dead && _this15._propag(); // stability can induce destroy
						});
					}
				}
	
				/**
	    * Propag stores updates basing theirs last updates
	    */
	
			}, {
				key: 'propag',
				value: function propag() {
					var _this16 = this;
	
					this._.propagTM && clearTimeout(this._.propagTM);
					this._.propagTM = setTimeout(function (e) {
						_this16._.propagTM = null;
						_this16._propag();
					}, 2);
				}
			}, {
				key: '_propag',
				value: function _propag() {
					var _this17 = this;
	
					if (this._.followers.length) this._.followers.forEach(function (_ref3) {
						var obj = _ref3[0],
						    key = _ref3[1],
						    as = _ref3[2],
						    lastRevs = _ref3[3],
						    remaps = _ref3[3];
	
						var data = _this17.getUpdates(lastRevs);
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
					var _this18 = this;
	
					this._.childScopes.push(ctx);
					var lists = {
						'stable': function stable(s) {
							_this18._.unStableChilds--;
							if (!_this18._.unStableChilds) _this18.emit("stableTree", _this18);
						},
						'unstable': function unstable(s) {
							_this18._.unStableChilds++;
							if (1 == _this18._.unStableChilds) _this18.emit("unstableTree", _this18);
						},
						'stableTree': function stableTree(s) {
							_this18._.unStableChilds--;
							if (!_this18._.unStableChilds) _this18.emit("stableTree", _this18);
						},
						'unstableTree': function unstableTree(s) {
							_this18._.unStableChilds++;
							if (1 == _this18._.unStableChilds) _this18.emit("unstableTree", _this18);
						},
						'destroy': function destroy(ctx) {
							if (ctx._.unStableChilds) _this18._.unStableChilds--;
							if (!ctx.isStable()) _this18._.unStableChilds--;
	
							if (!_this18._.unStableChilds) _this18.emit("stableTree", _this18);
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
					var _this19 = this;
	
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
								_this19.then(function (s) {
									!_this19.__retains.all && _this19.destroy();
								});
							}, this._.persistenceTm);
						} else {
							this.then(function (s) {
								return !_this19.__retains.all && _this19.destroy();
							});
						}
					}
				}
	
				/**
	    * order destroy of local stores
	    */
	
			}, {
				key: 'destroy',
				value: function destroy() {
					var _this20 = this;
	
					var ctx = this._._scope;
					//console.warn("destroy", this._id);
					this.dead = true;
					this.emit("destroy", this);
					for (var key in ctx) {
						if (!is.fn(ctx[key])) {
							!ctx[key]._autoDestroy && ctx[key].dispose("scoped");
						}
					}Object.keys(this._._listening).forEach(function (id) {
						return _this20._._scope[id].removeListener(_this20._._listening[id]);
					});
	
					this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
					this._.propagTM && clearTimeout(this._.propagTM);
	
					if (!this._.isLocalId) delete openScopes[this._id];
					this._.followers.map(this.unBind.bind(this));
	
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
		}(EventEmitter), _class.persistenceTm = 1, _class.Store = null, _class.scopes = openScopes, _temp);
		exports.default = Scope;
		module.exports = exports['default'];
	
		/***/
	},
	/* 2 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(14);
	
		/***/
	},
	/* 3 */
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
		var is = __webpack_require__(2);
	
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
	/* 4 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(15);
	
		/***/
	},
	/* 5 */
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
	
		/**
	  * Ultra scalable state-aware store
	  *
	  * @todo : lot of optims...
	  */
	
		var is = __webpack_require__(2),
		    Scope = __webpack_require__(1),
		    EventEmitter = __webpack_require__(3),
		    TaskSequencer = __webpack_require__(6),
		    shortid = __webpack_require__(4),
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
						_this.state = _extends({}, initialState || {}, scope.map(_this, _this._use));
						if (_this.shouldApply(_this.state) && _this.data === undefined) {
							_this.data = _this.apply(_this.data, _this.state, _this.state);
							applied = true;
						} else _this._changesSW = _extends({}, _this.state);
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
						if (!this.state || pState.hasOwnProperty(k) && (pState[k] != this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
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
	
					var output = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
					var completeState = arguments[1];
	
					var refs = is.array(this._use) && this._use.reduce(function (map, key) {
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
						state: this.state && (completeState ? _extends({}, this.state) : Object.keys(this.state).reduce(function (h, k) {
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
								_this8.then(function (s) {
									!_this8.__retains.all && _this8.destroy();
								});
							}, this._persistenceTm);
						} else {
							this.then(function (s) {
								return !_this8.__retains.all && _this8.destroy();
							});
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
	
				, set: function set(v) {
					//console.groupCollapsed("Rescope store : Setting datas is depreciated, use data");
					//console.log("Rescope store : Setting datas is depreciated, use data", (new Error()).stack);
					//console.groupEnd();
	
					this.data = v;
				}
			}]);
	
			return Store;
		}(EventEmitter), _class.use = [], _class.staticScope = new Scope({}, { id: "static" }), _class.state = undefined, _class.persistenceTm = false, _temp);
		exports.default = Store;
		module.exports = exports['default'];
	
		/***/
	},
	/* 6 */
	/***/function (module, exports) {
	
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
	
		/**
	  * Minimal push sequencer, apply stores specific task in the right order (root stores first)
	  */
		var taskQueue = [],
		    curWeight = 0,
		    maxWeight = 0,
		    minWeight = 0,
		    taskCount = 0,
	
	
		//deSyncSteps = 1000,
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
		};
	
		function runNow() {
			if (!isRunning) {
				run();
			}
		}
	
		function run() {
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
	
		/***/
	},
	/* 7 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(25);
	
		/***/
	},
	/* 8 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(26);
	
		/***/
	}]
	/******/);
	//# sourceMappingURL=ReScope.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	/* globals window, HTMLElement */
	
	'use strict';
	
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(17);
	var encode = __webpack_require__(19);
	var decode = __webpack_require__(21);
	var build = __webpack_require__(22);
	var isValid = __webpack_require__(23);
	
	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(24) || 0;
	
	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}
	
	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}
	
	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }
	
	    return alphabet.shuffled();
	}
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {
	  return build(clusterWorkerId);
	}
	
	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomFromSeed = __webpack_require__(18);
	
	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;
	
	var shuffled;
	
	function reset() {
	    shuffled = false;
	}
	
	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }
	
	    if (_alphabet_ === alphabet) {
	        return;
	    }
	
	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }
	
	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });
	
	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }
	
	    alphabet = _alphabet_;
	    reset();
	}
	
	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}
	
	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}
	
	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }
	
	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;
	
	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}
	
	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}
	
	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}
	
	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';
	
	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
	
	var seed = 1;
	
	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}
	
	function setSeed(_seed_) {
	    seed = _seed_;
	}
	
	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomByte = __webpack_require__(20);
	
	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;
	
	    var str = '';
	
	    while (!done) {
	        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}
	
	module.exports = encode;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto
	
	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}
	
	module.exports = randomByte;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(17);
	
	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}
	
	module.exports = decode;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var encode = __webpack_require__(19);
	var alphabet = __webpack_require__(17);
	
	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1459707606518;
	
	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 6;
	
	// Counter is used when shortid is called multiple times in one second.
	var counter;
	
	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function build(clusterWorkerId) {
	
	    var str = '';
	
	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);
	
	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }
	
	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);
	
	    return str;
	}
	
	module.exports = build;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(17);
	
	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }
	
	    var characters = alphabet.characters();
	    var len = id.length;
	    for(var i = 0; i < len;i++) {
	        if (characters.indexOf(id[i]) === -1) {
	            return false;
	        }
	    }
	    return true;
	}
	
	module.exports = isShortId;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = 0;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
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
	/***/function (module, exports) {
	
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
	
		/***/
	}]
	/******/);
	//# sourceMappingURL=index.js.map

/***/ }),
/* 26 */
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
	
		__webpack_require__(1);
	
		var _index = __webpack_require__(2);
	
		var _index2 = _interopRequireDefault(_index);
	
		var _ReactHocs = __webpack_require__(3);
	
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
	
		_index2.default.Component = RTools.Component; /*
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
	
		_index2.default.reScopeProps = RTools.reScopeProps;
		_index2.default.reScopeState = RTools.reScopeState;
		_index2.default.reScope = RTools.reScopeState;
		debugger;
		exports.default = _index2.default;
		module.exports = exports["default"];
	
		/***/
	},
	/* 1 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(27);
	
		/***/
	},
	/* 2 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(28);
	
		/***/
	},
	/* 3 */
	/***/function (module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.rescopeState = exports.reScopeState = exports.rescopeProps = exports.reScopeProps = exports.Component = exports.default = undefined;
	
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
	
		//import {Scope} from 'rescope';
	
	
		var _react = __webpack_require__(4);
	
		var _react2 = _interopRequireDefault(_react);
	
		var _is = __webpack_require__(5);
	
		var _is2 = _interopRequireDefault(_is);
	
		var _propTypes = __webpack_require__(6);
	
		var _propTypes2 = _interopRequireDefault(_propTypes);
	
		var _index = __webpack_require__(2);
	
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
	
		var SimpleObjectProto = {}.constructor;
	
		/**
	  * Inheritable ReScope "HOC" (High Order Component)
	  *
	  * @class Component
	  * @desc Parent React Component with store injection in its state
	  */
		var Component = (_temp = _class = function (_React$Component) {
			_inherits(Component, _React$Component);
	
			function Component(p, ctx, q) {
				_classCallCheck(this, Component);
	
				var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, p, ctx, q));
	
				var scope = p.__scope || ctx.rescope;
				_this.$scope = scope;
	
				if (_this.$scope && _this.$scope.dead) {
					console.error("ReScoping using dead scope");
					_this.$scope = null;
				}
	
				_this.$stores = _this.$scope && _this.$scope.stores;
				if (_this.constructor.use) {
					_this.state = _extends({}, _this.state, scope.map(_this, _this.constructor.use || [], false));
				} else if (!_this.$scope) _this.render = function () {
					return _react2.default.createElement('div', null, 'No Rescope here ', _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'name', _this));
				};
				return _this;
			}
	
			_createClass(Component, [{
				key: 'dispatch',
				value: function dispatch() {
					var _$scope;
	
					this.$scope && (_$scope = this.$scope).dispatch.apply(_$scope, arguments);
				}
			}, {
				key: 'componentWillMount',
				value: function componentWillMount() {
					if (this.constructor.use) {
						this.$scope.bind(this, this.constructor.use || [], false);
					}
				}
			}, {
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
					this.constructor.use && this.$scope.unBind(this, this.constructor.use || []);
					this.$scope = null;
				}
			}, {
				key: 'componentWillReceiveProps',
				value: function componentWillReceiveProps(np, nc) {
					var nScope = np.__scope || nc.rescope || this.$scope;
	
					if (nScope != this.$scope) {
						this.constructor.use && this.$scope.unBind(this, this.constructor.use);
						this.$scope = nScope;
	
						if (this.$scope && this.$scope.dead) {
							console.error("ReScoping using dead scope");
							this.$stores = this.$scope = null;
						} else {
							this.$stores = this.$scope.stores;
							this.constructor.use && nScope.bind(this, this.constructor.use);
						}
					}
				}
			}, {
				key: 'getChildContext',
				value: function getChildContext() {
					return {
						rescope: this.$scope || this.context.rescope,
						$stores: this.$scope.stores || this.context.$stores
					};
				}
			}, {
				key: 'render',
				value: function render() {
					return this.props.children || _react2.default.createElement('div', null);
				}
			}]);
	
			return Component;
		}(_react2.default.Component), _class.childContextTypes = {
			rescope: _propTypes2.default.object,
			$stores: _propTypes2.default.object
		}, _class.contextTypes = {
			rescope: _propTypes2.default.object,
			$stores: _propTypes2.default.object
		}, _temp);
		;
	
		/**
	  * Return a React "HOC" (High Order Component) that :
	  *  - Inherit BaseComponent,
	  *  - Inject & maintain the stores in BaseComponent::use and/or (use) in the instances state.
	  *  - Propag (scope) in the returned React Component context
	  *
	  *
	  * @param BaseComponent {React.Component} Base React Component ( default : React.Component )
	  * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be searched
	  * @param use {array} the list of stores injected from the current scope
	  * @param additionalContext {Object} context to be propagated
	  * @returns {ReScopeProvider}
	  */
		function reScopeState() {
			var _class2, _temp2;
	
			for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
				argz[_key] = arguments[_key];
			}
	
			var BaseComponent = (!argz[0] || argz[0].prototype && argz[0].prototype.isReactComponent) && argz.shift(),
			    scope = (!argz[0] || argz[0] instanceof _index.Scope || _is2.default.fn(argz[0])) && argz.shift(),
			    use = (!argz[0] || _is2.default.array(argz[0])) && argz.shift(),
			    additionalContext = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift();
	
			if (!(BaseComponent && BaseComponent.prototype && BaseComponent.prototype.isReactComponent)) {
				return function (BaseComponent) {
					return reScopeState(BaseComponent, scope, use, additionalContext);
				};
			}
	
			use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
			additionalContext = additionalContext && Object.keys(additionalContext).reduce(function (h, k) {
				return h[k] = _propTypes2.default.any, h;
			}, {}) || {};
	
			var ReScopeProvider = (_temp2 = _class2 = function (_BaseComponent) {
				_inherits(ReScopeProvider, _BaseComponent);
	
				function ReScopeProvider(p, ctx, q) {
					_classCallCheck(this, ReScopeProvider);
	
					var _this2 = _possibleConstructorReturn(this, (ReScopeProvider.__proto__ || Object.getPrototypeOf(ReScopeProvider)).call(this, p, ctx, q));
	
					_this2.$scope = p.__scope || _is2.default.fn(scope) && scope(_this2, p, ctx) || scope || ctx.rescope;
	
					if (_this2.$scope && _this2.$scope.dead) {
						console.error("ReScoping using dead scope");
						_this2.$scope = null;
					}
	
					_this2.$scope && _is2.default.fn(scope) && _this2.$scope.retain();
	
					_this2.$stores = _this2.$scope && _this2.$scope.stores;
					if (_this2.$scope && use.length) {
						_this2.state = _extends({}, _this2.state, _this2.$scope.map(_this2, use, false));
					} else if (!_this2.$scope) _this2.render = function () {
						return _react2.default.createElement('div', null, 'No ReScope context in ', BaseComponent.name);
					};
					return _this2;
				}
	
				_createClass(ReScopeProvider, [{
					key: '$dispatch',
					value: function $dispatch() {
						var _$scope2;
	
						(_$scope2 = this.$scope).dispatch.apply(_$scope2, arguments);
					}
				}, {
					key: 'componentWillMount',
					value: function componentWillMount() {
						if (use.length) {
							this.$scope.bind(this, use, false);
						}
						_get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillMount', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillMount', this).call(this);
					}
				}, {
					key: 'componentWillUnmount',
					value: function componentWillUnmount() {
						_get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillUnmount', this) && _get(ReScopeProvider.prototype.__proto__ || Object.getPrototypeOf(ReScopeProvider.prototype), 'componentWillUnmount', this).call(this);
	
						use.length && this.$scope.unBind(this, use);
	
						_is2.default.fn(scope) && this.$scope.dispose();
	
						delete this.$stores;
						delete this.$scope;
					}
				}, {
					key: 'componentWillReceiveProps',
					value: function componentWillReceiveProps(np, nc) {
						var nScope = np.__scope || scope && this.$scope || nc.rescope || this.$scope;
	
						if (nScope != this.$scope) {
							use.length && this.$scope.unBind(this, use);
							this.$scope = nScope;
	
							if (this.$scope && this.$scope.dead) {
								console.error("ReScoping using dead scope");
								this.$stores = this.$scope = null;
							} else {
								this.$stores = this.$scope.stores;
								use.length && nScope.bind(this, use);
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
			}(BaseComponent), _class2.childContextTypes = _extends({}, BaseComponent.childContextTypes || {}, additionalContext, {
				rescope: _propTypes2.default.object,
				$stores: _propTypes2.default.object
			}), _class2.contextTypes = _extends({}, BaseComponent.contextTypes || {}, additionalContext, {
				rescope: _propTypes2.default.object,
				$stores: _propTypes2.default.object
			}), _class2.defaultProps = _extends({}, BaseComponent.defaultProps || {}), _class2.displayName = "stateScoped(" + (BaseComponent.displayName || BaseComponent.name) + ")", _temp2);
	
			return ReScopeProvider;
		}
	
		/**
	  * Return a React "HOC" (High Order Component) that :
	  *  - Inject & maintain the stores listed baseComponent::use and/or (use) in the instances props.
	  *  - Propag (scope) in the returned React Component context
	  *
	  * @param BaseComponent {React.Component} Base React Component ( default : React.Component )
	  * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be searched ( default : the default
	  *     ReScope::Scope::scopes.static scope )
	  * @param use {array} the list of stores to inject from the current scope
	  * @param additionalContext {Object} context to be propagated
	  * @returns {ReScopeProvider}
	  */
		function reScopeProps() {
			var _class3, _temp4;
	
			for (var _len2 = arguments.length, argz = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				argz[_key2] = arguments[_key2];
			}
	
			var BaseComponent = (!argz[0] || argz[0].prototype && argz[0].prototype.isReactComponent) && argz.shift(),
			    scope = (!argz[0] || argz[0] instanceof _index.Scope || _is2.default.fn(argz[0])) && argz.shift(),
			    use = (!argz[0] || _is2.default.array(argz[0])) && argz.shift(),
			    additionalContext = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift();
	
			if (!(BaseComponent && BaseComponent.prototype && BaseComponent.prototype.isReactComponent)) {
				return function (BaseComponent) {
					return reScopeProps(BaseComponent, scope, use, additionalContext);
				};
			}
	
			use = [].concat(_toConsumableArray(BaseComponent.use || []), _toConsumableArray(use || []));
			additionalContext = additionalContext && Object.keys(additionalContext).reduce(function (h, k) {
				return h[k] = _propTypes2.default.any, h;
			}, {}) || {};
	
			return reScopeState((_temp4 = _class3 = function (_React$Component2) {
				_inherits(ReScopePropsProvider, _React$Component2);
	
				function ReScopePropsProvider() {
					var _ref;
	
					var _temp3, _this3, _ret;
	
					_classCallCheck(this, ReScopePropsProvider);
	
					for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
						args[_key3] = arguments[_key3];
					}
	
					return _ret = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref = ReScopePropsProvider.__proto__ || Object.getPrototypeOf(ReScopePropsProvider)).call.apply(_ref, [this].concat(args))), _this3), _this3._$dispatch = function () {
						var _this4;
	
						return (_this4 = _this3).$dispatch.apply(_this4, arguments);
					}, _temp3), _possibleConstructorReturn(_this3, _ret);
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
							$dispatch: this._$dispatch,
							$stores: this.$stores }));
					}
				}]);
	
				return ReScopePropsProvider;
			}(_react2.default.Component), _class3.childContextTypes = _extends({}, BaseComponent.contextTypes || {}, additionalContext, {
				rescope: _propTypes2.default.object,
				$stores: _propTypes2.default.object
			}), _class3.contextTypes = _extends({}, BaseComponent.contextTypes || {}, additionalContext, {
				rescope: _propTypes2.default.object,
				$stores: _propTypes2.default.object
			}), _class3.displayName = "propsScoped(" + (BaseComponent.displayName || BaseComponent.name) + ")", _temp4), scope, use);
		}
	
		exports.default = Component;
		exports.Component = Component;
		exports.reScopeProps = reScopeProps;
		exports.rescopeProps = reScopeProps;
		exports.reScopeState = reScopeState;
		exports.rescopeState = reScopeState;
	
		/***/
	},
	/* 4 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(29);
	
		/***/
	},
	/* 5 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(64);
	
		/***/
	},
	/* 6 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(65);
	
		/***/
	}]
	/******/);
	//# sourceMappingURL=ReScope.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
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
	
		var _Store = __webpack_require__(5);
	
		var _Store2 = _interopRequireDefault(_Store);
	
		var _index = __webpack_require__(7);
	
		var _index2 = _interopRequireDefault(_index);
	
		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}
	
		// will use as external the index in dist
	
		_Scope2.default.Store = _Store2.default; /*
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
	
		_index2.default.Scope = _Scope2.default;
		_index2.default.Context = _Scope2.default;
		_index2.default.Store = _Store2.default;
		debugger;
		try {
			__webpack_require__(8);
		} catch (e) {}
	
		exports.default = _index2.default;
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
		    EventEmitter = __webpack_require__(3),
		    shortid = __webpack_require__(4),
		    __proto__push = function __proto__push(target, id, parent) {
			var fn = function fn() {};
			fn.prototype = parent ? new parent._[id]() : target[id] || {};
			target[id] = new fn();
			target._[id] = fn;
		},
		    openScopes = {};
	
		/**
	  * Base Scope object
	  */
		var Scope = (_temp = _class = function (_EventEmitter) {
			_inherits(Scope, _EventEmitter);
	
			_createClass(Scope, null, [{
				key: 'getScope',
				// all active scopes
	
				// if > 0, will wait 'persistenceTm' ms before destroy when dispose reach 0
				value: function getScope(scopes) {
					var skey = is.array(scopes) ? scopes.sort(function (a, b) {
						if (a.firstname < b.firstname) return -1;
						if (a.firstname > b.firstname) return 1;
						return 0;
					}).join('::') : scopes;
					return openScopes[skey] = openScopes[skey] || new Scope({}, { id: skey });
				}
			}]);
	
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
				    rootEmitter = _ref2.rootEmitter;
	
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
	
				_this.stores = {};
				_this.state = {};
				_this.data = {};
	
				_this.parent = parent;
				_this._ = _;
	
				if (parent && parent.dead) throw new Error("Can't use a dead scope as parent !");
	
				__proto__push(_this, 'stores', parent);
				__proto__push(_this, 'state', parent);
				__proto__push(_this, 'data', parent);
	
				_this.sources = [];
				_.childScopes = [];
				_.childScopesList = [];
				_.unStableChilds = 0;
	
				_this.__retains = { all: 0 };
				_this.__locks = { all: 1 };
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
	
					this.stores = {};
					this.state = {};
					this.data = {};
					targetCtx.on(lists);
					__proto__push(this, 'stores', parent);
					__proto__push(this, 'state', parent);
					__proto__push(this, 'data', parent);
	
					this.relink(this._._scope, this, false, true);
					this._._mixed.forEach(function (ctx) {
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
							_this5._mount(id, state[id], data[id]);
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
								return _this6._mount(id, null, v);
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
					this.retainStores(Object.keys(lastRevs));
	
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
							this.disposeStores(Object.keys(followers[i][3]));
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
					var output = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
					var ctx = this._._scope;
					if (output[this._id]) return;
	
					output[this._id] = {};
	
					Object.keys(ctx).forEach(function (id) {
						if (is.fn(ctx[id])) return;
	
						ctx[id].serialize(output);
					});
	
					this._.childScopes.forEach(function (ctx) {
						!ctx._.isLocalId && ctx.serialize(output);
					});
	
					this._._mixed.forEach(function (ctx) {
						!ctx._.isLocalId && ctx.serialize(output);
					});
	
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
					var _this10 = this;
	
					var ctx = this._._scope;
	
					snapshot[this._id] && Object.keys(ctx).forEach(function (name) {
						var snap = snapshot[_this10._id + '/' + name];
	
						if (snap) {
	
							if (force && !is.fn(ctx[name])) ctx[name].destroy();
	
							_this10.mount(name, snapshot); // quiet
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
	    * Dispatch an action starting from the top parent & mixed scopes, in all stores
	    *
	    * @param action
	    * @param data
	    * @returns {Scope}
	    */
	
			}, {
				key: 'dispatch',
				value: function dispatch(action, data) {
					var _this11 = this;
	
					this._._mixed.forEach(function (ctx) {
						return ctx.dispatch(action, data);
					});
					this.parent && this.parent.dispatch(action, data);
					Object.keys(this._._scope).forEach(function (id) {
						if (!is.fn(_this11._._scope[id])) _this11._._scope[id].trigger(action, data);
					});
	
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
					var _this12 = this;
	
					if (this._stable) return cb(null, this.data);
					this.once('stable', function (e) {
						return cb(null, _this12.data);
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
					var _this13 = this;
	
					var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
					var reason = arguments[1];
	
					stores.forEach(function (id) {
						return _this13.stores[id] && _this13.stores[id].retain && _this13.stores[id].retain(reason);
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
					var _this14 = this;
	
					var stores = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
					var reason = arguments[1];
	
					stores.forEach(function (id) {
						return _this14.stores[id] && _this14.stores[id].dispose && _this14.stores[id].dispose(reason);
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
					var _this15 = this;
	
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
							_this15._.stabilizerTM = null;
							if (_this15.__locks.all) return;
	
							_this15._.propagTM && clearTimeout(_this15._.propagTM);
	
							_this15._stable = true;
							_this15.emit("stable", _this15);
	
							!_this15.dead && _this15._propag(); // stability can induce destroy
						});
					}
				}
	
				/**
	    * Propag stores updates basing theirs last updates
	    */
	
			}, {
				key: 'propag',
				value: function propag() {
					var _this16 = this;
	
					this._.propagTM && clearTimeout(this._.propagTM);
					this._.propagTM = setTimeout(function (e) {
						_this16._.propagTM = null;
						_this16._propag();
					}, 2);
				}
			}, {
				key: '_propag',
				value: function _propag() {
					var _this17 = this;
	
					if (this._.followers.length) this._.followers.forEach(function (_ref3) {
						var obj = _ref3[0],
						    key = _ref3[1],
						    as = _ref3[2],
						    lastRevs = _ref3[3],
						    remaps = _ref3[3];
	
						var data = _this17.getUpdates(lastRevs);
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
					var _this18 = this;
	
					this._.childScopes.push(ctx);
					var lists = {
						'stable': function stable(s) {
							_this18._.unStableChilds--;
							if (!_this18._.unStableChilds) _this18.emit("stableTree", _this18);
						},
						'unstable': function unstable(s) {
							_this18._.unStableChilds++;
							if (1 == _this18._.unStableChilds) _this18.emit("unstableTree", _this18);
						},
						'stableTree': function stableTree(s) {
							_this18._.unStableChilds--;
							if (!_this18._.unStableChilds) _this18.emit("stableTree", _this18);
						},
						'unstableTree': function unstableTree(s) {
							_this18._.unStableChilds++;
							if (1 == _this18._.unStableChilds) _this18.emit("unstableTree", _this18);
						},
						'destroy': function destroy(ctx) {
							if (ctx._.unStableChilds) _this18._.unStableChilds--;
							if (!ctx.isStable()) _this18._.unStableChilds--;
	
							if (!_this18._.unStableChilds) _this18.emit("stableTree", _this18);
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
					var _this19 = this;
	
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
								_this19.then(function (s) {
									!_this19.__retains.all && _this19.destroy();
								});
							}, this._.persistenceTm);
						} else {
							this.then(function (s) {
								return !_this19.__retains.all && _this19.destroy();
							});
						}
					}
				}
	
				/**
	    * order destroy of local stores
	    */
	
			}, {
				key: 'destroy',
				value: function destroy() {
					var _this20 = this;
	
					var ctx = this._._scope;
					//console.warn("destroy", this._id);
					this.dead = true;
					this.emit("destroy", this);
					for (var key in ctx) {
						if (!is.fn(ctx[key])) {
							!ctx[key]._autoDestroy && ctx[key].dispose("scoped");
						}
					}Object.keys(this._._listening).forEach(function (id) {
						return _this20._._scope[id].removeListener(_this20._._listening[id]);
					});
	
					this._.stabilizerTM && clearTimeout(this._.stabilizerTM);
					this._.propagTM && clearTimeout(this._.propagTM);
	
					if (!this._.isLocalId) delete openScopes[this._id];
					this._.followers.map(this.unBind.bind(this));
	
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
		}(EventEmitter), _class.persistenceTm = 1, _class.Store = null, _class.scopes = openScopes, _temp);
		exports.default = Scope;
		module.exports = exports['default'];
	
		/***/
	},
	/* 2 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(14);
	
		/***/
	},
	/* 3 */
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
		var is = __webpack_require__(2);
	
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
	/* 4 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(15);
	
		/***/
	},
	/* 5 */
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
	
		/**
	  * Ultra scalable state-aware store
	  *
	  * @todo : lot of optims...
	  */
	
		var is = __webpack_require__(2),
		    Scope = __webpack_require__(1),
		    EventEmitter = __webpack_require__(3),
		    TaskSequencer = __webpack_require__(6),
		    shortid = __webpack_require__(4),
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
						_this.state = _extends({}, initialState || {}, scope.map(_this, _this._use));
						if (_this.shouldApply(_this.state) && _this.data === undefined) {
							_this.data = _this.apply(_this.data, _this.state, _this.state);
							applied = true;
						} else _this._changesSW = _extends({}, _this.state);
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
						if (!this.state || pState.hasOwnProperty(k) && (pState[k] != this.state[k] || this.state[k] && pState[k] && pState[k]._rev != this._revs[k] // rev/hash update
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
	
					var output = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
					var completeState = arguments[1];
	
					var refs = is.array(this._use) && this._use.reduce(function (map, key) {
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
						state: this.state && (completeState ? _extends({}, this.state) : Object.keys(this.state).reduce(function (h, k) {
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
								_this8.then(function (s) {
									!_this8.__retains.all && _this8.destroy();
								});
							}, this._persistenceTm);
						} else {
							this.then(function (s) {
								return !_this8.__retains.all && _this8.destroy();
							});
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
	
				, set: function set(v) {
					//console.groupCollapsed("Rescope store : Setting datas is depreciated, use data");
					//console.log("Rescope store : Setting datas is depreciated, use data", (new Error()).stack);
					//console.groupEnd();
	
					this.data = v;
				}
			}]);
	
			return Store;
		}(EventEmitter), _class.use = [], _class.staticScope = new Scope({}, { id: "static" }), _class.state = undefined, _class.persistenceTm = false, _temp);
		exports.default = Store;
		module.exports = exports['default'];
	
		/***/
	},
	/* 6 */
	/***/function (module, exports) {
	
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
	
		/**
	  * Minimal push sequencer, apply stores specific task in the right order (root stores first)
	  */
		var taskQueue = [],
		    curWeight = 0,
		    maxWeight = 0,
		    minWeight = 0,
		    taskCount = 0,
	
	
		//deSyncSteps = 1000,
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
		};
	
		function runNow() {
			if (!isRunning) {
				run();
			}
		}
	
		function run() {
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
	
		/***/
	},
	/* 7 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(25);
	
		/***/
	},
	/* 8 */
	/***/function (module, exports) {
	
		module.exports = __webpack_require__(26);
	
		/***/
	}]
	/******/);
	//# sourceMappingURL=ReScope.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";
	
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
	/***/function (module, exports) {
	
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
	
		/***/
	}]
	/******/);
	//# sourceMappingURL=index.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(30);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(31);
	
	var ReactBaseClasses = __webpack_require__(32);
	var ReactChildren = __webpack_require__(41);
	var ReactDOMFactories = __webpack_require__(49);
	var ReactElement = __webpack_require__(43);
	var ReactPropTypes = __webpack_require__(55);
	var ReactVersion = __webpack_require__(60);
	
	var createReactClass = __webpack_require__(61);
	var onlyChild = __webpack_require__(63);
	
	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;
	
	if (process.env.NODE_ENV !== 'production') {
	  var lowPriorityWarning = __webpack_require__(40);
	  var canDefineProperty = __webpack_require__(37);
	  var ReactElementValidator = __webpack_require__(50);
	  var didWarnPropTypesDeprecated = false;
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}
	
	var __spread = _assign;
	var createMixin = function (mixin) {
	  return mixin;
	};
	
	if (process.env.NODE_ENV !== 'production') {
	  var warnedForSpread = false;
	  var warnedForCreateMixin = false;
	  __spread = function () {
	    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
	    warnedForSpread = true;
	    return _assign.apply(null, arguments);
	  };
	
	  createMixin = function (mixin) {
	    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
	    warnedForCreateMixin = true;
	    return mixin;
	  };
	}
	
	var React = {
	  // Modern
	
	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },
	
	  Component: ReactBaseClasses.Component,
	  PureComponent: ReactBaseClasses.PureComponent,
	
	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,
	
	  // Classic
	
	  PropTypes: ReactPropTypes,
	  createClass: createReactClass,
	  createFactory: createFactory,
	  createMixin: createMixin,
	
	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,
	
	  version: ReactVersion,
	
	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};
	
	if (process.env.NODE_ENV !== 'production') {
	  var warnedForCreateClass = false;
	  if (canDefineProperty) {
	    Object.defineProperty(React, 'PropTypes', {
	      get: function () {
	        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
	        didWarnPropTypesDeprecated = true;
	        return ReactPropTypes;
	      }
	    });
	
	    Object.defineProperty(React, 'createClass', {
	      get: function () {
	        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
	        warnedForCreateClass = true;
	        return createReactClass;
	      }
	    });
	  }
	
	  // React.DOM factories are deprecated. Wrap these methods so that
	  // invocations of the React.DOM namespace and alert users to switch
	  // to the `react-dom-factories` package.
	  React.DOM = {};
	  var warnedForFactories = false;
	  Object.keys(ReactDOMFactories).forEach(function (factory) {
	    React.DOM[factory] = function () {
	      if (!warnedForFactories) {
	        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
	        warnedForFactories = true;
	      }
	      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
	    };
	  });
	}
	
	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(33),
	    _assign = __webpack_require__(31);
	
	var ReactNoopUpdateQueue = __webpack_require__(34);
	
	var canDefineProperty = __webpack_require__(37);
	var emptyObject = __webpack_require__(38);
	var invariant = __webpack_require__(39);
	var lowPriorityWarning = __webpack_require__(40);
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	ReactComponent.prototype.isReactComponent = {};
	
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
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
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
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};
	
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	          return undefined;
	        }
	      });
	    }
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
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;
	
	module.exports = {
	  Component: ReactComponent,
	  PureComponent: ReactPureComponent
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	'use strict';
	
	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */
	
	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;
	
	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;
	
	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }
	
	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';
	
	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame
	
	  throw error;
	}
	
	module.exports = reactProdInvariant;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var warning = __webpack_require__(35);
	
	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
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
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},
	
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
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
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
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
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
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};
	
	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(36);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	'use strict';
	
	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}
	
	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
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
	
	if (process.env.NODE_ENV !== 'production') {
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
	
	module.exports = lowPriorityWarning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var PooledClass = __webpack_require__(42);
	var ReactElement = __webpack_require__(43);
	
	var emptyFunction = __webpack_require__(36);
	var traverseAllChildren = __webpack_require__(46);
	
	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;
	
	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
	
	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;
	
	  func.call(context, child, bookKeeping.count++);
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
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
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
	
	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;
	
	
	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
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
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}
	
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
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
	
	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}
	
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}
	
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}
	
	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};
	
	module.exports = ReactChildren;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(33);
	
	var invariant = __webpack_require__(39);
	
	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};
	
	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};
	
	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};
	
	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};
	
	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};
	
	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;
	
	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};
	
	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler
	};
	
	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(31);
	
	var ReactCurrentOwner = __webpack_require__(44);
	
	var warning = __webpack_require__(35);
	var canDefineProperty = __webpack_require__(37);
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	var REACT_ELEMENT_TYPE = __webpack_require__(45);
	
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	
	var specialPropKeyWarningShown, specialPropRefWarningShown;
	
	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
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
	  if (process.env.NODE_ENV !== 'production') {
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
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
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
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
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
	
	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	
	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
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
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }
	
	  return element;
	};
	
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
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
	    if (process.env.NODE_ENV !== 'production') {
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
	  if (process.env.NODE_ENV !== 'production') {
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
	};
	
	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};
	
	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	
	  return newElement;
	};
	
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
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
	};
	
	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};
	
	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	'use strict';
	
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
	
	module.exports = ReactCurrentOwner;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	'use strict';
	
	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
	
	module.exports = REACT_ELEMENT_TYPE;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(33);
	
	var ReactCurrentOwner = __webpack_require__(44);
	var REACT_ELEMENT_TYPE = __webpack_require__(45);
	
	var getIteratorFn = __webpack_require__(47);
	var invariant = __webpack_require__(39);
	var KeyEscapeUtils = __webpack_require__(48);
	var warning = __webpack_require__(35);
	
	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	
	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */
	
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */
	
	var didWarnAboutMaps = false;
	
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
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
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
	
	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
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
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
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
	
	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	'use strict';
	
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
	
	module.exports = getIteratorFn;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	'use strict';
	
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
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
	
	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}
	
	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};
	
	module.exports = KeyEscapeUtils;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(43);
	
	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(50);
	  createDOMFactory = ReactElementValidator.createFactory;
	}
	
	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),
	
	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};
	
	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */
	
	'use strict';
	
	var ReactCurrentOwner = __webpack_require__(44);
	var ReactComponentTreeHook = __webpack_require__(51);
	var ReactElement = __webpack_require__(43);
	
	var checkReactTypeSpec = __webpack_require__(52);
	
	var canDefineProperty = __webpack_require__(37);
	var getIteratorFn = __webpack_require__(47);
	var warning = __webpack_require__(35);
	var lowPriorityWarning = __webpack_require__(40);
	
	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	function getSourceInfoErrorAddendum(elementProps) {
	  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
	    var source = elementProps.__source;
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
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
	      info = ' Check the top-level render call using <' + parentName + '>.';
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
	
	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});
	
	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;
	
	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }
	
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
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
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
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
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}
	
	var ReactElementValidator = {
	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      if (typeof type !== 'function' && typeof type !== 'string') {
	        var info = '';
	        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
	        }
	
	        var sourceInfo = getSourceInfoErrorAddendum(props);
	        if (sourceInfo) {
	          info += sourceInfo;
	        } else {
	          info += getDeclarationErrorAddendum();
	        }
	
	        info += ReactComponentTreeHook.getCurrentStackAddendum();
	
	        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
	        ReactComponentTreeHook.pushNonStandardWarningStack(true, currentSource);
	        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
	        ReactComponentTreeHook.popNonStandardWarningStack();
	      }
	    }
	
	    var element = ReactElement.createElement.apply(this, arguments);
	
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
	
	    validatePropTypes(element);
	
	    return element;
	  },
	
	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            lowPriorityWarning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }
	
	    return validatedFactory;
	  },
	
	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }
	};
	
	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2016-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(33);
	
	var ReactCurrentOwner = __webpack_require__(44);
	
	var invariant = __webpack_require__(39);
	var warning = __webpack_require__(35);
	
	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty
	  // Strip regex characters so we can use it for regex
	  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
	  // Remove hasOwnProperty from the template to make it generic
	  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}
	
	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);
	
	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;
	
	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();
	
	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };
	
	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};
	
	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };
	
	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };
	
	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}
	
	var unmountedIDs = [];
	
	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;
	
	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}
	
	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}
	
	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}
	
	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}
	
	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;
	
	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }
	
	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var name = getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }
	
	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;
	
	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },
	
	
	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs,
	
	  pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
	    if (typeof console.reactStack !== 'function') {
	      return;
	    }
	
	    var stack = [];
	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;
	
	    try {
	      if (isCreatingElement) {
	        stack.push({
	          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
	          fileName: currentSource ? currentSource.fileName : null,
	          lineNumber: currentSource ? currentSource.lineNumber : null
	        });
	      }
	
	      while (id) {
	        var element = ReactComponentTreeHook.getElement(id);
	        var parentID = ReactComponentTreeHook.getParentID(id);
	        var ownerID = ReactComponentTreeHook.getOwnerID(id);
	        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
	        var source = element && element._source;
	        stack.push({
	          name: ownerName,
	          fileName: source ? source.fileName : null,
	          lineNumber: source ? source.lineNumber : null
	        });
	        id = parentID;
	      }
	    } catch (err) {
	      // Internal state is messed up.
	      // Stop building the stack (it's just a nice to have).
	    }
	
	    console.reactStack(stack);
	  },
	  popNonStandardWarningStack: function () {
	    if (typeof console.reactStackEnd !== 'function') {
	      return;
	    }
	    console.reactStackEnd();
	  }
	};
	
	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(33);
	
	var ReactPropTypeLocationNames = __webpack_require__(53);
	var ReactPropTypesSecret = __webpack_require__(54);
	
	var invariant = __webpack_require__(39);
	var warning = __webpack_require__(35);
	
	var ReactComponentTreeHook;
	
	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(51);
	}
	
	var loggedTypeFailures = {};
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;
	
	        var componentStackInfo = '';
	
	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(51);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }
	
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}
	
	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	'use strict';
	
	var ReactPropTypeLocationNames = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}
	
	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _require = __webpack_require__(43),
	    isValidElement = _require.isValidElement;
	
	var factory = __webpack_require__(56);
	
	module.exports = factory(isValidElement);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	// React 15.5 references this module, and assumes PropTypes are still callable in production.
	// Therefore we re-export development-only version with all the PropTypes checks here.
	// However if one is migrating to the `prop-types` npm library, they will go through the
	// `index.js` entry point, and it will branch depending on the environment.
	var factory = __webpack_require__(57);
	module.exports = function(isValidElement) {
	  // It is still allowed in 15.5.
	  var throwOnDirectAccess = false;
	  return factory(isValidElement, throwOnDirectAccess);
	};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(36);
	var invariant = __webpack_require__(39);
	var warning = __webpack_require__(35);
	var assign = __webpack_require__(31);
	
	var ReactPropTypesSecret = __webpack_require__(58);
	var checkPropTypes = __webpack_require__(59);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(39);
	  var warning = __webpack_require__(35);
	  var ReactPropTypesSecret = __webpack_require__(58);
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	module.exports = '15.6.2';

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _require = __webpack_require__(32),
	    Component = _require.Component;
	
	var _require2 = __webpack_require__(43),
	    isValidElement = _require2.isValidElement;
	
	var ReactNoopUpdateQueue = __webpack_require__(34);
	var factory = __webpack_require__(62);
	
	module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(31);
	
	var emptyObject = __webpack_require__(38);
	var _invariant = __webpack_require__(39);
	
	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(35);
	}
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isInherited = name in Constructor;
	      _invariant(
	        !isInherited,
	        'ReactClass: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be ' +
	          'due to a mixin.',
	        name
	      );
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	'use strict';
	
	var _prodInvariant = __webpack_require__(33);
	
	var ReactElement = __webpack_require__(43);
	
	var invariant = __webpack_require__(39);
	
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
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
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}
	
	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	/* globals window, HTMLElement */
	
	'use strict';
	
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
/* 65 */
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
	  module.exports = __webpack_require__(57)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(66)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(36);
	var invariant = __webpack_require__(39);
	var ReactPropTypesSecret = __webpack_require__(58);
	
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
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp, _class2, _temp2, _class3, _temp3, _class4, _temp4; /*
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
	 * @author Nathanael BRAUN
	 *
	 * Date: 03/12/2016
	 * Time: 09:28
	 */
	
	
	var _rescope = __webpack_require__(13);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var stubs = __webpack_require__(84);
	
	var status = new (_temp = _class = function (_Store) {
	    _inherits(_class, _Store);
	
	    function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }
	
	    return _class;
	}(_rescope.Store), _class.context = 'static', _class.state = {}, _class.actions = {
	    userEvents: function userEvents(msg) {
	        return { userEvents: msg };
	    },
	    currentUser: function currentUser(msg) {
	        return { currentUser: msg };
	    }
	}, _temp)();
	
	var MyStoreContext = {
	    status: status,
	    appState: (_temp2 = _class2 = function (_Store2) {
	        _inherits(appState, _Store2);
	
	        function appState() {
	            _classCallCheck(this, appState);
	
	            return _possibleConstructorReturn(this, (appState.__proto__ || Object.getPrototypeOf(appState)).apply(this, arguments));
	        }
	
	        return appState;
	    }(_rescope.Store), _class2.state = {
	        currentUserId: "MrNice"
	    }, _class2.actions = {
	        switchUser: function switchUser(currentUserId) {
	            return { currentUserId: currentUserId };
	        }
	    }, _temp2),
	    currentUser: (_temp3 = _class3 = function (_Store3) {
	        _inherits(currentUser, _Store3);
	
	        function currentUser() {
	            _classCallCheck(this, currentUser);
	
	            return _possibleConstructorReturn(this, (currentUser.__proto__ || Object.getPrototypeOf(currentUser)).apply(this, arguments));
	        }
	
	        _createClass(currentUser, [{
	            key: "apply",
	            // list of source stores id
	
	            value: function apply(data, _ref, changes) {
	                var _this4 = this;
	
	                var NewUserId = _ref.appState.currentUserId;
	
	                var LastUserId = data && data._id;
	
	                console.info("currentUser state updated : ", changes);
	
	                if (NewUserId != LastUserId) {
	                    this.wait(); // don't propag until released
	                    setTimeout(function () {
	                        // get the user record or whatever...
	                        _this4.push({
	                            _id: NewUserId,
	                            login: NewUserId
	                        }, function () {
	                            status.trigger("currentUser", JSON.stringify(_this4.data));
	                        });
	
	                        _this4.release();
	                    }, 500);
	                    status.trigger("currentUser", "user id change ! doing some async...");
	                }
	
	                return data;
	            }
	        }]);
	
	        return currentUser;
	    }(_rescope.Store), _class3.use = ["appState"], _temp3),
	    userEvents: (_temp4 = _class4 = function (_Store4) {
	        _inherits(userEvents, _Store4);
	
	        function userEvents() {
	            _classCallCheck(this, userEvents);
	
	            return _possibleConstructorReturn(this, (userEvents.__proto__ || Object.getPrototypeOf(userEvents)).apply(this, arguments));
	        }
	
	        _createClass(userEvents, [{
	            key: "apply",
	            value: function apply(data, _ref2, changes) {
	                var _this6 = this;
	
	                var myUserId = _ref2.myUserId;
	
	                var _ref3 = data || {},
	                    _ref3$cUserId = _ref3.cUserId,
	                    cUserId = _ref3$cUserId === undefined ? void 0 : _ref3$cUserId;
	
	                if (myUserId != cUserId) {
	                    this.wait(); // do some async without pushing
	                    setTimeout(function () {
	                        // get somme user events or whatever...
	                        _this6.push({
	                            userId: myUserId,
	                            count: stubs[myUserId].length,
	                            events: stubs[myUserId],
	                            eventsByType: stubs[myUserId].reduce(function (res, item) {
	                                res[item.type] = res[item.type] || [res[item.type]];
	                                res[item.type].push(item);
	                                return res;
	                            }, {})
	                        }, function () {
	                            status.trigger("userEvents", stubs[myUserId].length + " events");
	                        });
	                        _this6.release();
	                    }, 500);
	                    status.trigger("userEvents", "user data change ! doing some async...");
	                }
	
	                return data;
	            }
	        }]);
	
	        return userEvents;
	    }(_rescope.Store), _class4.use = {
	        "!currentUser._id": "myUserId"
	    }, _temp4)
	};
	
	exports.default = _extends({}, MyStoreContext);
	module.exports = exports["default"];

/***/ }),
/* 84 */
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
	
	/**
	 * @author Nathanael BRAUN
	 *
	 * Date: 25/01/2017
	 * Time: 09:16
	 */
	exports.default = {
	    "MrNice": [{
	        type: "event",
	        text: "nice event"
	    }, {
	        type: "news",
	        text: "nice news"
	    }, {
	        type: "poke",
	        text: "some poke"
	    }, {
	        type: "event",
	        text: "another event"
	    }, {
	        type: "comment",
	        text: "another comment"
	    }],
	    "MissTick": [{
	        type: "event",
	        text: "some events"
	    }, {
	        type: "news",
	        text: "some news"
	    }, {
	        type: "poke",
	        text: "some poke"
	    }, {
	        type: "event",
	        text: "another event"
	    }]
	};
	module.exports = exports["default"];

/***/ }),
/* 85 */,
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _rescope = __webpack_require__(13);
	
	var _rescope2 = _interopRequireDefault(_rescope);
	
	var _StoresContext = __webpack_require__(83);
	
	var _StoresContext2 = _interopRequireDefault(_StoresContext);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	 * @author Nathanael BRAUN
	 *
	 * Date: 25/01/2017
	 * Time: 11:08
	 */
	function NewsListComp() {
	    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.createElement('div');
	
	
	    this.setState = function (state) {
	        console.log("redraw");
	        target.innerHTML = state.userEvents && state.userEvents.events && state.userEvents.events.map(function (evt) {
	            return "\n                                    <div style=\"border: solid 1px lightgrey;border-radius: 3px\">\n                                        <b><u><center>Event type : " + evt.type + "</center></u></b>\n                                        <p>" + evt.text + "</p>\n                                    </div>";
	        }).join() || "<b><u><center>Loading...</center></u></b>";
	    };
	    this.node = target;
	}
	
	window.Rescope = _rescope2.default;
	window.StoreContext = _StoresContext2.default;
	window.NewsListComp = NewsListComp;
	
	exports.default = NewsListComp;
	module.exports = exports["default"];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./dist/hello/vanilla/index.html";

/***/ })
/******/ ]);
//# sourceMappingURL=App.js.map