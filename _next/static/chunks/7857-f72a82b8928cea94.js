(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7857],{8273:function(e,t,n){var r,a;r=function(e,t,n){var r=function(e,t,n,r,a,o){function i(e){var t,n,r,a,o,i,u=e<0;if(e=Math.abs(e).toFixed(c.decimals),n=(t=(e+="").split("."))[0],r=t.length>1?c.options.decimal+t[1]:"",c.options.useGrouping){for(a="",o=0,i=n.length;o<i;++o)0!==o&&o%3===0&&(a=c.options.separator+a),a=n[i-o-1]+a;n=a}return c.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]}))),(u?"-":"")+c.options.prefix+n+r+c.options.suffix}function u(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t}function s(e){return"number"==typeof e&&!isNaN(e)}var c=this;if(c.version=function(){return"1.9.3"},c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:u,formattingFn:i,prefix:"",suffix:"",numerals:[]},o&&"object"==typeof o)for(var l in c.options)o.hasOwnProperty(l)&&null!==o[l]&&(c.options[l]=o[l]);""===c.options.separator?c.options.useGrouping=!1:c.options.separator=""+c.options.separator;for(var f=0,p=["webkit","moz","ms","o"],d=0;d<p.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[p[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[d]+"CancelAnimationFrame"]||window[p[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-f)),a=window.setTimeout((function(){e(n+r)}),r);return f=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),c.initialize=function(){return!!c.initialized||(c.error="",c.d="string"==typeof e?document.getElementById(e):e,c.d?(c.startVal=Number(t),c.endVal=Number(n),s(c.startVal)&&s(c.endVal)?(c.decimals=Math.max(0,r||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(a)||2e3,c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.initialized=!0,!0):(c.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(c.error="[CountUp] target is null or undefined",!1))},c.printValue=function(e){var t=c.options.formattingFn(e);"INPUT"===c.d.tagName?this.d.value=t:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=t:this.d.innerHTML=t},c.count=function(e){c.startTime||(c.startTime=e),c.timestamp=e;var t=e-c.startTime;c.remaining=c.duration-t,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.options.easingFn(t,0,c.startVal-c.endVal,c.duration):c.frameVal=c.options.easingFn(t,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(t/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(t/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),t<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(e){c.initialize()&&(c.callback=e,c.rAF=requestAnimationFrame(c.count))},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.initialized=!1,c.initialize()&&(cancelAnimationFrame(c.rAF),c.printValue(c.startVal))},c.update=function(e){if(c.initialize()){if(!s(e=Number(e)))return void(c.error="[CountUp] update() - new endVal is not a number: "+e);c.error="",e!==c.frameVal&&(cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=e,c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count))}},c.initialize()&&c.printValue(c.startVal)};return r},void 0===(a="function"===typeof r?r.call(t,n,t,e):r)||(e.exports=a)},92703:function(e,t,n){"use strict";var r=n(50414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},17857:function(e,t,n){"use strict";var r=n(45697),a=n(67294),o=n(42473),i=n(8273);function u(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=u(r),c=u(a),l=u(o),f=u(i);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?g(e):t}function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w(this,n)}}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(s){u=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,o=t.easingFn,i=t.end,u=t.formattingFn,s=t.prefix,c=t.separator,l=t.start,p=t.suffix,d=t.useEasing;return new f.default(e,l,i,r,a,{decimal:n,easingFn:o,formattingFn:u,separator:c,prefix:s,suffix:p,useEasing:d,useGrouping:!!c})},T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(o,e);var t,n,r,a=V(o);function o(){var e;m(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(g(e=a.call.apply(a,[this].concat(n))),"checkProps",(function(t){var n=e.props,r=n.start,a=n.suffix,o=n.prefix,i=n.redraw,u=n.duration,s=n.separator,c=n.decimals,l=n.decimal,f=n.className;return u!==t.duration||r!==t.start||a!==t.suffix||o!==t.prefix||s!==t.separator||c!==t.decimals||l!==t.decimal||f!==t.className||i})),h(g(e),"createInstance",(function(){return"function"===typeof e.props.children&&l.default(e.containerRef.current&&(e.containerRef.current instanceof HTMLElement||e.containerRef.current instanceof SVGTextElement||e.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),F(e.containerRef.current,e.props)})),h(g(e),"pauseResume",(function(){var t=g(e),n=t.reset,r=t.restart,a=t.update,o=e.props.onPauseResume;e.instance.pauseResume(),o({reset:n,start:r,update:a})})),h(g(e),"reset",(function(){var t=g(e),n=t.pauseResume,r=t.restart,a=t.update,o=e.props.onReset;e.instance.reset(),o({pauseResume:n,start:r,update:a})})),h(g(e),"restart",(function(){e.reset(),e.start()})),h(g(e),"start",(function(){var t=g(e),n=t.pauseResume,r=t.reset,a=t.restart,o=t.update,i=e.props,u=i.delay,s=i.onEnd,c=i.onStart,l=function(){return e.instance.start((function(){return s({pauseResume:n,reset:r,start:a,update:o})}))};u>0?e.timeoutId=setTimeout(l,1e3*u):l(),c({pauseResume:n,reset:r,update:o})})),h(g(e),"update",(function(t){var n=g(e),r=n.pauseResume,a=n.reset,o=n.restart,i=e.props.onUpdate;e.instance.update(t),i({pauseResume:r,reset:a,start:o})})),h(g(e),"containerRef",c.default.createRef()),e}return t=o,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.end;return this.checkProps(e)||t!==e.end}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.preserveValue;this.checkProps(e)&&(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(r||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.containerRef,o=this.pauseResume,i=this.reset,u=this.restart,s=this.update;return"function"===typeof t?t({countUpRef:a,pauseResume:o,reset:i,start:u,update:s}):c.default.createElement("span",{className:n,ref:a,style:r})}}])&&y(t.prototype,n),r&&y(t,r),o}(a.Component);h(T,"propTypes",{decimal:s.default.string,decimals:s.default.number,delay:s.default.number,easingFn:s.default.func,end:s.default.number.isRequired,formattingFn:s.default.func,onEnd:s.default.func,onStart:s.default.func,prefix:s.default.string,redraw:s.default.bool,separator:s.default.string,start:s.default.number,startOnMount:s.default.bool,suffix:s.default.string,style:s.default.object,useEasing:s.default.bool,preserveValue:s.default.bool}),h(T,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var P={innerHTML:null};t.ZP=T,t.$i=function(e){var t=d(d({},T.defaultProps),e),n=t.start,r=t.formattingFn,o=R(a.useState("function"===typeof r?r(n):n),2),i=o[0],u=o[1],s=a.useRef(null),c=a.useRef(null),l=function(){var e=s.current;if(null!==e)return e;var n=function(){var e=F(P,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);u(e)},e}();return s.current=n,n},f=function(){var e=t.onReset;l().reset(),e({pauseResume:m,start:p,update:y})},p=function e(){var n=t.onStart,r=t.onEnd;l().reset(),l().start((function(){r({pauseResume:m,reset:f,start:e,update:y})})),n({pauseResume:m,reset:f,update:y})},m=function(){var e=t.onPauseResume;l().pauseResume(),e({reset:f,start:p,update:y})},y=function(e){var n=t.onUpdate;l().update(e),n({pauseResume:m,reset:f,start:p})};return a.useEffect((function(){var e=t.delay,n=t.onStart,r=t.onEnd;return t.startOnMount&&(c.current=setTimeout((function(){n({pauseResume:m,reset:f,update:y}),l().start((function(){clearTimeout(c.current),r({pauseResume:m,reset:f,start:p,update:y})}))}),1e3*e)),function(){clearTimeout(c.current),f()}}),[]),{countUp:i,start:p,pauseResume:m,reset:f,update:y}}},42473:function(e){"use strict";var t=function(){};e.exports=t}}]);