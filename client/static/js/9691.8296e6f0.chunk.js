/*! For license information please see 9691.8296e6f0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkjuleb_todo=self.webpackChunkjuleb_todo||[]).push([[9691],{9691:function(t,e,n){n.r(e),n.d(e,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return y},keyboardDidClose:function(){return g},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return f},setKeyboardClose:function(){return h},setKeyboardOpen:function(){return d},startKeyboardAssist:function(){return s},trackViewportChanges:function(){return v}});var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},a=!1,f=function(){r={},u={},a=!1},s=function(t){c(t),t.visualViewport&&(u=y(t.visualViewport),t.visualViewport.onresize=function(){v(t),p()||b(t)?d(t):g(t)&&h(t)})},c=function(t){t.addEventListener("keyboardDidShow",(function(e){return d(t,e)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},d=function(t,e){w(t,e),a=!0},h=function(t){l(t),a=!1},p=function(){var t=(r.height-u.height)*u.scale;return!a&&r.width===u.width&&t>150},b=function(t){return a&&!g(t)},g=function(t){return a&&u.height===t.innerHeight},w=function(t,e){var n=e?e.keyboardHeight:t.innerHeight-u.height,o=new CustomEvent(i,{detail:{keyboardHeight:n}});t.dispatchEvent(o)},l=function(t){var e=new CustomEvent(o);t.dispatchEvent(e)},v=function(t){r=Object.assign({},u),u=y(t.visualViewport)},y=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);
//# sourceMappingURL=9691.8296e6f0.chunk.js.map