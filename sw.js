if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),f={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-D25XjlPe.css",revision:null},{url:"assets/index-DhgDbkgp.js",revision:null},{url:"index.html",revision:"49710433390aaf4bfcee510cad7491c5"},{url:"registerSW.js",revision:"a90d0b4e7626ffa98f5a5fcc4454c189"},{url:"favicon.ico",revision:"d97cfdf55ec10859e9b164aa89f14bae"},{url:"pwa-192x192.png",revision:"a065d78a86d416f13d63ad7df06deb7a"},{url:"pwa-512x512.png",revision:"9d4cc81e1409f28123780f0b72cfada9"},{url:"manifest.webmanifest",revision:"15888e9dbcc6b584899aa17e76f60c7d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
