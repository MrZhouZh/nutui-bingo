var Ce=Object.defineProperty,Se=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var ce=(e,t,a)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,X=(e,t)=>{for(var a in t||(t={}))Le.call(t,a)&&ce(e,a,t[a]);if(ue)for(var a of ue(t))Ie.call(t,a)&&ce(e,a,t[a]);return e},ae=(e,t)=>Se(e,xe(t));import{_ as F,i as Ne,n as ie,v as De,a as A}from"./index.73afe794.js";import{d as K,m as l,z as Be,u as Fe,p as R,w as M,r as Z,e as v,g as c,j as Q,l as fe,t as O,q as z,F as D,o as m,a as P,i as H,k as ze,C as he,D as pe,y as Ae,K as Pe,L as He,b as G,Q as B,n as N,B as Re,M as oe,R as Ve,f as ge,h as _e,T as Me,U as Oe,O as qe,V as We}from"./vendor.63588a2d.js";function _a(){import("data:text/javascript,")}const je=K({name:"app",setup(){const e=l("NutUI"),t=Be(),a=Fe(),s=()=>{a.back()},i=R(()=>e.value&&e.value!="/"&&!e.value.includes("-taro"));return M(()=>t,()=>{var r,n;const{hash:u}=window.top.location;!Ne&&t.hash!=u?e.value=((r=t==null?void 0:t.meta)==null?void 0:r.ComponentName)||t.name:e.value=((n=t==null?void 0:t.meta)==null?void 0:n.ComponentName)||t.name},{immediate:!0,deep:!0}),{title:e,isShow:i,goBack:s}}}),Ue={key:0,id:"nav"};function Ge(e,t,a,s,i,u){const r=Z("nut-icon"),n=Z("router-view");return m(),v(D,null,[e.isShow?(m(),v("div",Ue,[c("div",{class:"back",onClick:t[0]||(t[0]=(...o)=>e.goBack&&e.goBack(...o))},[Q(r,{name:"left"})]),fe(" "+O(e.title),1)])):z("",!0),Q(n)],64)}var Ye=F(je,[["render",Ge]]),ye="/nutui-bingo/1.0.1/logo-red.022bc3e5.png";const Xe=K({name:"doc",setup(){return P({nav:ie,versions:De})}}),we=e=>(he("data-v-1fc83c50"),e=e(),pe(),e),Ke={class:"index"},Je=we(()=>c("div",{class:"index-header"},[c("img",{src:ye,alt:"",srcset:""}),c("div",{class:"info"},[c("h1",null,"NutUI-bingo"),c("p",null,"\u57FA\u4E8E NutUI \u7684\u62BD\u5956\u7EC4\u4EF6\u5E93\uFF0C\u52A9\u529B\u8425\u9500\u6D3B\u52A8\u548C\u5C0F\u6E38\u620F\u573A\u666F\u3002")])],-1)),Ze={class:"index-components"},Qe=we(()=>c("li",null,"\u8425\u9500\u7EC4\u4EF6\u5E93",-1)),et={key:0};function tt(e,t,a,s,i,u){const r=Z("router-link"),n=Z("nut-icon");return m(),v("div",Ke,[Je,c("div",Ze,[c("ol",null,[Qe,c("ul",null,[(m(!0),v(D,null,H(e.nav,o=>(m(),v(D,{key:o},[o.show?(m(),v("li",et,[Q(r,{to:o.name.toLowerCase()},{default:ze(()=>[fe(O(o.name)+"\xA0\xA0"+O(o.cName),1)]),_:2},1032,["to"]),Q(n,{size:"14px",color:"#979797",name:"right"})])):z("",!0)],64))),128))])])])])}var st=F(Xe,[["render",tt],["__scopeId","data-v-1fc83c50"]]);const at=K({name:"doc",setup(){return{}}}),nt={class:"index"},rt=Ae('<div class="index-header" data-v-bf810faa><img src="'+ye+'" alt="" srcset="" data-v-bf810faa><div class="info" data-v-bf810faa><h1 data-v-bf810faa>NutUI</h1><p data-v-bf810faa>\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u4F53\u9A8C</p></div></div><div class="index-wxcode" data-v-bf810faa><img src="https://img12.360buyimg.com/imagetools/jfs/t1/174054/4/15968/66201/60d0028dE590f0aa8/752ecef62e4f1cbe.jpg" width="200" data-v-bf810faa></div>',2),it=[rt];function ot(e,t,a,s,i,u){return m(),v("div",nt,it)}var lt=F(at,[["render",ot],["__scopeId","data-v-bf810faa"]]);const ee=[{path:"/",name:"/",component:st}],de=e=>{let t=ie.findIndex(a=>a.name.toLowerCase()===e);if(t!==-1)return ie[t].name},ve={"/src/packages/__VUE/dollmachine/demo.vue":()=>A(()=>import("./demo.91da2263.js"),["1.0.1/demo.91da2263.js","1.0.1/demo.9336afc6.css","1.0.1/vendor.63588a2d.js","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css"]),"/src/packages/__VUE/giftbox/demo.vue":()=>A(()=>import("./demo.34b73450.js"),["1.0.1/demo.34b73450.js","1.0.1/demo.befdef6f.css","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css","1.0.1/vendor.63588a2d.js"]),"/src/packages/__VUE/giftrain/demo.vue":()=>A(()=>import("./demo.01873875.js"),["1.0.1/demo.01873875.js","1.0.1/demo.dadbe05d.css","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css","1.0.1/vendor.63588a2d.js"]),"/src/packages/__VUE/guessgift/demo.vue":()=>A(()=>import("./demo.20256154.js"),["1.0.1/demo.20256154.js","1.0.1/demo.9c75b3e8.css","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css","1.0.1/vendor.63588a2d.js"]),"/src/packages/__VUE/hiteggs/demo.vue":()=>A(()=>import("./demo.ad21732b.js"),["1.0.1/demo.ad21732b.js","1.0.1/demo.8b8652c9.css","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css","1.0.1/vendor.63588a2d.js"]),"/src/packages/__VUE/lottoroll/demo.vue":()=>A(()=>import("./demo.62aecf9f.js"),["1.0.1/demo.62aecf9f.js","1.0.1/demo.6b537055.css","1.0.1/vendor.63588a2d.js","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css"]),"/src/packages/__VUE/luckshake/demo.vue":()=>A(()=>import("./demo.2c0591cf.js"),["1.0.1/demo.2c0591cf.js","1.0.1/demo.24b5aee5.css","1.0.1/vendor.63588a2d.js","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css"]),"/src/packages/__VUE/marquee/demo.vue":()=>A(()=>import("./demo.74d6f2d7.js"),["1.0.1/demo.74d6f2d7.js","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css","1.0.1/vendor.63588a2d.js"]),"/src/packages/__VUE/scratchcard/demo.vue":()=>A(()=>import("./demo.88ab3e1d.js"),["1.0.1/demo.88ab3e1d.js","1.0.1/demo.9790c6ba.css","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css","1.0.1/vendor.63588a2d.js"]),"/src/packages/__VUE/shakedice/demo.vue":()=>A(()=>import("./demo.44d6815c.js"),["1.0.1/demo.44d6815c.js","1.0.1/demo.856dcee8.css","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css","1.0.1/vendor.63588a2d.js"]),"/src/packages/__VUE/squarenine/demo.vue":()=>A(()=>import("./demo.b5c165c5.js"),["1.0.1/demo.b5c165c5.js","1.0.1/demo.0fbe45e8.css","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css","1.0.1/vendor.63588a2d.js"]),"/src/packages/__VUE/temp/demo.vue":()=>A(()=>import("./demo.683e3ca4.js"),["1.0.1/demo.683e3ca4.js","1.0.1/demo.c7a098c5.css","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css","1.0.1/vendor.63588a2d.js"]),"/src/packages/__VUE/turntable/demo.vue":()=>A(()=>import("./demo.f0733c40.js"),["1.0.1/demo.f0733c40.js","1.0.1/index.73afe794.js","1.0.1/index.653879ff.css","1.0.1/vendor.63588a2d.js"])};for(const e in ve){let t=/packages\/__VUE\/(.*)\/demo.vue/.exec(e)[1];ee.push({path:"/"+t,component:ve[e],name:t,meta:{ComponentName:de(t)}}),ee.push({path:"/"+t+"-taro",component:lt,name:t+"-taro",meta:{ComponentName:de(t)}})}ee.push({name:"NotFound",path:"/:path(.*)+",redirect:()=>"/"});const ut=Pe({history:He(),routes:ee});function V(e){const t="nutbig-"+e;return{componentName:t,create:function(a){return a.baseName=e,a.name=t,a.install=s=>{s.component(a.name,a)},K(a)},createDemo:function(a){return a.baseName=e,a.name="demo-"+e,K(a)}}}const{componentName:ct,create:dt}=V("turntable"),vt=dt({props:{width:{required:!0,default:"300px"},height:{required:!0,default:"300px"},prizeList:{required:!0},prizeIndex:{type:Number,default:-1},turnsNumber:{type:Number,default:5},styleOpt:{default:()=>({prizeBgColors:["rgb(255, 231, 149)","rgb(255, 247, 223)","rgb(255, 231, 149)","rgb(255, 247, 223)","rgb(255, 231, 149)","rgb(255, 247, 223)"],borderColor:"#ff9800"})},turnsTime:{default:5},pointerStyle:{default:()=>({width:"80px",height:"80px",backgroundImage:'url("https://img11.360buyimg.com/imagetools/jfs/t1/89512/11/15244/137408/5e6f15edEf57fa3ff/cb57747119b3bf89.png")',backgroundSize:"contain",backgroundRepeat:"no-repeat"})}},emits:["click","start-turns","end-turns"],setup(e,{emit:t}){let{prizeList:a,turnsNumber:s,styleOpt:i,turnsTime:u,pointerStyle:r}=P(e);const n=R(()=>({[ct]:!0}));G(()=>{d()}),M(()=>e.prizeList,(x,h)=>{a=x,d()}),M(()=>e.prizeIndex,(x,h)=>{C(x)});const o=l(!1),f=l(5),$=l(0),p=l(0),_=l(""),b=l(null),S=l(null),E=x=>({transform:`rotate(${360/a.length*x+180/a.length}deg)`}),d=()=>{const x=i,h=a.length,{prizeBgColors:y,borderColor:k}=x,L=S.value,I=b.value,g=L.getContext("2d"),W=L.width=I.clientWidth,j=L.height=I.clientHeight;g.translate(0,j),g.rotate(-90*Math.PI/180);const te=W/2-1,Te=0,se=Math.PI*2/h;g.clearRect(0,0,W,j),g.strokeStyle=k;for(let Y=0;Y<h;Y++){const J=Y*se;a[Y].prizeColor?g.fillStyle=a[Y].prizeColor:g.fillStyle=y[Y],g.beginPath(),g.arc(W*.5,j*.5,te,J,J+se,!1),g.arc(W*.5,j*.5,Te,J+se,J,!0),g.stroke(),g.fill(),g.save()}},T=()=>!(f.value<=0||o.value),w=()=>{if(!T())return!1;o.value=!0,t("start-turns")},C=x=>{const h=u,y=$.value+s*360+360-(180/a.length+360/a.length*x)-$.value%360;$.value=y,p.value=`rotate(${y}deg)`,_.value=`transform ${h}s cubic-bezier(0.250, 0.460, 0.455, 0.995)`,setTimeout(()=>{t("end-turns"),o.value=!1},h*1e3+500)};return{classes:n,turntableDom:b,canvasDom:S,getRotateAngle:E,rotateAngle:p,rotateTransition:_,pointerStyle:r,startTurns:w}}}),mt={id:"canvas",ref:"canvasDom"},ft={class:"prize"},ht={class:"drawTable-name"},pt={class:"drawTable-img"},gt=["src"];function _t(e,t,a,s,i,u){return m(),v("view",{class:N(e.classes),ref:"turntableDom",style:B({width:e.width,height:e.height})},[c("view",{class:"turntable",style:B({transform:e.rotateAngle,transition:e.rotateTransition})},[c("canvas",mt," \u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E ",512),c("view",ft,[(m(!0),v(D,null,H(e.prizeList,(r,n)=>(m(),v("view",{class:"item",style:B(e.getRotateAngle(n)),key:n},[c("view",ht,O(r.prizeName),1),c("view",pt,[c("img",{src:r.prizeImg},null,8,gt)])],4))),128))])],4),c("view",{class:"pointer",style:B(e.pointerStyle),onClick:t[0]||(t[0]=(...r)=>e.startTurns&&e.startTurns(...r))},null,4)],6)}var yt=F(vt,[["render",_t]]);const{componentName:wt,create:bt}=V("marquee"),$t=bt({props:{styleOpt:{default:()=>({itemStyle:{},startStyle:{},bgStyle:{background:"rgb(255, 231, 149)"}})},prizeList:{type:Array,required:!0},prizeIndex:{type:Number||String,default:-1},speed:{type:Number||String,default:150},circle:{type:Number||String,default:30}},emits:["click","start-turns","end-turns"],setup(e,{emit:t}){let{prizeList:a,styleOpt:s}=P(e);const i=R(()=>({[wt]:!0}));G(()=>{}),M(()=>e.prizeList,(w,C)=>{a=w});const u=l(null),r=l(!1),n=l(0),o=l(0),f=l(e.speed),$=l(e.circle),p=l(null),_=s.bgStyle,b=s.itemStyle,S=s.startStyle,E=()=>{o.value+=1;let w=n.value;const C=8;w+=1,w>C-1&&(w=0),n.value=w,d()},d=()=>{o.value>$.value&&e.prizeIndex===n.value?(clearTimeout(p.value),p.value=0,o.value=0,f.value=e.speed,$.value=e.circle,setTimeout(()=>{n.value=e.prizeIndex,t("end-turns"),r.value=!1},500)):(o.value<$.value?f.value-=4:f.value+=20,p.value=setTimeout(E,f.value))};return{classes:i,marqueeDom:u,prizeList:a,index:n,lock:r,startDraw:()=>{r.value||(r.value=!0,t("start-turns"),E())},bgContentStyle:_,bgItemStyle:b,cursorStyle:S}}}),kt=c("view",{class:"bgContent"},null,-1),Et={class:"gift-img"},Tt=["src"],Ct=["innerHTML"];function St(e,t,a,s,i,u){return m(),v("view",{class:N(e.classes),ref:"marqueeDom"},[kt,c("view",{class:"marqueeBg",style:B(e.bgContentStyle)},null,4),c("view",{class:N(["start",{disabledDraw:e.lock}]),onClick:t[0]||(t[0]=(...r)=>e.startDraw&&e.startDraw(...r)),style:B(e.cursorStyle)},null,6),c("ul",null,[(m(!0),v(D,null,H(e.prizeList,(r,n)=>(m(),v("li",{key:"luckmarquee"+n,class:N(["gift-"+(n+1),{active:e.index==n}]),style:B(e.bgItemStyle)},[c("div",Et,[c("img",{src:r.prizeImg},null,8,Tt)]),c("span",{class:"desc",innerHTML:r.prizeName},null,8,Ct)],6))),128))])],2)}var xt=F($t,[["render",St]]);const{componentName:Lt,create:It}=V("squarenine"),Nt=It({props:{prizeList:{type:[Object,Array],default:()=>[]},prizeId:{type:Number,default:5},cardImg:{type:String,default:""}},emits:["click","start","return"],setup(e,{emit:t,slots:a}){const s=P({gridList:[],oldGridList:[],activeState:!0,currIndex:10,drawTitle:"\u5F00\u59CB\u62BD\u5956",drawDesc:"\u8BF7\u7FFB\u724C",isBeginClick:!1,arrPos:[],isDraw:!0,isStartDraw:!1}),i=R(()=>({[Lt]:!0})),u=l(e.prizeId);M(()=>e.prizeList,d=>{n(d)}),M(()=>e.prizeId,d=>{u.value=d});const r=d=>a[d],n=d=>{JSON.stringify(d[4])!="{}"&&d.splice(4,0,{}),s.gridList=d},o=()=>{setTimeout(()=>{[...s.oldGridList]=s.gridList;let d=s.gridList.find(T=>T.id==u.value);for(let T=0;T<s.gridList.length;T++)T==4?s.gridList[T]={}:s.gridList[T]=d})},f=d=>{var T=null;for(var w in s.oldGridList)s.oldGridList[w].id==s.gridList[d].id&&(T=w);s.oldGridList[d]=s.oldGridList.splice(T,1,s.oldGridList[d])[0],[...s.gridList]=s.oldGridList},$=d=>{s.currIndex=d,t("click"),o(),setTimeout(()=>{f(d),s.activeState=!0,s.isDraw=!0,s.drawTitle="\u5F00\u59CB\u62BD\u5956",s.drawDesc="\u8BF7\u7FFB\u724C"},1500)},p=()=>{if(s.isBeginClick)return;t("start"),s.oldGridList.length>0&&([...s.gridList]=s.oldGridList),s.isBeginClick=!0,s.isStartDraw=!1,s.currIndex=10,s.drawTitle="\u8FD4\u56DE",s.drawDesc="",s.activeState=!s.activeState;let d=setTimeout(()=>{clearTimeout(d),b(110),d=setTimeout(()=>{clearTimeout(d),b(0)},1500)},1e3);setTimeout(()=>{s.isStartDraw=!0,s.isDraw=!1,s.isBeginClick=!1},3900)},_=()=>{var d=function(){return Math.random()>.5?-1:1};s.gridList.splice(4,1),s.gridList.sort(d),s.gridList.splice(4,0,{}),E()},b=d=>{s.arrPos=[],_(),s.gridList.map((w,C)=>{const x=d*(1-w.twoArry.x),h=d*(1-w.twoArry.y);s.arrPos.push({x,y:h})}),document.querySelectorAll(".nine-ninegrid__item").forEach((w,C)=>{setTimeout(()=>{w.style.transform="translate("+s.arrPos[C].x+"px,"+s.arrPos[C].y+"px)"},150*C)})},S=()=>{t("return"),s.drawTitle="\u5F00\u59CB\u62BD\u5956",s.drawDesc="\u8BF7\u7FFB\u724C",s.activeState=!0,s.isDraw=!0},E=()=>{s.gridList.map((T,w)=>{let C=w%3,x=parseInt(w/3);T.twoArry={x:C,y:x}})};return G(()=>{n(e.prizeList)}),ae(X({},Re(s)),{classes:i,resResponse:n,isHaveSlots:r,resetData:E,prizeId:u,startFlop:$,startDraw:p,returnDraw:S})}}),Dt=["onClick"],Bt=["src"],Ft={class:"back"},zt=["src"];function At(e,t,a,s,i,u){return m(),v("div",{class:N(e.classes)},[(m(!0),v(D,null,H(e.gridList,(r,n)=>(m(),v("div",{class:N(["nine-ninegrid__item",[{active:e.activeState||n!=4&&n==e.currIndex}]]),key:n},[n==4&&e.isHaveSlots("startBtn")?oe(e.$slots,"startBtn",{key:0}):z("",!0),n==4&&!e.isHaveSlots("startBtn")?(m(),v("div",{key:1,class:"nine-ninegrid__item__center",onClick:t[0]||(t[0]=o=>e.isDraw?e.startDraw():e.returnDraw())},[c("span",null,O(e.drawTitle),1),c("p",null,O(e.drawDesc),1)])):z("",!0),n!=4?(m(),v(D,{key:2},[c("div",{class:"front",onClick:o=>e.isStartDraw?e.startFlop(n):""},[c("img",{src:e.cardImg},null,8,Bt)],8,Dt),c("div",Ft,[c("p",null,O(r.name||""),1),r.pictureUrl?(m(),v("img",{key:0,src:r.pictureUrl},null,8,zt)):z("",!0)])],64)):z("",!0)],2))),128))],2)}var Pt=F(Nt,[["render",At]]);function q(e,t){this.cover=null,this.ctx=null,this.scratchDiv=e.scratchDiv,this.cardDiv=null,this.cHeight=0,this.cWidth=0,this.supportTouch=!1,this.events=[],this.startEventHandler=null,this.moveEventHandler=null,this.endEventHandler=null,this.opt={coverColor:"#C5C5C5",coverImg:"",ratio:.8,callback:null},this.init(e,t)}function Ht(e,t,a){var s=e.getImageData(0,0,this.cWidth,this.cHeight),i=[];be(s.data,function(u,r){var n=s.data[r+3];n===0&&i.push(n)}),i.length/s.data.length>a&&t&&typeof t=="function"&&t()}function be(e,t){return Array.prototype.forEach.call(e,function(a,s){t(a,s)})}function Rt(){var e=document.createElement("canvas");return!!(e.getContext&&e.getContext("2d"))}function Vt(e){e.preventDefault(),this.moveEventHandler=Mt.bind(this),this.cover.addEventListener(this.events[1],this.moveEventHandler,!1),this.endEventHandler=Ot.bind(this),document.addEventListener(this.events[2],this.endEventHandler,!1)}function Mt(e){e.preventDefault();var t=this.supportTouch?e.touches[0]:e,a=this.cover.getBoundingClientRect(),s=document.documentElement.scrollTop||document.body.scrollTop,i=document.documentElement.scrollLeft||document.body.scrollLeft,u=t.pageX-a.left-i,r=t.pageY-a.top-s;this.ctx.beginPath(),this.ctx.fillStyle="#FFFFFF",this.ctx.globalCompositeOperation="destination-out",this.ctx.arc(u,r,10,0,2*Math.PI),this.ctx.fill()}function Ot(e){e.preventDefault(),this.opt.callback&&typeof this.opt.callback=="function"&&Ht.call(this,this.ctx,this.opt.callback,this.opt.ratio),this.cover.removeEventListener(this.events[1],this.moveEventHandler,!1),document.removeEventListener(this.events[2],this.endEventHandler,!1)}q.prototype.createCanvas=function(){if(this.cover=document.createElement("canvas"),console.log(11),this.cover.className="nut-cover",this.cover.height=this.cHeight,this.cover.width=this.cWidth,this.ctx=this.cover.getContext("2d"),this.opt.coverImg){var e=this,t=new Image;t.src=this.opt.coverImg,t.onload=function(){e.ctx.drawImage(t,0,0,e.cover.width,e.cover.height)}}else this.ctx.fillStyle=this.opt.coverColor,this.ctx.fillRect(0,0,this.cover.width,this.cover.height);this.scratchDiv.appendChild(this.cover),this.cardDiv.style.opacity=1};q.prototype.eventDetect=function(){"ontouchstart"in window&&(this.supportTouch=!0),this.events=this.supportTouch?["touchstart","touchmove","touchend"]:["mousedown","mousemove","mouseup"],this.addEvent()};q.prototype.addEvent=function(){this.startEventHandler=Vt.bind(this),this.cover.addEventListener(this.events[0],this.startEventHandler,!1)};q.prototype.clearCover=function(){this.ctx.clearRect(0,0,this.cover.width,this.cover.height),this.cover.removeEventListener(this.events[0],this.startEventHandler),this.cover.removeEventListener(this.events[1],this.moveEventHandler),this.cover.removeEventListener(this.events[2],this.endEventHandler)};q.prototype.init=function(e,t){if(!Rt()){alert("\u5BF9\u4E0D\u8D77\uFF0C\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301Canvas\uFF0C\u65E0\u6CD5\u4F7F\u7528\u672C\u63A7\u4EF6\uFF01");return}var a=this;be(arguments,function(s){if(typeof s=="object")for(var i in s)i==="callback"&&typeof s[i]=="function"?a.opt.callback=s[i].bind(a):i in a.opt&&(a.opt[i]=s[i]);else typeof s=="function"&&(a.opt.callback=s.bind(a))}),!!this.scratchDiv&&(this.cardDiv=this.scratchDiv.querySelector(".scratchcard-content"),!!this.cardDiv&&(this.cHeight=this.cardDiv.clientHeight,this.cWidth=this.cardDiv.clientWidth,this.cardDiv.style.opacity=0,this.createCanvas(),this.eventDetect()))};q.case=function(e,t){return new q(e,t)};var qt=q.case;const{componentName:Wt,create:jt}=V("scratch-card"),Ut=jt({props:{content:{type:String,default:""},height:{type:[String,Number],default:50},width:{type:[String,Number],default:300},coverColor:{type:String,default:"#C5C5C5"},coverImg:{type:String,default:""},fontSize:{type:[String,Number],default:20},backgroundColor:{type:String,default:"#FFFFFF"},ratio:{type:[String,Number],default:.5}},components:{},emits:["click","open"],setup(e,{emit:t}){const a=l(null),s=R(()=>({[Wt]:!0})),i=l(e.content),u=P({luckcard:null}),r=()=>{u.luckcard.clearCover()};return G(()=>{console.log(a.value),Ve(()=>{u.luckcard=qt({scratchDiv:a.value,coverColor:e.coverColor,coverImg:e.coverImg,ratio:Number(e.ratio),callback:function(){r(),t("open",this)}},()=>{})})}),M(()=>e.content,n=>{i.value=n}),ae(X({},u),{result:i,classes:s,scratchcard:a})}}),Gt=["innerHTML"];function Yt(e,t,a,s,i,u){return m(),v("div",{class:N(e.classes),style:B({height:e.height+"px",width:e.width+"px"}),ref:"scratchcard",id:"scratchcard"},[c("div",{class:"scratchcard-content",innerHTML:e.result,style:B({backgroundColor:e.backgroundColor,fontSize:e.fontSize+"px"})},null,12,Gt)],6)}var Xt=F(Ut,[["render",Yt]]);const{componentName:Kt,create:Jt}=V("giftbox"),Zt=Jt({props:{initPrize:{type:Boolean,default:!0}},emits:["start-turns","end-turns"],setup(e,{emit:t}){const a=R(()=>({[Kt]:!0,"gift-box":!0})),s=l(!1),i=o=>{if(s.value)return!1;t("start-turns"),s.value=!0,r()},u=()=>{s.value=!1},r=()=>{let o=!0;document.getElementById("giftAnimate").addEventListener("webkitTransitionEnd",function($){$.target===$.currentTarget&&o&&(o=!1,t("end-turns"),n())})},n=()=>{document.getElementById("giftAnimate").removeEventListener("webkitTransitionEnd",function(){})};return{classes:a,init:u,openActive:s,handleClick:i}}}),Qt={class:"giftbox-wraper"},es=c("view",{class:"gBox gift-box-2"},null,-1);function ts(e,t,a,s,i,u){return m(),v("view",Qt,[c("view",{class:N(e.classes),onClick:t[0]||(t[0]=(...r)=>e.handleClick&&e.handleClick(...r))},[c("view",{id:"giftAnimate",class:N(["gBox gift-box-1",{"gift-box-1-open":e.openActive}])},null,2),es,c("view",{class:N(["gBox gift-box-3",{"gift-box-3-open":e.openActive}])},null,2)],2)])}var ss=F(Zt,[["render",ts]]);const{create:as}=V("lotto-roll"),ns=as({props:{prizeList:{type:Array,default:()=>[]},turnsTime:{type:Number,default:0},turnsNumber:{type:Number,default:0},prizeIndex:{type:Number,default:-1}},emits:["click","start-turns","end-turns"],setup(e,{emit:t}){const a=l(e.prizeIndex);M(()=>e.prizeIndex,(p,_)=>{a.value=p});const s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(p){window.setTimeout(p,1e3/60)},i=e.prizeList,u=l(null),r=l(null),n=l(!1),o=()=>{if(n.value)return!1;setTimeout(()=>{f()},300)},f=()=>{if(t("start-turns"),n.value=!0,u.value){u.value.forEach(p=>{p.isFinished=!0;const _=-p.location;p.el.style.transform="translateY("+_+"px)"});return}u.value=Array.from(document.getElementsByClassName("lotto-roll-wrap")).map((p,_)=>{const b=document.getElementsByClassName("lotto-roll-wrap")[_],S=document.getElementsByClassName("lotto-item")[0].offsetHeight;let E=a.value;return E<0&&(E=Math.floor(Math.random()*i.length)),{el:b.querySelector(".lotto-wrap"),location:E*S,rollTimes:2e3+Math.random()*500+_*500+1e3*e.turnsNumber,height:i.length*S,duration:6e3+_*2e3+e.turnsTime,isFinished:!1}}),s($)},$=p=>{if(!u.value)return!1;r.value==null&&(r.value=p);const _=p-r.value;u.value.forEach(b=>{if(b.isFinished)return;const S=Math.max(b.duration-_,0),E=3,d=Math.pow(S,E)/Math.pow(b.duration,E)*b.rollTimes;let T=-1*Math.floor((d+b.location)%b.height);b.el.style.transform="translateY("+T+"px)",_>b.duration&&(b.isFinished=!0)}),u.value.every(b=>b.isFinished)?(t("end-turns"),n.value=!1,u.value=null,r.value=null):s($)};return{list:i,start:o}}}),rs={class:"nutbig-lotto-roll"},is={class:"lotto-roll-content"},os={class:"lotto-wrap"},ls={key:0,class:"lotto-item-image"},us=["src"],cs={key:1,class:"lotto-item-content"};function ds(e,t,a,s,i,u){return m(),v("div",rs,[(m(),v(D,null,H(3,(r,n)=>c("div",{class:"lotto-roll-wrap",key:n},[c("div",is,[c("div",os,[(m(!0),v(D,null,H([...e.list,...e.list],(o,f)=>(m(),v("div",{class:"lotto-item",key:`'lotto'-${n}-${f}`},[o.imagePath?(m(),v("div",ls,[o.imagePath?(m(),v("img",{key:0,class:"lotto-item-img",src:o.imagePath},null,8,us)):z("",!0)])):z("",!0),o.text?(m(),v("div",cs,O(o.text),1)):z("",!0)]))),128))])])])),64))])}var vs=F(ns,[["render",ds],["__scopeId","data-v-0f18937c"]]);const{componentName:ms,create:fs}=V("hiteggs"),hs=fs({props:{num:{type:Number,default:9},intactImg:{type:String,default:"//img10.360buyimg.com/imagetools/jfs/t1/217651/2/1901/114207/617770f2E74551438/5342f7b949e7bec3.png"},hammer:{type:String,default:"//img13.360buyimg.com/imagetools/jfs/t1/95159/30/17834/9845/61444874E0f463263/924741cae55efb85.png"},splitImg:{type:String,default:"//img13.360buyimg.com/imagetools/jfs/t1/219949/29/1870/75442/61776f7aE5d1a8e07/a8de5321e4e8071e.png"},width:{type:String,default:"80px"},height:{type:String,default:"80px"}},emits:["click"],setup(e,{emit:t}){const a=l(),s=l(!1),i=P([]);return{classes:R(()=>({[ms]:!0})),hitIndex:a,hitEggs:n=>{s.value||(s.value=!0,a.value=n,setTimeout(()=>{i.push(n),a.value=e.num+1,s.value=!1,t("click")},1500))},arr:i}}}),ps=["src","onClick"],gs=["src"],_s=["src"];function ys(e,t,a,s,i,u){return m(),v("div",{class:N(e.classes)},[(m(!0),v(D,null,H(e.num,(r,n)=>(m(),v("div",{key:n,class:"nut-eggs-item",style:B({width:e.width,height:e.height})},[e.arr.indexOf(n)>-1?z("",!0):(m(),v("img",{key:0,class:"intactImg",src:e.intactImg,alt:"",onClick:o=>e.hitEggs(n)},null,8,ps)),e.arr.indexOf(n)>-1?(m(),v("img",{key:1,class:"splitImg",src:e.splitImg,alt:""},null,8,gs)):z("",!0),ge(c("img",{class:"hammer",style:{animation:"shake-rotate 0.5s linear 0s infinite"},src:e.hammer,alt:""},null,8,_s),[[_e,n==e.hitIndex]])],4))),128))],2)}var ws=F(hs,[["render",ys]]);const{componentName:bs,create:$s}=V("giftrain"),ks=$s({props:{width:{type:String,default:"375px"},height:{type:String,default:"500px"},rainWidth:{type:Number,default:50},rainHeight:{type:Number,default:50},rainTime:{type:Number,default:3e4},rainNum:{type:Number,default:4},rainImg:{type:String,default:"//img13.360buyimg.com/imagetools/jfs/t1/199416/7/16633/40527/618c8bebEb03467d8/6af8bde529c5cf61.png"}},emits:["start","gameOver","click"],setup(e,{emit:t}){const a=l(null),s=l(null),i=l(e.rainTime),u=l(e.rainNum),r=l(e.rainImg),n=l([]),o=l(!1),f=l(0),$=P([]);let p=l(),_=l();const b=()=>{S(),n.value=[],T(),p.value=setTimeout(()=>{E()},i.value),d(),t("start")},S=()=>{f.value=0,n.value=[],o.value=!1,clearTimeout(p.value),window.cancelAnimationFrame(_.value),p.value=null},E=()=>{t("gameOver"),o.value=!0,S()},d=()=>{if(o.value)return;let y=a.value,k=y.clientHeight,L=y.clientWidth-e.rainWidth;n.value&&n.value.map(I=>{I.y>k+80&&(I.y=0,I.x=Math.floor(L*Math.random()),$.push(I)),I.y+=I.speed}),_.value=window.requestAnimationFrame(d)},T=()=>{let k=a.value.clientWidth-e.rainWidth,L=setInterval(()=>{let I=P({width:e.rainWidth,height:e.rainHeight,id:new Date().getTime().toString(),img:r.value,hasSelected:!1,y:0,x:Math.floor(k*Math.random()),speed:Math.floor(Math.random()*1+4)});n.value.length<=u.value?n.value.push(I):clearInterval(L)},1e3)},w=(y,k)=>{if(o.value)return;let I=a.value.clientWidth-e.rainWidth;n.value.map(g=>{g.id==k&&(g.hasSelected=!0,g.width=0,$.push(g),t("click"),setTimeout(()=>{g.x=I*Math.random(),g.y=0,g.width=e.rainWidth,g.hasSelected=!1},300))})},C=(y,k,L,I)=>({width:y+"px",height:k+"px",left:L+"px",top:-(k+10)+"px",transform:`translateY(${I}px)`}),x=(y,k)=>({width:y+"px"});return{classes:R(()=>({[bs]:!0})),rainContent:a,rainTime:i,rainNum:u,rainImg:r,init:S,rainList:n,rainOver:E,startRain:b,touchStart:w,rainImgStyle:C,seclected:x,isOver:o,img:s}}}),Es=["onTouchstart","src"];function Ts(e,t,a,s,i,u){return m(),v("div",{class:N(e.classes)},[c("div",{class:"nutbig-giftrain-content",ref:"rainContent",style:B({width:e.width,height:e.height})},[(m(!0),v(D,null,H(e.rainList,(r,n)=>(m(),v("img",{class:N(["nutbig-giftrain-content-rainimg",r.hasSelected?"":"noselected"]),style:B(r.hasSelected?e.seclected(r.width,r.height):e.rainImgStyle(r.width,r.height,r.x,r.y)),onTouchstart:o=>e.touchStart(o,r.id),key:n,ref_for:!0,ref:"img",src:r.img,alt:""},null,46,Es))),128))],4)],2)}var Cs=F(ks,[["render",Ts]]);const{componentName:Ss,create:xs}=V("luckshake"),Ls=xs({props:{isShake:{type:Boolean,default:!1},luckWidth:{type:String,default:"200px"},luckHeight:{type:String,default:"106px"},luckImgTop:{type:String,default:"//img13.360buyimg.com/imagetools/jfs/t1/203344/20/16885/31149/61a07610E2520903c/899a906f039535b0.png"},luckImgBottom:{type:String,default:"//img13.360buyimg.com/imagetools/jfs/t1/208979/10/10371/28087/61a07610Ee1e2f1b4/5b6fa12658906939.png"},clickPoint:{type:String,default:"//img11.360buyimg.com/ling/jfs/t1/104643/13/16899/24402/5e830316E70f93784/3f9e9b0d6e11db14.png"},shakeSpeed:{type:Number,default:110},durationTime:{type:Number,default:1e3},durationAnimation:{type:Number,default:1e3},pointerStyle:{default:()=>({width:"90px",height:"90px"})}},emits:["click-shake","shake-event"],setup(e,{emit:t}){let{isShake:a,luckWidth:s,luckHeight:i,shakeSpeed:u,durationTime:r,durationAnimation:n}=P(e),o=l(!1),f=l({openFlag:!1,shakeSpeed:u,lastTime:0,x:0,y:0,z:0,lastX:0,lastY:0,lastZ:0});G(()=>{_(),E()}),Me(()=>{window.removeEventListener("devicemotion",d,!1),b()});const $=R(()=>({[Ss]:!0})),p=R(()=>({width:s,height:i})),_=()=>{f.value.openFlag=!0},b=()=>{f.value.openFlag=!1},S=()=>{o.value=!0},E=()=>{o.value||(window.DeviceMotionEvent?(a=!0,window.addEventListener("devicemotion",d,!1)):a=!1)},d=C=>{if(!f.value.openFlag)return;let x=C.accelerationIncludingGravity,h=new Date().getTime();if(h-f.value.lastTime>100){let y=h-f.value.lastTime;f.value.lastTime=h,f.value.x=x.x,f.value.y=x.y,f.value.z=x.z,Math.abs(f.value.x+f.value.y+f.value.z-f.value.lastX-f.value.lastY-f.value.lastZ)/y*1e4>f.value.shakeSpeed&&(S(),w(r),setTimeout(()=>{t("shake-event"),o.value=!1,console.log("loading.value",o.value)},n)),f.value.lastX=f.value.x,f.value.lastY=f.value.y,f.value.lastZ=f.value.z}},T=()=>{o.value||(o.value=!0,w(r),setTimeout(()=>{t("click-shake"),o.value=!1},n))},w=C=>{navigator.vibrate&&navigator.vibrate(C)};return{classes:$,styles:p,mobileShake:w,clickShake:T,loading:o}}}),Is=["src"],Ns=["src"],Ds=["src"];function Bs(e,t,a,s,i,u){return m(),v("div",{class:N(e.classes)},[c("div",{class:"shake-box",style:B(e.styles)},[c("div",{class:N(["shake-box-img",[e.loading?"animation":"rockit"]])},[c("img",{class:"img-top",src:e.luckImgTop},null,8,Is),c("img",{class:"img-bottom",src:e.luckImgBottom},null,8,Ns)],2)],4),oe(e.$slots,"shake-num"),e.clickPoint?(m(),v("div",{key:0,class:N(["pointer",[e.loading?"":"clickShake"]]),style:B(e.pointerStyle),onClick:t[0]||(t[0]=(...r)=>e.clickShake&&e.clickShake(...r))},[c("img",{src:e.clickPoint},null,8,Ds)],6)):z("",!0),oe(e.$slots,"default")],2)}var Fs=F(Ls,[["render",Bs]]);const{create:zs}=V("doll-machine"),As=zs({props:{speed:{type:Number,default:20},prizeList:{type:Array,default:()=>[]},turnsTime:{type:Number,default:0},prizeIndex:{type:Number,default:-1}},emits:["click","start-turns","end-turns"],setup(e,{emit:t}){const a=l(e.prizeIndex);M(()=>e.prizeIndex,(g,W)=>{a.value=g});const s=l(null),i=l(null),u=l(null);var r=l(!0);let n=l(0);const o=l(0);let f=e.speed;const $=l(null);G(()=>{n.value=i.value.offsetLeft+55;let g=document.documentElement.clientHeight;s.value.style.height=g-120+"px",o.value=g-300,e.prizeList.length<4?Oe.text("\u672C\u7248\u672C\u76EE\u524D\u53EA\u652F\u6301\u6700\u5C114\u4E2A\u5956\u54C1"):$.value=setInterval(E,f)});const p=l(0),_=l(null),b=l(null),S=l(null),E=()=>{if(!(_&&_.value))return;p.value++;let g=_.value.scrollLeft;S.value.offsetWidth-g<=0&&(p.value=0),_.value.scrollLeft=p.value},d=l(null),T=()=>{t("start-turns"),r.value=!1,d.value.animate({height:o.value-60+"px"},2e3),i.value.animate({top:o.value-20+"px"},2e3),setTimeout(()=>{d.value.style.height=o.value-60+"px",i.value.style.top=o.value-20+"px",k()},1850)},w=l(!1),C=l(""),x=g=>{w.value=!0,C.value=g},h=l([]),y=g=>{h.value.push(g)},k=()=>{if(a.value==-1)return L(),!1;for(var g=0;g<h.value.length;g++){let j=h.value[g].offsetLeft+100;if(j-100<=n.value&&n.value<=j+100&&a.value>-1){let te=e.prizeList[a.value].imagePath;setTimeout(()=>{x(te),L()},0);return}}},L=()=>{d.value.animate({height:"20px"},2e3),i.value.animate({top:"70px"},2e3),t("end-turns"),setTimeout(()=>{d.value.style.height="20px",i.value.style.top="70px",$&&(clearInterval($.value),$.value=null)},2e3)};return{machineBox:s,clawBox:i,activeArea:u,giftBox:_,gift1:b,gift2:S,rope:d,catchFlag:w,winImage:C,lock:r,start:T,setGiftimg:y,init:()=>{w.value=!1,r.value=!0,$.value=setInterval(E,f)}}}}),Ps=e=>(he("data-v-68dcb5a9"),e=e(),pe(),e),Hs={class:"nutbig-doll-machine"},Rs={class:"machineBox",ref:"machineBox"},Vs={class:"machineTop"},Ms={class:"rope",ref:"rope"},Os=Ps(()=>c("img",{src:"https://img14.360buyimg.com/imagetools/jfs/t1/146467/34/22553/4178/61b088afE198f676e/21952e7018d1d141.png",class:"fail"},null,-1)),qs={class:"succ"},Ws=["src"],js={class:"activeArea",ref:"activeArea"},Us={id:"giftBox",ref:"giftBox"},Gs={id:"gift1",ref:"gift1"},Ys=["src"],Xs={id:"gift2",ref:"gift2"},Ks=["src"],Js={class:"game_operate"},Zs={key:1,class:"game_btn game_end"};function Qs(e,t,a,s,i,u){return m(),v("view",Hs,[c("view",Rs,[c("view",Vs,[c("view",Ms,null,512),c("view",{ref:"clawBox",class:N(["clawBox",e.catchFlag?"yes":""])},[Os,c("view",qs,[c("img",{src:e.winImage},null,8,Ws)])],2)]),c("view",js,[c("view",Us,[c("view",Gs,[(m(!0),v(D,null,H(e.prizeList,(r,n)=>(m(),v("img",{key:"machine"+n,ref_for:!0,ref:e.setGiftimg,src:r.imagePath},null,8,Ys))),128))],512),c("view",Xs,[(m(!0),v(D,null,H(e.prizeList,(r,n)=>(m(),v("img",{key:"machine"+n,ref_for:!0,ref:e.setGiftimg,src:r.imagePath},null,8,Ks))),128))],512)],512)],512),c("view",Js,[e.lock?(m(),v("view",{key:0,class:"game_btn game_star",onClick:t[0]||(t[0]=(...r)=>e.start&&e.start(...r))})):z("",!0),e.lock?z("",!0):(m(),v("view",Zs))])],512)])}var ea=F(As,[["render",Qs],["__scopeId","data-v-68dcb5a9"]]);const{componentName:ta,create:sa}=V("shakedice"),aa=sa({props:{time:{type:Number,default:1},speed:{type:Number,default:3e3},id:{type:Number,default:4}},emits:["end"],setup(e,{emit:t}){const a=l(6),s=l(!1);let i=l({});const u=l(!1),r=R(()=>({[ta]:!0}));return M(()=>u.value,o=>{if(o){const f={animation:`rotate ${e.time}s infinite linear`};i.value=X(X({},i.value),f),setTimeout(()=>{u.value=!1,i.value={animation:"none"};let p=[{value:1,x:0,y:0},{value:1,x:0,y:0},{value:2,x:90,y:0},{value:3,x:0,y:-90},{value:4,x:0,y:90},{value:5,x:-90,y:0},{value:6,x:0,y:180}][e.id];setTimeout(()=>{let _=document.querySelector(".nutbig-shakedice");_&&(_.style.transform=`rotateX(${p.x}deg) rotateY(${p.y}deg)`)},0),t("end")},e.speed)}else i.value={}}),{classes:r,dice:a,animationStyle:i,shake:()=>{if(s.value)return!1;s.value=!0,u.value=!0,setTimeout(()=>{s.value=!1},e.speed)}}}});function na(e,t,a,s,i,u){return m(),v("div",{class:N(e.classes),style:B(e.animationStyle)},[(m(!0),v(D,null,H(new Array(e.dice),(r,n)=>(m(),v("div",{class:N(["page","page"+(n+1)]),key:n},[(m(!0),v(D,null,H(new Array(n+1),(o,f)=>(m(),v("span",{key:f}))),128))],2))),128))],6)}var ra=F(aa,[["render",na]]);const{componentName:ia,create:oa}=V("guess-gift"),la=oa({props:{initPrize:{type:Boolean,default:!0},turnNumber:{type:Number,default:20},turnsFrequency:{type:Number,default:500},raiseHeight:{type:Number,default:50},prizeIndex:{type:Number,default:-1}},emits:["start-turns","end-turns"],setup(e,{emit:t}){let a=P([1,2,3]);const s=l(0),i=l(!1),u=l(0),r=l(!0),n=l(!1);let o=P([]),f=l(null);M(()=>n.value,(h,y)=>{o=[]});const $=R(()=>({[ia]:!0,"guess-gift":!0,disabledClick:r.value})),p=()=>{let h=u.value;if(i.value)return!1;h>-1&&(o[h].style.top=0),n.value=!0,i.value=!0;let y=h+1>2?0:h+1,k=o[y];setTimeout(()=>{if(h>-1){let L=k.getBoundingClientRect(),I=f.value.getBoundingClientRect().left||0;E.value.style.left=L.left+L.width/2-I-E.value.offsetWidth/2+"px"}setTimeout(()=>{k.style.top=`-${e.raiseHeight}px`,setTimeout(()=>{k.style.top=0},800),setTimeout(()=>{S()},1300)},400)},100)},_=h=>{let y=JSON.parse(JSON.stringify(h));for(let k=y.length-1;k>0;k--){const L=Math.floor(Math.random()*(k+1));[y[k],y[L]]=[y[L],y[k]]}return y},b=l(null),S=()=>{n.value=!1,clearTimeout(b),b.value=setTimeout(function(){T(),s.value<e.turnNumber?(S(),s.value++):(clearTimeout(b),s.value=0,setTimeout(()=>{i.value=!1,r.value=!1},500))},e.turnsFrequency)},E=l(null);let d=P([]);const T=()=>{let h=C;d=_(C),o.forEach((y,k)=>{let L=h[k].x,I=d[k].x;y.style.left=(L-I)*-1+"px"})},w=h=>{o.push(h)},C=P([]);return G(()=>{o.forEach(h=>{C.push(h.getBoundingClientRect())})}),{bowlList:a,classes:$,goldBeanDom:E,init:S,bowlBox:f,setBowlEle:w,raise:h=>{if(i.value)return!1;if(e.prizeIndex>-1){n.value=!0;let y=d[h],k=f.value.getBoundingClientRect().left||0;setTimeout(()=>{E.value.style.left=y.x+y.width/2-k-E.value.offsetWidth/2+"px"},100)}else n.value=!1;u.value=h,o[h].style.top=`-${e.raiseHeight}px`,setTimeout(()=>{t("end-turns"),r.value=!0},300)},showBean:n,start:p}}}),ua=["onClick"],ca={ref:"goldBeanDom",class:"gold-bean"};function da(e,t,a,s,i,u){return m(),v("view",{class:N(e.classes),ref:"bowlBox"},[(m(!0),v(D,null,H(e.bowlList,(r,n)=>(m(),v("view",{class:"bowl-item",key:"bowl"+r,ref_for:!0,ref:e.setBowlEle,onClick:o=>e.raise(n)},null,8,ua))),128)),ge(c("view",ca,null,512),[[_e,e.showBean]])],2)}var va=F(la,[["render",da]]);function ma(e){[yt,xt,Pt,Xt,ss,vs,ws,Cs,Fs,ea,ra,va].forEach(a=>{a.install?e.use(a):a.name&&e.component(a.name,a)})}var fa={install:ma,version:"1.0.1"};var U,ha="ontouchstart"in window;document.createTouch||(document.createTouch=function(e,t,a,s,i,u,r){return new $e(t,a,{pageX:s,pageY:i,screenX:u,screenY:r,clientX:s-window.pageXOffset,clientY:i-window.pageYOffset},0,0)});document.createTouchList||(document.createTouchList=function(){for(var e=le(),t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length=arguments.length,e});var $e=function(t,a,s,i,u){i=i||0,u=u||0,this.identifier=a,this.target=t,this.clientX=s.clientX+i,this.clientY=s.clientY+u,this.screenX=s.screenX+i,this.screenY=s.screenY+u,this.pageX=s.pageX+i,this.pageY=s.pageY+u};function le(){var e=[];return e.item=function(t){return this[t]||null},e.identifiedTouch=function(t){return this[t+1]||null},e}var ne=!1;function re(e){return function(t){t.type==="mousedown"&&(ne=!0),t.type==="mouseup"&&(ne=!1),!(t.type==="mousemove"&&!ne)&&((t.type==="mousedown"||!U||U&&!U.dispatchEvent)&&(U=t.target),pa(e,t),t.type==="mouseup"&&(U=null))}}function pa(e,t){var a=document.createEvent("Event");a.initEvent(e,!0,!0),a.altKey=t.altKey,a.ctrlKey=t.ctrlKey,a.metaKey=t.metaKey,a.shiftKey=t.shiftKey,a.touches=me(t),a.targetTouches=me(t),a.changedTouches=ke(t),U.dispatchEvent(a)}function ke(e){var t=le();return t.push(new $e(U,1,e,0,0)),t}function me(e){return e.type==="mouseup"?le():ke(e)}function Ee(){window.addEventListener("mousedown",re("touchstart"),!0),window.addEventListener("mousemove",re("touchmove"),!0),window.addEventListener("mouseup",re("touchend"),!0)}Ee.multiTouchOffset=75;ha||new Ee;qe(Ye).use(ut).use(fa).use(We).mount("#app");export{_a as __vite_legacy_guard,V as c};