import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.sass']
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
