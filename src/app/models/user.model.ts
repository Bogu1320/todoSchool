import {Guid} from 'guid-typescript';

export class User {

  private _id: Guid;

  public name: string;
  public password: string;

  constructor(name: string, password: string) {
    this._id = Guid.create();
    this.name = name;
    this.password = password;
  }
  get id(): Guid {
    return this._id;
  }
}
