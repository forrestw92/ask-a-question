import { Module } from '@nestjs/common';
import { QuestionModule } from './question/question.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question/question.entity';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: 'mongodb://localhost/question',
            synchronize: true,
            useUnifiedTopology: true,
            entities: [Question],
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),
        QuestionModule,
    ],
})
export class AppModule {}
