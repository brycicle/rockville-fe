export class HouseDetailsResponse {
  // @ts-ignore
  private _detail: string;
  get detail(): string {
    return this._detail;
  }
  set detail(value: string) {
    this._detail = value;
  }
}
