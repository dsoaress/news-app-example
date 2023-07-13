import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { CreateAuthorCommand } from './commands/create-author.command';
import { DeleteAuthorCommand } from './commands/delete-author.command';
import { UpdateAuthorCommand } from './commands/update-author.command';
import { DatabaseModule } from 'src/database/database.module';
import { FindOneAuthorQuery } from './queries/find-one-author.query';
import { FindAllAuthorsQuery } from './queries/find-all-authors.query';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorController],
  providers: [
    FindOneAuthorQuery,
    FindAllAuthorsQuery,
    CreateAuthorCommand,
    DeleteAuthorCommand,
    UpdateAuthorCommand,
  ],
})
export class AuthorModule {}
