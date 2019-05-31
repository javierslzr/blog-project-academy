import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-delete-btns',
  templateUrl: './edit-delete-btns.component.html',
  styleUrls: ['./edit-delete-btns.component.css']
})
export class EditDeleteBtnsComponent implements OnInit {

  @Output() sendEditClickOne : EventEmitter<object> = new EventEmitter<object>();
  @Output() sendDeleteClickOne : EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  onEdit(){
    this.sendEditClickOne.emit({});
  }

  onDelete(){
    this.sendDeleteClickOne.emit({});
  }

}
