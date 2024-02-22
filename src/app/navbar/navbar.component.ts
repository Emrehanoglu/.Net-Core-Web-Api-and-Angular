import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {}

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.model).subscribe(
      next => {
        console.log("login basarılı")
      },error => {
        console.log("login hatalı")
      }
    )
  }

  loggedIn(){
    const token = localStorage.getItem("token");
    return token ? true : false;
  }

  //logout işlemi için var olan token bilgisini silmem gerekiyor
  logout(){
    localStorage.removeItem("token");
  }
}
