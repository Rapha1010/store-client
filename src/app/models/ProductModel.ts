import { Deserializable } from "./Deserializable";

export class ProductModel implements Deserializable {

  id:number = 0;
  description:string = '';
  price:number = 0;
  brand:string = '';

  deserialize(input: ProductModel) {
    Object.assign(this, input);
    return this;
  }
}