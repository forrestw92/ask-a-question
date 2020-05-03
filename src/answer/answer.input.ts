import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, MinLength } from 'class-validator';

@InputType()
export class AnswerInput {
    @Field()
    @MinLength(1)
    @MaxLength(3000)
    answer: string;
}