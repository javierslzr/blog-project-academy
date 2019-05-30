import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { PostGridComponent } from './post-grid/post-grid.component';
import { NewPostButtonComponent } from './new-post-button/new-post-button.component';
import { TitlesMainViewComponent } from './titles-main-view/titles-main-view.component';
import { FilterButtonsComponent } from './filter-buttons/filter-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    PostGridComponent,
    NewPostButtonComponent,
    TitlesMainViewComponent,
    FilterButtonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
