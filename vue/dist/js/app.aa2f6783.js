(function(e){function t(t){for(var s,r,c=t[0],i=t[1],l=t[2],f=0,d=[];f<c.length;f++)r=c[f],n[r]&&d.push(n[r][0]),n[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},o=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("c21b"),n=a.n(s);n.a},"13ce":function(e,t,a){"use strict";var s=a("903b"),n=a.n(s);n.a},"38fe":function(e,t,a){},"4dd1":function(e,t,a){"use strict";var s=a("57c1"),n=a.n(s);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],r=(a("034f"),a("2877")),c={},i=Object(r["a"])(c,n,o,!1,null,null,null);i.options.__file="App.vue";var l=i.exports,u=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-layout-header",[a("q-toolbar",{attrs:{color:"primary",glossy:"mat"===e.$q.theme,inverted:"ios"===e.$q.theme}},[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"mdi-menu"}}),a("q-toolbar-title",[e._v("SilkRoad"),a("div",{staticClass:"subtitle"},[e._v("v"+e._s(e.$q.version))])])],1)],1),a("q-layout-drawer",{attrs:{"content-class":"mat"===e.$q.theme?"bg-grey-2":null},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("map-drawer")],1),a("q-page-container",[a("router-view")],1)],1)},d=[],p=a("96a1"),b=a("ce67"),m=a("525b"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[a("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[a("q-list-header",[e._v("Roads")]),e._l(e.roads,function(t){return a("q-item",{key:t[1],attrs:{tag:"label"}},[a("q-item-side",[a("q-checkbox",{model:{value:t[0],callback:function(a){e.$set(t,0,a)},expression:"road[0]"}})],1),a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[e._v(e._s(t[2]))]),a("q-item-tile",{attrs:{sublabel:""}},[e._v(e._s(t[3]))])],1)],1)}),a("q-item-separator"),a("q-list-header",[e._v("Settings")]),e._l(e.settings,function(t,s){return a("q-item",{key:"s"+s},[a("q-field",{attrs:{orientation:"vertical",label:t[2]}},[a("q-input",{attrs:{suffix:t[3]},model:{value:t[0],callback:function(a){e.$set(t,0,a)},expression:"s[0]"}})],1)],1)}),a("q-item-separator"),a("q-list-header",[e._v("Type of products")]),e._l(e.goods,function(t,s){return a("q-item",{key:"g"+s,attrs:{tag:"label"}},[a("q-item-side",[a("q-checkbox",{model:{value:t[0],callback:function(a){e.$set(t,0,a)},expression:"g[0]"}})],1),a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[e._v(e._s(t[1]))])],1)],1)})],2)],1)},h=[],g=a("b8d9"),w=a("9541"),O=a("506f"),y=a("5d8b"),_=a("79e9"),I={name:"map-drawer",components:{QField:_["a"],QInput:y["a"],QItem:O["a"],QItemTile:w["a"],QItemMain:g["a"],QCheckbox:m["a"]},data:function(){return{roads:[[!1,"silk","New Silk Road","High speed railway"],[!1,"mongolian","Mongolian","alternative silk way"],[!1,"trans_sib","Trans-Siberian","railway"],[!1,"northeast_passage","Northeast passage","Sea route"],[!1,"japan_korea","Producers","exc. Japan, Korea"]],settings:[[1e3,0,"Container capacity","kg"],[1e3,0,"Railway traffic","TEU per day"],[1e3,0,"High-speed railway traffic","TEU per day"],[1e3,0,"Seaborne traffic","TEU per day"],[1e3,0,"Five Element","TEU per day"]],goods:[[!1,"Textiles and furniture"],[!0,"Vegetables, foodstuffs and wood"],[!0,"Stone and glass"],[!0,"Minerals"],[!0,"Metals"],[!0,"Chemicals and plastics"],[!0,"Transport vehicles"],[!0,"Machinery"],[!0,"Electronics"],[!0,"Other"]]}}},q=I,x=(a("13ce"),Object(r["a"])(q,v,h,!1,null,"c6908b02",null));x.options.__file="MapDrawer.vue";var k=x.exports,L={name:"LayoutDefault",components:{MapDrawer:k,QCheckbox:m["a"],QToolbarTitle:b["a"]},data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:p["a"]}},D=L,Q=(a("4dd1"),Object(r["a"])(D,f,d,!1,null,null,null));Q.options.__file="Default.vue";var U=Q.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("map-view",{staticClass:"mv"})},M=[],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"maparea",attrs:{id:"map"}},[a("mapbox",{attrs:{"access-token":"pk.eyJ1IjoidW5xbyIsImEiOiJjam4xOWF2am4zdXFsM3ZwbndiMG8xN2czIn0.NFCL-490i2MfWkmcG5xkWw","map-options":{style:"mapbox://styles/mapbox/satellite-streets-v10",center:[-96,37.8],zoom:3},"scale-control":{show:!0,position:"top-left"},"fullscreen-control":{show:!0,position:"top-left"}},on:{"map-load":e.mapLoaded}})],1)},S=[],T=a("7be2"),E=a.n(T),$=(a("e192"),{name:"map-view",components:{mapbox:E.a},methods:{mapLoaded(e){e.style.stylesheet.layers.forEach(function(t){"symbol"!==t.type&&"line"!==t.type||e.removeLayer(t.id)})}}}),z=$,P=(a("898c"),Object(r["a"])(z,R,S,!1,null,"500fc677",null));P.options.__file="MapView.vue";var B=P.exports,C={name:"PageHome",components:{MapView:B}},F=C,H=(a("cccb"),Object(r["a"])(F,j,M,!1,null,null,null));H.options.__file="Home.vue";var N=H.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("p",[e._v("This is an about page")])])},W=[],A={name:"PageAbout"},V=A,X=Object(r["a"])(V,J,W,!1,null,null,null);X.options.__file="About.vue";var G=X.exports;s["a"].use(u["a"]);var Y=new u["a"]({routes:[{path:"/",component:U,children:[{path:"",name:"home",component:N},{path:"/about",name:"about",component:G}]}]}),K=a("2f62");s["a"].use(K["a"]);var Z=new K["a"].Store({state:{},mutations:{},actions:{}}),ee=(a("a4ac"),a("4a91"),a("ebc6")),te=(a("2826"),a("b3f4"),a("e84f")),ae=a("482e"),se=a("7051"),ne=a("2040"),oe=a("cf12"),re=a("32a1"),ce=a("46a9"),ie=a("f30c"),le=a("1180"),ue=a("1e55"),fe=a("91c8"),de=a("7d43");s["a"].use(te["a"],{config:{},components:{QBtn:ae["a"],QLayout:se["a"],QLayoutHeader:ne["a"],QLayoutDrawer:oe["a"],QPage:re["a"],QPageContainer:ce["a"],QToolbar:ie["a"],QToolbarTitle:b["a"],QList:le["a"],QListHeader:ue["a"],QItemSeparator:fe["a"],QItem:O["a"],QItemSide:de["a"],QItemMain:g["a"]},directives:{},plugins:{},iconSet:ee["a"]}),s["a"].config.productionTip=!1,new s["a"]({router:Y,store:Z,render:function(e){return e(l)}}).$mount("#app")},"57c1":function(e,t,a){},"898c":function(e,t,a){"use strict";var s=a("38fe"),n=a.n(s);n.a},"8f59":function(e,t,a){},"903b":function(e,t,a){},"97cb":function(e,t,a){var s={"./bounce.css":"3d49","./bounceIn.css":"0a58","./bounceInDown.css":"a4a9","./bounceInLeft.css":"5965","./bounceInRight.css":"da80","./bounceInUp.css":"b60e","./bounceOut.css":"f39d","./bounceOutDown.css":"a9b5","./bounceOutLeft.css":"06dd","./bounceOutRight.css":"66bc","./bounceOutUp.css":"908f","./fadeIn.css":"1070","./fadeInDown.css":"1625","./fadeInDownBig.css":"9338","./fadeInLeft.css":"0c2e","./fadeInLeftBig.css":"f357","./fadeInRight.css":"ef8f","./fadeInRightBig.css":"747a","./fadeInUp.css":"e7fb","./fadeInUpBig.css":"b8af","./fadeOut.css":"25cd","./fadeOutDown.css":"93ea","./fadeOutDownBig.css":"c888","./fadeOutLeft.css":"5f1d","./fadeOutLeftBig.css":"a555","./fadeOutRight.css":"8934","./fadeOutRightBig.css":"9438","./fadeOutUp.css":"351b","./fadeOutUpBig.css":"23a5","./flash.css":"58a5","./flip.css":"bda0","./flipInX.css":"58b8","./flipInY.css":"5902","./flipOutX.css":"72c5","./flipOutY.css":"b8ad","./headShake.css":"2289","./hinge.css":"085e","./jello.css":"8014","./lightSpeedIn.css":"eb7d","./lightSpeedOut.css":"d043","./pulse.css":"ab98","./rollIn.css":"dc73","./rollOut.css":"592c","./rotateIn.css":"487d","./rotateInDownLeft.css":"bf6b","./rotateInDownRight.css":"7b96","./rotateInUpLeft.css":"89f8","./rotateInUpRight.css":"cb8c","./rotateOut.css":"de65","./rotateOutDownLeft.css":"8134","./rotateOutDownRight.css":"1ea7","./rotateOutUpLeft.css":"63d1","./rotateOutUpRight.css":"fcc3","./rubberBand.css":"aab2","./shake.css":"15f1","./slideInDown.css":"79ea","./slideInLeft.css":"a963","./slideInRight.css":"3b76","./slideInUp.css":"21e3","./slideOutDown.css":"abed","./slideOutLeft.css":"f857","./slideOutRight.css":"0a43","./slideOutUp.css":"5706","./swing.css":"b968","./tada.css":"3391","./wobble.css":"ed5b","./zoomIn.css":"38f3","./zoomInDown.css":"2577","./zoomInLeft.css":"1992","./zoomInRight.css":"ef68","./zoomInUp.css":"97a1","./zoomOut.css":"cc15","./zoomOutDown.css":"2ac6","./zoomOutLeft.css":"1fd4","./zoomOutRight.css":"fa2f","./zoomOutUp.css":"91e5"};function n(e){var t=o(e);return a(t)}function o(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(s)},n.resolve=o,e.exports=n,n.id="97cb"},a4ac:function(e,t,a){},c21b:function(e,t,a){},cccb:function(e,t,a){"use strict";var s=a("8f59"),n=a.n(s);n.a}});
//# sourceMappingURL=app.aa2f6783.js.map