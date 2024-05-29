import {LotResponse} from "./lot-response";
import {HouseResponse} from "./house-response";

export class GetHouseResponse {
  get data(): HouseResponse[] {
    return this._data;
  }

  set data(value: HouseResponse[]) {
    this._data = value;
  }
  // @ts-ignore
  private _data: HouseResponse[];
}
