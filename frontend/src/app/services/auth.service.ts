import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject <boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();
 
  constructor(private token:TokenService) { }

  changeAuthStatus(value : boolean){
    this.loggedIn.next(value);
  }

  
  getUser(): User {
    const data = JSON.parse(localStorage.getItem('user'));
    const user = new User();
    if (data) {
      user.name = data['name'];
      user.email = data['email'];
    }
    return user;
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
