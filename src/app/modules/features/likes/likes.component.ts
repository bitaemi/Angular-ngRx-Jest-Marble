import { Component } from '@angular/core';

@Component({
    selector: 'app-likes',
    templateUrl: './likes.component.html',
  })

export class LikesComponent {
    constructor(private _likesCount?: number, private _likeState?: boolean) {
    }

    get likesCount() {
        return this._likesCount;
    }

    get likeState() {
        return this._likeState;
    }

    pressLikeButton() {
        this._likesCount += (this._likeState) ? -1 : 1;
        this._likeState = !(this._likeState);
    }

}
