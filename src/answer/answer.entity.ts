import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Answer {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    answer: string;

    @Column()
    createdAt: string;

    @Column()
    upVotes: number;

    @Column()
    downVotes: number;
}
