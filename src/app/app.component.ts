import { Component } from '@angular/core';
import { LikesComponent } from './modules/features/likes/likes.component';
import { FavoriteChangedEventArgs } from './modules/favorite/favorite.component';

const likeButton = new LikesComponent(310, false);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  post = {
    title: 'Angular7-App',
    notFavorite: true
  };

  tweet = {
    likesCount : 210,
    isLiked: false
  };

  OnFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed:', eventArgs);
  }
}

likeButton.pressLikeButton();
console.log(`LikesCount: ${likeButton.likesCount}, LikeState: ${likeButton.likeState}`);
