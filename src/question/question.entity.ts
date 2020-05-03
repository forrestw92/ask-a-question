import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Question {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    createdAt: string;

    @Column()
    answers: string[];

    @Column()
    upVotes: number;

    @Column()
    downVotes: number;
}
