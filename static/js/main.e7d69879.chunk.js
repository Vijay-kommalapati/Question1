(this.webpackJsonpjobtask=this.webpackJsonpjobtask||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(7),r=n.n(a),i=n(6),o=n(4),s=n(0);var u=function(){return Object(s.jsx)("div",{className:"header",children:"To do App"})};var j=function(t){var e=Object(c.useState)(""),n=Object(o.a)(e,2),a=n[0],r=n[1];function i(e){(""!==a&&"click"===e.type||""!==a&&"Enter"===e.key)&&(t.addToList(a),r(""))}return Object(s.jsxs)("div",{className:"additem",children:[Object(s.jsx)("input",{type:"text",placeholder:"Enter the item here",onChange:function(t){r(t.target.value)},onKeyDown:i,value:a}),Object(s.jsx)("button",{onClick:i,children:"\u2795"})]})};var l=function(t){return Object(s.jsx)("div",{className:"item",children:Object(s.jsxs)("span",{children:[t.item," ",Object(s.jsx)("button",{onClick:function(){t.deleteFunc(t.id)},children:"\ud83d\uddd1"})]})})};var d=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1],r=[];function d(t){a((function(e){return r=e.filter((function(e,n){return n!==t})),localStorage.setItem("data",JSON.stringify(r)),r}))}return Object(c.useEffect)((function(){var t=localStorage.getItem("data");null!==t&&(console.log("probe"),a(JSON.parse(t)))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)(u,{}),Object(s.jsx)(j,{addToList:function(t){a((function(e){return localStorage.setItem("data",JSON.stringify([].concat(Object(i.a)(e),[t]))),[].concat(Object(i.a)(e),[t])}))}}),n.map((function(t,e){return Object(s.jsx)(l,{item:t,id:e,deleteFunc:d},e)}))]})};r.a.render(Object(s.jsx)(d,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e7d69879.chunk.js.map