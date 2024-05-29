import {HouseDetailsResponse} from "./house-details-response";
import {HousePictureResponse} from "./house-picture-response";

export class HouseResponse {
  // @ts-ignore
  private _id: string;
  // @ts-ignore
  private _name: string;
  // @ts-ignore
  private _lotArea: number;
  // @ts-ignore
  private _floorArea: number;
  // @ts-ignore
  private _price: number;
  // @ts-ignore
  get basePrice(): number {
    return this._basePrice;
  }

  set basePrice(value: number) {
    this._basePrice = value;
  }

  private _multiplier: number;
  // @ts-ignore
  private _basePrice: number;
  // @ts-ignore
  private _details: HouseDetailsResponse[];
  // @ts-ignore
  private _pictures: HousePictureResponse[];

  get pictures(): HousePictureResponse[] {
    return this._pictures;
  }

  get multiplier(): number {
    return this._multiplier;
  }

  set multiplier(value: number) {
    this._multiplier = value;
  }

  set pictures(value: HousePictureResponse[]) {
    this._pictures = value;
  }

// @ts-ignore
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lotArea(): number {
    return this._lotArea;
  }

  set lotArea(value: number) {
    this._lotArea = value;
  }

  get floorArea(): number {
    return this._floorArea;
  }

  set floorArea(value: number) {
    this._floorArea = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get details(): HouseDetailsResponse[] {
    return this._details;
  }

  set details(value: HouseDetailsResponse[]) {
    this._details = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}
