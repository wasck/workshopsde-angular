import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [BooksComponent, BookListComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatListModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [BooksComponent, BookListComponent]
})
export class BooksModule { }
