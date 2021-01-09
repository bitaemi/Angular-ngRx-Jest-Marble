import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorsService {
  constructor() {
  }

  getAuthors() {
    return [
      'the author Steven Covey has a book titled The 7 habits OF highly effective pEOPle',
       'Maxwell Malts with THE book Pshico-Cibernetics', 'author3'
      ];
  }
}
