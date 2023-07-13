export abstract class ValueObject<T> {
  private readonly _value: T;
  private readonly _error?: string;

  protected constructor(value: T, error?: string) {
    this._value = value;
    this._error = error;
  }

  get value(): T {
    return this._value;
  }

  get error(): string | undefined {
    return this._error;
  }
}
