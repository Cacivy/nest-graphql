import { Component } from '@nestjs/common';

@Component()
export class AuthorsService {
  private readonly authors = [
    { id: 1, firstName: 'Tom', lastName: 'Coleman' },
    { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
    { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
  ]

  findOneById(id: number) {
    return this.authors.find(author => author.id === id)
  }

  findAll() {
    return this.authors
  }
} 