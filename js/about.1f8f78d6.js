(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0c88":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"eventpage"},[e("Header"),e("div",{staticClass:"Carousel",style:{backgroundImage:"url("+t.eventinfo[1]+")"}}),e("div",{staticClass:"linkloc"},[e("span",{staticClass:"lastloc"},[t._v("首頁")]),t._v(" > "),e("span",{staticClass:"currentloc"},[t._v(t._s(t.eventinfo[0]))])]),e("div",{staticClass:"actinfo"},[e("div",{staticClass:"actinfo-name"},[e("h4",[t._v(t._s(t.eventinfo[0]))])])]),e("div",{staticClass:"content-info"},[e("div",{staticClass:"loc"},[t._m(0),e("span",{staticClass:"decoline"}),e("span",{staticClass:"loc-content"},[t._v(" "+t._s(t.eventinfo[4])+" ")])]),e("div",{staticClass:"loc"},[t._m(1),e("span",{staticClass:"decoline"}),e("span",{staticClass:"loc-content"},[t._v(" "+t._s(t.eventinfo[2])+" "),e("br"),t._v(" "+t._s(t.eventinfo[3])+" ")])]),e("div",{staticClass:"loc"},[t._m(2),e("span",{staticClass:"decoline"}),e("span",{staticClass:"loc-content"},[t._v(" "+t._s(t.eventinfo[7])+"人 備取"+t._s(t.eventinfo[8])+"人 ")])])]),e("div",{staticClass:"btnwrap"},[e("fillbtn",{attrs:{btnname:"立即報名",width:"350",height:"38"},on:{clickhandler:t.tosignuppage}})],1),e("div",{staticClass:"describecontent"},[t._m(3),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.eventinfo[11])}})]),e("Sidemenu",{directives:[{name:"show",rawName:"v-show",value:t.showsidemenu,expression:"showsidemenu"}]})],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"loc-icon"},[e("i",{staticClass:"ri-map-pin-line"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"loc-icon"},[e("i",{staticClass:"ri-time-line"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"loc-icon"},[e("i",{staticClass:"ri-group-2-line"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title"},[e("div"),t._v(" 活動介紹 ")])}],a=(e("ac1f"),e("1276"),e("bc3a")),c=e.n(a),o=e("20ee"),l=e("0418"),r=e("ede1"),d={data:function(){return{eventinfo:[]}},created:function(){var t=this;c()({method:"get",url:"https://script.google.com/macros/s/AKfycbzH3DIrMW5eBLzv-7Rxgq16ImUxZ5xd76QY4iM08cqZZlKOwdIqfP2JB6KTTo2uXu_q/exec",params:{mode:"query",id:this.$route.params.id}}).then((function(s){t.eventinfo=s.data[0],t.eventinfo[2]=t.convertdate(t.eventinfo[2]),console.log(s.data)}))},mounted:function(){},components:{Header:l["a"],fillbtn:o["a"],Sidemenu:r["a"]},computed:{showsidemenu:function(){return this.$store.state.showsidemenu}},methods:{tosignuppage:function(){this.$router.push({name:"Signup",params:{id:this.$route.params.id}})},convertdate:function(t){var s=t,e=s.split("-"),n=(e[0]+"/"+e[1]+"/"+e[2]).substring(0,10);return n}}},u=d,v=(e("3844"),e("2877")),f=Object(v["a"])(u,n,i,!1,null,"5f2bcabc",null);s["default"]=f.exports},3844:function(t,s,e){"use strict";e("e8ad")},e8ad:function(t,s,e){}}]);
//# sourceMappingURL=about.1f8f78d6.js.map