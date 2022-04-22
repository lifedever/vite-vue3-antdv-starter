import{aV as C,_ as $,X as x,o as _,f as g,bf as b,g as a,ai as l,b as T,t as h,d as p,bg as m,bh as c,e as E,$ as v,h as y,i as S,B as w}from"./index.2d796948.js";import{B as R}from"./BaseContainer.9a40ad3b.js";import{a as B,S as D}from"./STableColumn.fc9d260c.js";import"./index.e05b1fa4.js";import"./index.afb31f64.js";import"./index.bb8d2367.js";import"./pick.c265038a.js";import"./index.3a954836.js";import"./index.81fe73f4.js";/* empty css              */import"./index.df95a1e9.js";import"./debounce.0f1b9666.js";import"./index.89bb5101.js";const F=r=>{let i={};return Object.keys(r).forEach(o=>{r[o]!==void 0&&r[o]!==""&&r[o]!==null&&(i[o]=r[o])}),i},A=({url:r,params:i})=>{if(console.log("loadTableData, params: ",i,"url:",r),!!r)return new Promise((o,e)=>{let d,n;C.get(r,F({params:i})).then(t=>{t instanceof Array?(d=!1,n=t):(n=t.content,d={pageSize:t.size,total:t.totalElements,current:t.number+1}),o({data:t,dataSource:n,pagination:d})}).catch(e)})};const k={key:1},I={props:{url:{type:String,required:!0},title:{type:String}},setup(r){const i=r,o=x({loading:!0,dataSource:[],pagination:!0});return A({url:i.url}).then((e,d,n)=>{o.loading=!1,o.dataSource=d,o.pagination=n}),(e,d)=>(_(),g(R,{class:"extra-table-container"},b({title:a(()=>[e.$slots.title?l(e.$slots,"title",{key:0},void 0,!0):(_(),T("span",k,h(r.title),1))]),default:a(()=>[p(B,{config:E(o),"in-container":""},b({default:a(()=>[l(e.$slots,"default",{},void 0,!0)]),_:2},[e.$slots.customFilterIcon?{name:"customFilterIcon",fn:a(({filtered:n,column:t})=>[l(e.$slots,"customFilterIcon",m(c({filtered:n,column:t})),void 0,!0)])}:void 0,e.$slots.customFilterDropdown?{name:"customFilterDropdown",fn:a(({setSelectedKeys:n,selectedKeys:t,confirm:s,clearFilters:u,column:f})=>[l(e.$slots,"customFilterDropdown",m(c({setSelectedKeys:n,selectedKeys:t,confirm:s,clearFilters:u,column:f})),void 0,!0)])}:void 0,e.$slots.bodyCell?{name:"bodyCell",fn:a(({text:n,record:t,index:s,column:u})=>[l(e.$slots,"bodyCell",m(c({text:n,record:t,index:s,column:u})),void 0,!0)])}:void 0,e.$slots.headerCell?{name:"headerCell",fn:a(({title:n,column:t})=>[l(e.$slots,"headerCell",m(c({title:n,column:t})),void 0,!0)])}:void 0,e.$slots.expandedRowRender?{name:"expandedRowRender",fn:a(({record:n,index:t,indent:s,expanded:u})=>[l(e.$slots,"expandedRowRender",m(c({record:n,index:t,indent:s,expanded:u})),void 0,!0)])}:void 0,e.$slots.emptyText?{name:"emptyText",fn:a(()=>[l(e.$slots,"emptyText",{},void 0,!0)])}:void 0]),1032,["config"])]),_:2},[e.$slots.extra?{name:"extra",fn:a(()=>[l(e.$slots,"extra",{},void 0,!0)])}:void 0]),1024))}};var V=$(I,[["__scopeId","data-v-45f65628"],["__file","/home/runner/work/vite-vue3-antdv-starter/vite-vue3-antdv-starter/src/libs/container/table/ExtraTableContainer.vue"]]);const z={name:"ExampleExtraTableContainer",components:{STableColumn:D,ExtraTableContainer:V}},N={class:"padding-left-lg"},P=S("Add User");function O(r,i,o,e,d,n){const t=w,s=v("s-table-column"),u=v("extra-table-container");return _(),g(u,{url:"/api/users",title:"Extra Table Container"},{expandedRowRender:a(({record:f})=>[y("p",N,h(f.name),1)]),extra:a(()=>[p(t,{type:"primary"},{default:a(()=>[P]),_:1})]),default:a(()=>[p(s,{title:"Username",prop:"name"}),p(s,{title:"Email",prop:"email"}),p(s,{title:"Avatar",prop:"avatar"}),p(s,{title:"CreatedAt",prop:"createdAt",fixed:"right"})]),_:1})}var j=$(z,[["render",O],["__file","/home/runner/work/vite-vue3-antdv-starter/vite-vue3-antdv-starter/src/pages/example/extra/ExampleExtraTableContainer.vue"]]);export{j as default};