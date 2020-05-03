import { Module } from '@nestjs/common';
import { QuestionModule } from './question/question.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question/question.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { AnswerModule } from './answer/answer.module';
import { Answer } from './answer/answer.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: 'mongodb://localhost/question',
            synchronize: true,
            useUnifiedTopology: true,
            entities: [Question, Answer],
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),
        QuestionModule,
        AnswerModule,
    ],
})
export class AppModule {}
