/*! For license information please see main.23ed3cafd5aed8ddd631.js.LICENSE.txt */
(()=>{"use strict";var t,e={157:(t,e,r)=>{var o=r(370),n=r.n(o),a=new URL(r(61),r.b),i=new URL(r(210),r.b),c=new URL(r(912),r.b),l=new URL(r(730),r.b),s=new URL(r(320),r.b),u=new URL(r(924),r.b),d=new URL(r(681),r.b),f=new URL(r(294),r.b),p=new URL(r(538),r.b),m=new URL(r(779),r.b),g=new URL(r(970),r.b);n()(a),n()(i),n()(c),n()(l),n()(s),n()(u),n()(d),n()(f),n()(p),n()(m),n()(g);var h=r(667),v=r(357),y=r(577);h.ZP.registerPlugin(v.Z),h.ZP.to(".list-categories-item",{delay:.5,stagger:.15,duration:1,y:0,opacity:1,ease:"back.out(1.7)"}),h.ZP.to(y.Z.getRule(".main__container::before"),{delay:.5,duration:1,transform:"translateY(-50%) scale(1)",opacity:1}),h.ZP.to(".benefits-item svg",{scrollTrigger:{trigger:".benefits-section",start:"top center",end:"bottom bottom"},duration:.8,clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}),h.ZP.to(".benefits-item span",{scrollTrigger:{trigger:".benefits-section",start:"top center",end:"bottom bottom"},delay:.25,duration:1,opacity:1,y:0,ease:"bounce.out"}),h.ZP.to(y.Z.getRule(".meal-programme-section::before"),{scrollTrigger:{trigger:".benefits-section",start:"100 center",end:"bottom bottom"},duration:1,transform:"scale(1)",opacity:1}),h.ZP.to(".meal-toggle-button",{scrollTrigger:{trigger:".meal-toggle-button-wrapper",start:"top center",end:"bottom bottom"},duration:1,opacity:1,x:0,ease:"power3.out"}),h.ZP.to(".meal-categories-toggle",{scrollTrigger:{trigger:".meal-categories-wrapper",start:"top center",end:"bottom bottom"},stagger:.15,y:0,opacity:1}),h.ZP.to(".meal-description-top-box",{scrollTrigger:{trigger:".meal-wrapper",start:"50 center",end:"bottom bottom"},x:0,opacity:1}),h.ZP.to(".meal-plan-days-wrapper",{scrollTrigger:{trigger:".meal-wrapper",start:"50 center",end:"bottom bottom"},delay:.4,y:0,opacity:1}),h.ZP.to(".meal-plan-wrapper-table",{scrollTrigger:{trigger:".meal-wrapper",start:"50 center",end:"bottom bottom"},delay:.8,y:0,opacity:1}),h.ZP.to(".meal-description-center-table",{scrollTrigger:{trigger:".meal-wrapper",start:"50 center",end:"bottom bottom"},delay:1.2,x:0,opacity:1}),h.ZP.to(".meal-description-bottom-button",{scrollTrigger:{trigger:".meal-wrapper",start:"50 center",end:"bottom bottom"},delay:1.6,y:0,transform:"scale(1)",opacity:1,duration:.1,ease:"power4.out"}),h.ZP.to(".slider-gallery-title",{scrollTrigger:{trigger:".slider-gallery-section__content",start:"100 center",end:"bottom bottom"},opacity:1,y:0,duration:.2}),h.ZP.to(y.Z.getRule(".slider-gallery-section::before"),{scrollTrigger:{trigger:".slider-gallery-section__content",start:"100 center",end:"bottom bottom"},duration:1,transform:"scale(1)",opacity:1}),h.ZP.to(y.Z.getRule(".slider-gallery-section::after"),{scrollTrigger:{trigger:".slider-gallery-section__content",start:"bottom center",end:"bottom bottom"},duration:1,transform:"scale(1)",opacity:1}),h.ZP.to(y.Z.getRule(".form-questions-section::before"),{scrollTrigger:{trigger:".form-questions-section",start:"100 center",end:"bottom bottom"},duration:1,transform:"scale(1)",opacity:1}),h.ZP.to(".form-callback-wrapper > *",{scrollTrigger:{trigger:".form-questions-section",start:"100 center",end:"bottom bottom"},stagger:.2,opacity:1,y:0,duration:1}),h.ZP.to(".question-wrapper > *",{scrollTrigger:{trigger:".form-questions-section",start:"100 center",end:"bottom bottom"},stagger:.15,opacity:1,x:0,duration:.5});var b=r(305);var w=r(480),L=r.n(w);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function E(){E=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new q(n||[]);return o(i,"_invoke",{value:L(t,r,c)}),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d={};function f(){}function p(){}function m(){}var g={};l(g,a,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(Z([])));v&&v!==e&&r.call(v,a)&&(g=v);var y=m.prototype=f.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==x(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function L(t,e,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return O()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var l=u(t,e,r);if("normal"===l.type){if(o=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o="completed",r.method="throw",r.arg=l.arg)}}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var n=o.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function Z(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=m,o(y,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new w(s(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),l(y,c,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=Z,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;P(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function k(t,e,r,o,n,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(o,n)}function S(t){return function(){var e=this,r=arguments;return new Promise((function(o,n){var a=t.apply(e,r);function i(t){k(a,o,n,i,c,"next",t)}function c(t){k(a,o,n,i,c,"throw",t)}i(void 0)}))}}var P=function(){!function(t,e,r,o){var n=document.querySelectorAll(t),a=document.querySelector(e),i=document.querySelectorAll(r),c=document.querySelector(o);n.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var e=t.target.src;c.src=e,a.classList.add("open"),a.classList.contains("open")&&(h.ZP.timeline().to(".slider-gallery-track",{animationPlayState:"paused"},">-0.5").to(".modal",{visibility:"visible",duration:.4}).to(".modal-overlay",{backgroundColor:"rgba(86, 86, 86, 0.6)",duration:.4}).to(".modal-content",{delay:.15,transform:"none",opacity:1,visibility:"visible",duration:.4}),document.body.classList.add("delete-scroll"))}))})),i.forEach((function(t){t.addEventListener("click",(function(t){t.target.closest(".modal-content")||(a.classList.remove("open"),a.classList.contains("open")||(h.ZP.timeline().to(".modal-content",{transform:"scale(.85)",opacity:0,duration:.4}).to(".modal-overlay",{backgroundColor:"rgba(86, 86, 86, 0)",duration:.4}).to(".modal",{visibility:"hidden",duration:.4}).to(".slider-gallery-track",{animationPlayState:"running"},">-0.5").to(".modal-content",{visibility:"hidden"}),document.body.classList.remove("delete-scroll")))}))}))}(".modal-trigger",".modal",".close-modal",".modal-content img")};document.addEventListener("DOMContentLoaded",(function(){var t,e,r,o,n;t=document.querySelector("header"),document.querySelector(".toggle-button").addEventListener("click",(function(){this.classList.toggle("active"),t.classList.toggle("active")})),document.querySelectorAll(".list-categories-item").forEach((function(t){t.addEventListener("click",(function(){var t=document.querySelector(".list-categories-item.active");this.classList.add("active"),t&&t.classList.remove("active")}))})),document.querySelector(".box-chat").addEventListener("click",(function(t){t.preventDefault();var e=t.target,r=this.parentElement;r.classList.toggle("active"),e.classList.contains("chat-icon")&&r.classList.add("active"),e.classList.contains("chat-text")&&r.classList.add("active")})),new b.ZP(".swiper",{modules:[b.W_,b.tl,b.xW,b.pt],spaceBetween:30,loop:!0,speed:500,effect:"fade",navigation:{nextEl:".slider-custom-button-next",prevEl:".slider-custom-button-prev"},pagination:{el:".slider-custom-pagination",clickable:!0}}),document.querySelector(".meal-toggle-button-wrapper").addEventListener("click",(function(t){var e=t.target,r=document.querySelector(".meal-toggle-button.active");e.classList.contains("meal-toggle-button-wrapper")||(r.classList.remove("active"),e.classList.add("active"))})),document.querySelectorAll(".question-content-wrapper").forEach((function(t){t.addEventListener("click",(function(t){var e=t.target.closest(".question-content-wrapper"),r=document.querySelector(".question-content-wrapper.open");r&&r.classList.remove("open"),e.classList.toggle("open"),r===e&&e.classList.remove("open")}))})),function(){var t=document.querySelector(".form-callback"),e=t.querySelectorAll(".form-callback-input-checkbox-label");function r(){return(r=S(E().mark((function r(n){return E().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.preventDefault(),0==o(t)&&(t.reset(),e.forEach((function(t){return t.classList.remove("checked")})),L().fire("Good job!","You clicked the button!","success"));case 3:case"end":return r.stop()}}),r)})))).apply(this,arguments)}t.addEventListener("submit",(function(t){return r.apply(this,arguments)}));var o=function(){var t=0;return document.querySelectorAll(".form-callback-input-input").forEach((function(e){var r=e.closest(".form-callback-input-wrapper");e.value.length?r.classList.remove("error"):(r.classList.add("error"),t++)})),t}}(),document.querySelectorAll(".form-callback-input-checkbox-label input").forEach((function(t){t.addEventListener("click",(function(){this.closest(".form-callback-input-checkbox-label").classList.toggle("checked")}))})),e=document.querySelectorAll(".meal-categories-toggle"),r=document.querySelectorAll(".meal-description-top-box"),o=document.querySelectorAll(".meal-plan-day"),n=document.querySelectorAll(".meal-plan-table"),e.forEach((function(t){t.addEventListener("click",(function(){r.forEach((function(t){t.classList.add("hidden")}));var e=document.querySelector(".meal-categories-toggle.active"),o=document.querySelector("#"+t.dataset.tab);e.classList.remove("active"),this.classList.add("active"),o.classList.remove("hidden")}))})),o.forEach((function(t){t.addEventListener("click",(function(){n.forEach((function(t){t.classList.add("hidden")}));var e=document.querySelector(".meal-plan-day.active"),r=document.querySelector("#"+t.dataset.plan);e.classList.remove("active"),this.classList.add("active"),r.classList.remove("hidden")}))})),P()}))},320:(t,e,r)=>{t.exports=r.p+"5edef083301611c8b6e9.webp"},970:(t,e,r)=>{t.exports=r.p+"5edef083301611c8b6e9.webp"},924:(t,e,r)=>{t.exports=r.p+"617462c48a90112f0c2a.webp"},681:(t,e,r)=>{t.exports=r.p+"64e64eebdce97d9931fd.webp"},294:(t,e,r)=>{t.exports=r.p+"dbd8d6b37ac9d083f554.webp"},538:(t,e,r)=>{t.exports=r.p+"b67244992cbb03d5cd62.webp"},779:(t,e,r)=>{t.exports=r.p+"b0bb0dc35453c3f7107c.webp"},61:(t,e,r)=>{t.exports=r.p+"fe2f3f926567f57a4366.webp"},210:(t,e,r)=>{t.exports=r.p+"c7156ef49faf4a5bc5cb.webp"},912:(t,e,r)=>{t.exports=r.p+"b21468c84f7d9d6200f8.webp"},730:(t,e,r)=>{t.exports=r.p+"50b299642a7ae77124e6.webp"}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var a=r[t]={exports:{}};return e[t].call(a.exports,a,a.exports,o),a.exports}o.m=e,t=[],o.O=(e,r,n,a)=>{if(!r){var i=1/0;for(u=0;u<t.length;u++){for(var[r,n,a]=t[u],c=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((t=>o.O[t](r[l])))?r.splice(l--,1):(c=!1,a<i&&(i=a));if(c){t.splice(u--,1);var s=n();void 0!==s&&(e=s)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,n,a]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.p="",(()=>{o.b=document.baseURI||self.location.href;var t={179:0};o.O.j=e=>0===t[e];var e=(e,r)=>{var n,a,[i,c,l]=r,s=0;if(i.some((e=>0!==t[e]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(l)var u=l(o)}for(e&&e(r);s<i.length;s++)a=i[s],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var n=o.O(void 0,[470],(()=>o(157)));n=o.O(n)})();