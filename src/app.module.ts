import {
  Module,
  MiddlewaresConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { graphqlExpress, graphiqlExpress  } from 'apollo-server-express';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { loggerMiddleware } from './common/middlewares/logger.middleware';
import { UsersModule } from './modules/users/users.module';
import { AuthorModule } from './modules/authors/authors.module';

@Module({
  imports: [TypeOrmModule.forRoot(), 
    UsersModule, GraphQLModule, AuthorModule],
})
export class ApplicationModule implements NestModule {
  constructor(private readonly graphQLFactory: GraphQLFactory) {}

  configure(consumer: MiddlewaresConsumer) {
    const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql')
    const schema = this.graphQLFactory.createSchema({ typeDefs })
    consumer
      .apply(graphiqlExpress({ endpointURL: '/graphql' }))
      .forRoutes({ path: '/graphiql', method: RequestMethod.GET })
      .apply(graphqlExpress(req => ({ schema, rootValue: req })))
      .forRoutes({ path: '/graphql', method: RequestMethod.ALL })

    consumer.apply(loggerMiddleware).forRoutes(
      {path: '/users', method: RequestMethod.ALL}
    )
  }
}