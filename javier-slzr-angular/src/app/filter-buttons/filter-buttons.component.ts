import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewServiceService, } from '../new-service.service';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.css']
})

export class FilterButtonsComponent {

  categories$: Observable<[]>

  constructor(private apiService: NewServiceService) { }

  getCategories() {
    this.categories$ = this.apiService.getCategories()
  }

  onClick(category: string) {
    this.apiService.selectCategory(category)
  }

  ngOnInit() {
    this.getCategories();
  }



}
