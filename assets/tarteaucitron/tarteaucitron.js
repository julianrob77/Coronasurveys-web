var scripts=document.getElementsByTagName("script"),path=scripts[scripts.length-1].src.split("?")[0],tarteaucitronForceCDN=void 0===tarteaucitronForceCDN?"":tarteaucitronForceCDN,cdn=""===tarteaucitronForceCDN?path.split("/").slice(0,-1).join("/")+"/":tarteaucitronForceCDN,alreadyLaunch=void 0===alreadyLaunch?0:alreadyLaunch,tarteaucitronForceLanguage=void 0===tarteaucitronForceLanguage?"":tarteaucitronForceLanguage,tarteaucitronForceExpire=void 0===tarteaucitronForceExpire?"":tarteaucitronForceExpire,tarteaucitronCustomText=void 0===tarteaucitronCustomText?"":tarteaucitronCustomText,tarteaucitronExpireInDay=void 0===tarteaucitronExpireInDay||"boolean"!=typeof tarteaucitronExpireInDay||tarteaucitronExpireInDay,timeExpire=31536e6,tarteaucitronProLoadServices,tarteaucitronNoAdBlocker=!1,tarteaucitron={version:20200114,cdn:cdn,user:{},lang:{},services:{},added:[],idprocessed:[],state:[],launch:[],parameters:{},isAjax:!1,reloadThePage:!1,events:{init:function(){},load:function(){}},init:function(t){"use strict";var e;tarteaucitron.parameters=t,0===alreadyLaunch&&(alreadyLaunch=1,window.addEventListener?(window.addEventListener("load",function(){tarteaucitron.initEvents.loadEvent(!1)},!1),window.addEventListener("scroll",function(){tarteaucitron.initEvents.scrollEvent()},!1),window.addEventListener("keydown",function(t){tarteaucitron.initEvents.keydownEvent(!1,t)},!1),window.addEventListener("hashchange",function(){tarteaucitron.initEvents.hashchangeEvent()},!1),window.addEventListener("resize",function(){tarteaucitron.initEvents.resizeEvent()},!1)):(window.attachEvent("onload",function(){tarteaucitron.initEvents.loadEvent(!0)}),window.attachEvent("onscroll",function(){tarteaucitron.initEvents.scrollEvent()}),window.attachEvent("onkeydown",function(t){tarteaucitron.initEvents.keydownEvent(!0,t)}),window.attachEvent("onhashchange",function(){tarteaucitron.initEvents.hashchangeEvent()}),window.attachEvent("onresize",function(){tarteaucitron.initEvents.resizeEvent()})),"undefined"!=typeof XMLHttpRequest&&(e=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.open=function(){window.addEventListener?this.addEventListener("load",function(){"function"==typeof tarteaucitronProLoadServices&&tarteaucitronProLoadServices()},!1):void 0!==this.attachEvent?this.attachEvent("onload",function(){"function"==typeof tarteaucitronProLoadServices&&tarteaucitronProLoadServices()}):"function"==typeof tarteaucitronProLoadServices&&setTimeout(tarteaucitronProLoadServices,1e3);try{e.apply(this,arguments)}catch(t){}})),tarteaucitron.events.init&&tarteaucitron.events.init()},initEvents:{loadEvent:function(t){tarteaucitron.load(),tarteaucitron.fallback(["tarteaucitronOpenPanel"],function(e){t?e.attachEvent("onclick",function(t){tarteaucitron.userInterface.openPanel(),t.preventDefault()}):e.addEventListener("click",function(t){tarteaucitron.userInterface.openPanel(),t.preventDefault()},!1)},!0)},keydownEvent:function(t,e){27===e.keyCode&&tarteaucitron.userInterface.closePanel(),t&&9===e.keyCode&&focusableEls.indexOf(e.target)>=0&&(e.shiftKey?document.activeElement===firstFocusableEl&&(lastFocusableEl.focus(),e.preventDefault()):document.activeElement===lastFocusableEl&&(firstFocusableEl.focus(),e.preventDefault()))},hashchangeEvent:function(){document.location.hash===tarteaucitron.hashtag&&""!==tarteaucitron.hashtag&&tarteaucitron.userInterface.openPanel()},resizeEvent:function(){var t=document.getElementById("tarteaucitron"),e=document.getElementById("tarteaucitronCookiesListContainer");t&&"block"===t.style.display&&tarteaucitron.userInterface.jsSizing("main"),e&&"block"===e.style.display&&tarteaucitron.userInterface.jsSizing("cookie")},scrollEvent:function(){var t,e=window.pageYOffset||document.documentElement.scrollTop,a=document.getElementById("tarteaucitronPercentage"),r=document.getElementById("tarteaucitronAlertBig");r&&!tarteaucitron.highPrivacy&&"block"===r.style.display&&(t=r.offsetHeight+"px",e>2*screen.height?tarteaucitron.userInterface.respondAll(!0):e>screen.height/2&&(document.getElementById("tarteaucitronDisclaimerAlert").innerHTML="<strong>"+tarteaucitron.lang.alertBigScroll+"</strong> "+tarteaucitron.lang.alertBig),a&&("top"===tarteaucitron.orientation?a.style.top=t:a.style.bottom=t,a.style.width=100/(2*screen.height)*e+"%"))}},load:function(){"use strict";var t=tarteaucitron.cdn,e=t+"lang/tarteaucitron."+tarteaucitron.getLanguage()+".js?v="+tarteaucitron.version,a=t+"tarteaucitron.services.js?v="+tarteaucitron.version,r=document.createElement("link"),n={adblocker:!1,hashtag:"#tarteaucitron",cookieName:"tarteaucitron",highPrivacy:!0,orientation:"middle",bodyPosition:"bottom",removeCredit:!1,showAlertSmall:!0,cookieslist:!0,handleBrowserDNTRequest:!1,AcceptAllCta:!0,moreInfoLink:!0,privacyUrl:"",useExternalCss:!1,useExternalJs:!1},o=tarteaucitron.parameters;if(window.location.href==tarteaucitron.parameters.privacyUrl&&"middle"==tarteaucitron.parameters.orientation&&(tarteaucitron.parameters.orientation="bottom"),"undefined"!=typeof tarteaucitronCustomPremium&&tarteaucitronCustomPremium(),void 0!==o)for(var i in n)tarteaucitron.parameters.hasOwnProperty(i)||(tarteaucitron.parameters[i]=n[i]);tarteaucitron.orientation=tarteaucitron.parameters.orientation,tarteaucitron.hashtag=tarteaucitron.parameters.hashtag,tarteaucitron.highPrivacy=tarteaucitron.parameters.highPrivacy,tarteaucitron.handleBrowserDNTRequest=tarteaucitron.parameters.handleBrowserDNTRequest,tarteaucitron.parameters.useExternalCss||(r.rel="stylesheet",r.type="text/css",r.href=t+"css/tarteaucitron.css?v="+tarteaucitron.version,document.getElementsByTagName("head")[0].appendChild(r)),tarteaucitron.addInternalScript(e,"",function(){""!==tarteaucitronCustomText&&(tarteaucitron.lang=tarteaucitron.AddOrUpdate(tarteaucitron.lang,tarteaucitronCustomText)),tarteaucitron.addInternalScript(a,"",function(){if("middle"===tarteaucitron.orientation){var t=document.createElement("style"),e="div#tarteaucitronRoot.tarteaucitronBeforeVisible:before {content: '';position: fixed;width: 100%;height: 100%;background: white;top: 0;left: 0;z-index: 999;opacity: 0.5;}div#tarteaucitronAlertBig:before {content: '"+tarteaucitron.lang.middleBarHead+"';font-size: 50px;}body #tarteaucitronRoot div#tarteaucitronAlertBig {width: 60%;min-width: 285px;height: auto;margin: auto;left: 50%;top: 50%;transform: translate(-50%, -50%);box-shadow: 0 0 9000px #000;border-radius: 20px;padding: 50px 0;}span#tarteaucitronDisclaimerAlert {padding: 0 30px;}#tarteaucitronRoot span#tarteaucitronDisclaimerAlert {margin: 50px 0;display: block;text-align: center;font-size: 21px;}";t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)}var a,r,n=document.body,o=document.createElement("div"),i="",c="Top",u=["ads","analytic","api","comment","social","support","video","other"];for(u=u.sort(function(t,e){return tarteaucitron.lang[t].title>tarteaucitron.lang[e].title?1:tarteaucitron.lang[t].title<tarteaucitron.lang[e].title?-1:0}),i+='<div id="tarteaucitronPremium"></div>',i+='<button type="button" id="tarteaucitronBack" onclick="tarteaucitron.userInterface.closePanel();" aria-label="'+tarteaucitron.lang.close+'"></button>',i+='<div id="tarteaucitron" role="dialog" aria-labelledby="dialogTitle">',i+='   <button type="button" id="tarteaucitronClosePanel" onclick="tarteaucitron.userInterface.closePanel();">',i+="       "+tarteaucitron.lang.close,i+="   </button>",i+='   <div id="tarteaucitronServices">',i+='      <div class="tarteaucitronLine tarteaucitronMainLine" id="tarteaucitronMainLineOffset">',i+='         <span class="tarteaucitronH1" role="heading" aria-level="1" id="dialogTitle">'+tarteaucitron.lang.title+"</span>",i+='         <div id="tarteaucitronInfo">',i+="         "+tarteaucitron.lang.disclaimer,""!==tarteaucitron.parameters.privacyUrl&&(i+="   <br/><br/>",i+='   <button type="button" id="tarteaucitronPrivacyUrlDialog" onclick="document.location = tarteaucitron.parameters.privacyUrl">',i+="       "+tarteaucitron.lang.privacyUrl,i+="   </button>"),i+="         </div>",i+='         <div class="tarteaucitronName">',i+='            <span class="tarteaucitronH2" role="heading" aria-level="2">'+tarteaucitron.lang.all+"</span>",i+="         </div>",i+='         <div class="tarteaucitronAsk" id="tarteaucitronScrollbarAdjust">',i+='            <button type="button" id="tarteaucitronAllAllowed" class="tarteaucitronAllow" onclick="tarteaucitron.userInterface.respondAll(true);">',i+="               &#10003; "+tarteaucitron.lang.allowAll,i+="            </button> ",i+='            <button type="button" id="tarteaucitronAllDenied" class="tarteaucitronDeny" onclick="tarteaucitron.userInterface.respondAll(false);">',i+="               &#10007; "+tarteaucitron.lang.denyAll,i+="            </button>",i+="         </div>",i+="      </div>",i+='      <div class="tarteaucitronBorder">',i+='         <div class="clear"></div><ul>',r=0;r<u.length;r+=1)i+='         <li id="tarteaucitronServicesTitle_'+u[r]+'" class="tarteaucitronHidden">',i+='            <div class="tarteaucitronTitle">',i+='               <button type="button" onclick="tarteaucitron.userInterface.toggle(\'tarteaucitronDetails'+u[r]+"', 'tarteaucitronInfoBox');return false\">&#10011; "+tarteaucitron.lang[u[r]].title+"</button>",i+="            </div>",i+='            <div id="tarteaucitronDetails'+u[r]+'" class="tarteaucitronDetails tarteaucitronInfoBox">',i+="               "+tarteaucitron.lang[u[r]].details,i+="            </div>",i+='         <ul id="tarteaucitronServices_'+u[r]+'"></ul></li>';i+='             <li id="tarteaucitronNoServicesTitle" class="tarteaucitronLine">'+tarteaucitron.lang.noServices+"</li>",i+="         </ul>",i+='         <div class="tarteaucitronHidden" id="tarteaucitronScrollbarChild" style="height:20px;display:block"></div>',!1===tarteaucitron.parameters.removeCredit&&(i+='     <a class="tarteaucitronSelfLink" href="https://tarteaucitron.io/" rel="nofollow noreferrer noopener" target="_blank" title="tarteaucitron '+tarteaucitron.lang.newWindow+'">🍋 '+tarteaucitron.lang.credit+"</a>"),i+="       </div>",i+="   </div>",i+="</div>","bottom"===tarteaucitron.parameters.orientation&&(c="Bottom"),tarteaucitron.parameters.highPrivacy&&!tarteaucitron.parameters.AcceptAllCta?(i+='<div id="tarteaucitronAlertBig" class="tarteaucitronAlertBig'+c+'">',i+='   <span id="tarteaucitronDisclaimerAlert">',i+="       "+tarteaucitron.lang.alertBigPrivacy,i+="   </span>",i+='   <button type="button" id="tarteaucitronPersonalize" onclick="tarteaucitron.userInterface.openPanel();">',i+="       "+tarteaucitron.lang.personalize,i+="   </button>",""!==tarteaucitron.parameters.privacyUrl&&(i+='   <button type="button" id="tarteaucitronPrivacyUrl" onclick="document.location = tarteaucitron.parameters.privacyUrl">',i+="       "+tarteaucitron.lang.privacyUrl,i+="   </button>"),i+="</div>"):(i+='<div id="tarteaucitronAlertBig" class="tarteaucitronAlertBig'+c+'">',i+='   <span id="tarteaucitronDisclaimerAlert">',tarteaucitron.parameters.highPrivacy?i+="       "+tarteaucitron.lang.alertBigPrivacy:i+="       "+tarteaucitron.lang.alertBigClick+" "+tarteaucitron.lang.alertBig,i+="   </span>",i+='   <button type="button" id="tarteaucitronPersonalize" onclick="tarteaucitron.userInterface.respondAll(true);">',i+="       &#10003; "+tarteaucitron.lang.acceptAll,i+="   </button>","middle"===tarteaucitron.parameters.orientation&&(i+='   <button type="button" class="tarteaucitronCTAButton tarteaucitronDeny"  onclick="tarteaucitron.userInterface.respondAll(false);">',i+="       &#10007; "+tarteaucitron.lang.denyAll,i+="   </button>",i+="   <br/><br/>"),i+='   <button type="button" id="tarteaucitronCloseAlert" onclick="tarteaucitron.userInterface.openPanel();">',i+="       "+tarteaucitron.lang.personalize,i+="   </button>",""!==tarteaucitron.parameters.privacyUrl&&(i+='   <button type="button" id="tarteaucitronPrivacyUrl" onclick="document.location = tarteaucitron.parameters.privacyUrl">',i+="       "+tarteaucitron.lang.privacyUrl,i+="   </button>"),i+="</div>",i+='<div id="tarteaucitronPercentage"></div>'),!0===tarteaucitron.parameters.showAlertSmall&&(i+='<div id="tarteaucitronAlertSmall" class="tarteaucitronAlertSmall'+c+'">',i+='   <button type="button" id="tarteaucitronManager" onclick="tarteaucitron.userInterface.openPanel();">',i+="       "+tarteaucitron.lang.alertSmall,i+='       <span id="tarteaucitronDot">',i+='           <span id="tarteaucitronDotGreen"></span>',i+='           <span id="tarteaucitronDotYellow"></span>',i+='           <span id="tarteaucitronDotRed"></span>',i+="       </span>",!0===tarteaucitron.parameters.cookieslist?(i+="   </button>\x3c!-- @whitespace",i+='   --\x3e<button type="button" id="tarteaucitronCookiesNumber" onclick="tarteaucitron.userInterface.toggleCookiesList();">0</button>',i+='   <div id="tarteaucitronCookiesListContainer">',i+='       <button type="button" id="tarteaucitronClosePanelCookie" onclick="tarteaucitron.userInterface.closePanel();">',i+="           "+tarteaucitron.lang.close,i+="       </button>",i+='       <div class="tarteaucitronCookiesListMain" id="tarteaucitronCookiesTitle">',i+='            <span class="tarteaucitronH2" role="heading" aria-level="2" id="tarteaucitronCookiesNumberBis">0 cookie</span>',i+="       </div>",i+='       <div id="tarteaucitronCookiesList"></div>',i+="    </div>"):i+="   </div>",i+="</div>"),tarteaucitron.addInternalScript(tarteaucitron.cdn+"advertising.js?v="+tarteaucitron.version,"",function(){if(!0===tarteaucitronNoAdBlocker||!1===tarteaucitron.parameters.adblocker){if(o.id="tarteaucitronRoot","top"===tarteaucitron.parameters.bodyPosition){var t=n.firstChild;n.insertBefore(o,t)}else n.appendChild(o,n);var e;if(o.innerHTML=i,"function"==typeof Event?e=new Event("tac.root_available"):(e=document.createEvent("Event")).initEvent("tac.root_available",!0,!0),window.dispatchEvent(e),void 0!==tarteaucitron.job)for(tarteaucitron.job=tarteaucitron.cleanArray(tarteaucitron.job),a=0;a<tarteaucitron.job.length;a+=1)tarteaucitron.addService(tarteaucitron.job[a]);else tarteaucitron.job=[];tarteaucitron.isAjax=!0,tarteaucitron.job.push=function(t){void 0===tarteaucitron.job.indexOf&&(tarteaucitron.job.indexOf=function(t,e){var a,r=this.length;for(a=e||0;a<r;a+=1)if(this[a]===t)return a;return-1}),-1===tarteaucitron.job.indexOf(t)&&Array.prototype.push.call(this,t),tarteaucitron.launch[t]=!1,tarteaucitron.addService(t)},document.location.hash===tarteaucitron.hashtag&&""!==tarteaucitron.hashtag&&tarteaucitron.userInterface.openPanel(),tarteaucitron.cookie.number(),setInterval(tarteaucitron.cookie.number,6e4)}},tarteaucitron.parameters.adblocker),!0===tarteaucitron.parameters.adblocker&&setTimeout(function(){if(!1===tarteaucitronNoAdBlocker){if(i='<div id="tarteaucitronAlertBig" class="tarteaucitronAlertBig'+c+'" style="display:block" role="alert" aria-live="polite">',i+='   <p id="tarteaucitronDisclaimerAlert">',i+="       "+tarteaucitron.lang.adblock+"<br/>",i+="       <strong>"+tarteaucitron.lang.adblock_call+"</strong>",i+="   </p>",i+='   <button type="button" class="tarteaucitronCTAButton" onclick="location.reload();">',i+="       "+tarteaucitron.lang.reload,i+="   </button>",i+="</div>",i+='<div id="tarteaucitronPremium"></div>',o.id="tarteaucitronRoot","top"===tarteaucitron.parameters.bodyPosition){var t=n.firstChild;n.insertBefore(o,t)}else n.appendChild(o,n);o.innerHTML=i}},1500)})}),tarteaucitron.events.load&&tarteaucitron.events.load()},addService:function(t){"use strict";var e="",a=tarteaucitron.services[t],r=tarteaucitron.cookie.read(),n=document.location.hostname,o=document.referrer.split("/")[2]===n&&window.location.href!==tarteaucitron.parameters.privacyUrl,i=!a.needConsent,c=r.indexOf(a.key+"=wait")>=0,u=r.indexOf(a.key+"=false")>=0,s=r.indexOf(a.key+"=true")>=0,l=r.indexOf(a.key+"=false")>=0||r.indexOf(a.key+"=true")>=0,d="1"===navigator.doNotTrack||"yes"===navigator.doNotTrack||"1"===navigator.msDoNotTrack||"1"===window.doNotTrack;if(!0!==tarteaucitron.added[a.key]){if(tarteaucitron.added[a.key]=!0,e+='<li id="'+a.key+'Line" class="tarteaucitronLine">',e+='   <div class="tarteaucitronName">',e+='       <span class="tarteaucitronH3" role="heading" aria-level="3">'+a.name+"</span>",e+='       <span id="tacCL'+a.key+'" class="tarteaucitronListCookies"></span><br/>',1==tarteaucitron.parameters.moreInfoLink){var m="https://tarteaucitron.io/service/"+a.key+"/";void 0!==a.readmoreLink&&""!==a.readmoreLink&&(m=a.readmoreLink),void 0!==tarteaucitron.parameters.readmoreLink&&""!==tarteaucitron.parameters.readmoreLink&&(m=tarteaucitron.parameters.readmoreLink),e+='       <a href="'+m+'" target="_blank" rel="noreferrer noopener" title="'+tarteaucitron.lang.cookieDetail+" "+a.name+" "+tarteaucitron.lang.ourSite+" "+tarteaucitron.lang.newWindow+'">',e+="           "+tarteaucitron.lang.more,e+="       </a>",e+="        - ",e+='       <a href="'+a.uri+'" target="_blank" rel="noreferrer noopener" title="'+a.name+" "+tarteaucitron.lang.newWindow+'">',e+="           "+tarteaucitron.lang.source,e+="       </a>"}e+="   </div>",e+='   <div class="tarteaucitronAsk">',e+='       <button type="button" id="'+a.key+'Allowed" class="tarteaucitronAllow" onclick="tarteaucitron.userInterface.respond(this, true);">',e+="           &#10003; "+tarteaucitron.lang.allow,e+="       </button> ",e+='       <button type="button" id="'+a.key+'Denied" class="tarteaucitronDeny" onclick="tarteaucitron.userInterface.respond(this, false);">',e+="           &#10007; "+tarteaucitron.lang.deny,e+="       </button>",e+="   </div>",e+="</li>",tarteaucitron.userInterface.css("tarteaucitronServicesTitle_"+a.type,"display","block"),null!==document.getElementById("tarteaucitronServices_"+a.type)&&(document.getElementById("tarteaucitronServices_"+a.type).innerHTML+=e),tarteaucitron.userInterface.css("tarteaucitronNoServicesTitle","display","none"),tarteaucitron.userInterface.order(a.type)}tarteaucitron.pro("!"+a.key+"="+s),!1===l&&!0===tarteaucitron.user.bypass&&(s=!0,tarteaucitron.cookie.create(a.key,!0)),!l&&(i||o&&c)&&!tarteaucitron.highPrivacy||s?(s||tarteaucitron.cookie.create(a.key,!0),!0!==tarteaucitron.launch[a.key]&&(tarteaucitron.launch[a.key]=!0,a.js(),tarteaucitron.sendEvent(a.key+"_loaded")),tarteaucitron.state[a.key]=!0,tarteaucitron.userInterface.color(a.key,!0)):u?("function"==typeof a.fallback&&a.fallback(),tarteaucitron.state[a.key]=!1,tarteaucitron.userInterface.color(a.key,!1)):!l&&d&&tarteaucitron.handleBrowserDNTRequest?(tarteaucitron.cookie.create(a.key,"false"),"function"==typeof a.fallback&&a.fallback(),tarteaucitron.state[a.key]=!1,tarteaucitron.userInterface.color(a.key,!1)):l||(tarteaucitron.cookie.create(a.key,"wait"),"function"==typeof a.fallback&&a.fallback(),tarteaucitron.userInterface.color(a.key,"wait"),tarteaucitron.userInterface.openAlert()),tarteaucitron.cookie.checkCount(a.key),tarteaucitron.sendEvent(a.key+"_added")},sendEvent:function(t){var e;void 0!==t&&("function"==typeof Event?e=new Event(t):(e=document.createEvent("Event")).initEvent(t,!0,!0),document.dispatchEvent(e))},cleanArray:function(t){"use strict";var e,a=t.length,r=[],n={},o=tarteaucitron.services;for(e=0;e<a;e+=1)n[t[e]]||(n[t[e]]={},void 0!==tarteaucitron.services[t[e]]&&r.push(t[e]));return r=r.sort(function(t,e){return o[t].type+o[t].key>o[e].type+o[e].key?1:o[t].type+o[t].key<o[e].type+o[e].key?-1:0})},userInterface:{css:function(t,e,a){"use strict";null!==document.getElementById(t)&&(document.getElementById(t).style[e]=a)},addClass:function(t,e){"use strict";null!==document.getElementById(t)&&document.getElementById(t).classList.add(e)},removeClass:function(t,e){"use strict";null!==document.getElementById(t)&&document.getElementById(t).classList.remove(e)},respondAll:function(t){"use strict";var e,a=tarteaucitron.services,r=0;for(r=0;r<tarteaucitron.job.length;r+=1)e=a[tarteaucitron.job[r]].key,tarteaucitron.state[e]!==t&&(!1===t&&!0===tarteaucitron.launch[e]&&(tarteaucitron.reloadThePage=!0),!0!==tarteaucitron.launch[e]&&!0===t&&(tarteaucitron.pro("!"+e+"=engage"),tarteaucitron.launch[e]=!0,tarteaucitron.services[e].js()),tarteaucitron.state[e]=t,tarteaucitron.cookie.create(e,t),tarteaucitron.userInterface.color(e,t))},respond:function(t,e){"use strict";var a=t.id.replace(new RegExp("(Eng[0-9]+|Allow|Deni)ed","g"),"");tarteaucitron.state[a]!==e&&(!1===e&&!0===tarteaucitron.launch[a]&&(tarteaucitron.reloadThePage=!0),!0===e&&!0!==tarteaucitron.launch[a]&&(tarteaucitron.pro("!"+a+"=engage"),tarteaucitron.launch[a]=!0,tarteaucitron.sendEvent(a+"_loaded"),tarteaucitron.services[a].js()),tarteaucitron.state[a]=e,tarteaucitron.cookie.create(a,e),tarteaucitron.userInterface.color(a,e))},color:function(t,e){"use strict";var a,r="tarteaucitron",n=0,o=0,i=0,c=tarteaucitron.job.length;for(!0===e?(document.getElementById(t+"Line").classList.add("tarteaucitronIsAllowed"),document.getElementById(t+"Line").classList.remove("tarteaucitronIsDenied")):!1===e&&(document.getElementById(t+"Line").classList.remove("tarteaucitronIsAllowed"),document.getElementById(t+"Line").classList.add("tarteaucitronIsDenied")),a=0;a<c;a+=1)!1===tarteaucitron.state[tarteaucitron.job[a]]?n+=1:void 0===tarteaucitron.state[tarteaucitron.job[a]]?o+=1:!0===tarteaucitron.state[tarteaucitron.job[a]]&&(i+=1);tarteaucitron.userInterface.css(r+"DotGreen","width",100/c*i+"%"),tarteaucitron.userInterface.css(r+"DotYellow","width",100/c*o+"%"),tarteaucitron.userInterface.css(r+"DotRed","width",100/c*n+"%"),0===n&&0===o?(tarteaucitron.userInterface.removeClass(r+"AllDenied",r+"IsSelected"),tarteaucitron.userInterface.addClass(r+"AllAllowed",r+"IsSelected"),tarteaucitron.userInterface.addClass(r+"MainLineOffset",r+"IsAllowed"),tarteaucitron.userInterface.removeClass(r+"MainLineOffset",r+"IsDenied")):0===i&&0===o?(tarteaucitron.userInterface.removeClass(r+"AllAllowed",r+"IsSelected"),tarteaucitron.userInterface.addClass(r+"AllDenied",r+"IsSelected"),tarteaucitron.userInterface.removeClass(r+"MainLineOffset",r+"IsAllowed"),tarteaucitron.userInterface.addClass(r+"MainLineOffset",r+"IsDenied")):(tarteaucitron.userInterface.removeClass(r+"AllAllowed",r+"IsSelected"),tarteaucitron.userInterface.removeClass(r+"AllDenied",r+"IsSelected"),tarteaucitron.userInterface.removeClass(r+"MainLineOffset",r+"IsAllowed"),tarteaucitron.userInterface.removeClass(r+"MainLineOffset",r+"IsDenied")),0===o&&tarteaucitron.userInterface.closeAlert(),tarteaucitron.services[t].cookies.length>0&&!1===e&&tarteaucitron.cookie.purge(tarteaucitron.services[t].cookies),!0===e?(null!==document.getElementById("tacCL"+t)&&(document.getElementById("tacCL"+t).innerHTML="..."),setTimeout(function(){tarteaucitron.cookie.checkCount(t)},2500)):tarteaucitron.cookie.checkCount(t)},openPanel:function(){"use strict";var t;tarteaucitron.userInterface.css("tarteaucitron","display","block"),tarteaucitron.userInterface.css("tarteaucitronBack","display","block"),tarteaucitron.userInterface.css("tarteaucitronCookiesListContainer","display","none"),document.getElementById("tarteaucitronClosePanel").focus(),document.getElementsByTagName("body")[0].classList.add("modal-open"),tarteaucitron.userInterface.focusTrap(),tarteaucitron.userInterface.jsSizing("main"),"function"==typeof Event?t=new Event("tac.open_panel"):(t=document.createEvent("Event")).initEvent("tac.open_panel",!0,!0),window.dispatchEvent(t)},closePanel:function(){"use strict";var t;document.location.hash===tarteaucitron.hashtag&&(window.history?window.history.replaceState("",document.title,window.location.pathname+window.location.search):document.location.hash=""),tarteaucitron.userInterface.css("tarteaucitron","display","none"),tarteaucitron.userInterface.css("tarteaucitronCookiesListContainer","display","none"),tarteaucitron.fallback(["tarteaucitronInfoBox"],function(t){t.style.display="none"},!0),!0===tarteaucitron.reloadThePage?window.location.reload():tarteaucitron.userInterface.css("tarteaucitronBack","display","none"),null!==document.getElementById("tarteaucitronCloseAlert")&&document.getElementById("tarteaucitronCloseAlert").focus(),document.getElementsByTagName("body")[0].classList.remove("modal-open"),"function"==typeof Event?t=new Event("tac.close_panel"):(t=document.createEvent("Event")).initEvent("tac.close_panel",!0,!0),window.dispatchEvent(t)},focusTrap:function(){"use strict";var t,e,a,r;r=[];for(var n=0,o=(t=document.getElementById("tarteaucitron").querySelectorAll("a[href], button")).length;n<o;n++)t[n].offsetHeight>0&&r.push(t[n]);e=r[0],a=r[r.length-1],document.getElementById("tarteaucitron").addEventListener("keydown",function(t){"Tab"!==t.key&&9!==t.keyCode||(t.shiftKey?document.activeElement===e&&(a.focus(),t.preventDefault()):document.activeElement===a&&(e.focus(),t.preventDefault()))})},openAlert:function(){"use strict";var t,e="tarteaucitron";tarteaucitron.userInterface.css(e+"Percentage","display","block"),tarteaucitron.userInterface.css(e+"AlertSmall","display","none"),tarteaucitron.userInterface.css(e+"AlertBig","display","block"),tarteaucitron.userInterface.addClass(e+"Root","tarteaucitronBeforeVisible"),"function"==typeof Event?t=new Event("tac.open_alert"):(t=document.createEvent("Event")).initEvent("tac.open_alert",!0,!0),window.dispatchEvent(t)},closeAlert:function(){"use strict";var t,e="tarteaucitron";tarteaucitron.userInterface.css(e+"Percentage","display","none"),tarteaucitron.userInterface.css(e+"AlertSmall","display","block"),tarteaucitron.userInterface.css(e+"AlertBig","display","none"),tarteaucitron.userInterface.removeClass(e+"Root","tarteaucitronBeforeVisible"),tarteaucitron.userInterface.jsSizing("box"),"function"==typeof Event?t=new Event("tac.close_alert"):(t=document.createEvent("Event")).initEvent("tac.close_alert",!0,!0),window.dispatchEvent(t)},toggleCookiesList:function(){"use strict";var t=document.getElementById("tarteaucitronCookiesListContainer");null!==t&&("block"!==t.style.display?(tarteaucitron.cookie.number(),t.style.display="block",tarteaucitron.userInterface.jsSizing("cookie"),tarteaucitron.userInterface.css("tarteaucitron","display","none"),tarteaucitron.userInterface.css("tarteaucitronBack","display","block"),tarteaucitron.fallback(["tarteaucitronInfoBox"],function(t){t.style.display="none"},!0)):(t.style.display="none",tarteaucitron.userInterface.css("tarteaucitron","display","none"),tarteaucitron.userInterface.css("tarteaucitronBack","display","none")))},toggle:function(t,e){"use strict";var a=document.getElementById(t);null!==a&&(void 0!==e&&tarteaucitron.fallback([e],function(e){e.id!==t&&(e.style.display="none")},!0),"block"!==a.style.display?a.style.display="block":a.style.display="none")},order:function(t){"use strict";var e=document.getElementById("tarteaucitronServices_"+t);null!==e&&(e.childNodes,"function"==typeof Array.prototype.map&&"undefined"==typeof Enumerable&&Array.prototype.map.call(e.children,Object).sort(function(t,e){return tarteaucitron.services[t.id.replace(/Line/g,"")].name>tarteaucitron.services[e.id.replace(/Line/g,"")].name?1:tarteaucitron.services[t.id.replace(/Line/g,"")].name<tarteaucitron.services[e.id.replace(/Line/g,"")].name?-1:0}).forEach(function(t){e.appendChild(t)}))},jsSizing:function(t){"use strict";var e,a,r,n,o,i,c,u,s=10,l=window,d="inner",m=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;"box"===t?null!==document.getElementById("tarteaucitronAlertSmall")&&null!==document.getElementById("tarteaucitronCookiesNumber")&&(tarteaucitron.userInterface.css("tarteaucitronCookiesNumber","padding","0px 10px"),u=(document.getElementById("tarteaucitronAlertSmall").offsetHeight-document.getElementById("tarteaucitronCookiesNumber").offsetHeight)/2,tarteaucitron.userInterface.css("tarteaucitronCookiesNumber","padding",u+"px 10px")):"main"===t?(void 0===window.innerWidth&&(d="client",l=document.documentElement||document.body),null!==document.getElementById("tarteaucitron")&&null!==document.getElementById("tarteaucitronClosePanel")&&null!==document.getElementById("tarteaucitronMainLineOffset")&&(tarteaucitron.userInterface.css("tarteaucitronServices","height","auto"),r=document.getElementById("tarteaucitron").offsetHeight-document.getElementById("tarteaucitronClosePanel").offsetHeight+2,tarteaucitron.userInterface.css("tarteaucitronServices","height",r+"px"),tarteaucitron.userInterface.css("tarteaucitronServices","overflow-x","auto")),null!==document.getElementById("tarteaucitronServices")&&null!==document.getElementById("tarteaucitronScrollbarChild")&&(l[d+"Width"]<=479?tarteaucitron.userInterface.css("tarteaucitronScrollbarAdjust","marginLeft","11px"):l[d+"Width"]<=767&&(s=12),e=document.getElementById("tarteaucitronServices").offsetWidth,a=document.getElementById("tarteaucitronScrollbarChild").offsetWidth,tarteaucitron.userInterface.css("tarteaucitronScrollbarAdjust","marginRight",e-a+s+"px")),null!==document.getElementById("tarteaucitron")&&(n=l[d+"Width"]<=767?0:(m-document.getElementById("tarteaucitron").offsetHeight)/2-21,null!==document.getElementById("tarteaucitronMainLineOffset")&&document.getElementById("tarteaucitron").offsetHeight<m/2&&(n-=document.getElementById("tarteaucitronMainLineOffset").offsetHeight),n<0&&(n=0),tarteaucitron.userInterface.css("tarteaucitron","top",n+"px"))):"cookie"===t&&(null!==document.getElementById("tarteaucitronAlertSmall")&&tarteaucitron.userInterface.css("tarteaucitronCookiesListContainer","bottom",document.getElementById("tarteaucitronAlertSmall").offsetHeight+"px"),null!==document.getElementById("tarteaucitronCookiesListContainer")&&(tarteaucitron.userInterface.css("tarteaucitronCookiesList","height","auto"),o=document.getElementById("tarteaucitronCookiesListContainer").offsetHeight,i=document.getElementById("tarteaucitronClosePanelCookie").offsetHeight,c=document.getElementById("tarteaucitronCookiesTitle").offsetHeight,tarteaucitron.userInterface.css("tarteaucitronCookiesList","height",o-i-c-2+"px")))}},cookie:{owner:{},create:function(t,e){"use strict";""!==tarteaucitronForceExpire&&(tarteaucitronExpireInDay&&tarteaucitronForceExpire<365||!tarteaucitronExpireInDay&&tarteaucitronForceExpire<8760)&&(timeExpire=tarteaucitronExpireInDay?864e5*tarteaucitronForceExpire:36e5*tarteaucitronForceExpire);var a=new Date,r=a.getTime()+timeExpire,n=new RegExp("!"+t+"=(wait|true|false)","g"),o=tarteaucitron.cookie.read().replace(n,""),i=tarteaucitron.parameters.cookieName+"="+o+"!"+t+"="+e,c=void 0!==tarteaucitron.parameters.cookieDomain&&""!==tarteaucitron.parameters.cookieDomain?"domain="+tarteaucitron.parameters.cookieDomain+";":"";a.setTime(r),document.cookie=i+"; expires="+a.toGMTString()+"; path=/;"+c},read:function(){"use strict";var t,e,a=tarteaucitron.parameters.cookieName+"=",r=document.cookie.split(";");for(t=0;t<r.length;t+=1){for(e=r[t];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(a))return e.substring(a.length,e.length)}return""},purge:function(t){"use strict";var e;for(e=0;e<t.length;e+=1)document.cookie=t[e]+"=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/;",document.cookie=t[e]+"=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/; domain=."+location.hostname+";",document.cookie=t[e]+"=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/; domain=."+location.hostname.split(".").slice(-2).join(".")+";"},checkCount:function(t){"use strict";var e,a=tarteaucitron.services[t].cookies,r=a.length,n=0,o="",i=document.cookie.indexOf(t+"=true");if(i>=0&&0===r)o+=tarteaucitron.lang.useNoCookie;else if(i>=0){for(e=0;e<r;e+=1)-1!==document.cookie.indexOf(a[e]+"=")&&(n+=1,void 0===tarteaucitron.cookie.owner[a[e]]&&(tarteaucitron.cookie.owner[a[e]]=[]),!1===tarteaucitron.cookie.crossIndexOf(tarteaucitron.cookie.owner[a[e]],tarteaucitron.services[t].name)&&tarteaucitron.cookie.owner[a[e]].push(tarteaucitron.services[t].name));n>0?(o+=tarteaucitron.lang.useCookieCurrent+" "+n+" cookie",n>1&&(o+="s"),o+="."):o+=tarteaucitron.lang.useNoCookie}else 0===r?o=tarteaucitron.lang.noCookie:(o+=tarteaucitron.lang.useCookie+" "+r+" cookie",r>1&&(o+="s"),o+=".");null!==document.getElementById("tacCL"+t)&&(document.getElementById("tacCL"+t).innerHTML=o)},crossIndexOf:function(t,e){"use strict";var a;for(a=0;a<t.length;a+=1)if(t[a]===e)return!0;return!1},number:function(){"use strict";var t,e,a,r,n,o,i,c=document.cookie.split(";"),u=""!==document.cookie?c.length:0,s="",l=u>1?"s":"",d=/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i,m=null!==tarteaucitron.cdn.match(d)?tarteaucitron.cdn.match(d)[1]:tarteaucitron.cdn,p=void 0!==tarteaucitron.domain?tarteaucitron.domain:m;if(c=c.sort(function(t,e){return a=t.split("=",1).toString().replace(/ /g,""),r=e.split("=",1).toString().replace(/ /g,""),n=void 0!==tarteaucitron.cookie.owner[a]?tarteaucitron.cookie.owner[a]:"0",o=void 0!==tarteaucitron.cookie.owner[r]?tarteaucitron.cookie.owner[r]:"0",n+t>o+e?1:n+t<o+e?-1:0}),""!==document.cookie){for(t=0;t<u;t+=1)e=c[t].split("=",1).toString().replace(/ /g,""),void 0!==tarteaucitron.cookie.owner[e]&&tarteaucitron.cookie.owner[e].join(" // ")!==i?(i=tarteaucitron.cookie.owner[e].join(" // "),s+='<div class="tarteaucitronHidden">',s+='     <span class="tarteaucitronTitle tarteaucitronH3" role="heading" aria-level="3">',s+="        "+tarteaucitron.cookie.owner[e].join(" // "),s+="    </span>",s+='</div><ul class="cookie-list">'):void 0===tarteaucitron.cookie.owner[e]&&p!==i&&(i=p,s+='<div class="tarteaucitronHidden">',s+='     <span class="tarteaucitronTitle tarteaucitronH3" role="heading" aria-level="3">',s+="        "+p,s+="    </span>",s+='</div><ul class="cookie-list">'),s+='<li class="tarteaucitronCookiesListMain">',s+='    <div class="tarteaucitronCookiesListLeft"><button type="button" onclick="tarteaucitron.cookie.purge([\''+c[t].split("=",1)+"']);tarteaucitron.cookie.number();tarteaucitron.userInterface.jsSizing('cookie');return false\"><strong>&times;</strong></button> <strong>"+e+"</strong>",s+="    </div>",s+='    <div class="tarteaucitronCookiesListRight">'+c[t].split("=").slice(1).join("=")+"</div>",s+="</li>";s+="</ul>"}else s+='<div class="tarteaucitronCookiesListMain">',s+='    <div class="tarteaucitronCookiesListLeft"><strong>-</strong></div>',s+='    <div class="tarteaucitronCookiesListRight"></div>',s+="</div>";for(s+='<div class="tarteaucitronHidden" style="height:20px;display:block"></div>',null!==document.getElementById("tarteaucitronCookiesList")&&(document.getElementById("tarteaucitronCookiesList").innerHTML=s),null!==document.getElementById("tarteaucitronCookiesNumber")&&(document.getElementById("tarteaucitronCookiesNumber").innerHTML=u),null!==document.getElementById("tarteaucitronCookiesNumberBis")&&(document.getElementById("tarteaucitronCookiesNumberBis").innerHTML=u+" cookie"+l),t=0;t<tarteaucitron.job.length;t+=1)tarteaucitron.cookie.checkCount(tarteaucitron.job[t])}},getLanguage:function(){"use strict";var t="bg,cn,cs,da,de,el,en,es,fi,fr,hu,it,ja,nl,pl,pt,ro,ru,sk,tr";if(""!==tarteaucitronForceLanguage&&-1!==t.indexOf(tarteaucitronForceLanguage))return tarteaucitronForceLanguage;if(!navigator)return"en";var e=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLang||null,a=e?e.substr(0,2):null;return-1===t.indexOf(a)?"en":a},getLocale:function(){"use strict";if(!navigator)return"en_US";var t=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLang||null,e=t?t.substr(0,2):null;return"fr"===e?"fr_FR":"en"===e?"en_US":"de"===e?"de_DE":"es"===e?"es_ES":"it"===e?"it_IT":"pt"===e?"pt_PT":"nl"===e?"nl_NL":"el"===e?"el_EL":"en_US"},addScript:function(t,e,a,r,n,o,i){"use strict";var c,u=!1;!1===r?"function"==typeof a&&a():((c=document.createElement("script")).type="text/javascript",c.id=void 0!==e?e:"",c.async=!0,c.src=t,void 0!==n&&void 0!==o&&c.setAttribute(n,o),"function"==typeof a&&(tarteaucitron.parameters.useExternalJs?a():c.onreadystatechange=c.onload=function(){var t=c.readyState;u||t&&!/loaded|complete/.test(t)||(u=!0,a())}),tarteaucitron.parameters.useExternalJs&&i||document.getElementsByTagName("head")[0].appendChild(c))},addInternalScript:function(t,e,a,r,n,o){tarteaucitron.addScript(t,e,a,r,n,o,!0)},makeAsync:{antiGhost:0,buffer:"",init:function(t,e){"use strict";var a=document.write,r=document.writeln;document.write=function(t){tarteaucitron.makeAsync.buffer+=t},document.writeln=function(t){tarteaucitron.makeAsync.buffer+=t.concat("\n")},setTimeout(function(){document.write=a,document.writeln=r},2e4),tarteaucitron.makeAsync.getAndParse(t,e)},getAndParse:function(t,e){"use strict";tarteaucitron.makeAsync.antiGhost>9?tarteaucitron.makeAsync.antiGhost=0:(tarteaucitron.makeAsync.antiGhost+=1,tarteaucitron.addInternalScript(t,"",function(){null!==document.getElementById(e)&&(document.getElementById(e).innerHTML+="<span style='display:none'>&nbsp;</span>"+tarteaucitron.makeAsync.buffer,tarteaucitron.makeAsync.buffer="",tarteaucitron.makeAsync.execJS(e))}))},execJS:function(id){var i,scripts,childId,type;if(null!==document.getElementById(id))for(scripts=document.getElementById(id).getElementsByTagName("script"),i=0;i<scripts.length;i+=1)type=null!==scripts[i].getAttribute("type")?scripts[i].getAttribute("type"):"",""===type&&(type=null!==scripts[i].getAttribute("language")?scripts[i].getAttribute("language"):""),null!==scripts[i].getAttribute("src")&&""!==scripts[i].getAttribute("src")?(childId=id+Math.floor(99999999999*Math.random()),document.getElementById(id).innerHTML+='<div id="'+childId+'"></div>',tarteaucitron.makeAsync.getAndParse(scripts[i].getAttribute("src"),childId)):-1===type.indexOf("javascript")&&""!==type||eval(scripts[i].innerHTML)}},fallback:function(t,e,a){"use strict";var r,n=document.getElementsByTagName("*"),o=0;for(r in n)if(void 0!==n[r])for(o=0;o<t.length;o+=1)(" "+n[r].className+" ").indexOf(" "+t[o]+" ")>-1&&("function"==typeof e?!0===a?e(n[r]):n[r].innerHTML=e(n[r]):n[r].innerHTML=e)},engage:function(t){"use strict";var e="",a=Math.floor(1e5*Math.random()),r=tarteaucitron.services[t].name+" "+tarteaucitron.lang.fallback;return void 0!==tarteaucitron.lang["engage-"+t]&&(r=tarteaucitron.lang["engage-"+t]),e+='<div class="tac_activate">',e+='   <div class="tac_float">',e+="      "+r,e+='      <button type="button" class="tarteaucitronAllow" id="Eng'+a+"ed"+t+'" onclick="tarteaucitron.userInterface.respond(this, true);">',e+="          &#10003; "+tarteaucitron.lang.allow,e+="       </button>",e+="   </div>",e+="</div>"},extend:function(t,e){"use strict";var a;for(a in e)e.hasOwnProperty(a)&&(t[a]=e[a])},proTemp:"",proTimer:function(){"use strict";setTimeout(tarteaucitron.proPing,500)},pro:function(t){"use strict";tarteaucitron.proTemp+=t,clearTimeout(tarteaucitron.proTimer),tarteaucitron.proTimer=setTimeout(tarteaucitron.proPing,500)},proPing:function(){"use strict";if(""!==tarteaucitron.uuid&&void 0!==tarteaucitron.uuid&&""!==tarteaucitron.proTemp){var t=document.getElementById("tarteaucitronPremium"),e=(new Date).getTime(),a="https://tarteaucitron.io/log/?";if(null===t)return;a+="account="+tarteaucitron.uuid+"&",a+="domain="+tarteaucitron.domain+"&",a+="status="+encodeURIComponent(tarteaucitron.proTemp)+"&",a+="_time="+e,t.innerHTML='<img src="'+a+'" style="display:none" />',tarteaucitron.proTemp=""}tarteaucitron.cookie.number()},AddOrUpdate:function(t,e){for(key in e)e[key]instanceof Object?t[key]=tarteaucitron.AddOrUpdate(t[key],e[key]):t[key]=e[key];return t},getElemWidth:function(t){return t.getAttribute("width")||t.clientWidth},getElemHeight:function(t){return t.getAttribute("height")||t.clientHeight}};