import {HouseDetail} from "./house-detail";
import {HousePicture} from "./house-picture";

export class House {
  private _houseId: string;
  private _name: string;
  private _floorArea: number;
  private _lotArea: number;
  private _price: number;
  private _basePrice: number;
  get basePrice(): number {
    return this._basePrice;
  }

  set basePrice(value: number) {
    this._basePrice = value;
  }

  private _multiplier: number;
  private _details: Array<HouseDetail>;
  private _pictures: Array<HousePicture>;


  get pictures(): Array<HousePicture> {
    return this._pictures;
  }

  set pictures(value: Array<HousePicture>) {
    this._pictures = value;
  }

  get multiplier(): number {
    return this._multiplier;
  }

  set multiplier(value: number) {
    this._multiplier = value;
  }

  constructor(houseId: string, name: string, floorArea: number, lotArea: number, price: number, basePrice: number, multiplier: number, details: Array<HouseDetail>, pictures: Array<HousePicture>) {
    this._houseId = houseId;
    this._name = name;
    this._floorArea = floorArea;
    this._lotArea = lotArea;
    this._price = price;
    this._basePrice = basePrice;
    this._multiplier = multiplier;
    this._details = details;
    this._pictures = pictures;
  }

  get houseId(): string {
    return this._houseId;
  }

  set houseId(value: string) {
    this._houseId = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get floorArea(): number {
    return this._floorArea;
  }

  set floorArea(value: number) {
    this._floorArea = value;
  }

  get lotArea(): number {
    return this._lotArea;
  }

  set lotArea(value: number) {
    this._lotArea = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get details(): Array<HouseDetail> {
    return this._details;
  }

  set details(value: Array<HouseDetail>) {
    this._details = value;
  }
}
