module.exports=function(t){var n={};function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(i,r,function(n){return t[n]}.bind(null,r));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n,e){t.exports=e(3)()},function(t,n){t.exports=require("react")},function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return p}));var i=e(1),r=e.n(i),o=e(0),a=e.n(o);function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}class p extends i.PureComponent{constructor(t){super(t),s(this,"state",{show:!0,animationProperties:{}}),s(this,"allocateAnimationClasses",(t,n="ADD")=>{const e=this.wrapperRef.current;switch(n){case"ADD":t.forEach(t=>{e.classList.add(t)});break;default:t.forEach(t=>{e.classList.remove(t)})}}),s(this,"handleEntryAnimationEnd",()=>{this.wrapperRef.current.removeEventListener("animationend",this.handleEntryAnimationEnd),this.props.onEntryAnimationEnd&&this.props.onEntryAnimationEnd()}),s(this,"handleExitAnimationEnd",()=>{this.wrapperRef.current.removeEventListener("animationend",this.handleExitAnimationEnd),this.setState({show:!1}),this.props.onExitAnimationEnd&&this.props.onExitAnimationEnd()}),this.wrapperRef=r.a.createRef()}componentDidMount(){this.setState({animationProperties:{animationDuration:this.props.entryAnimDuration,animationDelay:this.props.entryAnimDelay}})}componentDidUpdate(t,n){const e=this.wrapperRef.current,{show:i,entryAnimation:r,exitAnimation:o,entryAnimDelay:a,entryAnimDuration:s,exitAnimDelay:p,exitAnimDuration:u}=this.props;t.show&&!i&&e&&(this.allocateAnimationClasses(r,"REMOVE"),this.allocateAnimationClasses(o,"ADD"),this.setState({animationProperties:{animationDuration:u,animationDelay:p}}),e.addEventListener("animationend",this.handleExitAnimationEnd)),!t.show&&i&&this.setState({show:!0,animationProperties:{animationDuration:s,animationDelay:a}}),!n.show&&this.state.show&&e.addEventListener("animationend",this.handleEntryAnimationEnd)}render(){return this.state.show&&r.a.createElement("div",{className:`animated ${this.props.entryAnimation.join(" ")}`,ref:this.wrapperRef,style:this.state.animationProperties},this.props.children)}}function u(t,n,e){if(void 0!==t[n]&&!/^\-?(([0-9]*[.])?\d)+(s|ms){1}$/.test(t[n])){let t;return t="entryAnimDelay"===n||"exitAnimDelay"===n?"check css `animation-delay` property":"check css `animation-duration` property",new Error("Invalid prop `"+n+"` supplied to `"+e+"`. "+t+". positive examples - 1s, 2s, -2s, 5ms etc.")}}p.defaultProps={entryAnimation:["zoomIn"],exitAnimation:["zoomOut"]},p.propTypes={show:a.a.bool,entryAnimation:a.a.array,exitAnimation:a.a.array,onExitAnimationEnd:a.a.func,onEntryAnimationEnd:a.a.func,entryAnimDelay:u,entryAnimDuration:u,exitAnimDelay:u,exitAnimDuration:u,children:a.a.element.isRequired}},function(t,n,e){"use strict";var i=e(4);function r(){}function o(){}o.resetWarningCache=r,t.exports=function(){function t(t,n,e,r,o,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return t}t.isRequired=t;var e={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:r};return e.PropTypes=e,e}},function(t,n,e){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);