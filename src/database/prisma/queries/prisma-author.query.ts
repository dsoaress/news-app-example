import { Injectable } from '@nestjs/common';
import { AuthorOutputDto } from 'src/domain/authors/dtos/author-output.dto';
import { AuthorQuery } from 'src/domain/authors/interfaces/author.query';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAuthorQuery implements AuthorQuery {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<AuthorOutputDto[]> {
    return this.prismaService.author.findMany();
  }

  async findOne(id: string): Promise<AuthorOutputDto | null> {
    return this.prismaService.author.findUnique({ where: { id } });
  }
}
