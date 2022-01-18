import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) { }


  listUsers(){
    return this.http.get(this.baseUrl+'users');
  }
}
