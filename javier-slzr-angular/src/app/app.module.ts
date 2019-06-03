import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PostGridComponent } from './post-grid/post-grid.component';
import { NewPostButtonComponent } from './new-post-button/new-post-button.component';
import { TitlesMainViewComponent } from './titles-main-view/titles-main-view.component';
import { FilterButtonsComponent } from './filter-buttons/filter-buttons.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { EditDeleteBtnsComponent } from './edit-delete-btns/edit-delete-btns.component';
import { BackgroundImgPipe } from './background-img.pipe';




@NgModule({
  declarations: [
    AppComponent,
    PostGridComponent,
    NewPostButtonComponent,
    TitlesMainViewComponent,
    FilterButtonsComponent,
    ModalFormComponent,
    PostThumbnailComponent,
    EditDeleteBtnsComponent,
    BackgroundImgPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  entryComponents:[ModalFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}

