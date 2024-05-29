import {CoordinateResponse} from "./coordinate-response";
import {LotHouseResponse} from "./lot-house-response";
import {LotTypeResponse} from './lot-type-response';

export class LotResponse {
  // @ts-ignore
  private _id: string;
  // @ts-ignore
  private _blockName: string;
  // @ts-ignore
  private _lotName: string;
  // @ts-ignore
  private _status: string;
  // @ts-ignore
  private _size: number;

  // @ts-ignore
  private _coordinates: CoordinateResponse[];
  // @ts-ignore
  private _lotHouses: LotHouseResponse[];
  // @ts-ignore
  private _lotType: LotTypeResponse;

  get lotHouses(): LotHouseResponse[] {
    return this._lotHouses;
  }
  set lotHouses(value: LotHouseResponse[]) {
    this._lotHouses = value;
  }

  get coordinates(): CoordinateResponse[] {
    return this._coordinates;
  }

  set coordinates(value: CoordinateResponse[]) {
    this._coordinates = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get blockName(): string {
    return this._blockName;
  }

  set blockName(value: string) {
    this._blockName = value;
  }

  get lotName(): string {
    return this._lotName;
  }

  set lotName(value: string) {
    this._lotName = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get lotType(): LotTypeResponse {
    return this._lotType;
  }

  set lotType(value: LotTypeResponse) {
    this._lotType = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }
}
