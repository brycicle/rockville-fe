

export class LotObject {
  get centerX(): number {
    return this._centerX;
  }

  set centerX(value: number) {
    this._centerX = value;
  }

  get centerY(): number {
    return this._centerY;
  }

  set centerY(value: number) {
    this._centerY = value;
  }
  private _lotId: string;
  private _coordinates: string;
  private _lotNumber: string;
  private _blockNumber: string;
  private _status: string;
  private _size: number;
  private _centerX: number;
  private _centerY: number;

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

  get coordinates(): string {
    return this._coordinates;
  }

  set coordinates(value: string) {
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


  constructor(lotId: string, coordinates: string, lotNumber: string, blockNumber: string, status: string, size: number, centerX: number, centerY: number) {
    this._lotId = lotId;
    this._coordinates = coordinates;
    this._lotNumber = lotNumber;
    this._blockNumber = blockNumber;
    this._status = status;
    this._size = size;
    this._centerX = centerX;
    this._centerY = centerY;
  }
}
