import { Injectable } from '@angular/core';
import { combineLatest, pipe, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { postTemplate } from '../app/post-model/post-model.module'

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  private postsUrl = 'https://private-c3edb-postsmock.apiary-mock.com/posts';

  posts$: Observable<postTemplate[]>;
  categorySubject: BehaviorSubject<string> = new BehaviorSubject<string>('all');
  selectedCategory$: Observable<string> = this.categorySubject.asObservable();
  combinePostsAndCategory$: Observable<postTemplate[]>;

  constructor(private _http: HttpClient) {
    this.getPosts();
    this.combinePostsAndCategory$ = combineLatest(this.posts$, this.selectedCategory$).pipe(
        map(this.filterPosts.bind(this))
      );
  }


  filterPosts([posts, category]) {
    console.log(posts);
    if (category === 'all') {
      return posts;
    }
    return posts.filter(post => post.category === category);
  }

  getPosts() {
    this.posts$ = this._http.get<postTemplate[]>(this.postsUrl);
  }
}
