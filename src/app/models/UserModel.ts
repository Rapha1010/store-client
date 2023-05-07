import { Deserializable } from "./Deserializable";

export class UserModel implements Deserializable {

  userId:string = '';
  login:string = '';
  name:string = '';
  email:string = '';
  password:string = '';
  lastUpdateDate:string = '';
  creationDate:string = '';
  admin: boolean = false;
  token:string = '';

  deserialize(input: UserModel) {
    Object.assign(this, input);
    return this;
  }
}