/*! For license information please see 443.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[443],{28476:(t,e,r)=>{r.d(e,{Z:()=>l});r(67294);var n=r(93379),o=r.n(n),i=r(53181),a={insert:"head",singleton:!1};o()(i.Z,a);i.Z.locals;var c=r(85893);const l=function(t){var e=t.head,r=t.title,n=t.subtitle,o=t.centered,i=0;return(0,c.jsx)("div",{className:"SectionTitle".concat(o?" centered":""),children:(0,c.jsxs)("div",{className:"text",children:[e&&(0,c.jsx)("div",{className:"super",children:e}),r&&(0,c.jsx)("div",{className:"title",children:r.split(" ").map((function(t){return(0,c.jsx)("div",{className:"word",children:t.split("").map((function(e){return(0,c.jsx)("span",{style:{"--section-title-title-letter-i":++i},children:e},"SectionTitle-word-".concat(t,"-letter-").concat(i))}))},"SectionTitle-word-".concat(t))}))}),n&&(0,c.jsx)("div",{className:"subtitle",children:n})]})})}},70443:(t,e,r)=>{r.r(e),r.d(e,{default:()=>C});var n=r(67294),o=r(14416),i=r(32905),a=r(89437),c=r(36595),l=r(85893);const s=function(t){var e=t.fields,r=t.array,n=t.limit,o=t.bordered,i=t.dark,a=void 0!==i&&i,s=t.sl,u=void 0===s||s,f=t.borderless,p=t.innerClassName,d=void 0===p?"":p,h=t.outerClassName,y=void 0===h?"":h,m=t.select,v=t.children,b=t.selectHandler,g=e.map((function(t){var e=t.name;return(0,l.jsx)("th",{className:"align-middle text-nowrap",children:e},e)}));u&&g.unshift((0,l.jsx)("th",{className:"text-center align-middle",children:"SL"},"#")),m&&g.unshift((0,l.jsx)("th",{className:"align-middle text-center",children:(0,l.jsx)("input",{type:"checkbox",onClick:b,className:"select_all"})},"select_all"));var x=r.map((function(t,r){if(n&&r>=n)return null;var o=[];return u&&o.push((0,l.jsx)("th",{className:"text-center align-middle",children:r+1},"primary"+r)),m&&o.unshift((0,l.jsx)("th",{className:"text-center align-middle",children:(0,l.jsx)("input",{type:"checkbox",value:t._id})},"white"+r)),e.forEach((function(e){var r=e.key,n=e.minWidth,i=e.maxWidth,a=e.className;o.push((0,l.jsx)("td",{className:"align-middle text-nowrap text-truncate".concat(a&&" ".concat(a)),style:{minWidth:n,maxWidth:i},children:t[r]},r))})),(0,l.jsx)("tr",{className:"align-middle",children:o},r+1)}));return(0,l.jsx)("div",{className:"pb-4 text-16 ".concat(y),children:(0,l.jsxs)("div",{className:"flex-fill d-flex flex-column",children:[(0,l.jsx)("div",{className:"table-responsive flex-fill",children:(0,l.jsxs)(c.Z,{dark:a,bordered:o,hover:!0,borderless:f,className:"text-reset "+d,children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:g})}),(0,l.jsx)("tbody",{children:x})]})}),(0,l.jsx)("div",{className:"pt-3",children:v})]})})};var u=r(28476),f=r(73501);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function d(){d=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u={};function f(){}function h(){}function y(){}var m={};c(m,o,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(P([])));b&&b!==e&&r.call(b,o)&&(m=b);var g=y.prototype=f.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,i,a,c){var l=s(t[o],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==p(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=y,c(g,"constructor",y),c(y,"constructor",h),h.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}function h(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({type:f.hp},t)},b=function(){return function(){var t,e=(t=d().mark((function t(e){var r,n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:f.wj}),t.prev=1,t.next=4,fetch("".concat("/api/","portfolio"));case 4:return r=t.sent,t.next=7,r.json();case 7:n=t.sent,e(v(n)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0),e((o=t.t0,{type:f.cu,error:o}));case 15:case"end":return t.stop()}var o}),t,null,[[1,11]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){h(i,n,o,a,c,"next",t)}function c(t){h(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}()},g=r(92903),x=r(93379),w=r.n(x),j=r(67917),O={insert:"head",singleton:!1};w()(j.Z,O);j.Z.locals;function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(Object(r),!0).forEach((function(e){D(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Z(t);if(e){var o=Z(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return L(this,r)}}function L(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return F(t)}function F(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Z(t){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Z(t)}function D(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(i,t);var e,r,n,o=T(i);function i(){var t;S(this,i);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return D(F(t=o.call.apply(o,[this].concat(r))),"state",{isMounted:!1}),t}return e=i,(r=[{key:"componentDidMount",value:function(){this.props.get(),this.setState({isMounted:!0})}},{key:"componentWillUnmount",value:function(){this.props.reset()}},{key:"render",value:function(){var t=this.props,e=t.content.cms.pages.frontend.pages.portfolio,r=t.frontend.portfolio,n=r.loading,o=r.projects,i=void 0===o?[]:o,c=this.state.isMounted,f=localStorage.getItem("frontend_lang"),p=i.map((function(t){return(0,g.v4)(t,{year:new Date(t.date).getFullYear(),title:t.title[f],made_at:t.made_at[f]||t.made_at,technologies:t.technologies.map((function(t){return(0,l.jsx)("span",{className:"technology",children:t.name},JSON.stringify(t))})),links:(0,l.jsxs)(l.Fragment,{children:[t.github&&(0,l.jsx)("a",{href:t.github,target:"_blank",className:"fab fa-github"}),t.link&&(0,l.jsx)("a",{href:t.link,target:"_blank",className:"fas fa-external-link-alt"})]})})}));return(0,l.jsx)(a.Z,{loading:c&&n,children:(0,l.jsx)("div",{className:"Portfolio",children:(0,l.jsx)("section",{className:"portfolio",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(u.Z,P({},e)),(0,l.jsx)(s,{dark:!0,borderless:!0,sl:!1,array:p,fields:[{name:e.table.year,key:"year",className:"year"},{name:e.table.title,key:"title",className:"title"},{name:e.table.made_at,key:"made_at"},{name:e.table.technologies,key:"technologies",className:"technologies"},{name:e.table.links,key:"links",className:"links"}]})]})})})})}}])&&E(e.prototype,r),n&&E(e,n),Object.defineProperty(e,"prototype",{writable:!1}),i}(n.Component);const C=(0,i.EN)((0,o.$j)((function(t){return P({},t)}),(function(t){return{get:function(){return t(b())},reset:function(){return t({type:f.sp})}}}))(z))},53181:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(23645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".SectionTitle{margin-bottom:15px}.SectionTitle .text .title{color:var(--blue);font-size:var(--section-font-size-sm);letter-spacing:-.03em}.SectionTitle .text .title span{-webkit-animation-delay:calc(.1s*var(--section-title-title-letter-i));animation-delay:calc(.1s*var(--section-title-title-letter-i));-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-name:section-title-title;animation-name:section-title-title;display:inline-block;position:relative;transform:translateY(0);transition:var(--transition-fast)}@-webkit-keyframes section-title-title{0%,40%,to{transform:translateY(0)}20%{transform:translateY(-10px)}}@keyframes section-title-title{0%,40%,to{transform:translateY(0)}20%{transform:translateY(-10px)}}.SectionTitle .text .title span:hover{transform:translateY(-10px)}.SectionTitle .text .title .word{display:inline-block}.SectionTitle .text .title .word:not(:last-child){margin-right:10px}.SectionTitle .text .subtitle{margin-top:23.4px;text-align:justify}.SectionTitle.centered .text{align-items:center;display:flex;flex-direction:column;text-align:center}@media (min-width:800px){.SectionTitle{margin-bottom:20px}.SectionTitle .text .title{font-size:var(--section-font-size-md);margin-bottom:3px}}@media (min-width:1280px){.SectionTitle{margin-bottom:25px}.SectionTitle .text .title{font-size:var(--section-font-size);margin-bottom:7px}}",""]);const i=o},67917:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(23645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,'@charset "UTF-8";.Frontend .Portfolio section{min-height:calc(100vh - var(--toolbar-bottom-height))}.Frontend .Portfolio section table{background-color:transparent}.Frontend .Portfolio section table thead{font-family:var(--title-font-family)}.Frontend .Portfolio section table .technologies,.Frontend .Portfolio section table .year{font-family:var(--super-font-family)}.Frontend .Portfolio section table .technologies span:not(:last-child):after{content:" · "}.Frontend .Portfolio section table .year{color:var(--app-secondary-color)}.Frontend .Portfolio section table .links a{color:inherit;text-decoration:none;transition:var(--transition)}.Frontend .Portfolio section table .links a:hover{color:var(--app-secondary-color)}.Frontend .Portfolio section table .links a:not(:last-child){margin-right:10px}',""]);const i=o},36595:(t,e,r)=>{r.d(e,{Z:()=>h});var n=r(87462),o=r(63366),i=r(67294),a=r(45697),c=r.n(a),l=r(94184),s=r.n(l),u=r(23663),f=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],p={className:c().string,cssModule:c().object,size:c().string,bordered:c().bool,borderless:c().bool,striped:c().bool,dark:c().bool,hover:c().bool,responsive:c().oneOfType([c().bool,c().string]),tag:u.iC,responsiveTag:u.iC,innerRef:c().oneOfType([c().func,c().string,c().object])},d=function(t){var e=t.className,r=t.cssModule,a=t.size,c=t.bordered,l=t.borderless,p=t.striped,d=t.dark,h=t.hover,y=t.responsive,m=t.tag,v=t.responsiveTag,b=t.innerRef,g=(0,o.Z)(t,f),x=(0,u.mx)(s()(e,"table",!!a&&"table-"+a,!!c&&"table-bordered",!!l&&"table-borderless",!!p&&"table-striped",!!d&&"table-dark",!!h&&"table-hover"),r),w=i.createElement(m,(0,n.Z)({},g,{ref:b,className:x}));if(y){var j=(0,u.mx)(!0===y?"table-responsive":"table-responsive-"+y,r);return i.createElement(v,{className:j},w)}return w};d.propTypes=p,d.defaultProps={tag:"table",responsiveTag:"div"};const h=d}}]);