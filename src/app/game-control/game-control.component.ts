import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameOn: EventEmitter<number> = new EventEmitter<number>();
  i: number = 0;
  ref: any;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.ref = setInterval(() => {
      this.gameOn.emit(this.i);
      this.i++;
    }, 1000);
  }

  onStop() {
    clearInterval(this.ref);
  }

}
