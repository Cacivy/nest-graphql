import { Component } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Component()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'alan',
      age: 18
    }
  ];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User | undefined {
    return this.users.find(x => x.id === +id)
  }
}