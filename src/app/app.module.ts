import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarContaComponent } from './view/criar-conta/criar-conta.component';
import { AcessarContaComponent } from './view/acessar-conta/acessar-conta.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { CadastrarAtendimentosComponent } from './view/cadastrar-atendimentos/cadastrar-atendimentos.component';
import { ConsultarAtendimentosComponent } from './view/consultar-atendimentos/consultar-atendimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarContaComponent,
    AcessarContaComponent,
    NavbarComponent,
    CadastrarAtendimentosComponent,
    ConsultarAtendimentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
