webpackJsonp([0xa6bc690a59e9],{14:function(e,t){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,c,i=r(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var s in n)a.call(n,s)&&(i[s]=n[s]);if(o){c=o(n);for(var f=0;f<c.length;f++)u.call(n,c[f])&&(i[c[f]]=n[c[f]])}}return i}},140:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(1),a=n(o),u=function(){function e(){return a.default.createElement("div",null,a.default.createElement("h1",null,"NOT FOUND"),a.default.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}return e}();t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-404-jsx-38cd7a15be72a1308160.js.map