import{d as u,a5 as me,k as $,l as Q,r as N,A as ge,c as Le,m as O,n as A,q as Ne,Y as Ae,z as Be,I as te,a6 as Pe,Q as ze,E as ne,H as ae,U as x,S as re,aJ as He,_ as ye,aK as je,aL as $e,X as Ke,aM as Ue,o as m,f as b,g as p,h as w,e as C,b as E,aN as le,F as T,aO as oe,aP as ie,i as V,t as I,au as We,$ as Fe,a1 as Ee,aQ as Te}from"./index.25ba8339.js";import{A as Ie}from"./index.1368bf53.js";/* empty css               *//* empty css              */import{P as he,Q as De,_ as Re,V as Ve,M as Qe}from"./index.8640a124.js";import{R as se}from"./RightOutlined.7ae01a57.js";import{L as ue}from"./LeftOutlined.abf01621.js";import"./useSize.54c8e031.js";var Je=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},Xe=Je,Ye={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},qe=Ye;function ce(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),o.forEach(function(i){Ge(t,i,a[i])})}return t}function Ge(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var J=function(e,a){var o=ce({},e,a.attrs);return u(me,ce({},o,{icon:qe}),null)};J.displayName="BarsOutlined";J.inheritAttrs=!1;var Ze=J,et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},tt=et;function de(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),o.forEach(function(i){nt(t,i,a[i])})}return t}function nt(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var X=function(e,a){var o=de({},e,a.attrs);return u(me,de({},o,{icon:tt}),null)};X.displayName="MenuUnfoldOutlined";X.inheritAttrs=!1;var fe=X,Y=function(){return{prefixCls:String,hasSider:{type:Boolean,default:void 0},tagName:String}};function K(t){var e=t.suffixCls,a=t.tagName,o=t.name;return function(i){var s=$({name:o,props:Y(),setup:function(d,l){var r=l.slots,f=Q(e,d),y=f.prefixCls;return function(){var M=A(A({},d),{prefixCls:y.value,tagName:a});return u(i,M,r)}}});return s}}var q=$({props:Y(),setup:function(e,a){var o=a.slots;return function(){return u(e.tagName,{class:e.prefixCls},o)}}}),at=$({props:Y(),setup:function(e,a){var o=a.slots,i=Q("",e),s=i.direction,g=N([]),d={addSider:function(f){g.value=[].concat(Ne(g.value),[f])},removeSider:function(f){g.value=g.value.filter(function(y){return y!==f})}};ge(he,d);var l=Le(function(){var r,f=e.prefixCls,y=e.hasSider;return r={},O(r,"".concat(f),!0),O(r,"".concat(f,"-has-sider"),typeof y=="boolean"?y:g.value.length>0),O(r,"".concat(f,"-rtl"),s.value==="rtl"),r});return function(){var r=e.tagName;return u(r,{class:l.value},o)}}}),rt=K({suffixCls:"layout",tagName:"section",name:"ALayout"})(at),z=K({suffixCls:"layout-header",tagName:"header",name:"ALayoutHeader"})(q),D=K({suffixCls:"layout-footer",tagName:"footer",name:"ALayoutFooter"})(q),H=K({suffixCls:"layout-content",tagName:"main",name:"ALayoutContent"})(q),R=rt,ve={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1999.98px"},lt=function(){return{prefixCls:String,collapsible:{type:Boolean,default:void 0},collapsed:{type:Boolean,default:void 0},defaultCollapsed:{type:Boolean,default:void 0},reverseArrow:{type:Boolean,default:void 0},zeroWidthTriggerStyle:{type:Object,default:void 0},trigger:x.any,width:x.oneOfType([x.number,x.string]),collapsedWidth:x.oneOfType([x.number,x.string]),breakpoint:x.oneOf(re("xs","sm","md","lg","xl","xxl","xxxl")),theme:x.oneOf(re("light","dark")).def("dark"),onBreakpoint:Function,onCollapse:Function}},ot=function(){var t=0;return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t+=1,"".concat(e).concat(t)}}(),j=$({name:"ALayoutSider",inheritAttrs:!1,props:Ae(lt(),{collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80}),emits:["breakpoint","update:collapsed","collapse"],setup:function(e,a){var o=a.emit,i=a.attrs,s=a.slots,g=Q("layout-sider",e),d=g.prefixCls,l=Be(he,void 0),r=N(!!(e.collapsed!==void 0?e.collapsed:e.defaultCollapsed)),f=N(!1);te(function(){return e.collapsed},function(){r.value=!!e.collapsed}),ge(De,r);var y=function(v,k){e.collapsed===void 0&&(r.value=v),o("update:collapsed",v),o("collapse",v,k)},M=N(function(n){f.value=n.matches,o("breakpoint",n.matches),r.value!==n.matches&&y(n.matches,"responsive")}),c;function _(n){return M.value(n)}var B=ot("ant-sider-");l&&l.addSider(B),Pe(function(){te(function(){return e.breakpoint},function(){try{c==null||c.removeEventListener("change",_)}catch{c==null||c.removeListener(_)}if(typeof window!="undefined"){var n=window,v=n.matchMedia;if(v&&e.breakpoint&&e.breakpoint in ve){c=v("(max-width: ".concat(ve[e.breakpoint],")"));try{c.addEventListener("change",_)}catch{c.addListener(_)}_(c)}}},{immediate:!0})}),ze(function(){try{c==null||c.removeEventListener("change",_)}catch{c==null||c.removeListener(_)}l&&l.removeSider(B)});var L=function(){y(!r.value,"clickTrigger")};return function(){var n,v,k,h=d.value,G=e.collapsedWidth,_e=e.width,U=e.reverseArrow,xe=e.zeroWidthTriggerStyle,Z=e.trigger,P=Z===void 0?(v=s.trigger)===null||v===void 0?void 0:v.call(s):Z,ee=e.collapsible,be=e.theme,W=r.value?G:_e,S=Xe(W)?"".concat(W,"px"):String(W),F=parseFloat(String(G||0))===0?u("span",{onClick:L,class:ne("".concat(h,"-zero-width-trigger"),"".concat(h,"-zero-width-trigger-").concat(U?"right":"left")),style:xe},[P||u(Ze,null,null)]):null,Ce={expanded:U?u(se,null,null):u(ue,null,null),collapsed:U?u(ue,null,null):u(se,null,null)},ke=r.value?"collapsed":"expanded",Oe=Ce[ke],Se=P!==null?F||u("div",{class:"".concat(h,"-trigger"),onClick:L,style:{width:S}},[P||Oe]):null,we=A(A({},i.style),{flex:"0 0 ".concat(S),maxWidth:S,minWidth:S,width:S}),Me=ne(h,"".concat(h,"-").concat(be),(n={},O(n,"".concat(h,"-collapsed"),!!r.value),O(n,"".concat(h,"-has-trigger"),ee&&P!==null&&!F),O(n,"".concat(h,"-below"),!!f.value),O(n,"".concat(h,"-zero-width"),parseFloat(S)===0),n),i.class);return u("aside",ae(ae({},i),{},{class:Me,style:we}),[u("div",{class:"".concat(h,"-children")},[(k=s.default)===null||k===void 0?void 0:k.call(s)]),ee||f.value&&F?Se:null])}}}),it=z,st=j,ut=H,ct=A(R,{Header:z,Footer:D,Content:H,Sider:j,install:function(e){return e.component(R.name,R),e.component(z.name,z),e.component(D.name,D),e.component(j.name,j),e.component(H.name,H),e}});const pe=t=>{t.url&&He.push(t.url)},dt=w("div",{class:"logo"},null,-1),ft={class:"menu-container"},vt={class:"padding-right"},pt=V("U "),mt={props:{menus:{type:Array,default:[]}},setup(t){const e=t,a=je(),o=$e(),i=N(!1),s=Ke({selectedKeys:[],openKeys:[],allMenus:[]}),g=(d,l)=>{d.forEach(r=>{r.parent=l,s.allMenus.push(r),r.children&&g(r.children,r)})};return g(e.menus),Ue(()=>{if(s.allMenus.length>0&&!s.allMenus.find(l=>l.key===a.name)){console.warn("\u8DEF\u7531\u672A\u5339\u914D\u5230\u83DC\u5355: ",a.name);const l=s.allMenus.find(r=>!r.children||r.children.length===0);o.push(l.url).then(r=>{s.selectedKeys=[a.name]})}const d=s.allMenus.find(l=>l.alias&&l.alias.indexOf(a.name)>-1)||s.allMenus.find(l=>l.key===a.name);d&&(s.selectedKeys=[d.key],d.parent&&(s.openKeys=[d.parent.key]))}),(d,l)=>{const r=Re,f=Ve,y=Qe,M=st,c=Ie,_=it,B=ut,L=ct;return m(),b(L,{class:"admin-layout"},{default:p(()=>[u(M,{collapsed:i.value,"onUpdate:collapsed":l[2]||(l[2]=n=>i.value=n),trigger:null,collapsible:""},{default:p(()=>[dt,w("div",ft,[u(y,{openKeys:C(s).openKeys,"onUpdate:openKeys":l[0]||(l[0]=n=>C(s).openKeys=n),selectedKeys:C(s).selectedKeys,"onUpdate:selectedKeys":l[1]||(l[1]=n=>C(s).selectedKeys=n),theme:"dark",mode:"inline"},{default:p(()=>[(m(!0),E(T,null,le(t.menus,n=>(m(),E(T,{key:n.key},[n.children&&n.children.length>0?(m(),b(f,{key:n.key},{icon:p(()=>[n.icon?(m(),b(oe(n.icon),{key:0})):ie("v-if",!0)]),title:p(()=>[V(I(n.title),1)]),default:p(()=>[(m(!0),E(T,null,le(n.children,v=>(m(),b(r,{key:v.key,onClick:k=>C(pe)(v)},{default:p(()=>[V(I(v.title),1)]),_:2},1032,["onClick"]))),128))]),_:2},1024)):(m(),b(r,{key:n.key,onClick:v=>C(pe)(n)},{default:p(()=>[n.icon?(m(),b(oe(n.icon),{key:0})):ie("v-if",!0),w("span",null,I(n.title),1)]),_:2},1032,["onClick"]))],64))),128))]),_:1},8,["openKeys","selectedKeys"])])]),_:1},8,["collapsed"]),u(L,null,{default:p(()=>[u(_,null,{default:p(()=>[w("div",null,[i.value?(m(),b(C(fe),{key:0,style:{"font-size":"18px"},class:"trigger",onClick:l[3]||(l[3]=()=>i.value=!i.value)})):(m(),b(C(fe),{key:1,style:{"font-size":"18px"},class:"trigger",onClick:l[4]||(l[4]=()=>i.value=!i.value)}))]),w("div",vt,[w("a",{href:"#",onClick:l[5]||(l[5]=We(()=>{},["prevent"]))},[u(c,{style:{color:"#f56a00","background-color":"#fde3cf"}},{default:p(()=>[pt]),_:1})])])]),_:1}),u(B,null,{default:p(()=>[Fe(d.$slots,"default")]),_:3})]),_:3})]),_:3})}}};var gt=ye(mt,[["__file","/home/runner/work/vite-vue3-antdv-starter/vite-vue3-antdv-starter/src/libs/layout/AdminLayout.vue"]]);const yt={setup(t){return(e,a)=>{const o=Ee("router-view");return m(),b(gt,{menus:C(Te)},{default:p(()=>[u(o)]),_:1},8,["menus"])}}};var wt=ye(yt,[["__file","/home/runner/work/vite-vue3-antdv-starter/vite-vue3-antdv-starter/src/pages/example/Example.vue"]]);export{wt as default};
