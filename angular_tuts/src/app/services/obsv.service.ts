import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsvService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<object>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
