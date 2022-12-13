import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Atendimento } from 'src/models/atendimento';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  url = environment.apiAtendimento + 'atendimentos';
  constructor(private http:HttpClient ) { }

create(atendimento:Atendimento):Observable<Atendimento>{
 return this.http.post<Atendimento>(this.url, atendimento)
}

}
