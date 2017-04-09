import { Component } from '@angular/core';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})

export class SquareComponent {

  id: string;
  className: string;

  constructor(id:string, className:string) {
    this.id=id;
    this.className=className;
  }
}
