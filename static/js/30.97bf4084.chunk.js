(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{160:function(e,t,a){"use strict";a.r(t);var l=a(63),n=a(0),r=a.n(n),i=a(72),c=a(64),u=a(156),m=a(21),o=a(57);t.default=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],s=t[1];return r.a.createElement(m.a,null,r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Matrix Chain Multiplication"},"The problem consists of finding the best way (order) of multiplying a set of matrices."))),r.a.createElement(i.a,null,r.a.createElement(c.a,{md:12},r.a.createElement(o.a,{title:"Input"},r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,null,r.a.createElement(u.a.Group,null,r.a.createElement(u.a.Label,null,"Matrixs"),r.a.createElement(u.a.Control,{id:"chain_matrix_multiplication",onChange:function(){var e=document.getElementById("chain_matrix_multiplication").value.split(" ");e=e.map(function(e){return parseInt(e)}),isNaN(e[e.length-1])&&e.pop(),s(function e(t,a){var l=Array(10).fill(Array(10).fill(-1)),n=t.length-1;if(a==n)return 0;if(-1!=l[a][n])return l[a][n];l[a][n]=1/0;for(var r=a;r<n;r++)l[a][n]=Math.min(l[a][n],e(t,a)+e(t,r+1)+t[a-1]*t[r]*t[n]);return console.log(l),l[a][n]}(e,1))},as:"textarea",placeholder:"1 2 3...",rows:"3"}),r.a.createElement(u.a.Text,{className:"text-muted"},"Kindly Input Numbers with space")))))))),r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Output"},r.a.createElement("p",{className:"ml-3"},a)))))}}}]);
//# sourceMappingURL=30.97bf4084.chunk.js.map