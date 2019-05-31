import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.css']
})
export class PostThumbnailComponent implements OnInit {

  @Input() Image: String;
  @Input() title: String;
  @Input() shortDescription: String;
  @Input() description: String;
  @Input() id: any;
  @Input() category: String;
  @Input() comments: Number;

  constructor(private sanitization : DomSanitizer, public dialog : MatDialog) { }

  ngOnInit() {
  }

}
