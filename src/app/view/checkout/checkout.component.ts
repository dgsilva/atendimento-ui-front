import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationHelpers } from 'src/app/helpers/Authhelpers';
import { Autenticacao } from 'src/models/Autenticacao';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  auth:Autenticacao | null = null;

  constructor(private authHelpers:AuthenticationHelpers,
              private router:Router) { }

  ngOnInit(): void {
    this.auth = this.authHelpers.get();
  }

  logout():void{
    if(window.confirm('Deseja realmente sair desta conta de cliente?')) {
      this.authHelpers.signOut();
      this.router.navigate(['/acessar-conta']);
    }
  }

}
