!function(){function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}(0,("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired5b2.register)("byLno",function(n,t){e(n.exports,"getFCP",function(){return g}),e(n.exports,"getCLS",function(){return h}),e(n.exports,"getFID",function(){return P}),e(n.exports,"getLCP",function(){return D}),e(n.exports,"getTTFB",function(){return k});var i,r,a,o,u=function(e,n){return{name:e,value:void 0===n?-1:n,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var t=new PerformanceObserver(function(e){return e.getEntries().map(n)});return t.observe({type:e,buffered:!0}),t}}catch(e){}},f=function(e,n){var t=function t(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),n&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},s=function(e){addEventListener("pageshow",function(n){n.persisted&&e(n)},!0)},d=function(e,n,t){var i;return function(r){n.value>=0&&(r||t)&&(n.delta=n.value-(i||0),(n.delta||void 0===i)&&(i=n.value,e(n)))}},m=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},v=function(){f(function(e){m=e.timeStamp},!0)},l=function(){return m<0&&(m=p(),v(),s(function(){setTimeout(function(){m=p(),v()},0)})),{get firstHiddenTime(){return m}}},g=function(e,n){var t,i=l(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),t(!0)))},o=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",a);(o||f)&&(t=d(e,r,n),o&&a(o),s(function(i){t=d(e,r=u("FCP"),n),requestAnimationFrame(function(){requestAnimationFrame(function(){r.value=performance.now()-i.timeStamp,t(!0)})})}))},y=!1,T=-1,h=function(e,n){y||(g(function(e){T=e.value}),y=!0);var t,i=function(n){T>-1&&e(n)},r=u("CLS",0),a=0,o=[],m=function(e){if(!e.hadRecentInput){var n=o[0],i=o[o.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-n.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]),a>r.value&&(r.value=a,r.entries=o,t())}},p=c("layout-shift",m);p&&(t=d(i,r,n),f(function(){p.takeRecords().map(m),t(!0)}),s(function(){a=0,T=-1,t=d(i,r=u("CLS",0),n)}))},E={passive:!0,capture:!0},w=new Date,b=function(e,n){i||(i=n,r=e,a=new Date,F(removeEventListener),L())},L=function(){if(r>=0&&r<a-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach(function(n){n(e)}),o=[]}},S=function(e){if(e.cancelable){var n,t,i,r=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(n=function(){b(r,e),i()},t=function(){i()},i=function(){removeEventListener("pointerup",n,E),removeEventListener("pointercancel",t,E)},addEventListener("pointerup",n,E),addEventListener("pointercancel",t,E)):b(r,e)}},F=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(n){return e(n,S,E)})},P=function(e,n){var t,a=l(),m=u("FID"),p=function(e){e.startTime<a.firstHiddenTime&&(m.value=e.processingStart-e.startTime,m.entries.push(e),t(!0))},v=c("first-input",p);t=d(e,m,n),v&&f(function(){v.takeRecords().map(p),v.disconnect()},!0),v&&s(function(){t=d(e,m=u("FID"),n),o=[],r=-1,i=null,F(addEventListener),o.push(p),L()})},C={},D=function(e,n){var t,i=l(),r=u("LCP"),a=function(e){var n=e.startTime;n<i.firstHiddenTime&&(r.value=n,r.entries.push(e),t())},o=c("largest-contentful-paint",a);if(o){t=d(e,r,n);var m=function(){C[r.id]||(o.takeRecords().map(a),o.disconnect(),C[r.id]=!0,t(!0))};["keydown","click"].forEach(function(e){addEventListener(e,m,{once:!0,capture:!0})}),f(m,!0),s(function(i){t=d(e,r=u("LCP"),n),requestAnimationFrame(function(){requestAnimationFrame(function(){r.value=performance.now()-i.timeStamp,C[r.id]=!0,t(!0)})})})}},k=function(e){var n,t=u("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,n={entryType:"navigation",startTime:0};for(var t in e)"navigationStart"!==t&&"toJSON"!==t&&(n[t]=Math.max(e[t]-e.navigationStart,0));return n}();if(t.value=t.delta=n.responseStart,t.value<0||t.value>performance.now())return;t.entries=[n],e(t)}catch(e){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("load",function(){return setTimeout(n,0)})}})}();