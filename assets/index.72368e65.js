import{j as ia,k as N,U as p,l as z,p as ma,m as i,d as a,ac as ha,$ as xa,a$ as oa,be as Sa,aE as M,c as Ta}from"./index.25ba8339.js";import{R as Aa,C as Pa,T as ca}from"./index.362920dc.js";import{F as Ba}from"./index.8640a124.js";import{j as $a}from"./pick.a4ca3649.js";var x=ia(Aa),b=ia(Pa),Ea=ca.TabPane,ja=function(){return{prefixCls:String,title:p.any,extra:p.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:p.any,tabList:{type:Array},tabBarExtraContent:p.any,activeTabKey:String,defaultActiveTabKey:String,cover:p.any,onTabChange:{type:Function}}},Da=N({name:"ACard",mixins:[Ba],props:ja(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(t,g){var e=g.slots,y=z("card",t),v=y.prefixCls,_=y.direction,c=y.size,T=function(o){var d=o.map(function(u,C){return oa(u)&&!Sa(u)||!oa(u)?a("li",{style:{width:"".concat(100/o.length,"%")},key:"action-".concat(C)},[a("span",null,[u])]):null});return d},A=function(o){var d;(d=t.onTabChange)===null||d===void 0||d.call(t,o)},$=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d;return o.forEach(function(u){u&&$a(u.type)&&u.type.__ANT_CARD_GRID&&(d=!0)}),d};return function(){var r,o,d,u,C,E,j,D,O=t.headStyle,da=O===void 0?{}:O,F=t.bodyStyle,G=F===void 0?{}:F,V=t.loading,U=t.bordered,ua=U===void 0?!0:U,W=t.type,m=t.tabList,sa=t.hoverable,q=t.activeTabKey,va=t.defaultActiveTabKey,H=t.tabBarExtraContent,J=H===void 0?(d=e.tabBarExtraContent)===null||d===void 0?void 0:d.call(e):H,Q=t.title,K=Q===void 0?(u=e.title)===null||u===void 0?void 0:u.call(e):Q,X=t.extra,k=X===void 0?(C=e.extra)===null||C===void 0?void 0:C.call(e):X,Y=t.actions,R=Y===void 0?(E=e.actions)===null||E===void 0?void 0:E.call(e):Y,Z=t.cover,aa=Z===void 0?(j=e.cover)===null||j===void 0?void 0:j.call(e):Z,P=ma((D=e.default)===null||D===void 0?void 0:D.call(e)),n=v.value,fa=(r={},i(r,"".concat(n),!0),i(r,"".concat(n,"-loading"),V),i(r,"".concat(n,"-bordered"),ua),i(r,"".concat(n,"-hoverable"),!!sa),i(r,"".concat(n,"-contain-grid"),$(P)),i(r,"".concat(n,"-contain-tabs"),m&&m.length),i(r,"".concat(n,"-").concat(c.value),c.value),i(r,"".concat(n,"-type-").concat(W),!!W),i(r,"".concat(n,"-rtl"),_.value==="rtl"),r),ba=G.padding===0||G.padding==="0px"?{padding:"24px"}:void 0,f=a("div",{class:"".concat(n,"-loading-block")},null),pa=a("div",{class:"".concat(n,"-loading-content"),style:ba},[a(x,{gutter:8},{default:function(){return[a(b,{span:22},{default:function(){return[f]}})]}}),a(x,{gutter:8},{default:function(){return[a(b,{span:8},{default:function(){return[f]}}),a(b,{span:15},{default:function(){return[f]}})]}}),a(x,{gutter:8},{default:function(){return[a(b,{span:6},{default:function(){return[f]}}),a(b,{span:18},{default:function(){return[f]}})]}}),a(x,{gutter:8},{default:function(){return[a(b,{span:13},{default:function(){return[f]}}),a(b,{span:9},{default:function(){return[f]}})]}}),a(x,{gutter:8},{default:function(){return[a(b,{span:4},{default:function(){return[f]}}),a(b,{span:3},{default:function(){return[f]}}),a(b,{span:16},{default:function(){return[f]}})]}})]),ta=q!==void 0,ya=(o={size:"large"},i(o,ta?"activeKey":"defaultActiveKey",ta?q:va),i(o,"onChange",A),i(o,"class","".concat(n,"-head-tabs")),o),ea,na=m&&m.length?a(ca,ya,{default:function(){return[m.map(function(l){var ra=l.tab,B=l.slots,la=B==null?void 0:B.tab;ha(!B,"Card","tabList slots is deprecated, Please use `customTab` instead.");var I=ra!==void 0?ra:e[la]?e[la](l):null;return I=xa(e,"customTab",l,function(){return[I]}),a(Ea,{tab:I,key:l.key,disabled:l.disabled},null)})]},rightExtra:J?function(){return J}:null}):null;(K||k||na)&&(ea=a("div",{class:"".concat(n,"-head"),style:da},[a("div",{class:"".concat(n,"-head-wrapper")},[K&&a("div",{class:"".concat(n,"-head-title")},[K]),k&&a("div",{class:"".concat(n,"-extra")},[k])]),na]));var ga=aa?a("div",{class:"".concat(n,"-cover")},[aa]):null,_a=a("div",{class:"".concat(n,"-body"),style:G},[V?pa:P]),Ca=R&&R.length?a("ul",{class:"".concat(n,"-actions")},[T(R)]):null;return a("div",{class:fa,ref:"cardContainerRef"},[ea,ga,P&&P.length?_a:null,Ca])}}}),S=Da,Ga=function(){return{prefixCls:String,title:p.any,description:p.any,avatar:p.any}},w=N({name:"ACardMeta",props:Ga(),slots:["title","description","avatar"],setup:function(t,g){var e=g.slots,y=z("card",t),v=y.prefixCls;return function(){var _=i({},"".concat(v.value,"-meta"),!0),c=M(e,t,"avatar"),T=M(e,t,"title"),A=M(e,t,"description"),$=c?a("div",{class:"".concat(v.value,"-meta-avatar")},[c]):null,r=T?a("div",{class:"".concat(v.value,"-meta-title")},[T]):null,o=A?a("div",{class:"".concat(v.value,"-meta-description")},[A]):null,d=r||o?a("div",{class:"".concat(v.value,"-meta-detail")},[r,o]):null;return a("div",{class:_},[$,d])}}}),Ka=function(){return{prefixCls:String,hoverable:{type:Boolean,default:!0}}},L=N({name:"ACardGrid",__ANT_CARD_GRID:!0,props:Ka(),setup:function(t,g){var e=g.slots,y=z("card",t),v=y.prefixCls,_=Ta(function(){var c;return c={},i(c,"".concat(v.value,"-grid"),!0),i(c,"".concat(v.value,"-grid-hoverable"),t.hoverable),c});return function(){var c;return a("div",{class:_.value},[(c=e.default)===null||c===void 0?void 0:c.call(e)])}}});S.Meta=w;S.Grid=L;S.install=function(s){return s.component(S.name,S),s.component(w.name,w),s.component(L.name,L),s};export{S as C};
