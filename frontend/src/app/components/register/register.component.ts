import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form ={
    email:null,
    name:null,
    password:null,
    password_confirmation : null,
  }
  public error = [];

  constructor(
    private authentification: AuthentificationService,
    private token : TokenService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authentification.register(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data){
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/login');
  }
  handleError(error){
    this.error = error.error.errors;
    
  }
}
