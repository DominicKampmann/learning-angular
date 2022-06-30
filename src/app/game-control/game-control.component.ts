import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

  @Output() second_passed = new EventEmitter<number>();

  increment: number = 0;
  myInterval: any;

  startTimer()
  {
    this.myInterval = setInterval(() => this.onSecondPassed(), 1000);
  }

  onSecondPassed()
  {
    this.increment += 1;
    this.second_passed.emit(this.increment);
  }
  
  endTimer()
  {
    clearInterval(this.myInterval)
  }

}
