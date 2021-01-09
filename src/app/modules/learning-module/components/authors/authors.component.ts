import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/modules/learning-module/services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html'
})
export class AuthorsComponent implements OnInit {
authors;
email;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
   }

  ngOnInit() {
  }

  onKeyUp() {
    console.log(this.email);
  }
}
