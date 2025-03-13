import { Component } from '@angular/core';
import { GraficoComponent } from '../../components/grafico/grafico.component';

@Component({
  selector: 'app-menu-faturamento',
  standalone: true,
  imports: [GraficoComponent],
  templateUrl: './menu-faturamento.component.html',
  styleUrl: './menu-faturamento.component.css',
})
export class MenuFaturamentoComponent {}
