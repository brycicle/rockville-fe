import {LotCoordinate} from "./lot-coordinate";

export class Lot {
  private _lotId: string;
  private _coordinates: Array<LotCoordinate>;
  private _lotNumber: string;
  private _houses: Array<string>;
  private _blockNumber: string;
  private _status: string;
  private _type: string;
  private _price: number;
  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  private _size: number;

  get houses(): Array<string> {
    return this._houses;
  }

  set houses(value: Array<string>) {
    this._houses = value;
  }

  get lotId(): string {
    return this._lotId;
  }

  set lotId(value: string) {
    this._lotId = value;
  }

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


  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  constructor(lotId: string, coordinates: LotCoordinate[], lotNumber: string, blockNumber: string, status: string, type: string, size: number, houses: string[], price: number) {
    this._lotId = lotId;
    this._coordinates = coordinates;
    this._lotNumber = lotNumber;
    this._blockNumber = blockNumber;
    this._status = status;
    this._type = type;
    this._size = size;
    this._houses = houses;
    this._price = price;
  }
}
