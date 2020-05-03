import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from './answer.entity';
import { Repository } from 'typeorm';
import { CreateAnswerInput } from './answer.input';
import { v4 as uuid } from 'uuid';
@Injectable()
export class AnswerService {
    constructor(
        @InjectRepository(Answer)
        private answerRepository: Repository<Answer>,
    ) {}

    async findOne(id: string): Promise<Answer> {
        return this.answerRepository.findOne({ id });
    }

    async getMany(): Promise<Answer[]> {
        return this.answerRepository.find();
    }

    async createAnswer(createAnswerInput: CreateAnswerInput): Promise<Answer> {
        const { answer } = createAnswerInput;
        const now = new Date();
        const newAnswer = await this.answerRepository.create({
            answer,
            createdAt: now.toISOString(),
            id: uuid(),
        });
        return this.answerRepository.save(newAnswer);
    }
}
