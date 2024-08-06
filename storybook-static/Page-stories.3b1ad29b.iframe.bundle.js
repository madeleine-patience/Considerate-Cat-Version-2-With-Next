(self.webpackChunk=self.webpackChunk||[]).push([[756],{"./stories/Page.stories.ts":(d,e,t)=>{"use strict";t.r(e),t.d(e,{LoggedIn:()=>U,LoggedOut:()=>H,__namedExportsOrder:()=>K,default:()=>z});var n=t("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),r=t("./node_modules/@babel/runtime/regenerator/index.js"),i=t.n(r),l=t("./node_modules/@storybook/test/dist/index.mjs"),a=t("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),u=t("./node_modules/next/dist/compiled/react/index.js"),b=t("./stories/Header.tsx"),T=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=t.n(T),D=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=t.n(D),O=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),I=t.n(O),M=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=t.n(M),m=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),W=t.n(m),f=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),s=t.n(f),v=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/page.css"),p={};p.styleTagTransform=s(),p.setAttributes=g(),p.insert=I().bind(null,"head"),p.domAPI=B(),p.insertStyleElement=W();var h=P()(v.default,p);const E=v.default&&v.default.locals?v.default.locals:void 0;var o=u.createElement,L=function(){var C=u.useState(),c=(0,a.default)(C,2),R=c[0],S=c[1];return o("article",null,o(b.Header,{user:R,onLogin:function(){return S({name:"Jane Doe"})},onLogout:function(){return S(void 0)},onCreateAccount:function(){return S({name:"Jane Doe"})}}),o("section",{className:"storybook-page"},o("h2",null,"Pages in Storybook"),o("p",null,"We recommend building UIs with a"," ",o("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"},o("strong",null,"component-driven"))," ","process starting with atomic components and ending with pages."),o("p",null,"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),o("ul",null,o("li",null,'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'),o("li",null,"Assemble data in the page component from your services. You can mock these services out using Storybook.")),o("p",null,"Get a guided tutorial on component-driven development at"," ",o("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer"},"Storybook tutorials"),". Read more in the"," ",o("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"},"docs"),"."),o("div",{className:"tip-wrapper"},o("span",{className:"tip"},"Tip")," Adjust the width of the canvas with the"," ",o("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},o("g",{fill:"none",fillRule:"evenodd"},o("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"}))),"Viewports addon in the toolbar")))};L.displayName="Page";var y={title:"Example/Page",component:L,parameters:{layout:"fullscreen"}};const z=y;var H={},U={play:function(){var x=(0,n.default)(i().mark(function c(R){var S,A,N,F;return i().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return S=R.canvasElement,A=(0,l.within)(S),N=A.getByRole("button",{name:/Log in/i}),j.next=5,(0,l.expect)(N).toBeInTheDocument();case 5:return j.next=7,l.userEvent.click(N);case 7:return j.next=9,(0,l.expect)(N).not.toBeInTheDocument();case 9:return F=A.getByRole("button",{name:/Log out/i}),j.next=12,(0,l.expect)(F).toBeInTheDocument();case 12:case"end":return j.stop()}},c)}));function C(c){return x.apply(this,arguments)}return C}()};const K=["LoggedOut","LoggedIn"]},"./node_modules/@storybook/instrumenter/dist sync recursive":d=>{function e(t){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}e.keys=()=>[],e.resolve=e,e.id="./node_modules/@storybook/instrumenter/dist sync recursive",d.exports=e},"./node_modules/@storybook/test/dist sync recursive":d=>{function e(t){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}e.keys=()=>[],e.resolve=e,e.id="./node_modules/@storybook/test/dist sync recursive",d.exports=e},"./stories/Button.tsx":(d,e,t)=>{"use strict";t.r(e),t.d(e,{Button:()=>o});var n=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),r=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/styled-jsx/style.js"),l=t.n(i),a=t("./node_modules/next/dist/compiled/react/index.js"),u=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=t.n(u),T=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),P=t.n(T),D=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),B=t.n(D),O=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),I=t.n(O),M=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=t.n(M),m=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=t.n(m),f=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css"),s={};s.styleTagTransform=W(),s.setAttributes=I(),s.insert=B().bind(null,"head"),s.domAPI=P(),s.insertStyleElement=g();var v=b()(f.default,s);const p=f.default&&f.default.locals?f.default.locals:void 0;var h=["primary","size","backgroundColor","label"],E=a.createElement,o=function(y){var z=y.primary,H=z===void 0?!1:z,U=y.size,K=U===void 0?"medium":U,x=y.backgroundColor,C=y.label,c=(0,r.default)(y,h),R=H?"storybook-button--primary":"storybook-button--secondary";return E("button",(0,n.default)({type:"button"},c,{className:l().dynamic([["2314204694",[x]]])+" "+(c&&c.className!=null&&c.className||["storybook-button","storybook-button--".concat(K),R].join(" ")||"")}),C,E(l(),{id:"2314204694",dynamic:[x]},["button.__jsx-style-dynamic-selector{background-color:".concat(x,";}")]))};o.displayName="Button"},"./stories/Header.tsx":(d,e,t)=>{"use strict";t.r(e),t.d(e,{Header:()=>v});var n=t("./node_modules/next/dist/compiled/react/index.js"),r=t("./stories/Button.tsx"),i=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(i),a=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=t.n(a),b=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),T=t.n(b),P=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),D=t.n(P),B=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),O=t.n(B),I=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=t.n(I),g=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/header.css"),m={};m.styleTagTransform=M(),m.setAttributes=D(),m.insert=T().bind(null,"head"),m.domAPI=u(),m.insertStyleElement=O();var W=l()(g.default,m);const f=g.default&&g.default.locals?g.default.locals:void 0;var s=n.createElement,v=function(h){var E=h.user,o=h.onLogin,L=h.onLogout,y=h.onCreateAccount;return s("header",null,s("div",{className:"storybook-header"},s("div",null,s("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},s("g",{fill:"none",fillRule:"evenodd"},s("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),s("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),s("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),s("h1",null,"Acme")),s("div",null,E?s(n.Fragment,null,s("span",{className:"welcome"},"Welcome, ",s("b",null,E.name),"!"),s(r.Button,{size:"small",onClick:L,label:"Log out"})):s(n.Fragment,null,s(r.Button,{size:"small",onClick:o,label:"Log in"}),s(r.Button,{primary:!0,size:"small",onClick:y,label:"Sign up"})))))};v.displayName="Header"},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css":(d,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>u});var n=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(n),i=t("./node_modules/css-loader/dist/runtime/api.js"),l=t.n(i),a=l()(r());a.push([d.id,`.storybook-button {
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
`,""]);const u=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/header.css":(d,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>u});var n=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(n),i=t("./node_modules/css-loader/dist/runtime/api.js"),l=t.n(i),a=l()(r());a.push([d.id,`.storybook-header {
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
`,""]);const u=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/page.css":(d,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>u});var n=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(n),i=t("./node_modules/css-loader/dist/runtime/api.js"),l=t.n(i),a=l()(r());a.push([d.id,`/* .storybook-page {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  padding: 48px 20px;
  margin: 0 auto;
  max-width: 600px;
  color: #333;
}

.storybook-page h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
}

.storybook-page p {
  margin: 1em 0;
}

.storybook-page a {
  text-decoration: none;
  color: #1ea7fd;
}

.storybook-page ul {
  padding-left: 30px;
  margin: 1em 0;
}

.storybook-page li {
  margin-bottom: 8px;
}

.storybook-page .tip {
  display: inline-block;
  border-radius: 1em;
  font-size: 11px;
  line-height: 12px;
  font-weight: 700;
  background: #e7fdd8;
  color: #66bf3c;
  padding: 4px 12px;
  margin-right: 10px;
  vertical-align: top;
}

.storybook-page .tip-wrapper {
  font-size: 13px;
  line-height: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.storybook-page .tip-wrapper svg {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: top;
  margin-top: 3px;
}

.storybook-page .tip-wrapper svg path {
  fill: #1ea7fd;
} */
`,""]);const u=a}}]);
