import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
 @Input('Item') item: Item;
  constructor() { }

  ngOnInit() {
  }

}
