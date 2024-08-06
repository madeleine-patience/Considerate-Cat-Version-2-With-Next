"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[927],{"./stories/Header.stories.ts":(m,e,t)=>{t.r(e),t.d(e,{LoggedIn:()=>d,LoggedOut:()=>n,__namedExportsOrder:()=>r,default:()=>a});var o=t("./stories/Header.tsx"),l={title:"Example/Header",component:o.Header,tags:["autodocs"],parameters:{layout:"fullscreen"}};const a=l;var d={args:{user:{name:"Jane Doe"}}},n={};const r=["LoggedIn","LoggedOut"]},"./stories/Button.tsx":(m,e,t)=>{t.r(e),t.d(e,{Button:()=>f});var o=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),l=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("./node_modules/styled-jsx/style.js"),d=t.n(a),n=t("./node_modules/next/dist/compiled/react/index.js"),r=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=t.n(r),A=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=t.n(A),S=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),x=t.n(S),T=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),p=t.n(T),P=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=t.n(P),i=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=t.n(i),v=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css"),s={};s.styleTagTransform=D(),s.setAttributes=p(),s.insert=x().bind(null,"head"),s.domAPI=h(),s.insertStyleElement=y();var b=E()(v.default,s);const I=v.default&&v.default.locals?v.default.locals:void 0;var c=["primary","size","backgroundColor","label"],g=n.createElement,f=function(u){var M=u.primary,C=M===void 0?!1:M,L=u.size,W=L===void 0?"medium":L,B=u.backgroundColor,z=u.label,j=(0,l.default)(u,c),R=C?"storybook-button--primary":"storybook-button--secondary";return g("button",(0,o.default)({type:"button"},j,{className:d().dynamic([["2314204694",[B]]])+" "+(j&&j.className!=null&&j.className||["storybook-button","storybook-button--".concat(W),R].join(" ")||"")}),z,g(d(),{id:"2314204694",dynamic:[B]},["button.__jsx-style-dynamic-selector{background-color:".concat(B,";}")]))};f.displayName="Button"},"./stories/Header.tsx":(m,e,t)=>{t.r(e),t.d(e,{Header:()=>b});var o=t("./node_modules/next/dist/compiled/react/index.js"),l=t("./stories/Button.tsx"),a=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=t.n(a),n=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),r=t.n(n),E=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),A=t.n(E),h=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),S=t.n(h),x=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=t.n(x),p=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),P=t.n(p),y=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/header.css"),i={};i.styleTagTransform=P(),i.setAttributes=S(),i.insert=A().bind(null,"head"),i.domAPI=r(),i.insertStyleElement=T();var D=d()(y.default,i);const v=y.default&&y.default.locals?y.default.locals:void 0;var s=o.createElement,b=function(c){var g=c.user,f=c.onLogin,O=c.onLogout,u=c.onCreateAccount;return s("header",null,s("div",{className:"storybook-header"},s("div",null,s("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},s("g",{fill:"none",fillRule:"evenodd"},s("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),s("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),s("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),s("h1",null,"Acme")),s("div",null,g?s(o.Fragment,null,s("span",{className:"welcome"},"Welcome, ",s("b",null,g.name),"!"),s(l.Button,{size:"small",onClick:O,label:"Log out"})):s(o.Fragment,null,s(l.Button,{size:"small",onClick:f,label:"Log in"}),s(l.Button,{primary:!0,size:"small",onClick:u,label:"Sign up"})))))};b.displayName="Header"},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css":(m,e,t)=>{t.r(e),t.d(e,{default:()=>r});var o=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=t.n(o),a=t("./node_modules/css-loader/dist/runtime/api.js"),d=t.n(a),n=d()(l());n.push([m.id,`.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
`,""]);const r=n},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/header.css":(m,e,t)=>{t.r(e),t.d(e,{default:()=>r});var o=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=t.n(o),a=t("./node_modules/css-loader/dist/runtime/api.js"),d=t.n(a),n=d()(l());n.push([m.id,`.storybook-header {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.storybook-header svg {
  display: inline-block;
  vertical-align: top;
}

.storybook-header h1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}

.storybook-header button + button {
  margin-left: 10px;
}

.storybook-header .welcome {
  color: #333;
  font-size: 14px;
  margin-right: 10px;
}
`,""]);const r=n}}]);
