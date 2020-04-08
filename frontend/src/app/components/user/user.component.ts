import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/User';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User;
  @Output() onDeleteUser = new EventEmitter();
  @Output() onSelectUser = new EventEmitter();

  constructor(private userService: UserService, private  route: Router) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.onDeleteUser.emit(this.user);
  }
  updateUser() {
    this.route.navigate(['users', this.user.id, 'edit']);
    this.onSelectUser.emit(this.user);
  }

  showUserDetail() {
    this.route.navigate(['users', this.user.id]);
  }
}
