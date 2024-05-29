export class LotTypeResponse {
  // @ts-ignore
  private _price: number;
  // @ts-ignore
  private _lotType: string;

  get lotType(): string {
    return this._lotType;
  }

  set lotType(value: string) {
    this._lotType = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
