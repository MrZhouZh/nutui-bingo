import{c as n}from"./mobile.ba3125af.js";import{_ as o}from"./index.078afe06.js";import{r as e,e as a,j as t,C as r,D as c,g as l,o as s}from"./vendor.da7cad2a.js";const{createDemo:u}=n("scratch-card"),d=u({props:{},setup:()=>({opencard:()=>{alert("刮开事件完成")}})}),p=n=>(r("data-v-610ca961"),n=n(),c(),n),m={class:"demo"},i=p((()=>l("h2",null,"基本用法",-1))),v=p((()=>l("h2",null,"内容异步",-1))),g=p((()=>l("h2",null,"刮开层和背景层都支持自定义颜色，奖品信息支持HTML",-1))),h=p((()=>l("h2",null,"刮开层支持图片",-1))),f=p((()=>l("h2",null,"事件回调",-1))),C=p((()=>l("h2",null,"设置刮开比列",-1))),b=p((()=>l("p",null,null,-1)));var j=o(d,[["render",function(n,o,r,c,l,u){const d=e("nutbig-scratch-card");return s(),a("div",m,[i,t(d,{content:"1000万"}),v,t(d,{content:n.text},null,8,["content"]),g,t(d,{coverColor:"#F9CC9D",backgroundColor:"#C3D08B",content:"<em>1000<em><strong>元</strong>"}),h,t(d,{content:"1000万",coverImg:n.coverImage},null,8,["coverImg"]),f,t(d,{content:"1000万",onOpen:n.opencard},null,8,["onOpen"]),C,t(d,{content:"1000万",onOpen:n.opencard,ratio:"0.2"},null,8,["onOpen"]),b])}],["__scopeId","data-v-610ca961"]]);export{j as default};