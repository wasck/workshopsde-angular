import { Injectable } from '@angular/core';
import {Book} from '../models/book';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  private books: Array<Book>;
  private readonly BOOKMONKEY_API_URL = 'http://localhost:4730';

  constructor(private httpClient: HttpClient) {
  }

  public getBooks(): Observable<Array<Book>> {
    return this.httpClient.get<Array<Book>>(this.BOOKMONKEY_API_URL + '/books');
  }

  public getBookByIsbn(isbn: string): Observable<Book> {
    return this.httpClient.get<Book>(this.BOOKMONKEY_API_URL + `/books/${isbn}`);
  }
}
