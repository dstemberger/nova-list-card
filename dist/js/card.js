!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){Nova.booting(function(e,t,n){e.component("nova-list-card",r(2))})},function(e,t,r){var n=r(8)(r(9),r(11),!1,function(e){r(3)},null,null);e.exports=n.exports},function(e,t,r){var n=r(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(6)("6ffe00b5",n,!0,{})},function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".nova-list-card{height:auto;min-height:150px}.nova-list-card-body{min-height:100px}.nova-list-card.zebra .nova-list-card-item:nth-child(2n){background-color:var(--20)}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var a=(o=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([a]).join("\n")}var o;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(n[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&n[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),t.push(o))}},t}},function(e,t,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=r(7),i={},o=n&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,u=!1,c=function(){},f=null,d="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e){for(var t=0;t<e.length;t++){var r=e[t],n=i[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(v(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var o=[];for(a=0;a<r.parts.length;a++)o.push(v(r.parts[a]));i[r.id]={id:r.id,refs:1,parts:o}}}}function p(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function v(e){var t,r,n=document.querySelector("style["+d+'~="'+e.id+'"]');if(n){if(u)return c;n.parentNode.removeChild(n)}if(m){var a=l++;n=s||(s=p()),t=g.bind(null,n,a,!1),r=g.bind(null,n,a,!0)}else n=p(),t=function(e,t){var r=t.css,n=t.media,a=t.sourceMap;n&&e.setAttribute("media",n);f.ssrId&&e.setAttribute(d,t.id);a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}e.exports=function(e,t,r,n){u=r,f=n||{};var o=a(e,t);return h(o),function(t){for(var r=[],n=0;n<o.length;n++){var s=o[n];(l=i[s.id]).refs--,r.push(l)}t?h(o=a(e,t)):o=[];for(n=0;n<r.length;n++){var l;if(0===(l=r[n]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete i[l.id]}}}};var _,b=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function g(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e,t){for(var r=[],n={},a=0;a<t.length;a++){var i=t[a],o=i[0],s={id:e+":"+a,css:i[1],media:i[2],sourceMap:i[3]};n[o]?n[o].parts.push(s):r.push(n[o]={id:o,parts:[s]})}return r}},function(e,t){e.exports=function(e,t,r,n,a,i){var o,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,s=e.default);var u,c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId=a),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=u):n&&(u=n),u){var f=c.functional,d=f?c.render:c.beforeCreate;f?(c._injectStyles=u,c.render=function(e,t){return u.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:o,exports:s,options:c}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10),a=r.n(n);t.default={props:["card"],data:function(){return{items:[],loading:!0}},mounted:function(){var e=this;axios.get(this.endpoint).then(function(t){e.items=t.data,e.loading=!1})},methods:{formatValue:function(e,t){return null==this.card.value_format?this.value(e,t):"numerial"==this.card.value_formatter?this.numerialValue(e,t):"timestamp"==this.card.value_formatter?this.timestampValue(e.resource[this.card.value_column],t):void 0},timestampValue:function(e,t){var r=moment(e);return"relative"!=t?r.format(t):r.fromNow()},numerialValue:function(e){return a()(e.resource[this.card.value_column]).format(this.card.value_format)},value:function(e){return e.resource[this.card.value_column]}},computed:{viewAllParams:function(){return"lens"==this.card.view_all_route?{resourceName:this.card.uri_key,lens:this.card.view_all_key}:{resourceName:this.card.uri_key}},endpoint:function(){var e="/nova-vendor/nova-list-card/resources/"+this.card.uri_key+"/";return this.card.relationship&&(e+=this.card.aggregate+"/"+this.card.relationship+"/"),this.card.aggregate_column&&(e+=this.card.aggregate_column+"/"),(e+="?order_by="+this.card.order_column+"&direction="+this.card.order_direction+"&limit="+this.card.limit)+"&nova-list-card="+this.card.id}}}},function(e,t,r){var n,a;void 0===(a="function"==typeof(n=function(){var e,t,r,n,a,i={},o={},s={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},l={currentLocale:s.currentLocale,zeroFormat:s.zeroFormat,nullFormat:s.nullFormat,defaultFormat:s.defaultFormat,scalePercentBy100:s.scalePercentBy100};function u(e,t){this._input=e,this._value=t}return(e=function(r){var n,a,o,s;if(e.isNumeral(r))n=r.value();else if(0===r||void 0===r)n=0;else if(null===r||t.isNaN(r))n=null;else if("string"==typeof r)if(l.zeroFormat&&r===l.zeroFormat)n=0;else if(l.nullFormat&&r===l.nullFormat||!r.replace(/[^0-9]+/g,"").length)n=null;else{for(a in i)if((s="function"==typeof i[a].regexps.unformat?i[a].regexps.unformat():i[a].regexps.unformat)&&r.match(s)){o=i[a].unformat;break}n=(o=o||e._.stringToNumber)(r)}else n=Number(r)||null;return new u(r,n)}).version="2.0.6",e.isNumeral=function(e){return e instanceof u},e._=t={numberToFormat:function(t,r,n){var a,i,s,l,u,c,f,d,m=o[e.options.currentLocale],h=!1,p=!1,v="",_="",b=!1;if(t=t||0,s=Math.abs(t),e._.includes(r,"(")?(h=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(c=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(i=!!(i=r.match(/a(k|m|b|t)?/))&&i[1],e._.includes(r," a")&&(v=" "),r=r.replace(new RegExp(v+"a[kmbt]?"),""),s>=1e12&&!i||"t"===i?(v+=m.abbreviations.trillion,t/=1e12):s<1e12&&s>=1e9&&!i||"b"===i?(v+=m.abbreviations.billion,t/=1e9):s<1e9&&s>=1e6&&!i||"m"===i?(v+=m.abbreviations.million,t/=1e6):(s<1e6&&s>=1e3&&!i||"k"===i)&&(v+=m.abbreviations.thousand,t/=1e3)),e._.includes(r,"[.]")&&(p=!0,r=r.replace("[.]",".")),l=t.toString().split(".")[0],u=r.split(".")[1],f=r.indexOf(","),a=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(e._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),_=e._.toFixed(t,u[0].length+u[1].length,n,u[1].length)):_=e._.toFixed(t,u.length,n),l=_.split(".")[0],_=e._.includes(_,".")?m.delimiters.decimal+_.split(".")[1]:"",p&&0===Number(_.slice(1))&&(_="")):l=e._.toFixed(t,0,n),v&&!i&&Number(l)>=1e3&&v!==m.abbreviations.trillion)switch(l=String(Number(l)/1e3),v){case m.abbreviations.thousand:v=m.abbreviations.million;break;case m.abbreviations.million:v=m.abbreviations.billion;break;case m.abbreviations.billion:v=m.abbreviations.trillion}if(e._.includes(l,"-")&&(l=l.slice(1),b=!0),l.length<a)for(var g=a-l.length;g>0;g--)l="0"+l;return f>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===r.indexOf(".")&&(l=""),d=l+_+(v||""),h?d=(h&&b?"(":"")+d+(h&&b?")":""):c>=0?d=0===c?(b?"-":"+")+d:d+(b?"-":"+"):b&&(d="-"+d),d},stringToNumber:function(e){var t,r,n,a=o[l.currentLocale],i=e,s={thousand:3,million:6,billion:9,trillion:12};if(l.zeroFormat&&e===l.zeroFormat)r=0;else if(l.nullFormat&&e===l.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==a.delimiters.decimal&&(e=e.replace(/\./g,"").replace(a.delimiters.decimal,".")),s)if(n=new RegExp("[^a-zA-Z]"+a.abbreviations[t]+"(?:\\)|(\\"+a.currency.symbol+")?(?:\\))?)?$"),i.match(n)){r*=Math.pow(10,s[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),a=n.length>>>0,i=0;if(3===arguments.length)r=arguments[2];else{for(;i<a&&!(i in n);)i++;if(i>=a)throw new TypeError("Reduce of empty array with no initial value");r=n[i++]}for(;i<a;i++)i in n&&(r=t(r,n[i],i,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce(function(e,r){var n=t.multiplier(r);return e>n?e:n},1)},toFixed:function(e,t,r,n){var a,i,o,s,l=e.toString().split("."),u=t-(n||0);return a=2===l.length?Math.min(Math.max(l[1].length,u),t):u,o=Math.pow(10,a),s=(r(e+"e+"+a)/o).toFixed(a),n>t-a&&(i=new RegExp("\\.?0{1,"+(n-(t-a))+"}$"),s=s.replace(i,"")),s}},e.options=l,e.formats=i,e.locales=o,e.locale=function(e){return e&&(l.currentLocale=e.toLowerCase()),l.currentLocale},e.localeData=function(e){if(!e)return o[l.currentLocale];if(e=e.toLowerCase(),!o[e])throw new Error("Unknown locale : "+e);return o[e]},e.reset=function(){for(var e in s)l[e]=s[e]},e.zeroFormat=function(e){l.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){l.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){l.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,a,i,o,s,l,u,c;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{u=e.localeData(r)}catch(t){u=e.localeData(e.locale())}return i=u.currency.symbol,s=u.abbreviations,n=u.delimiters.decimal,a="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,(null===(c=t.match(/^[^\d]+/))||(t=t.substr(1),c[0]===i))&&((null===(c=t.match(/[^\d]+$/))||(t=t.slice(0,-1),c[0]===s.thousand||c[0]===s.million||c[0]===s.billion||c[0]===s.trillion))&&(l=new RegExp(a+"{2}"),!t.match(/[^\d.,]/g)&&(!((o=t.split(n)).length>2)&&(o.length<2?!!o[0].match(/^\d+.*\d$/)&&!o[0].match(l):1===o[0].length?!!o[0].match(/^\d+$/)&&!o[0].match(l)&&!!o[1].match(/^\d+$/):!!o[0].match(/^\d+.*\d$/)&&!o[0].match(l)&&!!o[1].match(/^\d+$/)))))},e.fn=u.prototype={clone:function(){return e(this)},format:function(t,r){var n,a,o,s=this._value,u=t||l.defaultFormat;if(r=r||Math.round,0===s&&null!==l.zeroFormat)a=l.zeroFormat;else if(null===s&&null!==l.nullFormat)a=l.nullFormat;else{for(n in i)if(u.match(i[n].regexps.format)){o=i[n].format;break}a=(o=o||e._.numberToFormat)(s,u,r)}return a},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([this._value,e],function(e,t,n,a){return e+Math.round(r*t)},0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([e],function(e,t,n,a){return e-Math.round(r*t)},Math.round(this._value*r))/r,this},multiply:function(e){return this._value=t.reduce([this._value,e],function(e,r,n,a){var i=t.correctionFactor(e,r);return Math.round(e*i)*Math.round(r*i)/Math.round(i*i)},1),this},divide:function(e){return this._value=t.reduce([this._value,e],function(e,r,n,a){var i=t.correctionFactor(e,r);return Math.round(e*i)/Math.round(r*i)}),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var a,i=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),a=e._.numberToFormat(t,r,n),e._.includes(a,")")?((a=a.split("")).splice(-1,0,i+"BPS"),a=a.join("")):a=a+i+"BPS",a},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},a="("+(a=(r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(n.suffixes.filter(function(e){return r.suffixes.indexOf(e)<0})).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(a)},format:function(t,a,i){var o,s,l,u=e._.includes(a,"ib")?n:r,c=e._.includes(a," b")||e._.includes(a," ib")?" ":"";for(a=a.replace(/\s?i?b/,""),o=0;o<=u.suffixes.length;o++)if(s=Math.pow(u.base,o),l=Math.pow(u.base,o+1),null===t||0===t||t>=s&&t<l){c+=u.suffixes[o],s>0&&(t/=s);break}return e._.numberToFormat(t,a,i)+c},unformat:function(t){var a,i,o=e._.stringToNumber(t);if(o){for(a=r.suffixes.length-1;a>=0;a--){if(e._.includes(t,r.suffixes[a])){i=Math.pow(r.base,a);break}if(e._.includes(t,n.suffixes[a])){i=Math.pow(n.base,a);break}}o*=i||1}return o}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var a,i,o=e.locales[e.options.currentLocale],s={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),a=e._.numberToFormat(t,r,n),t>=0?(s.before=s.before.replace(/[\-\(]/,""),s.after=s.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(s.before,"-")&&!e._.includes(s.before,"(")&&(s.before="-"+s.before),i=0;i<s.before.length;i++)switch(s.before[i]){case"$":a=e._.insert(a,o.currency.symbol,i);break;case" ":a=e._.insert(a," ",i+o.currency.symbol.length-1)}for(i=s.after.length-1;i>=0;i--)switch(s.after[i]){case"$":a=i===s.after.length-1?a+o.currency.symbol:e._.insert(a,o.currency.symbol,-(s.after.length-(1+i)));break;case" ":a=i===s.after.length-1?a+" ":e._.insert(a," ",-(s.after.length-(1+i)+o.currency.symbol.length-1))}return a}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var a=("number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(a[0]),r,n)+"e"+a[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),a=Number(r[1]);return a=e._.includes(t,"e-")?a*=-1:a,e._.reduce([n,Math.pow(10,a)],function(t,r,n,a){var i=e._.correctionFactor(t,r);return t*i*(r*i)/(i*i)},1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var a=e.locales[e.options.currentLocale],i=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),i+=a.ordinal(t),e._.numberToFormat(t,r,n)+i}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var a,i=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),a=e._.numberToFormat(t,r,n),e._.includes(a,")")?((a=a.split("")).splice(-1,0,i+"%"),a=a.join("")):a=a+i+"%",a},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),a=Math.floor((e-60*n*60)/60),i=Math.round(e-60*n*60-60*a);return n+":"+(a<10?"0"+a:a)+":"+(i<10?"0"+i:i)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e})?n.call(t,r,t,e):n)||(e.exports=a)},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:"nova-list-card"+e.card.classes+" p-8 bg-white relative",attrs:{id:e.card.id}},[0!=e.card.heading.length?r("div",{staticClass:"nova-list-card-heading flex border-b pb-2 mb-2 border-50"},[r("div",{staticClass:"truncate left",class:{"w-3/4":e.card.heading.right}},[e._v(e._s(e.card.heading.left))]),e._v(" "),e.card.heading.right?r("div",{staticClass:"w-1/4 truncate right"},[e._v(e._s(e.card.heading.right))]):e._e()]):e._e(),e._v(" "),r("div",{staticClass:"nova-list-card-body relative"},[e.loading||0!=e.items.length?e._e():r("div",{staticClass:"text-center text-base text-80 font-normal mb-6 pt-8"},[r("svg",{staticClass:"mb-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"65",height:"51",viewBox:"0 0 65 51"}},[r("g",{attrs:{id:"Page-1",fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{id:"05-blank-state",fill:"#A8B9C5","fill-rule":"nonzero",transform:"translate(-779 -695)"}},[r("path",{attrs:{id:"Combined-Shape",d:"M835 735h2c.552285 0 1 .447715 1 1s-.447715 1-1 1h-2v2c0 .552285-.447715 1-1 1s-1-.447715-1-1v-2h-2c-.552285 0-1-.447715-1-1s.447715-1 1-1h2v-2c0-.552285.447715-1 1-1s1 .447715 1 1v2zm-5.364125-8H817v8h7.049375c.350333-3.528515 2.534789-6.517471 5.5865-8zm-5.5865 10H785c-3.313708 0-6-2.686292-6-6v-30c0-3.313708 2.686292-6 6-6h44c3.313708 0 6 2.686292 6 6v25.049375c5.053323.501725 9 4.765277 9 9.950625 0 5.522847-4.477153 10-10 10-5.185348 0-9.4489-3.946677-9.950625-9zM799 725h16v-8h-16v8zm0 2v8h16v-8h-16zm34-2v-8h-16v8h16zm-52 0h16v-8h-16v8zm0 2v4c0 2.209139 1.790861 4 4 4h12v-8h-16zm18-12h16v-8h-16v8zm34 0v-8h-16v8h16zm-52 0h16v-8h-16v8zm52-10v-4c0-2.209139-1.790861-4-4-4h-44c-2.209139 0-4 1.790861-4 4v4h52zm1 39c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8z"}})])])]),e._v(" "),r("p",[e._v(e._s(e.__("No Results")))])]),e._v(" "),e.loading?r("div",{staticClass:"flex justify-center items-center absolute pin z-50 bg-white"},[r("loader",{staticClass:"text-60"})],1):e._e(),e._v(" "),e.loading||0==e.items.length?e._e():r("div",[e._l(e.items,function(t,n){return r("router-link",{key:t.id,staticClass:"nova-list-card-item cursor-pointer block text-black no-underline",class:"nova-list-card-item-"+(n+1),attrs:{to:{name:"detail",params:{resourceName:t.resourceName,resourceId:t.resourceId}}}},[r("div",{staticClass:"flex py-1"},[r("div",{class:{"w-full":null==e.card.value_column,"w-3/4 pr-4":null!=e.card.value_column}},[r("p",{staticClass:"nova-list-card-title truncate no-underline dim text-primary font-bold"},[e._v(e._s(t.title))]),e._v(" "),e.card.subtitle_enabled?r("p",{staticClass:"nova-list-card-subtitle text-80 truncate pr-4"},[e.card.subtitle_column?r("span",{staticClass:"pb-2"},[e._v(e._s(t.resource[e.card.subtitle_column]))]):t.subTitle?r("span",{staticClass:"pb-2"},[e._v(e._s(t.subTitle))]):e._e()]):e._e(),e._v(" "),e.card.timestamp_enabled?r("p",{staticClass:"text-80 nova-list-card-timestamp"},[e._v(e._s(e.timestampValue(t.resource[e.card.timestamp_column],e.card.timestamp_format)))]):e._e(),e._v(" "),t.aggregate&&e.card.relationship+"_"+e.card.aggregate!=e.card.value_column&&e.card.relationship+"_"+e.card.aggregate!=e.card.subtitle_column?r("p",{staticClass:"text-80"},[e._v(e._s(t.aggregate)+" "+e._s(e.card.relationship))]):e._e()]),e._v(" "),null!=e.card.value_column?r("div",{staticClass:"nova-list-card-value w-1/4 truncate"},[e._v(e._s(e.formatValue(t,e.card.value_format)))]):e._e()])])}),e._v(" "),e.card.footer_link_type?r("div",{staticClass:"nova-list-card-footer-link border-t border-50 mt-4"},["href"!=e.card.footer_link_type&&e.items.length==e.card.limit?r("router-link",{staticClass:"cursor-pointer text-80 no-underline py-3 font-bold block dim",attrs:{to:{name:e.card.footer_link_type,params:e.card.footer_link_params}},domProps:{innerHTML:e._s(e.card.footer_link_text)}}):e._e(),e._v(" "),"href"==e.card.footer_link_type?r("a",{staticClass:"cursor-pointer text-80 no-underline py-3 font-bold block dim",attrs:{target:e.card.footer_link_params.target,href:e.card.footer_link_params.href},domProps:{innerHTML:e._s(e.card.footer_link_params.text)}}):e._e()],1):e._e()],2)])])},staticRenderFns:[]}}]);