import { OnInit } from '@angular/core';
import {Guid} from 'guid-typescript';

export class Item implements OnInit {


  public name: string;

  private _listId:Guid;
  constructor (listId: Guid, name: string) {
    this._listId = listId;
    this.name = name;
  }
  get listId(): Guid {
    return this._listId;
  }
  ngOnInit(): void {

  }
}
