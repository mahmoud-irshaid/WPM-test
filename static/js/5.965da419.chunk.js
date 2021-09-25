/*! For license information please see 5.965da419.chunk.js.LICENSE.txt */
(this["webpackJsonpwpm-app"]=this["webpackJsonpwpm-app"]||[]).push([[5],{37:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return O}));var n=c(14),r=c(0),s=c.p+"static/media/correct.fd94c9d0.wav",a=c.p+"static/media/wrong.b9fb0d62.wav",i=c(1);var o=function(e){var t=e.chkWord,c=e.getStarted,n=e.forwardedRef;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("input",{type:"text",autoFocus:!0,ref:n,onInput:t,onKeyDown:c,onClick:function(e){return e.target.select()}})})},j=c(16),l=Object(r.lazy)((function(){return c.e(8).then(c.bind(null,34))})),u=Object(r.lazy)((function(){return c.e(9).then(c.bind(null,35))})),d=Object(r.lazy)((function(){return c.e(7).then(c.bind(null,36))})),b=Object(r.lazy)((function(){return c.e(6).then(c.bind(null,30))}));function O(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),c=t[0],O=t[1],h=Object(r.useState)(0),f=Object(n.a)(h,2),p=f[0],m=f[1],v=Object(r.useState)(60),x=Object(n.a)(v,2),g=x[0],w=x[1],S=Object(r.useState)(!1),y=Object(n.a)(S,2),N=y[0],k=y[1],I=Object(r.useState)(""),C=Object(n.a)(I,2),R=C[0],D=C[1],M=Object(r.useState)(""),z=Object(n.a)(M,2),E=z[0],J=z[1],A=Object(r.useState)(!1),F=Object(n.a)(A,2),T=F[0],B=F[1],L=Object(r.useState)(0),W=Object(n.a)(L,2),G=W[0],H=W[1],K=Object(r.useState)(!1),q=Object(n.a)(K,2),P=q[0],Q=q[1],U=Object(r.useState)([]),V=Object(n.a)(U,2),X=V[0],Y=(V[1],Object(r.useRef)()),Z=Object(r.useRef)(),$=Object(r.useContext)(j.a).words,_=new Audio(s),ee=new Audio(a);Object(r.useEffect)((function(){var e=setInterval((function(){g>=0&&P?w(g--):k(!1)}),1e3);if(!P){for(var t=0;t<1e3;t++){var c=Math.floor(Math.random()*$.length);X[t]=$[c]}te()}var n=setInterval((function(){N||0!==g||setTimeout((function(){B(!0)}),1e3)}),100);return function(){clearInterval(e,n)}}),[P]);var te=function(){D(X[0]+" "),J(X.join(" ")),Y.current.placeholder=X[0]};return Object(r.useEffect)((function(){if(c>0){var e=localStorage.getItem("scores")||null;null===e?(e=[],localStorage.setItem("scores",e)):e=JSON.parse(e),e.push(c),(e=e.sort((function(e,t){return t-e}))).length>3&&e.splice(3),localStorage.setItem("scores",JSON.stringify(e))}}),[T]),T&&(Y.current.style="color:black;filter:contrast(.1)"),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.Suspense,{children:Object(i.jsx)(b,{forwardRef:Z})}),Object(i.jsxs)("div",{className:"container",onMouseDown:function(e){Z.current.checked=!1},children:[Object(i.jsxs)("div",{className:"countersContainer",children:[Object(i.jsxs)("div",{className:"counters scoreDiv",children:[Object(i.jsx)("span",{className:"score",children:c}),Object(i.jsx)("p",{children:"word/min"})]}),Object(i.jsxs)("div",{className:"counters",id:"timerDiv",children:[Object(i.jsx)(r.Suspense,{fallback:Object(i.jsx)("div",{children:"Loading..."}),children:Object(i.jsx)(l,{time:g})}),Object(i.jsx)("p",{children:"seconds"})]}),Object(i.jsxs)("div",{className:"counters scoreDiv",children:[Object(i.jsx)("span",{className:"score",children:p}),Object(i.jsx)("p",{children:"chars/min"})]})]}),Object(i.jsxs)("div",{className:"wordsAndTyperDiv",children:[Object(i.jsx)("div",{className:"wordsContainer",children:Object(i.jsx)("div",{children:Object(i.jsx)(r.Suspense,{children:Object(i.jsx)(u,{word:E})})})}),Object(i.jsx)("div",{className:"typerContainer",children:Object(i.jsx)(o,{chkWord:function(){var e=Y.current.value.slice(G);if(R[0]===e?(R.length>0&&D(R.slice(e.length)),H(++G),Y.current.className="correct"):(Y.current.className="incorrect",ee.play()),e===R&&g>0){k(!0),O(c+1),m(p+X[0].length),Y.current.value="",H(0);var t=document.createElement("span");t.innerHTML=X[0]+" ",document.getElementById("correct").appendChild(t),X.splice(0,1),J(X.join(" ")),te(),_.play()}},getStarted:function(){Q(!0)},forwardedRef:Y})}),T&&Object(i.jsx)("p",{className:"gameover",children:"Game Over !!!"}),Object(i.jsxs)("button",{id:"restart",onClick:function(){return window.location.reload()},children:["Restart ",Object(i.jsx)("img",{src:"/assets/restart.svg"})]}),Object(i.jsx)("div",{id:"correct"})]}),T&&(Y.current.disabled=!0)]}),T&&Object(i.jsx)(r.Suspense,{children:Object(i.jsx)(d,{score:c,score2:p})}),Object(i.jsxs)("a",{id:"copy",href:"https://github.com/mahmoud-irshaid",children:[Object(i.jsx)("img",{src:"/assets/github.png"})," @2021 CopyRight By Mahmoud Irshaid"]})]})}}}]);
//# sourceMappingURL=5.965da419.chunk.js.map