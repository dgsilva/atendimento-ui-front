import { Injectable } from '@angular/core';
import { Autenticacao } from 'src/models/Autenticacao';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationHelpers {
  authUser: string = 'AUTH_USER';

  //gravar os dados do cliente autenticado
  //na local storage
  signIn(auth: Autenticacao): void {
    let json = JSON.stringify(auth);
    localStorage.setItem(this.authUser, json);
  }

  //apagar os dados gravados na local storage
  signOut(): void {
    localStorage.removeItem(this.authUser);
  }

  //retornar os dados do cliente
  //gravados na local storage
  get(): Autenticacao | null {
    let auth = localStorage.getItem(this.authUser);
    if (auth != null) return JSON.parse(auth) as Autenticacao;
    else return null;
  }
}
