import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../models/item.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  public orderListName = 'dupa';
  isInEdit: Boolean = false;
  itemName = '';
  itemsArray: Item [] = [
     new Item('Pierwszy'),
     new Item('Drugi'),
     new Item('Trzeci')
   ];

  constructor() { }
  ngOnInit() {
  }

  onUpdateOrderListName(event: Event) {
    this.orderListName = (<HTMLInputElement>event.target).value;
  }

  createNewPositionOnList(itemName: string) {
    if (itemName !== '') {
      this.itemsArray.push(new Item(itemName));
      this.itemName = '';
    }
  }

  onClickHeader() {
    this.isInEdit = true;
    console.log(this.isInEdit);
  }

  onLostFocusHeader() {
    this.isInEdit = false;
    console.log(this.isInEdit);
  }
}
