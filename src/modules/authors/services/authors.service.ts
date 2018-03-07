import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../entities/author.entity';

@Component()
export class AuthorsService {
  constructor(@InjectRepository(Author) private readonly authorRepository: Repository<Author>) { }

  async findOneById(id: number) {
    return await this.authorRepository.findOne({ id })
  }

  async findAll(): Promise<Author[]> {
    return await this.authorRepository.find()
  }
} 