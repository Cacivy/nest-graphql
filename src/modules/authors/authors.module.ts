import { Module } from '@nestjs/common';
import { AuthorResolver } from './authors.resolver';
import { AuthorsService } from './services/authors.service'
import { PostsService } from './services/posts.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Post } from './entities/post.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Author, Post])],
    components: [AuthorResolver, AuthorsService, PostsService],
})
export class AuthorModule {}