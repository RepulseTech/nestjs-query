import 'reflect-metadata';
import { buildSchemaSync, Field, ObjectType, Query, Resolver } from 'type-graphql';
import { printSchema } from 'graphql';
import { GraphQLConnection } from './connection.type';

describe('ConnectionType', (): void => {
  @ObjectType('Test')
  class TestDto {
    @Field()
    stringField: string;
  }

  // @ts-ignore
  @ObjectType()
  class TestConnection extends GraphQLConnection(TestDto) {}

  @Resolver(TestDto)
  class TestResolver {
    @Query(() => TestConnection)
    findConnection(): TestConnection | undefined {
      return undefined;
    }
  }

  it('should store metadata', () => {
    const schema = buildSchemaSync({ resolvers: [TestResolver] });

    expect(printSchema(schema)).toContain(
      `"""Cursor for paging through collections"""
scalar ConnectionCursor

type PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor: ConnectionCursor
  endCursor: ConnectionCursor
}

type Query {
  findConnection: TestConnection!
}

type Test {
  stringField: String!
}

type TestConnection {
  pageInfo: PageInfo!
  edges: [TestEdge!]!
}

type TestEdge {
  node: Test!

  """Used in \`before\` and \`after\` args"""
  cursor: ConnectionCursor!
}
`,
    );
  });

  it('should throw an error if the object is not registered with type-graphql', () => {
    class TestBadDto {
      @Field()
      stringField: string;
    }

    expect(() => GraphQLConnection(TestBadDto)).toThrow(
      'unable to make edge for class not registered with type-graphql TestBadDto',
    );
  });

  describe('.create', () => {
    it('should create a connections response with no connection args', async () => {
      const response = TestConnection.create(undefined, {
        entities: [{ stringField: 'foo1' }, { stringField: 'foo2' }],
        totalCount: 20,
      });
      expect(response).toEqual({
        edges: [
          {
            cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
            node: {
              stringField: 'foo1',
            },
          },
          {
            cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            node: {
              stringField: 'foo2',
            },
          },
        ],
        pageInfo: {
          endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        },
      });
    });

    it('should create a connections response with just a first arg', async () => {
      const response = await TestConnection.create(
        { first: 2 },
        {
          entities: [{ stringField: 'foo1' }, { stringField: 'foo2' }],
          totalCount: 20,
        },
      );
      expect(response).toEqual({
        edges: [
          {
            cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
            node: {
              stringField: 'foo1',
            },
          },
          {
            cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            node: {
              stringField: 'foo2',
            },
          },
        ],
        pageInfo: {
          endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
          hasNextPage: true,
          hasPreviousPage: false,
          startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        },
      });
    });

    it('should create a connections response with just a last arg', async () => {
      const response = TestConnection.create(
        { last: 2 },
        {
          entities: [{ stringField: 'foo1' }, { stringField: 'foo2' }],
          totalCount: 20,
        },
      );
      expect(response).toEqual({
        edges: [
          {
            cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
            node: {
              stringField: 'foo1',
            },
          },
          {
            cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
            node: {
              stringField: 'foo2',
            },
          },
        ],
        pageInfo: {
          endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        },
      });
    });
  });
});
