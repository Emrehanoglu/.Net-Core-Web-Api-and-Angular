import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //burada Client tarafından gönderilen bir request var ve request sonrasında
    //response dönmeden aşağıdaki kendi kodlarımın çalışmasını istiyorum.
    //sürecin içerisine yani request 'in hemen sonrasına işlem ekleme için pipe operatürünü kullandım.

    return next.handle(req).pipe(catchError((error: HttpErrorResponse) =>{
        if(error.status == 400){
          //gelen hata api tarafının validasyonun gelmiş ise
          //kac tane prop 'dan hata gelmişse döngü yardımı ile bunları yazdırdım
          if(error.error.errors){
            const serverError = error.error;
            let errorMessages = '';
            for(const key in serverError.errors){
              errorMessages += serverError.errors[key] + '\n';
            }
            return throwError(errorMessages);
          }

          return throwError(error.error.message);
        }
        if(error.status == 401){ //unauthorized ise 401 gelir
          return throwError(error.statusText);
        }

        if(error.status == 500){
          return throwError(error.error.Message);
          //buradaki Message bilgisini Json türünde kendim yazdırmıştım.
        }
    }));
  }
}
