import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID, MaxLength, MinLength } from 'class-validator';
import { type } from 'os';

@InputType()
export class CreateAnswerInput {
    @Field()
    @MinLength(1)
    @MaxLength(3000)
    answer: string;

    @Field()
    @IsUUID('4')
    questionId: string;
}
