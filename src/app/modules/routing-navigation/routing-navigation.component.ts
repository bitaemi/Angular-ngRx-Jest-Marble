import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-navigation',
  templateUrl: './routing-navigation.component.html',
  styleUrls: ['./routing-navigation.component.scss']
})
export class RoutingNavigationComponent implements OnInit {
archives = [
  { year: 2017, month: 1 },
  { year: 2017, month: 2 },
  { year: 2017, month: 3 },
];
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
