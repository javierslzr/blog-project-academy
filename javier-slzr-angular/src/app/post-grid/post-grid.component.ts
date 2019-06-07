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
  // posts: object[];
  // sub$: Subscription;
  col = 2

  constructor(private _apiService: NewServiceService) {
    this.posts$ = this._apiService.combinePostsAndCategory$
  }

  ngOnInit() {
    if(window.innerWidth <= 720)    {
      this.col = 1
    } else
       this.col = 2
  }

  onResize(){
    if(window.innerWidth <= 720)    {
      this.col = 1
    } else
       this.col = 2
  }

  // ngOnDestroy() {
  //   this.sub$.unsubscribe();
  // }

  // getPosts() {
  //   this.sub$ = this.apiService.getPosts().subscribe((post)=> {
  //     console.log(this.posts = post)
  //     this.posts = post
  //   })
  // }

}



