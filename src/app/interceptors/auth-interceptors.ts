import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationHelpers } from '../helpers/Authhelpers';

@Injectable({
  providedIn: 'root'
})


export class AuthInterceptor implements HttpInterceptor {

  constructor(private authHelper: AuthenticationHelpers) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

 //mapeando os endpoints que não precisam de token
 if (!request.url.includes(environment.apiCliente + 'login')) {

  //enviando o token no cabeçalho da requisição
  request = request.clone({
      setHeaders: {
          Authorization: 'Bearer ' + this.authHelper.get()?.acessTokens
      }
  })

}

return next.handle(request);
}

  }
