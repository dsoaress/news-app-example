import { Injectable } from '@nestjs/common';
import { AuthorQuery } from '../interfaces/author.query';
import { AuthorOutputDto } from '../dtos/author-output.dto';

@Injectable()
export class FindAllAuthorsQuery {
  constructor(private readonly authorQuery: AuthorQuery) {}

  async execute(): Promise<AuthorOutputDto[]> {
    return this.authorQuery.findAll();
  }
}
