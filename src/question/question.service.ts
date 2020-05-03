import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionInput } from './question.input';
import { v4 as uuid } from 'uuid';
@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
    ) {}
    async getMany() {
        return this.questionRepository.find();
    }

    async createQuestion(
        createQuestionInput: CreateQuestionInput,
    ): Promise<Question> {
        const { name } = createQuestionInput;
        const now = new Date();
        const question = await this.questionRepository.create({
            id: uuid(),
            createdAt: now.toISOString(),
            name,
        });
        return await this.questionRepository.save(question);
    }
}
