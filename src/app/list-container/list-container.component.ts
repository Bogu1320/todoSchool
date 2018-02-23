import {Component, OnInit} from '@angular/core';
import {List} from '../models/list.model';
import {UserService} from '../Services/userService';
import {ListService} from '../Services/listService';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  lists: List[] = [];
  listChanged;

  constructor(private listService: ListService, private userService: UserService) {
    this.listChanged = listService.listChanged.subscribe(
      (lists: List[]) => {
        this.lists = lists;
        console.log('List are changed. Value: ' + this.lists);
      }
    );
    console.log('ListChangedEvent: ' + this.listChanged);
  }

  ngOnInit() {
    this.lists = this.listService.getListsByUserId(this.userService.loggedUser.id);
    let isEmpty = this.lists.length === 0;
    console.log('isEmpty: ' + isEmpty);
    if (isEmpty)
      this.listService.addNewList('My list', this.userService.loggedUser.id);
    console.log(this.lists);
  }

  onAddNewList(){
    console.log('onAddNewList');
    this.listService.addNewList('My new list', this.userService.loggedUser.id);
    console.log(this.lists);

  }
}
