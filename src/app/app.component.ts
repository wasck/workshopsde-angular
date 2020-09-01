import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'book-app';
  public showSidebar: boolean;

  ngOnInit(): void {
    this.showSidebar = true;
  }

  public toggleSidebar(showSidebar: boolean): void {
    this.showSidebar = showSidebar;
  }

  public onCardClick(): void {
    alert('Title clicked!');
  }

}
