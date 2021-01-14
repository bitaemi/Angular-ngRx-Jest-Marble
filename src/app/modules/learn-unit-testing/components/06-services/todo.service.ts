import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    // return this.httpOldJustTestingPromise.post('...', todo).map(r => r.json());
    return this.http.post('...', todo);

  }

  getTodos(): Observable<any[]> { 
    // return this.httpOldJustTestingPromise.get('...').map(r => r.json());
    return this.http.get<any[]>('...');

  }
  
  getTodosPromise() {
    return this.http.get('...').toPromise();
  }


  delete(id) {
    return this.http.delete('...');
  }
}