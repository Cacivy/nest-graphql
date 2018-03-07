import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn() id: ObjectID;

  @Column() authorId: number

  @Column() title: string;

  @Column() votes: number
}