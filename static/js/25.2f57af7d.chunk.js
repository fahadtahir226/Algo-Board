(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{161:function(e,t,a){"use strict";a.r(t);var n=a(63),l=a(0),u=a.n(l),r=a(72),c=a(64),s=a(67),i=a(156),o=a(68),m=a.n(o),h=a(21),d=a(57);t.default=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),a=t[0],o=(t[1],Object(l.useState)(0)),g=Object(n.a)(o,2),p=g[0],b=g[1],E=Object(l.useState)([{key:"Cumulative Return",values:[]}]),f=Object(n.a)(E,2),v=f[0],w=f[1];return u.a.createElement(h.a,null,u.a.createElement(r.a,null,u.a.createElement(c.a,null,u.a.createElement(d.a,{title:"Longest Increasing Subsequence"},"The Longest Increasing Subsequence (LIS) problem is to find the length of the longest subsequence of a given sequence such that all elements of the subsequence are sorted in increasing order."))),u.a.createElement(r.a,null,u.a.createElement(c.a,{md:12},u.a.createElement(s.a,null,u.a.createElement(d.a,{title:"Input"},u.a.createElement(r.a,null,u.a.createElement(c.a,null,u.a.createElement(i.a,null,u.a.createElement(i.a.Group,null,u.a.createElement(i.a.Label,null,"Number Series"),u.a.createElement(i.a.Control,{defaultValue:a,id:"longest_increasing_sequence",onChange:function(){var e={key:"Cumulative Return",values:[]},t=document.getElementById("longest_increasing_sequence").value.split(" ");t=t.map(function(e){return parseInt(e)}),isNaN(t[t.length-1])&&t.pop(),b(function(e){for(var t=Array(e.length).fill(1),a=0,n=1;n<e.length;){if(e[a]<e[n]){var l=t[a]+1;l>t[n]&&(t[n]=l)}(a+=1)===n&&(n+=1,a=0)}for(var u=0,r=0;r<t.length;r+=1)t[r]>u&&(u=t[r]);return u}(t)),t.forEach(function(t,a){e.values.push({key:a,value:t})}),w([e])},type:"text",placeholder:"1 2 3 ..."}),u.a.createElement(i.a.Text,{className:"text-muted"},"Kindly Input Numbers with space")))))),u.a.createElement(d.a,{width:"70%",title:"Output"},"Longest Increasing Subsequence: ",p,u.a.createElement(m.a,{tooltip:{enabled:!0},type:"discreteBarChart",datum:v,x:"key",y:"value",height:300,width:400,showValues:!0}))))))}},67:function(e,t,a){"use strict";var n=a(58);t.a=Object(n.a)("card-deck")}}]);
//# sourceMappingURL=25.2f57af7d.chunk.js.map