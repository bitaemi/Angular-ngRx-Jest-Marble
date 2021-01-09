import { Component, OnInit } from '@angular/core';
import { FollowersService } from 'src/app/modules/learning-module/services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { switchMap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-display-followers',
  templateUrl: './display-followers.component.html',
  styleUrls: ['./display-followers.component.scss']
})
export class DisplayFollowersComponent implements OnInit {
  followers: any[];
  constructor(
    private service: FollowersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe();
    let id = this.route.snapshot.paramMap.get('id');
    //get optional params:
    this.route.queryParamMap.subscribe();
    let page = this.route.snapshot.queryParamMap.get('page');
    
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
