import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/User';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public title = 'User Detail';
  public User: User;
  constructor( private route: ActivatedRoute,
               private userService: UserService,
               private router: Router
  ) {
  }

  ngOnInit() {
    this.User =  new User();
    this.route.paramMap.subscribe(
      (p) => {
        this.userService.getUser(+p.get('id')).subscribe(
          response => this.User = response['data']
        );
      }
    );
  }
  backToUsers() {
    this.router.navigate(['users']);
  }

}
