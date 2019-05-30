import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private heroesUrl = 'http://private-c3edb-postsmock.apiary-mock.com/categories';  // URL to web api

  constructor(private http: HttpClient) { 
    
  }

  getData(): Observable<CategoryService[]> {
    return this.http.get<CategoryService[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched category')),
      catchError(this.handleError<CategoryService[]>('getCategory', []))
    );
    })
  }

}
