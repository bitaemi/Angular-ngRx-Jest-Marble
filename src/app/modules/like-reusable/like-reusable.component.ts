import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-reusable',
  templateUrl: './like-reusable.component.html',
  styleUrls: ['./like-reusable.component.sass']
})

export class LikeReusableComponent implements OnInit {
  courses = ['Cours 1', 'Cours 2'];
  viewmode = 'Something';
  @Input() likesCount: number;
  @Input() isLiked: boolean;
    constructor() { }

    ngOnInit() {
    }

    clickLoveButton() {
      this.likesCount += (this.isLiked) ? -1 : 1;
      this.isLiked = !(this.isLiked);
  }

}
