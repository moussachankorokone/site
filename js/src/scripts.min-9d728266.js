function randomNumber(e,t){return Math.random()*(t-e)}function bubbler(){function e(){if(60>n){var e=document.createElement("svg"),i=document.createElement("circle"),a=randomNumber(1,35);t.appendChild(e),e.appendChild(i),e.setAttribute("viewBox","0 0 100 100"),e.setAttribute("class","bubble"),e.setAttribute("style","width: "+a+"px; height: "+a+"px; left: "+randomNumber(1,t.clientWidth)+"px;"),i.setAttribute("cx",50),i.setAttribute("cy",50),i.setAttribute("r",50),n++}else clearInterval(o)}var t=document.querySelectorAll(".ggv-banner")[0],n=0;e();var o=setInterval(e,150)}!function(){"use strict";function e(e){u.push(e),1==u.length&&d()}function t(){for(;u.length;)u[0](),u.shift()}function n(e){this.a=f,this.b=void 0,this.f=[];var t=this;try{e(function(e){a(t,e)},function(e){r(t,e)})}catch(n){r(t,n)}}function o(e){return new n(function(t,n){n(e)})}function i(e){return new n(function(t){t(e)})}function a(e,t){if(e.a==f){if(t==e)throw new TypeError;var n=!1;try{var o=t&&t.then;if(null!=t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){n||a(e,t),n=!0},function(t){n||r(e,t),n=!0})}catch(i){return void(n||r(e,i))}e.a=0,e.b=t,c(e)}}function r(e,t){if(e.a==f){if(t==e)throw new TypeError;e.a=1,e.b=t,c(e)}}function c(t){e(function(){if(t.a!=f)for(;t.f.length;){var e=t.f.shift(),n=e[0],o=e[1],i=e[2],e=e[3];try{0==t.a?i("function"==typeof n?n.call(void 0,t.b):t.b):1==t.a&&("function"==typeof o?i(o.call(void 0,t.b)):e(t.b))}catch(a){e(a)}}})}function s(e){return new n(function(t,n){function o(n){return function(o){r[n]=o,a+=1,a==e.length&&t(r)}}var a=0,r=[];0==e.length&&t(r);for(var c=0;c<e.length;c+=1)i(e[c]).c(o(c),n)})}function l(e){return new n(function(t,n){for(var o=0;o<e.length;o+=1)i(e[o]).c(t,n)})}var d,u=[];d=function(){setTimeout(t)};var f=2;n.prototype.g=function(e){return this.c(void 0,e)},n.prototype.c=function(e,t){var o=this;return new n(function(n,i){o.f.push([e,t,n,i]),c(o)})},window.Promise||(window.Promise=n,window.Promise.resolve=i,window.Promise.reject=o,window.Promise.race=l,window.Promise.all=s,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g)}(),function(){function e(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function t(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e()}):document.attachEvent("onreadystatechange",function n(){("interactive"==document.readyState||"complete"==document.readyState)&&(document.detachEvent("onreadystatechange",n),e())})}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function o(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function i(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t?(e.g=t,!0):!1}function a(t,n){function o(){var e=a;i(e)&&e.a.parentNode&&n(e.g)}var a=t;e(t.b,o),e(t.c,o),i(t)}function r(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}function c(){if(null===f)if(s()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);f=!!e&&603>parseInt(e[1],10)}else f=!1;return f}function s(){return null===p&&(p=!!document.fonts),p}function l(){if(null===h){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(t){}h=""!==e.style.font}return h}function d(e,t){return[e.style,e.weight,l()?e.stretch:"","100px",t].join(" ")}var u=null,f=null,h=null,p=null;r.prototype.load=function(e,i){var r=this,l=e||"BESbswy",f=0,h=i||3e3,p=(new Date).getTime();return new Promise(function(e,i){if(s()&&!c()){var m=new Promise(function(e,t){function n(){(new Date).getTime()-p>=h?t():document.fonts.load(d(r,'"'+r.family+'"'),l).then(function(t){1<=t.length?e():setTimeout(n,25)},function(){t()})}n()}),v=new Promise(function(e,t){f=setTimeout(t,h)});Promise.race([v,m]).then(function(){clearTimeout(f),e(r)},function(){i(r)})}else t(function(){function t(){var t;(t=-1!=w&&-1!=y||-1!=w&&-1!=b||-1!=y&&-1!=b)&&((t=w!=y&&w!=b&&y!=b)||(null===u&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),u=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=u&&(w==g&&y==g&&b==g||w==x&&y==x&&b==x||w==E&&y==E&&b==E)),t=!t),t&&(C.parentNode&&C.parentNode.removeChild(C),clearTimeout(f),e(r))}function c(){if((new Date).getTime()-p>=h)C.parentNode&&C.parentNode.removeChild(C),i(r);else{var e=document.hidden;(!0===e||void 0===e)&&(w=s.a.offsetWidth,y=m.a.offsetWidth,b=v.a.offsetWidth,t()),f=setTimeout(c,50)}}var s=new n(l),m=new n(l),v=new n(l),w=-1,y=-1,b=-1,g=-1,x=-1,E=-1,C=document.createElement("div");C.dir="ltr",o(s,d(r,"sans-serif")),o(m,d(r,"serif")),o(v,d(r,"monospace")),C.appendChild(s.a),C.appendChild(m.a),C.appendChild(v.a),document.body.appendChild(C),g=s.a.offsetWidth,x=m.a.offsetWidth,E=v.a.offsetWidth,c(),a(s,function(e){w=e,t()}),o(s,d(r,'"'+r.family+'",sans-serif')),a(m,function(e){y=e,t()}),o(m,d(r,'"'+r.family+'",serif')),a(v,function(e){b=e,t()}),o(v,d(r,'"'+r.family+'",monospace'))})})},"undefined"!=typeof module?module.exports=r:(window.FontFaceObserver=r,window.FontFaceObserver.prototype.load=r.prototype.load)}(),function(e){if(!(e.document.documentElement.className.indexOf("fonts-loaded")>-1)){var t=new e.FontFaceObserver("Avenir LT W01_45 Book"),n=new e.FontFaceObserver("Ciutadella W04 Lt"),o=new e.FontFaceObserver("Ciutadella W04 SmBold"),i=new e.FontFaceObserver("Ciutadella W04 Medium"),a=new e.FontFaceObserver("Ciutadella W04 Bold");e.Promise.all([t.load(),n.load(),o.load(),i.load(),a.load()]).then(function(){e.document.documentElement.className+=" ffo-loaded"},function(){e.document.documentElement.className+=" ffo-inactive"})}}(window);var z1fenvx51p7ve3h;!function(e,t){var n=e.createElement(t),o={userName:"grayghostvisuals",formHash:"z1fenvx51p7ve3h",autoResize:!0,height:"800",async:!0,host:"wufoo.com",header:"show",ssl:!1};n.src=("https:"==e.location.protocol?"https://":"http://")+"www.wufoo.com/scripts/embed/form.js",n.onload=n.onreadystatechange=function(){var e=this.readyState;if(!e||"complete"==e||"loaded"==e)try{z1fenvx51p7ve3h=new WufooForm,z1fenvx51p7ve3h.initialize(o),z1fenvx51p7ve3h.display()}catch(t){}};var i=e.getElementsByTagName(t)[0],a=i.parentNode;a.insertBefore(n,i)}(document,"script"),bubbler();