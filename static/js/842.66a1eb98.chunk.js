"use strict";(self.webpackChunkdigital_estate=self.webpackChunkdigital_estate||[]).push([[842],{20842:(e,n,t)=>{t.r(n),t.d(n,{default:()=>T});var i=t(57035),s=t(5574),o=t(77386),r=t(72791),l=t(55931),a=t(93006),d=t(62861),c=t(45363),x=t(84795),p=t(59969),u=t(25801),h=t(13034),m=t(88588),f=t(81370),j=t(42916),v=t(49710),g=t(94721),w=t(81153),Z=t(4567),b=t(13399),y=t(23418),W=t(82639);const S=v.Z;var C=t(68870),k=t(80184);const _=e=>{const[n,t]=(0,r.useState)(!1),[i,s]=(0,r.useState)("140px"),[o,l]=(0,r.useState)("35px"),[a,d]=(0,r.useState)("20px");(0,r.useEffect)((()=>{const e=()=>{window.innerWidth<=380&&window.innerWidth>=346?(s("125px"),d("19px")):window.innerWidth<=345&&window.innerWidth>=326?(s("115px"),l("32px"),d("18px")):window.innerWidth<=325&&window.innerWidth>=306?(s("105px"),l("30px"),d("17px")):window.innerWidth<=305&&window.innerWidth>=286?(s("95px"),l("28px"),d("16px")):window.innerWidth<=285&&window.innerWidth>=276?(s("85px"),l("26px"),d("15px")):window.innerWidth<=275&&window.innerWidth>=256?(s("75px"),l("24px"),d("14px")):window.innerWidth<=255&&window.innerWidth>=236?(s("65px"),l("23px"),d("13px")):window.innerWidth<=235&&window.innerWidth>=221?(s("55px"),l("22px"),d("12px")):window.innerWidth<=220&&window.innerWidth>=201?(s("45px"),l("21px"),d("11px")):window.innerWidth<=200?(s("35px"),l("20px"),d("10px")):(s("140px"),l("35px"),d("20px"))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const c=e.house,x={},[p,u]=(0,r.useState)({days:0,hours:0,minutes:0,seconds:0});(0,r.useEffect)((()=>{const i=setInterval((()=>{const s=new Date,o=e.endDate-s,r=Math.floor(o/864e5),l=Math.floor(o%864e5/36e5),a=Math.floor(o%36e5/6e4),d=Math.floor(o%6e4/1e3);if(u({days:r,hours:l,minutes:a,seconds:d}),console.log("Seconds",d),r>=0&&l>=0&&a>=0&&d>0?(t(!0),console.log("Disableed",n)):0===r&&0===l&&0===a&&0===d&&(t(!1),console.log("disabled = false",t(!1))),o<0)return clearInterval(i),void u({days:0,hours:0,minutes:0,seconds:0})}),1e3);return()=>{clearInterval(i),console.log("Interval",i),console.log("Clear Interval",clearInterval(i))}}),[e.endDate,n]);return(0,k.jsxs)(C.Z,{sx:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[n&&(0,k.jsx)(C.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",position:"absolute",width:"100%",height:"180px",bottom:i,zIndex:999},children:(0,k.jsxs)(C.Z,{sx:{pb:10,display:"flex",flexWrap:"wrap",gap:"25px",alignItems:"center",justifyContent:"center"},children:[(0,k.jsxs)(C.Z,{className:x.item,sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,k.jsx)(Z.Z,{className:x.number,sx:{fontWeight:"bold",fontSize:o,color:"#1970e3"},children:p.days}),(0,k.jsx)(Z.Z,{className:x.unit,sx:{fontSize:a,fontWeight:550,color:"#fff",textShadow:"black 0.6px 0 0.5px"},children:"Days"})]}),(0,k.jsxs)(C.Z,{className:x.item,sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,k.jsx)(Z.Z,{className:x.number,sx:{fontWeight:"bold",fontSize:o,color:"#1970e3"},children:p.hours}),(0,k.jsx)(Z.Z,{className:x.unit,sx:{fontSize:a,fontWeight:550,color:"#fff",textShadow:"black 0.6px 0 0.5px"},children:"Hours"})]}),(0,k.jsxs)(C.Z,{className:x.item,sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,k.jsx)(Z.Z,{className:x.number,sx:{fontWeight:"bold",fontSize:o,color:"#1970e3"},children:p.minutes}),(0,k.jsx)(Z.Z,{className:x.unit,sx:{fontSize:a,fontWeight:550,color:"#fff",textShadow:"black 0.6px 0 0.5px"},children:"Minutes"})]}),(0,k.jsxs)(C.Z,{className:x.item,sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,k.jsx)(Z.Z,{className:x.number,sx:{fontWeight:"bold",fontSize:o,color:"#1970e3"},children:p.seconds}),(0,k.jsx)(Z.Z,{className:x.unit,sx:{fontSize:a,fontWeight:550,color:"#fff",textShadow:"black 0.6px 0 0.5px"},children:"Seconds"})]})]})}),(0,k.jsx)(C.Z,{sx:{pb:3.5,opacity:n?.6:1,filter:n?"blur(4px)":"blur(0px)",WebkitBackdropFilter:n?"blur(4px)":"blur(0px)"},children:c?(0,k.jsx)(b.Z,{id:c.house_id,image:c.pic,label:c.location,title:c.title,networkProgress:c.total_investments-c.personal_invested_amount,personalProgress:c.personal_invested_amount,missingProgress:c.total_required-c.total_investments,value:c.price,caption:"per month",duration:c.duration,priority:"auto",loading:"lazy",isDisabled:n}):null})]})},I=(0,r.forwardRef)((function(e,n){return(0,k.jsx)(l.Z,{direction:"up",ref:n,...e})}));const z=function(e){var n,t;const[l,d]=(0,r.useState)(!1),[c,x]=(0,r.useState)(!1),[p,u]=(0,r.useState)(""),[h,m]=(0,r.useState)(null),v=()=>{x(!1)},C=()=>{var n;const t=null===(n=e)||void 0===n?void 0:n.filter((e=>{var n,t;const i=(null===e||void 0===e||null===(n=e.title)||void 0===n?void 0:n.toLowerCase().includes(null===p||void 0===p?void 0:p.toLowerCase()))||(null===e||void 0===e||null===(t=e.message)||void 0===t?void 0:t.toLowerCase().includes(null===p||void 0===p?void 0:p.toLowerCase())),s=null===h||(null===e||void 0===e?void 0:e.date)&&new Date(e.date)>=h[0]&&new Date(e.date)<=h[1];return i&&s}));e=t,v()};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(i.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",pt:2.3,pb:.4,px:2,children:[(0,k.jsx)(j.Z,{variant:"h5",sx:{fontSize:"18px"},children:"Listed Properties"}),(0,k.jsxs)(i.Z,{sx:{display:"flex",alignItems:"baseline",cursor:"pointer",justifyContent:"center",gap:"5px"},children:[(0,k.jsx)(y.Z,{onClick:()=>{}}),(0,k.jsx)("button",{onClick:()=>{},style:{border:"none",backgroundColor:"transparent",cursor:"pointer",fontSize:"20px",color:"rgb(52, 71, 103)"},children:W.Z})]})]}),l?(0,k.jsx)(i.Z,{sx:{px:"12px",pt:"15px"},children:(0,k.jsx)(a.Z,{color:"warning",sx:{width:"100%",minWidth:"80px"},id:"outlined-basic",label:"Search...",variant:"outlined",value:p,onChange:e=>u(e.target.value),onKeyPress:e=>{"Enter"===e.key&&C()}})}):null,(0,k.jsxs)(s.Z,{open:c,TransitionComponent:I,keepMounted:!0,onClose:v,"aria-describedby":"alert-dialog-slide-description",maxWidth:"sm",fullWidth:!0,children:[(0,k.jsx)(S,{selectRange:!0,onChange:e=>m(e)}),(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(f.Z,{onClick:v,children:"Cancel"}),(0,k.jsx)(f.Z,{color:"info",variant:"gradient",onClick:C,children:"Filter"})]})]}),(0,k.jsx)(g.Z,{}),(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(w.ZP,{sx:{px:2},container:!0,spacing:3.7,children:Array.isArray(e.houses)&&(null===(n=e)||void 0===n?void 0:n.houses.map(((e,n)=>(0,k.jsx)(w.ZP,{item:!0,xs:12,md:6,xl:3,"data-test-id":"market-property-".concat(n),children:e.comingsoon?(0,k.jsx)(_,{house:e,endDate:new Date("Sep 25, 2023 17:23:00")}):(0,k.jsx)(b.Z,{id:e.house_id,image:e.pic,label:e.location,title:e.title,networkProgress:e.total_investments-e.personal_invested_amount,personalProgress:e.personal_invested_amount,missingProgress:e.total_required-e.total_investments,value:e.price,caption:"per month",duration:e.duration,priority:n<5?"high":"auto",loading:n<5?"eager":"lazy"})},e.house_id))))}),0===(null===(t=e.houses)||void 0===t?void 0:t.length)&&(0,k.jsx)(Z.Z,{variant:"body1",sx:{fontSize:"1rem",lineHeight:1.375,fontWeight:400,letterSpacing:"0em",paddingLeft:"15px",paddingTop:"28px",opacity:1,textTransform:"none",verticalAlign:"unset",color:"#7b809a",margin:0,fontFamily:'"Roboto", "Helvetica", sansSerif',display:"flex",alignItems:"center",pb:2.2},children:"There are no listed properties yet!"})]})]})};var D=t(393),N=t(79562),P=(t(43161),t(47427)),L=t(87099),M=t(11087);const F=(0,r.forwardRef)((function(e,n){return(0,k.jsx)(l.Z,{direction:"up",ref:n,...e})}));const T=function(e){let{fullMap:n}=e;const[t,l]=(0,r.useState)(!1),g=()=>{l(!1)},[w,Z]=(0,r.useState)("230px"),[b,y]=(0,M.lr)();let{error:W,data:S,isLoading:C}=(0,D.aM)(N.O.rpc("get_market"));return W?(0,k.jsx)(L.Z,{error:W.message}):C?(0,k.jsx)(P.Z,{}):(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(i.Z,{children:[t?(0,k.jsx)(a.Z,{color:"warning",sx:{width:"100%",minWidth:"80px",mb:3},id:"outlined-basic",label:"Search...",variant:"outlined"}):"",(0,k.jsxs)(s.Z,{open:t,TransitionComponent:F,keepMounted:!0,onClose:g,"aria-describedby":"alert-dialog-slide-description",maxWidth:"sm",fullWidth:!0,children:[(0,k.jsx)(v.Z,{selectRange:!0}),(0,k.jsxs)(i.Z,{mt:2.5,display:"flex",justifyContent:"space-around",alignhouses:"center",children:[(0,k.jsxs)(i.Z,{maxWidth:"30%",children:[(0,k.jsx)(d.Z,{sx:{mb:.5,overflow:"visible"},variant:"standard",htmlFor:"uncontrolled-native",children:"Order by"}),(0,k.jsx)(c.Z,{children:(0,k.jsxs)(x.Z,{defaultValue:30,inputProps:{name:"order",id:"uncontrolled-native"},children:[(0,k.jsx)("option",{value:"name",children:"Name"}),(0,k.jsx)("option",{value:"date",children:"Date"}),(0,k.jsx)("option",{value:"date",children:"Price"}),(0,k.jsx)("option",{value:"invested_amount",children:"Invested amount"}),(0,k.jsx)("option",{value:"percentage_owned",children:"Percentage owned"})]})})]}),(0,k.jsxs)(p.Z,{children:[(0,k.jsx)(u.Z,{control:(0,k.jsx)(h.Z,{defaultChecked:!0}),label:"6 months contract"}),(0,k.jsx)(u.Z,{control:(0,k.jsx)(h.Z,{defaultChecked:!0}),label:"12 months contract"}),(0,k.jsx)(u.Z,{control:(0,k.jsx)(h.Z,{defaultChecked:!0}),label:"Lifetime contract"})]})]}),(0,k.jsxs)(i.Z,{display:"flex",p:5,pt:3,pb:0,width:"100%",children:[(0,k.jsx)(j.Z,{variant:"overline",children:"From "}),(0,k.jsx)(a.Z,{sx:{mt:-1,mx:2},type:"number"}),(0,k.jsx)(j.Z,{variant:"overline",children:" to "}),(0,k.jsx)(a.Z,{sx:{mt:-1,mx:2},type:"number"})," ",(0,k.jsx)(j.Z,{variant:"overline",children:"USDT"})]}),(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(f.Z,{onClick:g,children:"Cancel"}),(0,k.jsx)(f.Z,{color:"info",variant:"gradient",onClick:g,children:"Filter"})]})]}),(0,k.jsx)(m.Z,{sx:{position:"relative",mb:"55px",zIndex:10,mt:"-0.5vh"},children:(0,k.jsx)(z,{houses:S})}),(0,k.jsx)("br",{})]})})}}}]);
//# sourceMappingURL=842.66a1eb98.chunk.js.map