(this["webpackJsonpwpm-app"]=this["webpackJsonpwpm-app"]||[]).push([[0],{16:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var c=n(14),r=n(0),o=n(1),i=Object(r.createContext)(),s=function(e){var t=Object(r.useState)([]),n=Object(c.a)(t,2),s=n[0],a=n[1];return Object(r.useLayoutEffect)((function(){fetch("/words.json").then((function(e){return e.json()})).then((function(e){a(e.words)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsx)(o.Fragment,{children:s.length&&Object(o.jsx)(i.Provider,{value:{words:s},children:e.children})})}},29:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(17),i=n.n(o),s=n(13),a=n(2),u=n(1),l=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,31))})),d=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,32))})),b=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,37))}));var j=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(s.a,{basename:"".concat("/WPM-test","/"),children:Object(u.jsx)(c.Suspense,{fallback:Object(u.jsx)("div",{children:"Loading..."}),children:Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{path:"/scores",component:l}),Object(u.jsx)(a.a,{path:"/about",component:d}),Object(u.jsx)(a.a,{path:"/",component:b})]})})})})},f=function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))},h=n(16);i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(h.b,{children:Object(u.jsx)(j,{})})}),document.getElementById("root")),"serviceWorker"in navigator?window.addEventListener("load",(function(){navigator.serviceWorker.register("serviceWorker.js").then((function(e){console.log("Worker registration successful",e.scope),window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault();var t=document.querySelector("button");t.removeAttribute("hidden"),t.addEventListener("click",(function(){e.prompt(),t.setAttribute("disabled",!0)}))}))}),(function(e){console.log("Worker registration failed",e)})).catch((function(e){console.log(e)}))})):console.log("Service Worker is not supported by browser."),f()}},[[29,1,2]]]);
//# sourceMappingURL=main.88491e13.chunk.js.map