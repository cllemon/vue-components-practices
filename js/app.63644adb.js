(function(e){function t(t){for(var a,r,o=t[0],c=t[1],u=t[2],s=0,d=[];s<o.length;s++)r=o[s],l[r]&&d.push(l[r][0]),l[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==l[o]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},l={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0aa4db74":"5f20dc95","chunk-2d0c54fe":"1358e39d","chunk-2d22d746":"43ab4d5f","chunk-d9107042":"a19bd9a2"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0aa4db74":1,"chunk-d9107042":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0aa4db74":"db199459","chunk-2d0c54fe":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-d9107042":"efe9add7"}[e]+".css",l=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===a||s===l))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],s=u.getAttribute("data-href");if(s===a||s===l)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||l,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=l;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){r[e]=0}));var a=l[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=l[e]=[t,n]});t.push(a[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(e),u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=l[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}l[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:s})},12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-components-practices/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08f4":function(e,t,n){"use strict";var a=n("aeb8"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{attrs:{id:"app"}},[n("el-header",{staticClass:"header"},[n("header-tips")],1),n("el-container",{staticClass:"container"},[n("el-aside",{staticClass:"container-aside"},[n("menu-bar")],1),n("el-main",[n("transition",{attrs:{name:"el-fade-in",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)},l=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-bar"},[n("el-menu",{attrs:{"default-active":e.defaultActive,router:""}},[e._l(e.menuList,function(t,a){return[n("el-menu-item",{key:a,attrs:{index:t.value}},[n("i",{class:"el-icon-"+t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])])]})],2)],1)},o=[],c=(n("7f7f"),{data:function(){return{menuList:[{label:"简介",value:"home",icon:"setting"},{label:"表单配置",value:"form",icon:"document"},{label:"表格配置",value:"table",icon:"menu"}],defaultActive:this.$route.name}},watch:{$route:function(e){this.defaultActive=e.name}}}),u=c,s=n("2877"),d=Object(s["a"])(u,i,o,!1,null,"d96fcf5c",null),f=d.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-tips"},[a("a",{staticClass:"header-tips--jump",attrs:{href:e.url}},[a("el-tooltip",{staticClass:"item",attrs:{content:" 查看更多 ",effect:"light",placement:"left-end"}},[a("i",{staticClass:"el-icon-share jump-icon"})])],1),a("img",{staticClass:"header-tips--vue ",attrs:{alt:"Vue logo",src:n("9d64")}}),e._m(0),a("div",{staticClass:"header-tips--author"},[e._v("\n    -- mr.lenmon\n  ")])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-tips--content"},[n("i",{staticClass:"el-icon-loading"}),e._v(" Some practices based on vue are configured to generate components that are satisfied with the relevant business scenarios.\n  ")])}],p={data:function(){return{url:"https://github.com/cllemon"}}},v=p,b=(n("08f4"),Object(s["a"])(v,h,m,!1,null,"24239bf8",null)),g=b.exports,y={name:"app",components:{MenuBar:f,HeaderTips:g}},A=y,k=(n("5c0b"),Object(s["a"])(A,r,l,!1,null,null,null)),_=k.exports,C=n("8c4f"),w=function(){return n.e("chunk-d9107042").then(n.bind(null,"bb51"))},B=function(){return n.e("chunk-0aa4db74").then(n.bind(null,"c109"))},x=function(){return n.e("chunk-2d0c54fe").then(n.bind(null,"3f0e"))},$=function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))},j=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:w},{path:"/form",name:"form",component:B},{path:"/table",name:"table",component:x},{path:"/About",name:"about",component:$}];a["default"].use(C["a"]);var E=new C["a"]({mode:"history",base:"/vue-components-practices/",routes:j}),O=E,S=n("5c96"),L=n.n(S);n("0fae");a["default"].use(L.a);var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"dynamicSelect",staticStyle:{display:"flex"},attrs:{model:e.model,rules:e.rules}},[n("el-form-item",{attrs:{label:"",prop:"first"}},[n("el-select",{attrs:{placeholder:"请选择一级类目",clearable:""},on:{change:function(t){return e.handerChange("first")}},model:{value:e.model.first,callback:function(t){e.$set(e.model,"first",t)},expression:"model.first"}},e._l(e.data,function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),e.secodList&&e.secodList.length?n("el-form-item",{staticStyle:{padding:"0 10px"},attrs:{label:"",prop:"second"}},[n("el-select",{attrs:{placeholder:"请选择二级类目",clearable:""},on:{change:function(t){return e.handerChange("second")}},model:{value:e.model.second,callback:function(t){e.$set(e.model,"second",t)},expression:"model.second"}},e._l(e.secodList,function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1):e._e(),e.thirdList&&e.thirdList.length?n("el-form-item",{attrs:{label:"",prop:"third"}},[n("el-select",{attrs:{placeholder:"请选择三级类目",clearable:""},on:{change:function(t){return e.handerChange("third")}},model:{value:e.model.third,callback:function(t){e.$set(e.model,"third",t)},expression:"model.third"}},e._l(e.thirdList,function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1):e._e()],1)},T=[],q=(n("ac6a"),n("f3e2"),n("7514"),{componentName:"dynamic-select",props:{value:{required:!0,default:function(){return{}}},list:{type:Array,default:function(){return[{label:"一级类目 - A",value:"1 - A",children:[{label:"二级类目 - 1 - A",value:"2 - 1 - A",children:[{label:"三级类目 - 1 - 1 - A",value:"3 - A - 1 - 1"},{label:"三级类目 - 1 - 2 - A",value:"3 - A - 1 - 2"},{label:"三级类目 - 1 - 3 - A",value:"3 - A - 1 - 3"}]},{label:"二级类目 - 2 - A",value:"2 - 2 -A",children:[{label:"三级类目 - 2 - 1 - A",value:"3 - A - 2 - 1"},{label:"三级类目 - 2 - 2 - A",value:"3 - A - 2 - 2"},{label:"三级类目 -  2 - 3 - A",value:"3 - A - 2 - 3"},{label:"三级类目 -  2 - 4 - A",value:"3 - A - 2 - 4"}]},{label:"二级类目 - 3 - A",value:"2 - 3 -A"}]},{label:"一级类目 - B",value:"2 - B",children:[{label:"二级类目 - 1 - B",value:"2 - 1 - B"},{label:"二级类目 - 2 - B",value:"2 - 2 - B"},{label:"二级类目 - 3 - B",value:"2 - 3 - B",children:[{label:"三级类目 - 2 - 1 - B",value:"3 - B - 2 - 1"},{label:"三级类目 - 2 - 2 - B",value:"3 - B - 2 - 2"}]},{label:"二级类目 - 3 - B",value:"2 - 4 - B"},{label:"二级类目 - 4 - B",value:"2 - 5 - B"}]},{label:"一级类目 - C",value:"3 - C"}]}}},data:function(){return{model:this.value,rules:{first:[{required:!0,message:"请选择一级类目",trigger:"change"}],second:[{required:!0,message:"请选择二级类目",trigger:"change"}],third:[{required:!0,message:"请选择三级类目",trigger:"change"}]},data:this.list}},computed:{secodList:function(){return this.find(this.model.first)},thirdList:function(){return this.find(this.model.first,!0)}},watch:{model:function(e,t){t&&this.$emit("input",e)}},methods:{find:function(e,t){var n=this,a=[],r=[];return this.data.forEach(function(t){t.value===e&&t.children&&t.children.length&&(a=t.children)}),e&&!t?a:t&&a&&a.length?(a.forEach(function(e){e.value===n.model.second&&e.children&&e.children.length&&(r=e.children)}),r):void 0},handerChange:function(e){"first"===e&&(this.model.second="",this.model.third=""),"second"===e&&(this.model.third="")},dynamicResetFiles:function(){this.$refs.dynamicSelect.resetFields()},dynamicValidate:function(){var e=this;this.$refs.dynamicSelect.validate(function(t){t?e.$emit("validateResult",!0):e.$emit("validateResult",!1)})}},created:function(){this.$on("dynamicResetFiles",this.dynamicResetFiles),this.$on("dynamicValidate",this.dynamicValidate)}}),M=q,N=Object(s["a"])(M,P,T,!1,null,"23a5da6f",null),R=N.exports,F={install:function(e){e.component("dynamic-select",R)}};a["default"].config.productionTip=!1,a["default"].use(F),new a["default"]({router:O,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},"9d64":function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},aeb8:function(e,t,n){}});