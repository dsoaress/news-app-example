import { IdValueObject } from '../shared/value-objects/id.value-object';

export abstract class Entity<I, O> {
  protected readonly _id: IdValueObject;
  protected readonly _props: I;
  protected readonly _errors?: string[];

  protected constructor({
    id,
    props,
    errors,
  }: {
    id?: string;
    props: I;
    errors?: string[];
  }) {
    this._id = IdValueObject.create(id);
    this._props = props;
    this._errors = errors;
    if (this._id.error) this._errors.push(this._id.error);
    if (!this._errors) this._errors = undefined;
  }

  abstract toPlainObject(): O;

  get errors(): string[] | undefined {
    return this._errors;
  }
}
