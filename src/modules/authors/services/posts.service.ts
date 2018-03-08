import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';

@Component()
export class PostsService {
  constructor(@InjectRepository(Post) private readonly postRepository: Repository<Post>) {}

  async findOneById(authorId: number) {
    return await this.postRepository.findOne({authorId})
  }

  async findAll() {
    return await this.postRepository.find()
  }

  async upvoteById(id: number) {
    let post = await this.postRepository.findOneById(id)
    if (!post) {
      throw new Error(`Couldn't find post with id ${id}`);
    }
    post.votes++
    await this.postRepository.save(post)
    return post
  }

  async create(post: Post) {
    return await this.postRepository.save(post)
  }

  async deleteById(id: string) {
    let post = await this.postRepository.findOneById(id)
    return await this.postRepository.remove(post)
  }

  async delete(args) {
    return await this.postRepository.delete(args)
  }
} 