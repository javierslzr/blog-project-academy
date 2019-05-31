import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  posts: Observable<object[]>;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<[]> {
    return this.http.get<[]>
      ('http://private-c3edb-postsmock.apiary-mock.com/categories')
  }

  getPosts(): Observable<object[]> {
    this.posts = this.http.get<object[]>
      ('https://private-c3edb-postsmock.apiary-mock.com/posts');
    return this.posts;
  }

}
