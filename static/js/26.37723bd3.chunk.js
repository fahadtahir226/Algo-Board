(this["webpackJsonpalgo-board"]=this["webpackJsonpalgo-board"]||[]).push([[26],{154:function(e,t,a){"use strict";a.r(t);var n=a(55),l=a(0),r=a.n(l),i=a(66),o=a(59),u=a(58),c=a(149),s=a(15),m=a(49);t.default=()=>{const e=Object(l.useState)(0),t=Object(n.a)(e,2),a=t[0],p=t[1];return r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(m.a,{title:"Integer Partition"},"In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition."))),r.a.createElement(i.a,null,r.a.createElement(o.a,{md:12},r.a.createElement(u.a,null,r.a.createElement(m.a,{title:"Input",isOption:!0,setSample:e=>{console.log(e)}},r.a.createElement(c.a,null,r.a.createElement(c.a.Group,null,r.a.createElement(c.a.Label,null,"Partition Number"),r.a.createElement(c.a.Control,{defaultValue:0,id:"partitionNumber",onChange:()=>{p(function(e){if(isNaN(e)||null==e)return[];const t=Array(e+1).fill(null).map(()=>Array(e+1).fill(null));for(let a=1;a<=e;a+=1)t[0][a]=0;for(let a=0;a<=e;a+=1)t[a][0]=1;for(let a=1;a<=e;a+=1)for(let n=1;n<=e;n+=1)if(a>n)t[a][n]=t[a-1][n];else{const e=t[a-1][n],l=t[a][n-a];t[a][n]=e+l}return t[e][e]}(parseInt(document.getElementById("partitionNumber").value)))},type:"number",placeholder:"10..."}),r.a.createElement(c.a.Text,{className:"text-muted"},"Kindly Input The Partition Space")))),r.a.createElement(m.a,{title:"Output"},a)))))}},58:function(e,t,a){"use strict";var n=a(51);t.a=Object(n.a)("card-deck")}}]);
//# sourceMappingURL=26.37723bd3.chunk.js.map