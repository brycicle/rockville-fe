import {LotResponse} from "./lot-response";

export class GetLotResponse {
  get data(): LotResponse[] {
    return this._data;
  }

  set data(value: LotResponse[]) {
    this._data = value;
  }
  // @ts-ignore
  private _data: LotResponse[];
}
