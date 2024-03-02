import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {}

  constructor(private authService: AuthService, private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success("login succesfully");
        this.router.navigate(['/members']);
      },error => {
        this.alertify.error(error);
      }
    )
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  //logout işlemi için var olan token bilgisini silmem gerekiyor
  logout(){
    localStorage.removeItem("token");
    console.log("logout");
    this.router.navigate(['/home']);
  }
}
