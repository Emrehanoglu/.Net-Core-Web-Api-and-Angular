//uygulamaya dahil ettiğim js dosyası içerisinde alertify adında bir tane tanımlama var
//bu tanımlamayı typescript içerisinde kullanabilmek için aşağıdaki gibi declare etmem lazım

import { Injectable } from "@angular/core";

declare let alertify: any;

@Injectable({
  providedIn: "root"
})

export class AlertifyService {
  constructor() {}

  success(messages: string){
    alertify.success(messages);
  }

  error(messages: string){
    alertify.error(messages);
  }

  warning(messages: string){
    alertify.warning(messages);
  }

  message(messages: string){
    alertify.message(messages);
  }
}
