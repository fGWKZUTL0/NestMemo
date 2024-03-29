import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      /* MEMO: 現在のバージョンではmain.tsでcorsを設定するため以下は不要。学習用に一応コメントで残しておく */
      // cors: {
      //   origin: '*',
      // },
    }),
    TaskModule,
  ],
})
export class AppModule {}
