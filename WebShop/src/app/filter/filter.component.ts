import { Component, OnInit, ViewChild } from '@angular/core';

import { ICategory } from './../shared/types/category.types';
import { IFilterProductParameters } from './../shared/types/product.types';
import { ProductService } from './../shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  @ViewChild('burger') burger;
  @ViewChild('sidebar') sidebar;
  categories = <ICategory[]>[];
  isOpen = true;
  parameters = <IFilterProductParameters>{};
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.productService.getAllCategories().subscribe(value => {
      if(!value) { return; }
      this.categories = value;
      localStorage.setItem('categories',JSON.stringify(value));
    });
  }
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  search() {
    this.router.navigateByUrl('product-list');
    this.productService.filterProductParameters.next(this.parameters);
  }

  selectedCategory(categoryId: number) {
    if(!categoryId) { 
      this.parameters.categoryId = null;
      return; 
    }
    this.parameters.categoryId =  +categoryId;
  }

  selctedName(event) {
    const value = event.target.value;
    if(!value) { 
      this.parameters.name = null;
      return; 
    }
    this.parameters.name = value;
  }

  selctedMinPrice(event) {
    const value = event.target.value;
    if(!value) {  
      this.parameters.minPrice = null;
      return; }
    this.parameters.minPrice = +value;
  }
  selctedMaxPrice(event) {
    const value = event.target.value;
    if(!value) {   
      this.parameters.maxPrice = null;
      return;  }
    this.parameters.maxPrice = +value;
  }
}
