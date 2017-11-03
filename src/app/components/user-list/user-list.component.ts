import { UsersService } from './../../services/users-service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<string[]>;
  users: string[];

  constructor( private usersService: UsersService) { }

  ngOnInit() {
    this.users$ = this.usersService.getUsers();

    this.users$.subscribe(users => {
      this.users = Array.from(users);
    });
  }

}
