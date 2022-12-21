import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CheckoutGuard } from './guards/checkout.guards';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth-interceptors';
import { AcessarContaComponent } from './view/acessar-conta/acessar-conta.component';
import { CadastrarAtendimentosComponent } from './view/cadastrar-atendimentos/cadastrar-atendimentos.component';
import { CheckoutComponent } from './view/checkout/checkout.component';
import { ConsultarAtendimentosComponent } from './view/consultar-atendimentos/consultar-atendimentos.component';
import { CriarContaComponent } from './view/criar-conta/criar-conta.component';
import { NavbarComponent } from './view/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarContaComponent,
    AcessarContaComponent,
    NavbarComponent,
    CadastrarAtendimentosComponent,
    ConsultarAtendimentosComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CheckoutGuard,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
