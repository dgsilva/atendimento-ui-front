import { CheckoutComponent } from './view/checkout/checkout.component';
import { ConsultarAtendimentosComponent } from './view/consultar-atendimentos/consultar-atendimentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessarContaComponent } from './view/acessar-conta/acessar-conta.component';
import { CadastrarAtendimentosComponent } from './view/cadastrar-atendimentos/cadastrar-atendimentos.component';
import { CriarContaComponent } from './view/criar-conta/criar-conta.component';

const routes: Routes = [
  {path:'criar-conta', component:CriarContaComponent},
  {path:'acessar-conta', component:AcessarContaComponent},
  {path:'cadastrar-atendimentos', component:CadastrarAtendimentosComponent},
  {path:'consultar-atendimentos', component:ConsultarAtendimentosComponent},
  {path:'finalizar-conta', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
