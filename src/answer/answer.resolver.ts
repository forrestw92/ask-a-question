import { Resolver } from '@nestjs/graphql';
import { AnswerType } from './answer.type';
import { AnswerService } from './answer.service';

@Resolver(of => AnswerType)
export class AnswerResolver {
    constructor(private answerService: AnswerService) {}
}
