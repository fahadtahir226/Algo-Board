(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{147:function(e,t,a){"use strict";a.r(t);var n=a(63),l=a(0),r=a.n(l),c=a(72),u=a(64),o=a(67),i=a(156),s=a(21),m=a(57),p=a(74);t.default=function(){var e=Object(l.useState)(""),t=Object(n.a)(e,2),a=t[0],d=t[1],h=Object(l.useState)(""),f=Object(n.a)(h,2),b=f[0],g=f[1],E=Object(l.useState)("---"),y=Object(n.a)(E,2),v=y[0],j=y[1],O=Object(l.useState)(!1),w=Object(n.a)(O,2),x=w[0],I=w[1];return r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,null,r.a.createElement(m.a,{title:"Word Break"},"Longest Common Subsequence Problem has two sequences and we have to find the length of longest subsequence present in both of them. A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous."))),r.a.createElement(c.a,null,r.a.createElement(u.a,null,r.a.createElement(o.a,null,r.a.createElement(m.a,{title:"Input"},r.a.createElement(c.a,null,r.a.createElement(u.a,{md:12},r.a.createElement(i.a,null,r.a.createElement(i.a.Group,{controlId:"formBasicEmail"},r.a.createElement(i.a.Label,null,"Input Disctionary"),r.a.createElement(i.a.Control,{defaultValue:a,id:"dictionary",onChange:function(){var e=document.getElementById("dictionary").value;d(e),j(Object(p.a)(e.split(""),b.split("")).join("")),I(!0)},type:"text",placeholder:"Cat Dog Apple Man Butter..."}),r.a.createElement(i.a.Text,{className:"text-muted"},"Kindly Input Words with Spaces")),r.a.createElement(i.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(i.a.Label,null,"Input String"),r.a.createElement(i.a.Control,{defaultValue:b,id:"myString",onChange:function(){var e=document.getElementById("myString").value;g(e),j(Object(p.a)(a.split(""),e.split("")).join("")),I(!0)},type:"text",placeholder:"myapple..."}),r.a.createElement(i.a.Text,{className:"text-muted"},"Kindly Input string without spaces")))))),r.a.createElement(m.a,{title:"Output"},x?v?"Possible":"Not Possible":"---")))))}},67:function(e,t,a){"use strict";var n=a(58);t.a=Object(n.a)("card-deck")},74:function(e,t,a){"use strict";function n(e,t){for(var a=Array(t.length+1).fill(null).map(function(){return Array(e.length+1).fill(null)}),n=0;n<=e.length;n+=1)a[0][n]=0;for(var l=0;l<=t.length;l+=1)a[l][0]=0;for(var r=1;r<=t.length;r+=1)for(var c=1;c<=e.length;c+=1)e[c-1]===t[r-1]?a[r][c]=a[r-1][c-1]+1:a[r][c]=Math.max(a[r-1][c],a[r][c-1]);if(!a[t.length][e.length])return[""];for(var u=[],o=e.length,i=t.length;o>0||i>0;)e[o-1]===t[i-1]?(u.unshift(e[o-1]),o-=1,i-=1):a[i][o]===a[i][o-1]?o-=1:i-=1;return u}a.d(t,"a",function(){return n})}}]);
//# sourceMappingURL=16.50e8d711.chunk.js.map