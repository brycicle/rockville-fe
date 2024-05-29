export class HousePictureResponse {
  // @ts-ignore
  private _image: string;
  // @ts-ignore
  private _description: string;
  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
  get image(): string {
    return this._image;
  }
  set image(value: string) {
    this._image = value;
  }
}
