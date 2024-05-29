export class HouseDetail {
  private _detail: string;

  constructor(detail: string) {
    this._detail = detail;
  }

  get detail(): string {
    return this._detail;
  }

  set detail(value: string) {
    this._detail = value;
  }
}
