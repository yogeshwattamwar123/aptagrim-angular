import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictivemaintenanceComponent } from './predictivemaintenance.component';

describe('PredictivemaintenanceComponent', () => {
  let component: PredictivemaintenanceComponent;
  let fixture: ComponentFixture<PredictivemaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictivemaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictivemaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
