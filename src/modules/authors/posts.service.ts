import { Component } from '@nestjs/common';
import { find, filter } from 'lodash';

@Component()
export class PostsService {
  private readonly posts = [
    { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
    { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
    { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
    { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
  ]

  findOneById(authorId: number) {
    return filter(this.posts, { authorId: authorId })
  }

  findAll() {
    return this.posts
  }

  upvoteById(id: number) {
    let post = find(this.posts, { id });
    if (!post) {
      throw new Error(`Couldn't find post with id ${id}`);
    }
    post.votes++
    return post
  }
} 