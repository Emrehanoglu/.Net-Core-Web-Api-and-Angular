import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;

  constructor(private userService:UserService, private alertify: AlertifyService,
    private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //buradaki data bilgisi resolver 'dan gelecek olan user bilgisini temsil ediyor
    this.route.data.subscribe(data => {
      this.user = data.user;
    })
  }

  updateUser(){
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(()=> {
      this.alertify.success("profiliniz güncellendi");
    }, error => {
      this.alertify.error(error);
    });
  }
}
