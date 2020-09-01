import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../models/book';
import {BookDataService} from '../services/book-data.service';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'book-app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  public book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bookDataService: BookDataService
  ) { }

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      map(params => params.isbn),
      switchMap(isbn => this.bookDataService.getBookByIsbn(isbn))
    );
  }

}
