(function(t){function e(e){for(var a,o,i=e[0],d=e[1],l=e[2],c=0,f=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var d=s[o];0!==r[d]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-4a128fd1":"9c140906"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(t){var e=[],s=r[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=a);var n,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(t);var l=new Error;n=function(e){d.onerror=d.onload=null,clearTimeout(c);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,s[1](l)}r[t]=void 0}};var c=setTimeout((function(){n({type:"timeout",target:d})}),12e4);d.onerror=d.onload=n,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var c=0;c<d.length;c++)e(d[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("4de4"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app",attrs:{id:"app"}},[s("Preloader"),s("Sidebar"),s("Dashboard"),s("Modal"),s("GitHubCorner")],1)},n=[],o=s("5530"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"preloading"}},[t.preloading?s("div",{staticClass:"preloader",class:{active:!t.preloading}},[s("i",{staticClass:"material-icons large"},[t._v("dashboard")])]):t._e()])},d=[],l={data:function(){return{preloading:!0}},mounted:function(){var t=this;setTimeout((function(){t.preloading=!1}),1500)}},c=l,u=s("2877"),f=Object(u["a"])(c,i,d,!1,null,null,null),b=f.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("div",{staticClass:"sidebar__inner"},[t._m(0),s("ul",{staticClass:"sidebar-menu"},[t._l(t.links,(function(e){return s("router-link",{key:e.url,staticClass:"sidebar-menu__item",attrs:{"active-class":"active",tag:"li",to:e.url,exact:e.exact}},[s("a",{staticClass:"sidebar-menu__btn btn-floating btn-large waves-effect white-text"},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))])]),s("span",[t._v(t._s(e.name))])])})),s("li",{staticClass:"sidebar-menu__item"},[s("a",{staticClass:"sidebar-menu__btn btn-floating btn-large waves-effect white-text modal-trigger",attrs:{href:"#modal"},on:{click:function(e){return e.preventDefault(),t.openModal(e)}}},[s("i",{staticClass:"material-icons"},[t._v("add")])]),s("span",[t._v("New task")])])],2)])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar__logo"},[s("i",{staticClass:"material-icons large white-text"},[t._v("dashboard")])])}],k=s("2f62"),h={computed:Object(o["a"])({},Object(k["c"])(["links"])),methods:{openModal:function(){window.modal.open()}}},p=h,T=Object(u["a"])(p,g,m,!1,null,null,null),j=T.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard"},["/stats"!==t.$router.currentRoute.path?s("Search"):t._e(),s("transition",{attrs:{name:"fade"}},[s("router-view")],1),s("transition",{attrs:{name:"appear"}},[t.dashboardToggling?s("DashboardLoader"):t._e()],1)],1)},_=[],y=(s("d3b7"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"search-form",attrs:{action:""}},[s("div",{staticClass:"search-form__input input-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchRequest,expression:"searchRequest"}],attrs:{type:"text",id:"search"},domProps:{value:t.searchRequest},on:{input:[function(e){e.target.composing||(t.searchRequest=e.target.value)},function(e){return t.filterValue(e.target.value)}]}}),s("label",{attrs:{for:"search"}},[t._v("Search task")])])])}),C=[],O={data:function(){return{searchRequest:""}},methods:Object(o["a"])(Object(o["a"])({},Object(k["d"])(["setSearchRequest"])),{},{filterValue:function(t){this.setSearchRequest(t)}})},S=O,w=Object(u["a"])(S,y,C,!1,null,null,null),x=w.exports,P={components:{Search:x,DashboardLoader:function(){return s.e("chunk-4a128fd1").then(s.bind(null,"ba6e"))}},computed:Object(o["a"])({},Object(k["c"])(["dashboardToggling"]))},D=P,z=Object(u["a"])(D,v,_,!1,null,null,null),E=z.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"modal",staticClass:"modal",attrs:{id:"modal"}},[s("div",{staticClass:"modal-content"},[s("h4",[t._v("New task")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.submitTask(e)}}},[s("div",{staticClass:"input-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.taskTitle,expression:"taskTitle"}],staticClass:"validate",attrs:{id:"taskTitle",type:"text"},domProps:{value:t.taskTitle},on:{input:function(e){e.target.composing||(t.taskTitle=e.target.value)}}}),s("label",{attrs:{for:"taskTitle"}},[t._v("Task title*")]),s("transition",{attrs:{name:"appear"}},[t.formError?s("span",{staticClass:"form-error"},[t._v("Field is required")]):t._e()])],1),s("div",{staticClass:"input-field"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.taskText,expression:"taskText"}],staticClass:"materialize-textarea",attrs:{id:"taskText"},domProps:{value:t.taskText},on:{input:function(e){e.target.composing||(t.taskText=e.target.value)}}}),s("label",{attrs:{for:"taskText"}},[t._v("Task text")])]),s("div",{staticClass:"input-field"},[s("input",{ref:"datepicker",staticClass:"modal__datepicker datepicker",attrs:{id:"task-text",type:"text"}}),s("label",{attrs:{for:"task-text"}},[t._v("Task deadline")])]),t._m(0)])])])},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"modal__submit btn waves-effect waves-light",attrs:{type:"submit",name:"action"}},[t._v("Submit "),s("i",{staticClass:"material-icons right"},[t._v("send")])])}],$=(s("498a"),{data:function(){return{taskTitle:"",taskText:"",deadline:null,formError:!1}},methods:Object(o["a"])(Object(o["a"])({},Object(k["d"])(["addTodoTask"])),{},{submitTask:function(){var t;this.taskTitle.trim()?(t=this.deadline?{id:Date.now(),title:this.taskTitle,text:this.taskText,deadline:this.deadline.date}:{id:Date.now(),title:this.taskTitle,text:this.taskText},this.addTodoTask(t),window.modal.close(),this.taskTitle="",this.taskText="",this.formError=!1,"/"!==this.$router.currentRoute.path&&this.$router.push("/")):this.formError=!0}}),mounted:function(){window.modal=window.M.Modal.init(this.$refs.modal),this.deadline=window.M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy"})},destroyed:function(){window.modal.destroy(),this.deadline&&this.deadline.destroy()}}),N=$,B=Object(u["a"])(N,I,M,!1,null,null,null),L=B.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"github-corner",attrs:{href:"https://github.com/dmitriyakkerman/kanban-board","aria-label":"View source on GitHub"}},[s("svg",{staticStyle:{fill:"#5e5e6d",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[s("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),s("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),s("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},q=[],R={},A=R,U=Object(u["a"])(A,J,q,!1,null,null,null),V=U.exports,G={name:"App",components:{Preloader:b,Sidebar:j,Dashboard:E,Modal:L,GitHubCorner:V},computed:Object(o["a"])({},Object(k["c"])(["dashboardToggling"]))},H=G,F=(s("5c0b"),Object(u["a"])(H,r,n,!1,null,null,null)),Z=F.exports,K={state:{links:[{name:"Tasks",url:"/",icon:"dashboard",exact:!0},{name:"Todo",url:"/todo",icon:"flag"},{name:"In Progress",url:"/in-progress",icon:"play_circle_outline"},{name:"Testing",url:"/testing",icon:"settings"},{name:"Done",url:"/done",icon:"done"},{name:"Stats",url:"/stats",icon:"insert_chart"}]},getters:{links:function(t){return t.links}}},Q={state:{dashboardState:"horizontal",dashboardToggling:!1},getters:{dashboardState:function(t){return t.dashboardState},dashboardToggling:function(t){return t.dashboardToggling}},actions:{toggleDashboardType:function(t,e){var s=t.commit;s("closeBoards"),setTimeout((function(){s("toggleDashboardType",e)}),500),setTimeout((function(){s("openBoards")}),500)}},mutations:{closeBoards:function(t){t.dashboardToggling=!0},openBoards:function(t){t.dashboardToggling=!1},toggleDashboardType:function(t,e){t.dashboardState=e}}},W={state:{todoTasks:JSON.parse(localStorage.getItem("todoTasks"))||[{id:Date.now(),title:"Initial task",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",deadline:new Date}],inProgressTasks:JSON.parse(localStorage.getItem("inProgressTasks"))||[],testingTasks:JSON.parse(localStorage.getItem("testingTasks"))||[],doneTasks:JSON.parse(localStorage.getItem("doneTasks"))||[],taskToSearch:""},getters:{todoTasks:function(t){return t.todoTasks},inProgressTasks:function(t){return t.inProgressTasks},testingTasks:function(t){return t.testingTasks},doneTasks:function(t){return t.doneTasks},taskToSearch:function(t){return t.taskToSearch}},mutations:{setSearchRequest:function(t,e){t.taskToSearch=e},updateTodoTasks:function(t,e){t.todoTasks=e,localStorage.setItem("todoTasks",JSON.stringify(t.todoTasks))},updateInProgressTasks:function(t,e){t.inProgressTasks=e,localStorage.setItem("inProgressTasks",JSON.stringify(t.inProgressTasks))},updateTestingTasks:function(t,e){t.testingTasks=e,localStorage.setItem("testingTasks",JSON.stringify(t.testingTasks))},updateDoneTasks:function(t,e){t.doneTasks=e,localStorage.setItem("doneTasks",JSON.stringify(t.doneTasks))},addTodoTask:function(t,e){t.todoTasks.push(e),localStorage.setItem("todoTasks",JSON.stringify(t.todoTasks))},removeTodoTask:function(t,e){t.todoTasks=t.todoTasks.filter((function(t){return t.id!==e})),localStorage.setItem("todoTasks",JSON.stringify(t.todoTasks))},removeTestingTask:function(t,e){t.testingTasks=t.testingTasks.filter((function(t){return t.id!==e})),localStorage.setItem("testingTasks",JSON.stringify(t.testingTasks))},removeInProgressTask:function(t,e){t.inProgressTasks=t.inProgressTasks.filter((function(t){return t.id!==e})),localStorage.setItem("inProgressTasks",JSON.stringify(t.inProgressTasks))},removeDoneTask:function(t,e){t.doneTasks=t.doneTasks.filter((function(t){return t.id!==e})),localStorage.setItem("doneTasks",JSON.stringify(t.doneTasks))}}};a["a"].use(k["a"]);var X=new k["a"].Store({modules:{sidebar:K,dashboard:Q,tasks:W}}),Y=s("8c4f"),tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{name:"appear"}},[t.dashboardToggling?t._e():s("div",{staticClass:"dashboard__inner",class:t.dashboardState},[s("Board",{attrs:{filteredTasks:t.filteredTasks(t.todoTasks),category:t.todoTasks,title:"Todo",classModifier:"todo"}}),s("Board",{attrs:{filteredTasks:t.filteredTasks(t.inProgressTasks),category:t.inProgressTasks,title:"In Progress",classModifier:"in-progress"}}),s("Board",{attrs:{filteredTasks:t.filteredTasks(t.testingTasks),category:t.testingTasks,title:"Testing",classModifier:"testing"}}),s("Board",{attrs:{filteredTasks:t.filteredTasks(t.doneTasks),category:t.doneTasks,title:"Done",classModifier:"done"}})],1)]),s("Viewbar")],1)},et=[],st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board",class:"board--"+t.classModifier},[s("div",{staticClass:"board__title"},[t._v(t._s(t.title))]),s("draggable",{staticClass:"tasks list-group",attrs:{list:t.category,group:"tasks"},on:{add:t.onUpdate,remove:t.onUpdate}},t._l(t.filteredTasks,(function(e){return s("div",{key:e.id,staticClass:"task list-group-item"},[s("div",{staticClass:"task-data"},[s("div",{staticClass:"task__title"},[t._v(t._s(e.title))]),s("div",{staticClass:"task__text"},[t._v(t._s(e.text))])]),s("div",{staticClass:"task-menu"},[s("a",{staticClass:"task-menu__remove",attrs:{href:"",title:"Remove"},on:{click:function(s){return s.preventDefault(),t.removeTask(e.id)}}},[s("i",{staticClass:"material-icons"},[t._v("delete")])])]),e.deadline?s("div",{staticClass:"task__info"},[s("div",{staticClass:"task-date",attrs:{title:"Deadline"}},[s("i",{staticClass:"task-date__icon material-icons"},[t._v("access_time")]),s("span",{staticClass:"task-date__data"},[t._v(t._s(t._f("formatDate")(new Date(e.deadline))))])]),new Date>new Date(e.deadline)?s("div",{staticClass:"task-status",attrs:{title:"Expired"}},[s("i",{staticClass:"task-status__icon material-icons red-text"},[t._v("warning")])]):t._e()]):t._e()])})),0)],1)},at=[],rt=s("b76a"),nt=s.n(rt),ot={components:{draggable:nt.a},props:{filteredTasks:Array,category:Array,title:String,classModifier:String},computed:Object(o["a"])({},Object(k["c"])(["todoTasks","inProgressTasks","testingTasks","doneTasks"])),methods:Object(o["a"])(Object(o["a"])({},Object(k["d"])(["updateTodoTasks","updateInProgressTasks","updateTestingTasks","updateDoneTasks","removeTodoTask","removeInProgressTask","removeTestingTask","removeDoneTask"])),{},{onUpdate:function(){this.updateTodoTasks(this.todoTasks),this.updateInProgressTasks(this.inProgressTasks),this.updateTestingTasks(this.testingTasks),this.updateDoneTasks(this.doneTasks)},removeTask:function(t){this.removeTodoTask(t),this.removeInProgressTask(t),this.removeTestingTask(t),this.removeDoneTask(t)}})},it=ot,dt=Object(u["a"])(it,st,at,!1,null,null,null),lt=dt.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"viewbar"},[s("li",{staticClass:"viewbar__item",class:{active:"horizontal"===t.dashboardState}},[s("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.toggleDashboard("horizontal")}}},[s("span"),s("span"),s("span"),s("span")])]),s("li",{staticClass:"viewbar__item",class:{active:"vertical"===t.dashboardState}},[s("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.toggleDashboard("vertical")}}},[s("span"),s("span"),s("span"),s("span")])])])},ut=[],ft={methods:Object(o["a"])(Object(o["a"])({},Object(k["b"])(["toggleDashboardType"])),{},{toggleDashboard:function(t){this.toggleDashboardType(t)}}),computed:Object(o["a"])({},Object(k["c"])(["dashboardState"]))},bt=ft,gt=Object(u["a"])(bt,ct,ut,!1,null,null,null),mt=gt.exports;s("c975");function kt(t){var e,s=this;return e=t.filter((function(t){if(-1!==t.title.toLowerCase().indexOf(s.taskToSearch.toLowerCase()))return t})),e}var ht,pt,Tt={components:{Board:lt,Viewbar:mt},computed:Object(o["a"])({},Object(k["c"])(["dashboardState","dashboardToggling","taskToSearch","todoTasks","doneTasks","inProgressTasks","testingTasks"])),methods:{filteredTasks:kt}},jt=Tt,vt=Object(u["a"])(jt,tt,et,!1,null,null,null),_t=vt.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.dashboardToggling?t._e():s("div",{staticClass:"dashboard__inner",class:t.dashboardState},[s("Board",{attrs:{filteredTasks:t.filteredTasks(t.todoTasks),category:t.todoTasks,title:"Todo",classModifier:"todo"}})],1)},Ct=[],Ot={components:{Board:lt},computed:Object(o["a"])({},Object(k["c"])(["dashboardState","dashboardToggling","taskToSearch","todoTasks"])),methods:{filteredTasks:kt}},St=Ot,wt=Object(u["a"])(St,yt,Ct,!1,null,null,null),xt=wt.exports,Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.dashboardToggling?t._e():s("div",{staticClass:"dashboard__inner",class:t.dashboardState},[s("Board",{attrs:{filteredTasks:t.filteredTasks(t.inProgressTasks),category:t.inProgressTasks,title:"In Progress",classModifier:"in-progress"}})],1)},Dt=[],zt={components:{Board:lt},computed:Object(o["a"])({},Object(k["c"])(["dashboardState","dashboardToggling","taskToSearch","inProgressTasks"])),methods:{filteredTasks:kt}},Et=zt,It=Object(u["a"])(Et,Pt,Dt,!1,null,null,null),Mt=It.exports,$t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.dashboardToggling?t._e():s("div",{staticClass:"dashboard__inner",class:t.dashboardState},[s("Board",{attrs:{filteredTasks:t.filteredTasks(t.testingTasks),category:t.testingTasks,title:"Testing",classModifier:"testing"}})],1)},Nt=[],Bt={components:{Board:lt},computed:Object(o["a"])({},Object(k["c"])(["dashboardState","dashboardToggling","taskToSearch","testingTasks"])),methods:{filteredTasks:kt}},Lt=Bt,Jt=Object(u["a"])(Lt,$t,Nt,!1,null,null,null),qt=Jt.exports,Rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.dashboardToggling?t._e():s("div",{staticClass:"dashboard__inner",class:t.dashboardState},[s("Board",{attrs:{filteredTasks:t.filteredTasks(t.doneTasks),category:t.doneTasks,title:"Done",classModifier:"done"}})],1)},At=[],Ut={components:{Board:lt},computed:Object(o["a"])({},Object(k["c"])(["dashboardState","dashboardToggling","taskToSearch","doneTasks"])),methods:{filteredTasks:kt}},Vt=Ut,Gt=Object(u["a"])(Vt,Rt,At,!1,null,null,null),Ht=Gt.exports,Ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stats"},[s("Stats")],1)},Zt=[],Kt=s("1fca"),Qt={extends:Kt["a"],computed:Object(o["a"])({},Object(k["c"])(["todoTasks","inProgressTasks","testingTasks","doneTasks"])),mounted:function(){this.renderChart({labels:["Todo","In Progress","Testing","Done"],datasets:[{data:[this.todoTasks.length,this.inProgressTasks.length,this.testingTasks.length,this.doneTasks.length],backgroundColor:["#399dff","#ffd74c","#ff8653","#0fd34b"]}]},{responsive:!0,maintainAspectRatio:!1})}},Wt=Qt,Xt=Object(u["a"])(Wt,ht,pt,!1,null,null,null),Yt=Xt.exports,te={components:{Stats:Yt}},ee=te,se=Object(u["a"])(ee,Ft,Zt,!1,null,null,null),ae=se.exports;a["a"].use(Y["a"]);var re=new Y["a"]({mode:"history",routes:[{path:"/",component:_t},{path:"/todo",component:xt},{path:"/in-progress",component:Mt},{path:"/testing",component:qt},{path:"/done",component:Ht},{path:"/stats",component:ae}]});a["a"].filter("formatDate",(function(t){return t.toLocaleDateString("en-EN",{year:"numeric",month:"short",day:"2-digit"})}));s("6885"),s("b107");a["a"].filter("capitalize",(function(t){return t})),a["a"].config.productionTip=!1,new a["a"]({store:X,router:re,render:function(t){return t(Z)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"9c0c":function(t,e,s){},b107:function(t,e,s){}});
//# sourceMappingURL=app.ae8f1f49.js.map