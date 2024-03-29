import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //sorgularımı göndermek istediğim url
  baseUrl: string = 'http://localhost:5000/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response:any) => {
        const result = response;
        if(result){
          localStorage.setItem("token",result.token);
          this.decodedToken = this.jwtHelper.decodeToken(result.token);
          console.log(this.decodedToken);
        }
      })
    )
  }

  register(model:any){
    return this.http.post(this.baseUrl + 'register',model);
  }

  //auth guard tarafında kullanılıyor.
  loggedIn(){
    const token = localStorage.getItem("token");
    return token ? true:false;
    //return !this.jwtHelper.isTokenExpired(token); //token bilgisinin süresi bitmişse false dönecek
  }
}
