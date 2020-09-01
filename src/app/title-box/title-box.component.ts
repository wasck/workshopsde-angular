import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'book-app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {

  @Input() title: string;

  @Output() clicked = new EventEmitter<undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  public onCardClick(): void {
    this.clicked.emit();
  }

}
