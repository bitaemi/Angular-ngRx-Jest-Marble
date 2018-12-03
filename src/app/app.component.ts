import { Component } from '@angular/core';
import { LikesComponent } from './modules/features/likes/likes.component';

const likeButton = new LikesComponent(310, false);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  post = {
    title: 'Angular7-App',
    notFavorite: true
  };
}

likeButton.pressLikeButton();
console.log(`LikesCount: ${likeButton.likesCount}, LikeState: ${likeButton.likeState}`);
