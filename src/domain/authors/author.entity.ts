import { Entity } from 'src/core/base/entity';
import { AuthorInputDto } from './dtos/author-input.dto';
import { AuthorOutputDto } from './dtos/author-output.dto';

export class AuthorEntity extends Entity<AuthorInputDto, AuthorOutputDto> {
  static create({
    id,
    props,
  }: {
    id?: string;
    props: AuthorInputDto;
  }): AuthorEntity {
    const errors = this.validate(props);
    return new AuthorEntity({ id, props, errors });
  }

  get id(): string {
    return this._id.value;
  }

  get name(): string {
    return this._props.name;
  }

  get bio(): string {
    return this._props.bio;
  }

  update(props: Partial<AuthorInputDto>): void {
    this._props.name = props.name ?? this.name;
    this._props.bio = props.bio ?? this.bio;
  }

  toPlainObject(): AuthorOutputDto {
    return {
      id: this.id,
      name: this.name,
      bio: this.bio,
    };
  }

  private static validate(props: AuthorInputDto): string[] | undefined {
    const errors: string[] = [];
    if (!props.name) errors.push('Invalid author name: name is required');
    if (!props.bio) errors.push('Invalid author bio: bio is required');
    return errors.length ? errors : undefined;
  }
}
