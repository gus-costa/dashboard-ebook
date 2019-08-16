import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-exibe-grafico',
  templateUrl: './exibe-grafico.component.html',
  styleUrls: ['./exibe-grafico.component.css']
})
export class ExibeGraficoComponent implements OnInit {
  @ViewChild('target', {read: ViewContainerRef, static: true}) target;
  @Input() component: any;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.resolver.resolveComponentFactory(this.component);
    this.target.clear();
    this.target.createComponent(componentFactory);
  }

}
