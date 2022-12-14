"use strict";(self.webpackChunkresourge_schema=self.webpackChunkresourge_schema||[]).push([[399],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},o=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=m(t),b=a,d=c["".concat(l,".").concat(b)]||c[b]||p[b]||i;return t?r.createElement(d,s(s({ref:n},o),{},{components:t})):r.createElement(d,s({ref:n},o))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=c;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var m=2;m<i;m++)s[m]=t[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6091:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:6},s=void 0,u={unversionedId:"api/Number",id:"api/Number",title:"Number",description:"Example",source:"@site/docs/api/Number.md",sourceDirName:"api",slug:"/api/Number",permalink:"/docs/api/Number",draft:!1,editUrl:"https://github.com/resourge/schema/docs/api/Number.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Boolean",permalink:"/docs/api/Boolean"},next:{title:"Any",permalink:"/docs/api/Any"}},l={},m=[{value:"Example",id:"example",level:2},{value:"Options",id:"options",level:2},{value:"min",id:"min",level:3},{value:"max",id:"max",level:3},{value:"between",id:"between",level:3},{value:"equals",id:"equals",level:3},{value:"integer",id:"integer",level:3},{value:"decimal",id:"decimal",level:3},{value:"positive",id:"positive",level:3},{value:"negative",id:"negative",level:3},{value:"enum",id:"enum",level:3},{value:"Contribution",id:"contribution",level:2}],o={toc:m};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { number } from '@resourge/schema';\n\nnumber()\n// or\nnumber('Custom error message')\n\n// Validate if number is bigger than 1\nnumber().min(1)\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"min"},"min"),(0,a.kt)("p",null,"Checks if number is bigger than minValue."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"number().min(1)\n// with custom message\nnumber().min(1, 'Custom error message')\n")),(0,a.kt)("h3",{id:"max"},"max"),(0,a.kt)("p",null,"Checks if number is smaller than maxValue."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nnumber().max(10)\n// with custom message\nnumber().max(10, 'Custom error message')\n")),(0,a.kt)("h3",{id:"between"},"between"),(0,a.kt)("p",null,"Checks if number is between minValue and maxValue."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"number().between(1, 10)\n// with custom message\nnumber().between(1, 10, 'Custom error message')\n")),(0,a.kt)("h3",{id:"equals"},"equals"),(0,a.kt)("p",null,"Checks if number equal to value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"number().equals(1)\n// with custom message\nnumber().equals(1, 'Custom error message')\n\n// or for multiple values\nnumber().equals([1, 10]) // Checks if number is 1 or 10\n// with custom message\nnumber().equals([1, 10], 'Custom error message')\n")),(0,a.kt)("h3",{id:"integer"},"integer"),(0,a.kt)("p",null,"Checks if number is integer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"number().integer()\n// with custom message\nnumber().integer('Custom error message')\n")),(0,a.kt)("h3",{id:"decimal"},"decimal"),(0,a.kt)("p",null,"Checks if number is decimal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"number().decimal()\n// with custom message\nnumber().decimal('Custom error message')\n")),(0,a.kt)("h3",{id:"positive"},"positive"),(0,a.kt)("p",null,"Checks if number is a positive value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"number().positive()\n// with custom message\nnumber().positive('Custom error message')\n")),(0,a.kt)("h3",{id:"negative"},"negative"),(0,a.kt)("p",null,"Checks if number is a negative value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"number().negative()\n// with custom message\nnumber().negative('Custom error message')\n")),(0,a.kt)("h3",{id:"enum"},"enum"),(0,a.kt)("p",null,"Checks if number is a value of enum."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nenum FieldTypeEnum {\n  FREE_TEXT = 1,\n  EXISTING_FIELD = 2,\n  SQL_EXPRESSION = 3,\n  SOURCE_FIELD = 4,\n}\nnumber().enum(FieldTypeEnum)\n// with custom message\nnumber().enum(FieldTypeEnum, 'Custom error message')\n")),(0,a.kt)("h2",{id:"contribution"},"Contribution"),(0,a.kt)("p",null,"In case you have different validations that you use, please tell us so we improve the library."))}p.isMDXComponent=!0}}]);