(function(t){function s(s){for(var a,o,i=s[0],l=s[1],d=s[2],c=0,f=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(s);while(f.length)f.shift()();return r.push.apply(r,d||[]),e()}function e(){for(var t,s=0;s<r.length;s++){for(var e=r[s],a=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(a=!1)}a&&(r.splice(s--,1),t=i(i.s=e[0]))}return t}var a={},n={app:0},r=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-4a128fd1":"9c140906"}[t]+".js"}function i(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var s=[],e=n[t];if(0!==e)if(e)s.push(e[2]);else{var a=new Promise((function(s,a){e=n[t]=[s,a]}));s.push(e[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var d=new Error;r=function(s){l.onerror=l.onload=null,clearTimeout(c);var e=n[t];if(0!==e){if(e){var a=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,e[1](d)}n[t]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(s)},i.m=t,i.c=a,i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)i.d(e,a,function(s){return t[s]}.bind(null,a));return e},i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=s,l=l.slice();for(var c=0;c<l.length;c++)s(l[c]);var u=d;r.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},4678:function(t,s,e){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var s=r(t);return e(s)}function r(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,s,e){"use strict";e.r(s);e("4de4"),e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"app",attrs:{id:"app"}},[e("Preloader"),e("Sidebar"),e("Dashboard"),e("Modal"),e("GitHubCorner")],1)},r=[],o=e("5530"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"preloading"}},[t.preloading?e("div",{staticClass:"preloader",class:{active:!t.preloading}},[e("i",{staticClass:"material-icons large"},[t._v("dashboard")])]):t._e()])},l=[],d={data:function(){return{preloading:!0}},mounted:function(){var t=this;setTimeout((function(){t.preloading=!1}),1500)}},c=d,u=e("2877"),f=Object(u["a"])(c,i,l,!1,null,null,null),b=f.exports,k=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sidebar"},[e("div",{staticClass:"sidebar__inner"},[t._m(0),e("ul",{staticClass:"sidebar-menu"},[t._l(t.links,(function(s){return e("router-link",{key:s.url,staticClass:"sidebar-menu__item",attrs:{"active-class":"active",tag:"li",to:s.url,exact:s.exact}},[e("a",{staticClass:"sidebar-menu__btn btn-floating btn-large waves-effect white-text"},[e("i",{staticClass:"material-icons"},[t._v(t._s(s.icon))])]),e("span",[t._v(t._s(s.name))])])})),e("li",{staticClass:"sidebar-menu__item"},[e("a",{staticClass:"sidebar-menu__btn btn-floating btn-large waves-effect white-text modal-trigger",attrs:{href:"#modal"},on:{click:function(s){return s.preventDefault(),t.openModal(s)}}},[e("i",{staticClass:"material-icons"},[t._v("add")])]),e("span",[t._v("New task")])])],2)])])},h=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sidebar__logo"},[e("i",{staticClass:"material-icons large white-text"},[t._v("dashboard")])])}],m=e("2f62"),g={computed:Object(o["a"])({},Object(m["c"])(["links"])),methods:{openModal:function(){window.modal.open()}}},p=g,T=Object(u["a"])(p,k,h,!1,null,null,null),j=T.exports,v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"dashboard"},["/stats"!==t.$router.currentRoute.path?e("Search"):t._e(),e("transition",{attrs:{name:"fade"}},[e("router-view")],1),e("transition",{attrs:{name:"appear"}},[t.dashboardToggling?e("DashboardLoader"):t._e()],1)],1)},_=[],y=(e("d3b7"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",{staticClass:"search-form",attrs:{action:""}},[e("div",{staticClass:"search-form__input input-field"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchRequest,expression:"searchRequest"}],attrs:{type:"text",id:"search"},domProps:{value:t.searchRequest},on:{input:[function(s){s.target.composing||(t.searchRequest=s.target.value)},function(s){return t.filterValue(s.target.value)}]}}),e("label",{attrs:{for:"search"}},[t._v("Search task")])])])}),C=[],O={data:function(){return{searchRequest:""}},methods:Object(o["a"])(Object(o["a"])({},Object(m["d"])(["setSearchRequest"])),{},{filterValue:function(t){this.setSearchRequest(t)}})},S=O,w=Object(u["a"])(S,y,C,!1,null,null,null),x=w.exports,P={components:{Search:x,DashboardLoader:function(){return e.e("chunk-4a128fd1").then(e.bind(null,"ba6e"))}},computed:Object(o["a"])({},Object(m["c"])(["dashboardToggling"]))},D=P,I=Object(u["a"])(D,v,_,!1,null,null,null),z=I.exports,E=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"modal",staticClass:"modal",attrs:{id:"modal"}},[e("div",{staticClass:"modal-content"},[e("h4",[t._v("New task")]),e("form",{on:{submit:function(s){return s.preventDefault(),t.submitTask(s)}}},[e("div",{staticClass:"input-field"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.taskTitle,expression:"taskTitle"}],staticClass:"validate",attrs:{id:"taskTitle",type:"text"},domProps:{value:t.taskTitle},on:{input:function(s){s.target.composing||(t.taskTitle=s.target.value)}}}),e("label",{attrs:{for:"taskTitle"}},[t._v("Task title*")]),e("transition",{attrs:{name:"appear"}},[t.formError?e("span",{staticClass:"form-error"},[t._v("Field is required")]):t._e()])],1),e("div",{staticClass:"input-field"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.taskText,expression:"taskText"}],staticClass:"materialize-textarea",attrs:{id:"taskText"},domProps:{value:t.taskText},on:{input:function(s){s.target.composing||(t.taskText=s.target.value)}}}),e("label",{attrs:{for:"taskText"}},[t._v("Task text")])]),e("div",{staticClass:"input-field"},[e("input",{ref:"datepicker",staticClass:"modal__datepicker datepicker",attrs:{id:"task-text",type:"text"}}),e("label",{attrs:{for:"task-text"}},[t._v("Task deadline")])]),t._m(0)])])])},$=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"modal__submit btn waves-effect waves-light",attrs:{type:"submit",name:"action"}},[t._v("Submit "),e("i",{staticClass:"material-icons right"},[t._v("send")])])}],N=(e("498a"),{data:function(){return{taskTitle:"",taskText:"",deadline:null,formError:!1}},methods:Object(o["a"])(Object(o["a"])({},Object(m["d"])(["addTodoTask"])),{},{submitTask:function(){var t;this.taskTitle.trim()?(t=this.deadline?{id:Date.now(),title:this.taskTitle,text:this.taskText,deadline:this.deadline.date}:{id:Date.now(),title:this.taskTitle,text:this.taskText},this.addTodoTask(t),window.modal.close(),this.taskTitle="",this.taskText="",this.formError=!1,"/"!==this.$router.currentRoute.path&&this.$router.push("/")):this.formError=!0}}),mounted:function(){window.modal=window.M.Modal.init(this.$refs.modal),this.deadline=window.M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy"})},destroyed:function(){window.modal.destroy(),this.deadline&&this.deadline.destroy()}}),M=N,B=Object(u["a"])(M,E,$,!1,null,null,null),L=B.exports,J=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"github-corner",attrs:{href:"https://github.com/dmitriyakkerman/kanban-board","aria-label":"View source on GitHub"}},[e("svg",{staticStyle:{fill:"#5e5e6d",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},q=[],R={},U=R,V=Object(u["a"])(U,J,q,!1,null,null,null),A=V.exports,G={name:"App",components:{Preloader:b,Sidebar:j,Dashboard:z,Modal:L,GitHubCorner:A},computed:Object(o["a"])({},Object(m["c"])(["dashboardToggling"]))},H=G,F=(e("5c0b"),Object(u["a"])(H,n,r,!1,null,null,null)),Z=F.exports,K={state:{links:[{name:"Tasks",url:"/",icon:"dashboard",exact:!0},{name:"Todo",url:"/todo",icon:"flag"},{name:"In Progress",url:"/in-progress",icon:"play_circle_outline"},{name:"Testing",url:"/testing",icon:"settings"},{name:"Done",url:"/done",icon:"done"},{name:"Stats",url:"/stats",icon:"insert_chart"}]},getters:{links:function(t){return t.links}}},Q={state:{dashboardState:"horizontal",dashboardToggling:!1},getters:{dashboardState:function(t){return t.dashboardState},dashboardToggling:function(t){return t.dashboardToggling}},actions:{toggleDashboardType:function(t,s){var e=t.commit;e("closeBoards"),setTimeout((function(){e("toggleDashboardType",s)}),500),setTimeout((function(){e("openBoards")}),500)}},mutations:{closeBoards:function(t){t.dashboardToggling=!0},openBoards:function(t){t.dashboardToggling=!1},toggleDashboardType:function(t,s){t.dashboardState=s}}},W={state:{todoTasks:{tasks:JSON.parse(localStorage.getItem("todoTasks"))||[{id:Date.now(),title:"Initial task",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",deadline:new Date}],info:{title:"Todo",classModifier:"todo"}},inProgressTasks:{tasks:JSON.parse(localStorage.getItem("inProgressTasks"))||[],info:{title:"In Progress",classModifier:"in-progress"}},testingTasks:{tasks:JSON.parse(localStorage.getItem("testingTasks"))||[],info:{title:"Testing",classModifier:"testing"}},doneTasks:{tasks:JSON.parse(localStorage.getItem("doneTasks"))||[],info:{title:"Done",classModifier:"done"}},taskToSearch:""},getters:{todoTasks:function(t){return t.todoTasks},inProgressTasks:function(t){return t.inProgressTasks},testingTasks:function(t){return t.testingTasks},doneTasks:function(t){return t.doneTasks},taskToSearch:function(t){return t.taskToSearch}},mutations:{setSearchRequest:function(t,s){t.taskToSearch=s},updateTasks:function(t,s){"Todo"===s.info.title&&(t.todoTasks.tasks=s.tasks,localStorage.setItem("todoTasks",JSON.stringify(t.todoTasks.tasks))),"In Progress"===s.info.title&&(t.inProgressTasks.tasks=s.tasks,localStorage.setItem("inProgressTasks",JSON.stringify(t.inProgressTasks.tasks))),"Testing"===s.info.title&&(t.testingTasks.tasks=s.tasks,localStorage.setItem("testingTasks",JSON.stringify(t.testingTasks.tasks))),"Done"===s.info.title&&(t.doneTasks.tasks=s.tasks,localStorage.setItem("doneTasks",JSON.stringify(t.doneTasks.tasks)))},addTodoTask:function(t,s){t.todoTasks.tasks.push(s),localStorage.setItem("todoTasks",JSON.stringify(t.todoTasks.tasks))},deleteTask:function(t,s){var e=s.id,a=s.title;"Todo"===a&&(t.todoTasks.tasks=t.todoTasks.tasks.filter((function(t){return t.id!==e})),localStorage.setItem("todoTasks",JSON.stringify(t.todoTasks.tasks))),"In Progress"===a&&(t.inProgressTasks.tasks=t.inProgressTasks.tasks.filter((function(t){return t.id!==e})),localStorage.setItem("inProgressTasks",JSON.stringify(t.inProgressTasks.tasks))),"Testing"===a&&(t.testingTasks.tasks=t.testingTasks.tasks.filter((function(t){return t.id!==e})),localStorage.setItem("testingTasks",JSON.stringify(t.testingTasks.tasks))),"Done"===a&&(t.doneTasks.tasks=t.doneTasks.tasks.filter((function(t){return t.id!==e})),localStorage.setItem("doneTasks",JSON.stringify(t.doneTasks.tasks)))}}};a["a"].use(m["a"]);var X=new m["a"].Store({modules:{sidebar:K,dashboard:Q,tasks:W}}),Y=e("8c4f"),tt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("transition",{attrs:{name:"appear"}},[t.dashboardToggling?t._e():e("div",{staticClass:"dashboard__inner",class:t.dashboardState},[e("Board",{attrs:{filteredTasks:t.filteredTasks(t.todoTasks.tasks),tasksInfo:t.todoTasks}}),e("Board",{attrs:{filteredTasks:t.filteredTasks(t.inProgressTasks.tasks),tasksInfo:t.inProgressTasks}}),e("Board",{attrs:{filteredTasks:t.filteredTasks(t.testingTasks.tasks),tasksInfo:t.testingTasks}}),e("Board",{attrs:{filteredTasks:t.filteredTasks(t.doneTasks.tasks),tasksInfo:t.doneTasks}})],1)]),e("Viewbar")],1)},st=[],et=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"board",class:"board--"+t.tasksInfo.info.classModifier},[e("div",{staticClass:"board__title"},[t._v(t._s(t.tasksInfo.info.title))]),e("draggable",{staticClass:"tasks list-group",attrs:{list:t.tasksInfo.tasks,group:"tasks"},on:{add:t.onUpdate,remove:t.onUpdate}},t._l(t.filteredTasks,(function(s){return e("div",{key:s.id,staticClass:"task list-group-item"},[e("div",{staticClass:"task-data"},[e("div",{staticClass:"task__title"},[t._v(t._s(s.title))]),e("div",{staticClass:"task__text"},[t._v(t._s(s.text))])]),e("div",{staticClass:"task-menu"},[e("a",{staticClass:"task-menu__remove",attrs:{href:"",title:"Remove"},on:{click:function(e){return e.preventDefault(),t.removeTask(s.id,t.tasksInfo.info.title)}}},[e("i",{staticClass:"material-icons"},[t._v("delete")])])]),s.deadline?e("div",{staticClass:"task__info"},[e("div",{staticClass:"task-date",attrs:{title:"Deadline"}},[e("i",{staticClass:"task-date__icon material-icons"},[t._v("access_time")]),e("span",{staticClass:"task-date__data"},[t._v(t._s(t._f("formatDate")(new Date(s.deadline))))])]),new Date>new Date(s.deadline)?e("div",{staticClass:"task-status",attrs:{title:"Expired"}},[e("i",{staticClass:"task-status__icon material-icons red-text"},[t._v("warning")])]):t._e()]):t._e()])})),0)],1)},at=[],nt=e("b76a"),rt=e.n(nt),ot={components:{draggable:rt.a},props:{filteredTasks:Array,tasksInfo:Object},computed:Object(o["a"])({},Object(m["c"])(["todoTasks","inProgressTasks","testingTasks","doneTasks"])),methods:Object(o["a"])(Object(o["a"])({},Object(m["d"])(["updateTasks","deleteTask"])),{},{onUpdate:function(){this.updateTasks(this.todoTasks),this.updateTasks(this.inProgressTasks),this.updateTasks(this.testingTasks),this.updateTasks(this.doneTasks)},removeTask:function(t,s){var e={id:t,title:s};this.deleteTask(e)}})},it=ot,lt=Object(u["a"])(it,et,at,!1,null,null,null),dt=lt.exports,ct=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"viewbar"},[e("li",{staticClass:"viewbar__item",class:{active:"horizontal"===t.dashboardState}},[e("a",{attrs:{href:""},on:{click:function(s){return s.preventDefault(),t.toggleDashboard("horizontal")}}},[e("span"),e("span"),e("span"),e("span")])]),e("li",{staticClass:"viewbar__item",class:{active:"vertical"===t.dashboardState}},[e("a",{attrs:{href:""},on:{click:function(s){return s.preventDefault(),t.toggleDashboard("vertical")}}},[e("span"),e("span"),e("span"),e("span")])])])},ut=[],ft={methods:Object(o["a"])(Object(o["a"])({},Object(m["b"])(["toggleDashboardType"])),{},{toggleDashboard:function(t){this.toggleDashboardType(t)}}),computed:Object(o["a"])({},Object(m["c"])(["dashboardState"]))},bt=ft,kt=Object(u["a"])(bt,ct,ut,!1,null,null,null),ht=kt.exports;e("c975");function mt(t){var s,e=this;return s=t.filter((function(t){if(-1!==t.title.toLowerCase().indexOf(e.taskToSearch.toLowerCase()))return t})),s}var gt,pt,Tt={components:{Board:dt,Viewbar:ht},computed:Object(o["a"])({},Object(m["c"])(["dashboardState","dashboardToggling","taskToSearch","todoTasks","doneTasks","inProgressTasks","testingTasks"])),methods:{filteredTasks:mt}},jt=Tt,vt=Object(u["a"])(jt,tt,st,!1,null,null,null),_t=vt.exports,yt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.dashboardToggling?t._e():e("div",{staticClass:"dashboard__inner",class:t.dashboardState},[e("Board",{attrs:{filteredTasks:t.filteredTasks(t.todoTasks),tasksInfo:t.todoTasks}})],1)},Ct=[],Ot={components:{Board:dt},computed:Object(o["a"])({},Object(m["c"])(["dashboardState","dashboardToggling","taskToSearch","todoTasks"])),methods:{filteredTasks:mt}},St=Ot,wt=Object(u["a"])(St,yt,Ct,!1,null,null,null),xt=wt.exports,Pt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.dashboardToggling?t._e():e("div",{staticClass:"dashboard__inner",class:t.dashboardState},[e("Board",{attrs:{filteredTasks:t.filteredTasks(t.inProgressTasks),tasksInfo:t.inProgressTasks}})],1)},Dt=[],It={components:{Board:dt},computed:Object(o["a"])({},Object(m["c"])(["dashboardState","dashboardToggling","taskToSearch","inProgressTasks"])),methods:{filteredTasks:mt}},zt=It,Et=Object(u["a"])(zt,Pt,Dt,!1,null,null,null),$t=Et.exports,Nt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.dashboardToggling?t._e():e("div",{staticClass:"dashboard__inner",class:t.dashboardState},[e("Board",{attrs:{filteredTasks:t.filteredTasks(t.testingTasks),tasksInfo:t.testingTasks}})],1)},Mt=[],Bt={components:{Board:dt},computed:Object(o["a"])({},Object(m["c"])(["dashboardState","dashboardToggling","taskToSearch","testingTasks"])),methods:{filteredTasks:mt}},Lt=Bt,Jt=Object(u["a"])(Lt,Nt,Mt,!1,null,null,null),qt=Jt.exports,Rt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.dashboardToggling?t._e():e("div",{staticClass:"dashboard__inner",class:t.dashboardState},[e("Board",{attrs:{filteredTasks:t.filteredTasks(t.doneTasks),tasksInfo:t.doneTasks}})],1)},Ut=[],Vt={components:{Board:dt},computed:Object(o["a"])({},Object(m["c"])(["dashboardState","dashboardToggling","taskToSearch","doneTasks"])),methods:{filteredTasks:mt}},At=Vt,Gt=Object(u["a"])(At,Rt,Ut,!1,null,null,null),Ht=Gt.exports,Ft=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"stats"},[e("Stats")],1)},Zt=[],Kt=e("1fca"),Qt={extends:Kt["a"],computed:Object(o["a"])({},Object(m["c"])(["todoTasks","inProgressTasks","testingTasks","doneTasks"])),mounted:function(){this.renderChart({labels:["Todo","In Progress","Testing","Done"],datasets:[{data:[this.todoTasks.length,this.inProgressTasks.length,this.testingTasks.length,this.doneTasks.length],backgroundColor:["#399dff","#ffd74c","#ff8653","#0fd34b"]}]},{responsive:!0,maintainAspectRatio:!1})}},Wt=Qt,Xt=Object(u["a"])(Wt,gt,pt,!1,null,null,null),Yt=Xt.exports,ts={components:{Stats:Yt}},ss=ts,es=Object(u["a"])(ss,Ft,Zt,!1,null,null,null),as=es.exports;a["a"].use(Y["a"]);var ns=new Y["a"]({mode:"history",routes:[{path:"/",component:_t},{path:"/todo",component:xt},{path:"/in-progress",component:$t},{path:"/testing",component:qt},{path:"/done",component:Ht},{path:"/stats",component:as}]});a["a"].filter("formatDate",(function(t){return t.toLocaleDateString("en-EN",{year:"numeric",month:"short",day:"2-digit"})}));e("6885"),e("b107");a["a"].filter("capitalize",(function(t){return t})),a["a"].config.productionTip=!1,new a["a"]({store:X,router:ns,render:function(t){return t(Z)}}).$mount("#app")},"5c0b":function(t,s,e){"use strict";e("9c0c")},"9c0c":function(t,s,e){},b107:function(t,s,e){}});
//# sourceMappingURL=app.dc61f291.js.map