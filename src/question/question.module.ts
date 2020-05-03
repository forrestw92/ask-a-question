import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { QuestionResolver } from './question.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Question])],
    providers: [QuestionService, QuestionResolver],
})
export class QuestionModule {}
