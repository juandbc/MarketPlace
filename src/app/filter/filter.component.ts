import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { Category } from '../model/category';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories: Category[];

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.filterService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  filterBy(categoryId: string): void {

  }
}
