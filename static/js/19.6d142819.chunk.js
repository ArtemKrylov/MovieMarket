(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[19],{9126:function(e,t,a){"use strict";a.d(t,{F0C:function(){return n},jnn:function(){return i}});var r=a(9983);function n(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"}}]})(e)}function i(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}}]})(e)}},9983:function(e,t,a){"use strict";a.d(t,{w_:function(){return c}});var r=a(2791),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(n),o=function(){return o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return r.createElement(u,o({attr:o({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var a,n=e.attr,i=e.size,l=e.title,c=s(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},6048:function(e,t,a){var r;e.exports=(r=a(2791),function(){var e={703:function(e,t,a){"use strict";var r=a(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return a.PropTypes=a,a}},697:function(e,t,a){e.exports=a(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:function(e){"use strict";e.exports=r}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){"use strict";a.r(n),a.d(n,{default:function(){return k}});var e=a(98),t=a.n(e),r=a(697),i=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}var s=function(e){var a=e.pageClassName,r=e.pageLinkClassName,n=e.page,i=e.selected,s=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,g=e.extraAriaContext,d=e.pageLabelBuilder,f=e.rel,v=e.ariaLabel||"Page "+n+(g?" "+g:""),b=null;return i&&(b="page",v=e.ariaLabel||"Page "+n+" is your current page",a=void 0!==a?a+" "+s:s,void 0!==r?void 0!==l&&(r=r+" "+l):r=l),t().createElement("li",{className:a},t().createElement("a",o({rel:f,role:p?void 0:"button",className:r,href:p,tabIndex:i?"-1":"0","aria-label":v,"aria-current":b,onKeyPress:u},c(u)),d(n)))};s.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var l=s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}var u=function(e){var a=e.breakLabel,r=e.breakClassName,n=e.breakLinkClassName,i=e.breakHandler,o=e.getEventListener,s=r||"break";return t().createElement("li",{className:s},t().createElement("a",c({className:n,role:"button",tabIndex:"0",onKeyPress:i},o(i)),a))};u.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var p=u;function g(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},f.apply(this,arguments)}function v(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function h(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(s,e);var a,r,n,i,o=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(i){var a=y(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return h(this,e)});function s(e){var a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),C(m(a=o.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;a.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),C(m(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;a.handleClick(e,null,t<r-1?t+1:void 0,{isNext:!0})})),C(m(a),"handlePageSelected",(function(e,t){if(a.state.selected===e)return a.callActiveCallback(e),void a.handleClick(t,null,void 0,{isActive:!0});a.handleClick(t,null,e)})),C(m(a),"handlePageChange",(function(e){a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),C(m(a),"getEventListener",(function(e){return C({},a.props.eventListener,e)})),C(m(a),"handleClick",(function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.isPrevious,o=void 0!==i&&i,s=n.isNext,l=void 0!==s&&s,c=n.isBreak,u=void 0!==c&&c,p=n.isActive,g=void 0!==p&&p;e.preventDefault?e.preventDefault():e.returnValue=!1;var d=a.state.selected,f=a.props.onClick,v=r;if(f){var b=f({index:t,selected:d,nextSelectedPage:r,event:e,isPrevious:o,isNext:l,isBreak:u,isActive:g});if(!1===b)return;Number.isInteger(b)&&(v=b)}void 0!==v&&a.handlePageChange(v)})),C(m(a),"handleBreakClick",(function(e,t){var r=a.state.selected;a.handleClick(t,e,r<e?a.getForwardJump():a.getBackwardJump(),{isBreak:!0})})),C(m(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),C(m(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})})),C(m(a),"getElementPageRel",(function(e){var t=a.state.selected,r=a.props,n=r.nextPageRel,i=r.prevPageRel,o=r.selectedPageRel;return t-1===e?i:t===e?o:t+1===e?n:void 0})),C(m(a),"pagination",(function(){var e=[],r=a.props,n=r.pageRangeDisplayed,i=r.pageCount,o=r.marginPagesDisplayed,s=r.breakLabel,l=r.breakClassName,c=r.breakLinkClassName,u=a.state.selected;if(i<=n)for(var g=0;g<i;g++)e.push(a.getPageElement(g));else{var d=n/2,f=n-d;u>i-n/2?d=n-(f=i-u):u<n/2&&(f=n-(d=u));var v,b,h=function(e){return a.getPageElement(e)},m=[];for(v=0;v<i;v++){var y=v+1;y<=o||y>i-o||v>=u-d&&v<=u+(0===u&&n>1?f-1:f)?m.push({type:"page",index:v,display:h(v)}):s&&m.length>0&&m[m.length-1].display!==b&&(n>0||o>0)&&(b=t().createElement(p,{key:v,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,v),getEventListener:a.getEventListener}),m.push({type:"break",index:v,display:b}))}m.forEach((function(t,a){var r=t;"break"===t.type&&m[a-1]&&"page"===m[a-1].type&&m[a+1]&&"page"===m[a+1].type&&m[a+1].index-m[a-1].index<=2&&(r={type:"page",index:t.index,display:h(t.index)}),e.push(r.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:r},a}return a=s,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,i=e.forcePage;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==t&&t>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(n-1,").")),void 0!==i&&i>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount,n=t.hrefAllControls;if(a)return n||e>=0&&e<r?a(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var a=this.state.selected,r=this.props,n=r.pageClassName,i=r.pageLinkClassName,o=r.activeClassName,s=r.activeLinkClassName,c=r.extraAriaContext,u=r.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:i,activeClassName:o,activeLinkClassName:s,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,r=a.disabledClassName,n=a.disabledLinkClassName,i=a.pageCount,o=a.className,s=a.containerClassName,l=a.previousLabel,c=a.previousClassName,u=a.previousLinkClassName,p=a.previousAriaLabel,d=a.prevRel,v=a.nextLabel,b=a.nextClassName,h=a.nextLinkClassName,m=a.nextAriaLabel,y=a.nextRel,C=this.state.selected,P=0===C,k=C===i-1,x="".concat(g(c)).concat(P?" ".concat(g(r)):""),N="".concat(g(b)).concat(k?" ".concat(g(r)):""),L="".concat(g(u)).concat(P?" ".concat(g(n)):""),O="".concat(g(h)).concat(k?" ".concat(g(n)):""),w=P?"true":"false",E=k?"true":"false";return t().createElement("ul",{className:o||s,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:x},t().createElement("a",f({className:L,href:this.getElementHref(C-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":w,"aria-label":p,rel:d},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:N},t().createElement("a",f({className:O,href:this.getElementHref(C+1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":E,"aria-label":m,rel:y},this.getEventListener(this.handleNextPage)),v)))}}])&&v(a.prototype,r),Object.defineProperty(a,"prototype",{writable:!1}),s}(e.Component);C(P,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),C(P,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});var k=P}(),n}())}}]);
//# sourceMappingURL=19.6d142819.chunk.js.map