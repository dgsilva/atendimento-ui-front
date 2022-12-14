import { Atendimento } from 'src/models/atendimento';
import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from 'src/app/services/atendimento.service';

@Component({
  selector: 'app-consultar-atendimentos',
  templateUrl: './consultar-atendimentos.component.html',
  styleUrls: ['./consultar-atendimentos.component.css']
})
export class ConsultarAtendimentosComponent implements OnInit {
  mensagem:string = '';
 atendimentos:Atendimento[]=[];
  constructor(private service:AtendimentoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.mensagem = '';
    this.service.findAll().subscribe({
      next:(data:any)=>{
        this.atendimentos = data;
      },
      error:(e:any)=>{
        this.mensagem = 'Não foi encontrado nenhuma listagem'
        console.log(e);
      }
    })
  }

}
