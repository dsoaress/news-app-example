import { randomUUID } from 'node:crypto';

import { ValueObject } from '../../base/value-object';

export class IdValueObject extends ValueObject<string> {
  static create(value?: string): IdValueObject {
    const id = value ?? randomUUID();
    const error = this.validate(id);
    return new IdValueObject(id, error);
  }

  private static validate(value: string): string | undefined {
    const regexExp =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    if (!regexExp.test(value))
      return 'Invalid id value: id must be a valid UUID';
  }
}
