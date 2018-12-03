import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass'],
})

export class FavoriteComponent implements OnInit {

  @Input() notFavorite: boolean;
  constructor() { }

  ngOnInit() {
  }

  clickFavor() {
    this.notFavorite = !this.notFavorite;
  }
}
