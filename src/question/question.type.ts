import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AnswerType } from '../answer/answer.type';

@ObjectType('Question')
export class QuestionType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    createdAt: string;

    @Field(type => [AnswerType])
    answers: string[];
}
