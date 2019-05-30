import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { 
    
  }

  getData() {
    return this.http.get('http://private-c3edb-postsmock.apiary-mock.com/categories')
    .subscribe(data => {
      console.log("we got", data)
    })
  }

}
