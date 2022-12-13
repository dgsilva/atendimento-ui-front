import { Atendimento } from './../../../models/atendimento';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from 'src/app/services/atendimento.service';

@Component({
  selector: 'app-cadastrar-atendimentos',
  templateUrl: './cadastrar-atendimentos.component.html',
  styleUrls: ['./cadastrar-atendimentos.component.css'],
})
export class CadastrarAtendimentosComponent implements OnInit {
  mensagem:string = '';

  atendimento: Atendimento;

  constructor(private service: AtendimentoService) {
    this.atendimento = new Atendimento();
  }

  ngOnInit(): void {}

  FormAtendimento = new FormGroup({
    data: new FormControl('', [Validators.required]),
    hora: new FormControl('', [Validators.required]),
    assunto: new FormControl('', [Validators.required]),
    observacoes: new FormControl('', [Validators.required]),
    emailCliente: new FormControl('', [Validators.email, Validators.required]),
  });

  get form(): any {
    return this.FormAtendimento.controls;
  }

  salvar() {
    this.mensagem = '';
    this.service.create(this.FormAtendimento.value).subscribe({
      next:(data:any)=>{
        this.atendimento = data;
        this.mensagem = 'Cadastro realizado com sucesso'
      },
      error:(e:any)=>{
        console.log(e)
        this.mensagem = 'Não conseguimos realizar o seu cadastro'
      }
    })

  }
}
