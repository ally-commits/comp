(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/bell.2be15336.svg"},42:function(e,t,a){e.exports=a.p+"static/media/bookmarks.3d240fe4.svg"},44:function(e,t,a){e.exports=a(88)},77:function(e,t,a){},79:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(37),r=a.n(i),c=a(17),l=a.n(c),o=a(5),u=a(6),h=a(8),d=a(7),m=a(9),p=a(19),v=a(11),b=a(91),g=a(92),E=a(93),f=a(29),y=(a(89),a(13)),k=a.n(y),S=a(4),N=a.n(S),O=a(18),j=a(40),D=a(23),_={subscribed:!1,token:"",types:["IT_MANAGER","CODING","GAMING","ICE_BREAKER","WEB_DESIGNING","TREASURE_HUNT","VLOG","TECH_TALK","MEME","VIDEO_EDITING","MAD_AD","IT_QUIZ","ICE_BREAKER"],subscribed_types:[]},C={data:[],types:["IT_MANAGER","CODING","GAMING","ICE_BREAKER","WEB_DESIGNING","TREASURE_HUNT","VLOG","TECH_TALK","MEME","VIDEO_EDITING","MAD_AD","IT_QUIZ"]},x=Object(O.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(D.a)({},e,{subscribed:!0,token:t.payload});case"SET_TYPES":return Object(D.a)({},e,{subscribed_types:t.payload});default:return e}},eventDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EVENT_DETAIL":return Object(D.a)({},e,{data:t.payload});default:return e}}}),w=[j.a],A=Object(O.e)(x,{},Object(O.d)(O.a.apply(void 0,w),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__({}):function(e){return e})),R=(a(77),a(79),""),I=function(e){return{type:"SET_TYPES",payload:e}},T=function(e){return{type:"SET_TOKEN",payload:e}},M=function(e){return{type:"SET_EVENT_DETAIL",payload:e}},B=(a(81),a(83),function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"flex-center-group"},s.a.createElement("h1",null,"404 Page Not Found")))}),U=a(2);var L=function(){return s.a.createElement("div",{className:"loading-group"},s.a.createElement("div",{className:"loading-content"},s.a.createElement("div",{className:"sk-cube-grid"},s.a.createElement("div",{className:"sk-cube sk-cube1"}),s.a.createElement("div",{className:"sk-cube sk-cube2"}),s.a.createElement("div",{className:"sk-cube sk-cube3"}),s.a.createElement("div",{className:"sk-cube sk-cube4"}),s.a.createElement("div",{className:"sk-cube sk-cube5"}),s.a.createElement("div",{className:"sk-cube sk-cube6"}),s.a.createElement("div",{className:"sk-cube sk-cube7"}),s.a.createElement("div",{className:"sk-cube sk-cube8"}),s.a.createElement("div",{className:"sk-cube sk-cube9"}))),s.a.createElement("div",{className:"loading-blur"}))},W=a(41),G=a.n(W),P=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={subscribed:!1,loading:!1},e.showPermission=e.showPermission.bind(Object(U.a)(Object(U.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.setState({user:this.props.user}),this.props.user.subscribed&&this.props.history.push("/events")}},{key:"showPermission",value:function(e){var t=this;this.setState({loading:!0}),Se.usePublicVapidKey("BMRMW2uN6M8ZR7WdFHl-N-3u7IU-X2t-ZvgFuDiMC6DrpD2eaL0TQyg6hGiTg9TWuMVGBViFcahKuISZ2ZjHRUU"),Se.requestPermission().then(function(){return Se.getToken().then(function(e){e?(t.setState({subscribed:!0}),t.setState({loading:!1}),t.props.setToken(e),localStorage.setItem("token",JSON.stringify(e)),t.state.loading||t.props.history.push("/subscribe")):t.setState({loading:!1})}).catch(function(e){t.setState({loading:!1}),N.a.error({title:"Error:",message:"Some network issue didnt get your token Retry"})})}).catch(function(e){t.setState({loading:!1}),N.a.error({title:"Error:",message:"Some network issue didnt get your token Retry"})})}},{key:"nothing",value:function(e){N.a.error({title:"Error",message:"You didn't gave permission to push message"})}},{key:"render",value:function(){var e=!0===this.state.subscribed?this.nothing:this.showPermission;return s.a.createElement("div",null,this.state.loading&&s.a.createElement(L,null),s.a.createElement("div",{className:"starter_container"},s.a.createElement("h1",{className:"starter_head"},"Welcome to Composite updates?"),s.a.createElement("h3",{className:"starter_p"},"Subscribe to get notification"),s.a.createElement("div",{className:"content_button btn",onClick:e},s.a.createElement("img",{alt:"bell",src:G.a,className:"img_bell"}),s.a.createElement("h1",{className:"head_button"},"Subscribe"))))}}]),t}(n.Component),V={setToken:T},q=Object(v.b)(function(e){return{user:e.user}},V)(P),K=a(3),F=a.n(K),H=function(e){var t=e.value,a=e.onChange;return s.a.createElement("li",{className:"list_item",key:t},s.a.createElement("span",{className:"list_item_icon"}),s.a.createElement("p",{className:"list_item_head"},t),s.a.createElement("div",{className:"wrap"},s.a.createElement("input",{type:"checkbox",name:t,id:t,className:"input_check",onChange:a}),s.a.createElement("label",{className:"slider-v1"})))},Z=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={types:[],subscribed_types:[],loading:!1},e.onChangeEvent=e.onChangeEvent.bind(Object(U.a)(Object(U.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=Object(p.a)(l.a.mark(function e(){var t=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.user.subscribed||this.props.history.push("/"),e.next=3,this.setState({types:this.props.user.types,subscribed_types:this.props.user.subscribed_types});case 3:setTimeout(function(){0!==t.state.subscribed_types.length&&t.state.subscribed_types.map(function(e){return document.getElementById(e).checked=!0,0})},100);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(e){this.setState({subscribed_types:e.user.subscribed_types,types:e.user.types})}},{key:"onChangeEvent",value:function(e){var t=this;e.persist();var a=this.props.user.token,n=e.target.name,s=this.state.subscribed_types;this.setState({loading:!0}),e.target.checked?k.a.post("".concat(R,"/subscribe"),{type:n,token:a}).then(function(e){s.push(n),t.setState({subscribed_types:s}),t.props.setTypes(s),localStorage.setItem("subscribed",s),t.setState({loading:!1}),N.a.success({title:"Registered",message:"Ull get notification ".concat(n)})}).catch(function(e){document.getElementById(n).checked=!1,t.setState({loading:!1}),N.a.error({title:"Error",message:"Cannot subscribe Retry"})}):k.a.post("".concat(R,"/unsubscribe"),{type:n,token:a}).then(function(a){console.log("done"),s=s.filter(function(t){return e.target.name!==t}),t.setState({subscribed_types:s}),t.props.setTypes(s),localStorage.setItem("subscribed",s),t.setState({loading:!1}),N.a.success({title:"Revoked",message:"Registration cancelled you wont\t get any notification"})}).catch(function(e){console.log(e),document.getElementById(n).checked=!0,t.setState({loading:!1}),N.a.error({title:"Error",message:"Cannot revoke Retry"})})}},{key:"render",value:function(){var e=this,t=0!==this.state.types.length?this.state.types.map(function(t){return s.a.createElement(H,{value:t,onChange:e.onChangeEvent,key:t})}):s.a.createElement("h1",null,"Loading");return s.a.createElement("div",null,this.state.loading&&s.a.createElement(L,null),s.a.createElement("ul",{className:"list_items"},t))}}]),t}(n.Component);Z.propType={user:F.a.object.isRequired,setTypes:F.a.func.isRequired};var z={setTypes:I},X=Object(v.b)(function(e){return{user:e.user}},z)(Z),Y=function(e){var t=e.value.map(function(e){if(e.status)return s.a.createElement("li",{className:"Slider-list-grp-content",key:"".concat(e.name)},e.name)});return s.a.createElement("div",{className:"Slider-list-grp flex-h"},t)},J=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={val:0,jsx:""},e.onSwitch=e.onSwitch.bind(Object(U.a)(Object(U.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.value.length;setInterval(function(){var a=e.state.val+1;a>=t&&(a=0),e.setState({val:a})},3e3);var a=-1,n=this.props.value.map(function(t){return a+=1,s.a.createElement("div",{className:"Swicth-grp flex-h",id:a,onClick:e.onSwitch,key:a},s.a.createElement("div",{className:"Switch-grp-content",id:a,onClick:e.onSwitch}))});this.setState({jsx:n})}},{key:"componentWillReceiveProps",value:function(e){var t=this;if(e){var a=-1,n=e.value.map(function(e){return a+=1,s.a.createElement("div",{className:"Switch-grp flex-h",id:a,onClick:t.onSwitch,key:a},s.a.createElement("div",{className:"Switch-grp-content",id:a,onClick:t.onSwitch}))});this.setState({jsx:n})}}},{key:"onSwitch",value:function(e){var t=e.target.id;(t=parseInt(t))>=0&&t<this.props.value.length&&this.setState({val:t})}},{key:"Slider",value:function(e){}},{key:"render",value:function(){return s.a.createElement("div",{className:"Slider"},this.props.value[this.state.val],s.a.createElement("div",{className:"Switch flex-h"},this.state.jsx))}}]),t}(n.Component);J.proptypes={value:F.a.array.isrequired};var Q=J,$=function(e){var t=e.value.map(function(e){return s.a.createElement("div",{className:"Slider-content flex-v"},s.a.createElement("h1",{className:"Slider-content-head"},e.title),s.a.createElement("h2",{className:"Slider-content-desc"},e.desc),s.a.createElement(Y,{value:e.people}))});return s.a.createElement("div",null,s.a.createElement(Q,{value:t}))};$.proptype={value:F.a.array.isRequired};var ee=$,te=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={events:null,loading:!1},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.setState({events:this.props.eventDetail.data}),null===this.state.events?this.setState({loading:!0}):this.setState({loading:!1})}},{key:"componentWillReceiveProps",value:function(e){e&&this.setState({events:e.eventDetail.data}),null===this.state.events?this.setState({loading:!0}):this.setState({loading:!1})}},{key:"render",value:function(){var e=this.state.events,t=null!==this.state.events?s.a.createElement("div",null,s.a.createElement(ee,{value:e})):s.a.createElement("div",null,s.a.createElement(L,null));return s.a.createElement("div",null,this.state.loading&&s.a.createElement(L,null),t)}}]),t}(n.Component),ae=Object(v.b)(function(e){return{eventDetail:e.eventDetail}})(te),ne=a(20),se=a(16),ie=a.n(se),re=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={username:"",password:""},e.onChange=e.onChange.bind(Object(U.a)(Object(U.a)(e))),e.onSubmit=e.onSubmit.bind(Object(U.a)(Object(U.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){if(localStorage.admin&&localStorage.auth){var e=ie()(localStorage.auth),t=Date.now()/1e3;e.exp>=t&&this.props.history.push("/admin/dashboard")}}},{key:"onChange",value:function(e){this.setState(Object(ne.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),""===this.state.username||""===this.state.password?N.a.info({title:"Error",message:"Fileds are empty"}):k.a.post("".concat(R,"/admin/login"),{username:this.state.username,password:this.state.password}).then(function(e){if(localStorage.admin){var a=localStorage.admin;a=(a=(a=a.split(".")).filter(function(e){return""!==e}))[0],e.data.success&&e.data.auth===a&&(localStorage.setItem("auth",e.data.token),N.a.success({title:"LOGGED IN",message:"idoit start to edit now"}),t.props.history.push("/admin/dashboard"))}else N.a.error({title:"SOORY!!",message:"Sry buddy your not Authorised to access!.......Ask admin about this error"}),t.props.history.push("/")}).catch(function(e){if(e){var t=e.response.data.data||"Server Error:";N.a.warning({title:"ERROR",message:t})}else N.a.warning({title:"SERVER",message:"Check the server"})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"form-container"},s.a.createElement("div",{className:"form-content"},s.a.createElement("h1",{className:"form-head"},"Admin Login"),s.a.createElement("form",{onSubmit:this.onSubmit,className:"form-data"},s.a.createElement("input",{name:"username",type:"text",placeholder:"Username",value:this.state.username,onChange:this.onChange,className:"input"}),s.a.createElement("input",{name:"password",type:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange,className:"input"}),s.a.createElement("input",{type:"submit",value:"submit",className:"form-submit btn"}))))}}]),t}(n.Component),ce=a(42),le=a.n(ce),oe=function(e){var t=e.types,a=e.changeCurrent;return t.map(function(e){return s.a.createElement("div",{className:"Admin-active-div flex-h",key:Math.random()},s.a.createElement("button",{className:"Admin-active-btn",onClick:a,name:e.title,key:Math.random()},e.title),s.a.createElement("span",{className:"Admin-active-icon"},"  "))})};oe.porpTypes={types:F.a.array.ieRequired,click:F.a.func.isRequired};var ue=oe,he=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={current:"",eventDetail:{data:null}},e._redirect=e._redirect.bind(Object(U.a)(Object(U.a)(e))),e._logout=e._logout.bind(Object(U.a)(Object(U.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){if(localStorage.admin&&localStorage.auth){var e=ie()(localStorage.auth),t=Date.now()/1e3;e.exp<t?this.props.history.push("/admin/login"):this.setState({eventDetail:this.props.eventDetail})}else this.props.history.push("/admin/login")}},{key:"componentWillReceiveProps",value:function(e){e&&this.setState({eventDetail:e.eventDetail})}},{key:"_logout",value:function(){localStorage.setItem("auth",""),this.props.history.push("/events")}},{key:"_redirect",value:function(e){"view"===e.target.id?this.props.history.push("/admin/dashboard/view-event"):"create"===e.target.id?this.props.history.push("/admin/dashboard/create-event"):"update"===e.target.id?this.props.history.push("/admin/dashboard/update-event"):"delete"===e.target.id?this.props.history.push("/admin/dashboard/delete-event"):this.porps.hisory.push("/admin/dashboard")}},{key:"render",value:function(){return s.a.createElement("div",{className:"Admin flex-h"},s.a.createElement("div",{className:"Admin-active-grp"},s.a.createElement("h1",{className:"Admin-active-head"},"Events Active"),this.state.eventDetail.data?s.a.createElement(ue,{types:this.state.eventDetail.data,changeCurrent:this.changeCurrent}):s.a.createElement("h1",null,"Loading")),s.a.createElement("div",{className:"Event flex-v"},s.a.createElement("div",{className:"Event-simple-block flex-h"},s.a.createElement("h1",{className:"Event-simple-block-head"},"Admin Dashboard"),s.a.createElement("img",{src:le.a,alt:"icon",className:"Event-simple-block-img"}),s.a.createElement("button",{className:"Event-simple-block-btn btn",onClick:this._logout},"Logout")),s.a.createElement("div",{className:"flex-h"},s.a.createElement("button",{className:"btn Event-btn-control",onClick:this._redirect,id:"view"},"View"),s.a.createElement("button",{className:"btn Event-btn-control",onClick:this._redirect,id:"create"},"Create"),s.a.createElement("button",{className:"btn Event-btn-control",onClick:this._redirect,id:"update"},"Update"),s.a.createElement("button",{className:"btn Event-btn-control",onClick:this._redirect,id:"delete"},"Delete")),s.a.createElement("div",null)))}}]),t}(n.Component),de=Object(v.b)(function(e){return{eventDetail:e.eventDetail}})(he),me=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={current:!1,filter:!0},e._goBack=e._goBack.bind(Object(U.a)(Object(U.a)(e))),e._changeStatus=e._changeStatus.bind(Object(U.a)(Object(U.a)(e))),e._onChange=e._onChange.bind(Object(U.a)(Object(U.a)(e))),e._changeCurrent=e._changeCurrent.bind(Object(U.a)(Object(U.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){if(localStorage.admin&&localStorage.auth){var e=ie()(localStorage.auth),t=Date.now()/1e3;e.exp<t?this.props.history.push("/admin/login"):this.setState({eventDetail:this.props.eventDetail})}else this.props.history.push("/admin/login");if(0!==this.props.eventDetail.data.length){var a=this.props.eventDetail;this.setState({current:a.data[0].title,currentDetail:a.data[0],round:a.data[0].round})}}},{key:"_changeCurrent",value:function(e){this.setState({current:e.target.value});var t=this.state.eventDetail.data.filter(function(t){return t.title===e.target.value});this.setState({currentDetail:t[0]})}},{key:"_changeStatus",value:function(e){"true"===e.target.value?this.setState({filter:!0}):this.setState({filter:!1})}},{key:"componentWillReceiveProps",value:function(e){if(e&&this.setState({eventDetail:e.eventDetail}),0!==e.eventDetail.data.length){var t=e.eventDetail;this.setState({current:t.data[0].title,currentDetail:t.data[0],round:t.data[0].round})}}},{key:"_onChange",value:function(e){this.setState({current:e.target.value})}},{key:"_goBack",value:function(e){this.props.history.push("/admin/dashboard")}},{key:"render",value:function(){var e="";this.state.eventDetail.data&&(e=this.state.eventDetail.data.map(function(e){return s.a.createElement("option",{key:Math.random(),value:e.title},e.title," ")}));var t="";return this.state.currentDetail&&(t=this.state.filter?this.state.currentDetail.people.map(function(e){if(e.status)return s.a.createElement("div",{className:"List-box flex-h"},s.a.createElement("h1",{className:"List-box-head-1"},"Name: ",e.name),s.a.createElement("h2",{className:"List-box-head-2"},"Round: ",e.round))}):this.state.currentDetail.people.map(function(e){return s.a.createElement("div",{className:"List-box flex-h"},s.a.createElement("h1",{className:"List-box-head-1"},"Name: ",e.name),s.a.createElement("h2",{className:"List-box-head-2"},"Round: ",e.round))})),s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-back",onClick:this._goBack},"Back"),s.a.createElement("div",{className:"Shade flex-h"},s.a.createElement("select",{className:"mg-2 input-small",onChange:this._changeCurrent,value:this.state.current},e),s.a.createElement("select",{onChange:this._changeStatus,className:"mg-2 input-small",value:this.state.filter},s.a.createElement("option",{value:"false"},"All"),s.a.createElement("option",{value:"true"},"Only selected"))),s.a.createElement("div",{className:"List flex-h"},t))}}]),t}(n.Component);me.proptypes={eventDetail:F.a.object.isRequired};var pe=Object(v.b)(function(e){return{eventDetail:e.eventDetail}})(me),ve=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={title:"",desc:"",people:[],value:""},e.onChange=e.onChange.bind(Object(U.a)(Object(U.a)(e))),e.onSubmit=e.onSubmit.bind(Object(U.a)(Object(U.a)(e))),e.onChangeArray=e.onChangeArray.bind(Object(U.a)(Object(U.a)(e))),e.removeChild=e.removeChild.bind(Object(U.a)(Object(U.a)(e))),e._goBack=e._goBack.bind(Object(U.a)(Object(U.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){if(localStorage.admin&&localStorage.auth){var e=ie()(localStorage.auth),t=Date.now()/1e3;e.exp<t&&this.props.history.push("/admin/login")}else this.props.history.push("/admin/login")}},{key:"onChange",value:function(e){this.setState(Object(ne.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),""===this.state.title||""===this.state.desc?N.a.error({title:"Error",message:"Fields are empty"}):k.a.post("".concat(R,"/admin/create"),{title:this.state.title,desc:this.state.desc,people:this.state.people,round:1},{headers:{Authorization:localStorage.auth}}).then(function(e){N.a.success({title:"Saved",message:e.data.success}),t.setState({title:"",desc:"",people:[],value:""}),Ne()}).catch(function(e){return N.a.error({title:"Error",message:e.response.data})})}},{key:"onChangeArray",value:function(e){e.preventDefault();var t=this.state.value;if(""===t)N.a.error({title:"Empty Field",message:"Peope field is empty"});else{var a=this.state.people;a.push(t),this.setState({people:a,value:""})}}},{key:"removeChild",value:function(e){var t=this.state.people;t=t.filter(function(t){return t!==e.target.id}),this.setState({people:t})}},{key:"_goBack",value:function(e){this.props.history.push("/admin/dashboard")}},{key:"render",value:function(){var e=this,t=this.state.people.map(function(t){return s.a.createElement("div",{className:"Add-content-2-list-grp flex-h",key:Math.random()},s.a.createElement("div",{className:"Add-content-2-list-grp-one flex-h",key:Math.random()},s.a.createElement("h1",{className:"list-content"},t)),s.a.createElement("button",{id:t,className:"btn btn-two",key:Math.random(),onClick:e.removeChild},"Del"))}),a="".concat(this.state.title),n="".concat(this.state.desc);return s.a.createElement("div",{className:"Add flex-h "},s.a.createElement("button",{className:"btn-back btn",onClick:this._goBack},"Back"),s.a.createElement("div",{className:"Add-content-1 flex-v"},s.a.createElement("h1",{className:"Add-content-1-head"},"Add Event"),s.a.createElement("form",{onSubmit:this.onSubmit,className:"Add-content-1-form flex-v"},s.a.createElement("input",{type:"text",name:"title",value:this.state.title,className:"input input-edit",onChange:this.onChange,placeholder:"Title"}),s.a.createElement("input",{type:"text",name:"desc",value:this.state.desc,className:"input input-edit",onChange:this.onChange,placeholder:"Description"}),s.a.createElement("div",{className:"input-grp"},s.a.createElement("input",{type:"text",name:"value",value:this.state.value,className:"input input-one",onChange:this.onChange,placeholder:"Add value to array"}),s.a.createElement("button",{className:"btn btn-two",onClick:this.onChangeArray},"Add")),s.a.createElement("input",{type:"submit",vlaue:"submit",className:"btn btn-submit"}))),s.a.createElement("div",{className:"Add-content-2 flex-v"},s.a.createElement("h1",{className:"Add-content-1-head"},"Event Detail"),s.a.createElement("div",{className:"spacer"}),s.a.createElement("div",{className:"Add-content-2-head flex-h"},s.a.createElement("span",{className:"Add-content-2-head-sub-title"},"Title"),s.a.createElement("span",{className:"Add-content-2-head-sub-content"},a)),s.a.createElement("div",{className:"Add-content-2-head flex-h"},s.a.createElement("span",{className:"Add-content-2-head-sub-title"},"Description"),s.a.createElement("span",{className:"Add-content-2-head-sub-content"},n)),s.a.createElement("div",{className:"Add-content-2-list flex-h"},t)))}}]),t}(n.Component),be=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={current:"",eventDetail:null,currentDetail:void 0,value:{name:""}},e.changeCurrent=e.changeCurrent.bind(Object(U.a)(Object(U.a)(e))),e.changeCurrentDetail=e.changeCurrentDetail.bind(Object(U.a)(Object(U.a)(e))),e._removeChild=e._removeChild.bind(Object(U.a)(Object(U.a)(e))),e._changeRound=e._changeRound.bind(Object(U.a)(Object(U.a)(e))),e._clearInput=e._clearInput.bind(Object(U.a)(Object(U.a)(e))),e._addChild=e._addChild.bind(Object(U.a)(Object(U.a)(e))),e.addValue=e.addValue.bind(Object(U.a)(Object(U.a)(e))),e._onSubmit=e._onSubmit.bind(Object(U.a)(Object(U.a)(e))),e._goBack=e._goBack.bind(Object(U.a)(Object(U.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){if(localStorage.admin&&localStorage.auth){var e=ie()(localStorage.auth),t=Date.now()/1e3;e.exp<t?this.props.history.push("/admin/login"):this.setState({eventDetail:this.props.eventDetail})}else this.props.history.push("/admin/login");if(0!==this.props.eventDetail.data.length){var a=this.props.eventDetail;this.setState({current:a.data[0].title,currentDetail:a.data[0],round:a.data[0].round})}}},{key:"componentWillReceiveProps",value:function(e){if(e&&this.setState({eventDetail:e.eventDetail}),0!==e.eventDetail.data.length){var t=e.eventDetail;console.log(t),this.setState({current:t.data[0].title,currentDetail:t.data[0],round:t.data[0].round})}}},{key:"changeCurrent",value:function(e){this.setState({current:e.target.value});var t=this.state.eventDetail.data.filter(function(t){return t.title===e.target.value});this.setState({currentDetail:t[0]})}},{key:"changeCurrentDetail",value:function(e){var t=this.state.currentDetail;t[e.target.name]=e.target.value,this.setState({currentDetail:t})}},{key:"addValue",value:function(e){var t=this.state.value;t.name=e.target.value,t.name=e.target.value,this.setState({value:t})}},{key:"_removeChild",value:function(e){var t=this.state.currentDetail;t.people=this.state.currentDetail.people.filter(function(t){return t.name===e.target.id?(t.status=!1,t):t}),this.setState({currentDetail:t})}},{key:"_addChild",value:function(e){var t=this.state.currentDetail;if(""===this.state.value.name)N.a.error({title:"Empty",message:"List field is empty"});else{var a=this.state.value;a.status=!0,a.round=this.state.round,this.setState({value:a}),t.people.push(this.state.value),this.setState({currentDetail:t}),this._clearInput()}}},{key:"_clearInput",value:function(){this.setState({value:{name:"",status:!1}})}},{key:"_onSubmit",value:function(){var e=Object(p.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=this.state.currentDetail).people=a.people.filter(function(e){return!0===e.status?e.round=a.round:e}),e.next=5,this.setState({currentDetail:a});case 5:k.a.post("".concat(R,"/admin/update"),this.state.currentDetail,{headers:{Authorization:localStorage.auth}}).then(function(e){N.a.success({title:"DONE!.",message:e.data.data})}).catch(function(e){N.a.error({title:"Error!",message:e.response.data})});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"_goBack",value:function(e){this.props.history.push("/admin/dashboard")}},{key:"_changeRound",value:function(e){if(""!==e.target.value){var t=this.state.currentDetail;t.round=parseInt(t.round),t.round=parseInt(e.target.value),this.setState({currentDetail:t})}else{var a=this.state.currentDetail;a.round="",this.setState({currentDetail:a})}}},{key:"render",value:function(){var e=this,t="";this.state.eventDetail.data&&(t=this.state.eventDetail.data.map(function(e){return s.a.createElement("option",{key:Math.random(),value:e.title},e.title," ")}));var a=this.state.currentDetail?s.a.createElement("div",{className:"Update flex-h"},s.a.createElement("div",{className:"Update-one flex-v"},s.a.createElement("h1",{className:"Update-one-head"},"Round Number"),s.a.createElement("input",{type:"number",value:this.state.currentDetail.round,name:"round",className:"input",onChange:this._changeRound}),s.a.createElement("h1",{className:"Update-one-head"},"Title"),s.a.createElement("input",{type:"text",value:this.state.currentDetail.title,name:"title",className:"input",onChange:this.changeCurrentDetail}),s.a.createElement("h1",{className:"Update-one-head"},"Description"),s.a.createElement("input",{type:"text",value:this.state.currentDetail.desc,name:"desc",className:"input",onChange:this.changeCurrentDetail}),s.a.createElement("div",{className:"input-grp"},s.a.createElement("input",{type:"text",name:"value",value:this.state.value.name,className:"input input-one",onChange:this.addValue,placeholder:"Add value to array"}),s.a.createElement("button",{className:"btn btn-two",onClick:this._addChild,key:Math.random()},"Add")),this.state.currentDetail&&s.a.createElement("button",{className:"btn btn-submit",onClick:this._onSubmit},"Update")),s.a.createElement("div",{className:"Update-two flex-h"},this.state.currentDetail.people.map(function(t){return t.status?s.a.createElement("div",{className:"Update-two-list-grp flex-h",key:Math.random()},s.a.createElement("div",{className:"Update-two-list-grp-one",key:Math.random()},s.a.createElement("h1",{className:"list-content"},t.name)),s.a.createElement("button",{className:"btn btn-two",onClick:e._removeChild,id:t.name},"Remove")):s.a.createElement("div",{key:Math.random()})}))):s.a.createElement(L,null);return s.a.createElement("div",null,s.a.createElement("button",{className:"btn-back btn",onClick:this._goBack},"Back"),s.a.createElement("div",{className:"Shade flex-h"},s.a.createElement("select",{className:"input",onChange:this.changeCurrent,value:this.state.current},t)),a)}}]),t}(n.Component);be.proptypes={eventDetail:F.a.object.isRequired};var ge=Object(v.b)(function(e){return{eventDetail:e.eventDetail}})(be),Ee=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={current:""},e.onChange=e.onChange.bind(Object(U.a)(Object(U.a)(e))),e.onSubmit=e.onSubmit.bind(Object(U.a)(Object(U.a)(e))),e._goBack=e._goBack.bind(Object(U.a)(Object(U.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){if(localStorage.admin&&localStorage.auth){var e=ie()(localStorage.auth),t=Date.now()/1e3;e.exp<t?this.props.history.push("/admin/login"):this.setState({eventDetail:this.props.eventDetail})}else this.props.history.push("/admin/login");0!==this.props.eventDetail.data.length&&this.setState({current:this.props.eventDetail.data[0].title})}},{key:"componentWillReceiveProps",value:function(e){e&&this.setState({eventDetail:e.eventDetail}),0!==e.eventDetail.data.length&&this.setState({current:e.eventDetail.data[0].title})}},{key:"onChange",value:function(e){this.setState({current:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),k.a.post("".concat(R,"/admin/delete"),{type:this.state.current},{headers:{Authorization:localStorage.auth}}).then(function(e){N.a.success({title:"deleted",message:e.data.success}),Ne()}).catch(function(e){return N.a.error({title:"error",message:e.response.data})})}},{key:"_goBack",value:function(e){this.props.history.push("/admin/dashboard")}},{key:"render",value:function(){var e="";return this.state.eventDetail.data&&(e=this.state.eventDetail.data.map(function(e){return s.a.createElement("option",{key:Math.random(),value:e.title},e.title," ")})),s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-back",onClick:this._goBack},"Back"),s.a.createElement("div",{className:"Shade flex-h"},s.a.createElement("select",{className:"input",onChange:this.onChange,value:this.state.current},e)),s.a.createElement("div",{className:"flex-h"},this.state.current&&s.a.createElement("button",{className:"btn btn-submit mg-2",onClick:this.onSubmit},"Delete")))}}]),t}(n.Component);Ee.proptypes={eventDetail:F.a.object.isRequired};var fe=Object(v.b)(function(e){return{eventDetail:e.eventDetail}})(Ee);if(localStorage.subscribed){var ye=localStorage.subscribed;ye=ye.split(","),A.dispatch(I(ye))}if(localStorage.token){var ke=localStorage.token;ke=JSON.parse(ke),A.dispatch(T(ke))}f.initializeApp({apiKey:"AIzaSyAF36tTPv2e3s44oebncjDv5gtwcQhv09o",authDomain:"lacker-89773.firebaseapp.com",databaseURL:"https://lacker-89773.firebaseio.com",projectId:"lacker-89773",storageBucket:"lacker-89773.appspot.com",messagingSenderId:"984496280842"});var Se=f.messaging();function Ne(){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(p.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(R,"/eventupdates")).then(function(e){A.dispatch(M(e.data.value))}).catch(function(e){N.a.error({title:"RETRY",message:"server did'nt send any data"})});case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}Ne(),Se.onMessage(function(e){Ne(),N.a.info({title:e.title,message:e.body})});var je=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement(v.a,{store:A},s.a.createElement("div",null,s.a.createElement(b.a,null,s.a.createElement("div",null,s.a.createElement(g.a,null,s.a.createElement(E.a,{exact:!0,path:"/",component:q}),s.a.createElement(E.a,{exact:!0,path:"/subscribe",component:X}),s.a.createElement(E.a,{exact:!0,path:"/events",component:ae}),s.a.createElement(E.a,{exact:!0,path:"/admin/login",component:re}),s.a.createElement(E.a,{exact:!0,path:"/admin/dashboard",component:de}),s.a.createElement(E.a,{exact:!0,path:"/admin/dashboard/view-event",component:pe}),s.a.createElement(E.a,{exact:!0,path:"/admin/dashboard/delete-event",component:fe}),s.a.createElement(E.a,{exact:!0,path:"/admin/dashboard/update-event",component:ge}),s.a.createElement(E.a,{exact:!0,path:"/admin/dashboard/create-event",component:ve}),s.a.createElement(E.a,{path:"*",component:B}))))))}}]),t}(n.Component);r.a.render(s.a.createElement(je,null),document.getElementById("root"))}},[[44,2,1]]]);
//# sourceMappingURL=main.2996d9a1.chunk.js.map