import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateAuthorCommand } from './commands/create-author.command';
import { DeleteAuthorCommand } from './commands/delete-author.command';
import { UpdateAuthorCommand } from './commands/update-author.command';
import { AuthorInputDto } from './dtos/author-input.dto';
import { FindAllAuthorsQuery } from './queries/find-all-authors.query';
import { FindOneAuthorQuery } from './queries/find-one-author.query';
import { AuthorOutputDto } from './dtos/author-output.dto';

@Controller('authors')
export class AuthorController {
  constructor(
    private readonly findAllAuthorsQuery: FindAllAuthorsQuery,
    private readonly findOneAuthorQuery: FindOneAuthorQuery,
    private readonly createAuthorCommand: CreateAuthorCommand,
    private readonly deleteAuthorCommand: DeleteAuthorCommand,
    private readonly updateAuthorCommand: UpdateAuthorCommand,
  ) {}

  @Get()
  async findAll(): Promise<AuthorOutputDto[]> {
    return this.findAllAuthorsQuery.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AuthorOutputDto> {
    return this.findOneAuthorQuery.execute(id);
  }

  @Post()
  async create(@Body() props: AuthorInputDto): Promise<void> {
    await this.createAuthorCommand.execute(props);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() props: Partial<AuthorInputDto>,
  ): Promise<void> {
    await this.updateAuthorCommand.execute(id, props);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteAuthorCommand.execute(id);
  }
}
