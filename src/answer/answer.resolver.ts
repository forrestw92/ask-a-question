import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AnswerType } from './answer.type';
import { AnswerService } from './answer.service';
import { CreateAnswerInput } from './answer.input';

@Resolver(of => AnswerType)
export class AnswerResolver {
    constructor(private answerService: AnswerService) {}

    @Mutation(returns => AnswerType)
    createAnswer(
        @Args('createAnswerInput') createAnswerInput: CreateAnswerInput,
    ) {
        return this.answerService.createAnswer(createAnswerInput);
    }

    @Query(returns => [AnswerType])
    answers() {
        return this.answerService.getAnswers();
    }

    @Query(returns => AnswerType)
    answer(@Args('id') id: string) {
        return this.answerService.findOne(id);
    }
}
