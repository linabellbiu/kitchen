webpackJsonp([4],{"Dt/1":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("vkyI"),o=n("/ocq");i.a.use(o.a);var r=new o.a({routes:[{path:"/",name:"view",component:function(){return new Promise(function(t){t()}).then(n.bind(null,"vkyI"))},children:[{path:"/",name:"kitchen",component:function(){return n.e(0).then(n.bind(null,"2VQQ"))}},{path:"/more",name:"more",component:function(){return n.e(1).then(n.bind(null,"7JAk"))}}]},{path:"/img",name:"img",component:function(){return n.e(2).then(n.bind(null,"d7Fv"))}}]}),d=n("//Fk"),c=n.n(d),s=n("mtWM"),l=n.n(s).a.create(),u={install:function(t){Object.defineProperty(t.prototype,"$http",{value:this,writable:!1}),l.defaults.baseURL="/api",l.defaults.headers.common.token=localStorage.invest_h5_token,l.interceptors.response.use(function(t){var e=t.data,n=e.flag;return 1===n?e:4e3!==n?e:(localStorage.invest_h5_token="",void window.ws.close())},function(t){return c.a.reject(t)})},addFood:function(t){return l({url:"/addFood",params:t,method:"POST"})},getFood:function(t){return l({url:"/getFood",params:t,method:"GET"})},Mail:function(t){return l({url:"/Mail",params:t,method:"POST"})},addMood:function(t){return l({url:"/addMood",params:t,method:"POST"})},getMood:function(t){return l({url:"/getMood",params:t,method:"GET"})},UploadImg:function(t){return l({url:"/UploadImg",data:t.data,method:"POST",headers:{"Content-Type":"multipart/form-data"}})}},A=n("woOf"),f=n.n(A),v=n("pFYg"),m=n.n(v),g=void 0,h={name:"toast",props:{title:{type:String,default:"提示"},title_show:{type:Boolean,default:!0},content:{type:String,default:"请选择评价再提交哦"},showTime:{type:Number,default:1e3}},data:function(){return{show:!1}},watch:{show:{handler:function(t,e){this.change(t)},immediate:!0}},mounted:function(){this.show=!0,this.init()},destroyed:function(){clearTimeout(g)},methods:{init:function(){var t=this.$refs.content,e=this.$refs.toast;this.$nextTick(function(){e.style.left=(document.body.clientWidth-t.clientWidth)/2+"px"})},change:function(t){t&&(g=setTimeout(function(){var t=document.getElementById("toast");null!==t&&document.body.removeChild(t)},this.showTime))}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"toast",attrs:{id:"toast"}},[t.title_show?n("div",{staticClass:"header"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{ref:"content",staticClass:"content"},[t._v(t._s(t.content))])])},staticRenderFns:[]};var y=n("VU/8")(h,p,!1,function(t){n("hcfe")},"data-v-7fba441a",null).exports,E={name:"confirm",props:{text:{type:String,default:"成功"},type:{type:String,default:"text"},confirm_text:{type:String,default:"确认"},cancel_text:{type:String,default:"取消"}},data:function(){return{show:!1}},mounted:function(){this.show=!0},methods:{confirmButton:function(){this.show=!1;var t=document.getElementById("confirm");document.body.removeChild(t),this.type},cancelButton:function(){this.show=!1;var t=document.getElementById("confirm");document.body.removeChild(t),this.type}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{attrs:{id:"confirm"}},[n("div",{staticClass:"dialog"},[n("div",{staticClass:"content"},[t._v(t._s(t.text))]),t._v(" "),n("div",{staticClass:"cancel",on:{click:t.cancelButton}},[t._v(t._s(t.cancel_text))]),t._v(" "),"call"==t.type?n("div",{staticClass:"confirm",on:{click:t.confirmButton}},[n("a",{staticStyle:{color:"black","text-decoration":"none"},attrs:{href:"tel:"+t.text}},[t._v(t._s(t.confirm_text))])]):n("div",{staticClass:"confirm",on:{click:t.confirmButton}},[t._v(t._s(t.confirm_text))])])]):t._e()},staticRenderFns:[]};var b=n("VU/8")(E,C,!1,function(t){n("yN1V")},"data-v-96e19412",null).exports,x={name:"loading",props:{state:{type:String,default:"start"},loading_text:{type:String,default:"正在加载..."},ele:{type:HTMLBodyElement,default:function(){return document.body}}},watch:{state:{handler:function(t,e){this.changeState(t)},immediate:!0}},methods:{changeState:function(t){if("end"===t){var e=document.getElementById("loading");this.ele.removeChild(e)}}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"loading"}},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("p",[t._v(t._s(t.loading_text))])])},staticRenderFns:[]};var I=n("VU/8")(x,w,!1,function(t){n("oAQb")},"data-v-3e1dd00c",null).exports,S={name:"dialog",props:{text:{type:String,default:"成功"},type:{type:String,default:"text"},confirm_text:{type:String,default:"确认"},cancel_text:{type:String,default:"取消"}},watch:{type:{handler:function(t,e){t&&this.init()}}},data:function(){return{}},mounted:function(){},methods:{init:function(){switch(this.type){case"quit":var t=document.getElementById("dialog");null!==t&&(t.style.background="rgba(0, 0, 0, 0.3)")}},confirmButton:function(){var t=document.getElementById("dialog");null!==t&&document.body.removeChild(t),this.type},cancelButton:function(){this.type}}},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:t.cancelButton.apply(null,arguments)}}},[n("div",{staticClass:"dialog"},["call"===t.type?n("div",{staticClass:"content_call"},[n("p",{staticStyle:{color:"#333333","font-weight":"600"}},[t._v("联系客服")]),t._v(" "),n("p",{staticStyle:{padding:"0.5rem 0"}},[t._v(t._s(t.text))])]):n("div",{staticClass:"content"},[t._v(t._s(t.text))]),t._v(" "),"call".includes(t.type)?n("div",{staticClass:"cancel",on:{click:t.cancelButton}},[t._v(t._s(t.cancel_text))]):n("div",{staticClass:"onlyConfirm",on:{click:t.confirmButton}},[t._v(t._s(t.confirm_text))]),t._v(" "),"call"==t.type?n("div",{staticClass:"confirm",on:{click:t.confirmButton}},[n("a",{staticStyle:{color:"#FF332E","text-decoration":"none"},attrs:{href:"tel:"+t.text}},[t._v(t._s(t.confirm_text))])]):t._e(),t._v(" "),"text".includes(t.type)?n("div",{staticClass:"confirm",on:{click:t.confirmButton}},[t._v(t._s(t.confirm_text))]):t._e()])])},staticRenderFns:[]};var V=n("VU/8")(S,J,!1,function(t){n("Dt/1")},"data-v-2b640652",null).exports,k={name:"rotate",props:{text:{type:String,default:"正在加载..."}}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"rotate"}},[n("div",{staticClass:"ball"}),t._v(" "),n("div",{staticClass:"line lineOne"}),t._v(" "),n("div",{staticClass:"line lineTwo"}),t._v(" "),n("div",{staticClass:"line lineThree"}),t._v(" "),n("div",{staticClass:"line lineFour"}),t._v(" "),n("div",{staticClass:"line lineFive"}),t._v(" "),n("a",{staticClass:"text"},[t._v(t._s(t.text))])])},staticRenderFns:[]};var j=n("VU/8")(k,Q,!1,function(t){n("YUVQ")},"data-v-55d10392",null).exports,U={name:"refresh",props:{text:{type:String,default:"正在加载"}}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"refresh"}},[e("div",{ref:"loading",staticClass:"content_loading"},[e("div",{staticClass:"loading one"}),this._v(" "),e("div",{staticClass:"loading two"}),this._v(" "),e("div",{staticClass:"loading three"}),this._v(" "),e("div",{staticClass:"loading four"}),this._v(" "),e("p",[this._v(this._s(this.text))])])])},staticRenderFns:[]};var W=n("VU/8")(U,B,!1,function(t){n("VHgz")},"data-v-5759036b",null).exports,F={install:function(t){Object.defineProperty(t.prototype,"$Dialog",{value:this,writable:!1})},Toast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.a.extend(y),n=document.getElementById("toast");null!==n&&document.body.removeChild(n);var a=document.createElement("div");a.id="Toast",document.body.appendChild(a);var o=new e({el:"#Toast"});"object"===(void 0===t?"undefined":m()(t))?f()(o,t):"string"!=typeof t&&"number"!=typeof t||(o.content=t)},Confirm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.a.extend(b),n=document.createElement("div");n.id="Confirm",document.body.appendChild(n);var a=new e({el:"#Confirm"});"object"===(void 0===t?"undefined":m()(t))?f()(a,t):"string"!=typeof t&&"number"!=typeof t||(a.content=t)},Dialog:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.a.extend(V),n=document.createElement("div");n.id="Dialog",document.body.appendChild(n);var a=new e({el:"#Dialog"});"object"===(void 0===t?"undefined":m()(t))?f()(a,t):"string"!=typeof t&&"number"!=typeof t||(a.content=t)},Rotate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};void 0===t.ele&&(t.ele=document.body);var e=document.getElementById("rotate");if(null!==e&&t.ele.removeChild(e),"end"!==t.state){var n=i.a.extend(j),a=document.createElement("div");a.id="Rotate",t.ele.appendChild(a);var o=new n({el:"#Rotate"});"object"===(void 0===t?"undefined":m()(t))?f()(o,t):"string"!=typeof t&&"number"!=typeof t||(o.content=t)}},Refresh:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};void 0===t.ele&&(t.ele=document.body);var e=document.getElementById("refresh");if(null!==e&&t.ele.removeChild(e),"end"!==t.state){var n=i.a.extend(W),a=document.createElement("div");a.id="Refresh",t.ele.appendChild(a);var o=new n({el:"#Refresh"});"object"===(void 0===t?"undefined":m()(t))?f()(o,t):"string"!=typeof t&&"number"!=typeof t||(o.content=t)}},Loading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(void 0===t.ele&&(t.ele=document.body),"end"!==t.state){var e=i.a.extend(I),n=document.createElement("div");n.id="loading",t.ele.appendChild(n);var a=new e({el:"#loading"});"object"===(void 0===t?"undefined":m()(t))?f()(a,t):"string"!=typeof t&&"number"!=typeof t||(a.content=t)}else{var o=document.getElementById("loading");t.ele.removeChild(o)}}};i.a.config.productionTip=!1,i.a.use(u),i.a.use(F),new i.a({el:"#app",router:r,components:{Home:a.default},template:"<Home/>"})},Nv9F:function(t,e){},VHgz:function(t,e){},YUVQ:function(t,e){},aMQj:function(t,e){t.exports="data:image/png;base64,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"},hcfe:function(t,e){},oAQb:function(t,e){},vkyI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("BO1k"),a=n.n(i),o={data:function(){return{}},props:{data:Array},mounted:function(){this.init()},methods:{init:function(){var t=this.$refs.tab,e=this.$refs.MyTab;t[0].className+=" active";var n=!0,i=!1,o=void 0;try{for(var r,d=a()(t);!(n=(r=d.next()).done);n=!0){r.value.style.width=parseInt(e.clientWidth/this.data.length)-2+"px"}}catch(t){i=!0,o=t}finally{try{!n&&d.return&&d.return()}finally{if(i)throw o}}},clickP:function(t){var e=this.$refs.tab,n=!0,i=!1,o=void 0;try{for(var r,d=a()(e);!(n=(r=d.next()).done);n=!0){r.value.className="tab"}}catch(t){i=!0,o=t}finally{try{!n&&d.return&&d.return()}finally{if(i)throw o}}e[t].className+=" active",this.$router.push({name:this.data[t].path})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"MyTab",attrs:{id:"MyTab"}},t._l(t.data,function(e,i){return n("div",{key:i,ref:"tab",refInFor:!0,staticClass:"tab",on:{click:function(e){return t.clickP(i)}}},[n("img",{staticClass:"img",attrs:{src:e.img}}),t._v(" "),n("p",{staticClass:"p"},[t._v(t._s(e.name))])])}),0)},staticRenderFns:[]};var d={name:"home",components:{"v-tab":n("VU/8")(o,r,!1,function(t){n("wjfQ")},null,null).exports},data:function(){return{tab_data:[{name:"菜单",path:"kitchen",img:n("yuSV")},{name:"发现",path:"more",img:n("aMQj")}]}},mounted:function(){this.init()},destroyed:function(){window.removeEventListener("unload",this.saveState)},methods:{init:function(){document.documentElement.style.fontSize=document.documentElement.clientWidth/25+"px",window.addEventListener("unload",this.saveState)},saveState:function(){}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("router-view"),this._v(" "),e("v-tab",{attrs:{data:this.tab_data}})],1)},staticRenderFns:[]};var s=n("VU/8")(d,c,!1,function(t){n("Nv9F")},"data-v-f91d7b42",null);e.default=s.exports},wjfQ:function(t,e){},yN1V:function(t,e){},yuSV:function(t,e){t.exports="data:image/png;base64,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"}},["NHnr"]);
//# sourceMappingURL=app.f11b10e7981098201636.js.map