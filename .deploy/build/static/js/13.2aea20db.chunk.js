(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[13],{712:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return dn}));var r,c,o=t(15),a=t(16),i=t(26),s=t(0),u=t.n(s),l=t(27),b=t(56),j=t(12),d=t.n(j),x=t(68),p=t(51),O=t(42),f=t(686);!function(e){e[e.MAINNET=43114]="MAINNET",e[e.TESTNET=97]="TESTNET"}(c||(c={})),f.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});r={},Object(O.a)(r,c.MAINNET,"https://cchain.explorer.avax.network/"),Object(O.a)(r,c.TESTNET,"https://testnet.bscscan.com"),new f.a(3e15);var m=new f.a(31536e3),h=t(61),v=t(3);function k(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return k=function(){return e},e}var g=v.e.div(k()),y=t(178),T=t(110),A=t(133),S=t(132),w=t(36),C=t(678),I=t(109);function z(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"]);return z=function(){return e},e}var q=v.e.div(z(),(function(e){return e.theme.colors.primary})),N=function(e){var n=e.onClick,t=e.expanded;return Object(o.jsxs)(q,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(o.jsx)(p.A,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(o.jsx)(p.k,{}):Object(o.jsx)(p.j,{})]})};N.defaultProps={expanded:!1};var P=N,B=function(){return Object(o.jsx)(p.z,{variant:"success",outline:!0,startIcon:Object(o.jsx)(p.C,{}),children:"No Fee"})},E=function(){return Object(o.jsx)(p.z,{variant:"secondary",outline:!0,startIcon:Object(o.jsx)(p.C,{}),children:"Core"})},F=function(){return Object(o.jsx)(p.z,{variant:"textSubtle",outline:!0,startIcon:Object(o.jsx)(p.l,{}),children:"Community"})},D=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,r=e.tokenAddresses,c="BNB"===t?"ETH":n[43114],o=r[43114];return"".concat(c,"/").concat(o)};function L(){var e=Object(h.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"]);return L=function(){return e},e}function M(){var e=Object(h.a)(["\n  margin-top: 24px;\n"]);return M=function(){return e},e}var Q=v.e.div(M()),R=Object(v.e)(p.q)(L(),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary})),H=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,r=e.removed,c=e.totalValueFormated,a=e.lpLabel,i=e.quoteTokenAdresses,s=e.quoteTokenSymbol,u=e.tokenAddresses,l=Object(C.a)(),b=D({quoteTokenAdresses:i,quoteTokenSymbol:s,tokenAddresses:u});return Object(o.jsxs)(Q,{children:[Object(o.jsxs)(p.m,{justifyContent:"space-between",children:[Object(o.jsxs)(p.A,{children:[l(316,"Stake"),":"]}),Object(o.jsx)(R,{href:n?"https://exchange.truereflect.finance/#/swap":"https://exchange.truereflect.finance/#/add/".concat(b),children:a})]}),!r&&Object(o.jsxs)(p.m,{justifyContent:"space-between",children:[Object(o.jsxs)(p.A,{children:[l(23,"Total Liquidity"),":"]}),Object(o.jsx)(p.A,{children:c})]}),Object(o.jsx)(p.m,{justifyContent:"flex-start",children:Object(o.jsx)(p.p,{external:!0,href:t,bold:!1,children:l(356222,"View on Explorer")})})]})},G=t(4),V=t.n(G),X=t(14),W=t(690),K=t(689),U=(t(685),t(683)),J=t(684),$=function(e){var n=Object(b.b)(),t=Object(x.m)().account,r=Object(J.c)();return{onStake:Object(s.useCallback)(function(){var c=Object(X.a)(V.a.mark((function c(o){var a;return V.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(U.i)(r,e,o,t);case 2:a=c.sent,n(Object(S.a)(t)),console.info(a);case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),[t,n,r,e])}},_=function(e){var n=Object(b.b)(),t=Object(x.m)().account,r=Object(J.c)();return{onUnstake:Object(s.useCallback)(function(){var c=Object(X.a)(V.a.mark((function c(o){var a;return V.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(U.j)(r,e,o,t);case 2:a=c.sent,n(Object(S.a)(t)),console.info(a);case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),[t,n,r,e])}},Y=t(679);function Z(){var e=Object(h.a)(["\n  height: ","px;\n  width: ","px;\n"]);return Z=function(){return e},e}var ee=v.e.div(Z(),(function(e){return e.size}),(function(e){return e.size})),ne=function(e){var n,t=e.size,r=void 0===t?"md":t,c=Object(s.useContext)(v.a).spacing;switch(r){case"lg":n=c[6];break;case"sm":n=c[2];break;case"md":default:n=c[4]}return Object(o.jsx)(ee,{size:n})};function te(){var e=Object(h.a)(["\n  flex: 1;\n  text-align: center;\n"]);return te=function(){return e},e}function re(){var e=Object(h.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return re=function(){return e},e}var ce=v.e.div(re(),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),oe=v.e.div(te()),ae=function(e){var n=e.children,t=u.a.Children.toArray(n).length;return Object(o.jsx)(ce,{children:u.a.Children.map(n,(function(e,n){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(oe,{children:e}),n<t-1&&Object(o.jsx)(ne,{})]})}))})};function ie(){var e=Object(h.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return ie=function(){return e},e}function se(){var e=Object(h.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return se=function(){return e},e}var ue=v.e.div(se(),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),le=v.e.input(ie(),(function(e){return e.theme.colors.primary})),be=function(e){var n=e.endAdornment,t=e.onChange,r=e.placeholder,c=e.startAdornment,a=e.value;return Object(o.jsxs)(ue,{children:[!!c&&c,Object(o.jsx)(le,{placeholder:r,value:a,onChange:t}),!!n&&n]})};function je(){var e=Object(h.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return je=function(){return e},e}function de(){var e=Object(h.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return de=function(){return e},e}function xe(){var e=Object(h.a)(["\n  align-items: center;\n  display: flex;\n"]);return xe=function(){return e},e}function pe(){var e=Object(h.a)(["\n  width: ","px;\n"]);return pe=function(){return e},e}function Oe(){var e=Object(h.a)([""]);return Oe=function(){return e},e}var fe=v.e.div(Oe()),me=v.e.div(pe(),(function(e){return e.theme.spacing[3]})),he=v.e.div(xe()),ve=v.e.div(de(),(function(e){return e.theme.colors.primary})),ke=v.e.span(je(),(function(e){return e.theme.colors.primary})),ge=function(e){var n=e.max,t=e.symbol,r=e.onChange,c=e.onSelectMax,a=e.value,i=e.depositFeeBP,s=void 0===i?0:i,u=Object(C.a)();return Object(o.jsxs)(fe,{children:[Object(o.jsxs)(ve,{children:[n.toLocaleString()," ",t," ",u(526,"Available")]}),Object(o.jsx)(be,{endAdornment:Object(o.jsxs)(he,{children:[Object(o.jsx)(ke,{children:t}),Object(o.jsx)(me,{}),Object(o.jsx)("div",{children:Object(o.jsx)(p.d,{size:"sm",onClick:c,children:u(452,"Max")})})]}),onChange:r,placeholder:"0",value:a}),s>0?Object(o.jsxs)(ve,{children:[u(10001,"Deposit Fee"),": ",new f.a(a||0).times(s/1e4).toString()," ",t]}):null]})},ye=function(e){var n=e.max,t=e.onConfirm,r=e.onDismiss,c=e.tokenName,a=void 0===c?"":c,u=e.depositFeeBP,l=void 0===u?0:u,b=Object(s.useState)(""),j=Object(i.a)(b,2),d=j[0],x=j[1],O=Object(s.useState)(!1),f=Object(i.a)(O,2),m=f[0],h=f[1],v=Object(C.a)(),k=Object(s.useMemo)((function(){return Object(Y.b)(n)}),[n]),g=Object(s.useCallback)((function(e){x(e.currentTarget.value)}),[x]),y=Object(s.useCallback)((function(){x(k)}),[k,x]),T="TRT"===a?Math.pow(10,12):1;return Object(o.jsxs)(p.u,{title:"".concat(v(316,"Deposit")," ").concat(a," Tokens"),onDismiss:r,children:[Object(o.jsx)(ge,{value:d,onSelectMax:y,onChange:g,max:k,symbol:a,depositFeeBP:l}),Object(o.jsxs)(ae,{children:[Object(o.jsx)(p.d,{variant:"secondary",onClick:r,children:v(462,"Cancel")}),Object(o.jsx)(p.d,{disabled:m,onClick:Object(X.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,t((Number(d)/T).toString());case 3:h(!1),r();case 5:case"end":return e.stop()}}),e)}))),children:m?v(488,"Pending Confirmation"):v(464,"Confirm")})]})]})},Te=function(e){var n=e.onConfirm,t=e.onDismiss,r=e.max,c=e.tokenName,a=void 0===c?"":c,u=Object(s.useState)(""),l=Object(i.a)(u,2),b=l[0],j=l[1],d=Object(s.useState)(!1),x=Object(i.a)(d,2),O=x[0],f=x[1],m=Object(C.a)(),h=Object(s.useMemo)((function(){return Object(Y.b)(r)}),[r]),v=Object(s.useCallback)((function(e){j(e.currentTarget.value)}),[j]),k=Object(s.useCallback)((function(){j(h)}),[h,j]),g="TRT"===a?Math.pow(10,12):1;return Object(o.jsxs)(p.u,{title:"Withdraw ".concat(a),onDismiss:t,children:[Object(o.jsx)(ge,{onSelectMax:k,onChange:v,value:b,max:h,symbol:a}),Object(o.jsxs)(ae,{children:[Object(o.jsx)(p.d,{variant:"secondary",onClick:t,children:m(462,"Cancel")}),Object(o.jsx)(p.d,{disabled:O,onClick:Object(X.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,n((Number(b)/g).toString());case 3:f(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:O?m(488,"Pending Confirmation"):m(464,"Confirm")})]})]})};function Ae(){var e=Object(h.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);return Ae=function(){return e},e}var Se=v.e.div(Ae()),we=function(e){var n=e.stakedBalance,t=e.tokenBalance,r=e.tokenName,c=e.pid,a=e.depositFeeBP,s=Object(C.a)(),u=$(c).onStake,l=_(c).onUnstake,b=Object(Y.a)(n),j=b.toLocaleString(),d=Object(p.F)(Object(o.jsx)(ye,{max:t,onConfirm:u,tokenName:r,depositFeeBP:a})),x=Object(i.a)(d,1)[0],O=Object(p.F)(Object(o.jsx)(Te,{max:n,onConfirm:l,tokenName:r})),f=Object(i.a)(O,1)[0];return Object(o.jsxs)(p.m,{justifyContent:"space-between",alignItems:"center",children:[Object(o.jsx)(p.n,{color:0===b?"textDisabled":"text",children:j}),0===b?Object(o.jsx)(p.d,{onClick:x,children:s(999,"Stake")}):Object(o.jsxs)(Se,{children:[Object(o.jsx)(p.o,{variant:"tertiary",onClick:f,mr:"6px",children:Object(o.jsx)(p.t,{color:"primary"})}),Object(o.jsx)(p.o,{variant:"tertiary",onClick:x,children:Object(o.jsx)(p.a,{color:"primary"})})]})]})},Ce=t(688);function Ie(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);return Ie=function(){return e},e}var ze=v.e.div(Ie()),qe=function(e){var n=e.earnings,t=e.pid,r=Object(C.a)(),c=Object(s.useState)(!1),a=Object(i.a)(c,2),u=a[0],l=a[1],b=Object(Ce.b)(t).onReward,j=$(t).onStake,d=Object(Y.a)(n),x=d.toLocaleString();return Object(o.jsxs)(p.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(o.jsx)(p.n,{color:0===d?"textDisabled":"text",children:x}),Object(o.jsxs)(ze,{children:[12===t?Object(o.jsx)(p.d,{disabled:0===d||u,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(X.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,j(d.toString());case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:r(999,"Compound")}):null,Object(o.jsx)(p.d,{disabled:0===d||u,onClick:Object(X.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,b();case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:r(999,"Harvest")})]})]})};function Ne(){var e=Object(h.a)(["\n  padding-top: 16px;\n"]);return Ne=function(){return e},e}var Pe=v.e.div(Ne()),Be=function(e){var n=e.farm,t=e.ethereum,r=e.account,c=Object(C.a)(),a=Object(s.useState)(!1),u=Object(i.a)(a,2),l=u[0],j=u[1],d=Object(T.a)(n.pid),O=d.pid,f=d.lpAddresses,m=d.tokenAddresses,h=d.isTokenOnly,v=d.depositFeeBP,k=Object(T.b)(O),g=k.allowance,y=k.tokenBalance,A=k.stakedBalance,w=k.earnings,z=f[43114],q=m[43114],N=n.lpSymbol.toUpperCase(),P=r&&g&&g.isGreaterThan(0),B=function(e){var n=Object(b.b)(),t=Object(x.m)().account,r=Object(J.c)();return{onApprove:Object(s.useCallback)(Object(X.a)(V.a.mark((function c(){var o;return V.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(U.a)(e,r,t);case 3:return o=c.sent,n(Object(S.a)(t)),c.abrupt("return",o);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),c,null,[[0,8]])}))),[t,n,e,r])}}(Object(s.useMemo)((function(){return h?Object(W.a)(t,q):Object(W.a)(t,z)}),[t,z,q,h])).onApprove,E=Object(s.useCallback)(Object(X.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,B();case 4:j(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[B]);return Object(o.jsxs)(Pe,{children:[Object(o.jsxs)(p.m,{children:[Object(o.jsx)(p.A,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:I.b}),Object(o.jsx)(p.A,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:c(999,"Earned")})]}),Object(o.jsx)(qe,{earnings:w,pid:O}),Object(o.jsxs)(p.m,{children:[Object(o.jsx)(p.A,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:N}),Object(o.jsx)(p.A,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:c(999,"Staked")})]}),r?P?Object(o.jsx)(we,{stakedBalance:A,tokenBalance:y,tokenName:N,pid:O,depositFeeBP:v}):Object(o.jsx)(p.d,{mt:"8px",fullWidth:!0,disabled:l,onClick:E,children:c(999,"Approve Contract")}):Object(o.jsx)(K.a,{mt:"8px",fullWidth:!0})]})},Ee=function(e){var n,t=e.numberOfDays,r=e.farmApy/100,c=t/365,o=1e3/e.cakePrice,a=o*Math.pow(1+r/365,365*c);return n=a-o,Math.round(100*n)/100},Fe=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)};function De(){var e=Object(h.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]);return De=function(){return e},e}function Le(){var e=Object(h.a)(["\n  margin-bottom: '10px';\n"]);return Le=function(){return e},e}function Me(){var e=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]);return Me=function(){return e},e}var Qe=v.e.div(Me()),Re=v.e.div(Le()),He=Object(v.e)(p.A)(De()),Ge=function(e){var n=e.onDismiss,t=e.lpLabel,r=e.quoteTokenAdresses,c=e.quoteTokenSymbol,a=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(C.a)(),l=D({quoteTokenAdresses:r,quoteTokenSymbol:c,tokenAddresses:a}),b=s.times(new d.a(100)).toNumber(),j=1e3/i.toNumber(),x=Ee({numberOfDays:1,farmApy:b,cakePrice:i}),O=Ee({numberOfDays:7,farmApy:b,cakePrice:i}),f=Ee({numberOfDays:30,farmApy:b,cakePrice:i});return Object(o.jsxs)(p.u,{title:"ROI",onDismiss:n,children:[Object(o.jsxs)(Qe,{children:[Object(o.jsx)(Re,{children:Object(o.jsx)(p.A,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"Timeframe")})}),Object(o.jsx)(Re,{children:Object(o.jsx)(p.A,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"ROI")})}),Object(o.jsx)(Re,{children:Object(o.jsx)(p.A,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"EGG per $1000")})}),Object(o.jsx)(Re,{children:Object(o.jsx)(p.A,{children:"1d"})}),Object(o.jsx)(Re,{children:Object(o.jsxs)(p.A,{children:[Fe({amountEarned:x,amountInvested:j}),"%"]})}),Object(o.jsx)(Re,{children:Object(o.jsx)(p.A,{children:x})}),Object(o.jsx)(Re,{children:Object(o.jsx)(p.A,{children:"7d"})}),Object(o.jsx)(Re,{children:Object(o.jsxs)(p.A,{children:[Fe({amountEarned:O,amountInvested:j}),"%"]})}),Object(o.jsx)(Re,{children:Object(o.jsx)(p.A,{children:O})}),Object(o.jsx)(Re,{children:Object(o.jsx)(p.A,{children:"30d"})}),Object(o.jsx)(Re,{children:Object(o.jsxs)(p.A,{children:[Fe({amountEarned:f,amountInvested:j}),"%"]})}),Object(o.jsx)(Re,{children:Object(o.jsx)(p.A,{children:f})})]}),Object(o.jsx)(He,{fontSize:"12px",color:"textSubtle",children:u(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(o.jsx)(p.m,{justifyContent:"center",children:Object(o.jsxs)(p.q,{href:"https://exchange.pancakeswap.finance/#/add/".concat(l),children:[u(999,"Get")," ",t]})})]})},Ve=function(e){var n=e.lpLabel,t=e.quoteTokenAdresses,r=e.quoteTokenSymbol,c=e.tokenAddresses,a=e.cakePrice,s=e.apy,u=Object(p.F)(Object(o.jsx)(Ge,{lpLabel:n,quoteTokenAdresses:t,quoteTokenSymbol:r,tokenAddresses:c,cakePrice:a,apy:s})),l=Object(i.a)(u,1)[0];return Object(o.jsx)(p.o,{onClick:l,variant:"text",size:"sm",ml:"4px",children:Object(o.jsx)(p.g,{})})};function Xe(){var e=Object(h.a)(["\n  align-self: baseline;\n  background-image: url('/images/farms/",".png');\n  background-repeat: no-repeat;\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]);return Xe=function(){return e},e}function We(){var e=Object(h.a)(["\n  height: ",";\n  overflow: hidden;\n"]);return We=function(){return e},e}function Ke(){var e=Object(h.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"]);return Ke=function(){return e},e}function Ue(){var e=Object(h.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);return Ue=function(){return e},e}function Je(){var e=Object(h.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return Je=function(){return e},e}function $e(){var e=Object(h.a)(["\n  margin-left: 4px;\n"]);return $e=function(){return e},e}function _e(){var e=Object(h.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);return _e=function(){return e},e}var Ye=Object(v.e)(p.m)(_e()),Ze=(Object(v.e)(p.z)($e()),function(e){var n=e.lpLabel,t=e.depositFee;return Object(o.jsx)(Ye,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:Object(o.jsxs)(p.m,{flexDirection:"column",alignItems:"flex-end",children:[Object(o.jsx)(p.n,{mb:"4px",children:n}),Object(o.jsxs)(p.m,{justifyContent:"center",children:[0===t?Object(o.jsx)(B,{}):null,"TRT"===n||"TRT-AVAX LP"===n?Object(o.jsx)(E,{}):null,"TRT-AVAX LP"===n?Object(o.jsx)(F,{}):null]})]})})}),en=Object(v.f)(Je()),nn=(v.e.div(Ue(),en),v.e.div(Ke(),(function(e){return e.theme.colors.borderColor}))),tn=v.e.div(We(),(function(e){return e.expanded?"100%":"0px"})),rn=function(e){var n=e.farm,t=e.removed,r=e.cakePrice,c=e.bnbPrice,a=e.ethereum,u=e.account,l=Object(C.a)();var b,j,x=Object(s.useState)(!1),O=Object(i.a)(x,2),f=O[0],m=O[1],h=Object(T.b)(n.pid).lockup,k=(b=Number(h.dividedBy(60).dividedBy(60)),j=0,(Math.floor(b*Math.pow(10,j))/Math.pow(10,j)).toFixed(j)),g=n.isTokenOnly?n.tokenSymbol.toLowerCase():"".concat(n.tokenSymbol.toLowerCase(),"-").concat(n.quoteTokenSymbol.toLowerCase()),y=v.e.div(Xe(),g),A=Object(s.useMemo)((function(){if(!n.lpTotalInQuoteToken)return null;if(n.quoteTokenSymbol===w.b.BNB)return c.times(n.lpTotalInQuoteToken);if(n.quoteTokenSymbol===w.b.CAKE)return r.times(n.lpTotalInQuoteToken);n.decimals,n.lpTotalInQuoteToken;return n.lpTotalInQuoteToken}),[n.decimals,c,r,n.lpTotalInQuoteToken,n.quoteTokenSymbol]),S=A?"$".concat(Number(A).toLocaleString(void 0,{maximumFractionDigits:0})):"-",z=n.lpSymbol,q=I.b,N=n.apy&&n.apy.times(new d.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),B=n.quoteTokenAdresses,E=n.quoteTokenSymbol,F=n.tokenAddresses,D=n.risk;return Object(o.jsxs)(y,{children:[Object(o.jsx)(Ze,{lpLabel:z,multiplier:n.multiplier,risk:D,depositFee:n.depositFeeBP,farmImage:g,tokenSymbol:n.tokenSymbol}),!t&&Object(o.jsxs)(p.m,{justifyContent:"space-between",alignItems:"center",children:[Object(o.jsxs)(p.A,{children:[l(352,"APR"),":"]}),Object(o.jsx)(p.A,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Ve,{lpLabel:z,quoteTokenAdresses:B,quoteTokenSymbol:E,tokenAddresses:F,cakePrice:r,apy:n.apy}),N,"%"]}):Object(o.jsx)(p.x,{height:24,width:80})})]}),Object(o.jsxs)(p.m,{justifyContent:"space-between",children:[Object(o.jsxs)(p.A,{children:[l(318,"Earn"),":"]}),Object(o.jsx)(p.A,{bold:!0,children:q})]}),Object(o.jsxs)(p.m,{justifyContent:"space-between",children:[Object(o.jsxs)(p.A,{style:{fontSize:"24px"},children:[l(10001,"Deposit Fee"),":"]}),Object(o.jsxs)(p.A,{bold:!0,style:{fontSize:"24px"},children:[n.depositFeeBP/100,"%"]})]}),Object(o.jsxs)(p.m,{justifyContent:"space-between",children:[Object(o.jsxs)(p.A,{style:{fontSize:"16px"},children:[l(100010101,"Harvest Timer"),":"]}),Object(o.jsx)(p.A,{style:{fontSize:"16px"},children:k}),Object(o.jsx)(p.A,{style:{fontSize:"16px"},children:1!==Number(k)?"Hours":"Hour"}),Object(o.jsx)(p.A,{style:{fontSize:"16px"},children:(Number(h)/60%60).toFixed(0)}),Object(o.jsx)(p.A,{style:{fontSize:"16px"},children:"Minutes"})]}),Object(o.jsx)(Be,{farm:n,ethereum:a,account:u}),Object(o.jsx)(nn,{}),Object(o.jsx)(P,{onClick:function(){return m(!f)},expanded:f}),Object(o.jsx)(tn,{expanded:f,children:Object(o.jsx)(H,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://cchain.explorer.avax.network/tokens/".concat(n.tokenAddresses[43114]):"https://cchain.explorer.avax.network/tokens/".concat(n.lpAddresses[43114]),totalValueFormated:S,lpLabel:z,quoteTokenAdresses:B,quoteTokenSymbol:E,tokenAddresses:F})})]})},cn=t(75);function on(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"]);return on=function(){return e},e}function an(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]);return an=function(){return e},e}var sn=function(e){var n=e.stakedOnly,t=e.setStakedOnly,r=Object(l.g)(),c=r.url,a=r.isExact,i=Object(C.a)();return Object(o.jsxs)(un,{children:[Object(o.jsxs)(ln,{children:[Object(o.jsx)(p.B,{checked:n,onChange:function(){return t(!n)}}),Object(o.jsxs)(p.A,{children:[" ",i(699,"Staked only")]})]}),Object(o.jsxs)(p.e,{activeIndex:a?0:1,size:"sm",variant:"subtle",children:[Object(o.jsx)(p.f,{as:cn.b,to:"".concat(c),children:i(698,"Active")}),Object(o.jsx)(p.f,{as:cn.b,to:"".concat(c,"/history"),children:i(700,"Inactive")})]})]})},un=v.e.div(an()),ln=v.e.div(on(),p.A);function bn(){var e=Object(h.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"]);return bn=function(){return e},e}var jn=v.e.div(bn(),(function(e){return e.theme.colors.textSubtle})),dn=function(e){var n=Object(l.g)().path,t=(Object(C.a)(),Object(T.c)()),r=Object(T.f)(),c=Object(T.e)(),u=Object(x.m)(),j=u.account,O=u.ethereum,f=e.tokenMode,h=Object(b.b)(),v=Object(A.a)().fastRefresh;Object(s.useEffect)((function(){j&&h(Object(S.a)(j))}),[j,h,v]);var k=Object(s.useState)(!1),z=Object(i.a)(k,2),q=z[0],N=z[1],P=t.filter((function(e){return!!e.isTokenOnly===!!f&&"0X"!==e.multiplier})),B=t.filter((function(e){return!!e.isTokenOnly===!!f&&"0X"===e.multiplier})),E=P.filter((function(e){return e.userData&&new d.a(e.userData.stakedBalance).isGreaterThan(0)})),F=Object(s.useCallback)((function(e,n){return e.map((function(e){var n=new d.a(e.TokenPerBlock||1).times(new d.a(e.poolWeight)).div(new d.a(10).pow(18)).times(m),t=r.times(n),o=new d.a(e.lpTotalInQuoteToken||0);e.quoteTokenSymbol===w.b.BNB&&(o=o.times(c)),e.quoteTokenSymbol===w.b.CAKE&&(o=o.times(r)),o.comparedTo(0)>0&&(t=t.div(o));e.lpTotalInQuoteToken;return e.lpTotalInQuoteToken||null,e.quoteTokenSymbol===w.b.BNB&&c.times(e.lpTotalInQuoteToken),e.quoteTokenSymbol===w.b.CAKE&&r.times(e.lpTotalInQuoteToken),Object(a.a)(Object(a.a)({},e),{},{apy:t})})).map((function(e){return Object(o.jsx)(rn,{farm:e,removed:n,bnbPrice:c,cakePrice:r,ethereum:O,account:j},e.pid)}))}),[c,j,r,O]);return Object(o.jsxs)(y.a,{children:[Object(o.jsx)(p.n,{as:"h1",size:"lg",color:"secondary",mb:"50px",style:{textAlign:"center"},children:f?"Stake tokens to earn ".concat(I.b):"Stake LP tokens to earn ".concat(I.b)}),Object(o.jsx)(sn,{stakedOnly:q,setStakedOnly:N}),Object(o.jsxs)("div",{children:[Object(o.jsx)(jn,{}),Object(o.jsxs)(g,{children:[Object(o.jsx)(l.a,{exact:!0,path:"".concat(n),children:F(q?E:P,!1)}),Object(o.jsx)(l.a,{exact:!0,path:"".concat(n,"/history"),children:F(B,!0)})]})]})]})}}}]);
//# sourceMappingURL=13.2aea20db.chunk.js.map