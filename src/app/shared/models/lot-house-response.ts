export class LotHouseResponse {
  // @ts-ignore
  private _houseName: string;
  get houseName(): string {
    return this._houseName;
  }

  set houseName(value: string) {
    this._houseName = value;
  }
}
