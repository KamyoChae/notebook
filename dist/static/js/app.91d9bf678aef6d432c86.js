webpackJsonp([1],{"59P5":function(t,e){},DXbx:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},n=i("VU/8")({name:"App"},a,!1,null,null,null).exports,o=i("NYxO"),c=i("mvHQ"),r=i.n(c),l={filterFn:function(t,e){t.rederArr=[];var i=null,s={};try{t.res.forEach(function(a){"[object Array]"==Object.prototype.toString.call(a.pages)&&(i="complete"==e||"isStar"==e||"uncomplete"==e?a.pages.filter(function(t){return 1==t[e]}):a.pages.filter(function(t){return-1!==t.title.indexOf(e)}))&&(s.allDate=a.allDate,s.pages=i),"{}"!==r()(s)&&(t.rederArr.push(s),s={},i=null)})}catch(t){}},showAll:function(t){t.rederArr=t.res},clickArticle:function(t,e){t.article=null;var i=null;t.res.forEach(function(s){"[object Array]"==Object.prototype.toString.call(s.pages)&&0!=(i=s.pages.filter(function(t){return t.id===e})).length&&(console.log(i),t.newId=e,t.article=i)}),this.commit("getIndexArticle",e)},toClickUp:function(t,e){var i=t.newId;this.commit("getIndexArticle",i);try{var s=t.indexArticle.indexs,a=t.indexArticle.index;if("isStar"==e){t.res[s].pages[a][e];t.res[s].pages[a][e]=!t.res[s].pages[a][e]}"complete"==e&&(t.res[s].pages[a][e]=!0,t.res[s].pages[a].state="已完成",t.res[s].pages[a].uncomplete=!1),"uncomplete"==e&&(t.res[s].pages[a][e]=!0,t.res[s].pages[a].state="未完成",t.res[s].pages[a].complete=!1),console.log(t.res[s].pages[a]),this.commit("setStorage")}catch(t){}},getIndexArticle:function(t,e){t.indexArticle={},t.res.forEach(function(i,s){"[object Array]"==Object.prototype.toString.call(i.pages)&&i.pages.filter(function(i,a){try{i.id==e&&(t.indexArticle={indexs:s,index:a})}catch(t){}})})},getDate:function(t,e){t.stateTime=e},addNewItem:function(t,e){var i=new Date,s=i.getFullYear()+"/"+(i.getMonth()+1),a="-",n=Date.now(),o=n;try{if(t.res.forEach(function(t,e){-1!=t.allDate.indexOf(s)&&n==o&&(o=Date.now(),a=e)}),"-"!=a)t.res[a].pages.unshift(e);else{var c={allDate:s,pages:[e]};console.log("push进res"),t.res.unshift(c),this.commit("setStorage")}}catch(t){}},setStorage:function(t){var e=r()(t.res);localStorage.removeItem("notBook"),localStorage.setItem("notBook",e)}};s.a.use(o.a);var u=new o.a.Store({state:{res:[],rederArr:[],article:[{id:"201561119",date:"2018/01/01",week:"星期一",state:"执行中",complete:!1,uncomplete:!0,isStar:!1,title:"",text:""}],stateTime:{time:"2018/01/01",week:"星期一"},indexArticle:{},newId:""},mutations:l}),m=i("/ocq"),h={name:"HomeHead",data:function(){return{value:""}},methods:{complClick:function(){this.$store.commit("filterFn","complete")},unComplClick:function(){this.$store.commit("filterFn","uncomplete")},colleClick:function(){this.$store.commit("filterFn","isStar")},showAllClick:function(){this.$store.commit("showAll")},toEdit:function(){this.$router.push("/Edit"),this.$store.state.article="";var t=this.getEditDate();this.$store.commit("getDate",t)},getEditDate:function(){var t=new Date,e=t.toLocaleDateString(),i=Date.now(),s="";switch(t.getDay()){case 0:s="星期日";break;case 1:s="星期一";break;case 2:s="星期二";break;case 3:s="星期三";break;case 4:s="星期四";break;case 5:s="星期五";break;case 6:s="星期六"}return{time:e,week:s,id:i}}},watch:{value:function(t,e){this.$store.commit("filterFn",t)}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"header"},[i("div",{staticClass:"head-search"},[i("div",{staticClass:"btn-box"},[i("button",{staticClass:"iconfont mGreen",on:{click:function(e){t.complClick()}}},[t._v("")]),t._v(" "),i("button",{staticClass:"iconfont mRed",on:{click:function(e){t.unComplClick()}}},[t._v("")]),t._v(" "),i("button",{staticClass:"iconfont mYellow",on:{click:function(e){t.colleClick()}}},[t._v("")]),t._v(" "),i("button",{staticClass:"iconfont mPink",on:{click:function(e){t.showAllClick()}}},[t._v("")]),t._v(" "),i("button",{staticClass:"iconfont mBlue",on:{click:function(e){t.toEdit()}}},[t._v("")])]),t._v(" "),i("div",{staticClass:"search-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",name:"",id:"",placeholder:"搜索|标题"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})])])])])},staticRenderFns:[]};var d={name:"HomeList",data:function(){return{}},methods:{clickStar:function(t,e){var i=this.$store.state.res[e].pages[t].isStar;this.$store.state.res[e].pages[t].isStar=!i,this.$store.commit("setStorage")},deleteItem:function(t,e){this.$store.state.res[e].pages.splice(t,1),this.$store.commit("setStorage")},checkLink:function(t){this.$store.commit("clickArticle",t)},getStorage:function(){var t=localStorage.getItem("notBook");this.$store.state.res=JSON.parse(t)}},mounted:function(){if(localStorage.getItem("notBook"))this.getStorage(),this.$store.state.rederArr=this.$store.state.res;else{var t=[{allDate:"2018/09",pages:[{id:"20154619",date:"2018/10/02",week:"星期三",state:"执行中",complete:!1,uncomplete:!0,isStar:!0,title:"嘿！这是一个神奇的记事本",text:"嘿！你好呀！这是一个神奇的记事本，你可以在这里记录一些将来的事情，比如接下来要做什么、明天要做什么，也可以把它当日记来用，写一写心事，或是记一记各种千奇百怪的经历...总之，在这里的数据都是存储在你的浏览器上面的，除非是你手动删除了浏览器的数据或是卸载了这个浏览器，你写的东西才会消失，所以啊，在这里你大可放心去写东西"}]}];this.$store.state.res=t,this.$store.state.rederArr=t}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},t._l(this.$store.state.rederArr,function(e,s){return i("div",{key:e.allDate,staticClass:"time-month"},[e.pages.length?i("div",{staticClass:"time-box"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("i",[t._v(t._s(e.allDate))])]):t._e(),t._v(" "),t._l(e.pages,function(e,a){return i("router-link",{key:e.id,attrs:{to:"/Edit"}},[i("div",{staticClass:"list-item",on:{click:function(i){t.checkLink(e.id)}}},[i("div",{staticClass:"item-data"},[i("span",[t._v(t._s(e.date))]),t._v(" "),i("span",[t._v(t._s(e.week))]),t._v(" "),i("span",[t._v("当前状态")]),t._v(" "),i("span",[t._v(t._s(e.state))])]),t._v(" "),i("p",[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"delete-box"},[e.isStar?i("i",{staticClass:"iconfont starIcon",on:{click:function(e){e.preventDefault(),t.clickStar(a,s)}}},[t._v("")]):i("i",{staticClass:"iconfont starIcon",on:{click:function(e){e.preventDefault(),t.clickStar(a,s)}}},[t._v("")]),t._v(" "),i("i",{staticClass:"iconfont",on:{click:function(e){e.preventDefault(),t.deleteItem(a,s)}}},[t._v("")])])])])})],2)}))},staticRenderFns:[]};var f={name:"Home",components:{HomeHead:i("VU/8")(h,v,!1,function(t){i("iFr3")},"data-v-59a92127",null).exports,HomeList:i("VU/8")(d,p,!1,function(t){i("59P5")},"data-v-619eccf2",null).exports},data:function(){return{}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("HomeHead"),this._v(" "),e("HomeList")],1)},staticRenderFns:[]},g=i("VU/8")(f,k,!1,null,null,null).exports,_={name:"Edit",data:function(){return{cover:!1,article:"",information:"收藏",active:!0,newArticle:!0,stateTime:"",btnInfo:"您确定要放弃编辑吗？(确定将返回首页)",title:"",text:"",id:"",date:"",week:"",state:"执行中",complete:!1,uncomplete:!0,isStar:"",checkFlag:!0}},methods:{checkCover:function(t){var e=t.target.getAttribute("data-key");if("star"==e||"unstar"==e)this.isStar=!this.isStar,console.log(this.isStar),this.starThis();else{if("save"==e){this.id=Date.now();var i=this.createObj();if(this.checkFlag=!0,this.checkSaveChange(),this.checkFlag){if(!i)return void alert("error:标题或内容不能为空！");this.$store.commit("addNewItem",i),this.btnInfo="保存成功！是否返回首页？"}else this.btnInfo="保存失败，标题已存在！是否返回首页？";this.cover=!0}switch("complete"==e&&this.completeUp("complete"),"uncomplete"==e&&(console.log(0),this.completeUp("uncomplete")),e){case"cancle":this.btnInfo="您确定要放弃编辑吗？(确定将返回首页)"}}},completeUp:function(t){var e;e=this.checkNull(),console.log(e+">> up"),e?("complete"==t?(this.btnInfo="任务完成！是否返回首页？",this.$store.commit("toClickUp","complete")):"uncomplete"==t&&(this.btnInfo="任务失败！是否返回首页？",this.$store.commit("toClickUp","uncomplete")),this.cover=!0):alert("error:标题或内容不能为空！")},checkNull:function(){return""!=this.title&&""!=this.text},checkSaveChange:function(){var t=this,e=this.title;try{var i=this.$store.state.res[0].pages;console.log(i),i.forEach(function(i){i.title===e&&(t.checkFlag=!1)})}catch(t){}},cancelCover:function(){this.cover=!1},starThis:function(){this.$store.commit("toClickUp","isStar")},editInit:function(){this.date=this.stateTime.time,this.week=this.stateTime.week},createObj:function(){return""!=this.title&&""!=this.text&&{id:this.id,date:this.date,week:this.week,state:this.state,complete:!1,uncomplete:!0,isStar:!1,title:this.title,text:this.text}},sureClick:function(){this.$router.push("/")}},mounted:function(){this.stateTime=this.$store.state.stateTime,console.log(this.$store.state.res);try{this.editInit(),this.article=this.$store.state.article[0],console.log(this.article.isStar),this.article&&(this.title=this.article.title,this.text=this.article.text,this.isStar=this.article.isStar,this.newArticle=!1)}catch(t){this.editInit()}},destroyed:function(){this.newArticle=!0}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.cover,expression:"cover"}],staticClass:"cover"},[i("div",{staticClass:"box-check"},[i("span",[t._v(t._s(t.btnInfo))]),t._v(" "),i("div",{staticClass:"check-btn"},[i("button",{staticClass:"iconfont mGreen",on:{click:t.sureClick}},[t._v("")]),t._v(" "),i("button",{staticClass:"iconfont mRed",on:{click:t.cancelCover}},[t._v("")])])])]),t._v(" "),i("div",{staticClass:"titles"},[(t.newArticle,i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入标题 ",maxlength:"20"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}))]),t._v(" "),i("div",{staticClass:"innerText"},[(t.newArticle,i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{name:"",id:"",cols:"30",rows:"16",maxlength:"1000"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}))]),t._v(" "),i("div",{staticClass:"btn-box"},[i("div",[i("button",{staticClass:"iconfont mGreen",attrs:{"data-key":"save"},on:{click:t.checkCover}},[t._v(" 保存 ")]),t._v(" "),i("button",{staticClass:"iconfont mRed",attrs:{"data-key":"cancle"},on:{click:t.checkCover}},[t._v(" 取消 ")])]),t._v(" "),i("div",[t.newArticle?i("span",{staticClass:"time"},[t._v(t._s(t.stateTime.time)+" - "+t._s(t.stateTime.week))]):i("span",{staticClass:"time"},[t._v(t._s(t.article.date)+" - "+t._s(t.article.week))])]),t._v(" "),i("div",[t.isStar?i("button",{staticClass:"iconfont mYellow font-larg",attrs:{"data-key":"unstar"},on:{click:t.checkCover}},[t._v("")]):i("button",{staticClass:"iconfont mYellow font-larg",attrs:{"data-key":"star"},on:{click:t.checkCover}},[t._v("")]),t._v(" "),i("button",{staticClass:"iconfont mGreen ",attrs:{"data-key":"complete"},on:{click:t.checkCover}},[t._v("完成了")]),t._v(" "),i("button",{staticClass:"iconfont mRed ",attrs:{"data-key":"uncomplete"},on:{click:t.checkCover}},[t._v("没完成")])])])])},staticRenderFns:[]};var w=i("VU/8")(_,C,!1,function(t){i("DXbx")},"data-v-67f87660",null).exports;s.a.use(m.a);var x=new m.a({routes:[{path:"/",name:"Home",component:g},{path:"/Edit",name:"Edit",component:w}]});i("m0iu"),i("cjdf"),i("SJZ9");s.a.config.productionTip=!1,new s.a({el:"#app",router:x,store:u,components:{App:n},template:"<App/>"})},SJZ9:function(t,e){},cjdf:function(t,e){},iFr3:function(t,e){},m0iu:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.91d9bf678aef6d432c86.js.map