import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthorRepository } from '../interfaces/author.repository';
import { AuthorInputDto } from '../dtos/author-input.dto';

@Injectable()
export class UpdateAuthorCommand {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async execute(id: string, props: Partial<AuthorInputDto>): Promise<void> {
    const author = await this.authorRepository.findOne(id);
    if (!author) throw new NotFoundException('Author not found');
    author.update(props);
    if (author.errors) throw new BadRequestException(author.errors);
    await this.authorRepository.update(author);
  }
}
