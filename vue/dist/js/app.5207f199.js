(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],f=0,d=[];f<i.length;f++)o=i[f],s[o]&&d.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("c21b"),s=n.n(a);s.a},"11a7":function(e,t,n){"use strict";var a=n("1f45"),s=n.n(a);s.a},"1f45":function(e,t,n){},"4dd1":function(e,t,n){"use strict";var a=n("57c1"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("034f"),n("2877")),i={},c=Object(o["a"])(i,s,r,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-layout-header",[n("q-toolbar",{attrs:{color:"primary",glossy:"mat"===e.$q.theme,inverted:"ios"===e.$q.theme}},[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"mdi-menu"}}),n("q-toolbar-title",[e._v("SilkRoad")])],1)],1),n("q-layout-drawer",{attrs:{"content-class":"mat"===e.$q.theme?"bg-grey-2":null},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("map-drawer")],1),n("q-page-container",[n("router-view")],1)],1)},d=[],p=n("96a1"),b=n("ce67"),h=n("525b"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[n("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[n("q-list-header",[e._v("Roads")]),e._l(e.roads,function(t){return n("q-item",{key:t[1],attrs:{tag:"label"}},[n("q-item-side",[n("q-checkbox",{model:{value:t[0],callback:function(n){e.$set(t,0,n)},expression:"road[0]"}})],1),n("q-item-main",[n("q-item-tile",{attrs:{label:""}},[e._v(e._s(t[2]))]),n("q-item-tile",{attrs:{sublabel:""}},[e._v(e._s(t[3]))])],1)],1)}),n("q-item-separator"),n("q-list-header",[e._v("Settings")]),e._l(e.settings,function(t,a){return n("q-item",{key:"s"+a},[n("q-field",{attrs:{orientation:"vertical",label:t[2]}},[n("q-input",{staticClass:"xxx",attrs:{suffix:t[3]},model:{value:t[0],callback:function(n){e.$set(t,0,n)},expression:"s[0]"}})],1)],1)}),n("q-item-separator"),n("q-list-header",[e._v("Type of products")]),e._l(e.goods,function(t,a){return n("q-item",{key:"g"+a,attrs:{tag:"label"}},[n("q-item-side",[n("q-checkbox",{model:{value:t[0],callback:function(n){e.$set(t,0,n)},expression:"g[0]"}})],1),n("q-item-main",[n("q-item-tile",{attrs:{label:""}},[e._v(e._s(t[1]))])],1)],1)})],2)],1)},g=[],v=n("b8d9"),w=n("9541"),O=n("506f"),y=n("5d8b"),_=n("79e9"),I={name:"map-drawer",components:{QField:_["a"],QInput:y["a"],QItem:O["a"],QItemTile:w["a"],QItemMain:v["a"],QCheckbox:h["a"]},data:function(){return{roads:[[!1,"silk","New Silk Road","High speed railway"],[!1,"mongolian","Mongolian","alternative silk way"],[!1,"trans_sib","Trans-Siberian","railway"],[!1,"northeast_passage","Northeast passage","Sea route"],[!1,"japan_korea","Producers","exc. Japan, Korea"]],settings:[[1e3,0,"Container capacity","kg"],[1e3,0,"Railway traffic","TEU per day"],[1e3,0,"High-speed railway traffic","TEU per day"],[1e3,0,"Seaborne traffic","TEU per day"],[1e3,0,"Five Element","TEU per day"]],goods:[[!1,"Textiles and furniture"],[!0,"Vegetables, foodstuffs and wood"],[!0,"Stone and glass"],[!0,"Minerals"],[!0,"Metals"],[!0,"Chemicals and plastics"],[!0,"Transport vehicles"],[!0,"Machinery"],[!0,"Electronics"],[!0,"Other"]]}}},x=I,k=(n("11a7"),Object(o["a"])(x,m,g,!1,null,null,null));k.options.__file="LeftDrawer.vue";var q=k.exports,L={name:"LayoutDefault",components:{MapDrawer:q,QCheckbox:h["a"],QToolbarTitle:b["a"]},data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:p["a"]}},j=L,D=(n("4dd1"),Object(o["a"])(j,f,d,!1,null,null,null));D.options.__file="Default.vue";var R=D.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("map-view",{staticClass:"mv"})},E=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"maparea",attrs:{id:"map"}},[n("mapbox",{attrs:{"access-token":"pk.eyJ1IjoidW5xbyIsImEiOiJjam4xOWF2am4zdXFsM3ZwbndiMG8xN2czIn0.NFCL-490i2MfWkmcG5xkWw","map-options":{style:"mapbox://styles/mapbox/satellite-v9",center:[88.486052,37.830348],zoom:2},"scale-control":{show:!0,position:"top-left"},"fullscreen-control":{show:!0,position:"top-left"}},on:{"map-load":e.mapLoaded}})],1)},U=[],S=n("7be2"),T=n.n(S),$=(n("e192"),{name:"map-view",components:{mapbox:T.a},methods:{mapLoaded(e){this.$f.geo.coordinates.on(t=>{console.log({coordinates:t});var n={type:"FeatureCollection",features:[]};t.forEach((e,t)=>{n.features.push({type:"Feature",properties:{},geometry:{coordinates:e,type:"LineString"}})}),e.addSource("line",{type:"geojson",lineMetrics:!0,data:n}),e.addLayer({type:"line",source:"line",id:"line",paint:{"line-color":"red","line-width":3,"line-gradient":["interpolate",["linear"],["line-progress"],0,"blue"]},layout:{"line-cap":"round","line-join":"round"}})})}}}),z=$,P=(n("ff9e"),Object(o["a"])(z,Q,U,!1,null,"3c56d129",null));P.options.__file="MapView.vue";var C=P.exports,B={name:"PageHome",components:{MapView:C}},F=B,H=(n("cccb"),Object(o["a"])(F,M,E,!1,null,null,null));H.options.__file="Home.vue";var N=H.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("p",[e._v("This is an about page")])])},A=[],V={name:"PageAbout"},W=V,X=Object(o["a"])(W,J,A,!1,null,null,null);X.options.__file="About.vue";var G=X.exports;a["default"].use(l["a"]);var Y=new l["a"]({routes:[{path:"/",component:R,children:[{path:"",name:"home",component:N},{path:"/about",name:"about",component:G}]}]}),K=n("c665"),Z=n("a322"),ee=(n("2f62"),n("2659")),te=(n("ac6a"),n("96cf"),n("3040"));console.log(Object({NODE_ENV:"production",BASE_URL:"/",THEME:"ios"}));var ne="";var ae=function(e){return new Promise(function(t){return fetch(ne+e).then(function(e){return e.json().then(t)})})},se={init:function(){var e=Object(te["a"])(regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ae("/hash");case 2:if(t=e.sent,n=this.f.raw,n.hash.v===t){e.next=14;break}return this.f.raw.hash(t),e.next=8,Promise.all([ae("/cities"),ae("/edges")]);case 8:a=e.sent,n.cities(a[0]),n.edges(a[1]),this.a("geo.generate"),e.next=15;break;case 14:this.a("geo.generate");case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getCites:function(){var e=Object(te["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},re={generate:function(){var e=this.f.raw.cities.v,t=[],n=function(t){var n=e[t];return[n.lat,n.lon]};this.f.raw.edges.v.forEach(function(e){var a=n(e[0]),s=n(e[1]);Math.abs(a[0]-s[0])>180&&(a[0]>0?s[0]=180-Math.abs(s[0])+180:s[0]=-180-(180-Math.abs(s[0]))),t.push([a,s])}),this.f.geo.coordinates(t)}},oe=function(){return{init:function(){return{}},api:se,geo:re}},ie=ee["b"],ce=ee["a"],ue=function e(){Object(K["a"])(this,e),Object(Z["a"])(this,"raw",{hash:ce.f.stored,cities:ce.f.stored,edges:ce.f.stored}),Object(Z["a"])(this,"geo",{coordinates:ce.f})},le=new ie(ue,oe),fe=le;a["default"].use(le),le.kit.on(function(e){return e.a("api.init")});n("a4ac"),n("4a91");var de=n("ebc6"),pe=(n("2826"),n("b3f4"),n("e84f")),be=n("482e"),he=n("7051"),me=n("2040"),ge=n("cf12"),ve=n("32a1"),we=n("46a9"),Oe=n("f30c"),ye=n("1180"),_e=n("1e55"),Ie=n("91c8"),xe=n("7d43");a["default"].use(pe["a"],{config:{},components:{QBtn:be["a"],QLayout:he["a"],QLayoutHeader:me["a"],QLayoutDrawer:ge["a"],QPage:ve["a"],QPageContainer:we["a"],QToolbar:Oe["a"],QToolbarTitle:b["a"],QList:ye["a"],QListHeader:_e["a"],QItemSeparator:Ie["a"],QItem:O["a"],QItemSide:xe["a"],QItemMain:v["a"]},directives:{},plugins:{},iconSet:de["a"]}),a["default"].config.productionTip=!1,new a["default"]({router:Y,store:fe,render:function(e){return e(u)}}).$mount("#app")},"57c1":function(e,t,n){},"8f59":function(e,t,n){},"97cb":function(e,t,n){var a={"./bounce.css":"3d49","./bounceIn.css":"0a58","./bounceInDown.css":"a4a9","./bounceInLeft.css":"5965","./bounceInRight.css":"da80","./bounceInUp.css":"b60e","./bounceOut.css":"f39d","./bounceOutDown.css":"a9b5","./bounceOutLeft.css":"06dd","./bounceOutRight.css":"66bc","./bounceOutUp.css":"908f","./fadeIn.css":"1070","./fadeInDown.css":"1625","./fadeInDownBig.css":"9338","./fadeInLeft.css":"0c2e","./fadeInLeftBig.css":"f357","./fadeInRight.css":"ef8f","./fadeInRightBig.css":"747a","./fadeInUp.css":"e7fb","./fadeInUpBig.css":"b8af","./fadeOut.css":"25cd","./fadeOutDown.css":"93ea","./fadeOutDownBig.css":"c888","./fadeOutLeft.css":"5f1d","./fadeOutLeftBig.css":"a555","./fadeOutRight.css":"8934","./fadeOutRightBig.css":"9438","./fadeOutUp.css":"351b","./fadeOutUpBig.css":"23a5","./flash.css":"58a5","./flip.css":"bda0","./flipInX.css":"58b8","./flipInY.css":"5902","./flipOutX.css":"72c5","./flipOutY.css":"b8ad","./headShake.css":"2289","./hinge.css":"085e","./jello.css":"8014","./lightSpeedIn.css":"eb7d","./lightSpeedOut.css":"d043","./pulse.css":"ab98","./rollIn.css":"dc73","./rollOut.css":"592c","./rotateIn.css":"487d","./rotateInDownLeft.css":"bf6b","./rotateInDownRight.css":"7b96","./rotateInUpLeft.css":"89f8","./rotateInUpRight.css":"cb8c","./rotateOut.css":"de65","./rotateOutDownLeft.css":"8134","./rotateOutDownRight.css":"1ea7","./rotateOutUpLeft.css":"63d1","./rotateOutUpRight.css":"fcc3","./rubberBand.css":"aab2","./shake.css":"15f1","./slideInDown.css":"79ea","./slideInLeft.css":"a963","./slideInRight.css":"3b76","./slideInUp.css":"21e3","./slideOutDown.css":"abed","./slideOutLeft.css":"f857","./slideOutRight.css":"0a43","./slideOutUp.css":"5706","./swing.css":"b968","./tada.css":"3391","./wobble.css":"ed5b","./zoomIn.css":"38f3","./zoomInDown.css":"2577","./zoomInLeft.css":"1992","./zoomInRight.css":"ef68","./zoomInUp.css":"97a1","./zoomOut.css":"cc15","./zoomOutDown.css":"2ac6","./zoomOutLeft.css":"1fd4","./zoomOutRight.css":"fa2f","./zoomOutUp.css":"91e5"};function s(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="97cb"},a4ac:function(e,t,n){},c21b:function(e,t,n){},cccb:function(e,t,n){"use strict";var a=n("8f59"),s=n.n(a);s.a},f194:function(e,t,n){},ff9e:function(e,t,n){"use strict";var a=n("f194"),s=n.n(a);s.a}});
//# sourceMappingURL=app.5207f199.js.map