import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: Http, private url: string) { }

  getAll() {
      return this.http.get(this.url)
          .pipe(
              map(response => response.json()),
              catchError(this.handleError)
          );
// we are mapping or transforming this response object to an array of javascript objects.
  }

    create(resource) {
        // return Observable.throw(new AppError());
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(
                map(response => response.json()),
                catchError(this.handleError)
                );
  }

  update(resource) {
      return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
          .pipe(
            map(response => response.json()),
            catchError(this.handleError)
        );
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
        .pipe(
            map(response => response.json()),
            retry(3),
            catchError(this.handleError)
        );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    } else if (error.status === 404) {
        return Observable.throw(new NotFoundError(error));
    }
    return Observable.throw(new AppError(error));
  }
}
