import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../models/book';
import {BookDataService} from '../services/book-data.service';
import {Observable, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'book-app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private subjectDestroy: Subject<void>;
  // public books: Array<Book>;
  public books$: Observable<Array<Book>>;

  constructor(private bookDataService: BookDataService) { }

  ngOnInit(): void {
    this.books$ = this.bookDataService.getBooks();
    /*
    this.subscription = this.bookDataService.getBooks()
      .subscribe(
      (books: Array<Book>) => {
        this.books = books ? books : new Array<Book>();
      }, error => console.log('Error:', error),
      () => {}
    );
    */
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }



}
