import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
})
export class NewGameComponent implements OnInit {
  gameCreated = false;

  constructor() {}

  ngOnInit(): void {}

  onCreateGame() {
    this.gameCreated = true;
  }
}
