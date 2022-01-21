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

  viewUser(id: string){
    return this.http.get(this.baseUrl+ 'users/' +id);
  }

  addUser(body: object){
    return this.http.post(this.baseUrl+'users', body);
  }

  deleteUser(id: string){
    return this.http.delete(this.baseUrl+ 'users/'+ id)
  }
}
