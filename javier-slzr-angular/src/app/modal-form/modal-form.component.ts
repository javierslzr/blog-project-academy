import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material';
import { NewServiceService } from '../new-service.service';
import { postTemplate } from '../post-model/post-model.module';



@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit, OnDestroy {

  categories = [];
  modalTitle: String;
  Form: FormGroup;
  sub$: Subscription;

  posts: postTemplate = {
    id: 0,
    title: '',
    category: '',
    shortDescription: '',
    description: '',
    publishedAt: '',
    image: 'http://source.unsplash.com/random',
    comments: []
  }

  originalPost: postTemplate = new postTemplate();

  @Output() sendPost: EventEmitter<object> = new EventEmitter<object>();


  constructor(
    private formBuilder: FormBuilder,
    private http: NewServiceService,
    @Inject(MAT_DIALOG_DATA) public data: postTemplate
  ) { }

  ngOnInit() {
    this.getCategories();
    this.Form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
      image: new FormControl
    })
  }

  categoryObs = {
    next: x => this.categories = x,
  }

  getCategories() {
    this.http.getCategories().subscribe(this.categoryObs);
  }

  getFilter(category: string) {
    this.posts.category = category
  }



  ngOnDestroy() {
  }

  onSubmit() {
    this.sendPost.emit(this.Form.value)
  }

  onClick() {
    console.log("modal closed!");
  }



}
