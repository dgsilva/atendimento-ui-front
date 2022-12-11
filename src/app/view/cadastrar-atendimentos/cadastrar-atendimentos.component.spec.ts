import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAtendimentosComponent } from './cadastrar-atendimentos.component';

describe('CadastrarAtendimentosComponent', () => {
  let component: CadastrarAtendimentosComponent;
  let fixture: ComponentFixture<CadastrarAtendimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAtendimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAtendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
