import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from 'src/models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
   url = environment.apiCliente + 'clientes';
  constructor(private http:HttpClient) { }

  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente)
  }

  logar(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(environment.apiCliente + "login", cliente)
  }
}
