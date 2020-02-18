/*! For license information please see e68576ac.fef2070d.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),l=(n(0),n(146)),o=n(151),i=n(152),p=n(150),d={title:"Example",sidebar_label:"Example"},c={id:"introduction/example",title:"Example",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/introduction/example.mdx",permalink:"/nestjs-query/docs/introduction/example",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/website/docs/introduction/example.mdx",sidebar_label:"Example",sidebar:"docs",previous:{title:"Getting Started",permalink:"/nestjs-query/docs/introduction/getting-started"},next:{title:"DTOs",permalink:"/nestjs-query/docs/concepts/dtos"}},b=[{value:"Set up a new nest app",id:"set-up-a-new-nest-app",children:[]},{value:"Install Dependencies",id:"install-dependencies",children:[]},{value:"Generate the Module",id:"generate-the-module",children:[]},{value:"Create the Entity",id:"create-the-entity",children:[]},{value:"Create the DTO",id:"create-the-dto",children:[]},{value:"Create the Service",id:"create-the-service",children:[]},{value:"Create the Resolver",id:"create-the-resolver",children:[]},{value:"Wire everything up.",id:"wire-everything-up",children:[]},{value:"Running the Example",id:"running-the-example",children:[]},{value:"Exploring The GraphQL Endpoint",id:"exploring-the-graphql-endpoint",children:[{value:"Create a TodoItem",id:"create-a-todoitem",children:[]},{value:"Create Multiple TodoItems",id:"create-multiple-todoitems",children:[]},{value:"Query For Multiple TodoItems",id:"query-for-multiple-todoitems",children:[]},{value:"Query For One TodoItem",id:"query-for-one-todoitem",children:[]},{value:"Update a TodoItem",id:"update-a-todoitem",children:[]},{value:"Update Multiple TodoItems",id:"update-multiple-todoitems",children:[]},{value:"Delete One TodoItem",id:"delete-one-todoitem",children:[]},{value:"Delete Many TodoItems",id:"delete-many-todoitems",children:[]}]}],s={rightToc:b},m="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)(m,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Let's create a simple todo-item graphql example."),Object(l.b)("h2",{id:"set-up-a-new-nest-app"},"Set up a new nest app"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -g @nestjs/cli\nnest new nestjs-query-getting-started\n")),Object(l.b)("h2",{id:"install-dependencies"},"Install Dependencies"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i @nestjs-query/core @nestjs/common class-transformer\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i @nestjs-query/query-graphql @nestjs/common @nestjs/graphql graphql graphql-relay class-transformer class-validator reflect-metadata type-graphql\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i @nestjs-query/query-typeorm @nestjs/common @nestjs/typeorm class-transformer typeorm\n")),Object(l.b)("p",null,"Install extra dependencies for the example."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i pg apollo-server-express\n")),Object(l.b)("h2",{id:"generate-the-module"},"Generate the Module"),Object(l.b)("p",null,"From the root of your project run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx nest g mo todo-item\n")),Object(l.b)("h2",{id:"create-the-entity"},"Create the Entity"),Object(l.b)("p",null,"From the root of your project run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx nest g cl todo-item.entity todo-item\n")),Object(l.b)("p",null,"Now lets fill out the entity that will be used by ",Object(l.b)("inlineCode",{parentName:"p"},"typeorm"),"."),Object(l.b)("p",null,"Add the following to ",Object(l.b)("inlineCode",{parentName:"p"},"src/todo-item/todo-item.entity.ts"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {\n  Column,\n  CreateDateColumn,\n  Entity,\n  PrimaryGeneratedColumn,\n  UpdateDateColumn,\n} from 'typeorm';\n\n@Entity()\nexport class TodoItemEntity {\n  @PrimaryGeneratedColumn()\n  id!: string;\n\n  @Column()\n  title!: string;\n\n  @Column()\n  completed!: boolean;\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n}\n")),Object(l.b)("h2",{id:"create-the-dto"},"Create the DTO"),Object(l.b)("p",null,"The DTO (Data Transfer Object) is used by the resolver to represent incoming requests and outgoing responses."),Object(l.b)("p",null,"The DTO is where you can:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Define fields that should be rendered by graphql."),Object(l.b)("li",{parentName:"ul"},"Define fields that should be filterable using the ",Object(l.b)("inlineCode",{parentName:"li"},"@FilterableField")," decorator."),Object(l.b)("li",{parentName:"ul"},"Define validation that will be used by mutations.")),Object(l.b)("p",null,"In this example the DTO and entity are two different classes to clearly demonstrate what is required for ",Object(l.b)("inlineCode",{parentName:"p"},"graphql")," vs\n",Object(l.b)("inlineCode",{parentName:"p"},"typeorm"),". However, you can combine the two into a single class."),Object(l.b)("p",null,"From the root of your project run:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx nest g cl todo-item.dto todo-item\n")),Object(l.b)("p",null,"Now lets fill out the DTO. Add the following to ",Object(l.b)("inlineCode",{parentName:"p"},"src/todo-item/todo-item.dto.ts"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from 'type-graphql';\n\n@ObjectType('TodoItem') // Name that will be used in the graphql schema.\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),Object(l.b)("p",null,"Notice the use of ",Object(l.b)("inlineCode",{parentName:"p"},"@FilterableField")," this will let ",Object(l.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," know to allow filtering on the\ncorresponding field. If you just use ",Object(l.b)("inlineCode",{parentName:"p"},"@Field")," then you will not be able to filter on the corresponding field."),Object(l.b)("h2",{id:"create-the-service"},"Create the Service"),Object(l.b)("p",null,"The service in this example is extending the ",Object(l.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-typeorm")," ",Object(l.b)("inlineCode",{parentName:"p"},"TypeOrmQueryService"),"."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"TypeOrmQueryService")," will provide implementations for:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"query")," - find multiple records."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"findById")," - find a record by its id."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getById")," - get a record by its id or return a rejected promise with a NotFound error."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"createMany")," - create multiple records."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"createOne")," - create one record."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"updateMany")," - update many records."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"updateOne")," - update a single record."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"deleteMany")," - delete multiple records."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"deleteOne")," - delete a single record.")),Object(l.b)("p",null,"Generate the service file."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx nest g s todo-item\n")),Object(l.b)("p",null,"Now add the following to ",Object(l.b)("inlineCode",{parentName:"p"},"src/todo-item/todo-item.service.ts"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { QueryService } from '@nestjs-query/core';\nimport { TypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemDTO)\nexport class TodoItemService extends TypeOrmQueryService<TodoItemDTO, TodoItemEntity> {\n  constructor(\n    @InjectRepository(TodoItemEntity) repo: Repository<TodoItemEntity>,\n  ) {\n    super(repo);\n  }\n}\n\n")),Object(l.b)("p",null,"The important piece is extending ",Object(l.b)("inlineCode",{parentName:"p"},"TypeOrmQueryService")," from ",Object(l.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-typeorm")," this will give you all of the crud methods that your resolver will use."),Object(l.b)("h2",{id:"create-the-resolver"},"Create the Resolver"),Object(l.b)("p",null,"To create the resolver extend ",Object(l.b)("inlineCode",{parentName:"p"},"CRUDResolver")," from ",Object(l.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql"),"."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose expose the following graphql queries and mutations."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Queries")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"todoItems")," - find multiple ",Object(l.b)("inlineCode",{parentName:"li"},"TodoItem"),"s."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"todoItem")," - find one ",Object(l.b)("inlineCode",{parentName:"li"},"TodoItem"),".")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Mutations")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"createManyTodoItems")," - create multiple ",Object(l.b)("inlineCode",{parentName:"li"},"TodoItem"),"s."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"createOneTodoItems")," - create one ",Object(l.b)("inlineCode",{parentName:"li"},"TodoItem"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"updateManyTodoItems")," - update multiple ",Object(l.b)("inlineCode",{parentName:"li"},"TodoItems"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"updateOneTodoItems")," - update one ",Object(l.b)("inlineCode",{parentName:"li"},"TodoItem"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"deleteManyTodoItems")," - delete multiple ",Object(l.b)("inlineCode",{parentName:"li"},"TodoItems"),"s."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"deleteOneTodoItems")," - delete one ",Object(l.b)("inlineCode",{parentName:"li"},"TodoItem"),".")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"NOTE")," By default ",Object(l.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will use the name used by ",Object(l.b)("inlineCode",{parentName:"p"},"type-graphql")," when the DTO is annotated with ",Object(l.b)("inlineCode",{parentName:"p"},"@ObjectType"),"."),Object(l.b)("p",null,"Generate the resolver file."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx nest g r todo-item\n")),Object(l.b)("p",null,"Once the resolver is generated paste the following into ",Object(l.b)("inlineCode",{parentName:"p"},"src/todo-item/todo-item.resolver.ts"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver, Query, Args } from '@nestjs/graphql';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n\n\n")),Object(l.b)("p",null,"Notice how ",Object(l.b)("inlineCode",{parentName:"p"},"TodoItemResolver")," extends ",Object(l.b)("inlineCode",{parentName:"p"},"CRUDResolver")," and the class is annotated with ",Object(l.b)("inlineCode",{parentName:"p"},"@Resolver"),". Without the annotation\nthe resolver ",Object(l.b)("strong",{parentName:"p"},"WILL NOT")," be exposed in the graphql schema."),Object(l.b)("h2",{id:"wire-everything-up"},"Wire everything up."),Object(l.b)("p",null,"Update the ",Object(l.b)("inlineCode",{parentName:"p"},"todo-item.module")," to register the entities."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Module } from '@nestjs/common';\nimport { TodoItemService } from './todo-item.service';\nimport { TodoItemResolver } from './todo-item.resolver';\nimport { TypeOrmModule } from '@nestjs/typeorm';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  providers: [TodoItemService, TodoItemResolver],\n  // add this line.\n  imports: [TypeOrmModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n")),Object(l.b)("p",null,"Update ",Object(l.b)("inlineCode",{parentName:"p"},"app.module")," to import the ",Object(l.b)("inlineCode",{parentName:"p"},"typeorm")," and ",Object(l.b)("inlineCode",{parentName:"p"},"graphql")," nest modules."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Module } from '@nestjs/common';\nimport { GraphQLModule } from '@nestjs/graphql';\nimport { TypeOrmModule } from '@nestjs/typeorm';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { TodoItemModule } from './todo-item/todo-item.module';\nimport { TodoItemEntity } from './todo-item/todo-item.entity';\n\n@Module({\n  imports: [\n    TypeOrmModule.forRoot({\n      // use in memory sqlite\n      type: 'postgres',\n      database: 'gettingstarted',\n      username: 'gettingstarted',\n      entities: [TodoItemEntity],\n      synchronize: true,\n      logging: true,\n    }),\n    GraphQLModule.forRoot({\n      // set to true to automatically generate schema\n      autoSchemaFile: true,\n    }),\n    TodoItemModule,\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n\n")),Object(l.b)("p",null,"Create a ",Object(l.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file in the root of the project"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dockerfile"}),'version: "3"\n\nservices:\n  postgres:\n    image: "postgres:11.5"\n    environment:\n      - "POSTGRES_USER=gettingstarted"\n      - "POSTGRES_DB=gettingstarted"\n    expose:\n      - "5432"\n    ports:\n      - "5432:5432"\n\n')),Object(l.b)("h2",{id:"running-the-example"},"Running the Example"),Object(l.b)("p",null,"Start the backing services"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose up -d\n")),Object(l.b)("p",null,"Start the app"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm start\n")),Object(l.b)("p",null,"Visit ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000/graphql"}),"http://localhost:3000/graphql")," where you should see the playground"),Object(l.b)("img",{alt:"Example playground",src:Object(p.a)("img/introduction/getting-started-playground.png")}),Object(l.b)("h2",{id:"exploring-the-graphql-endpoint"},"Exploring The GraphQL Endpoint"),Object(l.b)("h3",{id:"create-a-todoitem"},"Create a TodoItem"),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createOneTodoItem(\n    input: { title: "Create One Todo Item", completed: false }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "createOneTodoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-01T00:43:16.000Z",\n      "updated": "2020-01-01T00:43:16.000Z"\n    }\n  }\n}\n')))),Object(l.b)("h3",{id:"create-multiple-todoitems"},"Create Multiple TodoItems"),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createManyTodoItems(\n    input: [\n      { title: "Create Many Todo Items - 1", completed: false }\n      { title: "Create Many Todo Items - 2", completed: true }\n    ]\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "createManyTodoItems": [\n      {\n        "id": "2",\n        "title": "Create Many Todo Items - 1",\n        "completed": false,\n        "created": "2020-01-01T00:49:01.000Z",\n        "updated": "2020-01-01T00:49:01.000Z"\n      },\n      {\n        "id": "3",\n        "title": "Create Many Todo Items - 2",\n        "completed": true,\n        "created": "2020-01-01T00:49:01.000Z",\n        "updated": "2020-01-01T00:49:01.000Z"\n      }\n    ]\n  }\n}\n')))),Object(l.b)("h3",{id:"query-for-multiple-todoitems"},"Query For Multiple TodoItems"),Object(l.b)("h4",{id:"query-for-all-todo-items"},"Query for all todo items"),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItems {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjI="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-01T00:43:16.000Z",\n            "updated": "2020-01-01T00:43:16.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        },\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI="\n        }\n      ]\n    }\n  }\n}\n')))),Object(l.b)("h4",{id:"query-for-completed-todo-items"},"Query for completed todo items"),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItems(filter: {completed: {is: true}}){\n    pageInfo{\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges{\n      node{\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjA="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        }\n      ]\n    }\n  }\n}\n')))),Object(l.b)("h3",{id:"query-for-one-todoitem"},"Query For One TodoItem"),Object(l.b)("h4",{id:"query-by-id"},"Query by id"),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItem(id: 1) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n\n"))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-13T06:19:17.543Z",\n      "updated": "2020-01-13T06:19:17.543Z"\n    }\n  }\n}\n')))),Object(l.b)("h3",{id:"update-a-todoitem"},"Update a TodoItem"),Object(l.b)("p",null,"Lets update the completed ",Object(l.b)("inlineCode",{parentName:"p"},"TodoItem")," we created earlier to not be completed."),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  updateOneTodoItem(id: "3", input: { completed: false }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "updateOneTodoItem": {\n      "id": "3",\n      "title": "Create Many Todo Items - 2",\n      "completed": false,\n      "created": "2020-01-13T09:19:46.727Z",\n      "updated": "2020-01-13T09:23:37.658Z"\n    }\n  }\n}\n')))),Object(l.b)("h3",{id:"update-multiple-todoitems"},"Update Multiple TodoItems"),Object(l.b)("p",null,"Lets update the completed ",Object(l.b)("inlineCode",{parentName:"p"},"TodoItem")," we created earlier to not be completed."),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  updateManyTodoItems(\n    filter: { id: { in: ["1", "2"] } }\n    input: { completed: true }\n  ) {\n    updatedCount\n  }\n}\n'))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "updateManyTodoItems": {\n      "updatedCount": 2\n    }\n  }\n}\n')))),Object(l.b)("p",null,"You can check this by running the completed query from above."),Object(l.b)("h3",{id:"delete-one-todoitem"},"Delete One TodoItem"),Object(l.b)("p",null,"Lets update delete the first ",Object(l.b)("inlineCode",{parentName:"p"},"TodoItem"),"."),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"mutation {\n  deleteOneTodoItem(id: 1) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "deleteOneTodoItem": {\n      "id": null,\n      "title": "Create One Todo Item",\n      "completed": true,\n      "created": "2020-01-13T09:44:41.176Z",\n      "updated": "2020-01-13T09:44:54.822Z"\n    }\n  }\n}\n')))),Object(l.b)("h3",{id:"delete-many-todoitems"},"Delete Many TodoItems"),Object(l.b)("p",null,"Lets update delete the create many todo items ",Object(l.b)("inlineCode",{parentName:"p"},"TodoItem")," using a filter."),Object(l.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(l.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  deleteManyTodoItems(filter: { title: { like: "Create Many Todo Items%" } }) {\n    deletedCount\n  }\n}\n'))),Object(l.b)(i.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "deleteManyTodoItems": {\n      "deletedCount": 2\n    }\n  }\n}\n')))))}u.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),b=c(n),s=a,u=b["".concat(o,".").concat(s)]||b[s]||m[s]||l;return n?r.a.createElement(u,i({ref:t},d,{components:n})):r.a.createElement(u,i({ref:t},d))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},147:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===l)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},148:function(e,t,n){"use strict";var a=n(0),r=n(33);t.a=function(){return Object(a.useContext)(r.a)}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(148);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},151:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(147),o=n.n(l),i=n(84),p=n.n(i);const d={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:l,values:i}=e,[c,b]=Object(a.useState)(l),s=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":c===e,className:o()("tab-item",p.a.tabItem,{"tab-item--active":c===e}),key:e,ref:e=>s.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case d.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case d.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(s,e.target,e),onFocus:()=>b(e),onClick:()=>b(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===c)[0]))}},152:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);