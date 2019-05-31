import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service'
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.css']
})
export class PostGridComponent implements OnInit, OnDestroy {

  posts$: Observable<object[]>;
  posts: object[];
  sub$: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPosts();
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  getPosts() {
    this.sub$ = this.apiService.getPosts().subscribe((post)=> {
      console.log(this.posts = post)
      this.posts = post
    })
  }

}
