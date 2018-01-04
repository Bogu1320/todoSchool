import { OnInit } from '@angular/core';

export class Item implements OnInit {

  public name: string;

  constructor (name: string) {
    this.name = name;
  }
  ngOnInit(): void {

  }
}
