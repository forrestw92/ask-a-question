import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateQuestionInput {
    @Field()
    @MinLength(20)
    name: string;
}
