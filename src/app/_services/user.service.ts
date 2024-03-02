import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../_models/user";

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization": 'Bearer ' + localStorage.getItem('token')
  })
}

@Injectable({
  providedIn : "root"
})

export class UserService
{
  baseUrl: string = 'http://localhost:5000/api/users/';
  constructor(private http: HttpClient){}

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl, httpOptions);
  }

  getUser(id: number):Observable<User>{
    return this.http.get<User>(this.baseUrl + id, httpOptions);
  }

  updateUser(id: number, user: User){
    return this.http.put(this.baseUrl + id, user);
  }

  //followerId ---> login olan kullanıcı, takip etmek isteyen kullanıcı
  //userId     ---> takip edilmek istenen kullanıcı
  followUser(followerId:number, userId: number){
    //post requestinde 2. parametre olarak body 'den gelen değer gönderilir,
    //fakat burada body(input formu yani) 'den bir deger göndermeyeceğim için {} kullandım
    return this.http.post(this.baseUrl + followerId + "/follow/" + userId, {});
  }
}
