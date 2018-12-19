import { Component, OnInit } from '@angular/core';
import { FollowersService } from 'src/app/services/followers.service';

@Component({
  selector: 'app-display-followers',
  templateUrl: './display-followers.component.html',
  styleUrls: ['./display-followers.component.scss']
})
export class DisplayFollowersComponent implements OnInit {
  followers: any[];
  constructor(private service: FollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
