if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,t,o)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(t.map(r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}})).then(e=>{const r=o(...e);return s.default||(s.default=r),s})}))}}define("./index.js",["./workbox-7400f410"],(function(e){"use strict";e.setCacheNameDetails({prefix:"a7b2e6a0-65c5-4d81-85d5-13d4fa428d25"}),e.skipWaiting(),e.clientsClaim(),e.registerRoute(/\.(?:png|jpg|jpeg|svg|js|css|woff2|woff)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/https:\/\/cdn\.bootcss\.com/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=index.js.map
