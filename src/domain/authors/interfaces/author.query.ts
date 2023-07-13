import { AuthorOutputDto } from '../dtos/author-output.dto';

export abstract class AuthorQuery {
  abstract findAll(): Promise<AuthorOutputDto[]>;
  abstract findOne(id: string): Promise<AuthorOutputDto | null>;
}
