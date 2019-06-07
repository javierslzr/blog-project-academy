import { Injectable } from '@angular/core';
import { combineLatest, pipe, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { postTemplate } from '../app/post-model/post-model.module'
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  private postsUrl = 'https://private-c3edb-postsmock.apiary-mock.com/posts';
  private categoriesUrl = 'http://private-c3edb-postsmock.apiary-mock.com/categories';

  categories$: Observable<[]>
  posts$: Observable<postTemplate[]>;
  categorySubject: BehaviorSubject<string> = new BehaviorSubject<string>('all');
  selectedCategory$: Observable<string> = this.categorySubject.asObservable();
  combinePostsAndCategory$: Observable<postTemplate[]>;
  newElement: BehaviorSubject<postTemplate[]> = new BehaviorSubject<postTemplate[]>([])


  constructor(private _http: HttpClient) {
    this.getPosts();
    this.combinePostsAndCategory$ = combineLatest(this.newElement, this.selectedCategory$).pipe(
      map(this.filterPosts.bind(this))
    );
  }

  public selectCategory(category: string) {
    this.categorySubject.next(category);
    console.log(category)
  }

  filterPosts([posts, category]) {
    console.log(posts);
    if (category === 'all') {
      return posts;
    }
    return posts.filter(post => post.category === category);
  }

  public getPosts() {
    this._http.get<postTemplate[]>(this.postsUrl).subscribe((posts$) => {
      this.newElement.next(posts$)
    })
    return this.newElement;
  }

  public getCategories() {
    this.categories$ = this._http.get<[]>(this.categoriesUrl);
    return this.categories$
  }

  public addPost(postTemplate) {
    this.newElement.next(this.newElement.getValue().concat([postTemplate]))
  }
}
