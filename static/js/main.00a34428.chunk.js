(this["webpackJsonpbit-monitor"]=this["webpackJsonpbit-monitor"]||[]).push([[0],{17:function(t,e,a){},173:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a(1),s=a.n(n),i=a(52),r=a.n(i),o=(a(58),a(17),a(3)),b=a(6),d=a.n(b),j=a(27);var l=function(){var t=Object(n.useState)([]),e=Object(o.a)(t,2),a=e[0],s=e[1],i=Object(n.useState)([]),r=Object(o.a)(i,2),b=r[0],j=r[1],l=Object(n.useState)([]),u=Object(o.a)(l,2),p=u[0],h=u[1],x=Object(n.useState)([]),O=Object(o.a)(x,2),f=O[0],g=O[1],v=Object(n.useState)([]),m=Object(o.a)(v,2),S=m[0],k=m[1];return Object(n.useEffect)((function(){var t=0,e=0;setInterval((function(){d.a.get("https:www.bitstamp.net/api/v2/ticker/btcusd/").then((function(e){s(e.data.last),t=e.data.last})).catch((function(t){console.log(t)})),d.a.get("https://api.bitbay.net/rest/trading/ticker/BTC-PLN").then((function(t){j(t.data.ticker.rate),e=t.data.ticker.rate})).catch((function(t){})),d.a.get("https://api.nbp.pl/api/exchangerates/rates/a/usd/last/1/?format=json").then((function(t){k(t.data.rates[0].mid)})).catch((function(t){})),h(t),g(e)}),2e4)}),[]),Object(c.jsxs)("div",{className:"exchange",children:[Object(c.jsxs)("div",{className:"ex1",children:["BitBay",Object(c.jsxs)("div",{className:"BitStamp",children:[(1*b).toFixed(0)," ",Object(c.jsx)("br",{}),((b-f)/b*100).toFixed(2)>=0?Object(c.jsxs)("span",{class:"green",children:[((b-f)/b*100).toFixed(2),"%"]}):Object(c.jsxs)("span",{class:"red",children:[((b-f)/b*100).toFixed(2),"%"]})]})]}),Object(c.jsxs)("div",{className:"ex1",children:["Bitstamp",Object(c.jsxs)("div",{className:"BitStamp",children:[(a*S).toFixed(0)," ",Object(c.jsx)("br",{}),((a-p)/a*100).toFixed(2)>=0?Object(c.jsxs)("span",{class:"green",children:[((a-p)/a*100).toFixed(2),"%"]}):Object(c.jsxs)("span",{class:"red",children:[((a-p)/a*100).toFixed(2),"%"]})]})]})]})},u=[20,12,123,435,12,531,34,12,64,75],p=[98e3,98e3,98e3,98e3,98e3,98e3,98e3,98e3,98e3,98e3],h=[104500,104500,104500,104500,104500,104500,104500,104500,104500,104500];var x=function(t){var e=Object(n.useState)({}),a=Object(o.a)(e,2),s=a[0],i=a[1],r=Object(n.useState)({}),b=Object(o.a)(r,2),l=(b[0],b[1],0);return Object(n.useEffect)((function(){setInterval((function(){d.a.get("https://api.nbp.pl/api/exchangerates/rates/a/usd/last/1/?format=json").then((function(t){l=t.data.rates[0].mid})).catch((function(t){})),console.log("Cena"+l),d.a.get("https://api.bitbay.net/rest/trading/ticker/BTC-PLN").then((function(t){for(var e=0;e<10;e++)h[e]=h[e+1];h[9]=t.data.ticker.rate})).catch((function(t){})),d.a.get("https://cors-anywhere.herokuapp.com/www.bitstamp.net/api/v2/ticker/btcusd/").then((function(t){for(var e=0;e<10;e++)p[e]=p[e+1];p[9]=(t.data.last*l).toFixed(0);for(var a=0;a<10;a++)u[a]=u[a+1];var c=(new Date).getMinutes();u[9]=c,i({labels:u,datasets:[{label:"bitstamp",data:p,backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4},{label:"bitbay",data:h,backgroundColor:["rgba(5, 92, 92, 0.6)"],borderWidth:4}]})})).catch((function(t){console.log(t)})),console.log(p,u)}),2e4)}),[]),Object(c.jsx)("div",{className:"Appx",children:Object(c.jsx)("div",{children:Object(c.jsx)(j.Line,{data:s,options:{responsive:!0,title:{text:"THICCNESS SCALE",display:!0},scales:{yAxes:[{ticks:{min:p[9]-3e3,autoSkip:!0,maxTicksLimit:100,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]}}})})})};var O=function(t){var e=Object(n.useState)([]),a=Object(o.a)(e,2);return a[0],a[1],Object(n.useEffect)((function(){console.log(t.number)}),[]),Object(c.jsx)("div",{})};var f=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{number:111}),Object(c.jsx)(l,{}),Object(c.jsx)(x,{})]})},g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,174)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),g()},58:function(t,e,a){}},[[173,1,2]]]);
//# sourceMappingURL=main.00a34428.chunk.js.map