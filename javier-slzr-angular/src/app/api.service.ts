import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { postTemplate } from '../app/post-model/post-model.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private posts: Observable<object[]>;
  private categoriesUrl = 'http://private-c3edb-postsmock.apiary-mock.com/categories'
  private postsUrl = 'https://private-c3edb-postsmock.apiary-mock.com/posts';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<[]> {
    return this.http.get<[]>
      (this.categoriesUrl)
  }

  getPosts(): Observable<object[]> {
    this.posts = this.http.get<object[]>
      (this.postsUrl);
    return this.posts;
  }

}
