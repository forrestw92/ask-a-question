import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { QuestionResolver } from './question.resolver';
import { AnswerModule } from '../answer/answer.module';

@Module({
    imports: [AnswerModule, TypeOrmModule.forFeature([Question])],
    providers: [QuestionService, QuestionResolver],
})
export class QuestionModule {}
