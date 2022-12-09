import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/models/clientes';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {
 cliente:Cliente;
 mensagem: string = '';

  constructor(private serviceCliente:ClienteService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  formRegister = new FormGroup({
    nome: new FormControl('',[ Validators.required,Validators.minLength(6), Validators.maxLength(150)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    telefone:new FormControl('', [Validators.required]),

    senha:new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    ]),
  },{

  });

  get form():any{
    return this.formRegister.controls;
  }

salvar(){
  this.mensagem = '';
  this.serviceCliente.create(this.formRegister.value).subscribe({
      next:(data:any)=>{
        this.cliente = data;
        this.mensagem = data.mensagem;
      },

      error:(e)=>{
        this.mensagem = 'Falha. Não possível realizar o cadastro do cliente.'
        console.log(e.error)
      }
  })
}
}
