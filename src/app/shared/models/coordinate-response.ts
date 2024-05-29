import {LotCoordinate} from "./lot-coordinate";
import {Lot} from "./lot";

export class CoordinateResponse {
  // @ts-ignore
  private _coorX: number;
  // @ts-ignore
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
}
