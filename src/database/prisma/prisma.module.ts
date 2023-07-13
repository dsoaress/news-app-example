import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthorRepository } from 'src/domain/authors/interfaces/author.repository';
import { PrismaAuthorRepository } from './repositories/prisma-author.repository';
import { AuthorQuery } from 'src/domain/authors/interfaces/author.query';
import { PrismaAuthorQuery } from './queries/prisma-author.query';

@Module({
  providers: [
    PrismaService,
    {
      provide: AuthorQuery,
      useClass: PrismaAuthorQuery,
    },
    {
      provide: AuthorRepository,
      useClass: PrismaAuthorRepository,
    },
  ],
  exports: [AuthorQuery, AuthorRepository],
})
export class PrismaModule {}
