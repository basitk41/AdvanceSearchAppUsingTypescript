(this.webpackJsonpwantable=this.webpackJsonpwantable||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),i=n.n(r),s=(n(47),n(48),n(49),n(4)),o=n(11),l=n(1),u=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("br",{}),Object(l.jsxs)("ul",{className:"nav nav-pills mb-3",id:"pills-tab",role:"tablist",children:[Object(l.jsx)("li",{className:"nav-item",role:"presentation",children:Object(l.jsx)(o.c,{to:"/home",className:"nav-link",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",role:"presentation",children:Object(l.jsx)(o.c,{to:"/search",className:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false",children:"Search"})}),Object(l.jsx)("li",{className:"nav-item",role:"presentation",children:Object(l.jsx)(o.c,{to:"/favoriteArtists",className:"nav-link",id:"pills-contact-tab","data-bs-toggle":"pill","data-bs-target":"#pills-contact",type:"button",role:"tab","aria-controls":"pills-contact","aria-selected":"false",children:"Favorite Artists"})})]})]})},b=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{style:{textAlign:"center"},children:"Explore Top Music Powered by your Scrobbles"}),Object(l.jsx)("p",{style:{textAlign:"center"},children:"We bring together your favourite music services and join up listening, watching and sharing to connect your musical world. Below you can visualise, in real-time, the listening habits & trends of Last.fm's global community. Go Explore."})]})},j=n(5),d="SETSEARCH",h="SETINPUT",p="LOADING",O="INITSEARCH",g="EMPTYSEARCH",m="SETFAV",f="UNFAV",v="SETARTIST",x="SETBIO",y="SETCURRENTPAGE",N="INITPAGES",S=n(18),E=n.n(S),A=function(e){return{type:p,value:e}},P=function(e){return function(t){t({type:g}),t(A(!0)),E.a.get("https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=".concat(e,"&api_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/AdvanceSearchAppUsingTypescript",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,"&format=json")).then((function(e){var n;t((n=e.data.results.artistmatches.artist,{type:d,search:n})),t(A(!1))})).catch((function(e){console.log("Something went wrong!"),console.log(e),t(A(!1))}))}},T=function(e){return{type:f,artist:e}},_=function(e){return{type:v,artist:e}},C=function(e){return{type:p,value:e}},w=function(e){return function(t){t(C(!0)),E.a.get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=".concat(e,"&api_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/AdvanceSearchAppUsingTypescript",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,"&format=json")).then((function(e){var n;t((n=e.data.artist.bio,{type:x,bio:n})),t(C(!1))})).catch((function(e){console.log("Something went wrong!"),console.log(e),t(C(!1))}))}},k=function(){return{type:N}},F=function(){return Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("div",{className:"spinner-grow text-primary",style:{width:"3rem",height:"3rem"},role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},R=n(24),I=n.n(R),B=Object(j.b)((function(e){return{favorites:e.favorite.favorites}}),(function(e){return{setFav:function(t){return e(function(e){return{type:m,artist:e}}(t))},unFav:function(t){return e(T(t))},setArtist:function(t){return e(_(t))}}}))((function(e){var t=e.item,n=e.favorites,a=e.setFav,c=e.unFav,r=e.setArtist;return Object(l.jsxs)("div",{className:"card",style:{width:"19rem"},children:[Object(l.jsx)("img",{src:null===t||void 0===t?void 0:t.image[1]["#text"],className:"card-img-top",alt:"...",height:"220px"}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("p",{style:{textAlign:"center"},children:Object(l.jsx)("span",{style:{fontWeight:"bold"},children:t.name})}),Object(l.jsx)(o.b,{to:"/biography/".concat(t.name),className:"btn btn-primary",onClick:function(){return r(t)},children:"Biography"}),n.filter((function(e){return e.name===t.name})).length>0?Object(l.jsx)(I.a,{name:"",className:"fa fa-heart",size:"2x",spin:!0,style:{marginLeft:"130px",cursor:"pointer"},onClick:function(){return c(t)}}):Object(l.jsx)(I.a,{name:"",className:"fa fa-heart-o",size:"2x",style:{marginLeft:"130px",cursor:"pointer"},onClick:function(){return a(t)}})]})]})})),D=n(19),H=n.n(D);var L=function(e){var t=e.setCurrentPage,n=e.currentPage,a=e.length,c=e.pageSize,r=Math.ceil(a/c),i=H.a.range(1,r+1);return Object(l.jsx)("div",{className:"page-links",style:{display:"flex",justifyContent:"flex-end"},children:Object(l.jsx)("nav",{"aria-label":"...",children:Object(l.jsx)("ul",{className:"pagination",children:i.length>1?i.map((function(e){return Object(l.jsx)("li",{className:e===n?"page-item active":"page-item",children:Object(l.jsx)("button",{className:"page-link",onClick:function(){return t(e)},children:e})},e)})):null})})})},U=Object(j.b)((function(e){return{searchResult:e.search.search,inputField:e.search.input,loading:e.search.loading,currentPage:e.pages.currentPage,pageSize:e.pages.pageSize}}),(function(e){return{setSearch:function(t){return e(P(t))},updateInput:function(t){return e(function(e){return{type:h,input:e}}(t))},setCurrentPage:function(t){return e(function(e){return{type:y,page:e}}(t))},initPages:function(){return e(k())}}}))((function(e){var t=e.setSearch,n=e.updateInput,a=e.searchResult,c=e.inputField,r=e.loading,i=e.currentPage,s=e.pageSize,o=e.setCurrentPage,u=e.initPages,b=function(e,t,n){var a=(t-1)*n;return H()(e).slice(a).take(n).value()}(a,i,s);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{style:{textAlign:"center",color:"blue"},children:"Search"}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsx)("div",{className:"col-sm-6",children:Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Artists Search",value:c,onChange:function(e){return n(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-outline-primary",type:"button",onClick:function(){u(),t(c)},children:"Search"})]})})})}),Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("div",{className:"row",children:r?Object(l.jsx)(F,{}):b.map((function(e){return Object(l.jsx)("div",{className:"col-sm-3 mb-3",children:Object(l.jsx)(B,{item:e})},e.name)}))}),Object(l.jsx)(L,{setCurrentPage:o,currentPage:i,length:a.length,pageSize:s})]})]})})),z=Object(j.b)(null,(function(e){return{unFav:function(t){return e(T(t))},setArtist:function(t){return e(_(t))}}}))((function(e){var t=e.item,n=e.unFav,a=e.setArtist;return Object(l.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[t.name,Object(l.jsxs)("span",{className:"badge",style:{cursor:"pointer"},children:[Object(l.jsx)(o.b,{to:"/biography/".concat(t.name),className:"btn btn-primary",onClick:function(){return a(t)},children:"Biography"}),"\xa0\xa0\xa0\xa0",Object(l.jsx)("span",{className:"badge bg-danger rounded-pill",onClick:function(){return n(t)},style:{padding:"10px",fontSize:"12px"},children:"X"})]})]})})),K=Object(j.b)((function(e){return{favorites:e.favorite.favorites}}))((function(e){var t=e.favorites;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{style:{textAlign:"center"},children:"Favorite Artists"}),t.length>0?t.map((function(e){return Object(l.jsx)(z,{item:e},e.mbid)})):Object(l.jsx)("h6",{style:{textAlign:"center"},children:"No favorite artist yet."})]})})),W=n(25),M=Object(j.b)((function(e){return{biography:e.biography.biography,loading:e.biography.loading,artist:e.biography.artist}}),(function(e){return{initBio:function(t){return e(w(t))}}}))((function(e){var t=e.loading,n=e.biography,c=e.initBio,r=e.artist,i=e.history;return Object(a.useEffect)((function(){c(null===r||void 0===r?void 0:r.name)}),[r.name,c]),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{style:{textAlign:"right"},children:Object(l.jsx)("button",{className:"btn btn-info",onClick:function(){return i.goBack()},children:"Back"})}),t?Object(l.jsx)(F,{}):Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h5",{className:"card-header",children:"Biography"}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:null===r||void 0===r?void 0:r.name}),Object(l.jsxs)("p",{className:"card-text",children:[Object(l.jsx)("span",{style:{fontFamily:"monospace"},children:"Published: "}),null===n||void 0===n?void 0:n.published]}),Object(l.jsxs)("p",{className:"card-text",children:[Object(l.jsx)("span",{style:{fontFamily:"monospace"},children:"Content: "}),n&&Object(W.a)(null===n||void 0===n?void 0:n.content)]}),Object(l.jsxs)("p",{className:"card-text",children:[Object(l.jsx)("span",{style:{fontFamily:"monospace"},children:"Summary: "}),n&&Object(W.a)(null===n||void 0===n?void 0:n.summary)]})]})]})]})})),V=Object(j.b)(null,(function(e){return{initSearch:function(){return e({type:O})},initPages:function(){return e(k())}}}))((function(e){var t=e.initPages,n=e.initSearch;return Object(a.useEffect)((function(){t(),n()}),[]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(u,{}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"tab-content",children:Object(l.jsx)("div",{className:"tab-pane fade show active",children:Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{path:"/home",component:b}),Object(l.jsx)(s.b,{path:"/search",component:U}),Object(l.jsx)(s.b,{path:"/favoriteArtists",component:K}),Object(l.jsx)(s.b,{path:"/biography/:name",component:M}),Object(l.jsx)(s.a,{from:"/",to:"/home"})]})})})]})})),G=n(12),X=n(40),Y=n(26),J=n(41),q=n.n(J),Q=n(15),Z=n(2),$={favorites:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(Z.a)(Object(Z.a)({},e),{},{favorites:[].concat(Object(Q.a)(e.favorites),[t.artist])});case f:return Object(Z.a)(Object(Z.a)({},e),{},{favorites:Object(Q.a)(e.favorites.filter((function(e){return e.name!==t.artist.name})))});default:return e}},te={search:[],input:"",loading:!1},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(Z.a)(Object(Z.a)({},e),{},{search:[],input:"",loading:!1});case g:return Object(Z.a)(Object(Z.a)({},e),{},{search:[]});case d:return Object(Z.a)(Object(Z.a)({},e),{},{search:Object(Q.a)(t.search)});case h:return Object(Z.a)(Object(Z.a)({},e),{},{input:t.input});case p:return Object(Z.a)(Object(Z.a)({},e),{},{loading:t.value});default:return e}},ae={artist:null,biography:null,loading:!0},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(Z.a)(Object(Z.a)({},e),{},{artist:t.artist});case x:return Object(Z.a)(Object(Z.a)({},e),{},{biography:t.bio});case p:return Object(Z.a)(Object(Z.a)({},e),{},{loading:t.value});default:return e}},re={pageSize:8,currentPage:1},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(Z.a)(Object(Z.a)({},e),{},{currentPage:1});case y:return Object(Z.a)(Object(Z.a)({},e),{},{currentPage:t.page});default:return e}},se=Object(G.b)({favorite:ee,search:ne,biography:ce,pages:ie}),oe={key:"root",storage:q.a},le=Object(Y.a)(oe,se),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.c,be=Object(G.d)(le,ue(Object(G.a)(X.a))),je=Object(Y.b)(be),de=n(42);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j.a,{store:be,children:Object(l.jsx)(de.a,{persistor:je,children:Object(l.jsx)(o.a,{children:Object(l.jsx)(V,{})})})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.fda9c847.chunk.js.map