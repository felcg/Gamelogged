(this.webpackJsonpgamelogged=this.webpackJsonpgamelogged||[]).push([[0],{109:function(e,a,t){},130:function(e,a,t){e.exports=t(179)},158:function(e,a,t){},160:function(e,a,t){},161:function(e,a,t){},162:function(e,a,t){},163:function(e,a,t){},164:function(e,a,t){},165:function(e,a,t){},166:function(e,a,t){},167:function(e,a,t){},169:function(e,a,t){},170:function(e,a,t){},171:function(e,a,t){},172:function(e,a,t){},173:function(e,a,t){},174:function(e,a,t){},175:function(e,a,t){},179:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(36),l=t.n(c),o=t(9),s=t(14),i=t(10),m=t(119),u=t(53),p=t(120),d=function(e){return{type:"SET_SORT",sort:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nosort",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_SORT":return a.sort;default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PLATFORM":return a.platform;default:return e}},E=t(58),b=function(e){return{type:"SET_GENRE",genre:e}},v=function(e){return{type:"SET_GAMEMODE",gameMode:e}},h=function(e){return{type:"SET_COOPMODE",coopMode:e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{genre:"nofilter",gameMode:"nofilter",coopMode:"nofilter"},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_GENRE":return Object(E.a)(Object(E.a)({},e),{},{genre:a.genre});case"SET_GAMEMODE":return Object(E.a)(Object(E.a)({},e),{},{gameMode:a.gameMode});case"SET_COOPMODE":return Object(E.a)(Object(E.a)({},e),{},{coopMode:a.coopMode});default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_SEARCH":return""===a.search?null:a.search;default:return e}},N=function(e){return{type:"SET_USER",user:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER":return a.user;default:return e}},w=Object(u.combineReducers)({sort:f,platform:g,filters:O,search:y,user:j}),S=Object(u.createStore)(w,Object(m.composeWithDevTools)(Object(u.applyMiddleware)(p.a))),_=t(77),x=t(121);_.b.add(x.a);t(109);var k=t(4),C=t.n(k),G=t(7),M=t(6),I=t(182),P=t(19),T=t.n(P),R="https://gamelogged.onrender.com/api/",L=function(){var e=Object(G.a)(C.a.mark((function e(a,t,n,r,c,l){var o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat(R,"platform/").concat(a),{params:{page:t,sort:n,genre:r,gameMode:c,coopMode:l}});case 2:return o=e.sent,e.abrupt("return",o.data);case 4:case"end":return e.stop()}}),e)})));return function(a,t,n,r,c,l){return e.apply(this,arguments)}}(),A=function(){var e=Object(G.a)(C.a.mark((function e(a,t,n,r,c){var l;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat(R,"games"),{params:{page:a,sort:t,genre:n,gameMode:r,coopMode:c}});case 2:return l=e.sent,e.abrupt("return",l.data);case 4:case"end":return e.stop()}}),e)})));return function(a,t,n,r,c){return e.apply(this,arguments)}}(),F=function(){var e=Object(G.a)(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat(R,"games?"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(G.a)(C.a.mark((function e(a,t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat(R,"search/").concat(a),{params:{page:t}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),D={getPlatformGames:L,getAllGames:A,getGame:function(){var e=Object(G.a)(C.a.mark((function e(a){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat(R,"game/").concat(a));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),searchGames:B,getCompany:function(){var e=Object(G.a)(C.a.mark((function e(a){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat(R,"companies/").concat(a));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),getRecent:function(){var e=Object(G.a)(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat(R,"initialGames"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getTopTen:function(){var e=Object(G.a)(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat(R,"TopRatedGames"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getInitialGames:F},V=function(e){var a=e.sort,t=Object(i.b)();return r.a.createElement("select",{value:a,onChange:function(e){return function(e){t(d(e.target.value))}(e)}},r.a.createElement("option",{value:"nosort"},"Sort"),r.a.createElement("option",{value:"release"},"Release date"),r.a.createElement("option",{value:"rating"},"Rating"))},q=[{slug:"win",name:"PC"},{slug:"ps",name:"Playstaion"},{slug:"ps2",name:"Playstation 2"},{slug:"ps3",name:"Playstation 3"},{slug:"ps4--1",name:"Playstation 4"},{slug:"playstation-5",name:"Playstation 5"},{slug:"psp",name:"PSP"},{slug:"psvita",name:"PS Vita"},{slug:"xbox",name:"Xbox"},{slug:"xbox360",name:"Xbox 360"},{slug:"xboxone",name:"Xbox One"},{slug:"xbox-series-x",name:"Xbox Series X"},{slug:"nes",name:"NES"},{slug:"snes--1",name:"SNES"},{slug:"n64",name:"Nintendo 64"},{slug:"ngc",name:"Nintendo GameCube"},{slug:"wii",name:"Wii"},{slug:"wiiu",name:"Wii U"},{slug:"switch",name:"Switch"},{slug:"gb",name:"Game Boy"},{slug:"gbc",name:"Game Boy Color"},{slug:"gba",name:"Game Boy Advance"},{slug:"nds",name:"Nintendo DS"},{slug:"3ds",name:"Nintendo 3DS"},{slug:"smd",name:"MegaDrive/ Sega Genesis"},{slug:"saturn",name:"Sega Saturn"},{slug:"dc",name:"Dreamcast"},{slug:"neo-geo-pocket",name:"NeoGeo Pocket"},{slug:"neo-geo-pocket-color",name:"NeoGeo Pocket Color"},{slug:"ios",name:"iOs"},{slug:"arcade",name:"Arcade"},{slug:"android",name:"Android"},{slug:"linux",name:"Linux"}],U=(t(158),function(e){var a=e.platform,t=e.name,n=Object(i.b)(),c=Object(s.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{id:"platformSelect",value:a,onChange:function(e){return function(e){var a=document.getElementById("platformSelect").selectedOptions[0].text;n(function(e){return{type:"SET_PLATFORM",platform:e}}(e.target.value)),n(d("nosort")),n(b("nofilter")),n(v("nofilter")),n(h("nofilter")),c.push("/platforms/".concat(a))}(e)}},r.a.createElement("option",{defaultValue:!0,value:"all"},t),q.map((function(e){return r.a.createElement("option",{className:"platformOption",key:e.slug,value:e.slug},e.name)}))))}),H=t(189),J=t(181),W=(t(160),t(85)),X=function(e){var a,t=e.game,n="";switch(!0){case t.total_rating>70:n="#1fbb87";break;case t.total_rating>=40:n="#fab822";break;case t.total_rating<39:n="#fb397a"}return r.a.createElement(H.a,{className:"GameCard",key:t.id},r.a.createElement("div",{className:"GameNameContainer"},r.a.createElement("h5",{className:"GameName"},t.name," "),r.a.createElement("div",{className:"GameRating"},null!=t.total_rating?r.a.createElement("span",{style:{color:"".concat(n)}},t.total_rating.toFixed()):r.a.createElement("span",null,"NA"))),r.a.createElement("div",{className:"CoverAndInfo"},t.cover?r.a.createElement("img",{src:t.cover.url,alt:"cover of the game ".concat(t.name)}):r.a.createElement("div",null,"No Image Yet"),r.a.createElement("div",{className:"GameInfo"},r.a.createElement("div",{className:"GameSummary"},t.summary))),r.a.createElement("div",{className:"ReleaseDateAndButton"},t.first_release_date&&r.a.createElement("div",{className:"ReleaseDate"},(a=t.first_release_date,new Date(1e3*a).toLocaleDateString())),r.a.createElement(o.b,{to:"/games/".concat(t.id)},r.a.createElement(J.a,null,r.a.createElement("span",null,"Info"," ",r.a.createElement(W.a,{className:"LinkIcon",icon:["fas","external-link-alt"]}))))))},z=(t(161),function(e){var a=e.pageOfGames;return r.a.createElement(I.a,{fluid:!0,className:"gameListContainer"},a.length>0?a.map((function(e,a){return r.a.createElement(X,{key:e.id,game:e,index:a})})):r.a.createElement("div",null,"No games"))}),K=function(e){var a=e.value,t=e.onChange,n=e.collection,c=e.name;return r.a.createElement("select",{name:c,value:a,onChange:t},r.a.createElement("option",{defaultValue:!0,value:"nofilter"},c),n.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))},Y=["Simulator","Tactical","Quiz/Trivia","Fighting","Strategy","Adventure","Role-playing (RPG)","Shooter","Music","Indie","Turn-based strategy (TBS)","Pinball","Puzzle","Real Time Strategy (RTS)","Hack and slash/Beat 'em up","Visual Novel","Platform","Racing","Sport","Arcade","Point-and-click","Card & Board Game","MOBA"],Q=["Co-operative","Single player","Multiplayer","Massively Multiplayer Online (MMO)","Split screen","Battle Royale"],Z=["Campaign Coop","Offline Coop","Online Coop","Split Screen"],$=function(e){var a=e.filters,t=Object(i.c)((function(e){return e.filters.gameMode})),n=Object(i.b)(),c=function(e,a){switch(a){case"genre":n(b(e.target.value));break;case"gameMode":n(v(e.target.value));break;case"coopMode":n(h(e.target.value))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{value:a.genre,onChange:function(e){return c(e,"genre")},collection:Y,name:"All Genres"}),r.a.createElement(K,{value:a.gameMode,onChange:function(e){return c(e,"gameMode")},collection:Q,name:"All Game Modes"}),"Co-operative"===t&&r.a.createElement(K,{value:a.coop,onChange:function(e){return c(e,"coopMode")},collection:Z,name:"All Coop Modes"}))},ee=(t(162),function(e){var a=e.pager;return r.a.createElement("div",{className:"hello"},a&&a.pages&&a.pages.length?r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:"page-item first-item ".concat(1===a.currentPage?"disabled":"")},r.a.createElement(o.b,{to:{search:"?page=1"},className:"page-link"},"First")),r.a.createElement("li",{className:"page-item previous-item ".concat(1===a.currentPage?"disabled":"")},r.a.createElement(o.b,{to:{search:"?page=".concat(a.currentPage-1)},className:"page-link"},"Previous")),a.pages.map((function(e){return r.a.createElement("li",{key:e,className:"page-item number-item ".concat(a.currentPage===e?"active":"")},r.a.createElement(o.b,{to:{search:"?page=".concat(e)},className:"page-link"},e))})),r.a.createElement("li",{className:"page-item next-item ".concat(a.currentPage===a.totalPages?"disabled":"")},r.a.createElement(o.b,{to:{search:"?page=".concat(a.currentPage+1)},className:"page-link"},"Next")),r.a.createElement("li",{className:"page-item last-item ".concat(a.currentPage===a.totalPages?"disabled":"")},r.a.createElement(o.b,{to:{search:"?page=".concat(a.totalPages)},className:"page-link"},"Last"))):null)}),ae=t(82),te=function(){return r.a.createElement("div",{className:"loader"})};function ne(e){var a=e.isLoading,t=e.children,c=r.a.useState(!1),l=Object(M.a)(c,2),o=l[0],s=l[1];Object(n.useEffect)((function(){if(a&&s(!0),!a&&o){var e=setTimeout((function(){s(!1)}),400);return function(){clearTimeout(e)}}}),[a,o]);var i=Object(ae.b)({opacity:o?1:0,color:"#747fb3"}),m=Object(ae.b)({opacity:o?0:1,color:"#747fb3"});return r.a.createElement("div",null,o?r.a.createElement(ae.a.div,{style:i},r.a.createElement(te,null)):r.a.createElement(ae.a.div,{style:m},t))}t(163);var re=function(){var e=Object(n.useState)(!0),a=Object(M.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),o=Object(M.a)(l,2),m=o[0],u=o[1],p=Object(n.useState)([]),d=Object(M.a)(p,2),f=d[0],g=d[1],E=Object(s.h)(),b=Object(i.c)((function(e){return e.sort})),v=Object(i.c)((function(e){return e.platform})),h=Object(i.c)((function(e){return e.filters})),O=Object(i.c)((function(e){return e.search})),y=function(){var e=Object(G.a)(C.a.mark((function e(){var a,t,n,r,l,o,s,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=new URLSearchParams(E.search),t=parseInt(a.get("page"),10)||1,n=h.genre,r=h.gameMode,l=h.coopMode,c(!0),null===O){e.next=12;break}return e.next=7,D.searchGames(O,t);case 7:return o=e.sent,u(o.pager),g(o.pageOfItems),c(!1),e.abrupt("return",null);case 12:if("all"===v){e.next=20;break}return e.next=15,D.getPlatformGames(v,t,b,n,r,l);case 15:return s=e.sent,u(s.pager),g(s.pageOfItems),c(!1),e.abrupt("return",null);case 20:return e.next=22,D.getAllGames(t,b,n,r,l);case 22:return i=e.sent,u(i.pager),g(i.pageOfItems),c(!1),e.abrupt("return",null);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y()}),[b,v,h,O]),r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{className:"contentWrapper"},null===O?r.a.createElement(I.a,{className:"filtersContainer"},r.a.createElement(I.a,{className:"filterContainer filterTop"},r.a.createElement(V,{sort:b,loadPage:y}),r.a.createElement(U,{platform:v,name:"All Platforms"})),r.a.createElement(I.a,{className:"filterContainer filterBottom"},r.a.createElement($,{filters:h}))):r.a.createElement(r.a.Fragment,null),r.a.createElement(ne,{isLoading:t},r.a.createElement(z,{pageOfGames:f,platform:v}),r.a.createElement(ee,{pager:m}))))},ce=t(185),le=t(187),oe=function(e){var a=e.id,t=Object(n.useState)([]),c=Object(M.a)(t,2),l=c[0],o=c[1],s=function(){var e=Object(G.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getCompany(a);case 2:t=e.sent,o(t[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,l.name))},se=function(e){var a=e.similarGames,t=Object(n.useState)([]),c=Object(M.a)(t,2),l=c[0],s=c[1],i=function(){var e=Object(G.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Promise.all(a.map((function(e){return D.getGame(e)}))).then((function(e){s(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),r.a.createElement(r.a.Fragment,null,l.map((function(e){return r.a.createElement(o.b,{to:"/games/".concat(e[0].id),key:e[0].id,className:"SimilarGame text-decoration-none"},e[0].cover?r.a.createElement("img",{src:e[0].cover.url,alt:"cover of the game ".concat(e[0].name)}):r.a.createElement("div",null,"No Image Yet"),r.a.createElement("p",null,e[0].name))})))},ie=(t(164),function(){var e=Object(s.i)().gameId,a=Object(n.useState)({}),t=Object(M.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(!1),i=Object(M.a)(o,2),m=i[0],u=i[1],p=Object(n.useState)(!1),d=Object(M.a)(p,2),f=d[0],g=d[1],E=Object(n.useState)(0),b=Object(M.a)(E,2),v=b[0],h=b[1],O=Object(n.useState)({}),y=Object(M.a)(O,2),N=y[0],j=y[1],w="";switch(!0){case c.total_rating>70:w="#1fbb87";break;case c.total_rating>=40:w="#fab822";break;case c.total_rating<39:w="#fb397a"}var S,_=function(){var a=Object(G.a)(C.a.mark((function a(){var t;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D.getGame(e);case 2:t=a.sent,l(t[0]);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),x=function(e){var a=Math.floor(e/60/60),t=Math.floor(e/60)-60*a;return"".concat(a,"h").concat(t,"m")};return Object(n.useEffect)((function(){_()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{className:"GameFullInfoContainer"},r.a.createElement("div",{className:"FirstBlock"},r.a.createElement("div",null,r.a.createElement("h1",null,c.name),c.first_release_date&&r.a.createElement("div",{className:"ReleaseDate"},(S=c.first_release_date,new Date(1e3*S).toLocaleDateString()))),r.a.createElement("div",{className:"GameRating"},null!=c.total_rating?r.a.createElement("span",{style:{color:"".concat(w)}},c.total_rating.toFixed()):r.a.createElement("span",null,"NA"))),r.a.createElement("div",{className:"MainInfoContainer"},r.a.createElement("div",{className:"ImageDiv"},c.cover?r.a.createElement("img",{src:c.cover.url,alt:"cover of the game ".concat(c.name)}):r.a.createElement("div",null,"No Image Yet")),r.a.createElement("div",{className:"Summary"},r.a.createElement("p",null,c.summary)),c.game_modes&&r.a.createElement("div",{className:"InfoContainer"},r.a.createElement("h5",null,"Game Modes:"),r.a.createElement("ul",{className:"GameModeList"},c.game_modes&&c.game_modes.map((function(e){return r.a.createElement("li",{key:e.id},e.name)})))),c.genres&&r.a.createElement("div",{className:"InfoContainer"},r.a.createElement("h5",null,"Genres:"),r.a.createElement("ul",{className:"GenreList"},c.genres&&c.genres.map((function(e){return r.a.createElement("li",{key:e.id},e.name)})))),r.a.createElement("div",{className:"InfoContainer"},r.a.createElement("h5",null,"Platforms:"),r.a.createElement("div",{className:"PlatformList"},c.platforms&&c.platforms.map((function(e){return r.a.createElement("p",{className:"Platform",key:e.id},e.name)})))),c.time_to_beat&&r.a.createElement("div",{className:"TimeToBeat"},r.a.createElement("h5",null,"Average time to beat:"),0!==c.time_to_beat.completely?r.a.createElement("p",null,"Completely: ",x(c.time_to_beat.completely)," "):r.a.createElement("p",null),0!==c.time_to_beat.normally?r.a.createElement("p",null,"Normally: ",x(c.time_to_beat.normally)):r.a.createElement("p",null),0!==c.time_to_beat.hastly?r.a.createElement("p",null,"Hastly: ",x(c.time_to_beat.hastly)):r.a.createElement("p",null)),c.involved_companies&&r.a.createElement("div",{className:"InfoContainer"},r.a.createElement("h5",null,"Involved Companies:"),r.a.createElement("div",{className:"CompanyList"},c.involved_companies.map((function(e){return r.a.createElement(oe,{className:"Company",id:e.company,key:e.id})}))))),c.screenshots&&r.a.createElement("div",{className:"InfoContainer"},r.a.createElement("h5",null,"Screenshots"),r.a.createElement("div",{className:"ScreenshotList"},c.screenshots.map((function(e,a){return r.a.createElement("img",{key:e.id,className:"Screenshot",src:e.url,alt:"screenshot of the game ".concat(c.name),onClick:function(){return function(e){h(e),u(!m)}(a)}})})))),c.videos&&r.a.createElement("div",{className:"InfoContainer"},r.a.createElement("h5",null,"Videos"),r.a.createElement("div",{className:"VideoList"},c.videos.map((function(e){return r.a.createElement("img",{key:e.video_id,src:"https://img.youtube.com/vi/".concat(e.video_id,"/0.jpg"),alt:"thumbnail of video",onClick:function(){return function(e){j(e),g(!f)}(e)},className:"VideoThumb"})})))),c.similar_games&&r.a.createElement("div",{className:"InfoContainer"},r.a.createElement("h5",null,"Similar Games"),r.a.createElement("div",{className:"SimilarGamesList",id:"similarGamesList"},r.a.createElement(se,{key:c,similarGames:c.similar_games})))),r.a.createElement(ce.a,{show:m,onHide:function(){return u(!1)},centered:!0,className:"ModalContainer ModalScreenshots"},r.a.createElement(le.a,{activeIndex:v,onSelect:function(e){h(e)}},c.screenshots&&c.screenshots.map((function(e){return r.a.createElement(le.a.Item,{key:e.id},r.a.createElement("img",{src:e.url,alt:"screenshot of game",className:"ModalImage"}))})))),r.a.createElement(ce.a,{show:f,onHide:function(){return g(!1)},centered:!0,className:"ModalContainer ModalVideos"},r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{className:"Video",key:N.id,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"1",frameBorder:"0",title:N.title,src:"https://www.youtube.com/embed/".concat(N.video_id),poster:"https://img.youtube.com/vi/".concat(N.video_id,"/0.jpg")}))))}),me=(t(165),t(183)),ue=t(184),pe=function(){return r.a.createElement("div",{id:"hero"},r.a.createElement(I.a,{fluid:!0,className:"mx-auto text-secondary",id:"header_container"},r.a.createElement(me.a,null,r.a.createElement(ue.a,{md:6},r.a.createElement("h1",{className:"display-6"},"Find games"),r.a.createElement("p",null,"Search for games using many filters"),r.a.createElement(o.b,{to:"/platforms"},r.a.createElement(J.a,null,"DISCOVER"))))))},de={getTopPosts:function(){var e=Object(G.a)(C.a.mark((function e(){var a,t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat("https://www.reddit.com/","/r/Games/top/.json?count=20"));case 2:return a=e.sent,t=a.data.data.children.filter((function(e){return null!==e.data.secure_media&&"video"===e.data.secure_media.oembed.type})),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},fe=(t(166),function(){var e=Object(n.useState)([]),a=Object(M.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(M.a)(l,2),s=o[0],i=o[1],m=Object(n.useState)({}),u=Object(M.a)(m,2),p=u[0],d=u[1],f=function(e){var a=[];return e.map((function(e){var t=function(e){var a=document.createElement("textarea");return a.innerHTML=e,a.value}(e.data.secure_media_embed.content).substring(68,79);return a.push({id:t,title:e.data.secure_media.oembed.title})})),a},g=function(){var e=Object(G.a)(C.a.mark((function e(){var a,t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.getTopPosts();case 2:a=e.sent,t=f(a),c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"VideoContainer"},r.a.createElement("h1",null,"Videos About Games"),r.a.createElement("div",{className:"RedditVideoListContainer container"},t&&t.map((function(e){return r.a.createElement("div",{key:e.id,className:"RedditVideoContainer"},r.a.createElement("h5",null,e.title),r.a.createElement("img",{src:"https://img.youtube.com/vi/".concat(e.id,"/0.jpg"),alt:"thumbnail of video",onClick:function(){return d(e),void i(!s)},className:"VideoThumb"}))})))),r.a.createElement(ce.a,{show:s,onHide:function(){return i(!1)},centered:!0,className:"ModalContainer ModalVideos"},r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{className:"Video",key:p.id,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"1",frameBorder:"0",title:p.title,src:"https://www.youtube.com/embed/".concat(p.id),poster:"https://img.youtube.com/vi/".concat(p.id,"/0.jpg")}))))}),ge=(t(167),function(){var e=Object(n.useState)([]),a=Object(M.a)(e,2),t=a[0],c=a[1],l=function(){var e=Object(G.a)(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getTopTen();case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),r.a.createElement("div",{className:"TopRatedGamesContainer"},r.a.createElement("h1",null,"Top10 Games with a lot of votes"),r.a.createElement("div",{className:"GameCardContainer container"},t&&t.map((function(e,a){return r.a.createElement(X,{key:e.id,game:e,index:a})}))))}),Ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,null),r.a.createElement(I.a,{className:"contentWrapper"},r.a.createElement(ge,null),r.a.createElement(fe,null)))},be=t(13),ve=t(26),he={signup:function(){var e=Object(G.a)(C.a.mark((function e(a){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post("https://gamelogged.onrender.com/api/users/signup",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},Oe=(t(169),ve.a().shape({name:ve.b().min(2,"Name needs to be at least 3 characters long").max(50,"Name needs to be less than 50 characters long").required("Required"),username:ve.b().min(2,"Username needs to be at least 3 characters").max(50,"Username needs to be less than 50 characters long").required("Required"),email:ve.b().email("Invalid email").required("Required"),password:ve.b().required("Required").min(6,"Password needs to be at least 6 characters long")})),ye=function(){var e=Object(n.useState)(!1),a=Object(M.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(null),s=Object(M.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)(!1),p=Object(M.a)(u,2),d=p[0],f=p[1];return r.a.createElement("div",{className:"form"},null===i?r.a.createElement("div",{className:"form__signup"},r.a.createElement("h1",{className:"form__title"},"Join Gamelogged.com!"),t&&r.a.createElement("div",{className:"form__result"},"There has been an error, please try again later."),r.a.createElement(ne,{isLoading:d},r.a.createElement(be.d,{initialValues:{name:"",username:"",email:"",password:""},validationSchema:Oe,onSubmit:function(){var e=Object(G.a)(C.a.mark((function e(a,t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitting,f(!0),r={name:a.name,email:a.email,username:a.username,password:a.password},e.prev=3,e.next=6,he.signup(r);case 6:n(!1),m("Thanks for joining! Check your email to verify your account. If you can't find the email, please check your spam folder."),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log("error",e.t0),c(!0);case 14:return e.prev=14,f(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,10,14,17]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.isSubmitting;return r.a.createElement(be.c,null,r.a.createElement("label",null,"Name"),r.a.createElement(be.b,{type:"text",name:"name",id:"name"}),r.a.createElement(be.a,{name:"name",component:"div",className:"form__error"}),r.a.createElement("label",null,"Username"),r.a.createElement(be.b,{type:"text",name:"username"}),r.a.createElement(be.a,{name:"username",component:"div",className:"form__error"}),r.a.createElement("label",null,"Email"),r.a.createElement(be.b,{type:"email",name:"email"}),r.a.createElement(be.a,{name:"email",component:"div",className:"form__error"}),r.a.createElement("label",null,"Password"),r.a.createElement(be.b,{type:"password",name:"password"}),r.a.createElement(be.a,{name:"password",component:"div",className:"form__error"}),r.a.createElement(J.a,{variant:"primary",type:"submit",disabled:a},"SignUp"))})))):r.a.createElement("div",{className:"form__result--success"},r.a.createElement("p",null,i),r.a.createElement(o.b,{to:"/"},r.a.createElement(J.a,null,"BACK TO HOME"))))},Ne=(t(170),function(){var e=Object(s.i)().email;return r.a.createElement("div",{className:"verify__success"},r.a.createElement("p",null,"The account linked to email ",e," has been verified."),r.a.createElement(o.b,{to:"/"},r.a.createElement(J.a,null,"BACK TO HOME")))}),je="".concat("http://localhost:3001/","api/users/login"),we={login:function(){var e=Object(G.a)(C.a.mark((function e(a){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post(je,a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},Se=(t(171),ve.a().shape({email:ve.b().email("Invalid email").required("Required"),password:ve.b().required("Required").min(6,"Password needs to be at least 6 characters long")})),_e=function(){var e=Object(n.useState)(null),a=Object(M.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(null),o=Object(M.a)(l,2),m=o[0],u=o[1],p=Object(n.useState)(null),d=Object(M.a)(p,2),f=d[0],g=d[1],E=Object(i.b)(),b=Object(i.c)((function(e){return e.user})),v=window.localStorage.getItem("loggedUser"),h=Object(s.g)();if(Object(n.useEffect)((function(){g(b)}),[b]),Object(n.useEffect)((function(){m&&c(!1)}),[m]),v)return f&&r.a.createElement(s.a,{to:"/profile/".concat(f.id)});var O=function(){h.push("/forgotPassword")};return r.a.createElement("div",{className:"form"},null===m?r.a.createElement("div",{className:"form__signup"},r.a.createElement("h1",{className:"form__title"},"Join Gamelogged.com!"),r.a.createElement(be.d,{initialValues:{name:"",username:"",email:"",password:""},validationSchema:Se,onSubmit:function(){var e=Object(G.a)(C.a.mark((function e(a,t){var n,r,l;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitting,r={email:a.email,password:a.password},e.prev=2,e.next=5,we.login(r);case 5:l=e.sent,E(N(l)),n(!1),u("Successfully logged. See your account here."),window.localStorage.setItem("loggedUser",JSON.stringify(l)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),c(e.t0.response.data);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.isSubmitting;return r.a.createElement(be.c,null,r.a.createElement("label",null,"Email"),r.a.createElement(be.b,{type:"email",name:"email"}),r.a.createElement(be.a,{name:"email",component:"div",className:"form__error"}),r.a.createElement("label",null,"Password"),r.a.createElement(be.b,{type:"password",name:"password"}),r.a.createElement(be.a,{name:"password",component:"div",className:"form__error"}),r.a.createElement(J.a,{variant:"primary",type:"submit",disabled:a},"Login"),r.a.createElement(J.a,{variant:"primary",type:"button",onClick:O},"Forgot password?"))}))):r.a.createElement("div",{className:"form__result--success"},r.a.createElement("p",null,m)),t&&r.a.createElement("div",{className:"form__error--db"},r.a.createElement("p",null,t)))},xe=(t(172),function(){var e=Object(n.useState)(null),a=Object(M.a)(e,2),t=a[0],c=a[1],l=Object(i.c)((function(e){return e.user})),o=window.localStorage.getItem("loggedUser");return Object(n.useEffect)((function(){c(l)}),[l]),o?r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(I.a,{className:"contentWrapper"},r.a.createElement("div",{className:"profileContainer"},t.name))):r.a.createElement(s.a,{to:"/login"})}),ke=(t(173),"".concat("http://localhost:3001/","api/users/ask-password-reset/")),Ce={resetPassword:function(){var e=Object(G.a)(C.a.mark((function e(a){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post(ke,{email:a});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},Ge=ve.a().shape({email:ve.b().email("Invalid email").required("Required")}),Me=function(){var e=Object(n.useState)(""),a=Object(M.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(null),i=Object(M.a)(l,2),m=i[0],u=i[1],p=Object(n.useState)(!1),d=Object(M.a)(p,2),f=d[0],g=d[1],E=Object(s.g)(),b=function(){E.push("/login")};return r.a.createElement("div",{className:"form"},null===m?r.a.createElement("div",{className:"form__passwordReset"},r.a.createElement("h1",{className:"form__title"},"Password reset"),t&&r.a.createElement("div",{className:"form__result"},t),r.a.createElement(ne,{isLoading:f},r.a.createElement(be.d,{initialValues:{email:""},validationSchema:Ge,onSubmit:function(){var e=Object(G.a)(C.a.mark((function e(a,t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitting,g(!0),r=a.email,e.prev=3,e.next=6,Ce.resetPassword(r);case 6:n(!1),u("Inscructions on how to finish your password reset have been sent to ".concat(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),c(e.t0.response.data);case 13:return e.prev=13,g(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.isSubmitting;return r.a.createElement(be.c,null,r.a.createElement("label",null,"Email"),r.a.createElement(be.b,{type:"email",name:"email"}),r.a.createElement(be.a,{name:"email",component:"div",className:"form__error"}),r.a.createElement(J.a,{variant:"primary",type:"submit",disabled:a},"Confirm"),r.a.createElement(J.a,{variant:"primary",type:"button",onClick:b},"Back"))})))):r.a.createElement("div",{className:"form__result--success"},r.a.createElement("p",null,m),r.a.createElement(o.b,{to:"/"},r.a.createElement(J.a,null,"BACK TO HOME"))))},Ie=function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/login",component:Object(s.j)(_e)}),r.a.createElement(s.b,{exact:!0,path:"/verify/:email",component:Object(s.j)(Ne)}),r.a.createElement(s.b,{exact:!0,path:"/forgotPassword",component:Object(s.j)(Me)}),r.a.createElement(s.b,{exact:!0,path:"/signup",component:Object(s.j)(ye)}),r.a.createElement(s.b,{exact:!0,path:"/games/:gameId",component:Object(s.j)(ie)}),r.a.createElement(s.b,{exact:!0,path:"/platforms/:platform",component:Object(s.j)(re)}),r.a.createElement(s.b,{exact:!0,path:"/platforms",component:Object(s.j)(re)}),r.a.createElement(s.b,{exact:!0,path:"/profile/:userid",component:Object(s.j)(xe)}),r.a.createElement(s.b,{exact:!0,path:"/",component:Object(s.j)(Ee)}))},Pe=t(188),Te=t(186),Re=(t(174),t(175),function(){var e=Object(n.useState)(""),a=Object(M.a)(e,2),t=a[0],c=a[1],l=Object(i.b)(),o=Object(s.g)(),m=function(){var e=Object(G.a)(C.a.mark((function e(a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),l({type:"SET_SEARCH",search:t}),o.push("/platforms");case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"search"},r.a.createElement("form",{className:"searchForm",onSubmit:m},r.a.createElement("input",{type:"text",placeholder:"Search",value:t,onChange:function(e){c(e.target.value)}}),r.a.createElement("button",{type:"submit",label:"search"},r.a.createElement(W.a,{icon:["fas","search"],className:"NavItem Search"}))))}),Le=function(){var e=Object(i.c)((function(e){return e.user})),a=Object(i.b)();return Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);a(N(t))}}),[]),r.a.createElement(Pe.a,{fixed:"top",expand:"sm",id:"mainNav"},r.a.createElement(I.a,{className:"navContainer",id:"navContainer"},r.a.createElement("div",{className:"item"},r.a.createElement(Pe.a.Brand,{href:"/"},"gamelogged")),r.a.createElement("div",{id:"searchDiv",className:"item ml-auto"},r.a.createElement(Re,null)),r.a.createElement(Pe.a.Toggle,{"aria-controls":"links-navbar",className:"NavItem navbar-dark"}),r.a.createElement(Pe.a.Collapse,{className:"justify-content-end",id:"links-navbar"},r.a.createElement(Te.a,null,r.a.createElement(Te.a.Item,null,null===e?r.a.createElement(Te.a.Link,{href:"#/login",className:"text-upper nav-item"},r.a.createElement(J.a,{className:"NavItem"},"LOGIN")):r.a.createElement(Te.a.Link,{href:"#/profile/".concat(e.id),className:"text-upper nav-item"},r.a.createElement(J.a,{className:"NavItem"},"My Account"))),r.a.createElement(Te.a.Item,null,null===e?r.a.createElement(Te.a.Link,{href:"#/signup",className:"text-upper nav-item"},r.a.createElement(J.a,{className:"NavItem"},"SIGNUP")):r.a.createElement(Te.a.Link,{className:"text-upper nav-item"},r.a.createElement(J.a,{className:"NavItem",onClick:function(){window.localStorage.removeItem("loggedUser"),window.location.href="/"}},"Logout")))))))},Ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Le,null),r.a.createElement(Ie,null))};l.a.render(r.a.createElement(i.a,{store:S},r.a.createElement(o.a,{basename:"/"},r.a.createElement(s.b,{component:Ae}))),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.78824942.chunk.js.map