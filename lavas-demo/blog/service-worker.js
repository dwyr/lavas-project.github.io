"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e&&e.length>0&&(firstRegister=0),e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/lavas-demo/blog/favicon.ico","7a2fa8fc2aff558ca7b7e6d5dddb5315"],["/lavas-demo/blog/index.html","a9c4371da9e465a05ee24fcd141bae0f"],["/lavas-demo/blog/static/css/app.2536d4dca39f9c4c6ef4382a75ff7e15.css","9d96ec6264d4c58898baea62ac780ee8"],["/lavas-demo/blog/static/css/skeleton.46a74c891f8e4f87ee127465c436dcf9.css","46a74c891f8e4f87ee127465c436dcf9"],["/lavas-demo/blog/static/fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["/lavas-demo/blog/static/fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["/lavas-demo/blog/static/fonts/MaterialIcons-Regular.woff2","40de091676f313252d80ea8fb83b9c1e"],["/lavas-demo/blog/static/img/icons/android-chrome-192x192.png","f130a0b70e386170cf6f011c0ca8c4f4"],["/lavas-demo/blog/static/img/icons/android-chrome-512x512.png","0ff1bc4d14e5c9abcacba7c600d97814"],["/lavas-demo/blog/static/img/icons/apple-touch-icon-120x120.png","936d6e411cabd71f0e627011c3f18fe2"],["/lavas-demo/blog/static/img/icons/apple-touch-icon-152x152.png","1a034e64d80905128113e5272a5ab95e"],["/lavas-demo/blog/static/img/icons/apple-touch-icon-180x180.png","c43cd371a49ee4ca17ab3a60e72bdd51"],["/lavas-demo/blog/static/img/icons/apple-touch-icon-60x60.png","9a2b5c0f19de617685b7b5b42464e7db"],["/lavas-demo/blog/static/img/icons/apple-touch-icon-76x76.png","af28d69d59284dd202aa55e57227b11b"],["/lavas-demo/blog/static/img/icons/apple-touch-icon.png","66830ea6be8e7e94fb55df9f7b778f2e"],["/lavas-demo/blog/static/img/icons/favicon-16x16.png","4bb1a55479d61843b89a2fdafa7849b3"],["/lavas-demo/blog/static/img/icons/favicon-32x32.png","98b614336d9a12cb3f7bedb001da6fca"],["/lavas-demo/blog/static/img/icons/favicon.ico","7a2fa8fc2aff558ca7b7e6d5dddb5315"],["/lavas-demo/blog/static/img/icons/mstile-150x150.png","058a3335d15a3eb84e7ae3707ba09620"],["/lavas-demo/blog/static/img/icons/safari-pinned-tab.svg","f22d501a35a87d9f21701cb031f6ea17"],["/lavas-demo/blog/static/js/0.7454ce2a9aaf36e30241.js","84610e105d73c2f030a414533eb4710e"],["/lavas-demo/blog/static/js/1.badfef727f8ad0f0419e.js","07b320b7f328c47c223e120884575197"],["/lavas-demo/blog/static/js/2.56404b29a2d08cb91bc1.js","7b89380eb6ef5b096dae4c3c043f40b4"],["/lavas-demo/blog/static/js/3.951713ee6a92a5db1721.js","f2a65586f511bfbc64551f317759055b"],["/lavas-demo/blog/static/js/4.d0255966893562ddf93b.js","b9022dde438659921158c0356c3d6992"],["/lavas-demo/blog/static/js/app.cf545894e19354e2b588.js","e40f14c49a79f302e0ede74b982434cc"],["/lavas-demo/blog/static/js/manifest.b0710b9ab66a633eea70.js","956d677e93b270f1725e02173326c38d"],["/lavas-demo/blog/static/js/skeleton.b4c441b83684616b3682.js","fc05817896d1a3b92901e8a72b4f2eb2"],["/lavas-demo/blog/static/js/vendor.8f8f40f10bbe73fe7c2d.js","68f9d9b88f42ce027ef461dd211a8581"],["/lavas-demo/blog/static/manifest.json","06f868d2cc3b93fac5d2b3d31ea8a44e"],["/lavas-demo/blog/sw-register.js","6f28f3a851b6039cf85f27ea901a7e7e"]],cacheName="sw-precache-v3-sw-cache-blog-demo-"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}).then(function(){if(!firstRegister)return self.clients.matchAll().then(function(e){e&&e.length&&e[0].postMessage("updateMessage")})}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!.*\\.html$|\\/data\\/).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function o(s,c){if(!n[s]){if(!t[s]){var i="function"==typeof require&&require;if(!c&&i)return i(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||u.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||u.cache.name,caches.open(t)}function a(e,t,n){var r=s.bind(null,e,t,n);i=i?i.then(r):r()}function s(e,t,n){var o=e.url,a=n.maxAgeSeconds,s=n.maxEntries,c=n.name,i=Date.now();return r("Updating LRU order for "+o+". Max entries is "+s+", max age is "+a),f.getDb(c).then(function(e){return f.setTimestampForUrl(e,o,i)}).then(function(e){return f.expireEntries(e,s,a,i)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function c(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,u=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||u.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||u.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&a(e,n,r)})}),r.clone()})},openCache:o,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return o(t).then(function(t){return t.add(e)})},uncache:function(e,t){return o(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||c(e),u.preCacheItems=u.preCacheItems.concat(e)},validatePrecacheInput:c,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){function r(e){return new Promise(function(t,n){var r=indexedDB.open(s+e,c);r.onupgradeneeded=function(){r.result.createObjectStore(i,{keyPath:u}).createIndex(f,f,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e,t,n){return t?new Promise(function(r,o){var a=1e3*t,s=[],c=e.transaction(i,"readwrite"),l=c.objectStore(i);l.index(f).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-a>t.value[f]){var r=t.value[u];s.push(r),l.delete(r),t.continue()}},c.oncomplete=function(){r(s)},c.onabort=o}):Promise.resolve([])}function a(e,t){return t?new Promise(function(n,r){var o=[],a=e.transaction(i,"readwrite"),s=a.objectStore(i),c=s.index(f),l=c.count();c.count().onsuccess=function(){var e=l.result;e>t&&(c.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[u];o.push(a),s.delete(a),e-o.length>t&&r.continue()}})},a.oncomplete=function(){n(o)},a.onabort=r}):Promise.resolve([])}var s="sw-toolbox-",c=1,i="store",u="url",f="timestamp",l={};t.exports={getDb:function(e){return e in l||(l[e]=r(e)),l[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,o){var a=e.transaction(i,"readwrite");a.objectStore(i).put({url:t,timestamp:n}),a.oncomplete=function(){r(e)},a.onabort=function(){o(a.error)}})},expireEntries:function(e,t,n,r){return o(e,n,r).then(function(n){return a(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),a=e("./router"),s=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=s.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,s.cache.name))},installListener:function(e){var t=s.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(e){return Promise.all(s.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(t){return o.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),a=e("./helpers"),s=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;)new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next();return o},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),c.prototype.add=function(e,t,n,s){s=s||{};var c;t instanceof RegExp?c=RegExp:(c=s.origin||self.location.origin,c=c instanceof RegExp?c.source:r(c)),e=e.toLowerCase();var i=new o(e,t,n,s);this.routes.has(c)||this.routes.set(c,new Map);var u=this.routes.get(c);u.has(e)||u.set(e,new Map);var f=u.get(e),l=i.regexp||i.fullUrlRegExp;f.has(l.source)&&a.debug('"'+t+'" resolves to same regex as existing route.'),f.set(l.source,i)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,s(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],a=o&&o.get(e.toLowerCase());if(a){var c=s(a,n);if(c.length>0)return c[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){var a=n.cache||r.cache,s=Date.now();return o.isResponseFresh(t,a.maxAgeSeconds,s)?t:o.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,a=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,a))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),o=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(a,s){var c=!1,i=[],u=function(e){i.push(e.toString()),c?s(new Error('Both cache and network failed: "'+i.join('", "')+'"')):c=!0},f=function(e){e instanceof Response?a(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),o(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,s=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",n),o.openCache(n).then(function(t){var c,i,u=[];if(s){var f=new Promise(function(a){c=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,s=Date.now(),c=t.maxAgeSeconds;o.isResponseFresh(e,c,s)&&a(e)})},1e3*s)});u.push(f)}var l=o.fetchAndCache(e,n).then(function(e){if(c&&clearTimeout(c),a.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(l),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),s=e("./strategies"),c=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",c.installListener),self.addEventListener("activate",c.activateListener),self.addEventListener("fetch",c.fetchListener),t.exports={networkOnly:s.networkOnly,networkFirst:s.networkFirst,cacheOnly:s.cacheOnly,cacheFirst:s.cacheFirst,fastest:s.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,a=0,s="",u=t&&t.delimiter||"/";null!=(n=v.exec(e));){var f=n[0],l=n[1],h=n.index;if(s+=e.slice(a,h),a=h+f.length,l)s+=l[1];else{var p=e[a],d=n[2],m=n[3],g=n[4],b=n[5],x=n[6],w=n[7];s&&(r.push(s),s="");var y=null!=d&&null!=p&&p!==d,R="+"===x||"*"===x,E="?"===x||"*"===x,C=n[2]||u,k=g||b;r.push({name:m||o++,prefix:d||"",delimiter:C,optional:E,repeat:R,partial:y,asterisk:!!w,pattern:k?i(k):w?".*":"[^"+c(C)+"]+?"})}}return a<e.length&&(s+=e.substr(a)),s&&r.push(s),r}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var s="",c=n||{},i=(r||{}).pretty?o:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var l,h=c[f.name];if(null==h){if(f.optional){f.partial&&(s+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(g(h)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<h.length;p++){if(l=i(h[p]),!t[u].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");s+=(0===p?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?a(h):i(h),!t[u].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');s+=f.prefix+l}}else s+=f}return s}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function l(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}function h(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(m(e[o],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}function p(e,t,n){return d(r(e,n),t,n)}function d(e,t,n){g(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",s=0;s<e.length;s++){var i=e[s];if("string"==typeof i)a+=c(i);else{var l=c(i.prefix),h="(?:"+i.pattern+")";t.push(i),i.repeat&&(h+="(?:"+l+h+")*"),a+=h=i.optional?i.partial?l+"("+h+")?":"(?:"+l+"("+h+"))?":l+"("+h+")"}}var p=c(n.delimiter||"/"),d=a.slice(-p.length)===p;return r||(a=(d?a.slice(0,-p.length):a)+"(?:"+p+"(?=$))?"),a+=o?"$":r&&d?"":"(?="+p+"|$)",u(new RegExp("^"+a,f(n)),t)}function m(e,t,n){return g(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?l(e,t):g(e)?h(e,t,n):p(e,t,n)}var g=e("isarray");t.exports=m,t.exports.parse=r,t.exports.compile=function(e,t){return s(r(e,t))},t.exports.tokensToFunction=s,t.exports.tokensToRegExp=d;var v=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/\/material-design-icon/,toolbox.networkFirst,{}),toolbox.router.get(/\.json$/,toolbox.networkFirst,{});