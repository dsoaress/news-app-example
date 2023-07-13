import { AuthorEntity } from 'src/domain/authors/author.entity';
import { AuthorRepository } from 'src/domain/authors/interfaces/author.repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAuthorRepository implements AuthorRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(author: AuthorEntity): Promise<void> {
    const { id, bio, name } = author.toPlainObject();
    await this.prismaService.author.create({
      data: {
        id,
        bio,
        name,
      },
    });
  }

  async findOne(id: string): Promise<AuthorEntity | null> {
    return this.prismaService.author
      .findUnique({
        where: { id },
      })
      .then((res) => res && AuthorEntity.create({ id: res.id, props: res }));
  }

  async update(author: AuthorEntity): Promise<void> {
    await this.prismaService.author.update({
      where: {
        id: author.id,
      },
      data: {
        name: author.name,
        bio: author.bio,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.author.delete({ where: { id } });
  }
}
