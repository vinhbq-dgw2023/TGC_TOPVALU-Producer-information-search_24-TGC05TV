/**

 * bxSlider v4.2.1d

 * Copyright 2013-2017 Steven Wanderski

 * Written while drinking Belgian ales and listening to jazz

 * Licensed under MIT (http://opensource.org/licenses/MIT)

 */
!function(t){var e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0},onAutoChange:function(){return!0}};t.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var s={},o=this,r=t(window).width(),a=t(window).height();if(!t(o).data("bxSlider")){var l=function(){!t(o).data("bxSlider")&&(s.settings=t.extend({},e,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],n=0;n<e.length;n++)if(void 0!==t.style[e[n]])return s.cssPrefix=e[n].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d())},d=function(){var e=s.children.eq(s.settings.startSlide);o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.settings.ariaLive&&!s.settings.ticker&&s.viewport.attr("aria-live","polite"),s.loader=t('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:u()}),s.children.css({float:"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",h()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=t('<div class="bx-controls" />'),s.settings.captions&&_(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids(),"none"===s.settings.preloadImages?e=null:("all"===s.settings.preloadImages||s.settings.ticker)&&(e=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&w(),s.settings.auto&&s.settings.autoControls&&C(),s.settings.pager&&b(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),null===e?g():c(e,g)},c=function(e,n){var s=e.find('img:not([src=""]), iframe').length,o=0;if(0===s){n();return}e.find('img:not([src=""]), iframe').each(function(){t(this).one("load error",function(){++o===s&&n()}).each(function(){(this.complete||""==this.src)&&t(this).trigger("load")})})},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var e="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,n=s.children.slice(0,e).clone(!0).addClass("bx-clone"),r=s.children.slice(-e).clone(!0).addClass("bx-clone");s.settings.ariaHidden&&(n.attr("aria-hidden",!0),r.attr("aria-hidden",!0)),o.append(n).prepend(r)}s.loader.remove(),m(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad.call(o,s.active.index),s.initialized=!0,s.settings.responsive&&t(window).on("resize",F),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&H(),s.settings.ticker&&W(),s.settings.pager&&z(s.settings.startSlide),s.settings.controls&&A(),navigator.maxTouchPoints>1&&B(),s.settings.keyboardEnabled&&!s.settings.ticker&&t(document).keydown(N)},p=function(){var e=0,n=t();if("vertical"===s.settings.mode||s.settings.adaptiveHeight){if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*x();for(i=1,n=s.children.eq(o);i<=s.settings.maxSlides-1;i++)n=o+i>=s.children.length?n.add(s.children.eq(i-1)):n.add(s.children.eq(o+i))}else n=s.children.eq(s.active.index)}else n=s.children;return"vertical"===s.settings.mode?(n.each(function(n){e+=t(this).outerHeight()}),s.settings.slideMargin>0&&(e+=s.settings.slideMargin*(s.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),e},u=function(){var t="100%";return s.settings.slideWidth>0&&(t="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),t},h=function(){var t=s.settings.slideWidth,e=s.viewport.width();return 0===s.settings.slideWidth||s.settings.slideWidth>e&&!s.carousel||"vertical"===s.settings.mode?t=e:s.settings.maxSlides>1&&"horizontal"===s.settings.mode&&(e>s.maxThreshold||(e<s.minThreshold?t=(e-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides:s.settings.shrinkItems&&(t=Math.floor((e+s.settings.slideMargin)/Math.ceil((e+s.settings.slideMargin)/(t+s.settings.slideMargin))-s.settings.slideMargin)))),t},v=function(){var t=1,e=null;return"horizontal"===s.settings.mode&&s.settings.slideWidth>0?s.viewport.width()<s.minThreshold?t=s.settings.minSlides:s.viewport.width()>s.maxThreshold?t=s.settings.maxSlides:(e=s.children.first().width()+s.settings.slideMargin,t=Math.floor((s.viewport.width()+s.settings.slideMargin)/e)||1):"vertical"===s.settings.mode&&(t=s.settings.minSlides),t},f=function(){var t=0,e=0,n=0;if(s.settings.moveSlides>0){if(s.settings.infiniteLoop)t=Math.ceil(s.children.length/x());else{for(;e<s.children.length;)++t,e=n+v(),n+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();return n}}else t=Math.ceil(s.children.length/v());return t},x=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},m=function(){var t,e,n;s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop?"horizontal"===s.settings.mode?$(-((t=(e=s.children.last()).position()).left-(s.viewport.width()-e.outerWidth())),"reset",0):"vertical"===s.settings.mode&&(n=s.children.length-s.settings.minSlides,$(-(t=s.children.eq(n).position()).top,"reset",0)):(t=s.children.eq(s.active.index*x()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==t&&("horizontal"===s.settings.mode?$(-t.left,"reset",0):"vertical"===s.settings.mode&&$(-t.top,"reset",0)))},$=function(e,n,r,a){var l,d;s.usingCSS?(d="vertical"===s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)",o.css("-"+s.cssPrefix+"-transition-duration",r/1e3+"s"),"slide"===n?(o.css(s.animProp,d),0!==r?o.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),M())}):M()):"reset"===n?o.css(s.animProp,d):"ticker"===n&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,d),0!==r?o.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),$(a.resetValue,"reset",0),L())}):($(a.resetValue,"reset",0),L()))):((l={})[s.animProp]=e,"slide"===n?o.animate(l,r,s.settings.easing,function(){M()}):"reset"===n?o.css(s.animProp,e):"ticker"===n&&o.animate(l,r,"linear",function(){$(a.resetValue,"reset",0),L()}))},S=function(){for(var e="",n="",o=f(),r=0;r<o;r++)n="",s.settings.buildPager&&t.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(n=s.settings.buildPager(r),s.pagerEl.addClass("bx-custom-pager")):(n=r+1,s.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+r+'" class="bx-pager-link">'+n+"</a></div>";s.pagerEl.html(e)},b=function(){s.settings.pagerCustom?s.pagerEl=t(s.settings.pagerCustom):(s.pagerEl=t('<div class="bx-pager" />'),s.settings.pagerSelector?t(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),S()),s.pagerEl.on("click touchend","a",y)},w=function(){s.controls.next=t('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=t('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.on("click touchend",T),s.controls.prev.on("click touchend",k),s.settings.nextSelector&&t(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&t(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=t('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},C=function(){s.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=t('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",P),s.controls.autoEl.on("click",".bx-stop",E),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?t(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),I(s.settings.autoStart?"stop":"start")},_=function(){s.children.each(function(e){var n=t(this).find("img:first").attr("title");void 0!==n&&(""+n).length&&t(this).append('<div class="bx-caption"><span>'+n+"</span></div>")})},T=function(t){t.preventDefault(),!s.controls.el.hasClass("disabled")&&(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},k=function(t){t.preventDefault(),!s.controls.el.hasClass("disabled")&&(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToPrevSlide())},P=function(t){o.startAuto(),t.preventDefault()},E=function(t){o.stopAuto(),t.preventDefault()},y=function(e){var n,r;e.preventDefault(),!s.controls.el.hasClass("disabled")&&(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),void 0!==(n=t(e.currentTarget)).attr("data-slide-index")&&(r=parseInt(n.attr("data-slide-index")))!==s.active.index&&o.goToSlide(r))},z=function(e){var n=s.children.length;if("short"===s.settings.pagerType){s.settings.maxSlides>1&&(n=Math.ceil(s.children.length/s.settings.maxSlides)),s.pagerEl.html(e+1+s.settings.pagerShortSeparator+n);return}s.pagerEl.find("a").removeClass("active"),s.pagerEl.each(function(n,s){t(s).find("a").eq(e).addClass("active")})},M=function(){if(s.settings.infiniteLoop){var t="";0===s.active.index?t=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?t=s.children.eq((f()-1)*x()).position():s.active.index===s.children.length-1&&(t=s.children.eq(s.children.length-1).position()),t&&("horizontal"===s.settings.mode?$(-t.left,"reset",0):"vertical"===s.settings.mode&&$(-t.top,"reset",0))}s.working=!1,s.settings.onSlideAfter.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)},I=function(t){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[t]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},A=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},D=function(){o.startAuto()},q=function(){o.stopAuto()},H=function(){s.settings.autoDelay>0?setTimeout(o.startAuto,s.settings.autoDelay):(o.startAuto(),t(window).focus(D).blur(q)),s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},W=function(){var e,n,r,a,l,d,c,g,p=0;"next"===s.settings.autoDirection?o.append(s.children.clone().addClass("bx-clone")):(o.prepend(s.children.clone().addClass("bx-clone")),e=s.children.first().position(),p="horizontal"===s.settings.mode?-e.left:-e.top),$(p,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&(s.usingCSS?(a="horizontal"===s.settings.mode?4:5,s.viewport.hover(function(){r=parseFloat((n=o.css("-"+s.cssPrefix+"-transform")).split(",")[a]),$(r,"reset",0)},function(){g=0,s.children.each(function(e){g+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),l=s.settings.speed/g,d="horizontal"===s.settings.mode?"left":"top",c=l*(g-Math.abs(parseInt(r))),L(c)})):s.viewport.hover(function(){o.stop()},function(){g=0,s.children.each(function(e){g+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),l=s.settings.speed/g,d="horizontal"===s.settings.mode?"left":"top",c=l*(g-Math.abs(parseInt(o.css(d)))),L(c)})),L()},L=function(t){var e,n,r,a=t||s.settings.speed,l={left:0,top:0},d={left:0,top:0};"next"===s.settings.autoDirection?l=o.find(".bx-clone").first().position():d=s.children.first().position(),$(e="horizontal"===s.settings.mode?-l.left:-l.top,"ticker",a,r={resetValue:n="horizontal"===s.settings.mode?-d.left:-d.top})},O=function(e){var n=t(window),s={top:n.scrollTop(),left:n.scrollLeft()},o=e.offset();return s.right=s.left+n.width(),s.bottom=s.top+n.height(),o.right=o.left+e.outerWidth(),o.bottom=o.top+e.outerHeight(),!(s.right<o.left||s.left>o.right||s.bottom<o.top||s.top>o.bottom)},N=function(t){if(null==RegExp(document.activeElement.tagName.toLowerCase(),["i"]).exec("input|textarea")&&O(o)){if(39===t.keyCode)return T(t),!1;if(37===t.keyCode)return k(t),!1}},B=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.on("touchstart MSPointerDown pointerdown",X),s.viewport.on("click",".bxslider a",function(t){s.viewport.hasClass("click-disabled")&&(t.preventDefault(),s.viewport.removeClass("click-disabled"))})},X=function(t){if(("touchstart"===t.type||0===t.button)&&void 0!==s.pointerId){if(t.target.href||t.preventDefault(),s.controls.el.addClass("disabled"),s.working)s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var e=t.originalEvent,n=void 0!==e.changedTouches?e.changedTouches:[e];if("function"==typeof PointerEvent&&void 0===e.pointerId)return;s.touch.start.x=n[0].pageX,s.touch.start.y=n[0].pageY,s.viewport.get(0).setPointerCapture&&(s.pointerId=e.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.originalClickTarget=e.originalTarget||e.target,s.originalClickButton=e.button,s.originalClickButtons=e.buttons,s.originalEventType=e.type,s.hasMove=!1,s.viewport.on("touchmove MSPointerMove pointermove",V),s.viewport.on("touchend MSPointerUp pointerup",Z),s.viewport.on("MSPointerCancel pointercancel",Y)}}},Y=function(t){t.preventDefault(),$(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.off("MSPointerCancel pointercancel",Y),s.viewport.off("touchmove MSPointerMove pointermove",V),s.viewport.off("touchend MSPointerUp pointerup",Z),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},V=function(t){var e=t.originalEvent,n=void 0!==e.changedTouches?e.changedTouches:[e],o=Math.abs(n[0].pageX-s.touch.start.x),r=Math.abs(n[0].pageY-s.touch.start.y),a=0,l=0;s.hasMove=!0,3*o>r&&s.settings.preventDefaultSwipeX?t.preventDefault():3*r>o&&s.settings.preventDefaultSwipeY&&t.preventDefault(),"touchmove"!==t.type&&t.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch&&("horizontal"===s.settings.mode?(l=n[0].pageX-s.touch.start.x,a=s.touch.originalPos.left+l):(l=n[0].pageY-s.touch.start.y,a=s.touch.originalPos.top+l),$(a,"reset",0))},Z=function(e){e.preventDefault(),s.viewport.off("touchmove MSPointerMove pointermove",V),s.controls.el.removeClass("disabled");var n=e.originalEvent,r=void 0!==n.changedTouches?n.changedTouches:[n],a=0,l=0;s.touch.end.x=r[0].pageX,s.touch.end.y=r[0].pageY,"fade"===s.settings.mode?(l=Math.abs(s.touch.start.x-s.touch.end.x))>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):("horizontal"===s.settings.mode?(l=s.touch.end.x-s.touch.start.x,a=s.touch.originalPos.left):(l=s.touch.end.y-s.touch.start.y,a=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&l>0||s.active.last&&l<0)?$(a,"reset",200):Math.abs(l)>=s.settings.swipeThreshold?(l<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):$(a,"reset",200)),s.viewport.off("touchend MSPointerUp pointerup",Z),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId),!1===s.hasMove&&(0===s.originalClickButton||"touchstart"===s.originalEventType)&&t(s.originalClickTarget).trigger({type:"click",button:s.originalClickButton,buttons:s.originalClickButtons})},F=function(e){if(s.initialized){if(s.working)window.setTimeout(F,10);else{var n=t(window).width(),l=t(window).height();(r!==n||a!==l)&&(r=n,a=l,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}}},R=function(t){var e=v();s.settings.ariaHidden&&!s.settings.ticker&&(s.children.attr("aria-hidden","true"),s.children.slice(t,t+e).attr("aria-hidden","false"))};return o.goToSlide=function(e,n){var r,a,l,d,c,g=!0,u=0,h={left:0,top:0},v=null;if(s.oldIndex=s.active.index,s.active.index=(c=e,c<0?s.settings.infiniteLoop?f()-1:s.active.index:c>=f()?s.settings.infiniteLoop?0:s.active.index:c),!s.working&&s.active.index!==s.oldIndex){if(s.working=!0,void 0!==(g=s.settings.onSlideBefore.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index))&&!g){s.active.index=s.oldIndex,s.working=!1;return}"next"===n?s.settings.onSlideNext.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(g=!1):"prev"!==n||s.settings.onSlidePrev.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(g=!1),s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&z(s.active.index),s.settings.controls&&A(),"fade"===s.settings.mode?(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){t(this).css("zIndex",s.settings.slideZIndex),M()})):(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),!s.settings.infiniteLoop&&s.carousel&&s.active.last?"horizontal"===s.settings.mode?(h=(v=s.children.eq(s.children.length-1)).position(),u=s.viewport.width()-v.outerWidth()):(r=s.children.length-s.settings.minSlides,h=s.children.eq(r).position()):s.carousel&&s.active.last&&"prev"===n?(a=1===s.settings.moveSlides?s.settings.maxSlides-x():(f()-1)*x()-(s.children.length-s.settings.maxSlides),h=(v=o.children(".bx-clone").eq(a)).position()):"next"===n&&0===s.active.index?(h=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1):e>=0&&(d=e*parseInt(x()),h=s.children.eq(d).position()),void 0!==h&&$(l="horizontal"===s.settings.mode?-(h.left-u):-h.top,"slide",s.settings.speed),s.working=!1),s.settings.ariaHidden&&R(s.active.index*x())}},o.goToNextSlide=function(){if((s.settings.infiniteLoop||!s.active.last)&&!0!==s.working){var t=parseInt(s.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if((s.settings.infiniteLoop||0!==s.active.index)&&!0!==s.working){var t=parseInt(s.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){!s.interval&&(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.onAutoChange.call(o,!0),s.settings.autoControls&&!0!==t&&I("stop"))},o.stopAuto=function(t){s.autoPaused&&(s.autoPaused=!1),s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.onAutoChange.call(o,!1),s.settings.autoControls&&!0!==t&&I("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideElement=function(t){return s.children.eq(t)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(h()),s.viewport.css("height",p()),s.settings.ticker||m(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(S(),z(s.active.index)),s.settings.ariaHidden&&R(s.active.index*x())},o.destroySlider=function(){s.initialized&&(s.initialized=!1,t(".bx-clone",this).remove(),s.children.each(function(){void 0!==t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!==t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),t(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&t(window).off("resize",F),s.settings.keyboardEnabled&&t(document).off("keydown",N),t(this).removeData("bxSlider"),t(window).off("blur",q).off("focus",D))},o.reloadSlider=function(e){void 0!==e&&(n=e),o.destroySlider(),l(),t(o).data("bxSlider",this)},l(),t(o).data("bxSlider",this),this}}}(jQuery);

let OBJ = {};
(function($) {
    /************************************************************
     * Predefined letiables
     *************************************************************/
    let $window = $(window),
        $document = $(document),
        $html = $('html'),
        $body = $('body');
    /**
     * exists
     * @return true
     */
    $.fn.exists = function() {
        return this.length > 0;
    };
    /**
     * isMobile - Check mobile screen
     * @return void
     */
    $.fn.isMobile = function() {
        let screen = $window.outerWidth();
        return !!(screen < 751);
    };
    /**
     * @return void
     */
    let ismobile;
    OBJ.uaSetting = function() {
            let _ua = (function(u) {
                return {
                    Tablet: (u.indexOf('windows') !== -1 && u.indexOf('touch') !== -1 && u.indexOf('tablet pc') === -1) || u.indexOf('ipad') !== -1 || (u.indexOf('android') !== -1 && u.indexOf('mobile') === -1) || (u.indexOf('firefox') !== -1 && u.indexOf('tablet') !== -1) || u.indexOf('kindle') !== -1 || u.indexOf('silk') !== -1 || u.indexOf('playbook') !== -1,
                    Mobile: (u.indexOf('windows') !== -1 && u.indexOf('phone') !== -1) || u.indexOf('iphone') !== -1 || u.indexOf('ipod') !== -1 || (u.indexOf('android') !== -1 && u.indexOf('mobile') !== -1) || (u.indexOf('firefox') !== -1 && u.indexOf('mobile') !== -1) || u.indexOf('blackberry') !== -1,
                }
            })(window.navigator.userAgent.toLowerCase());
            if (_ua.Tablet || _ua.Mobile) {
                $body.addClass('sp');
                ismobile = true;
            } else {
                ismobile = false;
            }
        }
        /**
         *  open or close menu in mobile
         */
    OBJ.menumobile = function(obj) {
            let btn_menumobile = $(obj);
            btn_menumobile.on('click', function() {
                $(this).toggleClass('open');
                $html.toggleClass('openMenu');
                $html.find('[rel="' + $(this).attr('data-menu') + '"]').slideToggle('500');
            })
        }
        /**
         *  call function
         */
    $window.scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#scrollUp').fadeIn('400');
        } else {
            $('#scrollUp').fadeOut('400');
        }
    });

    function switchTab() {
        $('.main_tabs .box_list_tab-01 .tab_btn.tab_btn-01 li').on('click',function(){
            if(!$(this).hasClass('active')) {
              $(this).addClass('active').siblings('li').removeClass('active');
              $(this).closest('.tab_btn').next('.tab_cnts').children('li:nth-of-type('+ ( ($(this).closest('.tab_btn').children('li').index($(this)))+1 ) +')').fadeIn(1000).siblings('li').hide();
            }
        });
    }

    function toggle(listEle) {
        $(".sec02-toggle > .btn").click(function(e) {
            let $this = $(this);
            $this.next().slideToggle();
            $this.parents('.item').toggleClass('active');
        })
    }

    var timeouts = [];
    animationOnPc = function() {
        var i = 0;
        $('.banner_animation .img').each(function(){
            let $this = $(this);
            i = i + 200;
            // OBJ.sogoTimeOut($this, i);
            timeouts.push(setTimeout(function(){
                $this.addClass('on');
            },i) );
        })
    }

    // function banner_animation() {
    //     $(".banner_animation .img").each(function(){
    //         var $thisElement = $(this);

    //         //add class every 2000 milliseconds
    //         setInterval(function() {

    //             $thisElement.addClass("active");

    //             // Store this class removal timer in jQuery data object
    //             $thisElement.data('class-removal-timer-id', classRemovalTimer);

    //         }, 2000);
    //     });
    // }

    function bxSlider() {
        var slider = $('#seisansya #sec05 .slider').bxSlider({
            auto: true,
            pause: 5000,
            speed: 1000,
            controls: false,  
            touchEnabled: true,
            onSlideAfter: function() {
                slider.startAuto();
            },
            pagerCustom: '.seisansyaBxPager'
        });
    }

    var listBtn = document.querySelectorAll(".sec02-toggle");

    $document.ready(function() {
        OBJ.menumobile('.jsToggleMenu');
        switchTab();
        toggle(listBtn);
        bxSlider();
        timeouts.push(setTimeout(function(){
            animationOnPc();
        },1000) );
    })
    
    $window.resize(function(event) {
    });

var option__radio;
var access_code;

function functionSearch(){
option__radio = window.form1.option__radio.value;
access_code =  window.form1.access_code.value;

if(option__radio !== '' && access_code !== ''){
    if(option__radio === 'option01'){
            window.open(`https://www.topvalu.net/items/detail/${access_code}/`)
    }
    if(option__radio === 'option02'){
            window.open(`https://nogyo.jp/index.cfm?mode=search&mode1=koukai&access_code=000${access_code}`)
    }
}
}
$( "#search" ).submit(function( event ) {
    event.preventDefault();
    functionSearch();
});



})(jQuery);

