import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  //  private Url = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  login( data){
    return this.http.post('http://localhost:8000/api/login',data)
  }
  register(data){
    return this.http.post('http://localhost:8000/api/register', data);
  }
}
