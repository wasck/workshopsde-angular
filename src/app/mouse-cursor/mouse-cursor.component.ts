import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-app-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss']
})
export class MouseCursorComponent implements OnInit {

  public mouseX: number;
  public mouseY: number;

  constructor() { }

  ngOnInit(): void {
  }

  public onMousemove(event: MouseEvent): void {
    this.mouseX = event.offsetX;
    this.mouseY = event.offsetY;
  }

}
