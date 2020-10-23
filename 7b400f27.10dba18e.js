(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=(n(0),n(197));const a={title:"Serialization"},i={unversionedId:"persistence/mongoose/serialization",id:"persistence/mongoose/serialization",isDocsHomePage:!1,title:"Serialization",description:"Using class-transformer is a popular libarary used in nestjs, unfortunately class-transformer does not place nicely with mongoose documents.",source:"@site/docs/persistence/mongoose/serialization.md",slug:"/persistence/mongoose/serialization",permalink:"/nestjs-query/docs/persistence/mongoose/serialization",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/mongoose/serialization.md",version:"current",sidebar:"docs",previous:{title:"Custom Service",permalink:"/nestjs-query/docs/persistence/mongoose/custom-service"},next:{title:"Getting Started",permalink:"/nestjs-query/docs/graphql/getting-started"}},s=[],c={rightToc:s};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"class-transformer")," is a popular libarary used in ",Object(o.b)("inlineCode",{parentName:"p"},"nestjs"),", unfortunately ",Object(o.b)("inlineCode",{parentName:"p"},"class-transformer")," does not place nicely with ",Object(o.b)("inlineCode",{parentName:"p"},"mongoose")," documents."),Object(o.b)("p",null,"For most use cases ",Object(o.b)("inlineCode",{parentName:"p"},"nestjs-query")," will take care of the serialization for you through ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/nestjs-query/docs/concepts/advanced/assemblers"}),"assemblers"),". If you find yourself in a situation where you want to use ",Object(o.b)("inlineCode",{parentName:"p"},"class-transformer")," with a model you should use the following patterns."),Object(o.b)("p",null,"To convert your DTO into a model you can inject your Model and create a new instance."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"new TodoItemModel(todoItemDTO);\n")),Object(o.b)("p",null,"When converting your entity into a DTO you can use the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const dto = plainToClass(TodoItemDTO, todoItemEntity.toObject({ virtuals: true }));\n")))}l.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);