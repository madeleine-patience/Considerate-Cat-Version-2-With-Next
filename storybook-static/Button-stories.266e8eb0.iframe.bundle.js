"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[463],{"./stories/Button.stories.ts":(y,s,t)=>{t.r(s),t.d(s,{Large:()=>d,Primary:()=>o,Secondary:()=>e,Small:()=>c,__namedExportsOrder:()=>v,default:()=>r});var n=t("./stories/Button.tsx"),a={title:"Example/Button",component:n.Button,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}};const r=a;var o={args:{primary:!0,label:"Button"}},e={args:{label:"Button"}},d={args:{size:"large",label:"Button"}},c={args:{size:"small",label:"Button"}};const v=["Primary","Secondary","Large","Small"]},"./stories/Button.tsx":(y,s,t)=>{t.r(s),t.d(s,{Button:()=>f});var n=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),a=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/styled-jsx/style.js"),o=t.n(r),e=t("./node_modules/next/dist/compiled/react/index.js"),d=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=t.n(d),v=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),S=t.n(v),p=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),x=t.n(p),B=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),P=t.n(B),A=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=t.n(A),h=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=t.n(h),i=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css"),l={};l.styleTagTransform=D(),l.setAttributes=P(),l.insert=x().bind(null,"head"),l.domAPI=S(),l.insertStyleElement=T();var L=c()(i.default,l);const z=i.default&&i.default.locals?i.default.locals:void 0;var O=["primary","size","backgroundColor","label"],j=e.createElement,f=function(u){var g=u.primary,C=g===void 0?!1:g,E=u.size,M=E===void 0?"medium":E,b=u.backgroundColor,I=u.label,m=(0,a.default)(u,O),W=C?"storybook-button--primary":"storybook-button--secondary";return j("button",(0,n.default)({type:"button"},m,{className:o().dynamic([["2314204694",[b]]])+" "+(m&&m.className!=null&&m.className||["storybook-button","storybook-button--".concat(M),W].join(" ")||"")}),I,j(o(),{id:"2314204694",dynamic:[b]},["button.__jsx-style-dynamic-selector{background-color:".concat(b,";}")]))};f.displayName="Button"},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css":(y,s,t)=>{t.r(s),t.d(s,{default:()=>d});var n=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(n),r=t("./node_modules/css-loader/dist/runtime/api.js"),o=t.n(r),e=o()(a());e.push([y.id,`.storybook-button {
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
`,""]);const d=e}}]);
