export class LotCoordinate {
  private _coorX: number;
  private _coorY: number;
  get coorX(): number {
    return this._coorX;
  }

  set coorX(value: number) {
    this._coorX = value;
  }

  get coorY(): number {
    return this._coorY;
  }

  set coorY(value: number) {
    this._coorY = value;
  }


  constructor(x: number, y: number) {
    this._coorX = x;
    this._coorY = y;
  }
}
