import {List} from '../models/list.model';
import {Guid} from 'guid-typescript';
import {Item} from '../models/item.model';
import {ItemService} from './itemService';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ListService {
  private listRepository: List[] = [];
  listChanged = new Subject<List[]>();

  constructor(private itemService: ItemService) {

  }

  getListById(id: Guid) {
    return this.listRepository.slice().find(x => x.id === id);
  }

  addNewList(listname: string, userId: Guid) {
    let items: Item[] = [];
    let list = new List(userId, listname, items, this.itemService);
    console.log('addNewList');
    console.log('List: ' + list);
    this.listRepository.push(list);
    this.listChanged.next(this.getListsByUserId(userId));
    return list.id;
  }

  getListsByUserId(userId: Guid) {
    return this.listRepository.slice().filter(x => x.userId === userId);
  }
  removeList(list:List){
    let userId = list.userId;
    for(let i of list.Items){
      list.removeItem(i);
    }
    let index = this.listRepository.indexOf(list);
    this.listRepository.splice(index,1);
    this.listChanged.next(this.getListsByUserId(userId));
  }
}
