import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAtendimentosComponent } from './consultar-atendimentos.component';

describe('ConsultarAtendimentosComponent', () => {
  let component: ConsultarAtendimentosComponent;
  let fixture: ComponentFixture<ConsultarAtendimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAtendimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarAtendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
