import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  user: User;
  followText: string = "Follow";
  constructor(private userService: UserService, private alertify: AlertifyService,
    private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    // + ile id bilgisini integer yapıyorum
    this.userService.getUser(+this.route.snapshot.params['id'])
    .subscribe(user=> {
      this.user = user;
    }, err => {
      this.alertify.error(err);
    })
  }

  //login olan kullanıcıya ait token bilgisi içerisindeki id bilgisini authService ile aldım
  followUser(userId: number){
    this.userService.followUser(this.authService.decodedToken.nameid, userId)
    .subscribe(result => {
      this.alertify.success(this.user.name + ' kullanıcısını takip ediyorsunuz');
      this.followText = "Unfollow"
    },err => {
      this.alertify.error(err);
    })
  }
}
