/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{277:function(e,t,r){"use strict";var o=r(151),n=r.n(o),c=r(280),l=r(281);t.a=class{constructor(e,t,r){if(this.axios=n.a.create({baseURL:e,paramsSerializer:l.stringify,...r}),this.storeConfig={cookie:{key:"jwt",options:{path:"/"}},localStorage:{key:"jwt"},...t},this.isBrowser()){let e;this.storeConfig.cookie?e=c.get(this.storeConfig.cookie.key):this.storeConfig.localStorage&&(e=JSON.parse(window.localStorage.getItem(this.storeConfig.localStorage.key))),e&&this.setToken(e,!0)}}async request(e,t,r){try{return(await this.axios.request({method:e,url:t,...r})).data}catch(e){throw e.response?new Error(e.response.data.message):e}}async register(e,t,r){this.clearToken();const o=await this.request("post","/auth/local/register",{data:{email:t,password:r,username:e}});return this.setToken(o.jwt),o}async login(e,t){this.clearToken();const r=await this.request("post","/auth/local",{data:{identifier:e,password:t}});return this.setToken(r.jwt),r}async forgotPassword(e,t){this.clearToken(),await this.request("post","/auth/forgot-password",{data:{email:e,url:t}})}async resetPassword(code,e,t){this.clearToken(),await this.request("post","/auth/reset-password",{data:{code:code,password:e,passwordConfirmation:t}})}getProviderAuthenticationUrl(e){return`${this.axios.defaults.baseURL}/connect/${e}`}async authenticateProvider(e,t){this.clearToken(),this.isBrowser()&&(t=l.parse(window.location.search,{ignoreQueryPrefix:!0}));const r=await this.request("get",`/auth/${e}/callback`,{params:t});return this.setToken(r.jwt),r}getEntries(e,t){return this.request("get",`/${e}`,{params:t})}getEntryCount(e,t){return this.request("get",`/${e}/count`,{params:t})}getEntry(e,t){return this.request("get",`/${e}/${t}`)}createEntry(e,data){return this.request("post",`/${e}`,{data:data})}updateEntry(e,t,data){return this.request("put",`/${e}/${t}`,{data:data})}deleteEntry(e,t){return this.request("delete",`/${e}/${t}`)}searchFiles(e){return this.request("get",`/upload/search/${decodeURIComponent(e)}`)}getFiles(e){return this.request("get","/upload/files",{params:e})}getFile(e){return this.request("get",`/upload/files/${e}`)}upload(data,e){return this.request("post","/upload",{data:data,...e})}setToken(e,t){this.axios.defaults.headers.common.Authorization="Bearer "+e,this.isBrowser()&&!t&&(this.storeConfig.localStorage&&window.localStorage.setItem(this.storeConfig.localStorage.key,JSON.stringify(e)),this.storeConfig.cookie&&c.set(this.storeConfig.cookie.key,e,this.storeConfig.cookie.options))}clearToken(){delete this.axios.defaults.headers.common.Authorization,this.isBrowser()&&(this.storeConfig.localStorage&&window.localStorage.removeItem(this.storeConfig.localStorage.key),this.storeConfig.cookie&&c.remove(this.storeConfig.cookie.key,this.storeConfig.cookie.options))}isBrowser(){return"undefined"!=typeof window}}},278:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),c=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:c,assign:function(e,source){return Object.keys(source).reduce(function(e,t){return e[t]=source[t],e},e)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var o=t[i],n=o.obj[o.prop],c=Object.keys(n),l=0;l<c.length;++l){var f=c[l],d=n[f];"object"==typeof d&&null!==d&&-1===r.indexOf(d)&&(t.push({obj:n,prop:f}),r.push(d))}return function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var o=[],n=0;n<t.length;++n)void 0!==t[n]&&o.push(t[n]);r.obj[r.prop]=o}}return t}(t)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",i=0;i<t.length;++i){var o=t.charCodeAt(i);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=t.charAt(i):o<128?r+=n[o]:o<2048?r+=n[192|o>>6]+n[128|63&o]:o<55296||o>=57344?r+=n[224|o>>12]+n[128|o>>6&63]+n[128|63&o]:(i+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(i)),r+=n[240|o>>18]+n[128|o>>12&63]+n[128|o>>6&63]+n[128|63&o])}return r},isBuffer:function(e){return null!=e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(Array.isArray(t))t.push(source);else{if("object"!=typeof t)return[t,source];(r.plainObjects||r.allowPrototypes||!o.call(Object.prototype,source))&&(t[source]=!0)}return t}if("object"!=typeof t)return[t].concat(source);var n=t;return Array.isArray(t)&&!Array.isArray(source)&&(n=c(t,r)),Array.isArray(t)&&Array.isArray(source)?(source.forEach(function(n,i){o.call(t,i)?t[i]&&"object"==typeof t[i]?t[i]=e(t[i],n,r):t.push(n):t[i]=n}),t):Object.keys(source).reduce(function(t,n){var c=source[n];return o.call(t,n)?t[n]=e(t[n],c,r):t[n]=c,t},n)}}},279:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},280:function(e,t,r){var o,n;!function(c){if(void 0===(n="function"==typeof(o=c)?o.call(t,r,t,e):o)||(e.exports=n),!0,e.exports=c(),!!0){var l=window.Cookies,f=window.Cookies=c();f.noConflict=function(){return window.Cookies=l,f}}}(function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var r in t)e[r]=t[r]}return e}return function t(r){function o(t,n,c){var l;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(c=e({path:"/"},o.defaults,c)).expires){var f=new Date;f.setMilliseconds(f.getMilliseconds()+864e5*c.expires),c.expires=f}c.expires=c.expires?c.expires.toUTCString():"";try{l=JSON.stringify(n),/^[\{\[]/.test(l)&&(n=l)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var d="";for(var y in c)c[y]&&(d+="; "+y,!0!==c[y]&&(d+="="+c[y]));return document.cookie=t+"="+n+d}t||(l={});for(var h=document.cookie?document.cookie.split("; "):[],m=/(%[0-9A-Z]{2})+/g,i=0;i<h.length;i++){var w=h[i].split("="),v=w.slice(1).join("=");this.json||'"'!==v.charAt(0)||(v=v.slice(1,-1));try{var j=w[0].replace(m,decodeURIComponent);if(v=r.read?r.read(v,j):r(v,j)||v.replace(m,decodeURIComponent),this.json)try{v=JSON.parse(v)}catch(e){}if(t===j){l=v;break}t||(l[j]=v)}catch(e){}}return l}}return o.set=o,o.get=function(e){return o.call(o,e)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(t,r){o(t,"",e(r,{expires:-1}))},o.withConverter=t,o}(function(){})})},281:function(e,t,r){"use strict";var o=r(282),n=r(283),c=r(279);e.exports={formats:c,parse:n,stringify:o}},282:function(e,t,r){"use strict";var o=r(278),n=r(279),c={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},l=Date.prototype.toISOString,f={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return l.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(object,t,r,n,c,l,filter,d,y,h,m,w){var v=object;if("function"==typeof filter)v=filter(t,v);else if(v instanceof Date)v=h(v);else if(null===v){if(n)return l&&!w?l(t,f.encoder):t;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||o.isBuffer(v))return l?[m(w?t:l(t,f.encoder))+"="+m(l(v,f.encoder))]:[m(t)+"="+m(String(v))];var j,k=[];if(void 0===v)return k;if(Array.isArray(filter))j=filter;else{var O=Object.keys(v);j=d?O.sort(d):O}for(var i=0;i<j.length;++i){var C=j[i];c&&null===v[C]||(k=Array.isArray(v)?k.concat(e(v[C],r(t,C),r,n,c,l,filter,d,y,h,m,w)):k.concat(e(v[C],t+(y?"."+C:"["+C+"]"),r,n,c,l,filter,d,y,h,m,w)))}return k};e.exports=function(object,e){var t=object,r=e?o.assign({},e):{};if(null!==r.encoder&&void 0!==r.encoder&&"function"!=typeof r.encoder)throw new TypeError("Encoder has to be a function.");var l=void 0===r.delimiter?f.delimiter:r.delimiter,y="boolean"==typeof r.strictNullHandling?r.strictNullHandling:f.strictNullHandling,h="boolean"==typeof r.skipNulls?r.skipNulls:f.skipNulls,m="boolean"==typeof r.encode?r.encode:f.encode,w="function"==typeof r.encoder?r.encoder:f.encoder,v="function"==typeof r.sort?r.sort:null,j=void 0!==r.allowDots&&r.allowDots,k="function"==typeof r.serializeDate?r.serializeDate:f.serializeDate,O="boolean"==typeof r.encodeValuesOnly?r.encodeValuesOnly:f.encodeValuesOnly;if(void 0===r.format)r.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,r.format))throw new TypeError("Unknown format option provided.");var C,filter,x=n.formatters[r.format];"function"==typeof r.filter?t=(filter=r.filter)("",t):Array.isArray(r.filter)&&(C=filter=r.filter);var A,S=[];if("object"!=typeof t||null===t)return"";A=r.arrayFormat in c?r.arrayFormat:"indices"in r?r.indices?"indices":"repeat":"indices";var N=c[A];C||(C=Object.keys(t)),v&&C.sort(v);for(var i=0;i<C.length;++i){var P=C[i];h&&null===t[P]||(S=S.concat(d(t[P],P,N,y,h,m?w:null,filter,v,j,k,x,O)))}var R=S.join(l),D=!0===r.addQueryPrefix?"?":"";return R.length>0?D+R:""}},283:function(e,t,r){"use strict";var o=r(278),n=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},l=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(o),f=l?o.slice(0,l.index):o,d=[];if(f){if(!r.plainObjects&&n.call(Object.prototype,f)&&!r.allowPrototypes)return;d.push(f)}for(var i=0;null!==(l=c.exec(o))&&i<r.depth;){if(i+=1,!r.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(l[1])}return l&&d.push("["+o.slice(l.index)+"]"),function(e,t,r){for(var o=t,i=e.length-1;i>=0;--i){var n,c=e[i];if("[]"===c)n=(n=[]).concat(o);else{n=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,f=parseInt(l,10);!isNaN(f)&&c!==l&&String(f)===l&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(n=[])[f]=o:n[l]=o}o=n}return o}(d,t,r)}};e.exports=function(e,t){var r=t?o.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:c.delimiter,r.depth="number"==typeof r.depth?r.depth:c.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:c.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:c.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:c.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:c.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:c.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:c.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:c.strictNullHandling,""===e||null==e)return r.plainObjects?Object.create(null):{};for(var f="string"==typeof e?function(e,t){for(var r={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,l=t.parameterLimit===1/0?void 0:t.parameterLimit,f=o.split(t.delimiter,l),i=0;i<f.length;++i){var d,y,h=f[i],m=h.indexOf("]="),w=-1===m?h.indexOf("="):m+1;-1===w?(d=t.decoder(h,c.decoder),y=t.strictNullHandling?null:""):(d=t.decoder(h.slice(0,w),c.decoder),y=t.decoder(h.slice(w+1),c.decoder)),n.call(r,d)?r[d]=[].concat(r[d]).concat(y):r[d]=y}return r}(e,r):e,d=r.plainObjects?Object.create(null):{},y=Object.keys(f),i=0;i<y.length;++i){var h=y[i],m=l(h,f[h],r);d=o.merge(d,m,r)}return o.compact(d)}}}]);