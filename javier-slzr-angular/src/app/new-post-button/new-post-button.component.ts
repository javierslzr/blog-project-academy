import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ModalFormComponent } from '../modal-form/modal-form.component'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-new-post-button',
  templateUrl: './new-post-button.component.html',
  styleUrls: ['./new-post-button.component.css']
}) 

export class NewPostButtonComponent {

  sub$: Subscription;
  theNewPost : object;

  @Output() newPost : EventEmitter<object> = new EventEmitter<object>();
  
  @Output() addedPost : EventEmitter<object> = new EventEmitter<object>();
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(ModalFormComponent, { minWidth: '40vw', minHeight: '40vh'})
    this.sub$ = dialogRef.componentInstance.sendPost.subscribe((post)=> this.newPost.emit(post));
    this.addedPost.emit(dialogRef)
  }

}

