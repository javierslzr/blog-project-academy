import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewServiceService, } from '../new-service.service';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.css']
})

export class FilterButtonsComponent {


  constructor(private apiService: NewServiceService) { }

  onClick(category: string) {
    this.apiService.selectCategory(category)
  }




}
