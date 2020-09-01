import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about/about.component';
import {BookListComponent} from './books/book-list/book-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: 'about', component: AboutComponent },
  { path: '**', component: BookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
