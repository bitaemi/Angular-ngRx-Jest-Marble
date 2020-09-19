import { Observable } from 'rxjs';
// import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    // return this.http.post('...', todo).map(r => r.json());
    return this.http.post('...', todo);

  }

  getTodos(): Observable<any[]> { 
    // return this.http.get('...').map(r => r.json());
    return this.http.get<any[]>('...');

  }

  delete(id) {
    return this.http.delete('...');
  }
}