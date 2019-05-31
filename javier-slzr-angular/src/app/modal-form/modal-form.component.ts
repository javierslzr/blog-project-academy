import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  Form: FormGroup;
  category: Array<object> = [];
  sub$: Subscription;
  modalTitle: String

  @Output() sendPost : EventEmitter<object> = new EventEmitter<object>();

  constructor(
    private formBuilder: FormBuilder,
    private http: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getCategories();
    if (!this.data) {
      this.modalTitle = 'Create new post'
      this.Form = this.formBuilder.group({
        title: [null, Validators.required],
        shortDescription: [null, Validators.required],
        category: [this.category.length > 0 ? this.category[0] : '', [Validators.required, Validators.min(0)]],
        image: ['https://source.unsplash.com/random', [Validators.required, Validators.pattern("^(http|https)+://+[a-z-A-Z|.|?|%|0-9|/_=+]+")]]

      })
    }
    
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  onSubmit() {
    console.log(this.Form.value)
    if (this.Form.status === 'VALID') {
      this.sendPost.emit(this.Form.value)
    }
  }

  onClick() {
    console.log("modal closed!");
  }

  getCategories() {
    this.sub$ = this.http.getCategories().subscribe((category) => this.category = category);
  }

}
