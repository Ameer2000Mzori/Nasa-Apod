/*! For license information please see bundle.js.LICENSE.txt */
(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return r};var n,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(n){h=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new j(r||[]);return i(a,"_invoke",{value:S(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function E(){}function x(){}var b={};h(b,s,(function(){return this}));var L=Object.getPrototypeOf,C=L&&L(L(A([])));C&&C!==o&&a.call(C,s)&&(b=C);var k=x.prototype=w.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function T(e,n){function r(o,i,c,s){var l=f(e[o],e,i);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==t(h)&&a.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):n.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,s)}))}s(l.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(a,a):a()}})}function S(t,e,r){var o=d;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var s=_(c,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=f(t,e,r);if("normal"===l.type){if(o=r.done?m:v,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function _(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=f(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return E.prototype=x,i(k,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:E,configurable:!0}),E.displayName=h(x,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},O(T.prototype),h(T.prototype,l,(function(){return this})),r.AsyncIterator=T,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new T(p(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(k),h(k,u,"Generator"),h(k,s,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=A,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}var r=document.getElementsByClassName("load-more")[0],o=document.getElementsByClassName("header-Wrapper")[0],a=document.getElementsByClassName("loading-Animation")[0],i=document.getElementsByClassName("loading-Animation-Favo")[0],c=document.getElementsByClassName("favo-Wrapper")[0],s=document.getElementsByClassName("favo-btn")[0];c.style.display="none";var l="https://api.nasa.gov/planetary/apod?api_key=SDygpe49fq5aqEh9rfBN5kR1LJxxwSUpY4hWeEEh&count=10",u=[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png",title:"Test Test",explanation:"Betelgeuse (sounds a lot like ), a red supergiant star about 600 light years distant, is seen in this Hubble Space Telescope image - the first direct picture of the surface of a star other than the Sun. While Betelgeuse is cooler than the Sun, it is more massive and over 1000 times larger. If placed at the center of our Solar System, it would extend past the orbit of Jupiter. Betelgeuse is also known as Alpha Orionis, one of the brightest stars in the familiar constellation of Orion, the Hunter. The name Betelgeuse is Arabic in origin. As a massive red supergiant, it is nearing the end of its life and will soon become a supernova. In this historic image, a bright hotspot is revealed on the star's surface. ",date:"2023-12-12",copyright:"Ameer Ameen"}];function h(){return p.apply(this,arguments)}function p(){var t;return t=e().mark((function t(){var n,r,u;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.style.display="block",i.style.display="none",c.style.display="none",a.style.display="block",c.innerHTML="",o.style.display="flex",t.prev=6,t.next=9,fetch(l);case 9:if((n=t.sent).ok){t.next=12;break}throw new Error("HTTP error! Status: ".concat(n.status));case 12:return t.next=14,n.json();case 14:r=t.sent,u=r.slice(0,10),console.log(u),a.style.display="none",f(u),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(6),console.error("Error fetching data:",t.t0);case 24:case"end":return t.stop()}}),t,null,[[6,21]])})),p=function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))},p.apply(this,arguments)}function f(t){t.forEach((function(t){var e=document.createElement("div");e.classList="post-Wrapper";var n=document.createElement("img");n.classList="post-Img",n.alt="img",n.title="this image is from nasa api",n.src="".concat(t.url);var r=document.createElement("div");r.classList="text-Wrapper";var a=document.createElement("h1");a.textContent="".concat(t.title);var i=document.createElement("button");i.classList="add-Faov-Btn",i.textContent="ADD TO FAVO";var c=document.createElement("p");c.classList="post-P-Text",c.textContent="".concat(t.explanation);var s=document.createElement("div");s.classList="post-Date-By";var l=document.createElement("p");l.textContent="On ".concat(t.date," Athor ").concat(t.copyright),r.appendChild(a),r.appendChild(i),r.appendChild(c),s.appendChild(l),e.appendChild(n),e.appendChild(r),e.appendChild(s),o.appendChild(e),i.addEventListener("click",(function(t){console.log("hallo world",t.target.parentElement)}))}))}r.addEventListener("click",h),s.addEventListener("click",(function(){!function(t){s.style.display="none",o.innerHTML="",o.style.display="none",i.style.display="block",c.innerHTML="",c.style.display="flex",t.forEach((function(t){var e=document.createElement("div");e.classList="post-Wrapper-favo-favo";var n=document.createElement("img");n.classList="post-Img-favo-favo",n.alt="img",n.title="this image is from nasa api",n.src="".concat(t.url);var r=document.createElement("div");r.classList="text-Wrapper-favo-favo";var o=document.createElement("h1");o.textContent="".concat(t.title);var a=document.createElement("button");a.classList="add-Faov-Btn-favo-favo",a.textContent="Remove-Favo";var i=document.createElement("p");i.classList="post-P-Text-favo-favo",i.textContent="".concat(t.explanation);var s=document.createElement("div");s.classList="post-Date-By-favo-favo";var l=document.createElement("p");l.textContent="On ".concat(t.date," Athor ").concat(t.copyright),r.appendChild(o),r.appendChild(a),r.appendChild(i),s.appendChild(l),e.appendChild(n),e.appendChild(r),e.appendChild(s),c.appendChild(e)})),i.style.display="none"}(u)})),h()})();