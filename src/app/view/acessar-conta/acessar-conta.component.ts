import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/models/clientes';

@Component({
  selector: 'app-acessar-conta',
  templateUrl: './acessar-conta.component.html',
  styleUrls: ['./acessar-conta.component.css']
})
export class AcessarContaComponent implements OnInit {
 cliente:Cliente;
  mensagem:string = '';

  constructor(private clienteService:ClienteService, private route:Router) {
    this.cliente = new Cliente();
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
    this.clienteService.logar(this.formLogin.value).subscribe({
      next:(data:any)=>{
        this.cliente = data;
        this.formLogin.reset();
        this.route.navigate(['/cadastrar-atendimentos'])
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
