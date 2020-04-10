import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { first } from 'rxjs/operators';
import {UserService} from '../../services/user.service';
import {User} from '../../classes/User';
import {Role} from '../../classes/Role';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  title = 'Users';
  users: any;
  roles : Role[] = [];
   public user ={
    id:null,
    email:null,
    name:null,
    password:null,
    password_confirmation : null,
  }
  public error = [];
  router : Router;
  token: TokenService;

  @Output() updateUser = new EventEmitter<User>();

  constructor(private  service: UserService, token: TokenService, router : Router) {
  }

  ngOnInit() {
    
    this.service.getUsers().subscribe(
      (response) => {
        console.log(response);
        this.users = response['data'];
        console.log(this.users);
        this.roles = response['roles'];
        console.log(this.roles);
        
      });
     
  }

  onSubmit(){
    this.service.createUser(this.user).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    this.service.getUsers().subscribe(
      (response) => {
        this.users = response['data'];
        this.roles = response['roles'];
      }
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/users');
  }
  handleError(error){
    this.error = error.errors;
  }

  onDeleteUser(user: User) {
    const deleteUser = confirm('Do you really want to delete this user?');
    if (deleteUser) {
      this.service.deleteUser(user).subscribe(
        response => {
          const idx = this.users.indexOf(user);
          this.users.splice(idx, 1);
          alert(response['message']);
        }
      );
    }
    this.service.getUsers().subscribe(
      (response) => {
        this.users = response['data'];
        this.roles = response['roles'];
      }
    );
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }

   refresh(Event: MouseEvent){
    event.preventDefault();
    this.router.navigateByUrl('/users');
  }
}
