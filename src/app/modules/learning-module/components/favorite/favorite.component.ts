import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass'],
  styles: [
    ` .fa-star {color: blue}
    * { color: green}
    `
],
encapsulation: ViewEncapsulation.None
})

export class FavoriteComponent implements OnInit {

  @Input() notFavorite: boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clickFavor() {
    this.notFavorite = !this.notFavorite;
    this.change.emit({newObjProp: this.notFavorite});
  }
}

export interface FavoriteChangedEventArgs {
 newObjProp: boolean;
}
