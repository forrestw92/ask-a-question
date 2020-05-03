import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Question')
export class QuestionType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    createdAt: string;
}
