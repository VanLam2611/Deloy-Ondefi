(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3425],{70151:function(t,n,e){var r=e(278),u=e(73480);t.exports=function(t){return u(r(t))}},25127:function(t,n,e){var r=e(73480),u=e(52628);t.exports=function(t){return r(u(t))}},73480:function(t,n,e){var r=e(69877);t.exports=function(t,n){var e=-1,u=t.length,a=u-1;for(n=void 0===n?u:n;++e<n;){var o=r(e,a),i=t[o];t[o]=t[e],t[e]=i}return t.length=n,t}},69983:function(t,n,e){var r=e(70151),u=e(25127),a=e(1469);t.exports=function(t){return(a(t)?r:u)(t)}},45578:function(t,n,e){var r=e(67206),u=e(45652);t.exports=function(t,n){return t&&t.length?u(t,r(n,2)):[]}},20958:function(t,n,e){"use strict";e.d(n,{ZP:function(){return E}});var r=e(67294),u=e(40821);function a(t,n,e,r){return new(e||(e=Promise))((function(u,a){function o(t){try{c(r.next(t))}catch(n){a(n)}}function i(t){try{c(r.throw(t))}catch(n){a(n)}}function c(t){var n;t.done?u(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,i)}c((r=r.apply(t,n||[])).next())}))}function o(t,n){var e,r,u,a,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(u=2&a[0]?r.return:a[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,a[1])).done)return u;switch(r=0,u&&(a=[2&a[0],u.value]),a[0]){case 0:case 1:u=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(u=(u=o.trys).length>0&&u[u.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!u||a[1]>u[0]&&a[1]<u[3])){o.label=a[1];break}if(6===a[0]&&o.label<u[1]){o.label=u[1],u=a;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(a);break}u[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(t,o)}catch(i){a=[6,i],r=0}finally{e=u=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var i=function(){},c=i(),f=Object,l=function(t){return t===c},s=function(t){return"function"==typeof t},v=!("undefined"!=typeof window)||"Deno"in window,p=v?r.useEffect:r.useLayoutEffect,h="undefined"!==typeof navigator&&navigator.connection;!v&&h&&(["slow-2g","2g"].includes(h.effectiveType)||h.saveData);var y,d,g=new WeakMap,b=0,w=function(t){var n,e,r=typeof t,u=t&&t.constructor,a=u==Date;if(f(t)!==t||a||u==RegExp)n=a?t.toJSON():"symbol"==r?t.toString():"string"==r?JSON.stringify(t):""+t;else{if(n=g.get(t))return n;if(n=++b+"~",g.set(t,n),u==Array){for(n="@",e=0;e<t.length;e++)n+=w(t[e])+",";g.set(t,n)}if(u==f){n="#";for(var o=f.keys(t).sort();!l(e=o.pop());)l(t[e])||(n+=e+":"+w(t[e])+",");g.set(t,n)}}return n},k=function(t){if(s(t))try{t=t()}catch(e){t=""}var n=[].concat(t);return[t="string"==typeof t?t:(Array.isArray(t)?t.length:t)?w(t):"",n,t?"$err$"+t:"",t?"$req$"+t:""]},x=function(){return x=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var u in n=arguments[e])Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u]);return t},x.apply(this,arguments)},m=function(t){return s(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(null===t[1]?t[2]:t[1])||{}]},$="$inf$",S=function(t){return k(t?t(0,null):null)[0]},E=(y=u.ZP,d=function(t){return function(n,e,u){var i=(0,r.useState)({})[1],f=(0,r.useRef)(!1),v=(0,r.useRef)(),h=u.cache,y=u.initialSize,d=void 0===y?1:y,g=u.revalidateAll,b=void 0!==g&&g,w=u.persistSize,x=void 0!==w&&w,m=u.revalidateFirstPage,E=void 0===m||m,O=null;try{O=S(n)}catch(j){}var C=null,P=null;O&&(C="$ctx$"+O,P="$len$"+O);var z=(0,r.useCallback)((function(){var t=h.get(P);return l(t)?d:t}),[P,d]),A=(0,r.useRef)(z());p((function(){f.current?O&&h.set(P,x?A.current:d):f.current=!0}),[O]);var N=t(O?$+O:null,(function(){return a(void 0,void 0,void 0,(function(){var t,r,a,i,c,f,s,p,y,d,g,w;return o(this,(function(o){switch(o.label){case 0:t=h.get(C)||[],r=t[0],a=t[1],i=[],c=z(),f=null,s=0,o.label=1;case 1:return s<c?(p=k(n(s,f)),y=p[0],d=p[1],y?(g=h.get(y),w=b||r||l(g)||E&&!s&&!l(v.current)||a&&!l(a[s])&&!u.compare(a[s],g),e&&w?[4,e.apply(void 0,d)]:[3,3]):[3,5]):[3,5];case 2:g=o.sent(),h.set(y,g),o.label=3;case 3:i.push(g),f=g,o.label=4;case 4:return++s,[3,1];case 5:return h.delete(C),[2,i]}}))}))}),u);p((function(){v.current=N.data}),[N.data]);var R=(0,r.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=t[0],r=!1!==t[1];if(C){if(r)if(l(e))h.set(C,[!0]);else{var u=v.current;h.set(C,[!1,u])}return t.length?N.mutate(e,r):N.mutate()}}),[C]),_=(0,r.useCallback)((function(t){var e;if(P&&(s(t)?e=t(z()):"number"==typeof t&&(e=t),"number"==typeof e))return h.set(P,e),A.current=e,i({}),R(function(t){for(var e=[],r=null,u=0;u<t;++u){var a=k(n(u,r))[0],o=a?h.get(a):c;if(l(o))return v.current;e.push(o),r=o}return e}(e))}),[P,z,R]);return{size:z(),setSize:_,mutate:R,get error(){return N.error},get data(){return N.data},get isValidating(){return N.isValidating}}}},function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=m(t),r=e[0],u=e[1],a=e[2],o=(a.use||[]).concat(d);return y(r,u,x(x({},a),{use:o}))})}}]);