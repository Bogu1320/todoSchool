import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../models/item.model';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import {ListService} from '../Services/listService';
import {List} from '../models/list.model';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  @Input() list: List;


  isInEdit: Boolean = false;
  separatorKeysCodes = [ENTER, COMMA];
  removable: Boolean = true;
  addOnBlur: Boolean = true;

  constructor(private listService: ListService) {
    console.log(this.list);
  }

  ngOnInit() {
    console.log(this.list);
  }


  onClickHeader() {
    this.isInEdit = true;
    console.log(this.isInEdit);
  }

  onLostFocusHeader() {
    if ((this.list.name === undefined) || (this.list.name.trim() === '') || this.list.name === null)
      return;
    this.isInEdit = false;
    console.log(this.isInEdit);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our item
    if ((value || '').trim()) {
      this.list.addItem(new Item(this.list.id, value.trim()));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(item: any): void {
    this.list.removeItem(item);
  }

  removeList() {
    this.listService.removeList(this.list);
  }
}
