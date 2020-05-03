import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './answer.entity';
import { AnswerResolver } from './answer.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Answer])],
    providers: [AnswerResolver, AnswerService],
})
export class AnswerModule {}
