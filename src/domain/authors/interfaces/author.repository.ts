import { AuthorEntity } from '../author.entity';

export abstract class AuthorRepository {
  abstract create(author: AuthorEntity): Promise<void>;
  abstract findOne(id: string): Promise<AuthorEntity | null>;
  abstract update(author: AuthorEntity): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
