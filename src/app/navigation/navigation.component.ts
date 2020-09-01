import { Component, OnInit } from '@angular/core';

interface INavigation {
  path: string;
  label: string;
}
@Component({
  selector: 'book-app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public navigations: Array<INavigation>;

  constructor() { }

  ngOnInit(): void {
    this.initNavigation();
  }

  private initNavigation(): void {
    this.navigations = [];

    this.navigations.push(
      {path: '/books', label: 'Books'},
      {path: '/about', label: 'About'},
    );
  }
}
