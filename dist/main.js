(()=>{"use strict";var t={986:(t,e,r)=>{t.exports=r.p+"favicon.ico"}},e={};function r(n){var c=e[n];if(void 0!==c)return c.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{function t(){let t=this.value+(this.dataset.units||""),e=this.name;var r,n;n=t,(r=e)&&n&&document.documentElement.style.setProperty(`--${r}`,n),function(t,e){let r=document.querySelector(`[data-${t}]`);null!=r&&(r.textContent=e)}(e,t)}r(986);const e=document.querySelectorAll(".range, #base");function n(){e.forEach((t=>{const e=t.getAttribute("value");t.value=e,t.dispatchEvent(new Event("change"))}))}e.forEach((e=>{e.addEventListener("change",t),e.addEventListener("input",t)})),document.querySelector("[data-clear]").addEventListener("click",n),document.addEventListener("keydown",(t=>{t.preventDefault(),"Escape"==t.code&&n()}))})()})();