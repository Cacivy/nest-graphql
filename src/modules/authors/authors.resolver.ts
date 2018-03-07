import { Query, Resolver, ResolveProperty, Mutation } from '@nestjs/graphql';
import { AuthorsService } from './services/authors.service'
import { PostsService } from './services/posts.service'
import { Post } from './entities/post.entity';

@Resolver('Author')
export class AuthorResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService
  ) {}


  @Query('authors')
  async getAllAuthors() {
    return await this.authorsService.findAll()
  }

  @Query('author')
  async getAuthor(obj, args, context, info) {
    return await this.authorsService.findOneById(args.id)
  }

  @Query('posts')
  async getAllPosts() {
    return await this.postsService.findAll()
  }

  @Mutation()
  async createPost(obj, args: Post, context, info) {
    return await this.postsService.create(args)
  }

  @ResolveProperty('posts')
  async getPosts(author) {
    return await this.postsService.findOneById(author.id)
  }

  @Mutation()
  async upvotePost(_, { postId }) {
    return await this.postsService.upvoteById(postId);
  }

  @Mutation()
  async deletePost(obj, args) {
    return await this.postsService.deleteById(args.id)
  }
}