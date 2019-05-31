import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core'
import { ModalFormComponent } from '../modal-form/modal-form.component'

@Component({
  selector: 'app-new-post-button',
  templateUrl: './new-post-button.component.html',
  styleUrls: ['./new-post-button.component.css']
})

export class NewPostButtonComponent {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}

