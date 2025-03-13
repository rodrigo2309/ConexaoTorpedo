import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css',
})
export class GraficoComponent {
  multi: any[] = [
    {
      name: 'Vendas 2023',
      series: [
        { value: 10, name: '18' },
        { value: 10.5, name: '19' },
        { value: 11, name: '20' },
        { value: 12, name: '21' },
        { value: 12, name: '22' },
        { value: 12, name: '23' },
        { value: 13, name: '24' },
        { value: 14, name: '25' },
        { value: 14, name: '26' },
        { value: 15, name: '27' },
        { value: 15, name: '28' },
        { value: 16, name: '29' },
        { value: 16, name: '30' },
        { value: 17, name: '31' },
      ],
    },
    {
      name: 'Vendas 2024',
      series: [
        { value: 8, name: '18' },
        { value: 9, name: '19' },
        { value: 10, name: '20' },
        { value: 11, name: '21' },
        { value: 12, name: '22' },
        { value: 13, name: '23' },
        { value: 14, name: '24' },
        { value: 14, name: '25' },
        { value: 15, name: '26' },
        { value: 15, name: '27' },
        { value: 16, name: '28' },
        { value: 16, name: '29' },
        { value: 17, name: '30' },
        { value: 17, name: '31' },
      ],
    },
  ];

  // Configurações do Gráfico
  view: [number, number] = [600, 400];
  showLegend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showGridLines = true;
  autoScale = true;
}
