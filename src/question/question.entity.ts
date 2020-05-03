import { Column, Entity, Index, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@Index('text', ['name'], { fulltext: true })
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

    @Column()
    tags: string[];
}
