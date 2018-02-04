import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() totalRecords: number;
  @Input() max: number;
  @Output() selectedPageEmitter = new EventEmitter<number>();
  //test: number;
  buttonCounter: number;
  selectedPage = 1;

  constructor() { }

  ngOnInit() {    
    console.log(this.totalRecords, this.max);
    //this.test = 60;
    //this.buttonCounter = Math.ceil(this.totalRecords / this.max);
  }

  ngOnChanges(changes) {
    if(changes['totalRecords']) {
      this.totalRecords = changes['totalRecords'].currentValue;
    }
    if(changes['max']) {
      this.max = changes['max'].currentValue;
    }
    this.buttonCounter = Math.ceil(this.totalRecords / this.max);
  }

  counter(i: number) {
    return new Array(i);
  }

  changeSelectedPage(i: number) {
    let temporaryValue = this.selectedPage;
    if(i<1){
      this.selectedPage = 1;
    }
    else if(i>this.buttonCounter){
      this.selectedPage = this.buttonCounter;
    } else {
      this.selectedPage = i;
    }
    if(temporaryValue === this.selectedPage) { return; }
    this.selectedPageEmitter.emit(this.selectedPage);
  }

  showPage(i: number, selectedPage: number) {
    if(this.selectedPage - 1 >= 1 && this.buttonCounter - selectedPage >=1) {
      if(i >= selectedPage-1 && i <= selectedPage+1) {
        return true;
      }
    } else if (selectedPage - 1 < 1) {
      if(i<=3) {
        return true;
      }
    } else if (this.buttonCounter - selectedPage < 1) {
      if(i>=this.buttonCounter-2) {
        return true;
      }
    }
  }

}
