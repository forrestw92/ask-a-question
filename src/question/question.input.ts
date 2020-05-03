import { Field, ID, InputType } from '@nestjs/graphql';
import { IsArray, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateQuestionInput {
    @Field()
    @IsString()
    @MinLength(20)
    @MaxLength(1000)
    name: string;

    @Field(type => [String])
    @IsArray()
    tags: string[];
}
