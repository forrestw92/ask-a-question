import { forwardRef, Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './answer.entity';
import { AnswerResolver } from './answer.resolver';
import { Question } from '../question/question.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Answer, Question])],
    providers: [AnswerResolver, AnswerService],
    exports: [AnswerService],
})
export class AnswerModule {}
