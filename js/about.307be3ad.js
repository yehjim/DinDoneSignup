(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0c88":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"eventpage"},[s("Header"),s("div",{staticClass:"Carousel",style:{backgroundImage:"url("+e.eventinfo[1]+")"}}),s("div",{staticClass:"actinfo"},[s("div",{staticClass:"actinfo-name"},[s("h4",[e._v(e._s(e.eventinfo[0]))])])]),s("div",{staticClass:"flexwrap"},[s("div",{staticClass:"content-info"},[s("div",{staticClass:"loc"},[s("div",{staticClass:"loc-icon"},[e.hostinfo?s("i",{staticClass:"ri-map-pin-line",style:{color:e.hostinfo[7]}}):e._e()]),s("span",{staticClass:"loc-content"},[e._v(e._s(e.eventinfo[4]))])]),s("div",{staticClass:"loc"},[s("div",{staticClass:"loc-icon"},[e.hostinfo?s("i",{staticClass:"ri-time-line",style:{color:e.hostinfo[7]}}):e._e()]),s("span",{staticClass:"loc-content"},[e._v(e._s(e.eventinfo[2])+" "+e._s(e.eventinfo[3]))])]),s("div",{staticClass:"loc"},[s("div",{staticClass:"loc-icon"},[e.hostinfo?s("i",{staticClass:"ri-group-2-line",style:{color:e.hostinfo[7]}}):e._e()]),s("span",{staticClass:"loc-content"},[e._v("剩餘人數："+e._s(e.eventinfo[7])+"人")])]),s("div",{staticClass:"loc"},[s("div",{staticClass:"loc-icon"},[e.hostinfo?s("i",{staticClass:"ri-calendar-check-fill",style:{color:e.hostinfo[7]}}):e._e()]),s("span",{staticClass:"loc-content"},[e._v("報名截止日："+e._s(e.eventinfo[8]))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"是"==e.eventinfo[16],expression:"eventinfo[16]=='是'"}],staticClass:"olderangelwrap"},[s("div",{staticClass:"desktop olderangel",style:{borderColor:e.maincolor}},[s("div",{staticClass:"olderangel-title",style:{color:e.maincolor}},[s("i",{staticClass:"ri-double-quotes-r"}),e._v("銀髮大使介紹 "),s("i",{staticClass:"ri-double-quotes-r"})]),s("div",{staticClass:"olderangel-name"},[e.olderangelinfo[0]?s("span",[e._v(e._s(e.olderangelinfo[0][0]))]):e._e()]),s("div",{staticClass:"olderangel-skill"},[s("div",{staticClass:"title"},[e.hostinfo?s("div",{style:{backgroundColor:e.hostinfo[7]}}):e._e(),s("span",[e._v("興趣與技能")])]),e.olderangelinfo[0]?s("div",{staticClass:"content"},[e._v(e._s(e.olderangelinfo[0][1]))]):e._e()]),s("div",{staticClass:"olderangel-intro"},[s("div",{staticClass:"title"},[e.hostinfo?s("div",{style:{backgroundColor:e.hostinfo[7]}}):e._e(),s("span",[e._v("簡介")])]),e.olderangelinfo[0]?s("div",{staticClass:"content"},[e._v(e._s(e.olderangelinfo[0][2]))]):e._e()])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"是"==e.eventinfo[16],expression:"eventinfo[16]=='是'"}],staticClass:"mobile olderangel",style:{borderColor:e.maincolor}},[s("div",{staticClass:"olderangel-title",style:{color:e.maincolor}},[s("i",{staticClass:"ri-double-quotes-r"}),e._v("銀髮大使介紹 "),s("i",{staticClass:"ri-double-quotes-r"})]),s("div",{staticClass:"olderangel-name"},[e.olderangelinfo[0]?s("span",[e._v(e._s(e.olderangelinfo[0][0]))]):e._e()]),s("div",{staticClass:"olderangel-skill"},[s("div",{staticClass:"title"},[e.hostinfo?s("div",{style:{backgroundColor:e.hostinfo[7]}}):e._e(),s("span",[e._v("興趣與技能")])]),e.olderangelinfo[0]?s("div",{staticClass:"content"},[e._v(e._s(e.olderangelinfo[0][1]))]):e._e()]),s("div",{staticClass:"olderangel-intro"},[s("div",{staticClass:"title"},[e.hostinfo?s("div",{style:{backgroundColor:e.hostinfo[7]}}):e._e(),s("span",[e._v("簡介")])]),e.olderangelinfo[0]?s("div",{staticClass:"content"},[e._v(e._s(e.olderangelinfo[0][2]))]):e._e()])]),s("div",{staticClass:"btnwrap"},[s("span",{staticClass:"fee"},[e._v("費用:"+e._s(e.eventinfo[13])+"/人")]),s("fillbtn",{directives:[{name:"show",rawName:"v-show",value:0==e.eventinfo[7],expression:"eventinfo[7]==0"}],attrs:{btnname:"已額滿",width:"204",height:"45"},on:{clickhandler:e.alertmaxnumber}}),s("fillbtn",{directives:[{name:"show",rawName:"v-show",value:0!=e.eventinfo[7]&&0==e.isdeadline,expression:"eventinfo[7]!=0&&isdeadline==false"}],attrs:{btnname:"立即報名",width:"204",height:"45"},on:{clickhandler:e.tosignuppage}}),s("fillbtn",{directives:[{name:"show",rawName:"v-show",value:1==e.isdeadline,expression:"isdeadline==true"}],attrs:{btnname:"已報名截止",width:"204",height:"45"},on:{clickhandler:e.alertisdeadline}})],1)]),s("div",{staticClass:"describecontent"},[s("div",{staticClass:"title"},[e.hostinfo?s("div",{style:{backgroundColor:e.hostinfo[7]}}):e._e(),e._v("活動介紹 ")]),s("div",{staticClass:"content",domProps:{innerHTML:e._s(e.eventinfo[11])}})]),s("div",{staticClass:"mobilesubmitbtn",style:{color:e.maincolor}},[e.eventinfo?s("span",[e._v(e._s(e.eventinfo[13])+" / 人")]):e._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.eventinfo[7]&&0==e.isdeadline,expression:"eventinfo[7]!=0&&isdeadline==false"}],staticClass:"submitbtn",on:{click:e.tosignuppage}},[e._v("立即報名")]),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.isdeadline,expression:"isdeadline==true"}],staticClass:"submitbtn",on:{click:e.alertisdeadline}},[e._v("已截止報名")]),s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.eventinfo[7],expression:"eventinfo[7]==0"}],staticClass:"submitbtn",on:{click:e.alertmaxnumber}},[e._v("已額滿")])]),s("alertblock",{directives:[{name:"show",rawName:"v-show",value:e.showalert,expression:"showalert"}]}),s("Footer"),s("Sidemenu",{directives:[{name:"show",rawName:"v-show",value:e.showsidemenu,expression:"showsidemenu"}]}),e.hostinfo?e._e():s("div",{staticClass:"loadingmask"},[s("div",{staticClass:"loader",style:{borderTop:"8px solid"+e.maincolor}})])],1)},n=[],o=(s("ac1f"),s("1276"),s("bc3a")),a=s.n(o),l=s("20ee"),r=s("0418"),c=s("ede1"),d=s("076e"),v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bgcover"},[s("div",{ref:"alertblock",staticClass:"alertblock"},[s("i",{staticClass:"ri-error-warning-line"}),s("span",[e._v("已報名過這場活動")])])])},f=[],u={data:function(){return{}},mounted:function(){}},h=u,m=(s("a73c"),s("2877")),p=Object(m["a"])(h,v,f,!1,null,"150afcc6",null),g=p.exports,C={data:function(){return{eventinfo:[],loadingcircle:!0,hassignup:!1,usereventinfo:[],isdeadline:!1,olderangelinfo:[]}},created:function(){var e=this;a()({method:"get",url:"https://script.google.com/macros/s/AKfycbzW4IbkVHdr_DCY3U65uBx4zV9cCmSBeU-FT1QsK_UbloDhniYPT-TGXQi5tky9M5UR/exec",params:{mode:"query",id:this.$route.params.id}}).then((function(t){e.eventinfo=t.data[0],e.loadingcircle=!1;var s=new Date,i=new Date(s.getFullYear()+"/"+(s.getMonth()+1)+"/"+s.getDate()),n=new Date(e.eventinfo[8]),o=parseInt((n-i)/1e3/60/60/24);o<=0&&(e.isdeadline=!0),e.eventinfo[2]=e.convertdate(e.eventinfo[2]),e.eventinfo[8]=e.convertdate(e.eventinfo[8]),e.$store.dispatch("gethostinfo",e.eventinfo[17]),e.$store.commit("sethostid",e.eventinfo[17]),console.log(t.data)})),a()({method:"get",url:"https://script.google.com/macros/s/AKfycbxqMsajmkgXY6oxaJlCh3tRP5Rr8MEh0GpBSkcR7amFy7cL_YorIGZvftoQnSv6Nn7R8Q/exec",params:{mode:"user",id:this.$route.params.id}}).then((function(t){e.usereventinfo=t.data;for(var s=0;s<t.data.length;s++)t.data[s][0]==e.userdata.displayName&&(e.hassignup=!0)})).catch((function(e){console.error(e)})),a()({method:"get",url:"https://script.google.com/macros/s/AKfycbxGkIBwYN29d0h-Pf-lTSKe_BvRCt-Eta3pDYdT-A_Us6n3L5QLFmfXYIL2Hja0d5uj/exec",params:{eventid:this.$route.params.id}}).then((function(t){console.log("抓到銀髮大使活動資料",t.data),e.olderangelinfo=t.data}))},mounted:function(){this.$store.commit("sethostid",this.eventinfo[17]),this.$store.commit("setsignupnumber",0)},components:{Header:r["a"],fillbtn:l["a"],Sidemenu:c["a"],Footer:d["a"],alertblock:g},computed:{showsidemenu:function(){return this.$store.state.showsidemenu},hostinfo:function(){return this.$store.state.hostinfo[0]},hostid:function(){return this.$store.state.hostid},maincolor:function(){return this.$store.state.maincolor},userdata:function(){return this.$store.state.userprofiledata},showalert:function(){return this.$store.state.alertshow}},methods:{tosignuppage:function(){var e=this;1==this.hassignup?(this.$store.dispatch("showalertani","show"),setTimeout((function(){e.$store.dispatch("showalertani","close")}),2e3)):this.$router.push({name:"Signup",params:{id:this.$route.params.id}})},alertmaxnumber:function(){alert("已額滿")},alertisdeadline:function(){alert("此活動已報名截止")},convertdate:function(e){var t=e,s=t.split("-"),i=parseInt(s[2],10)+1+"",n=(s[0]+"/"+s[1]+"/"+i).substring(0,10);return n}}},_=C,w=(s("115a"),Object(m["a"])(_,i,n,!1,null,"42c425fd",null));t["default"]=w.exports},"115a":function(e,t,s){"use strict";s("66d2")},"66d2":function(e,t,s){},a73c:function(e,t,s){"use strict";s("b71c")},b71c:function(e,t,s){}}]);
//# sourceMappingURL=about.307be3ad.js.map