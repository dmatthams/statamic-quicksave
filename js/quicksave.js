!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function($){function e(e){return c.raw?e:encodeURIComponent(e)}function o(e){return c.raw?e:decodeURIComponent(e)}function n(o){return e(c.json?JSON.stringify(o):String(o))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(r," ")),c.json?JSON.parse(e):e}catch(o){}}function t(e,o){var n=c.raw?e:i(e);return $.isFunction(o)?o(n):n}var r=/\+/g,c=$.cookie=function(i,r,u){if(void 0!==r&&!$.isFunction(r)){if(u=$.extend({},c.defaults,u),"number"==typeof u.expires){var s=u.expires,p=u.expires=new Date;p.setTime(+p+864e5*s)}return document.cookie=[e(i),"=",n(r),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}for(var d=i?void 0:{},f=document.cookie?document.cookie.split("; "):[],a=0,m=f.length;m>a;a++){var l=f[a].split("="),k=o(l.shift()),v=l.join("=");if(i&&i===k){d=t(v,r);break}i||void 0===(v=t(v))||(d[k]=v)}return d};c.defaults={},$.removeCookie=function(e,o){return void 0===$.cookie(e)?!1:($.cookie(e,"",$.extend({},o,{expires:-1})),!$.cookie(e))}}),

$(window).keydown(function(event) {
    if (!(event.which == 115 && event.ctrlKey||event.metaKey) && !(event.which == 83)) return true;
    event.preventDefault();
    $.cookie('position', $(document).scrollTop());
    $('#publish-continue-submit').click();
    return false;
});


$(window).load(function(){
    function setposition() {
        position = $.cookie('position');
        $(document).scrollTop(position);
        $.removeCookie('test');
    }
    setTimeout(setposition, 50);
});