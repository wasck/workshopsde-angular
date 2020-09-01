import {Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  public isHidden: boolean;

  @Output() isSidebarShown = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.isHidden = true;
  }

  public btnToggler(): void {
    this.isHidden = !this.isHidden;
    this.isSidebarShown.emit(this.isHidden);
  }

}
