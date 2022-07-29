import { Game } from './../../game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css'],
})
export class GameItemComponent implements OnInit {
  game: Game = new Game(
    1,
    'testbundle.com',
    'erdem@gmail.com',
    'nothing',
    'sdsdfs'
  );

  constructor() {}

  ngOnInit(): void {}
}
