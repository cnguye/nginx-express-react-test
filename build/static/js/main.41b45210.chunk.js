(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(12),r=n.n(s),o=(n(20),n(9)),i=n.n(o),u=n(13),l=(n(22),n(6)),j=n(1),b=n(2);function h(){return Object(b.jsx)("div",{className:"section section__home",children:"Hello, I am Home."})}function d(){return Object(b.jsx)("div",{className:"section section__about",children:"Hello, I am About."})}var p=function(){var e=Object(c.useState)(""),t=e.getData,n=e.setGetData;Object(c.useEffect)((function(){a().then((function(e){return n(e.express)})).catch((function(e){return console.log(e)}))}),[]);var a=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/express_backend",{headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)("header",{className:"App-header",children:"Welcome Route-r!"}),Object(b.jsx)("div",{className:"nav-bar",children:Object(b.jsxs)("ul",{className:"nav-bar__list",children:[Object(b.jsx)("li",{className:"nav-bar__item",children:Object(b.jsx)(l.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-bar__item",children:Object(b.jsx)(l.b,{to:"/about",children:"About"})})]})}),Object(b.jsxs)("div",{className:"app-body",children:[Object(b.jsx)(j.a,{exact:!0,path:"/",component:h}),Object(b.jsx)(j.a,{exact:!0,path:"/About",component:d}),"Get Data: ",t]})]})})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.41b45210.chunk.js.map