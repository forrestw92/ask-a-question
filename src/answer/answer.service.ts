import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from './answer.entity';
import { Repository } from 'typeorm';
import { CreateAnswerInput } from './answer.input';
import { v4 as uuid } from 'uuid';
import { Question } from '../question/question.entity';
@Injectable()
export class AnswerService {
    constructor(
        @InjectRepository(Answer)
        private answerRepository: Repository<Answer>,

        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
    ) {}
    async getAnswers(): Promise<Answer[]> {
        return this.answerRepository.find();
    }
    async findOne(id: string): Promise<Answer> {
        return this.answerRepository.findOne({ id });
    }

    async getMany(answerIds: string[]): Promise<Answer[]> {
        return this.answerRepository.find({
            where: {
                id: {
                    $in: answerIds || [],
                },
            },
        });
    }

    async createAnswer(createAnswerInput: CreateAnswerInput): Promise<Answer> {
        const { answer, questionId } = createAnswerInput;
        const now = new Date();
        const question = await this.questionRepository.findOne({
            id: questionId,
        });
        const newAnswer = await this.answerRepository.create({
            answer,
            createdAt: now.toISOString(),
            id: uuid(),
        });
        question.answers = [...question.answers, newAnswer.id];
        await this.questionRepository.save(question);
        return this.answerRepository.save(newAnswer);
    }
}
