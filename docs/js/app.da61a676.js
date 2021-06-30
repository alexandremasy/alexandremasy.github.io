(function(t){function e(e){for(var i,n,o=e[0],l=e[1],c=e[2],_=0,u=[];_<o.length;_++)n=o[_],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);m&&m(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var m=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],n=a("2877"),o={},l=Object(n["a"])(o,s,r,!1,null,null,null),c=l.exports,m=a("a58a"),_=a.n(m),u=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view"},[t._m(0),a("main",{staticClass:"main"},[t._m(1),t._m(2),t._m(3),a("home-work"),a("navigation-footer")],1)])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view-home__figures"},[a("img",{staticClass:"view-home__figure view-home__top-left",attrs:{src:"statics/images/top-left.svg"}}),a("img",{staticClass:"view-home__figure view-home__top-right",attrs:{src:"statics/images/top-right.svg"}}),a("img",{staticClass:"view-home__figure view-home__bottom-right",attrs:{src:"statics/images/bottom-right.svg"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view-home__logo container"},[a("a",{attrs:{href:"/"}},[a("img",{staticClass:"view-home__glyph",attrs:{src:"/statics/images/logo/alexandremasy/positive.svg",alt:"alexandremasy logo"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view-home__intro container"},[a("p",{staticClass:"view-home__greeting"},[t._v("Hey There 🖖")]),a("h1",{staticClass:"view-home__name"},[t._v("This is Alexandre Masy")]),a("h2",{staticClass:"view-home__title"},[t._v("I'm a UI Architect + Engineer"),a("br"),t._v(" with a knack for the UX")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view-home__tldr container"},[a("div",{staticClass:"view-home__greeting"},[t._v("In a nutshell")]),a("div",{staticClass:"view-home__description"},[a("p",[t._v("I’m a creative who mixes design and technology to create "),a("em",[t._v("beautiful")]),t._v(" ™ things. Combining well-studied user experience with a balanced, harmonious and consistent design from conception to realisation. That's the spicy mix, I'm aiming to foster good products.")]),a("p",[t._v("With more than "),a("a",{staticClass:"link -teal",attrs:{href:"https://linkedin.com/alexandremasy",target:"_blank"}},[t._v("a decade of experience")]),t._v(", I’ve been lucky to join all kind of team, as a lead or not, been rewarded by crafting amazing experiences, while being amazed by all the extraordinary people I had the chance to work with.")]),a("p",[t._v("Currently, as Product Designer for "),a("a",{staticClass:"link -blue",attrs:{href:"https://infinity-mobile.io",target:"_blank"}},[t._v("Infinity-Mobile")]),t._v(" you’ll find me behind products like "),a("a",{staticClass:"link -teal",attrs:{href:"https://sayl.cloud",target:"_blank"}},[t._v("Sayl")]),t._v(" and "),a("a",{staticClass:"link -red",attrs:{href:"https://shopitag.com",target:"_blank"}},[t._v("Shopitag")]),t._v(". On the side, I'm conducting a "),a("a",{staticClass:"link -yellow",attrs:{href:"https://spices.alexandremasy.com",target:"_blank"}},[t._v("research project")]),t._v(" with the aim easing my whole lifecycle around design system.")])])])}],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view-home-work"},[t._m(0),a("div",{staticClass:"view-home-work__content"},[a("div",{staticClass:"container"},t._l(t.children,(function(e,i){return a("home-work-item",t._b({key:i},"home-work-item",e,!1))})),1)])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view-home-work__intro"},[a("div",{staticClass:"container"},[a("div",{staticClass:"view-home-work__subtitle"},[t._v("I'm the one.")]),a("h2",{staticClass:"view-home-work__title"},[t._v("I craft theses babies!")])])])}],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"work-item",class:t.klass},[a("div",{staticClass:"work-item__intro"},[a("div",{staticClass:"work-item__i"},[t._v(t._s(t.i))]),a("div",{staticClass:"work-item__n"},[t._v("•")]),a("div",{staticClass:"work-item__n"},[t._v("03")])]),a("div",{staticClass:"work-item__part work-item__content"},[a("div",{staticClass:"work-item__primary"},[a("div",{staticClass:"work-item__title"},[t._v(t._s(t.title))]),a("div",{staticClass:"work-item__description"},[t._v(t._s(t.description))]),a("a",{staticClass:"work-item__cta link",class:t.color,attrs:{href:t.href}},[t._v(t._s(t.cta))])])]),a("figure",{staticClass:"work-item__part work-item__figure"},[a("img",{staticClass:"work-item__image",attrs:{src:t.figure,alt:t.title}})])])},p=[],w={name:"HomeWorkItem",props:{cta:{type:String},color:{type:String},description:{type:String},figure:{type:String},i:{type:String},href:{type:String},klass:{type:String},title:{type:String}}},y=w,b=Object(n["a"])(y,g,p,!1,null,null,null),k=b.exports,C={name:"HomeWork",components:{HomeWorkItem:k},data:function(){return{children:[{klass:"-v",color:"-teal",title:"Sayl",description:"Branding - Product - Architect",cta:"Wave the flag",href:"https://sayl.cloud",i:"01",figure:"statics/images/projects/sayl.svg"},{klass:"-v",color:"-orange",title:"Shopitag",description:"Branding - Product",cta:"Everyone onboard",href:"https://shopitag.com",i:"02",figure:"statics/images/projects/shopitag.svg"},{klass:"-h",color:"-yellow",title:"Spices",description:"Branding - Product - Architect",cta:"Spice up your life",href:"https://spices.alexandremasy.com",i:"03",figure:"statics/images/projects/spices.svg"}]}}},x=C,S=Object(n["a"])(x,d,f,!1,null,null,null),j=S.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"n-footer"},[a("div",{staticClass:"container"},[t._m(0),t._m(1),a("div",{staticClass:"n-footer__socials"},t._l(t.socials,(function(t,e){return a("a",{key:e,staticClass:"n-footer__social",attrs:{href:t.href,target:"_blank",title:t.name}},[a("img",{attrs:{src:t.icon,alt:t.name}})])})),0),a("div",{staticClass:"n-footer__copyright"},[a("img",{attrs:{src:"/statics/images/logo/alexandremasy/positive.svg",alt:"alexandremasy"}}),a("div",{staticClass:"n-footer__legal"},[t._v("©2006 - "+t._s(t.year)+" Alexandre Masy")])])])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"n-footer__intro"},[a("div",{staticClass:"view-home-work__subtitle"},[t._v("Got some to say?")]),a("h2",{staticClass:"view-home-work__title"},[t._v("Want more?")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"n-footer__email"},[a("label",{staticClass:"n-footer__label"},[t._v("e-mail")]),a("a",{staticClass:"link -teal",attrs:{href:"mailto:hello@alexandremasy.com"}},[t._v("hello@alexandremasy.com")])])}],I={name:"Footer",data:function(){return{socials:[{name:"dribble",href:"https://dribbble.com/alexandremasy",icon:"/statics/images/socials/dribbble.svg"},{name:"github",href:"https://github.com/alexandremasy",icon:"/statics/images/socials/github.svg"},{name:"instagram",href:"https://instagram.com/alexandremasy",icon:"/statics/images/socials/instagram.svg"},{name:"facebook",href:"https://facebook.com/alexandremasycom",icon:"/statics/images/socials/facebook.svg"},{name:"linkedin",href:"https://www.linkedin.com/in/alexandremasy/",icon:"/statics/images/socials/linkedin.svg"}]}},computed:{year:function(){return(new Date).getFullYear()}}},$=I,P=Object(n["a"])($,O,E,!1,null,null,null),H=P.exports,M={name:"Home",components:{HomeWork:j,NavigationFooter:H}},W=M,T=Object(n["a"])(W,h,v,!1,null,null,null),A=T.exports;i["a"].use(u["a"]);var B=[{path:"/",name:"Home",component:A,meta:{bodyClass:"theme-alexandremasy view-home"}}],F=new _.a(B),z=new u["a"]({mode:"history",base:"/",routes:B});z.beforeEach((function(t,e,a){F.guard(t,a)})),F.guard(z.currentRoute,(function(){}));var D=z,J=a("2f62");i["a"].use(J["a"]);var U=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("a1a3");i["a"].config.productionTip=!1,new i["a"]({router:D,store:U,render:function(t){return t(c)}}).$mount("#app")},a1a3:function(t,e,a){}});
//# sourceMappingURL=app.da61a676.js.map