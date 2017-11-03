import { UserOverview } from './../../models/user-overview';
import { UsersService } from './../../services/users-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: UserOverview;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => params.getAll("user"))
      .subscribe((user: string) => {
        this.usersService.getUser(user)
          .subscribe(user => {
            this.user = user;
          });;
      });
  }

}
