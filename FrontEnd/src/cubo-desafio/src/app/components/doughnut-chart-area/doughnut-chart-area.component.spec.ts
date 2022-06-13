import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutChartAreaComponent } from './doughnut-chart-area.component';

describe('DoughnutChartAreaComponent', () => {
  let component: DoughnutChartAreaComponent;
  let fixture: ComponentFixture<DoughnutChartAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutChartAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutChartAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
