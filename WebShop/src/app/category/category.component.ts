import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.compoent.html'
})
export class CategoryComponent implements OnInit {

  @ViewChild('burger') burger;
  @ViewChild('sidebar') sidebar;

  isOpen = true;
  constructor() { }

  ngOnInit() {
  }
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
