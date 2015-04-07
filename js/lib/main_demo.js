!
function(a, b) {
    function c(a) {
        return function(b) {
            return Object.prototype.toString.call(b) === "[object " + a + "]"
        }
    }
    function d() {
        return p++
    }
    function e(a, b) {
        var c;
        if (c = a.charAt(0), A.test(a)) c = a;
        else if ("." === c) for (c = (b ? b.match(v)[0] : k.cwd) + a, c = c.replace(w, "/"); c.match(x);) c = c.replace(x, "/");
        else c = "/" === c ? (c = k.cwd.match(B)) ? c[0] + a.substring(1) : a: k.base + a;
        return c
    }
    function f(a, b) {
        if (!a) return "";
        var c, d = a,
        f = k.alias,
        d = a = f && m(f[d]) ? f[d] : d,
        f = k.paths;
        f && (c = d.match(y)) && m(f[c[1]]) && (d = f[c[1]] + c[2]),
        c = d;
        var g = k.vars;
        g && -1 < c.indexOf("{") && (c = c.replace(z,
        function(a, b) {
            return m(g[b]) ? g[b] : a
        })),
        d = c.length - 1,
        f = c.charAt(d),
        a = "#" === f ? c.substring(0, d) : ".js" === c.substring(d - 2) || 0 < c.indexOf("?") || ".css" === c.substring(d - 3) || "/" === f ? c: c + ".js",
        c = e(a, b);
        var d = k.map,
        h = c;
        if (d) for (var f = 0,
        i = d.length; i > f && (h = d[f], h = o(h) ? h(c) || c: c.replace(h[0], h[1]), !(h !== c)); f++);
        return h
    }
    function g(a, b) {
        var c, d = a.sheet;
        if (K) d && (c = !0);
        else if (d) try {
            d.cssRules && (c = !0)
        } catch(e) {
            "NS_ERROR_DOM_SECURITY_ERR" === e.name && (c = !0)
        }
        setTimeout(function() {
            c ? b() : g(a, b)
        },
        20)
    }
    function h() {
        if (r) return r;
        if (s && "interactive" === s.readyState) return s;
        for (var a = G.getElementsByTagName("script"), b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ("interactive" === c.readyState) return s = c
        }
    }
    function i(a, b) {
        this.uri = a,
        this.dependencies = b || [],
        this.exports = null,
        this.status = 0,
        this._waitings = {},
        this._remain = 0
    }
    if (!a.seajs) {
        var j = a.seajs = {
            version: "2.1.1"
        },
        k = j.data = {},
        l = c("Object"),
        m = c("String"),
        n = Array.isArray || c("Array"),
        o = c("Function"),
        p = 0,
        q = k.events = {};
        j.on = function(a, b) {
            return (q[a] || (q[a] = [])).push(b),
            j
        },
        j.off = function(a, b) {
            if (!a && !b) return q = k.events = {},
            j;
            var c = q[a];
            if (c) if (b) for (var d = c.length - 1; d >= 0; d--) c[d] === b && c.splice(d, 1);
            else delete q[a];
            return j
        };
        var r, s, t, u = j.emit = function(a, b) {
            var c, d = q[a];
            if (d) for (d = d.slice(); c = d.shift();) c(b);
            return j
        },
        v = /[^?#]*\//,
        w = /\/\.\//g,
        x = /\/[^/] + \ / \.\.\ //,y=/^([^/:]+)(\/.+)$/,z=/{([^{]+)}/g,A=/^\/\/.|:\//,B=/^.*?\/\/.*?\//,C=document,D=location,E=D.href.match(v)[0],F=C.getElementsByTagName("script"),F=C.getElementById("seajsnode")||F[F.length-1],F=((F.hasAttribute?F.src:F.getAttribute("src",4))||E).match(v)[0],G=C.getElementsByTagName("head")[0]||C.documentElement,H=G.getElementsByTagName("base")[0],I=/\.css(?:\?|$)/i,J=/^(?:loaded|complete|undefined)$/,K=536>1*navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/,"$1"),L=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,M=/\\\\/g,N=j.cache={},O={},P={},Q={},R=i.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};i.prototype.resolve=function(){for(var a=this.dependencies,b=[],c=0,d=a.length;d>c;c++)b[c]=i.resolve(a[c],this.uri);return b},i.prototype.load=function(){if(!(this.status>=R.LOADING)){this.status=R.LOADING;var a=this.resolve();u("load",a);for(var b,c=this._remain=a.length,d=0;c>d;d++)b=i.get(a[d]),b.status<R.LOADED?b._waitings[this.uri]=(b._waitings[this.uri]||0)+1:this._remain--;if(0===this._remain)this.onload();else{for(var e={},d=0;c>d;d++)b=N[a[d]],b.status<R.FETCHING?b.fetch(e):b.status===R.SAVED&&b.load();for(var f in e)e.hasOwnProperty(f)&&e[f]()}}},i.prototype.onload=function(){this.status=R.LOADED,this.callback&&this.callback();var a,b,c=this._waitings;for(a in c)c.hasOwnProperty(a)&&(b=N[a],b._remain-=c[a],0===b._remain)&&b.onload();delete this._waitings,delete this._remain},i.prototype.fetch=function(a){function b(){var a=e.requestUri,b=e.onRequest,c=e.charset,d=I.test(a),f=C.createElement(d?"link":"script");c&&(c=o(c)?c(a):c)&&(f.charset=c);var h=f;!d||!K&&"onload"in h?h.onload=h.onerror=h.onreadystatechange=function(){J.test(h.readyState)&&(h.onload=h.onerror=h.onreadystatechange=null,!d&&!k.debug&&G.removeChild(h),h=null,b())}:setTimeout(function(){g(h,b)},1),d?(f.rel="stylesheet",f.href=a):(f.async=!0,f.src=a),r=f,H?G.insertBefore(f,H):G.appendChild(f),r=null}function c(){delete O[f],P[f]=!0,t&&(i.save(d,t),t=null);var a,b=Q[f];for(delete Q[f];a=b.shift();)a.load()}var d=this.uri;this.status=R.FETCHING;var e={uri:d};u("fetch",e);var f=e.requestUri||d;!f||P[f]?this.load():O[f]?Q[f].push(this):(O[f]=!0,Q[f]=[this],u("request",e={uri:d,requestUri:f,onRequest:c,charset:k.charset}),e.requested||(a?a[e.requestUri]=b:b()))},i.prototype.exec=function(){function a(b){return i.get(a.resolve(b)).exec()}if(this.status>=R.EXECUTING)return this.exports;this.status=R.EXECUTING;var c=this.uri;a.resolve=function(a){return i.resolve(a,c)},a.async=function(b,d){return i.use(b,d,c+"_async_"+p++),a};var d=this.factory,d=o(d)?d(a,this.exports={},this):d;return d===b&&(d=this.exports),null===d&&!I.test(c)&&u("error",this),delete this.factory,this.exports=d,this.status=R.EXECUTED,u("exec",this),d},i.resolve=function(a,b){var c={id:a,refUri:b};return u("resolve",c),c.uri||f(c.id,b)},i.define=function(a,c,d){var e=arguments.length;if(1===e?(d=a,a=b):2===e&&(d=c,n(a)?(c=a,a=b):c=b),!n(c)&&o(d)){var f=[];d.toString().replace(M,"").replace(L,function(a,b,c){c&&f.push(c)}),c=f}if(e={id:a,uri:i.resolve(a),deps:c,factory:d},!e.uri&&C.attachEvent){var g=h();g&&(e.uri=g.src)}u("define",e),e.uri?i.save(e.uri,e):t=e},i.save=function(a,b){var c=i.get(a);c.status<R.SAVED&&(c.id=b.id||a,c.dependencies=b.deps||[],c.factory=b.factory,c.status=R.SAVED)},i.get=function(a,b){return N[a]||(N[a]=new i(a,b))},i.use=function(b,c,d){var e=i.get(d,n(b)?b:[b]);e.callback=function(){for(var b=[],d=e.resolve(),f=0,g=d.length;g>f;f++)b[f]=N[d[f]].exec();c&&c.apply(a,b),delete e.callback},e.load()},i.preload=function(a){var b=k.preload,c=b.length;c?i.use(b,function(){b.splice(0,c),i.preload(a)},k.cwd+"_preload_"+p++):a()},j.use=function(a,b){return i.preload(function(){i.use(a,b,k.cwd+"_use_"+p++)}),j},i.define.cmd={},a.define=i.define,j.Module=i,k.fetchedList=P,k.cid=d,j.resolve=f,j.require=function(a){return(N[i.resolve(a)]||{}).exports},k.base=(F.match(/^(.+?\/)(\?\?)?(seajs\/)+/)||["",F])[1],k.dir=F,k.cwd=E,k.charset="utf-8";var E=k,S=[],D=D.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2"),D=D+(" "+C.cookie);D.replace(/(seajs-\w+)=1/g,function(a,b){S.push(b)}),E.preload=S,j.config=function(a){for(var b in a){var c=a[b],d=k[b];if(d&&l(d))for(var f in c)d[f]=c[f];else n(d)?c=d.concat(c):"base"===b&&("/"===c.slice(-1)||(c+="/"),c=e(c)),k[b]=c}return u("config",a),j}}}(this),seajs.config({paths:{mod:"http://pub.idqqimg.com/qqmpmobile/piao/js/html5/m/wallet/mod"},map:[[".js",".js?ver=20140730"]],timeout:8e3,debug:0}),seajs.use("mod/app_v3",function(a){a.init()}),define("iScroll",[],function(){function a(a){return""===e?a:(a=a.charAt(0).toUpperCase()+a.substr(1),e+a)}var b=Math,c=document,d=c.createElement("div").style,e=function(){for(var a,b=["t","webkitT","MozT","msT","OT"],c=0,e=b.length;e>c;c++)if(a=b[c]+"ransform",a in d)return b[c].substr(0,b[c].length-1);return!1}(),f=e?"-"+e.toLowerCase()+"-":"",g=a("transform"),h=a("transitionProperty"),i=a("transitionDuration"),j=a("transformOrigin"),k=a("transitionTimingFunction"),l=a("transitionDelay"),m=/android/gi.test(navigator.appVersion),n=/iphone|ipad/gi.test(navigator.appVersion),o=/hp-tablet/gi.test(navigator.appVersion),p=a("perspective")in d,q="ontouchstart"in window&&!o,r=!!e,s=a("transition")in d,t="onorientationchange"in window?"orientationchange":"resize",u=q?"touchstart":"mousedown",v=q?"touchmove":"mousemove",w=q?"touchend":"mouseup",x=q?"touchcancel":"mouseup",y="Moz"==e?"DOMMouseScroll":"mousewheel",z=function(){return!1===e?!1:{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"oTransitionEnd",ms:"MSTransitionEnd"}[e]}(),A=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return setTimeout(a,1)}}(),B=function(){return window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),C=p?" translateZ(0)":"",D=function(a,b){var d,e=this;e.wrapper="object"==typeof a?a:c.getElementById(a),e.wrapper.style.overflow="hidden",e.scroller=e.wrapper.children[0],e.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:m,hideScrollbar:n,fadeScrollbar:n&&p,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(a){a.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null,onPos:null};for(d in b)e.options[d]=b[d];e.x=e.options.x,e.y=e.options.y,e.options.useTransform=r&&e.options.useTransform,e.options.hScrollbar=e.options.hScroll&&e.options.hScrollbar,e.options.vScrollbar=e.options.vScroll&&e.options.vScrollbar,e.options.zoom=e.options.useTransform&&e.options.zoom,e.options.useTransition=s&&e.options.useTransition,e.options.zoom&&m&&(C=""),e.scroller.style[h]=e.options.useTransform?f+"transform":"top left",e.scroller.style[i]="0",e.scroller.style[j]="0 0",e.options.useTransition&&(e.scroller.style[k]="cubic-bezier(0.33,0.66,0.66,1)"),e.options.useTransform?e.scroller.style[g]="translate("+e.x+"px,"+e.y+"px)"+C:e.scroller.style.cssText+=";position:absolute;top:"+e.y+"px;left:"+e.x+"px",e.options.useTransition&&(e.options.fixedScrollbar=!0),e.refresh(),e._bind(t,window),e._bind(u),q||(e._bind("mouseout",e.wrapper),"none"!=e.options.wheelAction&&e._bind(y)),e.options.checkDOMChanges&&(e.checkDOMTime=setInterval(function(){e._checkDOMChanges()},500))};return D.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(a){switch(a.type){case u:if(!q&&0!==a.button)break;this._start(a);break;case v:this._move(a);break;case w:case x:this._end(a);break;case t:this._resize();break;case y:this._wheel(a);break;case"mouseout":this._mouseout(a);break;case z:this._transitionEnd(a)}},_checkDOMChanges:function(){!this.moved&&!this.zoomed&&!(this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale)&&this.refresh()},_scrollbar:function(a){var d;this[a+"Scrollbar"]?(this[a+"ScrollbarWrapper"]||(d=c.createElement("div"),this.options.scrollbarClass?d.className=this.options.scrollbarClass+a.toUpperCase():d.style.cssText="position:absolute;z-index:100;"+("h"==a?"height:7px;bottom:1px;left:2px;right:"+(this.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(this.hScrollbar?"7":"2")+"px;top:2px;right:1px"),d.style.cssText+=";pointer-events:none;"+f+"transition-property:opacity;"+f+"transition-duration:"+(this.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.hideScrollbar?"0":"1"),this.wrapper.appendChild(d),this[a+"ScrollbarWrapper"]=d,d=c.createElement("div"),this.options.scrollbarClass||(d.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+f+"background-clip:padding-box;"+f+"box-sizing:border-box;"+("h"==a?"height:100%":"width:100%")+";"+f+"border-radius:3px;border-radius:3px"),d.style.cssText+=";pointer-events:none;"+f+"transition-property:"+f+"transform;"+f+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+f+"transition-duration:0;"+f+"transform: translate(0,0)"+C,this.options.useTransition&&(d.style.cssText+=";"+f+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[a+"ScrollbarWrapper"].appendChild(d),this[a+"ScrollbarIndicator"]=d),"h"==a?(this.hScrollbarSize=this.hScrollbarWrapper.clientWidth,this.hScrollbarIndicatorSize=b.max(b.round(this.hScrollbarSize*this.hScrollbarSize/this.scrollerW),8),this.hScrollbarIndicator.style.width=this.hScrollbarIndicatorSize+"px",this.hScrollbarMaxScroll=this.hScrollbarSize-this.hScrollbarIndicatorSize,this.hScrollbarProp=this.hScrollbarMaxScroll/this.maxScrollX):(this.vScrollbarSize=this.vScrollbarWrapper.clientHeight,this.vScrollbarIndicatorSize=b.max(b.round(this.vScrollbarSize*this.vScrollbarSize/this.scrollerH),8),this.vScrollbarIndicator.style.height=this.vScrollbarIndicatorSize+"px",this.vScrollbarMaxScroll=this.vScrollbarSize-this.vScrollbarIndicatorSize,this.vScrollbarProp=this.vScrollbarMaxScroll/this.maxScrollY),this._scrollbarPos(a,!0)):this[a+"ScrollbarWrapper"]&&(r&&(this[a+"ScrollbarIndicator"].style[g]=""),this[a+"ScrollbarWrapper"].parentNode.removeChild(this[a+"ScrollbarWrapper"]),this[a+"ScrollbarWrapper"]=null,this[a+"ScrollbarIndicator"]=null)},_resize:function(){var a=this;setTimeout(function(){a.refresh()},m?200:0)},_pos:function(a,c){this.zoomed||(a=this.hScroll?a:0,c=this.vScroll?c:0,this.options.useTransform?this.scroller.style[g]="translate("+a+"px,"+c+"px) scale("+this.scale+")"+C:(a=b.round(a),c=b.round(c),this.scroller.style.left=a+"px",this.scroller.style.top=c+"px"),this.options.onPos&&this.options.onPos.call(this,a,c,this.scale),this.x=a,this.y=c,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(a,c){var d="h"==a?this.x:this.y;this[a+"Scrollbar"]&&(d*=this[a+"ScrollbarProp"],0>d?(this.options.fixedScrollbar||(d=this[a+"ScrollbarIndicatorSize"]+b.round(3*d),8>d&&(d=8),this[a+"ScrollbarIndicator"].style["h"==a?"width":"height"]=d+"px"),d=0):d>this[a+"ScrollbarMaxScroll"]&&(this.options.fixedScrollbar?d=this[a+"ScrollbarMaxScroll"]:(d=this[a+"ScrollbarIndicatorSize"]-b.round(3*(d-this[a+"ScrollbarMaxScroll"])),8>d&&(d=8),this[a+"ScrollbarIndicator"].style["h"==a?"width":"height"]=d+"px",d=this[a+"ScrollbarMaxScroll"]+(this[a+"ScrollbarIndicatorSize"]-d))),this[a+"ScrollbarWrapper"].style[l]="0",this[a+"ScrollbarWrapper"].style.opacity=c&&this.options.hideScrollbar?"0":"1",this[a+"ScrollbarIndicator"].style[g]="translate("+("h"==a?d+"px,0)":"0,"+d+"px)")+C)},_start:function(a){var c,d,e=q?a.touches[0]:a;this.enabled&&(this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,a),(this.options.useTransition||this.options.zoom)&&this._transitionTime(0),this.zoomed=this.animating=this.moved=!1,this.dirY=this.dirX=this.absDistY=this.absDistX=this.distY=this.distX=0,this.options.zoom&&q&&1<a.touches.length&&(d=b.abs(a.touches[0].pageX-a.touches[1].pageX),c=b.abs(a.touches[0].pageY-a.touches[1].pageY),this.touchesDistStart=b.sqrt(d*d+c*c),this.originX=b.abs(a.touches[0].pageX+a.touches[1].pageX-2*this.wrapperOffsetLeft)/2-this.x,this.originY=b.abs(a.touches[0].pageY+a.touches[1].pageY-2*this.wrapperOffsetTop)/2-this.y,this.options.onZoomStart&&this.options.onZoomStart.call(this,a)),this.options.momentum&&(this.options.useTransform?(c=getComputedStyle(this.scroller,null)[g].replace(/[^0-9\-.,]/g,"").split(","),d=1*c[4],c=1*c[5]):(d=1*getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),c=1*getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),d!=this.x||c!=this.y)&&(this.options.useTransition?this._unbind(z):B(this.aniTime),this.steps=[],this._pos(d,c)),this.absStartX=this.x,this.absStartY=this.y,this.startX=this.x,this.startY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this.startTime=a.timeStamp||Date.now(),this.options.onScrollStart&&this.options.onScrollStart.call(this,a),this._bind(v),this._bind(w),this._bind(x))},_move:function(a){var c=q?a.touches[0]:a,d=c.pageX-this.pointX,e=c.pageY-this.pointY,f=this.x+d,h=this.y+e,i=a.timeStamp||Date.now();this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,a),this.options.zoom&&q&&1<a.touches.length?(f=b.abs(a.touches[0].pageX-a.touches[1].pageX),h=b.abs(a.touches[0].pageY-a.touches[1].pageY),this.touchesDist=b.sqrt(f*f+h*h),this.zoomed=!0,c=1/this.touchesDistStart*this.touchesDist*this.scale,c<this.options.zoomMin?c=.5*this.options.zoomMin*Math.pow(2,c/this.options.zoomMin):c>this.options.zoomMax&&(c=2*this.options.zoomMax*Math.pow(.5,this.options.zoomMax/c)),this.lastScale=c/this.scale,f=this.originX-this.originX*this.lastScale+this.x,h=this.originY-this.originY*this.lastScale+this.y,this.scroller.style[g]="translate("+f+"px,"+h+"px) scale("+c+")"+C,this.options.onZoom&&this.options.onZoom.call(this,a,c,f,h)):(this.pointX=c.pageX,this.pointY=c.pageY,(f>0||f<this.maxScrollX)&&(f=this.options.bounce?this.x+d/2:f>=0||0<=this.maxScrollX?0:this.maxScrollX),(h>this.minScrollY||h<this.maxScrollY)&&(h=this.options.bounce?this.y+e/2:h>=this.minScrollY||0<=this.maxScrollY?this.minScrollY:this.maxScrollY),this.distX+=d,this.distY+=e,this.absDistX=b.abs(this.distX),this.absDistY=b.abs(this.distY),6>this.absDistX&&6>this.absDistY||(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(h=this.y,e=0):this.absDistY>this.absDistX+5&&(f=this.x,d=0)),this.moved=!0,this._pos(f,h),this.dirX=d>0?-1:0>d?1:0,this.dirY=e>0?-1:0>e?1:0,300<i-this.startTime&&(this.startTime=i,this.startX=this.x,this.startY=this.y),this.options.onScrollMove&&this.options.onScrollMove.call(this,a)))},_end:function(a){if(!q||0===a.touches.length){var d,e,f=this,h=q?a.changedTouches[0]:a,j={dist:0,time:0},k={dist:0,time:0},l=(a.timeStamp||Date.now())-f.startTime,m=f.x,n=f.y;f._unbind(v),f._unbind(w),f._unbind(x),f.options.onBeforeScrollEnd&&f.options.onBeforeScrollEnd.call(f,a),f.zoomed?(m=f.scale*f.lastScale,m=Math.max(f.options.zoomMin,m),m=Math.min(f.options.zoomMax,m),f.lastScale=m/f.scale,f.scale=m,f.x=f.originX-f.originX*f.lastScale+f.x,f.y=f.originY-f.originY*f.lastScale+f.y,f.scroller.style[i]="200ms",f.scroller.style[g]="translate("+f.x+"px,"+f.y+"px) scale("+f.scale+")"+C,f.zoomed=!1,f.refresh(),f.options.onZoomEnd&&f.options.onZoomEnd.call(f,a)):(f.moved?(300>l&&f.options.momentum&&(j=m?f._momentum(m-f.startX,l,-f.x,f.scrollerW-f.wrapperW+f.x,f.options.bounce?f.wrapperW:0):j,k=n?f._momentum(n-f.startY,l,-f.y,0>f.maxScrollY?f.scrollerH-f.wrapperH+f.y-f.minScrollY:0,f.options.bounce?f.wrapperH:0):k,m=f.x+j.dist,n=f.y+k.dist,(0<f.x&&m>0||f.x<f.maxScrollX&&m<f.maxScrollX)&&(j={dist:0,time:0}),(f.y>f.minScrollY&&n>f.minScrollY||f.y<f.maxScrollY&&n<f.maxScrollY)&&(k={dist:0,time:0})),j.dist||k.dist?(j=b.max(b.max(j.time,k.time),10),f.options.snap&&(k=m-f.absStartX,l=n-f.absStartY,b.abs(k)<f.options.snapThreshold&&b.abs(l)<f.options.snapThreshold?f.scrollTo(f.absStartX,f.absStartY,200):(k=f._snap(m,n),m=k.x,n=k.y,j=b.max(k.time,j))),f.scrollTo(b.round(m),b.round(n),j)):f.options.snap?(k=m-f.absStartX,l=n-f.absStartY,b.abs(k)<f.options.snapThreshold&&b.abs(l)<f.options.snapThreshold?f.scrollTo(f.absStartX,f.absStartY,200):(k=f._snap(f.x,f.y),(k.x!=f.x||k.y!=f.y)&&f.scrollTo(k.x,k.y,k.time))):f._resetPos(200)):(q&&(f.doubleTapTimer&&f.options.zoom?(clearTimeout(f.doubleTapTimer),f.doubleTapTimer=null,f.options.onZoomStart&&f.options.onZoomStart.call(f,a),f.zoom(f.pointX,f.pointY,1==f.scale?f.options.doubleTapZoom:1),f.options.onZoomEnd&&setTimeout(function(){f.options.onZoomEnd.call(f,a)},200)):this.options.handleClick&&(f.doubleTapTimer=setTimeout(function(){for(f.doubleTapTimer=null,d=h.target;1!=d.nodeType;)d=d.parentNode;"SELECT"!=d.tagName&&"INPUT"!=d.tagName&&"TEXTAREA"!=d.tagName&&(e=c.createEvent("MouseEvents"),e.initMouseEvent("click",!0,!0,a.view,1,h.screenX,h.screenY,h.clientX,h.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),e._fake=!0,d.dispatchEvent(e))},f.options.zoom?250:0))),f._resetPos(200)),f.options.onTouchEnd&&f.options.onTouchEnd.call(f,a))}},_resetPos:function(a){var b=0<=this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,c=this.y>=this.minScrollY||0<this.maxScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y;b==this.x&&c==this.y?(this.moved&&(this.moved=!1,this.options.onScrollEnd&&this.options.onScrollEnd.call(this)),this.hScrollbar&&this.options.hideScrollbar&&("webkit"==e&&(this.hScrollbarWrapper.style[l]="300ms"),this.hScrollbarWrapper.style.opacity="0"),this.vScrollbar&&this.options.hideScrollbar&&("webkit"==e&&(this.vScrollbarWrapper.style[l]="300ms"),this.vScrollbarWrapper.style.opacity="0")):this.scrollTo(b,c,a||0)},_wheel:function(a){var b,c,d=this;if("wheelDeltaX"in a)b=a.wheelDeltaX/12,c=a.wheelDeltaY/12;else if("wheelDelta"in a)b=c=a.wheelDelta/12;else{if(!("detail"in a))return;b=c=3*-a.detail}"zoom"==d.options.wheelAction?(c=d.scale*Math.pow(2,1/3*(c?c/Math.abs(c):0)),c<d.options.zoomMin&&(c=d.options.zoomMin),c>d.options.zoomMax&&(c=d.options.zoomMax),c!=d.scale&&(!d.wheelZoomCount&&d.options.onZoomStart&&d.options.onZoomStart.call(d,a),d.wheelZoomCount++,d.zoom(a.pageX,a.pageY,c,400),setTimeout(function(){d.wheelZoomCount--,!d.wheelZoomCount&&d.options.onZoomEnd&&d.options.onZoomEnd.call(d,a)},400))):(b=d.x+b,c=d.y+c,b>0?b=0:b<d.maxScrollX&&(b=d.maxScrollX),c>d.minScrollY?c=d.minScrollY:c<d.maxScrollY&&(c=d.maxScrollY),0>d.maxScrollY&&d.scrollTo(b,c,0))},_mouseout:function(a){var b=a.relatedTarget;if(b)for(;b=b.parentNode;)if(b==this.wrapper)return;this._end(a)},_transitionEnd:function(a){a.target==this.scroller&&(this._unbind(z),this._startAni())},_startAni:function(){var a,c,d,e=this,f=e.x,g=e.y,h=Date.now();e.animating||(e.steps.length?(a=e.steps.shift(),a.x==f&&a.y==g&&(a.time=0),e.animating=!0,e.moved=!0,e.options.useTransition?(e._transitionTime(a.time),e._pos(a.x,a.y),e.animating=!1,a.time?e._bind(z):e._resetPos(0)):(d=function(){var i,j=Date.now();j>=h+a.time?(e._pos(a.x,a.y),e.animating=!1,e.options.onAnimationEnd&&e.options.onAnimationEnd.call(e),e._startAni()):(j=(j-h)/a.time-1,c=b.sqrt(1-j*j),j=(a.x-f)*c+f,i=(a.y-g)*c+g,e._pos(j,i),e.animating&&(e.aniTime=A(d)))})()):e._resetPos(400))},_transitionTime:function(a){a+="ms",this.scroller.style[i]=a,this.hScrollbar&&(this.hScrollbarIndicator.style[i]=a),this.vScrollbar&&(this.vScrollbarIndicator.style[i]=a)},_momentum:function(a,c,d,e,f){var c=b.abs(a)/c,g=c*c/.0012;return a>0&&g>d?(d+=f/(6/(6e-4*(g/c))),c=c*d/g,g=d):0>a&&g>e&&(e+=f/(6/(6e-4*(g/c))),c=c*e/g,g=e),{dist:g*(0>a?-1:1),time:b.round(c/6e-4)}},_offset:function(a){for(var b=-a.offsetLeft,c=-a.offsetTop;a=a.offsetParent;)b-=a.offsetLeft,c-=a.offsetTop;return a!=this.wrapper&&(b*=this.scale,c*=this.scale),{left:b,top:c}},_snap:function(a,c){var d,e,f;for(f=this.pagesX.length-1,d=0,e=this.pagesX.length;e>d;d++)if(a>=this.pagesX[d]){f=d;break}for(f==this.currPageX&&f>0&&0>this.dirX&&f--,a=this.pagesX[f],e=(e=b.abs(a-this.pagesX[this.currPageX]))?500*(b.abs(this.x-a)/e):0,this.currPageX=f,f=this.pagesY.length-1,d=0;f>d;d++)if(c>=this.pagesY[d]){f=d;break}return f==this.currPageY&&f>0&&0>this.dirY&&f--,c=this.pagesY[f],d=(d=b.abs(c-this.pagesY[this.currPageY]))?500*(b.abs(this.y-c)/d):0,this.currPageY=f,f=b.round(b.max(e,d))||200,{x:a,y:c,time:f}},_bind:function(a,b,c){(b||this.scroller).addEventListener(a,this,!!c)},_unbind:function(a,b,c){(b||this.scroller).removeEventListener(a,this,!!c)},destroy:function(){this.scroller.style[g]="",this.vScrollbar=this.hScrollbar=!1,this._scrollbar("h"),this._scrollbar("v"),this._unbind(t,window),this._unbind(u),this._unbind(v),this._unbind(w),this._unbind(x),this.options.hasTouch||(this._unbind("mouseout",this.wrapper),this._unbind(y)),this.options.useTransition&&this._unbind(z),this.options.checkDOMChanges&&clearInterval(this.checkDOMTime),this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var a,c,d,e=0;if(c=0,this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin),this.wrapperW=this.wrapper.clientWidth||1,this.wrapperH=this.wrapper.clientHeight||1,this.minScrollY=-this.options.topOffset||0,this.scrollerW=b.round(this.scroller.offsetWidth*this.scale),this.scrollerH=b.round((this.scroller.offsetHeight+this.minScrollY)*this.scale),this.maxScrollX=this.wrapperW-this.scrollerW,this.maxScrollY=this.wrapperH-this.scrollerH+this.minScrollY,this.dirY=this.dirX=0,this.options.onRefresh&&this.options.onRefresh.call(this),this.hScroll=this.options.hScroll&&0>this.maxScrollX,this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH),this.hScrollbar=this.hScroll&&this.options.hScrollbar,this.vScrollbar=this.vScroll&&this.options.vScrollbar&&this.scrollerH>this.wrapperH,a=this._offset(this.wrapper),this.wrapperOffsetLeft=-a.left,this.wrapperOffsetTop=-a.top,"string"==typeof this.options.snap)for(this.pagesX=[],this.pagesY=[],d=this.scroller.querySelectorAll(this.options.snap),a=0,c=d.length;c>a;a++)e=this._offset(d[a]),e.left+=this.wrapperOffsetLeft,e.top+=this.wrapperOffsetTop,this.pagesX[a]=e.left<this.maxScrollX?this.maxScrollX:e.left*this.scale,this.pagesY[a]=e.top<this.maxScrollY?this.maxScrollY:e.top*this.scale;else if(this.options.snap){for(this.pagesX=[];e>=this.maxScrollX;)this.pagesX[c]=e,e-=this.wrapperW,c++;for(this.maxScrollX%this.wrapperW&&(this.pagesX[this.pagesX.length]=this.maxScrollX-this.pagesX[this.pagesX.length-1]+this.pagesX[this.pagesX.length-1]),c=e=0,this.pagesY=[];e>=this.maxScrollY;)this.pagesY[c]=e,e-=this.wrapperH,c++;this.maxScrollY%this.wrapperH&&(this.pagesY[this.pagesY.length]=this.maxScrollY-this.pagesY[this.pagesY.length-1]+this.pagesY[this.pagesY.length-1])}this._scrollbar("h"),this._scrollbar("v"),this.zoomed||(this.scroller.style[i]="0",this._resetPos(200))},scrollTo:function(a,b,c,d){var e=a;for(this.stop(),e.length||(e=[{x:a,y:b,time:c,relative:d}]),a=0,b=e.length;b>a;a++)e[a].relative&&(e[a].x=this.x-e[a].x,e[a].y=this.y-e[a].y),this.steps.push({x:e[a].x,y:e[a].y,time:e[a].time||0});this._startAni()},scrollToElement:function(a,c){var d;(a=a.nodeType?a:this.scroller.querySelector(a))&&(d=this._offset(a),d.left+=this.wrapperOffsetLeft,d.top+=this.wrapperOffsetTop,d.left=0<d.left?0:d.left<this.maxScrollX?this.maxScrollX:d.left,d.top=d.top>this.minScrollY?this.minScrollY:d.top<this.maxScrollY?this.maxScrollY:d.top,c=void 0===c?b.max(2*b.abs(d.left),2*b.abs(d.top)):c,this.scrollTo(d.left,d.top,c))},scrollToPage:function(a,b,c){c=void 0===c?400:c,this.options.onScrollStart&&this.options.onScrollStart.call(this),this.options.snap?(a="next"==a?this.currPageX+1:"prev"==a?this.currPageX-1:a,b="next"==b?this.currPageY+1:"prev"==b?this.currPageY-1:b,a=0>a?0:a>this.pagesX.length-1?this.pagesX.length-1:a,b=0>b?0:b>this.pagesY.length-1?this.pagesY.length-1:b,this.currPageX=a,this.currPageY=b,a=this.pagesX[a],b=this.pagesY[b]):(a*=-this.wrapperW,b*=-this.wrapperH,a<this.maxScrollX&&(a=this.maxScrollX),b<this.maxScrollY&&(b=this.maxScrollY)),this.scrollTo(a,b,c)},disable:function(){this.stop(),this._resetPos(0),this.enabled=!1,this._unbind(v),this._unbind(w),this._unbind(x)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(z):B(this.aniTime),this.steps=[],this.animating=this.moved=!1},zoom:function(a,b,c,d){var e=c/this.scale;this.options.useTransform&&(this.zoomed=!0,d=void 0===d?200:d,a=a-this.wrapperOffsetLeft-this.x,b=b-this.wrapperOffsetTop-this.y,this.x=a-a*e+this.x,this.y=b-b*e+this.y,this.scale=c,this.refresh(),this.x=0<this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,this.y=this.y>this.minScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y,this.scroller.style[i]=d+"ms",this.scroller.style[g]="translate("+this.x+"px,"+this.y+"px) scale("+c+")"+C,this.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}},d=null,D}),define("mustache",[],function(){var a="undefined"!=typeof module&&module.exports||{};return function(a){function b(a){return!RegExp.prototype.test.call(p,a)}function c(a){return'"'+a.replace(u,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"'}function d(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function e(a){return(""+a).replace(/[&<>"'\/]/g,function(a){return v[a]})}function f(a){this.tail=this.string=a,this.pos=0}function g(a,b){this.view=a,this.parent=b,this.clearCache()}function h(){this.clearCache()}function i(a,b){"string"==typeof a&&(a=k(a));for(var d,e,f=['""'],g=0,h=a.length;h>g;++g)switch(d=a[g],d.type){case"#":case"^":e="#"===d.type?"_section":"_inverted",f.push("r."+e+"("+c(d.value)+", c, function (c, r) {\n  "+i(d.tokens,!0)+"\n})");break;case"{":case"&":case"name":e="name"===d.type?"true":"false",f.push("r._name("+c(d.value)+", c, "+e+")");break;case">":f.push("r._partial("+c(d.value)+", c)");break;case"text":f.push(c(d.value))}return f="return "+f.join(" + ")+";",b?f:new Function("c, r",f)}function j(a){if(2===a.length)return[RegExp(d(a[0])+"\\s*"),RegExp("\\s*"+d(a[1]))];throw Error("Invalid tags: "+a.join(" "))}function k(c,e){for(var g,h,e=e||a.tags,i=j(e),k=new f(c),l=[],m=[],p=!1,t=!1;!k.eos();){if(h=k.scanUntil(i[0]))for(var u=0,v=h.length;v>u;++u)if(g=h[u],b(g)?m.push(l.length):t=!0,l.push({type:"text",value:g}),"\n"===g){if(p&&!t)for(;m.length;)l.splice(m.pop(),1);else m=[];t=p=!1}if(!k.scan(i[0]))break;if(p=!0,g=k.scan(s)||"name",k.scan(n),"="===g?(h=k.scanUntil(q),k.scan(q),k.scanUntil(i[1])):"{"===g?(h=RegExp("\\s*"+d("}"+e[1])),h=k.scanUntil(h),k.scan(r),k.scanUntil(i[1])):h=k.scanUntil(i[1]),!k.scan(i[1]))throw Error("Unclosed tag at "+k.pos);l.push({type:g,value:h}),("name"===g||"{"===g||"&"===g)&&(t=!0),"="===g&&(e=h.split(o),i=j(e))}for(var w,i=0;i<l.length;++i)k=l[i],w&&"text"===w.type&&"text"===k.type?(w.value+=k.value,l.splice(i--,1)):w=k;for(p=w=[],i=[],m=0;m<l.length;++m)switch(k=l[m],k.type){case"#":case"^":k.tokens=[],i.push(k),p.push(k),p=k.tokens;break;case"/":if(0===i.length)throw Error("Unopened section: "+k.value);if(p=i.pop(),p.value!==k.value)throw Error("Unclosed section: "+p.value);p=0<i.length?i[i.length-1].tokens:w;break;default:p.push(k)}if(p=i.pop())throw Error("Unclosed section: "+p.value);return w}function l(a,b,c){return w.compilePartial(a,b,c)}function m(a,b,c){if(c)for(var d in c)l(d,c[d]);return w.render(a,b)}a.name="mustache.js",a.version="0.5.1-dev",a.tags=["{{","}}"],a.parse=k,a.clearCache=function(){w.clearCache()},a.compile=function(a,b){return w.compile(a,b)},a.compilePartial=l,a.render=m,a.Scanner=f,a.Context=g,a.Renderer=h,a.to_html=function(a,b,c,d){return a=m(a,b,c),"function"!=typeof d?a:void d(a)};var n=/\s*/,o=/\s+/,p=/\S/,q=/\s*=/,r=/\s*\}/,s=/#|\^|\/|>|\{|&|=|!/,t=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},u=/[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF\u2028\u2029]/gm,v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};a.isWhitespace=b,a.isArray=t,a.quote=c,a.escapeRe=d,a.escapeHtml=e,f.prototype.eos=function(){return""===this.tail},f.prototype.scan=function(a){return(a=this.tail.match(a))&&0===a.index?(this.tail=this.tail.substring(a[0].length),this.pos+=a[0].length,a[0]):null},f.prototype.scanUntil=function(a){var b=this.tail.search(a);switch(b){case-1:a=this.tail,this.pos+=this.tail.length,this.tail="";break;case 0:a=null;break;default:a=this.tail.substring(0,b),this.tail=this.tail.substring(b),this.pos+=b}return a},g.make=function(a){return a instanceof g?a:new g(a)},g.prototype.clearCache=function(){this._cache={}},g.prototype.push=function(a){return new g(a,this)},g.prototype.lookup=function(a){var b=this._cache[a];if(!b){if("."===a)b=this.view;else for(var c=this;c;){if(0<a.indexOf("."))for(var d=a.split("."),e=0,b=c.view;b&&e<d.length;)b=b[d[e++]];else b=c.view[a];if(null!=b)break;c=c.parent}this._cache[a]=b}return"function"==typeof b&&(b=b.call(this.view)),b},h.prototype.clearCache=function(){this._cache={},this._partialCache={}},h.prototype.compile=function(a){var b=i(a),c=this;return function(a){return b(g.make(a),c)}},h.prototype.compilePartial=function(a,b,c){return this._partialCache[a]=this.compile(b,c),this._partialCache[a]},h.prototype.render=function(a,b){var c=this._cache[a];return c||(c=this.compile(a),this._cache[a]=c),c(b)},h.prototype._section=function(a,b,c){switch(a=b.lookup(a),typeof a){case"object":if(t(a)){for(var d="",e=0,f=a.length;f>e;++e)d+=c(b.push(a[e]),this);return d}return c(b.push(a),this);case"function":var c=c(b,this),g=this;return a.call(b.view,c,function(a){return g.render(a,b)})||"";default:if(a)return c(b,this)}return"";
    },
    h.prototype._inverted = function(a, b, c) {
        return a = b.lookup(a),
        null == a || !1 === a || t(a) && 0 === a.length ? c(b, this) : ""
    },
    h.prototype._partial = function(a, b) {
        var c = this._partialCache[a];
        return c ? c(b, this) : ""
    },
    h.prototype._name = function(a, b, c) {
        return a = b.lookup(a),
        "function" == typeof a && (a = a.call(b.view)),
        b = null == a ? "": "" + a,
        c ? e(b) : b
    };
    var w = new h
} (a),
a
}), define("piao", ["zepto"],
function(require) {
    function a(a) {
        var b = {};
        return a.length > 0 && C.each(a.substr(1).split("&"),
        function(a, c) {
            var d = c.split("=");
            2 === d.length && (b[d[0]] = "sid" === d[0] ? decodeURIComponent(d[1]) : d[1])
        }),
        b
    }
    function b() {
        return {
            hash: a(location.hash),
            search: a(location.search)
        }
    }
    function c(a, b) {
        var c = arguments;
        if (2 == c.length && "string" == typeof c[1]) {
            var d = b,
            e = /(yyyy|yy|mm|m|dd|d|hh|h|MM|M|ss|s)/gi,
            f = {
                yyyy: a.getFullYear(),
                yy: a.getFullYear().toString().match(/\d{2}$/),
                mm: a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1,
                m: a.getMonth() + 1,
                dd: a.getDate() < 10 ? "0" + a.getDate() : a.getDate(),
                d: a.getDate(),
                hh: a.getHours() < 10 ? "0" + a.getHours() : a.getHours(),
                h: a.getHours(),
                MM: a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes(),
                M: a.getMinutes(),
                ss: a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds(),
                s: a.getSeconds()
            };
            return d = d.replace(e,
            function() {
                return f[arguments[1]]
            })
        }
    }
    function d(a, b) {
        var c = ["&", "&amp;", "<", "&lt;", ">", "&gt;", " ", "&nbsp;", '"', "&quot;", "'", "&#039;", "\\r", "<br>", "\\n", "<br>", "/", "&#047;", "\\\\", "&#092;"];
        b && c.reverse();
        for (var d = 0,
        e = a; d < c.length; d += 2) e = e.replace(new RegExp(c[d], "g"), c[1 + d]);
        return e
    }
    function e() {
        var a = encodeURIComponent(location.href),
        b = encodeURIComponent("http://imgcache.qq.com/lifestyle/app/movie_touch/img/logo_h.png");
        return "http://ui.ptlogin2.qq.com/cgi-bin/login?style=" + (C.os.ios ? 8 : 9) + "&appid=8000201&low_login_enable=1&s_url=" + a + "&hln_css=" + b
    }
    function f() {
        var a = "http://pt.3g.qq.com/sl?bid_code=bm_qqfilm&loginsid=" + C.cookie("mq_sid") + "&goUrl=" + location.href;
        location.replace(a)
    }
    function g() {
        function a(a) {
            var b = navigator.userAgent.toLowerCase(),
            c = ("" + (new RegExp(a + "(\\d+((\\.|_)\\d+)*)").exec(b) || [, 0])[1]).replace(/_/g, ".");
            return parseFloat(c) || void 0
        }
        var b;
        if (window.mqq && window.x5mtt && x5mtt.getSingleApp) try {
            var c = x5mtt.getSingleApp("com.tencent.mobileqq");
            c && (b = JSON.parse(c).versionname)
        } catch(d) {} else b = a("qq[/]") || a("v1_and_sq_");
        return b
    }
    function h(a) {
        var b = g();
        b >= 4.5 && mqq && mqq.ui && mqq.ui.openUrl ? mqq.ui.openUrl({
            url: a,
            target: 1,
            style: 0
        }) : window.location.href = a
    }
    function i(a) {
        var b, c, d, e, f, g, h = "movie_v1";
        "object" == typeof a ? a.hash.hasOwnProperty("sub") ? h = a.hash.sub: a.search.sp_billno && a.search.transaction_id && (h = "suc") : "string" == typeof a && (h = a),
        d = I.getMod(h),
        e = I.prevMod,
        e ? d != e && (I.fromMod = e, b = d.idx > e.idx ? !0 : !1, c = C(window).width(), f = C("#" + e.id), g = C("#" + d.id), f.css({
            "-webkit-transform": "translate(0px, 0px) translateZ(0px)"
        }).show(), g.css({
            "-webkit-transform": "translate(" + (b ? c: -c) + "px, 0px) translateZ(0px)"
        }).show(), setTimeout(function() {
            f.css({
                "-webkit-transition": "-webkit-transform .4s",
                "-webkit-transform": "translate(" + (b ? -c: c) + "px, 0px) translateZ(0px)"
            }),
            g.css({
                "-webkit-transition": "-webkit-transform .4s",
                "-webkit-transform": "translate(0px, 0px) translateZ(0px)"
            }).one("webkitTransitionEnd",
            function() {
                f.hide(),
                g.show()
            })
        },
        100), I.prevMod = d) : (I.prevMod = d, I.fromMod = null),
        D[h] ? D[h].show() : require.async("mod/" + h,
        function(a) {
            D[h] = a,
            a.init()
        })
    }
    function j(a, b) {
        var c = document.head || document.getElementsByTagName("head")[0],
        d = document.createElement("script");
        d.type = "text/javascript",
        d.src = a,
        d.async = !0,
        d.onload = d.onreadystatechange = function() { / ^(loaded | complete | undefined) $ / .test(this.readyState) && (this.onload = this.onreadystatechange = null, c.removeChild(this), "function" == typeof b && b())
        },
        d.onerror = function() {
            "function" == typeof b && b()
        },
        c.appendChild(d)
    }
    function k(a, b, c, d) {
        var e = "http://cgi.piao.qq.com/cgi-bin/dianying/get_sche/get_sche.fcg?name=" + a + ".json_v3";
        d && (e += "&typePrice=true"),
        G(e, {
            g_tk: !1,
            onSuccess: function(a) {
                var e = new Function("return " + a.responseText)();
                "0" === e.ret ? (MovieData.data[e.key] = e.data, "function" == typeof b && (d ? b(e) : b())) : "function" == typeof c && c()
            },
            onError: function() {
                "function" == typeof c && c()
            }
        })
    }
    function l(a) {
        var b = "city",
        c = "http://imgcache.qq.com/piao/data/app/movie/" + b + ".json",
        d = MovieData.data[b];
        d ? "function" == typeof a && a(d) : j(c,
        function() {
            "function" == typeof a && a(MovieData.data[b])
        })
    }
    function m(a) {
        var b = "http://s.p.qq.com/cgi-bin/coupon_q/dianying/wallet_banner.fcg?cmd=query&_=" + +new Date;
        a = a || E,
        C.ajax({
            url: b,
            type: "GET",
            dataType: "json",
            crossDomain: !0,
            success: function(b) {
                a(b)
            },
            error: function() {
                a(null)
            }
        })
    }
    function n(a, b) {
        var c = "movies_city_" + a,
        d = "http://imgcache.qq.com/piao/data/app/movie/v3/movies/cities/" + a + "/movies_city_" + a + ".json",
        e = MovieData.data[c];
        "function" != typeof b && (b = E),
        e ? b(e) : j(d,
        function() {
            b(MovieData.data[c])
        })
    }
    function o(a, b) {
        var c = "info_movie_" + a,
        d = "http://imgcache.qq.com/piao/data/app/movie/v3/movies/" + a % 100 + "/info_movie_" + a + ".json",
        e = MovieData.data[c];
        "function" != typeof b && (b = E),
        e ? b(e) : j(d,
        function() {
            b(MovieData.data[c])
        })
    }
    function p(a, b) {
        var c = "cinemas_city_" + a,
        d = "http://imgcache.qq.com/piao/data/app/movie/v3/cinemas/cities/" + a + "/cinemas_city_" + a + ".json",
        e = MovieData.data[c];
        "function" != typeof b && (b = E),
        e ? b(e) : j(d,
        function() {
            b(MovieData.data[c])
        })
    }
    function q(a, b, c) {
        var d = "sched_city_movie_" + a + "_" + b,
        e = "http://imgcache.qq.com/piao/data/app/movie/v3/movies/cities/" + a + "/sched_city_movie_" + a + "_" + b + ".json";
        "function" != typeof c && (c = E),
        k(d,
        function() {
            c(MovieData.data[d])
        },
        function() {
            j(e + "?" + (new Date).getTime(),
            function() {
                c(MovieData.data[d])
            })
        })
    }
    function r(a, b, c) {
        var d = "sched_city_cinema_" + a + "_" + b,
        e = "http://imgcache.qq.com/piao/data/app/movie/v3/cinemas/cities/" + a + "/sched_city_cinema_" + a + "_" + b + ".json";
        "function" != typeof c && (c = E),
        k(d,
        function() {
            c(MovieData.data[d])
        },
        function() {
            j(e + "?" + (new Date).getTime(),
            function() {
                c(MovieData.data[d])
            })
        })
    }
    function s(a, b, c) {
        var d = "sched_city_cinema_" + a + "_" + b;
        k(d,
        function(a) {
            "function" == typeof c && c(a)
        },
        null, !0)
    }
    function t(a, b) {
        var c = "info_cinema_" + a,
        d = "http://imgcache.qq.com/piao/data/app/movie/v3/cinemas/" + a % 100 + "/info_cinema_" + a + ".json",
        e = MovieData.data[c];
        "function" != typeof b && (b = E),
        e ? b(e) : j(d,
        function() {
            b(MovieData.data[c])
        })
    }
    function u(a, b, c) {
        var d = "detail_cinema_room_" + a + "_" + b,
        e = "http://imgcache.qq.com/piao/data/app/movie/v3/cinemas/" + a % 100 + "/detail_seat_cinema_room_" + a + "_" + b + ".json",
        f = MovieData.data[d];
        "function" != typeof c && (c = E),
        f ? c(f) : j(e,
        function() {
            c(MovieData.data[d])
        })
    }
    function v(a, b) {
        mqq ? mqq.device.isMobileQQ(function(c) {
            c ? (b = b || {},
            mqq.ui.showDialog({
                title: "温馨提醒",
                text: a,
                needOkBtn: b.needOkBtn || !0,
                needCancelBtn: b.needCancelBtn || !1
            },
            function(a) {
                b && b.callback && b.callback(a.button)
            })) : (alert(a), b && b.callback && b.callback())
        }) : (alert(a), b && b.callback && b.callback())
    }
    function w(a, b) {
        mqq ? mqq.device.isMobileQQ(function(c) {
            c ? mqq.ui.showDialog({
                title: "温馨提醒",
                text: a,
                needOkBtn: !0,
                needCancelBtn: !0
            },
            function(a) {
                b && b(a.button)
            }) : b(confirm(a) ? 0 : 1)
        }) : b(confirm(a) ? 0 : 1)
    }
    function x(a) {
        if (H) {
            var b = 2 == C.cookie("vm_pageid") ? "wallet": "account",
            c = "appid#2897540680|bargainor_id#1215866701|channel#" + b;
            mqq.tenpay.pay({
                tokenId: a,
                appInfo: c
            },
            function(a) {
                if (C.os.android) a && 0 == a.resultCode && a.data && a.data.callback_url && (location.href = decodeURIComponent(a.data.callback_url));
                else if (C.os.ios && a && 0 == a.resultCode && a.data && a.data.sp_data) {
                    var b = "http://piao.qq.com/m/wallet/index.html?_wv=1#sub=ticket&tp=seat",
                    c = a.data.sp_data.match(/[\?&]from=([^&#]*)(?:[&#]|$)/);
                    c && c[1] && (b = "http://piao.qq.com/m/wallet/index.html?_wv=1#sub=ticket&tp=" + ("paysuc_elec" == c[1] ? "elec": "seat")),
                    location.href = b
                }
            })
        } else location.href = d(a, !0)
    }
    function y(a) {
        var b, c, d = (new Date).getTime(),
        e = parseInt(C.cookie("vm_pageid"), 10);
        switch ((isNaN(e) || 0 >= e || e >= 80) && (e = 1), e = 20 + e, a) {
        case "movie_detail":
            c = "" + e + "51";
            break;
        case "cinema":
            c = "" + e + "53";
            break;
        case "cinema_ticket":
            c = "" + e + "54";
            break;
        case "seat":
            c = "" + e + "55";
            break;
        case "cinema_sche":
            c = "" + e + "56";
            break;
        case "ticket":
            c = "" + e + "52";
            break;
        default:
            c = "" + e + "57"
        }
        C.cookie("vm_pvsrc", c + "0000", {
            path: "/",
            domain: "piao.qq.com"
        }),
        b = new Image,
        J[d] = b,
        b.onload = b.onerror = function() {
            b.onload = b.onerror = null,
            b = null,
            J[d] && (J[d] = null),
            J = {}
        },
        b.src = "http://cgi.piao.qq.com/cgi-bin/dianying/html5_oz_report/html5_oz_report.fcg"
    }
    function z(a) {
        document.cookie = "vm_pvsrc=" + a + "0000;path=/;domain=piao.qq.com";
        var b = new Image;
        b.src = "http://cgi.piao.qq.com/cgi-bin/dianying/html5_oz_report/html5_oz_report.fcg",
        b.onload = b.onerror = function() {
            b.onload = b.onerror = null,
            b = null
        }
    }
    function A(a) {
        return a * Math.PI / 180
    }
    function B(a, b, c, d) {
        var e = 6378137,
        f = A(a),
        g = A(c),
        h = f - g,
        i = A(b) - A(d),
        j = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(h / 2), 2) + Math.cos(f) * Math.cos(g) * Math.pow(Math.sin(i / 2), 2)));
        return j *= e,
        j = Math.round(1e4 * j) / 1e4
    }
    var C = require("zepto"),
    D = {};
    window.MovieData = {
        data: {},
        set: function(a, b) {
            this.data[a] = b
        }
    };
    var E = function() {},
    F = function() {
        function a(a) {
            return k(b(j(a), a.length * r))
        }
        function b(a, b) {
            a[b >> 5] |= 128 << b % 32,
            a[(b + 64 >>> 9 << 4) + 14] = b;
            for (var c = 1732584193,
            i = -271733879,
            j = -1732584194,
            k = 271733878,
            l = 0; l < a.length; l += 16) {
                var m = c,
                n = i,
                o = j,
                p = k;
                c = d(c, i, j, k, a[l + 0], 7, -680876936),
                k = d(k, c, i, j, a[l + 1], 12, -389564586),
                j = d(j, k, c, i, a[l + 2], 17, 606105819),
                i = d(i, j, k, c, a[l + 3], 22, -1044525330),
                c = d(c, i, j, k, a[l + 4], 7, -176418897),
                k = d(k, c, i, j, a[l + 5], 12, 1200080426),
                j = d(j, k, c, i, a[l + 6], 17, -1473231341),
                i = d(i, j, k, c, a[l + 7], 22, -45705983),
                c = d(c, i, j, k, a[l + 8], 7, 1770035416),
                k = d(k, c, i, j, a[l + 9], 12, -1958414417),
                j = d(j, k, c, i, a[l + 10], 17, -42063),
                i = d(i, j, k, c, a[l + 11], 22, -1990404162),
                c = d(c, i, j, k, a[l + 12], 7, 1804603682),
                k = d(k, c, i, j, a[l + 13], 12, -40341101),
                j = d(j, k, c, i, a[l + 14], 17, -1502002290),
                i = d(i, j, k, c, a[l + 15], 22, 1236535329),
                c = e(c, i, j, k, a[l + 1], 5, -165796510),
                k = e(k, c, i, j, a[l + 6], 9, -1069501632),
                j = e(j, k, c, i, a[l + 11], 14, 643717713),
                i = e(i, j, k, c, a[l + 0], 20, -373897302),
                c = e(c, i, j, k, a[l + 5], 5, -701558691),
                k = e(k, c, i, j, a[l + 10], 9, 38016083),
                j = e(j, k, c, i, a[l + 15], 14, -660478335),
                i = e(i, j, k, c, a[l + 4], 20, -405537848),
                c = e(c, i, j, k, a[l + 9], 5, 568446438),
                k = e(k, c, i, j, a[l + 14], 9, -1019803690),
                j = e(j, k, c, i, a[l + 3], 14, -187363961),
                i = e(i, j, k, c, a[l + 8], 20, 1163531501),
                c = e(c, i, j, k, a[l + 13], 5, -1444681467),
                k = e(k, c, i, j, a[l + 2], 9, -51403784),
                j = e(j, k, c, i, a[l + 7], 14, 1735328473),
                i = e(i, j, k, c, a[l + 12], 20, -1926607734),
                c = f(c, i, j, k, a[l + 5], 4, -378558),
                k = f(k, c, i, j, a[l + 8], 11, -2022574463),
                j = f(j, k, c, i, a[l + 11], 16, 1839030562),
                i = f(i, j, k, c, a[l + 14], 23, -35309556),
                c = f(c, i, j, k, a[l + 1], 4, -1530992060),
                k = f(k, c, i, j, a[l + 4], 11, 1272893353),
                j = f(j, k, c, i, a[l + 7], 16, -155497632),
                i = f(i, j, k, c, a[l + 10], 23, -1094730640),
                c = f(c, i, j, k, a[l + 13], 4, 681279174),
                k = f(k, c, i, j, a[l + 0], 11, -358537222),
                j = f(j, k, c, i, a[l + 3], 16, -722521979),
                i = f(i, j, k, c, a[l + 6], 23, 76029189),
                c = f(c, i, j, k, a[l + 9], 4, -640364487),
                k = f(k, c, i, j, a[l + 12], 11, -421815835),
                j = f(j, k, c, i, a[l + 15], 16, 530742520),
                i = f(i, j, k, c, a[l + 2], 23, -995338651),
                c = g(c, i, j, k, a[l + 0], 6, -198630844),
                k = g(k, c, i, j, a[l + 7], 10, 1126891415),
                j = g(j, k, c, i, a[l + 14], 15, -1416354905),
                i = g(i, j, k, c, a[l + 5], 21, -57434055),
                c = g(c, i, j, k, a[l + 12], 6, 1700485571),
                k = g(k, c, i, j, a[l + 3], 10, -1894986606),
                j = g(j, k, c, i, a[l + 10], 15, -1051523),
                i = g(i, j, k, c, a[l + 1], 21, -2054922799),
                c = g(c, i, j, k, a[l + 8], 6, 1873313359),
                k = g(k, c, i, j, a[l + 15], 10, -30611744),
                j = g(j, k, c, i, a[l + 6], 15, -1560198380),
                i = g(i, j, k, c, a[l + 13], 21, 1309151649),
                c = g(c, i, j, k, a[l + 4], 6, -145523070),
                k = g(k, c, i, j, a[l + 11], 10, -1120210379),
                j = g(j, k, c, i, a[l + 2], 15, 718787259),
                i = g(i, j, k, c, a[l + 9], 21, -343485551),
                c = h(c, m),
                i = h(i, n),
                j = h(j, o),
                k = h(k, p)
            }
            return 16 == s ? Array(i, j) : Array(c, i, j, k)
        }
        function c(a, b, c, d, e, f) {
            return h(i(h(h(b, a), h(d, f)), e), c)
        }
        function d(a, b, d, e, f, g, h) {
            return c(b & d | ~b & e, a, b, f, g, h)
        }
        function e(a, b, d, e, f, g, h) {
            return c(b & e | d & ~e, a, b, f, g, h)
        }
        function f(a, b, d, e, f, g, h) {
            return c(b ^ d ^ e, a, b, f, g, h)
        }
        function g(a, b, d, e, f, g, h) {
            return c(d ^ (b | ~e), a, b, f, g, h)
        }
        function h(a, b) {
            var c = (65535 & a) + (65535 & b),
            d = (a >> 16) + (b >> 16) + (c >> 16);
            return d << 16 | 65535 & c
        }
        function i(a, b) {
            return a << b | a >>> 32 - b
        }
        function j(a) {
            for (var b = Array(), c = (1 << r) - 1, d = 0; d < a.length * r; d += r) b[d >> 5] |= (a.charCodeAt(d / r) & c) << d % 32;
            return b
        }
        function k(a) {
            for (var b = q ? "0123456789ABCDEF": "0123456789abcdef", c = "", d = 0; d < 4 * a.length; d++) c += b.charAt(a[d >> 2] >> d % 4 * 8 + 4 & 15) + b.charAt(a[d >> 2] >> d % 4 * 8 & 15);
            return c
        }
        function l(b) {
            return a(b)
        }
        function m(a) {
            var b = new RegExp("(?:^|;+|\\s+)" + a + "=([^;]*)"),
            c = document.cookie.match(b);
            return c ? c[1] : ""
        }
        function n(a) {
            a = a || {};
            var b, c = a.salt || o,
            d = a.skey || m("skey") || m("lskey") || "",
            e = a.md5key || p,
            f = [];
            f.push(c << 5);
            for (var g = 0,
            h = d.length; h > g; ++g) b = d.charAt(g).charCodeAt(),
            f.push((c << 5) + b),
            c = b;
            var i = l(f.join("") + e);
            return i
        }
        var o = 5381,
        p = "tencentQQVIP123443safde&!%^%1282",
        q = 0,
        r = 8,
        s = 32;
        return n
    } (),
    G = function() {
        function a(b, c, d) {
            var e = [];
            if ("undefined" == typeof b.contentWindow || "undefined" == typeof b.contentWindow.ajax) return void window.setTimeout(function() {
                a(b, c, d)
            },
            100);
            if ("object" == typeof d.data) for (var f in d.data) e.push(f + "=" + d.data[f]);
            d.g_tk !== !1 && e.push("g_tk=" + F()),
            e.length > 0 && (e = e.join("&"), "POST" === d.method ? d.data = e: c += (c.indexOf("?") > -1 ? "&": "?") + e),
            b.contentWindow.ajax(c, d)
        }
        var b = "proxy_cajax_ifm_cgi_" + (new Date).getTime(),
        c = "http://cgi.piao.qq.com/proxy.html";
        return function(d, e) {
            var f = document.getElementById(b);
            f ? a(f, d, e) : (f = document.createElement("iframe"), f.id = b, f.style.width = f.style.height = "0", f.style.display = "none", f.src = c, f.proxyReady = function() {
                a(f, d, e)
            },
            document.body.appendChild(f))
        }
    } (),
    H = function() {
        var a = b(),
        c = a.hash.sid || a.search.sid,
        d = a.hash.from || a.search.from,
        e = navigator.userAgent,
        f = !1;
        return d && "qqaio" == d && (f = !0),
        (c || C.cookie("mq_sid")) && (c && C.cookie("mq_sid", c, {
            path: "/",
            domain: "piao.qq.com"
        }), !f && (window.QQApi || e.indexOf("V1_AND_SQ") > -1 || e.indexOf("QQ") > -1)) ? !0 : !1
    } (),
    I = {
        prevMod: null,
        fromMod: null,
        mods: [{
            name: "movie_v1",
            id: "movie_div",
            idx: 0
        },
        {
            name: "movie_detail",
            id: "movie_info_div",
            idx: 1
        },
        {
            name: "cinema",
            id: "cinema_div",
            idx: 2
        },
        {
            name: "cinema_sche",
            id: "cinema_sche_div",
            idx: 2
        },
        {
            name: "cinema_ticket",
            id: "cinema_ticket_div",
            idx: 2
        },
        {
            name: "seat",
            id: "seat_div",
            idx: 5
        },
        {
            name: "ticket",
            id: "ticket_div",
            idx: 3
        },
        {
            name: "order",
            id: "order_div",
            idx: 4
        },
        {
            name: "movie_seat_sche",
            id: "movie_seat_sche_div",
            idx: 6
        },
        {
            name: "order_confirm",
            id: "order_confirm_div",
            idx: 7
        }],
        getMod: function(a) {
            var b = null;
            return C.each(this.mods,
            function(c, d) {
                return d.name == a ? (b = d, !1) : void 0
            }),
            b
        }
    };
    "undefined" == typeof window.onfinishjump && (window.onfinishjump = function(a, b) {
        0 == a && (location.href = b)
    });
    var J = {},
    K = {
        getArgs: b,
        html: d,
        needLoad: !1,
        getDis: B,
        crossAjax: G,
        getLoginUrl: e,
        reLogin: f,
        isFromMobileQQ: H,
        pageMod: I,
        loadMod: i,
        formatDate: c,
        loadJs: j,
        loadCity: l,
        loadBanner: m,
        loadMovieOn: n,
        getCinemas: p,
        loadMovieDetail: o,
        loadMovieSche: q,
        loadCinemaSche: r,
        loadCinemaScheByType: s,
        loadCinemaDetail: t,
        loadCinemaRoom: u,
        openPayWin: x,
        showMsg: v,
        showConfirm: w,
        pvReport: y,
        ozReport: z,
        goToPage: h
    };
    return K
}), define("Swipe", [],
function() {
    var a = function(a, b) {
        if (!a) return null;
        this.options = b || {},
        this.index = this.options.startSlide || 0,
        this.speed = this.options.speed || 300,
        this.callback = this.options.callback ||
        function() {},
        this.delay = this.options.auto || 0,
        this.container = a,
        this.element = this.container.children[0],
        this.container.style.overflow = "hidden",
        this.element.style.listStyle = "none",
        this.setup(),
        this.begin(),
        this.element.addEventListener && (this.element.addEventListener("touchstart", this, !1), this.element.addEventListener("touchmove", this, !1), this.element.addEventListener("touchend", this, !1), this.element.addEventListener("webkitTransitionEnd", this, !1), this.element.addEventListener("msTransitionEnd", this, !1), this.element.addEventListener("oTransitionEnd", this, !1), this.element.addEventListener("transitionend", this, !1), window.addEventListener("resize", this, !1))
    };
    return a.prototype = {
        setup: function() {
            if (this.slides = this.element.children, this.length = this.slides.length, this.length < 2) return null;
            if (this.width = this.container.getBoundingClientRect().width, !this.width) return null;
            this.container.style.visibility = "hidden",
            this.element.style.width = this.slides.length * this.width + "px";
            for (var a = this.slides.length; a--;) {
                var b = this.slides[a];
                b.style.width = this.width + "px",
                b.style.display = "table-cell",
                b.style.verticalAlign = "top"
            }
            this.slide(this.index, 0),
            this.container.style.visibility = "visible"
        },
        slide: function(a, b) {
            var c = this.element.style;
            c.webkitTransitionDuration = c.MozTransitionDuration = c.msTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms",
            c.webkitTransform = "translate3d(" + -(a * this.width) + "px,0,0)",
            c.msTransform = c.MozTransform = c.OTransform = "translateX(" + -(a * this.width) + "px)",
            this.index = a
        },
        getPos: function() {
            return this.index
        },
        prev: function(a) {
            this.delay = a || 0,
            clearTimeout(this.interval),
            this.index && this.slide(this.index - 1, this.speed)
        },
        next: function(a) {
            this.delay = a || 0,
            clearTimeout(this.interval),
            this.index < this.length - 1 ? this.slide(this.index + 1, this.speed) : this.slide(0, this.speed)
        },
        begin: function() {
            var a = this;
            this.interval = this.delay ? setTimeout(function() {
                a.next(a.delay)
            },
            this.delay) : 0
        },
        stop: function() {
            this.delay = 0,
            clearTimeout(this.interval)
        },
        resume: function() {
            this.delay = this.options.auto || 0,
            this.begin()
        },
        handleEvent: function(a) {
            switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a);
                break;
            case "webkitTransitionEnd":
            case "msTransitionEnd":
            case "oTransitionEnd":
            case "transitionend":
                this.transitionEnd(a);
                break;
            case "resize":
                this.setup()
            }
        },
        transitionEnd: function(a) {
            this.delay && this.begin(),
            this.callback(a, this.index, this.slides[this.index])
        },
        onTouchStart: function(a) {
            this.start = {
                pageX: a.touches[0].pageX,
                pageY: a.touches[0].pageY,
                time: Number(new Date)
            },
            this.isScrolling = void 0,
            this.deltaX = 0,
            this.element.style.webkitTransitionDuration = 0
        },
        onTouchMove: function(a) {
            a.touches.length > 1 || a.scale && 1 !== a.scale || (this.deltaX = a.touches[0].pageX - this.start.pageX, "undefined" == typeof this.isScrolling && (this.isScrolling = !!(this.isScrolling || Math.abs(this.deltaX) < Math.abs(a.touches[0].pageY - this.start.pageY))), this.isScrolling || (a.preventDefault(), clearTimeout(this.interval), this.deltaX = this.deltaX / (!this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0 ? Math.abs(this.deltaX) / this.width + 1 : 1), this.element.style.webkitTransform = "translate3d(" + (this.deltaX - this.index * this.width) + "px,0,0)"))
        },
        onTouchEnd: function() {
            var a = Number(new Date) - this.start.time < 250 && Math.abs(this.deltaX) > 20 || Math.abs(this.deltaX) > this.width / 2,
            b = !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0;
            this.isScrolling || this.slide(this.index + (a && !b ? this.deltaX < 0 ? 1 : -1 : 0), this.speed)
        }
    },
    a
}), define("txtpl", [],
function() {
    function a(a, d, e, f, g) {
        var h, i = d,
        j = [],
        g = void 0 != g ? g: !0;
        if (g && c[a]) {
            for (var k = 0,
            l = c[a].propList, m = l.length; m > k; k++) j.push(i[l[k]]);
            h = c[a].parsefn
        } else {
            var n = e,
            o = f,
            p = [],
            q = function(a) {
                n || (n = "<%", o = "%>");
                var b = document.getElementById(a),
                c = b ? b.innerHTML: a;
                return c.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").split(n).join("	").replace(/'/g, "\r").replace(new RegExp("	=(.*?)" + o, "g"), "';\n s+=$1;\n s+='").split("	").join("';\n").split(o).join("\n s+='").split("\r").join("\\'")
            } (a);
            for (var r in i) p.push(r),
            j.push(i[r]);
            h = new Function(p, "var s='';\n s+='" + q + "';\n return s"),
            g && (c[a] = {
                parsefn: h,
                propList: p
            })
        }
        try {
            return h.apply(b, j)
        } catch(s) {
            var t = "txTpl" + Date.now(),
            u = "var " + t + "=" + h.toString(),
            v = document.getElementsByTagName("head")[0],
            w = document.createElement("script"),
            x = navigator.userAgent.toLowerCase();
            if (x.indexOf("gecko") > -1 && -1 == x.indexOf("khtml")) return b.eval.call(b, u),
            void b[t].apply(b, j);
            w.innerHTML = u,
            v.appendChild(w),
            v.removeChild(w),
            b[t].apply(b, j)
        }
    }
    var b = window,
    c = {};
    return a
}), define("zepto", [],
function() { !
    function(a) {
        String.prototype.trim === a && (String.prototype.trim = function() {
            return this.replace(/^\s+/, "").replace(/\s+$/, "")
        }),
        Array.prototype.reduce === a && (Array.prototype.reduce = function(b) {
            if (void 0 === this || null === this) throw new TypeError;
            var c, d = Object(this),
            e = d.length >>> 0,
            f = 0;
            if ("function" != typeof b) throw new TypeError;
            if (0 == e && 1 == arguments.length) throw new TypeError;
            if (arguments.length >= 2) c = arguments[1];
            else for (;;) {
                if (f in d) {
                    c = d[f++];
                    break
                }
                if (++f >= e) throw new TypeError
            }
            for (; e > f;) f in d && (c = b.call(a, c, d[f], f, d)),
            f++;
            return c
        })
    } ();
    var a = function() {
        function a(a) {
            return null == a ? String(a) : U[V.call(a)] || "object"
        }
        function b(b) {
            return "function" == a(b)
        }
        function c(a) {
            return null != a && a == a.window
        }
        function d(a) {
            return null != a && a.nodeType == a.DOCUMENT_NODE
        }
        function e(b) {
            return "object" == a(b)
        }
        function f(a) {
            return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype
        }
        function g(a) {
            return "number" == typeof a.length
        }
        function h(a) {
            return D.call(a,
            function(a) {
                return null != a
            })
        }
        function i(a) {
            return a.length > 0 ? x.fn.concat.apply([], a) : a
        }
        function j(a) {
            return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }
        function k(a) {
            return a in G ? G[a] : G[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
        }
        function l(a, b) {
            return "number" != typeof b || H[j(a)] ? b: b + "px"
        }
        function m(a) {
            var b, c;
            return F[a] || (b = E.createElement(a), E.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), F[a] = c),
            F[a]
        }
        function n(a) {
            return "children" in a ? C.call(a.children) : x.map(a.childNodes,
            function(a) {
                return 1 == a.nodeType ? a: void 0
            })
        }
        function o(a, b, c) {
            for (w in b) c && (f(b[w]) || Z(b[w])) ? (f(b[w]) && !f(a[w]) && (a[w] = {}), Z(b[w]) && !Z(a[w]) && (a[w] = []), o(a[w], b[w], c)) : b[w] !== v && (a[w] = b[w])
        }
        function p(a, b) {
            return null == b ? x(a) : x(a).filter(b)
        }
        function q(a, c, d, e) {
            return b(c) ? c.call(a, d, e) : c
        }
        function r(a, b, c) {
            null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
        }
        function s(a, b) {
            var c = a.className || "",
            d = c && c.baseVal !== v;
            return b === v ? d ? c.baseVal: c: void(d ? c.baseVal = b: a.className = b)
        }
        function t(a) {
            var b;
            try {
                return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null: /^0/.test(a) || isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? x.parseJSON(a) : a: b) : a
            } catch(c) {
                return a
            }
        }
        function u(a, b) {
            b(a);
            for (var c = 0,
            d = a.childNodes.length; d > c; c++) u(a.childNodes[c], b)
        }
        var v, w, x, y, z, A, B = [],
        C = B.slice,
        D = B.filter,
        E = window.document,
        F = {},
        G = {},
        H = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        I = /^\s*<(\w+|!)[^>]*>/,
        J = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        L = /^(?:body|html)$/i,
        M = /([A-Z])/g,
        N = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        O = ["after", "prepend", "before", "append"],
        P = E.createElement("table"),
        Q = E.createElement("tr"),
        R = {
            tr: E.createElement("tbody"),
            tbody: P,
            thead: P,
            tfoot: P,
            td: Q,
            th: Q,
            "*": E.createElement("div")
        },
        S = /complete|loaded|interactive/,
        T = /^[\w-]*$/,
        U = {},
        V = U.toString,
        W = {},
        X = E.createElement("div"),
        Y = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        Z = Array.isArray ||
        function(a) {
            return a instanceof Array
        };
        return W.matches = function(a, b) {
            if (!b || !a || 1 !== a.nodeType) return ! 1;
            var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
            if (c) return c.call(a, b);
            var d, e = a.parentNode,
            f = !e;
            return f && (e = X).appendChild(a),
            d = ~W.qsa(e, b).indexOf(a),
            f && X.removeChild(a),
            d
        },
        z = function(a) {
            return a.replace(/-+(.)?/g,
            function(a, b) {
                return b ? b.toUpperCase() : ""
            })
        },
        A = function(a) {
            return D.call(a,
            function(b, c) {
                return a.indexOf(b) == c
            })
        },
        W.fragment = function(a, b, c) {
            var d, e, g;
            return J.test(a) && (d = x(E.createElement(RegExp.$1))),
            d || (a.replace && (a = a.replace(K, "<$1></$2>")), b === v && (b = I.test(a) && RegExp.$1), b in R || (b = "*"), g = R[b], g.innerHTML = "" + a, d = x.each(C.call(g.childNodes),
            function() {
                g.removeChild(this)
            })),
            f(c) && (e = x(d), x.each(c,
            function(a, b) {
                N.indexOf(a) > -1 ? e[a](b) : e.attr(a, b)
            })),
            d
        },
        W.Z = function(a, b) {
            return a = a || [],
            a.__proto__ = x.fn,
            a.selector = b || "",
            a
        },
        W.isZ = function(a) {
            return a instanceof W.Z
        },
        W.init = function(a, c) {
            var d;
            if (!a) return W.Z();
            if ("string" == typeof a) if (a = a.trim(), "<" == a[0] && I.test(a)) d = W.fragment(a, RegExp.$1, c),
            a = null;
            else {
                if (c !== v) return x(c).find(a);
                d = W.qsa(E, a)
            } else {
                if (b(a)) return x(E).ready(a);
                if (W.isZ(a)) return a;
                if (Z(a)) d = h(a);
                else if (e(a)) d = [a],
                a = null;
                else if (I.test(a)) d = W.fragment(a.trim(), RegExp.$1, c),
                a = null;
                else {
                    if (c !== v) return x(c).find(a);
                    d = W.qsa(E, a)
                }
            }
            return W.Z(d, a)
        },
        x = function(a, b) {
            return W.init(a, b)
        },
        x.extend = function(a) {
            var b, c = C.call(arguments, 1);
            return "boolean" == typeof a && (b = a, a = c.shift()),
            c.forEach(function(c) {
                o(a, c, b)
            }),
            a
        },
        W.qsa = function(a, b) {
            var c, e = "#" == b[0],
            f = !e && "." == b[0],
            g = e || f ? b.slice(1) : b,
            h = T.test(g);
            return d(a) && h && e ? (c = a.getElementById(g)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : C.call(h && !e ? f ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b))
        },
        x.contains = E.documentElement.contains ?
        function(a, b) {
            return a !== b && a.contains(b)
        }: function(a, b) {
            for (; b && (b = b.parentNode);) if (b === a) return ! 0;
            return ! 1
        },
        x.type = a,
        x.isFunction = b,
        x.isWindow = c,
        x.isArray = Z,
        x.isPlainObject = f,
        x.isEmptyObject = function(a) {
            var b;
            for (b in a) return ! 1;
            return ! 0
        },
        x.inArray = function(a, b, c) {
            return B.indexOf.call(b, a, c)
        },
        x.camelCase = z,
        x.trim = function(a) {
            return null == a ? "": String.prototype.trim.call(a)
        },
        x.uuid = 0,
        x.support = {},
        x.expr = {},
        x.map = function(a, b) {
            var c, d, e, f = [];
            if (g(a)) for (d = 0; d < a.length; d++) c = b(a[d], d),
            null != c && f.push(c);
            else for (e in a) c = b(a[e], e),
            null != c && f.push(c);
            return i(f)
        },
        x.each = function(a, b) {
            var c, d;
            if (g(a)) {
                for (c = 0; c < a.length; c++) if (b.call(a[c], c, a[c]) === !1) return a
            } else for (d in a) if (b.call(a[d], d, a[d]) === !1) return a;
            return a
        },
        x.grep = function(a, b) {
            return D.call(a, b)
        },
        window.JSON && (x.parseJSON = JSON.parse),
        x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(a, b) {
            U["[object " + b + "]"] = b.toLowerCase()
        }),
        x.fn = {
            forEach: B.forEach,
            reduce: B.reduce,
            push: B.push,
            sort: B.sort,
            indexOf: B.indexOf,
            concat: B.concat,
            map: function(a) {
                return x(x.map(this,
                function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return x(C.apply(this, arguments))
            },
            ready: function(a) {
                return S.test(E.readyState) && E.body ? a(x) : E.addEventListener("DOMContentLoaded",
                function() {
                    a(x)
                },
                !1),
                this
            },
            get: function(a) {
                return a === v ? C.call(this) : this[a >= 0 ? a: a + this.length]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function(a) {
                return B.every.call(this,
                function(b, c) {
                    return a.call(b, c, b) !== !1
                }),
                this
            },
            filter: function(a) {
                return b(a) ? this.not(this.not(a)) : x(D.call(this,
                function(b) {
                    return W.matches(b, a)
                }))
            },
            add: function(a, b) {
                return x(A(this.concat(x(a, b))))
            },
            is: function(a) {
                return this.length > 0 && W.matches(this[0], a)
            },
            not: function(a) {
                var c = [];
                if (b(a) && a.call !== v) this.each(function(b) {
                    a.call(this, b) || c.push(this)
                });
                else {
                    var d = "string" == typeof a ? this.filter(a) : g(a) && b(a.item) ? C.call(a) : x(a);
                    this.forEach(function(a) {
                        d.indexOf(a) < 0 && c.push(a)
                    })
                }
                return x(c)
            },
            has: function(a) {
                return this.filter(function() {
                    return e(a) ? x.contains(this, a) : x(this).find(a).size()
                })
            },
            eq: function(a) {
                return - 1 === a ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function() {
                var a = this[0];
                return a && !e(a) ? a: x(a)
            },
            last: function() {
                var a = this[this.length - 1];
                return a && !e(a) ? a: x(a)
            },
            find: function(a) {
                var b, c = this;
                return b = a ? "object" == typeof a ? x(a).filter(function() {
                    var a = this;
                    return B.some.call(c,
                    function(b) {
                        return x.contains(b, a)
                    })
                }) : 1 == this.length ? x(W.qsa(this[0], a)) : this.map(function() {
                    return W.qsa(this, a)
                }) : []
            },
            closest: function(a, b) {
                var c = this[0],
                e = !1;
                for ("object" == typeof a && (e = x(a)); c && !(e ? e.indexOf(c) >= 0 : W.matches(c, a));) c = c !== b && !d(c) && c.parentNode;
                return x(c)
            },
            parents: function(a) {
                for (var b = [], c = this; c.length > 0;) c = x.map(c,
                function(a) {
                    return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0
                });
                return p(b, a)
            },
            parent: function(a) {
                return p(A(this.pluck("parentNode")), a)
            },
            children: function(a) {
                return p(this.map(function() {
                    return n(this)
                }), a)
            },
            contents: function() {
                return this.map(function() {
                    return C.call(this.childNodes)
                })
            },
            siblings: function(a) {
                return p(this.map(function(a, b) {
                    return D.call(n(b.parentNode),
                    function(a) {
                        return a !== b
                    })
                }), a)
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = ""
                })
            },
            pluck: function(a) {
                return x.map(this,
                function(b) {
                    return b[a]
                })
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = ""),
                    "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName))
                })
            },
            replaceWith: function(a) {
                return this.before(a).remove()
            },
            wrap: function(a) {
                var c = b(a);
                if (this[0] && !c) var d = x(a).get(0),
                e = d.parentNode || this.length > 1;
                return this.each(function(b) {
                    x(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
                })
            },
            wrapAll: function(a) {
                if (this[0]) {
                    x(this[0]).before(a = x(a));
                    for (var b; (b = a.children()).length;) a = b.first();
                    x(a).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                var c = b(a);
                return this.each(function(b) {
                    var d = x(this),
                    e = d.contents(),
                    f = c ? a.call(this, b) : a;
                    e.length ? e.wrapAll(f) : d.append(f)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    x(this).replaceWith(x(this).children())
                }),
                this
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0)
                })
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(a) {
                return this.each(function() {
                    var b = x(this); (a === v ? "none" == b.css("display") : a) ? b.show() : b.hide()
                })
            },
            prev: function(a) {
                return x(this.pluck("previousElementSibling")).filter(a || "*")
            },
            next: function(a) {
                return x(this.pluck("nextElementSibling")).filter(a || "*")
            },
            html: function(a) {
                return 0 in arguments ? this.each(function(b) {
                    var c = this.innerHTML;
                    x(this).empty().append(q(this, a, b, c))
                }) : 0 in this ? this[0].innerHTML: null
            },
            text: function(a) {
                return 0 in arguments ? this.each(function(b) {
                    var c = q(this, a, b, this.textContent);
                    this.textContent = null == c ? "": "" + c
                }) : 0 in this ? this[0].textContent: null
            },
            attr: function(a, b) {
                var c;
                return "string" != typeof a || 1 in arguments ? this.each(function(c) {
                    if (1 === this.nodeType) if (e(a)) for (w in a) r(this, w, a[w]);
                    else r(this, a, q(this, b, c, this.getAttribute(a)))
                }) : this.length && 1 === this[0].nodeType ? !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c: v
            },
            removeAttr: function(a) {
                return this.each(function() {
                    1 === this.nodeType && r(this, a)
                })
            },
            prop: function(a, b) {
                return a = Y[a] || a,
                1 in arguments ? this.each(function(c) {
                    this[a] = q(this, b, c, this[a])
                }) : this[0] && this[0][a]
            },
            data: function(a, b) {
                var c = "data-" + a.replace(M, "-$1").toLowerCase(),
                d = 1 in arguments ? this.attr(c, b) : this.attr(c);
                return null !== d ? t(d) : v
            },
            val: function(a) {
                return 0 in arguments ? this.each(function(b) {
                    this.value = q(this, a, b, this.value)
                }) : this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function(a) {
                if (a) return this.each(function(b) {
                    var c = x(this),
                    d = q(this, a, b, c.offset()),
                    e = c.offsetParent().offset(),
                    f = {
                        top: d.top - e.top,
                        left: d.left - e.left
                    };
                    "static" == c.css("position") && (f.position = "relative"),
                    c.css(f)
                });
                if (!this.length) return null;
                var b = this[0].getBoundingClientRect();
                return {
                    left: b.left + window.pageXOffset,
                    top: b.top + window.pageYOffset,
                    width: Math.round(b.width),
                    height: Math.round(b.height)
                }
            },
            css: function(b, c) {
                if (arguments.length < 2) {
                    var d = this[0],
                    e = getComputedStyle(d, "");
                    if (!d) return;
                    if ("string" == typeof b) return d.style[z(b)] || e.getPropertyValue(b);
                    if (Z(b)) {
                        var f = {};
                        return x.each(b,
                        function(a, b) {
                            f[b] = d.style[z(b)] || e.getPropertyValue(b)
                        }),
                        f
                    }
                }
                var g = "";
                if ("string" == a(b)) c || 0 === c ? g = j(b) + ":" + l(b, c) : this.each(function() {
                    this.style.removeProperty(j(b))
                });
                else for (w in b) b[w] || 0 === b[w] ? g += j(w) + ":" + l(w, b[w]) + ";": this.each(function() {
                    this.style.removeProperty(j(w))
                });
                return this.each(function() {
                    this.style.cssText += ";" + g
                })
            },
            index: function(a) {
                return a ? this.indexOf(x(a)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(a) {
                return a ? B.some.call(this,
                function(a) {
                    return this.test(s(a))
                },
                k(a)) : !1
            },
            addClass: function(a) {
                return a ? this.each(function(b) {
                    if ("className" in this) {
                        y = [];
                        var c = s(this),
                        d = q(this, a, b, c);
                        d.split(/\s+/g).forEach(function(a) {
                            x(this).hasClass(a) || y.push(a)
                        },
                        this),
                        y.length && s(this, c + (c ? " ": "") + y.join(" "))
                    }
                }) : this
            },
            removeClass: function(a) {
                return this.each(function(b) {
                    if ("className" in this) {
                        if (a === v) return s(this, "");
                        y = s(this),
                        q(this, a, b, y).split(/\s+/g).forEach(function(a) {
                            y = y.replace(k(a), " ")
                        }),
                        s(this, y.trim())
                    }
                })
            },
            toggleClass: function(a, b) {
                return a ? this.each(function(c) {
                    var d = x(this),
                    e = q(this, a, c, s(this));
                    e.split(/\s+/g).forEach(function(a) { (b === v ? !d.hasClass(a) : b) ? d.addClass(a) : d.removeClass(a)
                    })
                }) : this
            },
            scrollTop: function(a) {
                if (this.length) {
                    var b = "scrollTop" in this[0];
                    return a === v ? b ? this[0].scrollTop: this[0].pageYOffset: this.each(b ?
                    function() {
                        this.scrollTop = a
                    }: function() {
                        this.scrollTo(this.scrollX, a)
                    })
                }
            },
            scrollLeft: function(a) {
                if (this.length) {
                    var b = "scrollLeft" in this[0];
                    return a === v ? b ? this[0].scrollLeft: this[0].pageXOffset: this.each(b ?
                    function() {
                        this.scrollLeft = a
                    }: function() {
                        this.scrollTo(a, this.scrollY);

                    })
                }
            },
            position: function() {
                if (this.length) {
                    var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = L.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    }: b.offset();
                    return c.top -= parseFloat(x(a).css("margin-top")) || 0,
                    c.left -= parseFloat(x(a).css("margin-left")) || 0,
                    d.top += parseFloat(x(b[0]).css("border-top-width")) || 0,
                    d.left += parseFloat(x(b[0]).css("border-left-width")) || 0,
                    {
                        top: c.top - d.top,
                        left: c.left - d.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || E.body; a && !L.test(a.nodeName) && "static" == x(a).css("position");) a = a.offsetParent;
                    return a
                })
            }
        },
        x.fn.detach = x.fn.remove,
        ["width", "height"].forEach(function(a) {
            var b = a.replace(/./,
            function(a) {
                return a[0].toUpperCase()
            });
            x.fn[a] = function(e) {
                var f, g = this[0];
                return e === v ? c(g) ? g["inner" + b] : d(g) ? g.documentElement["scroll" + b] : (f = this.offset()) && f[a] : this.each(function(b) {
                    g = x(this),
                    g.css(a, q(this, e, b, g[a]()))
                })
            }
        }),
        O.forEach(function(b, c) {
            var d = c % 2;
            x.fn[b] = function() {
                var b, e, f = x.map(arguments,
                function(c) {
                    return b = a(c),
                    "object" == b || "array" == b || null == c ? c: W.fragment(c)
                }),
                g = this.length > 1;
                return f.length < 1 ? this: this.each(function(a, b) {
                    e = d ? b: b.parentNode,
                    b = 0 == c ? b.nextSibling: 1 == c ? b.firstChild: 2 == c ? b: null;
                    var h = x.contains(E.documentElement, e);
                    f.forEach(function(a) {
                        if (g) a = a.cloneNode(!0);
                        else if (!e) return x(a).remove();
                        e.insertBefore(a, b),
                        h && u(a,
                        function(a) {
                            null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
                        })
                    })
                })
            },
            x.fn[d ? b + "To": "insert" + (c ? "Before": "After")] = function(a) {
                return x(a)[b](this),
                this
            }
        }),
        W.Z.prototype = x.fn,
        W.uniq = A,
        W.deserializeValue = t,
        x.zepto = W,
        x
    } ();
    return window.Zepto = a,
    void 0 === window.$ && (window.$ = a),
    function(a) {
        function b(a) {
            return a._zid || (a._zid = m++)
        }
        function c(a, c, f, g) {
            if (c = d(c), c.ns) var h = e(c.ns);
            return (q[b(a)] || []).filter(function(a) {
                return ! (!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g)
            })
        }
        function d(a) {
            var b = ("" + a).split(".");
            return {
                e: b[0],
                ns: b.slice(1).sort().join(" ")
            }
        }
        function e(a) {
            return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
        }
        function f(a, b) {
            return a.del && !s && a.e in t || !!b
        }
        function g(a) {
            return u[a] || s && t[a] || a
        }
        function h(c, e, h, i, k, m, n) {
            var o = b(c),
            p = q[o] || (q[o] = []);
            e.split(/\s/).forEach(function(b) {
                if ("ready" == b) return a(document).ready(h);
                var e = d(b);
                e.fn = h,
                e.sel = k,
                e.e in u && (h = function(b) {
                    var c = b.relatedTarget;
                    return ! c || c !== this && !a.contains(this, c) ? e.fn.apply(this, arguments) : void 0
                }),
                e.del = m;
                var o = m || h;
                e.proxy = function(a) {
                    if (a = j(a), !a.isImmediatePropagationStopped()) {
                        a.data = i;
                        var b = o.apply(c, a._args == l ? [a] : [a].concat(a._args));
                        return b === !1 && (a.preventDefault(), a.stopPropagation()),
                        b
                    }
                },
                e.i = p.length,
                p.push(e),
                "addEventListener" in c && c.addEventListener(g(e.e), e.proxy, f(e, n))
            })
        }
        function i(a, d, e, h, i) {
            var j = b(a); (d || "").split(/\s/).forEach(function(b) {
                c(a, b, e, h).forEach(function(b) {
                    delete q[j][b.i],
                    "removeEventListener" in a && a.removeEventListener(g(b.e), b.proxy, f(b, i))
                })
            })
        }
        function j(b, c) {
            return (c || !b.isDefaultPrevented) && (c || (c = b), a.each(y,
            function(a, d) {
                var e = c[a];
                b[a] = function() {
                    return this[d] = v,
                    e && e.apply(c, arguments)
                },
                b[d] = w
            }), (c.defaultPrevented !== l ? c.defaultPrevented: "returnValue" in c ? c.returnValue === !1 : c.getPreventDefault && c.getPreventDefault()) && (b.isDefaultPrevented = v)),
            b
        }
        function k(a) {
            var b, c = {
                originalEvent: a
            };
            for (b in a) x.test(b) || a[b] === l || (c[b] = a[b]);
            return j(c, a)
        }
        var l, m = 1,
        n = Array.prototype.slice,
        o = a.isFunction,
        p = function(a) {
            return "string" == typeof a
        },
        q = {},
        r = {},
        s = "onfocusin" in window,
        t = {
            focus: "focusin",
            blur: "focusout"
        },
        u = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents",
        a.event = {
            add: h,
            remove: i
        },
        a.proxy = function(c, d) {
            var e = 2 in arguments && n.call(arguments, 2);
            if (o(c)) {
                var f = function() {
                    return c.apply(d, e ? e.concat(n.call(arguments)) : arguments)
                };
                return f._zid = b(c),
                f
            }
            if (p(d)) return e ? (e.unshift(c[d], c), a.proxy.apply(null, e)) : a.proxy(c[d], c);
            throw new TypeError("expected function")
        },
        a.fn.bind = function(a, b, c) {
            return this.on(a, b, c)
        },
        a.fn.unbind = function(a, b) {
            return this.off(a, b)
        },
        a.fn.one = function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        };
        var v = function() {
            return ! 0
        },
        w = function() {
            return ! 1
        },
        x = /^([A-Z]|returnValue$|layer[XY]$)/,
        y = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        a.fn.delegate = function(a, b, c) {
            return this.on(b, a, c)
        },
        a.fn.undelegate = function(a, b, c) {
            return this.off(b, a, c)
        },
        a.fn.live = function(b, c) {
            return a(document.body).delegate(this.selector, b, c),
            this
        },
        a.fn.die = function(b, c) {
            return a(document.body).undelegate(this.selector, b, c),
            this
        },
        a.fn.on = function(b, c, d, e, f) {
            var g, j, m = this;
            return b && !p(b) ? (a.each(b,
            function(a, b) {
                m.on(a, c, d, b, f)
            }), m) : (p(c) || o(e) || e === !1 || (e = d, d = c, c = l), (o(d) || d === !1) && (e = d, d = l), e === !1 && (e = w), m.each(function(l, m) {
                f && (g = function(a) {
                    return i(m, a.type, e),
                    e.apply(this, arguments)
                }),
                c && (j = function(b) {
                    var d, f = a(b.target).closest(c, m).get(0);
                    return f && f !== m ? (d = a.extend(k(b), {
                        currentTarget: f,
                        liveFired: m
                    }), (g || e).apply(f, [d].concat(n.call(arguments, 1)))) : void 0
                }),
                h(m, b, e, d, c, j || g)
            }))
        },
        a.fn.off = function(b, c, d) {
            var e = this;
            return b && !p(b) ? (a.each(b,
            function(a, b) {
                e.off(a, c, b)
            }), e) : (p(c) || o(d) || d === !1 || (d = c, c = l), d === !1 && (d = w), e.each(function() {
                i(this, b, d, c)
            }))
        },
        a.fn.trigger = function(b, c) {
            return b = p(b) || a.isPlainObject(b) ? a.Event(b) : j(b),
            b._args = c,
            this.each(function() {
                "dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c)
            })
        },
        a.fn.triggerHandler = function(b, d) {
            var e, f;
            return this.each(function(g, h) {
                e = k(p(b) ? a.Event(b) : b),
                e._args = d,
                e.target = h,
                a.each(c(h, b.type || b),
                function(a, b) {
                    return f = b.proxy(e),
                    e.isImmediatePropagationStopped() ? !1 : void 0
                })
            }),
            f
        },
        "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
            a.fn[b] = function(a) {
                return a ? this.bind(b, a) : this.trigger(b)
            }
        }),
        ["focus", "blur"].forEach(function(b) {
            a.fn[b] = function(a) {
                return a ? this.bind(b, a) : this.each(function() {
                    try {
                        this[b]()
                    } catch(a) {}
                }),
                this
            }
        }),
        a.Event = function(a, b) {
            p(a) || (b = a, a = b.type);
            var c = document.createEvent(r[a] || "Events"),
            d = !0;
            if (b) for (var e in b)"bubbles" == e ? d = !!b[e] : c[e] = b[e];
            return c.initEvent(a, d, !0),
            j(c)
        }
    } (a),
    function(a) {
        function b(b, c, d) {
            var e = a.Event(c);
            return a(b).trigger(e, d),
            !e.isDefaultPrevented()
        }
        function c(a, c, d, e) {
            return a.global ? b(c || s, d, e) : void 0
        }
        function d(b) {
            b.global && 0 === a.active++&&c(b, null, "ajaxStart")
        }
        function e(b) {
            b.global && !--a.active && c(b, null, "ajaxStop")
        }
        function f(a, b) {
            var d = b.context;
            return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", [a, b]) === !1 ? !1 : void c(b, d, "ajaxSend", [a, b])
        }
        function g(a, b, d, e) {
            var f = d.context,
            g = "success";
            d.success.call(f, a, g, b),
            e && e.resolveWith(f, [a, g, b]),
            c(d, f, "ajaxSuccess", [b, d, a]),
            i(g, b, d)
        }
        function h(a, b, d, e, f) {
            var g = e.context;
            e.error.call(g, d, b, a),
            f && f.rejectWith(g, [d, b, a]),
            c(e, g, "ajaxError", [d, e, a || b]),
            i(b, d, e)
        }
        function i(a, b, d) {
            var f = d.context;
            d.complete.call(f, b, a),
            c(d, f, "ajaxComplete", [b, d]),
            e(d)
        }
        function j() {}
        function k(a) {
            return a && (a = a.split(";", 2)[0]),
            a && (a == x ? "html": a == w ? "json": u.test(a) ? "script": v.test(a) && "xml") || "text"
        }
        function l(a, b) {
            return "" == b ? a: (a + "&" + b).replace(/[&?]{1,2}/, "?")
        }
        function m(b) {
            b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)),
            !b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data), b.data = void 0)
        }
        function n(b, c, d, e) {
            return a.isFunction(c) && (e = d, d = c, c = void 0),
            a.isFunction(d) || (e = d, d = void 0),
            {
                url: b,
                data: c,
                success: d,
                dataType: e
            }
        }
        function o(b, c, d, e) {
            var f, g = a.isArray(c),
            h = a.isPlainObject(c);
            a.each(c,
            function(c, i) {
                f = a.type(i),
                e && (c = d ? e: e + "[" + (h || "object" == f || "array" == f ? c: "") + "]"),
                !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? o(b, i, d, c) : b.add(c, i)
            })
        }
        var p, q, r = 0,
        s = window.document,
        t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        u = /^(?:text|application)\/javascript/i,
        v = /^(?:text|application)\/xml/i,
        w = "application/json",
        x = "text/html",
        y = /^\s*$/;
        a.active = 0,
        a.ajaxJSONP = function(b, c) {
            if (! ("type" in b)) return a.ajax(b);
            var d, e, i = b.jsonpCallback,
            j = (a.isFunction(i) ? i() : i) || "jsonp" + ++r,
            k = s.createElement("script"),
            l = window[j],
            m = function(b) {
                a(k).triggerHandler("error", b || "abort")
            },
            n = {
                abort: m
            };
            return c && c.promise(n),
            a(k).on("load error",
            function(f, i) {
                clearTimeout(e),
                a(k).off().remove(),
                "error" != f.type && d ? g(d[0], n, b, c) : h(null, i || "error", n, b, c),
                window[j] = l,
                d && a.isFunction(l) && l(d[0]),
                l = d = void 0
            }),
            f(n, b) === !1 ? (m("abort"), n) : (window[j] = function() {
                d = arguments
            },
            k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + j), s.head.appendChild(k), b.timeout > 0 && (e = setTimeout(function() {
                m("timeout")
            },
            b.timeout)), n)
        },
        a.ajaxSettings = {
            type: "GET",
            beforeSend: j,
            success: j,
            error: j,
            complete: j,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: w,
                xml: "application/xml, text/xml",
                html: x,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        },
        a.ajax = function(b) {
            var c = a.extend({},
            b || {}),
            e = a.Deferred && a.Deferred();
            for (p in a.ajaxSettings) void 0 === c[p] && (c[p] = a.ajaxSettings[p]);
            d(c),
            c.crossDomain || (c.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(c.url) && RegExp.$2 != window.location.host),
            c.url || (c.url = window.location.toString()),
            m(c);
            var i = c.dataType,
            n = /\?.+=\?/.test(c.url);
            if (n && (i = "jsonp"), c.cache !== !1 && (b && b.cache === !0 || "script" != i && "jsonp" != i) || (c.url = l(c.url, "_=" + Date.now())), "jsonp" == i) return n || (c.url = l(c.url, c.jsonp ? c.jsonp + "=?": c.jsonp === !1 ? "": "callback=?")),
            a.ajaxJSONP(c, e);
            var o, r = c.accepts[i],
            s = {},
            t = function(a, b) {
                s[a.toLowerCase()] = [a, b]
            },
            u = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1: window.location.protocol,
            v = c.xhr(),
            w = v.setRequestHeader;
            if (e && e.promise(v), c.crossDomain || t("X-Requested-With", "XMLHttpRequest"), t("Accept", r || "*/*"), (r = c.mimeType || r) && (r.indexOf(",") > -1 && (r = r.split(",", 2)[0]), v.overrideMimeType && v.overrideMimeType(r)), (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && t("Content-Type", c.contentType || "application/x-www-form-urlencoded"), c.headers) for (q in c.headers) t(q, c.headers[q]);
            if (v.setRequestHeader = t, v.onreadystatechange = function() {
                if (4 == v.readyState) {
                    v.onreadystatechange = j,
                    clearTimeout(o);
                    var b, d = !1;
                    if (v.status >= 200 && v.status < 300 || 304 == v.status || 0 == v.status && "file:" == u) {
                        i = i || k(c.mimeType || v.getResponseHeader("content-type")),
                        b = v.responseText;
                        try {
                            "script" == i ? (1, eval)(b) : "xml" == i ? b = v.responseXML: "json" == i && (b = y.test(b) ? null: a.parseJSON(b))
                        } catch(f) {
                            d = f
                        }
                        d ? h(d, "parsererror", v, c, e) : g(b, v, c, e)
                    } else h(v.statusText || null, v.status ? "error": "abort", v, c, e)
                }
            },
            f(v, c) === !1) return v.abort(),
            h(null, "abort", v, c, e),
            v;
            if (c.xhrFields) for (q in c.xhrFields) v[q] = c.xhrFields[q];
            var x = "async" in c ? c.async: !0;
            v.open(c.type, c.url, x, c.username, c.password);
            for (q in s) w.apply(v, s[q]);
            return c.timeout > 0 && (o = setTimeout(function() {
                v.onreadystatechange = j,
                v.abort(),
                h(null, "timeout", v, c, e)
            },
            c.timeout)),
            v.send(c.data ? c.data: null),
            v
        },
        a.get = function() {
            return a.ajax(n.apply(null, arguments))
        },
        a.post = function() {
            var b = n.apply(null, arguments);
            return b.type = "POST",
            a.ajax(b)
        },
        a.getJSON = function() {
            var b = n.apply(null, arguments);
            return b.dataType = "json",
            a.ajax(b)
        },
        a.fn.load = function(b, c, d) {
            if (!this.length) return this;
            var e, f = this,
            g = b.split(/\s/),
            h = n(b, c, d),
            i = h.success;
            return g.length > 1 && (h.url = g[0], e = g[1]),
            h.success = function(b) {
                f.html(e ? a("<div>").html(b.replace(t, "")).find(e) : b),
                i && i.apply(f, arguments)
            },
            a.ajax(h),
            this
        };
        var z = encodeURIComponent;
        a.param = function(a, b) {
            var c = [];
            return c.add = function(a, b) {
                this.push(z(a) + "=" + z(b))
            },
            o(c, a, b),
            c.join("&").replace(/%20/g, "+")
        }
    } (a),
    function(a) {
        function b(a) {
            var b = this.os = {},
            c = this.browser = {},
            d = a.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
            e = a.match(/(Android);?[\s\/]+([\d.]+)?/),
            f = !!a.match(/\(Macintosh\; Intel /),
            g = a.match(/(iPad).*OS\s([\d_]+)/),
            h = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            i = !g && a.match(/(iPhone\sOS)\s([\d_]+)/),
            j = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
            k = a.match(/Windows Phone ([\d.]+)/),
            l = j && a.match(/TouchPad/),
            m = a.match(/Kindle\/([\d.]+)/),
            n = a.match(/Silk\/([\d._]+)/),
            o = a.match(/(BlackBerry).*Version\/([\d.]+)/),
            p = a.match(/(BB10).*Version\/([\d.]+)/),
            q = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
            r = a.match(/PlayBook/),
            s = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/),
            t = a.match(/Firefox\/([\d.]+)/),
            u = a.match(/MSIE\s([\d.]+)/) || a.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
            v = !s && a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
            w = v || a.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/); (c.webkit = !!d) && (c.version = d[1]),
            e && (b.android = !0, b.version = e[2]),
            i && !h && (b.ios = b.iphone = !0, b.version = i[2].replace(/_/g, ".")),
            g && (b.ios = b.ipad = !0, b.version = g[2].replace(/_/g, ".")),
            h && (b.ios = b.ipod = !0, b.version = h[3] ? h[3].replace(/_/g, ".") : null),
            k && (b.wp = !0, b.version = k[1]),
            j && (b.webos = !0, b.version = j[2]),
            l && (b.touchpad = !0),
            o && (b.blackberry = !0, b.version = o[2]),
            p && (b.bb10 = !0, b.version = p[2]),
            q && (b.rimtabletos = !0, b.version = q[2]),
            r && (c.playbook = !0),
            m && (b.kindle = !0, b.version = m[1]),
            n && (c.silk = !0, c.version = n[1]),
            !n && b.android && a.match(/Kindle Fire/) && (c.silk = !0),
            s && (c.chrome = !0, c.version = s[1]),
            t && (c.firefox = !0, c.version = t[1]),
            u && (c.ie = !0, c.version = u[1]),
            w && (f || b.ios) && (c.safari = !0, f && (c.version = w[1])),
            v && (c.webview = !0),
            b.tablet = !!(g || r || e && !a.match(/Mobile/) || t && a.match(/Tablet/) || u && !a.match(/Phone/) && a.match(/Touch/)),
            b.phone = !(b.tablet || b.ipod || !(e || i || j || o || p || s && a.match(/Android/) || s && a.match(/CriOS\/([\d.]+)/) || t && a.match(/Mobile/) || u && a.match(/Touch/)))
        }
        b.call(a, navigator.userAgent),
        a.__detect = b
    } (a),
    function(a) {
        function b(b, d) {
            var i = b[h],
            j = i && e[i];
            if (void 0 === d) return j || c(b);
            if (j) {
                if (d in j) return j[d];
                var k = g(d);
                if (k in j) return j[k]
            }
            return f.call(a(b), d)
        }
        function c(b, c, f) {
            var i = b[h] || (b[h] = ++a.uuid),
            j = e[i] || (e[i] = d(b));
            return void 0 !== c && (j[g(c)] = f),
            j
        }
        function d(b) {
            var c = {};
            return a.each(b.attributes || i,
            function(b, d) {
                0 == d.name.indexOf("data-") && (c[g(d.name.replace("data-", ""))] = a.zepto.deserializeValue(d.value))
            }),
            c
        }
        var e = {},
        f = a.fn.data,
        g = a.camelCase,
        h = a.expando = "Zepto" + +new Date,
        i = [];
        a.fn.data = function(d, e) {
            return void 0 === e ? a.isPlainObject(d) ? this.each(function(b, e) {
                a.each(d,
                function(a, b) {
                    c(e, a, b)
                })
            }) : 0 in this ? b(this[0], d) : void 0 : this.each(function() {
                c(this, d, e)
            })
        },
        a.fn.removeData = function(b) {
            return "string" == typeof b && (b = b.split(/\s+/)),
            this.each(function() {
                var c = this[h],
                d = c && e[c];
                d && a.each(b || d,
                function(a) {
                    delete d[b ? g(this) : a]
                })
            })
        },
        ["remove", "empty"].forEach(function(b) {
            var c = a.fn[b];
            a.fn[b] = function() {
                var a = this.find("*");
                return "remove" === b && (a = a.add(this)),
                a.removeData(),
                c.call(this)
            }
        })
    } (a),
    function(a) {
        function b(a, b, c, d) {
            return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left": "Right": c - d > 0 ? "Up": "Down"
        }
        function c() {
            k = null,
            m.last && (m.el.trigger("longTap"), m = {})
        }
        function d() {
            k && clearTimeout(k),
            k = null
        }
        function e() {
            h && clearTimeout(h),
            i && clearTimeout(i),
            j && clearTimeout(j),
            k && clearTimeout(k),
            h = i = j = k = null,
            m = {}
        }
        function f(a) {
            return ("touch" == a.pointerType || a.pointerType == a.MSPOINTER_TYPE_TOUCH) && a.isPrimary
        }
        function g(a, b) {
            return a.type == "pointer" + b || a.type.toLowerCase() == "mspointer" + b
        }
        var h, i, j, k, l, m = {},
        n = 750;
        a(document).ready(function() {
            var o, p, q, r, s = 0,
            t = 0;
            "MSGesture" in window && (l = new MSGesture, l.target = document.body),
            a(document).bind("MSGestureEnd",
            function(a) {
                var b = a.velocityX > 1 ? "Right": a.velocityX < -1 ? "Left": a.velocityY > 1 ? "Down": a.velocityY < -1 ? "Up": null;
                b && (m.el.trigger("swipe"), m.el.trigger("swipe" + b))
            }).on("touchstart MSPointerDown pointerdown",
            function(b) { (!(r = g(b, "down")) || f(b)) && (q = r ? b: b.touches[0], b.touches && 1 === b.touches.length && m.x2 && (m.x2 = void 0, m.y2 = void 0), o = Date.now(), p = o - (m.last || o), m.el = a("tagName" in q.target ? q.target: q.target.parentNode), h && clearTimeout(h), m.x1 = q.pageX, m.y1 = q.pageY, p > 0 && 250 >= p && (m.isDoubleTap = !0), m.last = o, k = setTimeout(c, n), l && r && l.addPointer(b.pointerId))
            }).on("touchmove MSPointerMove pointermove",
            function(a) { (!(r = g(a, "move")) || f(a)) && (q = r ? a: a.touches[0], d(), m.x2 = q.pageX, m.y2 = q.pageY, s += Math.abs(m.x1 - m.x2), t += Math.abs(m.y1 - m.y2))
            }).on("touchend MSPointerUp pointerup",
            function(c) { (!(r = g(c, "up")) || f(c)) && (d(), m.x2 && Math.abs(m.x1 - m.x2) > 30 || m.y2 && Math.abs(m.y1 - m.y2) > 30 ? j = setTimeout(function() {
                    m.el.trigger("swipe"),
                    m.el.trigger("swipe" + b(m.x1, m.x2, m.y1, m.y2)),
                    m = {}
                },
                0) : "last" in m && (30 > s && 30 > t ? i = setTimeout(function() {
                    var b = a.Event("tap");
                    b.cancelTouch = e,
                    m.el.trigger(b),
                    m.isDoubleTap ? (m.el && m.el.trigger("doubleTap"), m = {}) : h = setTimeout(function() {
                        h = null,
                        m.el && m.el.trigger("singleTap"),
                        m = {}
                    },
                    250)
                },
                0) : m = {}), s = t = 0)
            }).on("touchcancel MSPointerCancel pointercancel", e),
            a(window).on("scroll", e)
        }),
        ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
            a.fn[b] = function(a) {
                return this.on(b, a)
            }
        })
    } (a),
    a.extend(a, {
        cookie: function(b, c, d) {
            var e, f, g, h;
            return arguments.length > 1 && "[object Object]" !== String(c) ? (d = a.extend(a, d), (null === c || void 0 === c) && (d.expires = -1), "number" == typeof d.expires && (e = d.expires, f = d.expires = new Date, f.setDate(f.getDate() + e)), c = String(c), document.cookie = [encodeURIComponent(b), "=", d.raw ? c: encodeURIComponent(c), d.expires ? "; expires=" + d.expires.toUTCString() : "", d.path ? "; path=" + d.path: "", d.domain ? "; domain=" + d.domain: "", d.secure ? "; secure": ""].join("")) : (d = c || {},
            h = d.raw ?
            function(a) {
                return a
            }: decodeURIComponent, (g = new RegExp("(?:^|; )" + encodeURIComponent(b) + "=([^;]*)").exec(document.cookie)) ? h(g[1]) : null)
        }
    }),
    a
});