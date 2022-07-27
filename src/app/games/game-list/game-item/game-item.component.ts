import { Component, OnInit, Input } from '@angular/core';
import { Game } from './../../game.model';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css'],
})
export class GameItemComponent implements OnInit {
  @Input() game: Game = new Game(
    'test game',
    'testbundle.com',
    'erdem@gmail.com',
    'nothing'
  );

  constructor() {}

  ngOnInit(): void {}
}
