import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeGraficoComponent } from './exibe-grafico.component';

describe('ExibeGraficoComponent', () => {
  let component: ExibeGraficoComponent;
  let fixture: ComponentFixture<ExibeGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibeGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibeGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
