!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(11)),r=i(n(12));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(){var t=location.hash,e=t,n="",i="";if(e.includes("?")){var u=e.split("?");if(e=u[0],""!==(n=u[1].replace(/\//g,""))){for(var a={},c=n.split("&"),l=0;l<c.length;l++){var s=c[l].split("="),f=s[0],d=s[1];a[f]=d}i=a}}return e=e.endsWith("/")&&!e.endsWith("#/")?e.slice(0,-1).replace("#",""):e.replace("#",""),{hash:t.replace("#",""),path:e,search:n,query:i,set:o.default,get:r.default}};e.default=u},function(t){t.exports={b:"skeleton-app-wp4-pwa-webcomp",a:!0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.utils=e.Router=e.Component=void 0;var o=u(n(4)),r=u(n(8)),i=u(n(13));function u(t){return t&&t.__esModule?t:{default:t}}e.Component=o.default,e.Router=r.default,e.utils=i.default},function(t,e,n){t.exports=n.p+"assets/images/icon-4b666dd1.png"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=a(n(5)),i=a(n(6)),u=a(n(7));function a(t){return t&&t.__esModule?t:{default:t}}var c=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"domr-component";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.createElement=r.default,this.domrid=n+"-"+(0,u.default)(7),this.target=function(){return(0,i.default)(e.domrid)},this.GetThisComponent=this.target,this.GetDomrID=this.domrid,this.handlingParent=document.querySelector("body")}return o(t,[{key:"errorHandler",value:function(t,e){var n="_ "+t+": "+e;this.ErrorLog(n)}},{key:"ErrorLog",value:function(t){}},{key:"Markup",value:function(){return""}},{key:"deligateEvents",value:function(t,e,n){var o=this;this.handlingParent.addEventListener(e,function(e){var r=e;if(r.target){if(r.target.matches(t))return r.closest=!1,void n(r.target,r);if(r.target.closest(t))return r.closest=!0,r.closestDomrId=o.domrid,r.closestElm=t,void n(r.target.closest(t),r)}})}},{key:"On",value:function(t,e){this.deligateEvents('[data-domr-id="'+this.domrid+'"]',t,e)}},{key:"Click",value:function(t){this.On("click",t)}},{key:"Mouseover",value:function(t){this.On("mouseover",t)}},{key:"Mouseout",value:function(t){this.On("mouseout",t)}},{key:"Input",value:function(t){this.On("input",t)}},{key:"Blur",value:function(t){this.On("blur",t)}},{key:"Keydown",value:function(t){this.On("keydown",t)}},{key:"Keypress",value:function(t){this.On("keypress",t)}},{key:"Keyup",value:function(t){this.On("keyup",t)}},{key:"Events",value:function(){}},{key:"AfterRenderDone",value:function(){}},{key:"delayedContent",value:function(){var t=this;setTimeout(function(){t.target()&&t.AfterRenderDone()},50)}},{key:"optimizedDom",value:function(){return this.Events(),this.createElement(this.Markup(),this.domrid)}},{key:"Render",value:function(){return this.delayedContent(),this.optimizedDom()}},{key:"AddTo",value:function(t){t?(t.insertAdjacentHTML("beforeend",this.optimizedDom()),this.delayedContent()):this.errorHandler("AddTo","parent not found")}},{key:"AddFromStartTo",value:function(t){t?(t.insertAdjacentHTML("afterbegin",this.optimizedDom()),this.delayedContent()):this.errorHandler("AddFromStartTo","parent not found")}},{key:"Before",value:function(t){t?(t.insertAdjacentHTML("beforebegin",this.optimizedDom()),this.delayedContent()):this.errorHandler("Before","sibling not found")}},{key:"After",value:function(t){t?(t.insertAdjacentHTML("afterend",this.optimizedDom()),this.delayedContent()):this.errorHandler("After","sibling not found")}},{key:"Replace",value:function(t){if(t){var e=t.parentElement;e?(t.insertAdjacentHTML("afterend",this.optimizedDom()),e.removeChild(t),this.delayedContent()):this.errorHandler("Replace","sibling has no parentElement")}else this.errorHandler("Replace","sibling not found")}}]),t}();e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=document.createElement("div");n.innerHTML=t;for(var o=document.createDocumentFragment(),r=0;r<n.childNodes.length;r++){var i=n.childNodes[r].cloneNode(!0);o.appendChild(i)}return e&&o.childNodes[1].setAttribute("data-domr-id",e),o.childNodes[1].outerHTML}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=document.querySelector('[data-domr-id="'+t+'"]');if(e)return e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7;return Math.random().toString(36).substr(2,t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=u(n(9)),i=u(n(0));function u(t){return t&&t.__esModule?t:{default:t}}var a=function(t){var e=[];return t.forEach(function(t){t.path&&t.view&&e.push(t)}),e},c={routes:[],config:{refreshPage:!1}},l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.routes,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.config;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.routes=a(e),this.refreshPage=n.refreshPage||!1,this.addView=r.default}return o(t,[{key:"ShowRoutes",value:function(){console.log(this.routes)}},{key:"reloadOnHashChange",value:function(){var t=this;addEventListener("hashchange",function(e){t.refreshPage?location.reload():(t.Start(),e.stopImmediatePropagation())})}},{key:"Start",value:function(){var t=(0,i.default)(),e=t.path,n=void 0;if(""===e&&(location.hash="#/"),this.routes.forEach(function(o){var r=o.path;r.endsWith("/")&&"/"!==r&&(r=r.slice(0,-1));var i=[],u=r.replace(/([:*])(\w+)/g,function(t,e,n){return i.push(n),"([^/]+)"})+"(?:/|$)",a=e.match(new RegExp(u));if(a){var c=a.slice(1,a.length).reduce(function(t,e,n){return null===t&&(t={}),t[i[n]]=e,t},null);o.metadata=c||"",o.query=t.query,n=o}}),n)this.addView(n);else{var o=this.routes.find(function(t){return!0===t.isDefault});o?this.addView(o):console.error("Page Not Found")}this.reloadOnHashChange()}}]),t}();e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n(10));e.default=function(t){var e=t.view,n=(0,o.default)(t,["view"]);t&&e&&"function"==typeof e&&e(n)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=["view"];e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,n={};return Object.keys(t).forEach(function(o){var r=t[o];(function(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return!0})(e,o)||(n[o]=r)}),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n(0));function r(t){var e=t;return e.startsWith("#")||(e="#"+e),e}function i(t){var e=t,n=(0,o.default)().path;return n.endsWith("/")&&(n=n.slice(0,-1)),e.startsWith("?")||(e="?"+e),e=r(n+"/"+e)}e.default=function(t,e){var n=e,u=void 0;switch(t){case"search":u=i(n);break;case"query":u=function(t){return i(function(t){var e=[];for(var n in t)e.push(n+"="+t[n]);return"?"+e.join("&")}(t))}(n);break;case"path":u=function(t){var e=(0,o.default)().search,n=t;return n.startsWith("#")&&(n=n.slice(0,-1)),e&&(n.endsWith("/")||(n+="/"),n=n+"?"+e),n=r(n)}(n);break;case"hash":u=r(n)}u?function(t){location.hash=t}(u):console.error("incorrect set location params")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n(0));e.default=function(t){var e=(0,o.default)()[t];if(e)return e;console.error("incorrect get location params")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={hashLocation:function(t){return t&&t.__esModule?t:{default:t}}(n(0)).default};e.default=o},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function r(t){var e="function"==typeof Map?new Map:void 0;return(r=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return i(t,arguments,a(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,t)})(t)}function i(t,e,n){return(i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&u(r,n.prototype),r}).apply(null,arguments)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,a(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,r(HTMLElement)),e}();customElements.define("some-app",c)},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return u(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)})(t)}function u(t,e,n){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&a(r,n.prototype),r}).apply(null,arguments)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=r(this,c(e).call(this))).preConnectedCallback(),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,i(HTMLElement)),function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(e,[{key:"updateImg",value:function(t){this.shadowRoot.querySelector("img").setAttribute("src",t)}},{key:"blowUpImage",value:function(t){var e=this.shadowRoot.querySelector("img");JSON.parse(t)&&(e.style.transform="scale(5)")}},{key:"attributeChangedCallback",value:function(t,e,n){"src"===t?this.updateImg(n):"blowup"===t&&this.blowUpImage(n)}},{key:"preConnectedCallback",value:function(){this.attachShadow({mode:"open"}).innerHTML="\n      <style>".concat("\n      :host {\n        display: block;\n        position: relative;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      .logo {\n        display: block;\n        margin-bottom: 2rem;\n        max-width: 100px;\n        transform: scale(1);\n        transition: transform 1s;\n      }\n\n      .logo img {\n        display: block;\n        height: auto;\n        width: 100%;\n      }\n    ",'</style>\n      <span class="logo">\n        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" alt="" />\n      </span>\n    ')}}],[{key:"observedAttributes",get:function(){return["src","blowup"]}}]),e}();customElements.define("logo-elm",l)},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return u(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)})(t)}function u(t,e,n){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&a(r,n.prototype),r}).apply(null,arguments)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=r(this,c(e).call(this))).state={name:"Click This Button",stopMsg:"Stop, That's enough!",hexa:16777216,padAt:6,clicks:0},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,i(HTMLElement)),function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(e,[{key:"generateRandomColor",value:function(){var t=this.state,e=t.hexa,n=t.padAt;return"#".concat(Math.floor(Math.random()*e).toString(16).padStart(n,0))}},{key:"updateClicks",value:function(){var t=this.state.clicks;this.state.clicks=t+1}},{key:"changeColors",value:function(t){var e=document.querySelector('meta[name="theme-color"]'),n=t,o=this.generateRandomColor();n.style.color=this.generateRandomColor(),n.style.backgroundColor=o,e&&e.setAttribute("content",o)}},{key:"activeStopMsg",value:function(t){var e=t,n=this.state.stopMsg;e.innerText=n}},{key:"blowUpLogo",value:function(){this.parentElement.querySelector("logo-elm").setAttribute("blowup",!0)}},{key:"calculation",value:function(t){if(t.preventDefault(),t.target){var e=t.composedPath()[0];if(e.classList.contains("btn")){var n=this.state.clicks;this.updateClicks(),this.changeColors(e),n>5&&(this.activeStopMsg(e),this.blowUpLogo())}}}},{key:"eventsList",value:function(){var t=this;this.addEventListener("click",function(e){t.calculation(e)})}},{key:"connectedCallback",value:function(){var t=this.attachShadow({mode:"open"}),e=this.state.name;t.innerHTML="\n      <style>".concat("\n      :host {\n        display: block;\n        position: relative;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      .btn {\n        background-color: #ff276b;\n        border: 1px solid transparent;\n        border-radius: 2px;\n        color: #b5d2ff;\n        display: inline-block;\n        font-size: 20px;\n        font-weight: bold;\n        letter-spacing: .4px;\n        padding: 8px 10px;\n        text-decoration: none;\n      }\n    ",'</style>\n      <a href="#" class="btn btn--primary">').concat(e,"</a>\n    "),this.eventsList()}}]),e}();customElements.define("one-btn",l)},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(1);o.a?"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").then(function(t){console.log("SW registered: ",t)}).catch(function(t){console.log("SW registration failed: ",t)})}):console.log("no pwa");var r=n(2),i=n(3),u=n.n(i),a=(n(14),n(15),n(16),[{path:"/",view:function(){var t='\n    <some-app class="home-container">\n      <logo-elm src="'.concat(u.a,'"></logo-elm>\n      <h2>This is</h3>\n      <h1>').concat(o.b,"</h1>\n      <one-btn></one-btn>\n    </some-app>\n  ");document.getElementById("wrapper").innerHTML=t},title:"homepage",isDefault:!0}]);new r.Router(a).Start();n(17)}]);