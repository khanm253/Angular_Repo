import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User{
  name: string,
  email: string,
  phonenumber: number
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  updateUser(body: object){
    return this.http.put('https://jsonplaceholder.typicode.com/users/1', body);
  }

  deleteUser(id:number): Observable<object>{
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id);
  }

  addUser(body: object){

    let headers1 = new HttpHeaders({
      'content-type': 'application/json',
      'authenticationToken': '123456',
    })

    return this.http.post('https://jsonplaceholder.typicode.com/users',body,{headers: headers1});
  }

  getUsers(): Observable<User>{

    let headers1 = new HttpHeaders({
      'content-type': 'application/json',
      'authenticationToken': '123456',
    })

    let params = new HttpParams().set('pageSize', 10);

    return this.http.get<User>('https://jsonplaceholder.typicode.com/users', {headers: headers1, params: params});
    
  }
}
