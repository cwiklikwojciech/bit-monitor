(this["webpackJsonpbit-monitor"]=this["webpackJsonpbit-monitor"]||[]).push([[0],{10:function(t,e,c){},173:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),s=c.n(a),i=c(52),r=c.n(i),b=(c(58),c(10),c(3)),j=c(6),o=c.n(j);c(17);var u=function(){var t=Object(a.useState)([]),e=Object(b.a)(t,2),c=e[0],s=e[1],i=Object(a.useState)([]),r=Object(b.a)(i,2),j=r[0],u=r[1];return Object(a.useEffect)((function(){var t,e={event:"bts:subscribe",data:{channel:"live_trades_btcusd"}};(t=new WebSocket("wss://ws.bitstamp.net")).onopen=function(){t.send(JSON.stringify(e))},t.onmessage=function(t){var e=JSON.parse(t.data);console.log(e.data.price),s(e.data.price)},o.a.get("https://api.nbp.pl/api/exchangerates/rates/a/usd/last/1/?format=json").then((function(t){u(t.data.rates[0].mid)})).catch((function(t){}))}),[]),Object(n.jsx)("div",{className:"exchange",children:(c*j).toFixed(2)})};var d=function(){var t=Object(a.useState)([]),e=Object(b.a)(t,2),c=(e[0],e[1],Object(a.useState)([])),s=Object(b.a)(c,2),i=s[0],r=s[1],j=Object(a.useState)([]),d=Object(b.a)(j,2),O=(d[0],d[1]),l=Object(a.useState)([]),f=Object(b.a)(l,2),x=f[0],h=f[1];return Object(a.useEffect)((function(){var t=0;setInterval((function(){o.a.get("https://api.bitbay.net/rest/trading/ticker/BTC-PLN").then((function(e){r(e.data.ticker.rate),t=e.data.ticker.rate})).catch((function(t){})),O(0),h(t)}),3e4)}),[]),Object(n.jsxs)("div",{className:"exchange",children:[Object(n.jsxs)("div",{className:"ex1",children:["BitBay",Object(n.jsxs)("div",{className:"BitStamp",children:[(1*i).toFixed(0)," ",Object(n.jsx)("br",{}),((i-x)/i*100).toFixed(2)>=0?Object(n.jsxs)("span",{class:"green",children:[((i-x)/i*100).toFixed(2),"%"]}):Object(n.jsxs)("span",{class:"red",children:[((i-x)/i*100).toFixed(2),"%"]})]})]}),Object(n.jsxs)("div",{className:"ex1",children:["Bitstamp",Object(n.jsxs)("div",{className:"BitStamp",children:[Object(n.jsx)(u,{}),"  ",Object(n.jsx)("br",{})]})]})]})};var O=function(t){var e=Object(a.useState)([]),c=Object(b.a)(e,2);return c[0],c[1],Object(a.useEffect)((function(){console.log(t.number)}),[]),Object(n.jsx)("div",{})};var l=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(O,{number:111}),Object(n.jsx)(d,{})]})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,174)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),s(t),i(t)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(l,{})}),document.getElementById("root")),f()},58:function(t,e,c){}},[[173,1,2]]]);
//# sourceMappingURL=main.4fe63f2b.chunk.js.map