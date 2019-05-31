import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.css']
})

export class FilterButtonsComponent implements OnInit {

  categoryBtns$: Observable<[]>

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCaterogies();
  }

  getCaterogies() {
    this.categoryBtns$ = this.apiService.getCategories();
  }

}
