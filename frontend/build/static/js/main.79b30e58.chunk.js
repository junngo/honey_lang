(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){e.exports=n.p+"static/media/android_download.db9b21a1.png"},108:function(e,t,n){e.exports=n.p+"static/media/ios_download.52f73669.png"},109:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),c=n.n(o),i=n(2),s=n(29),l=n(52),u=n(15),A=n(41),m=n(11),p=(n(53),n(27)),f=n.n(p),d=n(58),h=n(8),g=n(30),E=n.n(g),v="SAVE_TOKEN",b="LOGOUT",k="SET_USER_LIST",L="FOLLOW_USER",j="UNFOLLOW_USER",O="SET_EXPLORE",y="SET_IMAGE_LIST";function T(){return{type:b}}function N(e){return{type:v,token:e}}function x(e){return{type:k,userList:e}}function S(e){return{type:L,userId:e}}function C(e){return{type:j,userId:e}}function w(e){return{type:y,imageList:e}}function P(e,t){return fetch("/users/search/?username=".concat(t),{headers:{Authorization:"JWT ".concat(e),"Content-Type":"application/json"}}).then((function(e){return 401===e.status?401:e.json()})).then((function(e){return e}))}function W(e,t){return fetch("/images/search/?hashtags=".concat(t),{headers:{Authorization:"JWT ".concat(e),"Content-Type":"application/json"}}).then((function(e){return 401===e.status?401:e.json()})).then((function(e){return e}))}var I={isLoggedIn:!!localStorage.getItem("jwt"),token:localStorage.getItem("jwt")};var z={facebookLogin:function(e){return function(t){fetch("/users/login/facebook/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_token:e})}).then((function(e){return e.json()})).then((function(e){e.token&&t(N(e.token))})).catch((function(e){return console.log(e)}))}},usernameLogin:function(e,t){return function(n){fetch("/rest-auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){e.token&&n(N(e.token))})).catch((function(e){return console.log(e)}))}},createAccount:function(e,t,n){return function(a){fetch("/rest-auth/registration/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password1:t,password2:t,email:n})}).then((function(e){return e.json()})).then((function(e){e.token&&a(N(e.token))})).catch((function(e){return console.log(e)}))}},logout:T,getPhotoLikes:function(e){return function(t,n){var a=n().user.token;fetch("/images/".concat(e,"/likes/"),{headers:{Authorization:"JWT ".concat(a)}}).then((function(e){return 401===e.status&&t(T()),e.json()})).then((function(e){t(x(e))}))}},followUser:function(e){return function(t,n){t(S(e));var a=n().user.token;fetch("/users/".concat(e,"/follow/"),{method:"POST",headers:{Authorization:"JWT ".concat(a),"Content-Type":"application/json"}}).then((function(n){401===n.status?t(T()):n.ok||t(C(e))}))}},unfollowUser:function(e){return function(t,n){t(C(e));var a=n().user.token;fetch("/users/".concat(e,"/unfollow/"),{method:"POST",headers:{Authorization:"JWT ".concat(a),"Content-Type":"application/json"}}).then((function(n){401===n.status?t(T()):n.ok||t(S(e))}))}},getExplore:function(){return function(e,t){var n=t().user.token;fetch("/users/explore/",{headers:{Authorization:"JWT ".concat(n),"Content-Type":"application/json"}}).then((function(t){return 401===t.status&&e(T()),t.json()})).then((function(t){return e({type:O,userList:t})}))}},searchByTerm:function(e){return function(t,n){var a,r,o,c;return E.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return a=n(),r=a.user.token,i.next=3,E.a.awrap(P(r,e));case 3:return o=i.sent,i.next=6,E.a.awrap(W(r,e));case 6:c=i.sent,401!==o&&401!==c||t(T()),t(x(o)),t(w(c));case 10:case"end":return i.stop()}}))}}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return function(e,t){var n=t.token;return localStorage.setItem("jwt",n),Object(h.a)({},e,{isLoggedIn:!0,token:n})}(e,t);case b:return localStorage.removeItem("jwt"),{isLoggedIn:!1};case k:return function(e,t){var n=t.userList;return Object(h.a)({},e,{userList:n})}(e,t);case L:return function(e,t){var n=t.userId,a=e.userList.map((function(e){return e.id===n?Object(h.a)({},e,{following:!0}):e}));return Object(h.a)({},e,{userList:a})}(e,t);case j:return function(e,t){var n=t.userId,a=e.userList.map((function(e){return e.id===n?Object(h.a)({},e,{following:!1}):e}));return Object(h.a)({},e,{userList:a})}(e,t);case O:return function(e,t){var n=t.userList;return Object(h.a)({},e,{userList:n})}(e,t);case y:return function(e,t){var n=t.imageList;return Object(h.a)({},e,{imageList:n})}(e,t);default:return e}},B="SET_FEED",Q="LIKE_PHOTO",D="UNLIKE_PHOTO",F="ADD_COMMENT";function U(e){return{type:Q,photoId:e}}function R(e){return{type:D,photoId:e}}var Z={};var V={getFeed:function(){return function(e,t){var n=t().user.token;fetch("/images/images/",{headers:{Authorization:"JWT ".concat(n)}}).then((function(t){return 401===t.status&&e(z.logout()),t.json()})).then((function(t){return e({type:B,feed:t})}))}},likePhoto:function(e){return function(t,n){t(U(e));var a=n().user.token;fetch("/images/".concat(e,"/likes/"),{method:"POST",headers:{Authorization:"JWT ".concat(a)}}).then((function(n){401===n.status?t(z.logout()):n.ok||t(R(e))}))}},unlikePhoto:function(e){return function(t,n){t(R(e));var a=n().user.token;fetch("/images/".concat(e,"/unlikes/"),{method:"DELETE",headers:{Authorization:"JWT ".concat(a)}}).then((function(n){401===n.status?t(z.logout()):n.ok||t(U(e))}))}},commentPhoto:function(e,t){return function(n,a){var r=a().user.token;fetch("/images/".concat(e,"/comments/"),{method:"POST",headers:{Authorization:"JWT ".concat(r),"Content-Type":"application/json"},body:JSON.stringify({message:t})}).then((function(e){return 401===e.status&&n(z.logout()),e.json()})).then((function(t){t.message&&n(function(e,t){return{type:F,photoId:e,comment:t}}(e,t))}))}}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return function(e,t){var n=t.feed;return Object(h.a)({},e,{feed:n})}(e,t);case Q:return function(e,t){var n=t.photoId,a=e.feed.map((function(e){return e.id===n?Object(h.a)({},e,{is_liked:!0,like_count:e.like_count+1}):e}));return Object(h.a)({},e,{feed:a})}(e,t);case D:return function(e,t){var n=t.photoId,a=e.feed.map((function(e){return e.id===n?Object(h.a)({},e,{is_liked:!1,like_count:e.like_count-1}):e}));return Object(h.a)({},e,{feed:a})}(e,t);case F:return function(e,t){var n=t.photoId,a=t.comment,r=e.feed.map((function(e){return e.id===n?Object(h.a)({},e,{comments:[].concat(Object(d.a)(e.comments),[a])}):e}));return Object(h.a)({},e,{feed:r})}(e,t);default:return e}},q=Object(m.a)(),M=[l.a,Object(A.a)(q)],H=Object(u.combineReducers)({user:J,photo:_,router:Object(s.b)(q),i18nState:p.i18nState}),K=function(e){return Object(u.createStore)(H,u.applyMiddleware.apply(void 0,M))}(),G=n(13),Y=(n(77),n(3)),X=n(4),$=n(6),ee=n(5),te=n(7),ne=(n(78),n(79),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:n(80),className:"spinner",alt:"loading"}))}),ae=n(1),re=n.n(ae),oe=(n(81),n(10)),ce=n.n(oe),ie=(n(100),function(e,t){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{className:"icon",onClick:e.handleHeartClick},e.isLiked?r.a.createElement(ce.a,{icon:"ios-heart",fontSize:"28px",color:"#EB4B59"}):r.a.createElement(ce.a,{icon:"ios-heart-outline",fontSize:"28px",color:"black"}))),r.a.createElement("span",{onClick:e.openLikes},e.number," ",1===e.number?t.t("like"):t.t("likes")))});ie.contextTypes={t:re.a.func.isRequired};var se=ie,le=function(e){function t(){return Object(Y.a)(this,t),Object($.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return r.a.createElement(se,this.props)}}]),t}(a.Component),ue=Object(i.connect)(null,(function(e,t){return{handleHeartClick:function(){t.isLiked?e(V.unlikePhoto(t.photoId)):e(V.likePhoto(t.photoId))}}}))(le),Ae=(n(101),function(e){return r.a.createElement("li",null,r.a.createElement("span",null,e.username)," ",r.a.createElement("span",null,e.comment))}),me=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement(Ae,{username:e.creator,comment:e.caption}),e.comments.map((function(e){return r.a.createElement(Ae,{username:e.creator.username,comment:e.message,key:e.id})}))))},pe=(n(102),function(e,t){return e.time});pe.propTypes={time:re.a.string.isRequired},pe.contextTypes={t:re.a.func.isRequired};var fe=pe,de=n(55),he=n.n(de),ge=n(57),Ee=function(e,t){return r.a.createElement("form",{className:"commentBox"},r.a.createElement(ge.a,{className:he.a.input,placeholder:t.t("Add a comment..."),onChange:e.handleInputChange,value:e.comment,onKeyPress:e.handleKeyPress}))};Ee.contextTypes={t:re.a.func.isRequired};var ve=Ee,be=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(r)))).state={comment:""},n._handleInputChange=function(e){var t=e.target.value;n.setState({comment:t})},n._handleKeyPress=function(e){var t=n.props.submitComment,a=n.state.comment;"Enter"===e.key&&(e.preventDefault(),t(a),n.setState({comment:""}))},n}return Object(te.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return r.a.createElement(ve,Object.assign({},this.state,{handleInputChange:this._handleInputChange,handleKeyPress:this._handleKeyPress}))}}]),t}(a.Component),ke=Object(i.connect)(null,(function(e,t){return{submitComment:function(n){e(V.commentPhoto(t.photoId,n))}}}))(be),Le=(n(103),n(104),function(e,t){return r.a.createElement("div",{className:e.horizontal?"horizontal":"vertical"},r.a.createElement("div",{className:"column"},r.a.createElement("img",{src:e.user.profile_image||n(47),alt:e.user.username,className:e.big?"bigAvatar":"avatar"}),r.a.createElement("div",{className:"user"},r.a.createElement("span",{className:"username"},e.user.username),r.a.createElement("span",{className:"name"},e.user.name))),r.a.createElement("span",{className:"column"},r.a.createElement("button",{className:"button",onClick:e.handleClick},e.user.following?t.t("Unfollow"):t.t("Follow"))))});Le.contextTypes={t:re.a.func.isRequired},Le.defaultProps={big:!1};var je=Le,Oe=function(e){return r.a.createElement(je,e)},ye=Object(i.connect)(null,(function(e,t){var n=t.user;return{handleClick:function(){n.following?e(z.unfollowUser(n.id)):e(z.followUser(n.id))}}}))(Oe),Te=function(e){return e.list.map((function(e){return r.a.createElement(ye,{horizontal:!0,user:e,key:e.id})}))},Ne=function(e){return r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"box"},r.a.createElement("header",{className:"header"},r.a.createElement("h4",{className:"title"},e.title),r.a.createElement("span",{onClick:e.closeLikes},r.a.createElement(ce.a,{icon:"md-close",fontSize:"20px",color:"black"}))),r.a.createElement("div",{className:"content"},e.loading?r.a.createElement(ne,null):r.a.createElement(Te,{list:e.userList}))))},xe=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n}return Object(te.a)(t,e),Object(X.a)(t,[{key:"componentDidMount",value:function(){this.props.userList&&this.setState({loading:!1})}},{key:"componentWillReceiveProps",value:function(e){e.userList&&this.setState({loading:!1})}},{key:"render",value:function(){return r.a.createElement(Ne,Object.assign({},this.props,this.state))}}]),t}(a.Component),Se=Object(i.connect)((function(e,t){return{userList:e.user.userList}}))(xe),Ce=function(e,t){return r.a.createElement("div",{className:"feed-photo"},r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"image",src:e.creator.profile_image||n(47),alt:e.creator.username}),r.a.createElement("div",{className:"header-column"},r.a.createElement("span",{className:"creator"},e.creator.username),r.a.createElement("span",{className:"location"},e.location))),r.a.createElement("img",{src:e.file,alt:e.caption}),r.a.createElement("div",{className:"meta"},r.a.createElement(ue,{number:e.like_count,isLiked:e.is_liked,photoId:e.id,openLikes:e.openLikes}),r.a.createElement(me,{caption:e.caption,creator:e.creator.username,comments:e.comments}),r.a.createElement(fe,{time:e.natural_time}),r.a.createElement(ke,{photoId:e.id})),e.seeingLikes&&r.a.createElement(Se,{title:t.t("Likes"),closeLikes:e.closeLikes}))};Ce.contextTypes={t:re.a.func.isRequired};var we=Ce,Pe=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(r)))).state={seeingLikes:!1},n._openLikes=function(){console.log("check open like");var e=n.props.getPhotoLikes;n.setState({seeingLikes:!0}),e()},n._closeLikes=function(){console.log("check close likt"),n.setState({seeingLikes:!1})},n}return Object(te.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return r.a.createElement(we,Object.assign({},this.props,this.state,{openLikes:this._openLikes,closeLikes:this._closeLikes}))}}]),t}(a.Component),We=Object(i.connect)(null,(function(e,t){return{getPhotoLikes:function(){e(z.getPhotoLikes(t.id))}}}))(Pe),Ie=function(e){return r.a.createElement("div",{className:"feed"},r.a.createElement(ne,null))},ze=function(e){return r.a.createElement("div",{className:"feed"},e.feed.map((function(e){return r.a.createElement(We,Object.assign({},e,{key:e.id}))})))},Je=function(e){return e.loading?r.a.createElement(Ie,null):e.feed?r.a.createElement(ze,e):void 0},Be=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n.componentWillReceiveProps=function(e){e.feed&&n.setState({loading:!1,feed:e.feed})},n}return Object(te.a)(t,e),Object(X.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.getFeed;this.props.feed?this.setState({loading:!1}):e()}},{key:"render",value:function(){var e=this.props.feed;return r.a.createElement(Je,Object.assign({},this.state,{feed:e}))}}]),t}(a.Component),Qe=Object(i.connect)((function(e,t){return{feed:e.photo.feed}}),(function(e,t){return{getFeed:function(){e(V.getFeed())}}}))(Be),De=(n(105),function(e,t){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"column"},r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"list"},r.a.createElement("li",{className:"listitem"},t.t("About Me")),r.a.createElement("li",{className:"listitem"},t.t("Blog")),r.a.createElement("li",{className:"listitem"},t.t("Language"))))),r.a.createElement("div",{className:"column"},r.a.createElement("span",{className:"copyrigt"},"\xa9 2020 MJ")))});De.contextTypes={t:re.a.func.isRequired};var Fe=De,Ue=(n(106),n(21)),Re=n(28),Ze=n.n(Re),Ve=(n(48),function(e,t){return r.a.createElement("div",{className:"form-component"},r.a.createElement("form",{className:"form",onSubmit:e.handleSubmit},r.a.createElement("input",{type:"text",placeholder:t.t("Username"),className:"text-input",onChange:e.handleInputChange,name:"username",value:e.usernameValue}),r.a.createElement("input",{type:"password",placeholder:t.t("Password"),className:"text-input",onChange:e.handleInputChange,name:"password",value:e.passwordValue}),r.a.createElement("input",{type:"submit",value:t.t("Log in"),className:"button"})),r.a.createElement("span",{className:"divider"},"or"),r.a.createElement(Ze.a,{appId:"178190336837752",autoLoad:!1,fields:"name,email,picture",callback:e.handleFacebookLogin,cssClass:"facebook-link",icon:"fa-facebook-official"},t.t("Log in with Facebook")),r.a.createElement("span",{className:"forgot-link"},t.t("Forgot password?")))});Ve.contextTypes={t:re.a.func.isRequired};var _e=Ve,qe=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n._handleInputChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(Ue.a)({},r,a))},n._handleSubmit=function(e){var t=n.state,a=t.username,r=t.password,o=n.props.usernameLogin;e.preventDefault(),o(a,r)},n._handleFacebookLogin=function(e){(0,n.props.facebookLogin)(e.accessToken)},n}return Object(te.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return r.a.createElement(_e,{handleInputChange:this._handleInputChange,handleSubmit:this._handleSubmit,handleFacebookLogin:this._handleFacebookLogin,usernameValue:t,passwordValue:n})}}]),t}(a.Component),Me=Object(i.connect)(null,(function(e,t){return{facebookLogin:function(t){e(z.facebookLogin(t))},usernameLogin:function(t,n){e(z.usernameLogin(t,n))}}}))(qe),He=function(e,t){return r.a.createElement("div",{className:"form-component"},r.a.createElement("h3",null,"Sign up to learn language."),r.a.createElement(Ze.a,{appId:"178190336837752",autoLoad:!1,fields:"name,email,picture",callback:e.handleFacebookLogin,cssClass:"facebook-link",icon:"fa-facebook-official"}),r.a.createElement("span",{className:"divider"},"or"),r.a.createElement("form",{className:"form",onSubmit:e.handleSubmit},r.a.createElement("input",{type:"email",placeholder:"Email",className:"text-input",onChange:e.handleInputChange,name:"email",value:e.emailValue}),r.a.createElement("input",{type:"text",placeholder:"Full Name",className:"text-input",onChange:e.handleInputChange,name:"fullname",value:e.fullnameValue}),r.a.createElement("input",{type:"text",placeholder:"Username",className:"text-input",onChange:e.handleInputChange,name:"username",value:e.usernameValue}),r.a.createElement("input",{type:"password",placeholder:"Password",className:"text-input",onChange:e.handleInputChange,name:"password",value:e.passwordValue}),r.a.createElement("input",{type:"submit",value:"Sign up",className:"button"})),r.a.createElement("p",null,"By signing up, you agree to our ",r.a.createElement("span",null,"Terms & Privacy Policy"),"."))};He.contextTypes={t:re.a.func.isRequired};var Ke=He,Ge=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",fullname:"",username:"",password:""},n._handleInputChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(Ue.a)({},r,a))},n._handleSubmit=function(e){var t=n.state,a=t.username,r=t.password,o=t.email,c=n.props.createAccount;e.preventDefault(),c(a,r,o)},n._handleFacebookLogin=function(e){(0,n.props.facebookLogin)(e.accessToken)},n}return Object(te.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.fullname,a=e.username,o=e.password;return r.a.createElement(Ke,{handleInputChange:this._handleInputChange,handleSubmit:this._handleSubmit,handleFacebookLogin:this._handleFacebookLogin,emailValue:t,fullnameValue:n,usernameValue:a,passwordValue:o})}}]),t}(a.Component),Ye=Object(i.connect)(null,(function(e,t){return{facebookLogin:function(t){e(z.facebookLogin(t))},createAccount:function(t,n,a){e(z.createAccount(t,n,a))}}}))(Ge),Xe=function(e,t){return r.a.createElement("main",{className:"auth"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"white-box form-box"},"login"===e.action&&r.a.createElement(Me,null),"signup"===e.action&&r.a.createElement(Ye,null)),r.a.createElement("div",{className:"white-box"},"signup"===e.action&&r.a.createElement("p",null,"Have an account?"," ",r.a.createElement("span",{className:"change-link",onClick:e.changeAction},"Log in")),"login"===e.action&&r.a.createElement("p",null,"Don't have an account?"," ",r.a.createElement("span",{className:"change-link",onClick:e.changeAction},"Sign up"))),r.a.createElement("div",{className:"app-box"},r.a.createElement("span",null,"Get the app"),r.a.createElement("div",{className:"appstores"},r.a.createElement("img",{src:n(107),alt:"Download it on the Google Play"}),r.a.createElement("img",{src:n(108),alt:"Download it on the App Store"})))))},$e=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(r)))).state={action:"login"},n._changeAction=function(){n.setState((function(e){var t=e.action;return"login"===t?{action:"signup"}:"signup"===t?{action:"login"}:void 0}))},n}return Object(te.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){var e=this.state.action;return r.a.createElement(Xe,{action:e,changeAction:this._changeAction})}}]),t}(a.Component),et=Object(i.connect)()($e),tt=n(17),nt=(n(109),function(e,t){return r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"column"},r.a.createElement(tt.a,{to:"/"},r.a.createElement("img",{className:"logo",alt:t.t("Logo")}))),r.a.createElement("div",{className:"column"},r.a.createElement("form",{method:"post",onSubmit:e.onSubmit},r.a.createElement("input",{type:"text",placeholder:t.t("Search"),className:"search-input",value:e.value,onChange:e.onInputChange}))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"nav-icon"},r.a.createElement(tt.a,{to:"/blink"},r.a.createElement(ce.a,{icon:"ios-clipboard-outline",fontSize:"28px",color:"black"}))),r.a.createElement("div",{className:"nav-icon"},r.a.createElement(tt.a,{to:"/records"},r.a.createElement(ce.a,{icon:"ios-mic-outline",fontSize:"28px",color:"black"}))),r.a.createElement("div",{className:"nav-icon"},r.a.createElement(tt.a,{to:"/explore"},r.a.createElement(ce.a,{icon:"ios-compass-outline",fontSize:"28px",color:"black"}))),r.a.createElement("div",{className:"nav-icon"},r.a.createElement(ce.a,{icon:"ios-heart-outline",fontSize:"28px",color:"black"})),r.a.createElement("div",{className:"nav-icon"},r.a.createElement(tt.a,{to:"/profile"},r.a.createElement(ce.a,{icon:"ios-person-outline",fontSize:"32px",color:"black"}))))))});nt.contextTypes={t:re.a.func.isRequired};var at=nt,rt=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},n._onInputChange=function(e){var t=e.target.value;n.setState({term:t})},n._onSubmit=function(e){var t=n.state.term,a=n.props.goToSearch;e.preventDefault(),a(t),n.setState({term:""})},n}return Object(te.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){var e=this.state.term;return r.a.createElement(at,{onSubmit:this._onSubmit,onInputChange:this._onInputChange,value:e})}}]),t}(a.Component),ot=n(56),ct=Object(i.connect)(null,(function(e,t){return{goToSearch:function(t){e(Object(ot.push)("/search/".concat(t)))}}}))(rt),it=(n(112),function(e){return r.a.createElement("div",{className:"feed"},r.a.createElement(ne,null))}),st=function(e){return r.a.createElement("div",{className:"feed"},e.userList.map((function(e){return r.a.createElement(ye,{big:!0,user:e,key:e.id})})))},lt=function(e){return e.loading?r.a.createElement(it,null):e.userList?r.a.createElement(st,e):void 0},ut=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n.componentWillReceiveProps=function(e){e.userList&&n.setState({loading:!1})},n}return Object(te.a)(t,e),Object(X.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.getExplore;this.props.userList?this.setState({loading:!1}):e()}},{key:"render",value:function(){var e=this.props.userList;return r.a.createElement(lt,Object.assign({},this.state,{userList:e}))}}]),t}(a.Component),At=Object(i.connect)((function(e,t){return{userList:e.user.userList}}),(function(e,t){return{getExplore:function(){e(z.getExplore())}}}))(ut),mt=(n(113),n(114),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:e.photo.file,className:"photo"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("span",{className:"data"},r.a.createElement(ce.a,{icon:"ios-heart",fontSize:"22px",color:"white"})," ",e.photo.like_count),r.a.createElement("span",{className:"data"},r.a.createElement(ce.a,{icon:"ios-text",fontSize:"22px",color:"white"})," ",e.photo.comment_count)))}),pt=function(e,t){return r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"section"},r.a.createElement("h4",{className:"title"},t.t("Users")),e.loading&&r.a.createElement(ne,null),!e.loading&&e.userList.length<1&&r.a.createElement(ht,{text:t.t("Nothing found :(")}),r.a.createElement("div",{className:"conten"},!e.loading&&e.userList.length>0&&r.a.createElement(ft,{userList:e.userList}))),r.a.createElement("div",{className:"section"},r.a.createElement("h4",{className:"title"},t.t("Photos")),e.loading&&r.a.createElement(ne,null),!e.loading&&e.imageList.length<1&&r.a.createElement(ht,{text:t.t("Nothing found :(")}),r.a.createElement("div",{className:"content"},!e.loading&&e.imageList.length>0&&r.a.createElement(dt,{imageList:e.imageList}))))},ft=function(e){return e.userList.map((function(e){return r.a.createElement(ye,{vertical:!0,user:e,key:e.id})}))},dt=function(e){return e.imageList.map((function(e){return r.a.createElement(mt,{photo:e,key:e.id})}))},ht=function(e){return r.a.createElement("span",{className:"notFound"},e.text)};pt.contextTypes={t:re.a.func.isRequired};var gt=pt,Et=function(e){function t(){var e,n;Object(Y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n.componentDidUpdate=function(e,t){var a=n.props.searchByTerm;e.match.params!==n.props.match.params&&a()},n.componentWillReceiveProps=function(e){e.userList&&e.imageList&&n.setState({loading:!1})},n}return Object(te.a)(t,e),Object(X.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.searchByTerm)()}},{key:"render",value:function(){var e=this.props,t=e.userList,n=e.imageList;return r.a.createElement(gt,Object.assign({},this.state,{userList:t,imageList:n}))}}]),t}(a.Component),vt=Object(i.connect)((function(e,t){var n=e.user;return{userList:n.userList,imageList:n.imageList}}),(function(e,t){var n=t.match.params.searchTerm;return{searchByTerm:function(){e(z.searchByTerm(n))}}}))(Et),bt=function(e){return r.a.createElement(G.c,null,r.a.createElement(G.a,{key:"1",exact:!0,path:"/",component:Qe}),",",r.a.createElement(G.a,{key:"2",path:"/explore",component:At}),r.a.createElement(G.a,{key:"2",path:"/search/:searchTerm",component:vt}))},kt=function(e){return r.a.createElement(G.c,null,r.a.createElement(G.a,{exact:!0,path:"/",component:et}),",",r.a.createElement(G.a,{path:"/recover",render:function(){return"recover password"}}))},Lt=function(e){return[e.isLoggedIn?r.a.createElement(ct,{key:1}):null,e.isLoggedIn?r.a.createElement(bt,{key:2}):r.a.createElement(kt,{key:2}),r.a.createElement(Fe,{key:3})]},jt=function(e){return r.a.createElement(Lt,e)},Ot=Object(i.connect)((function(e,t){return{isLoggedIn:e.user.isLoggedIn}}))(jt);n(115);console.log(K.getState()),K.dispatch({type:"HELLO"}),c.a.render(r.a.createElement(i.Provider,{store:K},r.a.createElement(s.a,{history:q},r.a.createElement(f.a,{translations:{kr:{Username:"\uc0ac\uc6a9\uc790 \uc774\ub984",Password:"\ud328\uc2a4\uc6cc\ub4dc","Log in":"\ub85c\uadf8\uc778","Log in with Facebook":"\ud398\uc774\uc2a4\ubd81 \ub85c\uadf8\uc778","Forgot password?":"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc78a\uc5b4\ubc84\ub838\ub098\uc694?","About Me":"\ub098\uc5d0 \ub300\ud574\uc11c",Blog:"\ube14\ub85c\uadf8",Language:"\uc5b8\uc5b4"},options:{}},initialLang:"en",fallbackLang:"en"},r.a.createElement(Ot,null)))),document.getElementById("root"))},47:function(e,t){e.exports="data:image/jpeg;base64,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"},48:function(e,t,n){},55:function(e,t,n){},59:function(e,t,n){e.exports=n(116)},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){e.exports=n.p+"static/media/loading.167e31b7.png"},81:function(e,t,n){}},[[59,1,2]]]);
//# sourceMappingURL=main.79b30e58.chunk.js.map