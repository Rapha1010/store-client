import { Deserializable } from "./Deserializable";

export class ProductModel implements Deserializable {

  id:number = 0;
  descricao:string = '';
  valor:number = 0;
  marca:string = '';

  deserialize(input: ProductModel) {
    Object.assign(this, input);
    return this;
  }
}