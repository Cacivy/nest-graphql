import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Author {
  @ObjectIdColumn() id: ObjectID;

  @Column() firstName: string;

  @Column() lastName: string;
}