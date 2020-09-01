import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BooksComponent} from './books/books.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      { path: '', component: BookListComponent },
      { path: ':isbn', component: BookDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
