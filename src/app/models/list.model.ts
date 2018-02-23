import {Item} from './item.model';
import {Guid} from 'guid-typescript';
import {ItemService} from '../Services/itemService';

export class List {
  public name: string;
  private items: Item[];
  private _id: Guid;
  private _userId: Guid;

  get Items(): Item[] {
    return this.items.slice();
  };

  get userId(): Guid {
    return this._userId;
  }

  constructor(userId: Guid, name: string, items: Item[], private itemService: ItemService) {
    this.items = items === undefined ? itemService.items : items;
    this.name = name;
    this._id = Guid.create();
    this._userId = userId;
    this.itemService.itemsChanged.subscribe(
      (items: Item[]) => {
        let newItems = items.filter(x => x.listId === this._id);
        console.log('New items' + newItems);
        if (newItems.length > 0)
          this.items = newItems;
        console.log('Items for listId: ' + this._id + ' has changed.');
        console.log(this.items);
      }
    );
  }

  get id(): Guid {
    return this._id;
  }

  addItem(item: Item) {
    this.itemService.addItem(item);
  }

  removeItem(item: Item) {
    this.itemService.removeItem(item);
  }

}
