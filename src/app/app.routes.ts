import { Routes } from '@angular/router';
import { FramePageComponent } from './pages/master/frame.page';
import { MenuFaturamentoComponent } from './pages/menuFaturamento/menu-faturamento.component';

export const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [{ path: '', component: MenuFaturamentoComponent }],
  },
];
