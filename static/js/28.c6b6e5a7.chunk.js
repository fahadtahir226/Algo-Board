(this["webpackJsonpalgo-board"]=this["webpackJsonpalgo-board"]||[]).push([[28],{158:function(e,t,a){"use strict";a.r(t);var l=a(55),n=a(0),c=a.n(n),r=a(66),u=a(59),o=a(58),s=a(149),m=a(15),i=a(49);var p=(e,t,a,l)=>{let n=Array(l+1).fill(Array(e+1).fill(0));for(let c=0;c<=l;c++)for(let l=0;l<=e;l++)0==c||0==l?n[c][l]=0:t[c-1]<=l?n[c][l]=Math.max(a[c-1]+n[c-1][l-t[c-1]],n[c-1][l]):n[c][l]=n[c-1][l];return console.log(n),n[l][e]};t.default=()=>{const e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],d=t[1],E=Object(n.useState)(""),b=Object(l.a)(E,2),h=b[0],f=b[1],g=Object(n.useState)(),O=Object(l.a)(g,2),I=O[0],j=O[1],k=Object(n.useState)("---"),y=Object(l.a)(k,2),S=y[0],x=y[1],v=Object(n.useState)(!1),w=Object(l.a)(v,2),N=w[0],C=w[1];return Object(n.useEffect)(()=>{console.log(p(2,[1,1,1],[10,20,30],3))},[]),c.a.createElement(m.a,null,c.a.createElement(r.a,null,c.a.createElement(u.a,null,c.a.createElement(i.a,{title:"Knapsack"},"Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack."))),c.a.createElement(r.a,null,c.a.createElement(u.a,null,c.a.createElement(o.a,null,c.a.createElement(i.a,{title:"Input",isOption:!0,setSample:e=>{console.log(e)}},c.a.createElement(r.a,null,c.a.createElement(u.a,{md:12},c.a.createElement(s.a,null,c.a.createElement(s.a.Group,{controlId:"profits"},c.a.createElement(s.a.Label,null,"Profits"),c.a.createElement(s.a.Control,{defaultValue:a,onChange:()=>{if(!h||!I)return;let e=document.getElementById("profits").value.split(" ");e=e.map(e=>parseInt(e)),isNaN(e[e.length-1])&&e.pop(),d(e),x(p(2,[1,1,1],e,3)),C(!0)},type:"text",placeholder:"1 2 3 ..."}),c.a.createElement(s.a.Text,{className:"text-muted"},"Kindly Input Profits with Spaces")),c.a.createElement(s.a.Group,{controlId:"weights"},c.a.createElement(s.a.Label,null,"Weights"),c.a.createElement(s.a.Control,{defaultValue:h,onChange:()=>{if(!a||!I)return;let e=document.getElementById("weights").value.split(" ");e=e.map(e=>parseInt(e)),isNaN(e[e.length-1])&&e.pop(),f(e),x(p(2,e,[10,20,30],3)),C(!0)},type:"text",placeholder:"1 2 3 ..."}),c.a.createElement(s.a.Text,{className:"text-muted"},"Kindly Input Wdights with Spaces")),c.a.createElement(s.a.Group,{controlId:"bucketSize"},c.a.createElement(s.a.Label,null,"Bucket Size"),c.a.createElement(s.a.Control,{defaultValue:I,onChange:()=>{if(!a||!h)return;let e=parseInt(document.getElementById("bucketSize").value);console.log(e),e&&(j(e),x(p(e,h,a,3)),C(!0))},type:"number",placeholder:"10 ..."}),c.a.createElement(s.a.Text,{className:"text-muted"},"Kindly Input bucket size")))))),c.a.createElement(i.a,{title:"Output"},N?S:"---")))))}},58:function(e,t,a){"use strict";var l=a(51);t.a=Object(l.a)("card-deck")}}]);
//# sourceMappingURL=28.c6b6e5a7.chunk.js.map