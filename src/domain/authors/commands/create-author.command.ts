import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthorRepository } from '../interfaces/author.repository';
import { AuthorInputDto } from '../dtos/author-input.dto';
import { AuthorEntity } from '../author.entity';

@Injectable()
export class CreateAuthorCommand {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async execute(props: AuthorInputDto): Promise<void> {
    const author = AuthorEntity.create({ props });
    if (author.errors) throw new BadRequestException(author.errors);
    await this.authorRepository.create(author);
  }
}
