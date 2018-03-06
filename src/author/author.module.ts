import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';

@Module({
    components: [AuthorResolver],
})
export class AuthorModule {}