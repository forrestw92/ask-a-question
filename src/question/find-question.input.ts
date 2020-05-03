import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class FindQuestionInput {
    @Field(type => [String], { nullable: true })
    @IsOptional({ each: true })
    tags: string[];

    @Field(type => String, { nullable: true })
    @IsOptional()
    name: string;
}
