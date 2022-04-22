import{_ as v,o as b,f as y,bf as C,g as t,ai as r,bg as d,bh as s,b as F,t as $,d as u,X as A,h as D,e as E,i as N,aV as U,B as V}from"./index.2d796948.js";import{T as H}from"./TreeContainer.6c85c361.js";import{a as j,S as c}from"./STableColumn.fc9d260c.js";import"./index.df95a1e9.js";import"./index.bb8d2367.js";import"./pick.c265038a.js";import"./debounce.0f1b9666.js";import"./BaseContainer.9a40ad3b.js";import"./index.e05b1fa4.js";import"./index.afb31f64.js";import"./index.3a954836.js";import"./index.81fe73f4.js";/* empty css              */import"./index.89bb5101.js";const x={key:1},O={props:{tableConfig:{type:Object,default:{}},treeConfig:{type:Object,default:{}},siderWidth:{type:[Number,String],default:300},title:{type:String},hideHead:{type:Boolean}},emits:["treeSelect","tableChange"],setup(l,{emit:p}){const f=({selectedKeys:e,e:m})=>{p("treeSelect",{selectedKeys:e,e:m})},g=e=>{p("tableChange",e)};return(e,m)=>(b(),y(H,{"sider-width":l.siderWidth,"hide-head":l.hideHead,class:"tree-table-container",treeConfig:l.treeConfig,onTreeSelect:f},C({title:t(()=>[e.$slots.title?r(e.$slots,"title",{key:0},void 0,!0):(b(),F("span",x,$(l.title),1))]),default:t(()=>[r(e.$slots,"mainHead",{},void 0,!0),u(j,{config:l.tableConfig,"in-container":"",onChange:g},C({default:t(()=>[r(e.$slots,"default",{},void 0,!0)]),_:2},[e.$slots.customFilterIcon?{name:"customFilterIcon",fn:t(({filtered:n,column:a})=>[r(e.$slots,"customFilterIcon",d(s({filtered:n,column:a})),void 0,!0)])}:void 0,e.$slots.customFilterDropdown?{name:"customFilterDropdown",fn:t(({setSelectedKeys:n,selectedKeys:a,confirm:o,clearFilters:i,column:h})=>[r(e.$slots,"customFilterDropdown",d(s({setSelectedKeys:n,selectedKeys:a,confirm:o,clearFilters:i,column:h})),void 0,!0)])}:void 0,e.$slots.bodyCell?{name:"bodyCell",fn:t(({text:n,record:a,index:o,column:i})=>[r(e.$slots,"bodyCell",d(s({text:n,record:a,index:o,column:i})),void 0,!0)])}:void 0,e.$slots.headerCell?{name:"headerCell",fn:t(({title:n,column:a})=>[r(e.$slots,"headerCell",d(s({title:n,column:a})),void 0,!0)])}:void 0,e.$slots.expandedRowRender?{name:"expandedRowRender",fn:t(({record:n,index:a,indent:o,expanded:i})=>[r(e.$slots,"expandedRowRender",d(s({record:n,index:a,indent:o,expanded:i})),void 0,!0)])}:void 0,e.$slots.emptyText?{name:"emptyText",fn:t(()=>[r(e.$slots,"emptyText",{},void 0,!0)])}:void 0]),1032,["config"])]),_:2},[e.$slots.treeIcon?{name:"icon",fn:t(({key:n,selected:a})=>[r(e.$slots,"treeIcon",d(s({key:n,selected:a})),void 0,!0)])}:void 0,e.$slots.switcherIcon?{name:"switcherIcon",fn:t(({active:n,checked:a,expanded:o,loading:i,selected:h,halfChecked:T,title:w,key:k,children:S,dataRef:_,data:I,defaultIcon:R,switcherCls:B})=>[r(e.$slots,"switcherIcon",d(s({active:n,checked:a,expanded:o,loading:i,selected:h,halfChecked:T,title:w,key:k,children:S,dataRef:_,data:I,defaultIcon:R,switcherCls:B})),void 0,!0)])}:void 0,e.$slots.extra?{name:"extra",fn:t(()=>[r(e.$slots,"extra",{},void 0,!0)])}:void 0]),1032,["sider-width","hide-head","treeConfig"]))}};var P=v(O,[["__scopeId","data-v-19b9eeab"],["__file","/home/runner/work/vite-vue3-antdv-starter/vite-vue3-antdv-starter/src/libs/container/tree-table/TreeTableContainer.vue"]]);const W={class:"padding-left-lg"},z=N("Add User"),X={setup(l){const p={defaultExpandAll:!0,treeData:[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{key:"0-0-1-0",title:"sss"}]}]}]},f=A({dataSource:[],loading:!0});return(()=>{U.get("/api/users").then(e=>{f.dataSource=e.data,f.loading=!1})})(),(e,m)=>{const n=V;return b(),y(P,{"tree-config":p,"table-config":E(f),title:"Tree Table Container"},{expandedRowRender:t(({record:a})=>[D("p",W,$(a.name),1)]),extra:t(()=>[u(n,{type:"primary"},{default:t(()=>[z]),_:1})]),default:t(()=>[u(c,{title:"Username",prop:"name"}),u(c,{title:"Email",prop:"email"}),u(c,{title:"Avatar",prop:"avatar"}),u(c,{title:"CreatedAt",prop:"createdAt",fixed:"right"})]),_:1},8,["table-config"])}}};var oe=v(X,[["__file","/home/runner/work/vite-vue3-antdv-starter/vite-vue3-antdv-starter/src/pages/example/ExampleTreeTableContainer.vue"]]);export{oe as default};