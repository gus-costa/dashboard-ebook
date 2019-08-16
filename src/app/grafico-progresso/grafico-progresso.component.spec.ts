import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoProgressoComponent } from './grafico-progresso.component';

describe('GraficoProgressoComponent', () => {
  let component: GraficoProgressoComponent;
  let fixture: ComponentFixture<GraficoProgressoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoProgressoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoProgressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
