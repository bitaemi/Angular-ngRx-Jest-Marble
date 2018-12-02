import { Component } from '@angular/core';
import { LikesComponent } from './modules/features/likes/likes.component';

let likeButton = new LikesComponent(310, false);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular7-App';
  
}
likeButton.pressLikeButton();
console.log(`LikesCount: ${likeButton.likesCount}, LikeState: ${likeButton.likeState}`);