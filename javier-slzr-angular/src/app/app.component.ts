import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
import { postTemplate } from '../app/post-model/post-model.module'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 modalContent: any

  constructor(private recentPost: NewServiceService) {
  }


  sendValue(value){
    this.recentPost.addPost(value)
    this.modalContent.close();
    console.log(value)
  }

  upPost(content){
    this.modalContent = content;
    console.log(content)
    
  }

}
