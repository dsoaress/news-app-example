import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorRepository } from '../interfaces/author.repository';

@Injectable()
export class DeleteAuthorCommand {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async execute(id: string): Promise<void> {
    const author = await this.authorRepository.findOne(id);
    if (!author) throw new NotFoundException('Author not found');
    await this.authorRepository.delete(id);
  }
}
