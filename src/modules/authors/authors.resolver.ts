import { Query, Resolver, ResolveProperty, Mutation } from '@nestjs/graphql';
import { AuthorsService } from './authors.service'
import { PostsService } from './posts.service'

@Resolver('Author')
export class AuthorResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService
  ) {}


  @Query('authors')
  getAllAuthors() {
    return this.authorsService.findAll()
  }

  @Query('author')
  getAuthor(obj, args, context, info) {
    return this.authorsService.findOneById(args.id)
  }

  @Query('posts')
  getAllPosts() {
    return this.postsService.findAll()
  }

  @ResolveProperty('posts')
  getPosts(author) {
    return this.postsService.findOneById(author.id)
  }

  @Mutation()
  upvotePost(_, { postId }) {
    return this.postsService.upvoteById(postId);
  }

}