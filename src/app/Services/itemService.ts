import {Item} from '../models/item.model';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {Guid} from 'guid-typescript';

export class ItemService {
  items: Item[] = [];
  itemsChanged = new Subject<Item[]>();

  getItemsForList(listId:Guid) {
    return this.items.slice().filter(x=>x.listId === listId);
  }

  addItem(item:Item){
    this.items.push(item);
    this.itemsChanged.next(this.getItemsForList(item.listId));
  }

  removeItem(item: Item){
    let index = this.items.indexOf(item);
    console.log('removeItem');
    console.log(index);
    console.log(this.items);
    this.items.splice(index, 1);
    console.log(this.items);
    this.itemsChanged.next(this.getItemsForList(item.listId));
  }
}
