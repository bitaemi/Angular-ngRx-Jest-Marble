import { Injectable } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DataService {

  constructor(http: Http) {
    super(http, 'https://api.github.com/users/bitaemi/followers');
  }

}
