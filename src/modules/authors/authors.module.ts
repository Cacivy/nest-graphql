import { Module } from '@nestjs/common';
import { AuthorResolver } from './authors.resolver';
import { AuthorsService } from './authors.service'
import { PostsService } from './posts.service'

@Module({
    components: [AuthorResolver, AuthorsService, PostsService],
})
export class AuthorModule {}