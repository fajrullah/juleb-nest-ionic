"use strict";(self.webpackChunkjuleb_todo=self.webpackChunkjuleb_todo||[]).push([[471],{471:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return o}});var r=n(9069),u=n(3127),i=n(236),o=(n(1045),function(t,e,n,o,a){var c=t.ownerDocument.defaultView,f=(0,u.i)(t),s=function(t){return f?-t.deltaX:t.deltaX},d=function(t){return f?-t.velocityX:t.velocityX};return(0,i.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return f?e>=c.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=s(t)/c.innerWidth;o(e)},onEnd:function(t){var e=s(t),n=c.innerWidth,u=e/n,i=d(t),o=i>=0&&(i>.2||e>n/2),f=(o?1-u:u)*n,l=0;if(f>5){var h=f/Math.abs(i);l=Math.min(h,540)}a(o,u<=0?.01:(0,r.k)(0,u,.9999),l)}})})}}]);
//# sourceMappingURL=471.7adcfdae.chunk.js.map