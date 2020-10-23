(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{119:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return u}));var a=t(2),r=(t(0),t(197)),o=t(201),l=t(202);const s={title:"Queries"},i={unversionedId:"graphql/queries",id:"graphql/queries",isDocsHomePage:!1,title:"Queries",description:"The CRUDResolver automatically exposes two query endpoints. The endpoints names will be derived from",source:"@site/docs/graphql/queries.mdx",slug:"/graphql/queries",permalink:"/nestjs-query/docs/graphql/queries",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/queries.mdx",version:"current",sidebar:"docs",previous:{title:"Resolvers",permalink:"/nestjs-query/docs/graphql/resolvers"},next:{title:"Mutations",permalink:"/nestjs-query/docs/graphql/mutations"}},d=[{value:"Find By Id",id:"find-by-id",children:[]},{value:"Querying",id:"querying",children:[{value:"Filtering",id:"filtering",children:[]},{value:"Sorting",id:"sorting",children:[]}]}],c={rightToc:d};function u({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/nestjs-query/docs/graphql/resolvers"}),"CRUDResolver")," automatically exposes two query endpoints. The endpoints names will be derived from\nname provided to ",Object(r.b)("inlineCode",{parentName:"p"},"@ObjectType")," or the class name."),Object(r.b)("p",null,"The following examples are based on the following ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItemDTO")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.dto.ts"',title:'"todo-item.dto.ts"'}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),Object(r.b)("p",null,"In the following examples you will see two endpoints referenced"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"todoItem")," - graphql endpoint to find a record by id."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"todoItems")," - graphql endpoint to filter, page, and sort records,")),Object(r.b)("h2",{id:"find-by-id"},"Find By Id"),Object(r.b)("p",null,"The following example finds a ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," by id."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'{\n  todoItem(id: "1") {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n\n'))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-14T07:00:31.763Z",\n      "updated": "2020-01-14T07:00:31.763Z"\n    }\n  }\n}\n')))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"querying"},"Querying"),Object(r.b)("p",null,"As described above the ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will expose a query method called ",Object(r.b)("inlineCode",{parentName:"p"},"todoItems"),". The result will be either\na ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://relay.dev/graphql/connections.htm"}),Object(r.b)("inlineCode",{parentName:"a"},"connection"))," or array depending on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/nestjs-query/docs/graphql/paging"}),"paging strategy you choose")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"All examples below assume that a connection is returned but filtering and sorting work the same way for all paging\nstrategies. To read how to page collections read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/nestjs-query/docs/graphql/paging"}),"paging docs")))),Object(r.b)("p",null,"By default if you do not provided an arguments you can query for all records."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItems{\n    pageInfo{\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges{\n      node{\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjI="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-01T00:43:16.000Z",\n            "updated": "2020-01-01T00:43:16.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        },\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI="\n        }\n      ]\n    }\n  }\n}\n')))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"filtering"},"Filtering"),Object(r.b)("p",null,"Filtering in ",Object(r.b)("inlineCode",{parentName:"p"},"query-graphql")," has has an object based syntax"),Object(r.b)("p",null,"For a full reference of filter operations ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/nestjs-query/docs/concepts/queries#filter-reference"}),"see filter reference")),Object(r.b)("p",null,"The following example filters for all todoItems that are marked completed."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItems(filter: {completed: {is: true}}){\n    pageInfo{\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges{\n      node{\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjE="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "5",\n            "title": "Create Many Todo Items - 4",\n            "completed": true,\n            "created": "2020-01-14T07:01:27.805Z",\n            "updated": "2020-01-14T07:01:27.805Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        }\n      ]\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"sorting"},"Sorting"),Object(r.b)("p",null,"You can sort by one or more fields by using the ",Object(r.b)("inlineCode",{parentName:"p"},"sorting")," parameter."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"sorting")," parameter is an array where each item has the following options."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"field!")," - The name of the field to sort by."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"direction!")," - The direction to sort either ",Object(r.b)("inlineCode",{parentName:"li"},"ASC")," or ",Object(r.b)("inlineCode",{parentName:"li"},"DESC"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nulls?")," - Optional field to set nulls sort order ",Object(r.b)("inlineCode",{parentName:"li"},"NULLS_FIRST")," or ",Object(r.b)("inlineCode",{parentName:"li"},"NULLS_last"))),Object(r.b)("p",null,"In this example we sort by title descending."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItems(sorting: [{ field: title, direction: DESC }]) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjQ="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-14T07:00:31.763Z",\n            "updated": "2020-01-14T07:00:31.763Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "5",\n            "title": "Create Many Todo Items - 4",\n            "completed": true,\n            "created": "2020-01-14T07:01:27.805Z",\n            "updated": "2020-01-14T07:01:27.805Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        },\n        {\n          "node": {\n            "id": "4",\n            "title": "Create Many Todo Items - 3",\n            "completed": false,\n            "created": "2020-01-14T07:01:27.805Z",\n            "updated": "2020-01-14T07:01:27.805Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI="\n        },\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjM="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjQ="\n        }\n      ]\n    }\n  }\n}\n')))),Object(r.b)("p",null,"In this example we sort by completed and title."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItems(\n    sorting: [\n      { field: completed, direction: ASC }\n      { field: title, direction: DESC }\n    ]\n  ) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjQ="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-14T07:00:31.763Z",\n            "updated": "2020-01-14T07:00:31.763Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "4",\n            "title": "Create Many Todo Items - 3",\n            "completed": false,\n            "created": "2020-01-14T07:01:27.805Z",\n            "updated": "2020-01-14T07:01:27.805Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI="\n        },\n        {\n          "node": {\n            "id": "5",\n            "title": "Create Many Todo Items - 4",\n            "completed": true,\n            "created": "2020-01-14T07:01:27.805Z",\n            "updated": "2020-01-14T07:01:27.805Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjM="\n        },\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-14T07:00:34.111Z",\n            "updated": "2020-01-14T07:00:34.111Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjQ="\n        }\n      ]\n    }\n  }\n}\n')))))}u.isMDXComponent=!0},197:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),c=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),b=a,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||o;return t?r.a.createElement(m,s(s({ref:n},d),{},{components:t})):r.a.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=b;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=t[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},198:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},199:function(e,n,t){"use strict";var a=t(0),r=t(200);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},200:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r},201:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(199),l=t(198),s=t(47),i=t.n(s);const d=37,c=39;n.a=function(e){const{block:n,children:t,defaultValue:s,values:u,groupId:p,className:b}=e,{tabGroupChoices:m,setTabGroupChoices:j}=Object(o.a)(),[O,g]=Object(a.useState)(s),[f,h]=Object(a.useState)(!1);if(null!=p){const e=m[p];null!=e&&e!==O&&u.some((n=>n.value===e))&&g(e)}const y=e=>{g(e),null!=p&&j(p,e)},T=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},N=()=>{h(!1)};return Object(a.useEffect)((()=>(window.addEventListener("keydown",v),window.addEventListener("mousedown",N),()=>{window.removeEventListener("keydown",v),window.removeEventListener("mousedown",N)})),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},b)},u.map((({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===e}),style:f?{}:{outline:"none"},key:e,ref:e=>T.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case c:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case d:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(T,e.target,e),v(e)},onFocus:()=>y(e),onClick:()=>{y(e),h(!1)},onPointerDown:()=>h(!1)},n)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((e=>e.props.value===O))[0]))}},202:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);