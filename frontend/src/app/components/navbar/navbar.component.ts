import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn : boolean;

  constructor(
    private auth : AuthService,
    private token : TokenService,
    private router : Router
  ) { }

  ngOnInit(): void {
   this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }
  logout(Event: MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
