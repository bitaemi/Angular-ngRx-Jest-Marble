import { Component, OnInit } from '@angular/core';
import { FavoriteChangedEventArgs } from '../favorite/favorite.component';
import { LikesComponent } from '../features/likes/likes.component';

const likeButton = new LikesComponent(310, false);

@Component({
  selector: 'app-bootstrap-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass']
})
export class PanelComponent implements OnInit {
  tweet = {
    likesCount : 210,
    isLiked: false
  };
  post = {
    notFavorite: true
  };
  constructor() { }

  ngOnInit() {
  }

  OnFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed:', eventArgs);
  }
}

likeButton.pressLikeButton();
console.log(`LikesCount: ${likeButton.likesCount}, LikeState: ${likeButton.likeState}`);
