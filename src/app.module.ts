import { Module } from '@nestjs/common';
import { AuthorModule } from './domain/authors/author.module';

@Module({
  imports: [AuthorModule],
})
export class AppModule {}
