(this["webpackJsonpmars-project"]=this["webpackJsonpmars-project"]||[]).push([[0],{11:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(3),c=t.n(o),l=(t(11),t(1)),s=t.n(l),i=t(4),u=t(5),m=function(e){var n=e.sol_key,t=e.sol_value;return r.a.createElement("div",{className:"card"},r.a.createElement("h3",null,"Sol:",n),r.a.createElement("p",null,"Avergae Temp:",JSON.stringify(t.AT.mx)," "),r.a.createElement("p",null,"AWind Directon:",JSON.stringify(t.WD[0].compass_point)," "),r.a.createElement("p",null,"Season:",t.Season," "))},p=function(){var e=Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/insight_weather/?api_key=".concat("eWwb2JJWbd0oHaPzAAf57zLUC5godIGlXBG7qM8F","&feedtype=json&ver=1.0"));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)("weather",p),n=e.data,t=e.status;return console.log(n),r.a.createElement("div",null,r.a.createElement("h2",null,"Mars Weather"),"loading"===t&&r.a.createElement("div",null,"Loading Data..."),"error"===t&&r.a.createElement("div",null,"Error Fetching Data"),"success"===t&&r.a.createElement("div",null,n.sol_keys.map((function(e,t){var a=n[e];return r.a.createElement(m,{key:t,sol_key:e,sol_value:a})})),")"))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,n,t){e.exports=t(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.ccdd69ac.chunk.js.map