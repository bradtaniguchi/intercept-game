(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820],{1458:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return t(4314)}])},4314:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return E}});var o=t(4776),n=t.n(o),a=t(2322),s=t(2483),u=t(8585),i=t(3699);function c(r){let e,t=r[0],o=1;for(;o<r.length;){var n=r[o],a=r[o+1];if(o+=2,("optionalAccess"===n||"optionalCall"===n)&&null==t)return;"access"===n||"optionalAccess"===n?(e=t,t=a(t)):"call"!==n&&"optionalCall"!==n||(t=a(((...r)=>t.call(e,...r))),e=void 0)}return t}var l=t(1757),d=t(4017),p={ip:!1,request:!0,transaction:!0,user:!0},h=["cookies","data","headers","method","query_string","url"],f=["id","username","email"];function v(r,e={}){var t=r.method&&r.method.toUpperCase();let o="";r.route?o=`${r.baseUrl||""}${r.route.path}`:(r.originalUrl||r.url)&&(o=(0,i.rt)(r.originalUrl||r.url||""));let n="";return e.method&&t&&(n+=t),e.method&&e.path&&(n+=" "),e.path&&o&&(n+=o),n}function k(r,e){const{include:t=h,deps:o}=e||{};var n={},a=r.headers||{},s=r.method,u=r.hostname||r.host||a.host||"<no host>",i=`${"https"===r.protocol||r.socket&&r.socket.encrypted?"https":"http"}://${u}${r.originalUrl||r.url||""}`;return t.forEach((e=>{switch(e){case"headers":n.headers=a;break;case"method":n.method=s;break;case"url":n.url=i;break;case"cookies":n.cookies=r.cookies||a.cookie&&o&&o.cookie&&o.cookie.parse(a.cookie)||{};break;case"query_string":n.query_string=y(r,o);break;case"data":if("GET"===s||"HEAD"===s)break;void 0!==r.body&&(n.data=(0,l.HD)(r.body)?r.body:JSON.stringify((0,d.Fv)(r.body)));break;default:({}).hasOwnProperty.call(r,e)&&(n[e]=r[e])}})),n}function m(r,e,t){var o={...p,...c([t,"optionalAccess",r=>r.include])};if(o.request){var n=Array.isArray(o.request)?k(e,{include:o.request,deps:c([t,"optionalAccess",r=>r.deps])}):k(e,{deps:c([t,"optionalAccess",r=>r.deps])});r.request={...r.request,...n}}if(o.user){var a=e.user&&(0,l.PO)(e.user)?function(r,e){var t={};return(Array.isArray(e)?e:f).forEach((e=>{r&&e in r&&(t[e]=r[e])})),t}(e.user,o.user):{};Object.keys(a).length&&(r.user={...r.user,...a})}if(o.ip){var s=e.ip||e.socket&&e.socket.remoteAddress;s&&(r.user={...r.user,ip_address:s})}return o.transaction&&!r.transaction&&(r.transaction=function(r,e){switch(e){case"path":return v(r,{path:!0});case"handler":return r.route&&r.route.stack&&r.route.stack[0]&&r.route.stack[0].name||"<anonymous>";default:return v(r,{path:!0,method:!0})}}(e,o.transaction)),r}function y(r,e){let t=r.originalUrl||r.url||"";if(t)return t.startsWith("/")&&(t=`http://dogs.are.great${t}`),r.query||void 0!==typeof URL&&new URL(t).search.replace("?","")||e&&e.url&&e.url.parse(t).query||void 0}var _=t(1995);async function b(r){const{req:e,res:t,err:o}=r;var n=t&&t.statusCode||r.statusCode;if(n&&n<500)return Promise.resolve();var a=void 0!==r.pathname;if(!a&&!o)return Promise.resolve();(0,s.$e)((r=>{r.addEventProcessor((r=>((0,i.EG)(r,{type:"instrument",handled:!0,data:{function:a?"_error.getInitialProps":"_error.customErrorComponent"}}),r))),e&&r.addEventProcessor((r=>m(r,e)));var t=o||`_error.js called with falsy error (${o})`;(0,s.Tb)((0,_.mz)(t))})),await function(r){var e=(0,u.Gd)().getClient();return e?e.flush(r):Promise.resolve(!1)}(2e3)}var g=t(689);function w(r,e,t,o,n,a,s){try{var u=r[a](s),i=u.value}catch(g){return void t(g)}u.done?e(i):Promise.resolve(i).then(o,n)}var P=function(r){return(0,a.jsx)(g.default,{statusCode:r.statusCode})};P.getInitialProps=function(){var r,e=(r=n().mark((function r(e){return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b(e);case 2:return r.abrupt("return",g.default.getInitialProps(e));case 3:case"end":return r.stop()}}),r)})),function(){var e=this,t=arguments;return new Promise((function(o,n){var a=r.apply(e,t);function s(r){w(a,o,n,s,u,"next",r)}function u(r){w(a,o,n,s,u,"throw",r)}s(void 0)}))});return function(r){return e.apply(this,arguments)}}();var E=P},689:function(r,e,t){r.exports=t(2906)}},function(r){r.O(0,[774,888,179],(function(){return e=1458,r(r.s=e);var e}));var e=r.O();_N_E=e}]);