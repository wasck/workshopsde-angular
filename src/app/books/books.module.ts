import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { BookNewComponent } from './book-new/book-new.component';


@NgModule({
  declarations: [BooksComponent, BookListComponent, BookDetailComponent, BookEditComponent, BookNewComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [BooksComponent, BookListComponent]
})
export class BooksModule { }
