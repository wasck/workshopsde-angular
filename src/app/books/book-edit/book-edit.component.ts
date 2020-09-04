import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../models/book';
import {ActivatedRoute} from '@angular/router';
import {startWith, switchMap, takeUntil} from 'rxjs/operators';
import {BookDataService} from '../services/book-data.service';
import {Subject, Subscription} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'book-app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookDataService: BookDataService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(
        switchMap(({isbn}) => this.bookDataService.getBookByIsbn(isbn))
      )
      .subscribe(result => {
        this.book = result;
      });
  }

  public save(): void {
    this.bookDataService.updateBook(this.book).subscribe(
      () => console.log('Book updated!'),
      (error: HttpErrorResponse) => console.log('Error:', error)
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
