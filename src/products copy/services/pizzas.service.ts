import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Pizza } from '../models/pizza.model';

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(`/pizzas`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(`/pizzas`, payload)
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`/pizzas/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .delete<any>(`/pizzas/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
