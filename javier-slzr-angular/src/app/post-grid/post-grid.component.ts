import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NewServiceService } from '../new-service.service';
import { postTemplate } from '../post-model/post-model.module';


@Component({
  selector: 'app-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.css']
})

export class PostGridComponent {

  posts$: Observable<postTemplate[]>;
  col = 2

  constructor(private _apiService: NewServiceService) {
    this.posts$ = this._apiService.combinePostsAndCategory$
  }

  ngOnInit() {
    if(window.innerWidth <= 768)    {
      this.col = 1
    } else
       this.col = 2
  }

  onResize(){
    if(window.innerWidth <= 768)    {
      this.col = 1
    } else
       this.col = 2
  }

}



