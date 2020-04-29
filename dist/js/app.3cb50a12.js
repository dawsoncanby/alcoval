(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);s&&s(e);while(d.length)d.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(l.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},l=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/alcoval/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var s=c;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}}),n("v-content",[n("alco-val")],1)],1)},l=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("add-drink",{on:{"drink-added":function(e){return t.addedDrinks.push(e)}}})],1)],1),n("v-row",[n("v-col",[n("v-card",[n("v-card-title",{staticClass:"justify-center"},[t._v("Compare Drinks")]),n("v-data-table",{attrs:{headers:t.tableFields,items:t.addedDrinks}})],1)],1)],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{staticClass:"pb-0 justify-center"},[t._v("Add Drink")]),n("v-card-text",[n("v-form",[n("v-container",{staticClass:"pt-0"},[n("v-row",[n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{type:"number",min:"0",label:"Price"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),n("v-col",{attrs:{cols:"8"}},[n("v-select",{attrs:{items:t.allTypes,label:"Alcohol Type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{type:"number",min:"0",max:"100",label:"% Alcohol"},model:{value:t.pct,callback:function(e){t.pct=e},expression:"pct"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-select",{attrs:{items:t.availableQuantities,label:"Quantity","no-data-text":"Select an alcohol type first"},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}})],1)],1)],1)],1),null!==t.costOfDrink?n("div",[n("h3",[t._v(t._s(t.totalDrinks)+" drinks")]),n("h3",[t._v("$"+t._s(t.costOfDrink)+" per drink")])]):t._e()],1),n("v-card-actions",[n("v-btn",{attrs:{block:"",color:"primary",disabled:null===t.costOfDrink},on:{click:function(e){return t.drinkAdded()}}},[t._v(" Add ")])],1)],1)},u=[],s=(n("d81d"),n("b0c0"),n("b680"),{data:function(){return{name:null,price:null,type:null,allTypes:[{text:"Beer",value:{name:"beer",pct:5,quantities:[6,12,18,24,30].map((function(t){return{text:"".concat(t," pack"),value:12*t}}))}},{text:"Wine",name:"wine",value:{pct:12,quantities:[{text:"split (375ml)",value:12.68},{text:"standard (750ml)",value:25.36},{text:"magnum (1.5L)",value:50.72},{text:"carlo (4L)",value:135.26}]}},{text:"Liquor",value:{name:"liquor",pct:40,quantities:[{text:"fifth",value:23.7},{text:"litre",value:33.8},{text:"half gallon",value:59.2}]}}],pct:null,quantity:null,availableQuantities:[]}},computed:{totalDrinks:function(){if(null===this.pct||null===this.price||null===this.quantity)return null;var t=28.41306*this.quantity,e=18,n=t*this.pct/100;return(n/e).toFixed(2)},costOfDrink:function(){return null===this.totalDrinks?null:(this.price/this.totalDrinks).toFixed(2)}},watch:{type:function(t){null!==t&&(this.pct=t.pct,this.availableQuantities=t.quantities,this.quantity=null)}},methods:{drinkAdded:function(){this.$emit("drink-added",{name:this.name,price:this.price,totalDrinks:this.totalDrinks,costOfDrink:this.costOfDrink}),this.name=null,this.price=null,this.pct=null,this.quantity=null,this.type=null}}}),p=s,d=n("2877"),v=n("6544"),f=n.n(v),b=n("8336"),m=n("b0af"),h=n("99d9"),y=n("62ad"),k=n("a523"),x=n("4bd4"),D=n("0fd9"),O=n("b974"),V=n("8654"),_=Object(d["a"])(p,c,u,!1,null,null,null),w=_.exports;f()(_,{VBtn:b["a"],VCard:m["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:y["a"],VContainer:k["a"],VForm:x["a"],VRow:D["a"],VSelect:O["a"],VTextField:V["a"]});var C={components:{AddDrink:w},data:function(){return{tableFields:[{text:"Name",value:"name"},{text:"Price",value:"price"},{text:"Total Drinks",value:"totalDrinks"},{text:"Cost of Drink",value:"costOfDrink"}],addedDrinks:[]}}},g=C,j=n("8fea"),q=Object(d["a"])(g,i,o,!1,null,"9c3215e0",null),A=q.exports;f()(q,{VCard:m["a"],VCardTitle:h["c"],VCol:y["a"],VContainer:k["a"],VDataTable:j["a"],VRow:D["a"]});var T={name:"App",components:{AlcoVal:A},data:function(){return{}}},P=T,S=n("7496"),F=n("40dc"),$=n("a75b"),M=Object(d["a"])(P,r,l,!1,null,null,null),Q=M.exports;f()(M,{VApp:S["a"],VAppBar:F["a"],VContent:$["a"]});var B=n("f309");a["a"].use(B["a"]);var E=new B["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:E,render:function(t){return t(Q)}}).$mount("#app")}});
//# sourceMappingURL=app.3cb50a12.js.map