import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { GraficoLinhaComponent } from '../grafico-linha/grafico-linha.component';
import { GraficoBarraComponent } from '../grafico-barra/grafico-barra.component';
import { GraficoProgressoComponent } from '../grafico-progresso/grafico-progresso.component';
import { GraficoTortaComponent } from '../grafico-torta/grafico-torta.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cardColsSm = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
        return 1;
    })
  );

  cardColsBg = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
        return matches ? 1 : 2;
    })
  );

  cols = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return matches ? 1 : 2;
    })
  );

  cards = [
    { title: 'Card 1', cols: this.cardColsBg, rows: 1, component: GraficoLinhaComponent },
    { title: 'Card 2', cols: this.cardColsSm, rows: 1, component: GraficoBarraComponent },
    { title: 'Card 3', cols: this.cardColsSm, rows: 2, component: GraficoProgressoComponent },
    { title: 'Card 4', cols: this.cardColsSm, rows: 1, component: GraficoTortaComponent }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}
}
