import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ChartsModule } from 'ng2-charts';
import { GraficoLinhaComponent } from './grafico-linha/grafico-linha.component';
import { GraficoBarraComponent } from './grafico-barra/grafico-barra.component';
import { GraficoTortaComponent } from './grafico-torta/grafico-torta.component';
import { GraficoProgressoComponent } from './grafico-progresso/grafico-progresso.component';
import { ExibeGraficoComponent } from './exibe-grafico/exibe-grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    GraficoLinhaComponent,
    GraficoBarraComponent,
    GraficoTortaComponent,
    GraficoProgressoComponent,
    ExibeGraficoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    GraficoLinhaComponent,
    GraficoBarraComponent,
    GraficoTortaComponent,
    GraficoProgressoComponent
  ]
})
export class AppModule { }
