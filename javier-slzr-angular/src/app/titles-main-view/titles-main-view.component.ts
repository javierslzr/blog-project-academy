import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles-main-view',
  templateUrl: './titles-main-view.component.html',
  styleUrls: ['./titles-main-view.component.css']
})
export class TitlesMainViewComponent implements OnInit {

  titleUp: string = "Making your life easier"
  titleDown: string = "Discovering the world"

  constructor() { }

  ngOnInit() {
  }

}
