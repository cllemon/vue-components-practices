(function(e){function t(t){for(var a,l,s=t[0],c=t[1],o=t[2],u=0,d=[];u<s.length;u++)l=s[u],i[l]&&d.push(i[l][0]),i[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},l={app:0},i={app:0},r=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"43ab4d5f","chunk-7a35230d":"427dd790","chunk-419aa79a":"670707c5","chunk-e24a20dc":"42852b67","chunk-d9107042":"a19bd9a2"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-7a35230d":1,"chunk-419aa79a":1,"chunk-d9107042":1};l[e]?t.push(l[e]):0!==l[e]&&n[e]&&t.push(l[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-7a35230d":"1e9c9abf","chunk-419aa79a":"ec40315b","chunk-e24a20dc":"31d6cfe0","chunk-d9107042":"efe9add7"}[e]+".css",i=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var o=r[s],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===a||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){o=d[s],u=o.getAttribute("data-href");if(u===a||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.request=a,delete l[e],f.parentNode.removeChild(f),n(r)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){l[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,n){a=i[e]=[t,n]});t.push(a[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e),o=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+l+")");r.type=a,r.request=l,n[1](r)}i[e]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-components-practices/",c.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08f4":function(e,t,n){"use strict";var a=n("aeb8"),l=n.n(a);l.a},4150:function(e,t,n){"use strict";var a=n("58a9"),l=n.n(a);l.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{attrs:{id:"app"}},[n("el-header",{staticClass:"header"},[n("header-tips")],1),n("el-container",{staticClass:"container"},[n("el-aside",{staticClass:"container-aside"},[n("menu-bar")],1),n("el-main",[n("transition",{attrs:{name:"el-fade-in",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-bar"},[n("el-menu",{attrs:{"default-active":e.defaultActive,router:""}},[e._l(e.menuList,function(t,a){return[n("el-menu-item",{key:a,attrs:{index:t.value}},[n("i",{class:"el-icon-"+t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])])]})],2)],1)},s=[],c=(n("7f7f"),{data:function(){return{menuList:[{label:"简介",value:"home",icon:"setting"},{label:"表单配置",value:"form",icon:"document"},{label:"表格配置",value:"table",icon:"menu"}],defaultActive:this.$route.name}},watch:{$route:function(e){this.defaultActive=e.name}}}),o=c,u=n("2877"),d=Object(u["a"])(o,r,s,!1,null,"d96fcf5c",null),f=d.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-tips"},[a("a",{staticClass:"header-tips--jump",attrs:{href:e.url}},[a("el-tooltip",{staticClass:"item",attrs:{content:" 查看更多 ",effect:"light",placement:"left-end"}},[a("i",{staticClass:"el-icon-share jump-icon"})])],1),a("img",{staticClass:"header-tips--vue ",attrs:{alt:"Vue logo",src:n("9d64")}}),e._m(0),a("div",{staticClass:"header-tips--author"},[e._v("\n    -- mr.lenmon\n  ")])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-tips--content"},[n("i",{staticClass:"el-icon-loading"}),e._v(" Some practices based on vue are configured to generate components that are satisfied with the relevant business scenarios.\n  ")])}],p={data:function(){return{url:"https://github.com/cllemon"}}},v=p,b=(n("08f4"),Object(u["a"])(v,h,m,!1,null,"24239bf8",null)),g=b.exports,y={name:"app",components:{MenuBar:f,HeaderTips:g}},w=y,k=(n("5c0b"),Object(u["a"])(w,l,i,!1,null,null,null)),C=k.exports,_=n("8c4f"),x=function(){return n.e("chunk-d9107042").then(n.bind(null,"bb51"))},A=function(){return Promise.all([n.e("chunk-7a35230d"),n.e("chunk-419aa79a")]).then(n.bind(null,"c109"))},$=function(){return Promise.all([n.e("chunk-7a35230d"),n.e("chunk-e24a20dc")]).then(n.bind(null,"3f0e"))},L=function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))},B=[{path:"/",redirect:"/form"},{path:"/home",name:"home",component:x},{path:"/form",name:"form",component:A},{path:"/table",name:"table",component:$},{path:"/About",name:"about",component:L}];a["default"].use(_["a"]);var j=new _["a"]({mode:"history",base:"/vue-components-practices/",routes:B}),S=j,E=n("5c96"),O=n.n(E);n("0fae");a["default"].use(O.a);var I,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"dynamicSelect",staticStyle:{display:"flex"},attrs:{model:e.model,rules:e.rules}},[n("el-form-item",{attrs:{label:"",prop:"first"}},[n("el-select",{attrs:{placeholder:"请选择一级类目",clearable:""},on:{change:function(t){return e.handerChange("first")}},model:{value:e.model.first,callback:function(t){e.$set(e.model,"first",t)},expression:"model.first"}},e._l(e.data,function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),e.secodList&&e.secodList.length?n("el-form-item",{staticStyle:{padding:"0 10px"},attrs:{label:"",prop:"second"}},[n("el-select",{attrs:{placeholder:"请选择二级类目",clearable:""},on:{change:function(t){return e.handerChange("second")}},model:{value:e.model.second,callback:function(t){e.$set(e.model,"second",t)},expression:"model.second"}},e._l(e.secodList,function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1):e._e(),e.thirdList&&e.thirdList.length?n("el-form-item",{attrs:{label:"",prop:"third"}},[n("el-select",{attrs:{placeholder:"请选择三级类目",clearable:""},on:{change:function(t){return e.handerChange("third")}},model:{value:e.model.third,callback:function(t){e.$set(e.model,"third",t)},expression:"model.third"}},e._l(e.thirdList,function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1):e._e()],1)},N=[],T=(n("ac6a"),n("f3e2"),n("7514"),{componentName:"dynamic-select",props:{value:{required:!0,default:function(){return{}}},list:{type:Array,default:function(){return[{label:"一级类目 - A",value:"1 - A",children:[{label:"二级类目 - 1 - A",value:"2 - 1 - A",children:[{label:"三级类目 - 1 - 1 - A",value:"3 - A - 1 - 1"},{label:"三级类目 - 1 - 2 - A",value:"3 - A - 1 - 2"},{label:"三级类目 - 1 - 3 - A",value:"3 - A - 1 - 3"}]},{label:"二级类目 - 2 - A",value:"2 - 2 -A",children:[{label:"三级类目 - 2 - 1 - A",value:"3 - A - 2 - 1"},{label:"三级类目 - 2 - 2 - A",value:"3 - A - 2 - 2"},{label:"三级类目 -  2 - 3 - A",value:"3 - A - 2 - 3"},{label:"三级类目 -  2 - 4 - A",value:"3 - A - 2 - 4"}]},{label:"二级类目 - 3 - A",value:"2 - 3 -A"}]},{label:"一级类目 - B",value:"2 - B",children:[{label:"二级类目 - 1 - B",value:"2 - 1 - B"},{label:"二级类目 - 2 - B",value:"2 - 2 - B"},{label:"二级类目 - 3 - B",value:"2 - 3 - B",children:[{label:"三级类目 - 2 - 1 - B",value:"3 - B - 2 - 1"},{label:"三级类目 - 2 - 2 - B",value:"3 - B - 2 - 2"}]},{label:"二级类目 - 3 - B",value:"2 - 4 - B"},{label:"二级类目 - 4 - B",value:"2 - 5 - B"}]},{label:"一级类目 - C",value:"3 - C"}]}}},data:function(){return{model:this.value,rules:{first:[{required:!0,message:"请选择一级类目",trigger:"change"}],second:[{required:!0,message:"请选择二级类目",trigger:"change"}],third:[{required:!0,message:"请选择三级类目",trigger:"change"}]},data:this.list}},computed:{secodList:function(){return this.find(this.model.first)},thirdList:function(){return this.find(this.model.first,!0)}},watch:{model:function(e,t){t&&this.$emit("input",e)}},methods:{find:function(e,t){var n=this,a=[],l=[];return this.data.forEach(function(t){t.value===e&&t.children&&t.children.length&&(a=t.children)}),e&&!t?a:t&&a&&a.length?(a.forEach(function(e){e.value===n.model.second&&e.children&&e.children.length&&(l=e.children)}),l):void 0},handerChange:function(e){"first"===e&&(this.model.second="",this.model.third=""),"second"===e&&(this.model.third="")},dynamicResetFiles:function(){this.$refs.dynamicSelect.resetFields()},dynamicValidate:function(){var e=this;this.$refs.dynamicSelect.validate(function(t){t?e.$emit("validateResult",!0):e.$emit("validateResult",!1)})}},created:function(){this.$on("dynamicResetFiles",this.dynamicResetFiles),this.$on("dynamicValidate",this.dynamicValidate)}}),q=T,U=Object(u["a"])(q,P,N,!1,null,"23a5da6f",null),M=U.exports,R={install:function(e){e.component("dynamic-select",M)}},F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-column-images"},[e._l(e.list,function(t,a){return[n("img",{key:a,staticClass:"table-column-images__item",attrs:{src:t},on:{click:function(t){return e.showSelectedImage(a)}}})]})],2)},V=[],J=n("2ef0"),z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flow-app",staticStyle:{position:"relative"}},[n("transition",{attrs:{name:"preview-image-fade"},on:{"after-leave":e.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"preview-image"},[n("section",{staticClass:"image-content",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[n("i",{directives:[{name:"show",rawName:"v-show",value:!e.single,expression:"!single"}],staticClass:"el-icon-arrow-left image-content-arrow",on:{click:e.switchPre}}),n("img",{staticClass:"image-content-show",attrs:{src:e.imageUrlList[e.currentIndex]}}),n("i",{directives:[{name:"show",rawName:"v-show",value:!e.single,expression:"!single"}],staticClass:"el-icon-arrow-right image-content-arrow",on:{click:e.switchNext}})]),n("section",{staticClass:"image-thumbnail-panel",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[e._l(e.imageUrlList,function(t,a){return[n("img",{key:a,staticClass:"thumbnail-panel-img",class:{"thumbnail-panel-img__active":e.currentIndex===a},attrs:{src:t},on:{click:function(t){return e.showSelectedImage(a)}}})]})],2),n("i",{staticClass:"iconfont icon-shanchu image-close-btn",on:{click:e.close}})])])],1)},H=[],D={data:function(){return{visible:!1,imageUrlList:[],currentIndex:0,closed:!1,onClose:null}},computed:{single:function(){return this.imageUrlList.length<=1}},watch:{closed:function(e){e&&(this.visible=!1,"function"===typeof this.onClose&&this.onClose(this))}},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0},switchPre:function(){this.currentIndex>0&&(this.currentIndex-=1)},switchNext:function(){this.currentIndex<this.imageUrlList.length-1&&(this.currentIndex+=1)},showSelectedImage:function(e){e>=0&&e<=this.imageUrlList.length-1&&(this.currentIndex=e)}}},G=D,K=(n("4150"),Object(u["a"])(G,z,H,!1,null,null,null)),Q=K.exports,W=a["default"].extend(Q),X=[],Y=1,Z=function e(t,n){var a=[];Object(J["isArray"])(t)?a=t:a.push(t);var l={imageUrlList:a,currentIndex:n},i=l.onClose,r="message_"+(Y+=1);return l.onClose=function(){e.close(r,i)},I=new W({data:l}),I.id=r,I.vm=I.$mount(),document.body.appendChild(I.vm.$el),I.vm.visible=!0,I.dom=I.vm.$el,I.dom.style.zIndex=3e3,X.push(I),I.vm};Z.close=function(e,t){for(var n=0;n<X.length;n++)if(e===X[n].id){"function"===typeof t&&t(X[n]),X.splice(n,1);break}};var ee=Z,te={componentName:"table-column-images",props:{value:{required:!0,default:function(){return[]}}},data:function(){return{list:this.value}},watch:{value:function(e,t){e!==t&&(this.list=e)}},methods:{showSelectedImage:function(e){ee(this.list,e)}}},ne=te,ae=(n("6b4e"),Object(u["a"])(ne,F,V,!1,null,null,null)),le=ae.exports,ie={install:function(e){e.component("table-column-images",le)}};a["default"].config.productionTip=!1,a["default"].use(R),a["default"].use(ie),new a["default"]({router:S,render:function(e){return e(C)}}).$mount("#app")},"58a9":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),l=n.n(a);l.a},"5e27":function(e,t,n){},"6b4e":function(e,t,n){"use strict";var a=n("c5b2"),l=n.n(a);l.a},"9d64":function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},aeb8:function(e,t,n){},c5b2:function(e,t,n){}});