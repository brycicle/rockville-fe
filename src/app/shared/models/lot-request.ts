import {LotCoordinate} from "./lot-coordinate";
import {Lot} from "./lot";

export class LotRequest {
  private _coordinates: Array<LotCoordinate>;
  private _lotNumber: string;
  private _blockNumber: string;
  private _status: string;
  private _size: number;

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get coordinates(): Array<LotCoordinate> {
    return this._coordinates;
  }

  set coordinates(value: Array<LotCoordinate>) {
    this._coordinates = value;
  }

  get lotNumber(): string {
    return this._lotNumber;
  }

  set lotNumber(value: string) {
    this._lotNumber = value;
  }

  get blockNumber(): string {
    return this._blockNumber;
  }

  set blockNumber(value: string) {
    this._blockNumber = value;
  }

  constructor(lot: Lot) {
    let coordinates: LotCoordinate[] = [];
    for (let coordinate of lot.coordinates) {
      coordinates.push(
        new LotCoordinate(coordinate.coorX/4, coordinate.coorY/2.5)
      )
    }
    this._coordinates = coordinates;
    this._lotNumber = lot.lotNumber;
    this._blockNumber = lot.blockNumber;
    this._status = lot.status;
    this._size = lot.size;
  }
}
