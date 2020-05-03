import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QuestionType } from './question.type';
import { QuestionService } from './question.service';
import { CreateQuestionInput } from './question.input';

@Resolver(of => QuestionType)
export class QuestionResolver {
    constructor(private questionService: QuestionService) {}
    @Query(returns => QuestionType)
    questions() {
        return this.questionService.getMany();
    }
    @Mutation(returns => QuestionType)
    createQuestion(
        @Args('createQuestionInput') createQuestionInput: CreateQuestionInput,
    ) {
        return this.questionService.createQuestion(createQuestionInput);
    }
}
