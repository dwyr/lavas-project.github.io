"use strict";var precacheConfig=[["/lavas-demo/news-v2/favicon.ico","1f8db38bf3b2a5ee104187ff10f3062a"],["/lavas-demo/news-v2/index.html","991e58485c2b8d3af2d5e1960747e435"],["/lavas-demo/news-v2/static/css/app.6aed4bce5beeb7564e50914e87d0b076.css","8f7807a2dcbba858821f526306e19e1e"],["/lavas-demo/news-v2/static/fonts/MaterialIcons-Regular.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["/lavas-demo/news-v2/static/fonts/MaterialIcons-Regular.woff","012cf6a10129e2275d79d6adac7f3b02"],["/lavas-demo/news-v2/static/fonts/MaterialIcons-Regular.woff2","570eb83859dc23dd0eec423a49e147fe"],["/lavas-demo/news-v2/static/img/icons/android-chrome-192x192.png","30ec27ecaad20422933fee8f0c1019ec"],["/lavas-demo/news-v2/static/img/icons/android-chrome-512x512.png","498b5e10c247353726cfa4dfa0517cf8"],["/lavas-demo/news-v2/static/img/icons/apple-touch-icon-120x120.png","b451e38c6ee4b03781b1019c518e7894"],["/lavas-demo/news-v2/static/img/icons/apple-touch-icon-152x152.png","87791769be90779b0d6630876574bdd3"],["/lavas-demo/news-v2/static/img/icons/apple-touch-icon-180x180.png","0ff69c8fca81469c28f589d5fad0616e"],["/lavas-demo/news-v2/static/img/icons/apple-touch-icon-60x60.png","4dc6fdc67611efce36a3c500cbe1c0ec"],["/lavas-demo/news-v2/static/img/icons/apple-touch-icon-76x76.png","588079df8f1b8fde3b3cd691ee65bf06"],["/lavas-demo/news-v2/static/img/icons/favicon-16x16.png","70631ad2e9950c82ce04ee7912ead61a"],["/lavas-demo/news-v2/static/img/icons/favicon-32x32.png","ba415e9e1988b87daf984814332e877f"],["/lavas-demo/news-v2/static/img/icons/favicon.ico","1f8db38bf3b2a5ee104187ff10f3062a"],["/lavas-demo/news-v2/static/img/icons/msapplication-icon-144x144.png","02d42b8423b2c199d374310dba7407a6"],["/lavas-demo/news-v2/static/img/icons/news.png","1e5d059603e3ad24515637634f855e60"],["/lavas-demo/news-v2/static/img/skeleton-bg.jpg","31740042e4bfe450180d2287f3d39ee9"],["/lavas-demo/news-v2/static/img/skeleton-logo.jpg","fccfc66f7fb83a856a9be8d1f4cd1ce1"],["/lavas-demo/news-v2/static/js/0.438ea0fc4b3404062e86.js","b377da45c974e53fbff011211a9735c3"],["/lavas-demo/news-v2/static/js/1.eea2e2bfaf3d64988a38.js","18f2c31de40cff843e5e99a30ccf473a"],["/lavas-demo/news-v2/static/js/2.70b0b4dcb86df2f9f7b3.js","39d321d2236da787f54bc43f6025f324"],["/lavas-demo/news-v2/static/js/3.e219f49d1487390542e3.js","0120ddb30712bcfb1164da4538818d1a"],["/lavas-demo/news-v2/static/js/4.d42c872ff3d1710c5b83.js","9cf95ac7595e5d0fa2b2f646923796ed"],["/lavas-demo/news-v2/static/js/5.c65c19cd79c76f472f05.js","a7f341db0e77c426de50d81d14f37b15"],["/lavas-demo/news-v2/static/js/app.4b3a0ddff5a69147d43f.js","afd092e39edd431bb9853fa144eb35df"],["/lavas-demo/news-v2/static/js/manifest.b8aee385b34dfb3a9a35.js","8ee19015e5116cc4bc212ba4c1b3a08f"],["/lavas-demo/news-v2/static/js/vendor.c18430f4bcdaebabb11e.js","75665e76a63f597c4c1bfef0b0e2f2f6"],["/lavas-demo/news-v2/static/js/vue.db7d0c78f51c16169a9e.js","fd60d5aa058c35a76e5b50109e771477"],["/lavas-demo/news-v2/static/manifest.json","4c2b6b1878ea87bb2c26432baaece61b"],["/lavas-demo/news-v2/sw-register.js","2ae842cdd21a4a19faad42687efc3350"]],cacheName="sw-precache-v3-sw-cache-lavas-demo-news-"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName=(addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e&&e.length>0&&(firstRegister=0),e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}).then(function(){if(!firstRegister)return self.clients.matchAll().then(function(e){e&&e.length&&e.forEach(function(e){e.postMessage("sw.update")})})}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!.*\\.html$|\\/data\\/).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function o(s,c){if(!n[s]){if(!t[s]){var i="function"==typeof require&&require;if(!c&&i)return i(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function a(e,t,n){var o=e.url,a=n.maxAgeSeconds,s=n.maxEntries,c=n.name,i=Date.now();return r("Updating LRU order for "+o+". Max entries is "+s+", max age is "+a),u.getDb(c).then(function(e){return u.setTimestampForUrl(e,o,i)}).then(function(e){return u.expireEntries(e,s,a,i)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function s(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var c,i=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||i.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||i.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=a.bind(null,e,t,n);c=c?c.then(r):r()}(e,n,r)})}),r.clone()})},openCache:o,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return o(t).then(function(t){return t.add(e)})},uncache:function(e,t){return o(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||s(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:s,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",o=1,a="store",s="url",c="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=function(e){return new Promise(function(t,n){var i=indexedDB.open(r+e,o);i.onupgradeneeded=function(){i.result.createObjectStore(a,{keyPath:s}).createIndex(c,c,{unique:!1})},i.onsuccess=function(){t(i.result)},i.onerror=function(){n(i.error)}})}(e)),i[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,o){var s=e.transaction(a,"readwrite");s.objectStore(a).put({url:t,timestamp:n}),s.oncomplete=function(){r(e)},s.onabort=function(){o(s.error)}})},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,u=[],f=e.transaction(a,"readwrite"),h=f.objectStore(a);h.index(c).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[c]){var r=t.value[s];u.push(r),h.delete(r),t.continue()}},f.oncomplete=function(){r(u)},f.onabort=o}):Promise.resolve([])}(e,n,r).then(function(n){return function(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(a,"readwrite"),u=i.objectStore(a),f=u.index(c),h=f.count();f.count().onsuccess=function(){var e=h.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[s];o.push(a),u.delete(a),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),a=e("./router"),s=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=s.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,s.cache.name))},installListener:function(e){var t=s.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(e){return Promise.all(s.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(t){return o.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),o=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,a){var s;a=a||{},t instanceof RegExp?s=RegExp:s=(s=a.origin||self.location.origin)instanceof RegExp?s.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(s),e=e.toLowerCase();var c=new r(e,t,n,a);this.routes.has(s)||this.routes.set(s,new Map);var i=this.routes.get(s);i.has(e)||i.set(e,new Map);var u=i.get(e),f=c.regexp||c.fullUrlRegExp;u.has(f.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,c)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,a(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],s=o&&o.get(e.toLowerCase());if(s){var c=a(s,n);if(c.length>0)return c[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){var a=n.cache||r.cache,s=Date.now();return o.isResponseFresh(t,a.maxAgeSeconds,s)?t:o.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,a=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,a))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),o=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(a,s){var c=!1,i=[],u=function(e){i.push(e.toString()),c?s(new Error('Both cache and network failed: "'+i.join('", "')+'"')):c=!0},f=function(e){e instanceof Response?a(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),o(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,s=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",n),o.openCache(n).then(function(t){var c,i,u=[];if(s){var f=new Promise(function(a){c=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,s=Date.now(),c=t.maxAgeSeconds;o.isResponseFresh(e,c,s)&&a(e)})},1e3*s)});u.push(f)}var h=o.fetchAndCache(e,n).then(function(e){if(c&&clearTimeout(c),a.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(h),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),s=e("./strategies"),c=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",c.installListener),self.addEventListener("activate",c.activateListener),self.addEventListener("fetch",c.fetchListener),t.exports={networkOnly:s.networkOnly,networkFirst:s.networkFirst,cacheOnly:s.cacheOnly,cacheFirst:s.cacheFirst,fastest:s.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,a=0,s="",u=t&&t.delimiter||"/";null!=(n=d.exec(e));){var f=n[0],h=n[1],l=n.index;if(s+=e.slice(a,l),a=l+f.length,h)s+=h[1];else{var p=e[a],m=n[2],v=n[3],g=n[4],w=n[5],b=n[6],x=n[7];s&&(r.push(s),s="");var y=null!=m&&null!=p&&p!==m,R="+"===b||"*"===b,E="?"===b||"*"===b,C=n[2]||u,k=g||w;r.push({name:v||o++,prefix:m||"",delimiter:C,optional:E,repeat:R,partial:y,asterisk:!!x,pattern:k?i(k):x?".*":"[^"+c(C)+"]+?"})}}return a<e.length&&(s+=e.substr(a)),s&&r.push(s),r}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var s="",c=n||{},i=(r||{}).pretty?o:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var h,l=c[f.name];if(null==l){if(f.optional){f.partial&&(s+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(p(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=i(l[d]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");s+=(0===d?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?a(l):i(l),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');s+=f.prefix+h}}else s+=f}return s}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function h(e,t,n){p(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",s=0;s<e.length;s++){var i=e[s];if("string"==typeof i)a+=c(i);else{var h=c(i.prefix),l="(?:"+i.pattern+")";t.push(i),i.repeat&&(l+="(?:"+h+l+")*"),a+=l=i.optional?i.partial?h+"("+l+")?":"(?:"+h+"("+l+"))?":h+"("+l+")"}}var d=c(n.delimiter||"/"),m=a.slice(-d.length)===d;return r||(a=(m?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=o?"$":r&&m?"":"(?="+d+"|$)",u(new RegExp("^"+a,f(n)),t)}function l(e,t,n){return p(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(e,t):p(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(l(e[o],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return h(r(e,n),t,n)}(e,t,n)}var p=e("isarray");t.exports=l,t.exports.parse=r,t.exports.compile=function(e,t){return s(r(e,t))},t.exports.tokensToFunction=s,t.exports.tokensToRegExp=h;var d=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/\/api\/mockup/,toolbox.networkFirst,{});