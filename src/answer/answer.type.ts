import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Answer')
export class AnswerType {
    @Field(type => ID)
    id: string;

    @Field()
    answer: string;

    @Field()
    createdAt: string;

    @Field()
    upVotes: number;

    @Field()
    downVotes: number;
}
