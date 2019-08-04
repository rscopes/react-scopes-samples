require("webpack-inherit/etc/node/loadModulePaths.js").loadPaths({allModulePath:["node_modules"],cDir:__dirname+"/.."},"dist"),
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
module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=40)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("rscopes")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("@material-ui/core/Fab")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-rescope")},function(e,t){e.exports=require("@babel/runtime/helpers/toConsumableArray")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t){e.exports=require("@material-ui/icons/Save")},function(e,t){e.exports=require("superagent")},function(e,t){e.exports=require("shortid")},function(e){e.exports=JSON.parse('{"project":{"name":"simple-rs-app","author":"Nathan Braun <n8tz.js@gmail.com>","version":"1.0.0"},"buildDate":1564922061953,"profile":"api","projectRoot":"G:\\\\n8tz\\\\libs\\\\rScopes\\\\rescope-samples\\\\simple-rs-app","vars":{"rootAlias":"App","production":true,"externals":true},"allCfg":[{"rootFolder":"App","vars":{"production":true,"externals":true},"extend":["wpi-react-rs-sass-ssr"]},{"rootFolder":"App","extend":["wpi-react-hmr-ssr"]},{"rootFolder":"App","config":"./etc/wp/webpack.config.api.js","extend":[]}],"allModId":["wpi-react-rs-sass-ssr","wpi-react-hmr-ssr"]}')},function(e,t,r){"use strict";r.r(t);var n,o,i,a=r(2),s=r.n(a),c=r(3),l=r.n(c),u=r(4),p=r.n(u),d=r(1),f=r.n(d),h=r(5),m=r.n(h),g=r(0),b=r.n(g),v=r(13),y=r.n(v),E=r(7),w=r.n(E),O=r(27),S=r(6);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var j=Object(S.reScope)((i=o=function(e){function t(){var e,r;s()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=p()(this,(e=f()(t)).call.apply(e,[this].concat(o)))).state={},r.saveState=function(e,t){var n=r.props,o=n.$actions,i=n.record;o.updateWidget(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(r,!0).forEach(function(t){y()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},i,{size:r.state.size||i.size,position:r.state.position||i.position}))},r}return m()(t,e),l()(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.record,n=(r=void 0===r?{}:r).position,o=r.size,i=t.record,a=t.children,s=t.disabled,c=(t.$actions,t.onSelect),l=t.selected,u=this.state;return b.a.createElement(O.Rnd,{className:"Widget",disableDragging:!!s,enableResizing:s,style:l?{zIndex:2e3}:void 0,size:u.size||o,position:u.position||n,onDragStop:this.saveState,onResizeStop:this.saveState,onDrag:function(t,r){!l&&c(i),e.setState({position:{x:r.x,y:r.y}})},onResize:function(t,r,n,o,i){e.setState({position:i,size:{width:n.offsetWidth,height:n.offsetHeight}})}},b.a.createElement("div",{className:" content"},a))}}]),t}(b.a.Component),o.propTypes={selected:w.a.bool,disabled:w.a.bool,record:w.a.object.isRequired,onSelect:w.a.func},n=i))||n,T=r(8),N=r.n(T),A=r(28),R=r.n(A),D=r(29),k=r.n(D),_=r(14),I=r.n(_),q=r(30),P=r.n(q),W=r(15),C=r.n(W);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var L=function(e){function t(){var e;return s()(this,t),(e=p()(this,f()(t).apply(this,arguments))).checkUpdate=function(){var t=e.data,r=t.location,n=t.fetched;r&&n<Date.now()-6e4&&(console.log("search ",r),e.doSearch(r))},e._refreshTm=setInterval(e.checkUpdate,1e4),e}return m()(t,e),l()(t,[{key:"destroy",value:function(){P()(f()(t.prototype),"destroy",this).call(this),clearInterval(this._refreshTm)}},{key:"apply",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=r.location;r.results,r.record;return(n=n||t.defaultLocation)==e.location&&e.results?e:n?(this.doSearch(n),{location:n,fetching:!0}):e}},{key:"doSearch",value:function(e){var t=this,r=this.nextState;this.wait(),C.a.get(r.src+e).then(function(n){e===t.data.location&&(t.push({results:n.body,location:e,fetching:!1,fetched:Date.now()}),r.record&&t.$actions.updateWidget(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(r,!0).forEach(function(t){y()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},r.record,{location:e})))}).then(function(e){return t.release()}).catch(function(e){return t.release()}),this.push({location:e,fetching:!0})}}]),t}(S.Store);L.state={src:"http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",autoUpdate:1e4},L.actions={updateWeatherSearch:function(e){return e.length,{location:e}}};var z,H,M,U,B,G=r(31),Y=r.n(G),$=function(e){var t=e.weatherData;e.lastQuery;return b.a.createElement("div",{className:"WeatherInfos"},b.a.createElement("div",{className:"location"},t.name," ",b.a.createElement("sub",null,"(",Y()(1e3*t.dt).fromNow(),")")),b.a.createElement("div",{className:"background"},b.a.createElement("img",{src:"https://source.unsplash.com/600x400/?day,sky,"+t.name})),b.a.createElement("div",{className:"picto"},t.weather[0]&&b.a.createElement("img",{src:"http://openweathermap.org/img/w/"+t.weather[0].icon+".png"}),b.a.createElement("br",null),t.weather[0]&&t.weather[0].description),b.a.createElement("div",{className:"infos"},b.a.createElement("div",{className:"temp"},t.main.temp,"°"),b.a.createElement("div",{className:"wind"},t.wind.speed," mh")))},J=Object(S.withScope)({WeatherSearch:L})(z=Object(S.propsToScope)(["record.location:WeatherSearch.defaultLocation","record:WeatherSearch.record"])(z=Object(S.scopeToProps)("WeatherSearch")((M=H=function(e){function t(){var e,r;s()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=p()(this,(e=f()(t)).call.apply(e,[this].concat(o)))).state={},r}return m()(t,e),l()(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.record,n=t.$actions,o=t.disabled,i=t.WeatherSearch,a=this.state;return b.a.createElement("div",{className:"WeatherBlock"},!this.state.editing&&b.a.createElement(b.a.Fragment,null,i.results&&b.a.createElement($,{weatherData:i.results})||i.fetching&&"Loading...."||"Edit me !",!o&&b.a.createElement(b.a.Fragment,null,b.a.createElement(N.a,{"aria-label":"edit",className:"edit",onClick:function(t){return e.setState({editing:!0})}},b.a.createElement(k.a,null)),b.a.createElement(N.a,{"aria-label":"Delete",className:"delete",onClick:function(e){return n.rmWidget(r._id)}},b.a.createElement(R.a,null))))||b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:"search"},b.a.createElement("input",{type:"text",onChange:function(t){e.setState({searching:t.target.value}),t.target.value.length>2&&n.updateWeatherSearch(t.target.value)},value:void 0!==a.searching?a.searching:r.location,onMouseDown:function(e){return e.stopPropagation()}})),i.fetching?"Loading....":i.results&&b.a.createElement($,{weatherData:i.results}),b.a.createElement(N.a,{"aria-label":"Save",className:"save",disabled:r.fetching,onClick:function(t){return e.setState({editing:!1})}},b.a.createElement(I.a,null))))}}]),t}(b.a.Component),H.propTypes={record:w.a.object.isRequired,disabled:w.a.bool},z=M))||z)||z)||z,Q=Object(S.scopeToProps)("widgets","appState")(U=function(e){function t(){var e,r;s()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=p()(this,(e=f()(t)).call.apply(e,[this].concat(o)))).state={},r}return m()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.widgets,r=void 0===t?{items:[]}:t,n=e.appState;return b.a.createElement("div",null,b.a.createElement("div",{className:"desk"},r.items.map(function(e){return b.a.createElement(j,{key:e._id,record:e,disabled:!0,selected:e._id==n.selectedWidgetId},b.a.createElement(J,{record:e,disabled:!0}))})))}}]),t}(b.a.Component))||U,V=r(32),Z=r.n(V),K=r(33),X=r.n(K),ee=Object(S.scopeToProps)("widgets","appState")(B=function(e){function t(){var e,r;s()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=p()(this,(e=f()(t)).call.apply(e,[this].concat(o)))).state={},r}return m()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.widgets,r=void 0===t?{items:[]}:t,n=e.$actions,o=e.appState;return Z()(this.state),b.a.createElement("div",null,b.a.createElement("div",{className:"desk"},r.items.map(function(e){return b.a.createElement(j,{key:e._id,record:e,onSelect:function(t){return n.selectWidget(e._id)},selected:e._id==o.selectedWidgetId},b.a.createElement(J,{record:e}))})),b.a.createElement(N.a,{"aria-label":"edit",className:"newBtn button",onClick:function(e){return n.newWidget()}},b.a.createElement(X.a,null)),b.a.createElement(N.a,{"aria-label":"Delete",className:"saveBtn button",onClick:function(e){return n.saveState()}},b.a.createElement(I.a,null)))}}]),t}(b.a.Component))||B,te=r(9),re=r(34),ne=r.n(re),oe=r(35),ie=r.n(oe),ae=r(20),se=r.n(ae),ce=r(36),le=r.n(ce),ue=r(37),pe=r.n(ue),de=r(38),fe=r.n(de);r(41);r.d(t,"default",function(){return he});var he=function(e){function t(){var e,r;s()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=p()(this,(e=f()(t)).call.apply(e,[this].concat(o)))).state={},r}return m()(t,e),l()(t,[{key:"render",value:function(){var e=te.BrowserRouter;return this.props.location&&(e=te.StaticRouter),b.a.createElement(e,{location:this.props.location},b.a.createElement(b.a.Fragment,null,b.a.createElement(ne.a,{position:"static",className:"AppBar"},b.a.createElement(ie.a,null,b.a.createElement(le.a,{cvariant:"h6",color:"inherit",noWrap:!0},"Weather desk ( watch window.contexts to see scopes & stores )"),b.a.createElement("div",{className:"tools"},b.a.createElement(te.Link,{to:"/",className:"homeBtn"},b.a.createElement(se.a,{"aria-label":"home",color:"inherit"},b.a.createElement(fe.a,null))),b.a.createElement(te.Link,{to:"/settings",className:"settingsBtn"},b.a.createElement(se.a,{"aria-label":"settings",color:"inherit"},b.a.createElement(pe.a,null)))))),b.a.createElement(te.Route,{path:"/",exact:!0,component:Q}),b.a.createElement(te.Route,{path:"/settings",component:ee})))}}]),t}(b.a.Component)},function(e,t){e.exports=require("is")},function(e,t){e.exports=require("@material-ui/core/IconButton")},function(e,t){e.exports=require("@babel/runtime/helpers/applyDecoratedDescriptor")},function(e,t){e.exports=require("rescope-spells")},function(e,t){e.exports=require("@babel/runtime/helpers/slicedToArray")},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";r.r(t),r.d(t,"console",function(){return f});var n=r(11),o=r.n(n),i=r(23),a=r.n(i),s=r(17),c=r(46),l=r(19).function,u=new Function("try {return this===window;}catch(e){ return false;}")(),p=r(47),d=!u&&function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return""},n=c(t),o=function(r){return new e(t+"::"+r)};for(var i in n)n.hasOwnProperty(i)&&!this[i]&&l(n[i])&&(o[i]=n[i].bind(n,r(t)));return o.beep=function(){process.stdout.write(""),this.error.apply(this,arguments)},o}||function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return""},n=console,o=function(r){return new e(t+"::"+r)};for(var i in n)n.hasOwnProperty(i)&&!this[i]&&l(n[i])&&(o[i]=n[i].bind(console,r(t)));return o.beep=function(){this.error.apply(this,arguments)},o};c.inspectOptions={colors:!0},c.debug.enable(s.project.name+"*"),console.watch=console.watch||function(e,t){var r="$_"+t+"_$";e[r]=e[t],Object.defineProperty(e,t,{get:function(){return e[r]},set:function(n){console.log("setting "+t+" to "+n),e[r]=n}})},u&&!window.consoleHookDone&&function(){function e(e,t){return e.length>t?e.substring(0,t)+"...":e}window.consoleHookDone=!0;var t=console.warn,r=console.error,n=[],i=[],c=p(function(){console.groupCollapsed(" %d %cvendors warns happen%c (%s)",n.length,"color: orange; text-decoration: underline","color: gray; font-style: italic;font-size:.8em",e(n.map(function(e){return e.join(", ")}).join("\t"),50)),n.forEach(function(e){var r,n=a()(e,2),i=n[0],s=n[1];(r=console).groupCollapsed.apply(r,o()(i)),t.call(console,s),console.groupEnd()}),n=[],console.groupEnd()},2e3),l=p(function(){console.groupCollapsed(" %d %cvendors errors happen%c (%s)",i.length,"color: red; text-decoration: underline","color: gray; font-style: italic;font-size:.8em",e(i.map(function(e){return e.join(", ")}).join("\t"),50)),i.forEach(function(e){var t,n=a()(e,2),i=n[0],s=n[1];(t=console).groupCollapsed.apply(t,o()(i)),r.call(console,s),console.groupEnd()}),i=[],console.groupEnd()},2e3);console.warn=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];if(!r[0]&&r[0].startWith(s.project.name))return t.apply(void 0,r);n.push([r,(new Error).stack]),c()},console.trace=function(){},console.error=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];if(r[0].startWith(s.project.name))return t.apply(void 0,r);i.push([r,(new Error).stack]),l()}}();var f=new d(s.project.name);t.default=f},function(e,t,r){"use strict";r.r(t);var n,o,i,a,s=r(0),c=r.n(s),l=r(39),u=r.n(l),p=r(12),d=r(10),f=r(16),h=r.n(f),m=r(11),g=r.n(m),b=r(21),v=r.n(b),y=r(22),E=r(15),w=r.n(E),O=(n={appState:{selectedWidgetId:"rkUQHZrqM",selectWidget:function(e){return{selectedWidgetId:e}}},widgets:{items:[{_id:"rkUQHZrqM",location:"Lisbonne",size:{width:350,height:400},position:{x:403,y:111}},{_id:"YDNiVOf1j",size:{width:350,height:400},position:{x:21,y:108},location:"paris"},{_id:"FkQ3V9Hcb",size:{width:350,height:400},position:{x:771,y:108},location:"rome"},{_id:"bYNiMYG_0",size:{width:514,height:329},position:{x:28,y:525},location:"marseille"},{_id:"5SJehewl2",size:{width:563,height:328},position:{x:558,y:526},location:"montpellier"}],newWidget:function(){return function(e){return{items:[].concat(g()(e.items),[{_id:h.a.generate(),size:{width:350,height:200},position:{x:100+~~(600*Math.random()),y:100+~~(600*Math.random())}}])}}},updateWidget:function(e){return function(t){return{items:t.items.map(function(t){return t._id===e._id?e:t})}}},rmWidget:function(e){return function(t){return{items:t.items.filter(function(t){return t._id!==e})}}},saveState:function(){w.a.post("/",this.scopeObj.serialize()).then(function(e,t){console.log(e,t)})}}},v()(n,"appState",[y.asStore],(o=(o=Object.getOwnPropertyDescriptor(n,"appState"))?o.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return o}}),n),v()(n,"widgets",[y.asStore],(i=(i=Object.getOwnPropertyDescriptor(n,"widgets"))?i.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return i}}),n),n),S={renderTo:function(e){arguments.length>1&&void 0!==arguments[1]?arguments[1]:__STATE__;var t=new d.Scope(O,{id:"App",autoDestroy:!0}),n=Object(d.reScope)(t)(r(18).default);window.contexts=d.Scope.scopes,__STATE__&&t.restore(__STATE__),u.a.render(c.a.createElement(n,null),e)},renderSSR:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=h.a.generate(),i=new d.Scope(O,{id:o,autoDestroy:!1}),a=Object(d.reScope)(i)(r(18).default);e.state&&i.restore(e.state,{alias:"App"});var s,l=Object(p.renderToString)(c.a.createElement(a,{location:e.location})),u=i.isStableTree();i.onceStableTree(function(r){var o=i.serialize({alias:"App"});if(!u&&n<2)e.state=o,S.renderSSR(e,t,++n);else{try{s=e.tpl.render({app:l,state:JSON.stringify(o)})}catch(e){return t(e)}t(null,s,!u&&o)}i.destroy()})}},x=S,j=r(17),T=r(43),N=r(24),A=r(44);try{a=T.readFileSync("./lastAppState.json"),a=JSON.parse(a)}catch(e){a=void 0}t.default=function(e){e.get("/",function(e,t,r){x.renderSSR({location:e.url,state:a,tpl:A},function(e,r,n){t.send(200,r)})}),e.get("/settings",function(e,t,r){x.renderSSR({location:e.url,state:a,tpl:A},function(e,r,n){t.send(200,r)})}),e.use(N.static(j.projectRoot+"/dist")),e.use("/medias",N.static(j.projectRoot+"/public")),e.post("/",function(e,t,r){console.log("New state pushed"),a=e.body;try{T.writeFileSync("./lastAppState.json",JSON.stringify(e.body))}catch(e){}t.send(200,"ok")})}},function(e,t){e.exports=require("react-rnd")},function(e,t){e.exports=require("@material-ui/icons/Delete")},function(e,t){e.exports=require("@material-ui/icons/Edit")},function(e,t){e.exports=require("@babel/runtime/helpers/get")},function(e,t){e.exports=require("moment")},function(e,t){e.exports=require("@babel/runtime/helpers/objectDestructuringEmpty")},function(e,t){e.exports=require("@material-ui/icons/Add")},function(e,t){e.exports=require("@material-ui/core/AppBar")},function(e,t){e.exports=require("@material-ui/core/Toolbar")},function(e,t){e.exports=require("@material-ui/core/Typography")},function(e,t){e.exports=require("@material-ui/icons/Settings")},function(e,t){e.exports=require("@material-ui/icons/Home")},function(e,t){e.exports=require("react-dom")},function(e,t,r){e.exports=r(50)},function(e,t){},function(e,t,r){var n={"./index.js":26};function o(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=42},function(e,t){e.exports=require("fs")},function(e,t){var r;e.exports=((r=function(e){return'<!DOCTYPE html>\x3c!-- ~ Copyright (c)  2018 Wise Wild Web . ~ ~  MIT License ~ ~  Permission is hereby granted, free of charge, to any person obtaining a copy ~  of this software and associated documentation files (the "Software"), to deal ~  in the Software without restriction, including without limitation the rights ~  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell ~  copies of the Software, and to permit persons to whom the Software is ~  furnished to do so, subject to the following conditions: ~ ~  The above copyright notice and this permission notice shall be included in all ~  copies or substantial portions of the Software. ~ ~  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR ~  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, ~  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE ~  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER ~  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, ~  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE ~  SOFTWARE. ~ ~ @author : Nathanael Braun ~ @contact : n8tz.js@gmail.com --\x3e<html lang="en"><head> <meta charset="UTF-8"> <title>Weather desk</title> <script>window.__STATE__  ='+(e.state||"{}")+';<\/script> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></head><body><div id="app">'+(e.app||"")+'</div><script src="./App.vendors.js"><\/script><script src="./App.js"><\/script></body></html>'}).render=r,r)},function(e,t,r){var n={"./index.js":26};function o(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=45},function(e,t){e.exports=require("debug-logger")},function(e,t){e.exports=require("debounce")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("minimist")},function(e,t,r){"use strict";r.r(t);r(18),r(0);var n,o=r(19),i=r.n(o),a={};(n=r(42)).keys().forEach(function(e){var t,r=e.match(/^\.\/([^\\\/]+)\.js$/),o=0,i=a;for(r=(r=r&&r[1]||e.substr(2)).split("/"),t=n(e);o<r.length-1;)i=i[r[o]]=i[r[o]]||{},o++;i[r[o]]=1===Object.keys(t).length&&t.default||t}),(n=r(45)).keys().forEach(function(e){var t,r=e.match(/^\.\/([^\\\/]+)\.js$/),o=0,i=a;for(r=(r=r&&r[1]||e.substr(2)).split("/"),t=n(e);o<r.length-1;)i=i[r[o]]=i[r[o]]||{},o++;i[r[o]]=1===Object.keys(t).length&&t.default||t});var s,c,l=a,u=r(25).default("server"),p=(r(12),r(24)),d=p(),f=r(48).Server(d),h=r(49)(process.argv.slice(2)),m=r(17),g=r(25).default("server");process.title=m.project.name+"::server",g.warn("process.env.DEBUG : ",process.env.DEBUG),d.use(p.json()),d.use(p.urlencoded()),s=d,c=f,Object.keys(l).map(function(e){return i.a.fn(l[e])?{name:e,priorityLevel:0,service:l[e]}:l[e]}).sort(function(e,t){return e.priorityLevel>t.priorityLevel?-1:1}).forEach(function(e){try{e.service(s,c)}catch(t){u.error("Api fail loading service ",e.name,"\n",t)}});var b=f.listen(parseInt(h.p||h.port||8e3),function(){g.info("Running on ",b.address().port)})}]);
//# sourceMappingURL=App.server.js.map