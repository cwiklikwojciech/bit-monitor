(this["webpackJsonpbit-monitor"]=this["webpackJsonpbit-monitor"]||[]).push([[0],{10:function(e,t,c){},173:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(52),r=c.n(i),j=(c(58),c(10),c(3)),b=c(6),o=c.n(b);c(17);var d=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)([]),r=Object(j.a)(i,2),b=r[0],d=r[1];return Object(s.useEffect)((function(){var e,t={event:"bts:subscribe",data:{channel:"live_trades_btcusd"}};(e=new WebSocket("wss://ws.bitstamp.net")).onopen=function(){e.send(JSON.stringify(t))},e.onmessage=function(e){var t=JSON.parse(e.data);console.log(t.data.price),a(t.data.price)},o.a.get("https://api.nbp.pl/api/exchangerates/rates/a/usd/last/1/?format=json").then((function(e){d(e.data.rates[0].mid)})).catch((function(e){}))}),[]),Object(n.jsx)("div",{className:"exchange",children:(c*b).toFixed(2)})};var u=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=(t[1],Object(s.useState)([])),i=Object(j.a)(a,2),r=i[0],b=i[1],u=Object(s.useState)([]),O=Object(j.a)(u,2),l=O[0],x=O[1],f=Object(s.useState)([]),h=Object(j.a)(f,2),p=h[0],v=h[1];return Object(s.useEffect)((function(){var e=0;setInterval((function(){o.a.get("https://api.bitbay.net/rest/trading/ticker/BTC-PLN").then((function(t){b(t.data.ticker.rate),e=t.data.ticker.rate})).catch((function(e){})),x(0),v(e)}),3e4)}),[]),Object(n.jsxs)("div",{className:"exchange",children:[Object(n.jsxs)("div",{className:"ex1",children:["BitBay",Object(n.jsxs)("div",{className:"BitStamp",children:[(1*r).toFixed(0)," ",Object(n.jsx)("br",{}),((r-p)/r*100).toFixed(2)>=0?Object(n.jsxs)("span",{class:"green",children:[((r-p)/r*100).toFixed(2),"%"]}):Object(n.jsxs)("span",{class:"red",children:[((r-p)/r*100).toFixed(2),"%"]})]})]}),Object(n.jsxs)("div",{className:"ex1",children:["Bitstamp",Object(n.jsxs)("div",{className:"BitStamp",children:[Object(n.jsx)(d,{}),"  ",Object(n.jsx)("br",{}),((c-l)/c*100).toFixed(2)>=0?Object(n.jsxs)("span",{class:"green",children:[((c-l)/c*100).toFixed(2),"%"]}):Object(n.jsxs)("span",{class:"red",children:[((c-l)/c*100).toFixed(2),"%"]})]})]})]})};var O=function(e){var t=Object(s.useState)([]),c=Object(j.a)(t,2);return c[0],c[1],Object(s.useEffect)((function(){console.log(e.number)}),[]),Object(n.jsx)("div",{})};var l=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(O,{number:111}),Object(n.jsx)(u,{})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,174)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(l,{})}),document.getElementById("root")),x()},58:function(e,t,c){}},[[173,1,2]]]);
//# sourceMappingURL=main.ea7eed33.chunk.js.map