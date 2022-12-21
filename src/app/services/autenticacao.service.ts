import { Autenticacao } from './../../models/Autenticacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoServices {

  constructor(private http:HttpClient) { }

  logar(login:Autenticacao):Observable<Autenticacao>{
    return this.http.post<Autenticacao>(environment.apiCliente + "login", login)
  }

}
