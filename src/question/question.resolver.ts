import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql';
import { QuestionType } from './question.type';
import { QuestionService } from './question.service';
import { CreateQuestionInput } from './question.input';
import { Question } from './question.entity';
import { AnswerService } from '../answer/answer.service';
import { AnswerType } from '../answer/answer.type';
import { FindQuestionInput } from './find-question.input';

@Resolver(of => QuestionType)
export class QuestionResolver {
    constructor(
        private questionService: QuestionService,
        private answerService: AnswerService,
    ) {}

    @Query(returns => QuestionType)
    question(@Args('id') id: string) {
        return this.questionService.findOne(id);
    }

    @Query(returns => [QuestionType])
    questions(
        @Args('findQuestionInput', { nullable: true })
        findQuestionInput: FindQuestionInput,
    ) {
        return this.questionService.getMany(findQuestionInput);
    }

    @Mutation(returns => QuestionType)
    createQuestion(
        @Args('createQuestionInput') createQuestionInput: CreateQuestionInput,
    ) {
        return this.questionService.createQuestion(createQuestionInput);
    }

    @Mutation(returns => QuestionType)
    upVote(@Args('id') id: string) {
        return this.questionService.upVoteQuestion(id);
    }

    @Mutation(returns => QuestionType)
    downVote(@Args('id') id: string) {
        return this.questionService.downVoteQuestion(id);
    }

    @ResolveField()
    answers(@Parent() question: Question) {
        return this.answerService.getMany(question.answers);
    }
}
