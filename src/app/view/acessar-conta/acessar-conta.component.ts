import { Autenticacao } from './../../../models/Autenticacao';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationHelpers } from 'src/app/helpers/Authhelpers';
import { AutenticacaoServices } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-acessar-conta',
  templateUrl: './acessar-conta.component.html',
  styleUrls: ['./acessar-conta.component.css']
})
export class AcessarContaComponent implements OnInit {
  logar:Autenticacao
  mensagem:string = '';

  constructor(private authService:AutenticacaoServices, private route:Router, private authHelpers:AuthenticationHelpers) {
    this.logar = new Autenticacao();

    if(this.authHelpers.get()!=null){
      this.route.navigate(['/finalizar-conta'])
    }
  }

  ngOnInit(): void {
  }
 formLogin = new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email]),
  senha: new FormControl('',[Validators.required,Validators.minLength(8)])
 })

 get form():any{
  return this.formLogin.controls;
 }
  acessar(){
    this.mensagem = '';
    this.authService.logar(this.formLogin.value).subscribe({
      next:(response:any)=>{
        this.logar = response;
        this.formLogin.reset();

        let auth = new Autenticacao();
        auth.idCliente = response.data.idCliente;
        auth.nome = response.data.nome;
        auth.email = response.data.email;
        auth.telefone = response.data.telefone;
        auth.acessTokens = response.acessTokens;
        this.authHelpers.signIn(auth);

        this.route.navigate(['/finalizar-conta'])
      },

      error:(e)=>{
        switch(e.status){
          case 401:
            this.mensagem = e.error.mensagem;
            break;

            default:
            this.mensagem = 'Falha.Não possível realizar a autenticação do cliente.'
            console.log(e.console.error);
            break;
        }
      }
    })
  }

}
