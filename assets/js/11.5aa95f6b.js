(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{284:function(t,s,e){},351:function(t,s,e){"use strict";var a=e(284);e.n(a).a},371:function(t,s,e){"use strict";e.r(s);var a={data:function(){return{deg:6}},methods:{},watch:{},mounted:function(){var t=this;setInterval((function(){var s=new Date,e=5*s.getHours()*t.deg,a=s.getMinutes()*t.deg,n=s.getSeconds()*t.deg;t.$refs.hh.style.transform="rotateZ(".concat(e+a/12,"deg)"),t.$refs.mm.style.transform="rotateZ(".concat(a,"deg)"),t.$refs.ss.style.transform="rotateZ(".concat(n,"deg)")}),1e3)}},n=(e(351),e(2)),r=Object(n.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"wrap",attrs:{id:"clock"}},[s("div",{staticClass:"clock"},[s("div",{ref:"hh",staticClass:"hour"}),this._v(" "),s("div",{ref:"mm",staticClass:"min"}),this._v(" "),s("div",{ref:"ss",staticClass:"sec"})])])}),[],!1,null,"204bf370",null);s.default=r.exports}}]);