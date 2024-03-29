import { CanActivate, Router} from "@angular/router";
import { AuthService } from "../_services/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

//CanActive interface 'i ile herhangi bir linkin aktif olup olmamasını kontrol edebilirim
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService, private router:Router){}
  canActivate(){
    if(this.authService.loggedIn()){
      return true;
    }
    console.log("auth guard");
    this.router.navigate(['/home']);
    return false;
  }
}
