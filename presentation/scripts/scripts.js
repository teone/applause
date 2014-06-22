var Showdown={extensions:{}},forEach=Showdown.forEach=function(e,n){if("function"==typeof e.forEach)e.forEach(n);else{var r,t=e.length;for(r=0;t>r;r++)n(e[r],r,e)}},stdExtName=function(e){return e.replace(/[_-]||\s/g,"").toLowerCase()};Showdown.converter=function(e){var n,r,t,a=0,i=[],o=[];if("undefind"!=typeof module&&"undefined"!=typeof exports&&"undefind"!=typeof require){var l=require("fs");if(l){var c=l.readdirSync((__dirname||".")+"/extensions").filter(function(e){return~e.indexOf(".js")}).map(function(e){return e.replace(/\.js$/,"")});Showdown.forEach(c,function(e){var n=stdExtName(e);Showdown.extensions[n]=require("./extensions/"+e)})}}if(this.makeHtml=function(e){return n={},r={},t=[],e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),e="\n\n"+e+"\n\n",e=F(e),e=e.replace(/^[ \t]+$/gm,""),Showdown.forEach(i,function(n){e=p(n,e)}),e=E(e),e=g(e),e=d(e),e=h(e),e=M(e),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),Showdown.forEach(o,function(n){e=p(n,e)}),e},e&&e.extensions){var s=this;Showdown.forEach(e.extensions,function(e){if("string"==typeof e&&(e=Showdown.extensions[stdExtName(e)]),"function"!=typeof e)throw"Extension '"+e+"' could not be loaded.  It was either not found or is not a valid extension.";Showdown.forEach(e(s),function(e){e.type?"language"===e.type||"lang"===e.type?i.push(e):("output"===e.type||"html"===e.type)&&o.push(e):o.push(e)})})}var u,p=function(e,n){if(e.regex){var r=new RegExp(e.regex,"g");return n.replace(r,e.replace)}return e.filter?e.filter(n):void 0},d=function(e){return e+="~0",e=e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm,function(e,t,a,i,o){return t=t.toLowerCase(),n[t]=I(a),i?i+o:(o&&(r[t]=o.replace(/"/g,"&quot;")),"")}),e=e.replace(/~0/,"")},g=function(e){e=e.replace(/\n/g,"\n\n");return e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,f),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,f),e=e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,f),e=e.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,f),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,f),e=e.replace(/\n\n/g,"\n")},f=function(e,n){var r=n;return r=r.replace(/\n\n/g,"\n"),r=r.replace(/^\n/,""),r=r.replace(/\n+$/g,""),r="\n\n~K"+(t.push(r)-1)+"K\n\n"},h=function(e){e=$(e);var n=A("<hr />");return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,n),e=k(e),e=x(e),e=q(e),e=g(e),e=z(e)},m=function(e){return e=T(e),e=v(e),e=j(e),e=b(e),e=w(e),e=K(e),e=I(e),e=_(e),e=e.replace(/  +\n/g," <br />\n")},v=function(e){var n=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return e=e.replace(n,function(e){var n=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return n=G(n,"\\`*_")})},w=function(e){return e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,S),e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,S),e=e.replace(/(\[([^\[\]]+)\])()()()()()/g,S)},S=function(e,t,a,i,o,l,c,s){void 0==s&&(s="");var u=t,p=a,d=i.toLowerCase(),g=o,f=s;if(""==g)if(""==d&&(d=p.toLowerCase().replace(/ ?\n/g," ")),g="#"+d,void 0!=n[d])g=n[d],void 0!=r[d]&&(f=r[d]);else{if(!(u.search(/\(\s*\)$/m)>-1))return u;g=""}g=G(g,"*_");var h='<a href="'+g+'"';return""!=f&&(f=f.replace(/"/g,"&quot;"),f=G(f,"*_"),h+=' title="'+f+'"'),h+=">"+p+"</a>"},b=function(e){return e=e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,y),e=e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,y)},y=function(e,t,a,i,o,l,c,s){var u=t,p=a,d=i.toLowerCase(),g=o,f=s;if(f||(f=""),""==g){if(""==d&&(d=p.toLowerCase().replace(/ ?\n/g," ")),g="#"+d,void 0==n[d])return u;g=n[d],void 0!=r[d]&&(f=r[d])}p=p.replace(/"/g,"&quot;"),g=G(g,"*_");var h='<img src="'+g+'" alt="'+p+'"';return f=f.replace(/"/g,"&quot;"),f=G(f,"*_"),h+=' title="'+f+'"',h+=" />"},$=function(e){function n(e){return e.replace(/[^\w]/g,"").toLowerCase()}return e=e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(e,r){return A('<h1 id="'+n(r)+'">'+m(r)+"</h1>")}),e=e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(e,r){return A('<h2 id="'+n(r)+'">'+m(r)+"</h2>")}),e=e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(e,r,t){var a=r.length;return A("<h"+a+' id="'+n(t)+'">'+m(t)+"</h"+a+">")})},k=function(e){e+="~0";var n=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return a?e=e.replace(n,function(e,n,r){var t=n,a=r.search(/[*+-]/g)>-1?"ul":"ol";t=t.replace(/\n{2,}/g,"\n\n\n");var i=u(t);return i=i.replace(/\s+$/,""),i="<"+a+">"+i+"</"+a+">\n"}):(n=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,e=e.replace(n,function(e,n,r,t){var a=n,i=r,o=t.search(/[*+-]/g)>-1?"ul":"ol",i=i.replace(/\n{2,}/g,"\n\n\n"),l=u(i);return l=a+"<"+o+">\n"+l+"</"+o+">\n"})),e=e.replace(/~0/,"")};u=function(e){return a++,e=e.replace(/\n{2,}$/,"\n"),e+="~0",e=e.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,function(e,n,r,t,a){var i=a,o=n;return o||i.search(/\n{2,}/)>-1?i=h(H(i)):(i=k(H(i)),i=i.replace(/\n$/,""),i=m(i)),"<li>"+i+"</li>\n"}),e=e.replace(/~0/g,""),a--,e};var x=function(e){return e+="~0",e=e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(e,n,r){var t=n,a=r;return t=C(H(t)),t=F(t),t=t.replace(/^\n+/g,""),t=t.replace(/\n+$/g,""),t="<pre><code>"+t+"\n</code></pre>",A(t)+a}),e=e.replace(/~0/,"")},E=function(e){return e+="~0",e=e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(e,n,r){var t=n,a=r;return a=C(a),a=F(a),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),a="<pre><code"+(t?' class="'+t+'"':"")+">"+a+"\n</code></pre>",A(a)}),e=e.replace(/~0/,"")},A=function(e){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(t.push(e)-1)+"K\n\n"},T=function(e){return e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,n,r,t){var a=t;return a=a.replace(/^([ \t]*)/g,""),a=a.replace(/[ \t]*$/g,""),a=C(a),n+"<code>"+a+"</code>"})},C=function(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=G(e,"*_{}[]\\",!1)},_=function(e){return e=e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>"),e=e.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>")},q=function(e){return e=e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,n){var r=n;return r=r.replace(/^[ \t]*>[ \t]?/gm,"~0"),r=r.replace(/~0/g,""),r=r.replace(/^[ \t]+$/gm,""),r=h(r),r=r.replace(/(^|\n)/g,"$1  "),r=r.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,n){var r=n;return r=r.replace(/^  /gm,"~0"),r=r.replace(/~0/g,"")}),A("<blockquote>\n"+r+"\n</blockquote>")})},z=function(e){e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var n=e.split(/\n{2,}/g),r=[],a=n.length,i=0;a>i;i++){var o=n[i];o.search(/~K(\d+)K/g)>=0?r.push(o):o.search(/\S/)>=0&&(o=m(o),o=o.replace(/^([ \t]*)/g,"<p>"),o+="</p>",r.push(o))}a=r.length;for(var i=0;a>i;i++)for(;r[i].search(/~K(\d+)K/)>=0;){var l=t[RegExp.$1];l=l.replace(/\$/g,"$$$$"),r[i]=r[i].replace(/~K\d+K/,l)}return r.join("\n\n")},I=function(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;")},j=function(e){return e=e.replace(/\\(\\)/g,N),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,N)},K=function(e){return e=e.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,'<a href="$1">$1</a>'),e=e.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,function(e,n){return L(M(n))})},L=function(e){var n=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e="mailto:"+e,e=e.replace(/./g,function(e){if("@"==e)e=n[Math.floor(2*Math.random())](e);else if(":"!=e){var r=Math.random();e=r>.9?n[2](e):r>.45?n[1](e):n[0](e)}return e}),e='<a href="'+e+'">'+e+"</a>",e=e.replace(/">.+:/g,'">')},M=function(e){return e=e.replace(/~E(\d+)E/g,function(e,n){var r=parseInt(n);return String.fromCharCode(r)})},H=function(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,"")},F=function(e){return e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"~A~B"),e=e.replace(/~B(.+?)~A/g,function(e,n){for(var r=n,t=4-r.length%4,a=0;t>a;a++)r+=" ";return r}),e=e.replace(/~A/g,"    "),e=e.replace(/~B/g,"")},G=function(e,n,r){var t="(["+n.replace(/([\[\]\\])/g,"\\$1")+"])";r&&(t="\\\\"+t);var a=new RegExp(t,"g");return e=e.replace(a,N)},N=function(e,n){var r=n.charCodeAt(0);return"~E"+r+"E"}},"undefined"!=typeof module&&(module.exports=Showdown),"function"==typeof define&&define.amd&&define("showdown",function(){return Showdown});var applause=angular.module("applauseApp",["ngAnimate","ngSanitize","hljs","applauseTemplates"]);!function(e){try{e=angular.module("applauseTemplates")}catch(n){e=angular.module("applauseTemplates",[])}e.run(["$templateCache",function(e){e.put("views/presentation.html",'<slide>\n  <h1>Applause</h1>\n  <h4>HTML presentations powered by Angular JS</h4>\n  <ul>\n    <li>Simple and clean</li>\n    <li>Fully customizable</li>\n    <li>Useful helpers</li>\n    <li>Keyboard shortcuts\n      <ol>\n        <li><span class="key light-keys">&#9658;</span> or <span class="key light-keys">space</span> next slide</li>\n        <li><span class="key light-keys">&#9668;</span> previous  slide</li>\n        <li><span class="key light-keys">esc</span> toggle "go to" popup</li>\n      </ol>\n    </li>\n  </ul>\n</slide>\n\n<slide>\n  <h2>Why another presentation framework?</h2>\n  <p>There are plenty of presentation frameworks made with HTML, CSS and Javascript around. So why we need another one?</p>\n  <p>We probably don\'t. I\'ve started this project just because I wanted to improve my Angular JS skills.</p>\n  <blockquote><code class="inline">blockquote</code> Lorem ipsum dolor sit amet, consectetur adipisicing elit</blockquote>\n</slide>\n\n<slide>\n  <h2>Code highlighting</h2>\n  <div hljs>\n    applause.directive(\'slide\', function (Appdata) {\n      return {\n        template: \'<section class="slide" ng-transclude=""></section>\',\n        restrict: \'EA\',\n        transclude: true,\n        replace: true,\n        scope: {}\n      };\n    });\n  </div>\n  <p>You just need to add the "hljs" attribute to your element: <code class="inline">&lt;div <strong>hljs</strong>&gt;your code here&lt;/div&gt;</code></p>\n</slide>\n\n<slide markdown>\n  ##Markdown content\n\n  write your slide in markdown if you like it\n\n- list item **one**\n- list item *two*\n</slide>\n\n<slide bg-img="oscar.jpg" credits="TIME & LIFE Pictures http://life.time.com/?attachment_id=11373">\n  <h2 class="left">Auto fitting images</h2>\n  <p class="light-text">Add the "bg-img" attribute to your slide element:<br><code class="inline">&lt;slide <strong>bg-img</strong>="path/to/image"&gt;</code><br>without worrying about the image size.</p>\n  <p class="light-text">You can add credits too (with autolink)<br><code class="inline">&lt;slide bg.img="..." <strong>credits</strong>="..."&gt;</code></p>\n</slide>\n\n<slide>\n  <h3 class="abs-center">Add<br>class="abs-center"<br>to an item to center it</h3>\n</slide>\n\n<slide>\n  <h1>Do you like that?</h1>\n  <img class="center media" src="images/slow-clap.gif" alt=""/>\n  <p class="center">Follow me on twitter <a href="https://twitter.com/granze">@granze</a></p>\n</slide>')}])}(),applause.controller("DeckCtrl",["$scope","Appdata",function(e,n){e.$watch(function(){return n},function(n){e.currentSlide=n.currentSlide,e.lastSlide=n.slides.length},!0),e.next=function(){n.currentSlide<e.lastSlide&&(n.currentSlide+=1)},e.prev=function(){n.currentSlide>1&&(n.currentSlide-=1)},e.$parent.keyup=function(n){switch(n.keyCode){case 27:e.showGoTo=!e.showGoTo;break;case 37:e.prev();break;case 32:case 39:e.next()}}}]),applause.directive("slide",["Appdata",function(e){var n=1,r=function(r){r.n=n,e.slides.push(n),n+=1};return{template:'<section class="slide" ng-class="{previous: n === currentSlide-1, current: n === currentSlide, next: n === currentSlide+1}" ng-transclude fit></section>',restrict:"E",transclude:!0,replace:!0,scope:!0,link:r}}]),applause.directive("fit",["$window",function(e){var n=function(n,r){n.resizeSlide=function(){var n=e.document.querySelector(".slide"),t=e.innerWidth/n.clientWidth,a=e.innerHeight/n.clientHeight,i=Math.min(t,a),o="scale("+i+") translate(-50%, -50%)";r.css({transformOrigin:"0 0",webkitTransformOrigin:"0 0",transform:o,webkitTransform:o})},n.resizeSlide(),angular.element(e).bind("resize",function(){n.resizeSlide(),n.$apply()})};return{link:n}}]),applause.directive("progressBar",function(){var e=function(e,n){e.$watch(function(e){var r=(e.currentSlide/e.lastSlide*100).toFixed(2);n.css("width",r+"%")})};return{template:'<div id="progress-bar"></div>',restrict:"E",replace:!0,link:e}}),applause.factory("Appdata",function(){var e=[],n=1;return{slides:e,currentSlide:n}}),applause.directive("markdown",["$window",function(e){String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var n=new e.Showdown.converter,r=function(e,r){r.html(n.makeHtml(r.text().trim()))};return{restrict:"EA",link:r}}]),applause.directive("bgImg",["$filter",function(e){return function(n,r,t){var a="";if(a=/^(f|ht)tps?:\/\//i.test(t.bgImg)?t.bgImg:"images/"+t.bgImg,r.css({background:"transparent url("+a+") no-repeat 0 0","background-size":"cover"}),t.credits){var i=e("linky")(t.credits,"_blank"),o='<div class="credits">Photo credits: '+i+"</div>";r.append(o)}}}]),applause.directive("goto",["Appdata",function(e){var n=function(n){n.goTo=function(){return isNaN(parseInt(n.goToSlide))?!1:(e.currentSlide=parseInt(n.goToSlide)<=e.slides.length?parseInt(n.goToSlide):e.slides.length,n.goToSlide="",n.showGoTo=!1,void 0)}};return{restrict:"EA",template:'<form ng-submit="goTo()" ng-show="showGoTo" id="go-to" name="goto"><label>Go to: <input required ng-model="goToSlide" type="text" placeholder="slide" autofocus="autofocus"></label></form>',link:n}}]);