import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionInput } from './question.input';
import { v4 as uuid } from 'uuid';
import { FindQuestionInput } from './find-question.input';
@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
    ) {}
    async findOne(id: string): Promise<Question> {
        return this.questionRepository.findOne({ id });
    }

    async getMany(findQuestionInput: FindQuestionInput): Promise<Question[]> {
        if (findQuestionInput) {
            const { name, tags } = findQuestionInput;
            let regex = name ? name.replace(' ', '|') : '.*';
            return this.questionRepository.find({
                where: {
                    name: {
                        $regex: regex,
                    },
                    tags: {
                        $in: tags,
                    },
                },
            });
        } else {
            return this.questionRepository.find();
        }
    }

    async downVoteQuestion(id: string): Promise<Question> {
        const question = await this.questionRepository.findOne({ id });
        question.downVotes = question.downVotes - 1;
        return this.questionRepository.save(question);
    }

    async upVoteQuestion(id: string): Promise<Question> {
        const question = await this.questionRepository.findOne({ id });
        question.upVotes = question.upVotes + 1;
        return this.questionRepository.save(question);
    }

    async createQuestion(
        createQuestionInput: CreateQuestionInput,
    ): Promise<Question> {
        const { name, tags } = createQuestionInput;
        const now = new Date();
        const question = await this.questionRepository.create({
            id: uuid(),
            createdAt: now.toISOString(),
            name,
            tags: tags || [],
            upVotes: 0,
            downVotes: 0,
            answers: [],
        });
        return await this.questionRepository.save(question);
    }
}
