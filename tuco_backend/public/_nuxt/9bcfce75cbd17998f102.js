(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{269:function(t,e,n){var content=n(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("500caa6b",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";var r=n(269);n.n(r).a},273:function(t,e,n){(t.exports=n(44)(!1)).push([t.i,"@-webkit-keyframes v-pulseStretchDelay{0%,80%{-webkit-transform:scale(1);transform:scale(1);-webkit-opacity:1;opacity:1}45%{-webkit-transform:scale(.1);transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{-webkit-transform:scale(1);transform:scale(1);-webkit-opacity:1;opacity:1}45%{-webkit-transform:scale(.1);transform:scale(.1);-webkit-opacity:.7;opacity:.7}}",""])},274:function(t,e,n){"use strict";var r={components:{PulseLoader:n(275).a}},c=n(23),component=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("PulseLoader",{attrs:{color:"#d60c1f"}})},[],!1,null,null,null);e.a=component.exports},275:function(t,e,n){"use strict";var r={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},c=(n(272),n(23)),component=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"v-spinner"},[e("div",{staticClass:"v-pulse v-pulse1",style:[this.spinnerStyle,this.spinnerDelay1]}),e("div",{staticClass:"v-pulse v-pulse2",style:[this.spinnerStyle,this.spinnerDelay2]}),e("div",{staticClass:"v-pulse v-pulse3",style:[this.spinnerStyle,this.spinnerDelay3]})])},[],!1,null,null,null);e.a=component.exports},276:function(t,e,n){"use strict";var r=n(23),component=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero",attrs:{id:"subbanner"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"})])])}],!1,null,null,null);e.a=component.exports},299:function(t,e,n){"use strict";n.r(e);n(77);var r=n(20),c=n(276),o=n(274),l={data:function(){return{case_img:""+this.case.case_image.url}},props:{case:Object},created:function(){console.log(this.case)}},d=n(23),h=Object(d.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"casecard"},[e("button",{staticClass:"bookmark_btn"},[e("font-awesome-icon",{attrs:{icon:["fas","plus"]}})],1),this._v(" "),e("nuxt-link",{staticClass:"casecard",attrs:{to:{path:"/cases/"+this.case.id}}},[e("img",{staticClass:"radius_box",attrs:{src:this.case_img,alt:"case_img"}}),this._v(" "),e("div",{staticClass:"card_overlay"},[e("div",{staticClass:"card_fade"},[e("h4",{staticClass:"case_title"},[this._v(this._s(this.case.title))])])])])],1)},[],!1,null,null,null).exports,f=n(277),m=new f.a(""),v={data:function(){return{loading:!1,strapi_url:"",cases:null}},components:{CaseCard:h,Loader:o.a,subbanner:c.a},created:function(){this.fetchData(),console.log(this.cases)},methods:{fetchData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,m.request("get","/cases?_sort=createdAt:DESC").then(this.loading=!1);case 3:e=t.sent,console.log(e[0]),this.cases=e;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},y=Object(d.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("subbanner"),t._v(" "),n("div",{attrs:{id:"caseList"}},[n("section",{staticClass:"section_padding"},[n("b-container",[n("b-row",[n("b-col",{attrs:{md:"7",lg:"6"}},[n("h2",[t._v("Our Latest Cases")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim")])])],1)],1),t._v(" "),t.cases?n("b-container",[n("b-row",t._l(t.cases,function(t){return n("b-col",{key:t.id,attrs:{cols:"12",md:"3",lg:"4"}},[n("CaseCard",{attrs:{case:t}})],1)}),1)],1):n("b-container",[n("b-row",[n("b-col",{staticClass:"mx-auto",attrs:{cols:"1"}},[n("Loader")],1)],1)],1)],1)])],1)},[],!1,null,null,null);e.default=y.exports}}]);