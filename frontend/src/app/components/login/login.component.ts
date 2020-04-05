import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form ={
    email: null,
    password : null,
  }
  public error = null;

  constructor(
    private authentification: AuthentificationService, 
    private token: TokenService,
    private router : Router,
    private auth : AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authentification.login(this.form).subscribe(
      data =>this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/users');
  }

  handleError(error){
    this.error = error.error.error;
    
  }

}
