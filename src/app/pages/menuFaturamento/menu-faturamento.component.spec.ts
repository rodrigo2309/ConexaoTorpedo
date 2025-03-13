import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFaturamentoComponent } from './menu-faturamento.component';

describe('MenuFaturamentoComponent', () => {
  let component: MenuFaturamentoComponent;
  let fixture: ComponentFixture<MenuFaturamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuFaturamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFaturamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
