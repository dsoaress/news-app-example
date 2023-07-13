import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorQuery } from '../interfaces/author.query';
import { AuthorOutputDto } from '../dtos/author-output.dto';

@Injectable()
export class FindOneAuthorQuery {
  constructor(private readonly authorQuery: AuthorQuery) {}

  async execute(id: string): Promise<AuthorOutputDto> {
    const author = await this.authorQuery.findOne(id);
    if (!author) throw new NotFoundException('Author not found');
    return author;
  }
}
