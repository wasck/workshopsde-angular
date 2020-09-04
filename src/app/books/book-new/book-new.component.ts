import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BookDataService} from '../services/book-data.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'book-app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bookDataService: BookDataService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      abstract: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    this.bookDataService.addBook(this.form.value).subscribe(
      () => this.router.navigate(['/books']),
      (error: HttpErrorResponse) => console.log('Error:', error)
    );
  }

}
