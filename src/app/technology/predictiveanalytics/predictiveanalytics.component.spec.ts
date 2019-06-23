import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictiveanalyticsComponent } from './predictiveanalytics.component';

describe('PredictiveanalyticsComponent', () => {
  let component: PredictiveanalyticsComponent;
  let fixture: ComponentFixture<PredictiveanalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictiveanalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictiveanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
