import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id = 0;
  name = '';
  email = '';
  
  private APIURL = 'http://localhost:8000/api/users';
  token : TokenService;

  constructor(private http: HttpClient , private auth: AuthService) {

  }

  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization: 'Bearer ' + this.auth.getToken()
      }
  );
    return headers;
  }
   getUsers() : Observable<any> {
    return this.http.get(this.APIURL + '?token=' + this.auth.getToken(), {
      headers: this.getAuthHeader()
    }).pipe(
      map(res => res)
    );
  }

  // getUsers() {
  //   return this.http.get(this.APIURL + '?token=' + this.auth.getToken(), {
  //     headers: this.getAuthHeader()
  //   });
  // }


  
  createUser(user: UserInterface) {
    return this.http.post(this.APIURL + '?token=' + this.auth.getToken(), user);
  }

  // getUser(user) {
  //   const data = {_method: 'GET'};
  //   return this.http.get(this.APIURL + '/' + user.id + '?token=' + this.auth.getToken(),{
  //     headers: this.getAuthHeader()
  //   });
  // }
  getUser(id: number) {
    return this.http.get(this.APIURL + '/' + id, {
      headers: this.getAuthHeader()
    });
  }


  deleteUser(user) {
    const data = {_method: 'DELETE'};
    return this.http.post(this.APIURL + '/' + user.id, data, {
      headers: this.getAuthHeader()
    });
  }

  updateUser(user: UserInterface) {
    user['_method'] = 'PUT';
    return this.http.post(this.APIURL + '/' + user.id, user, {
      headers: this.getAuthHeader()
    });
  }
}
