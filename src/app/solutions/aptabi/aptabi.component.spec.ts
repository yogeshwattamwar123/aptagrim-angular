import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptabiComponent } from './aptabi.component';

describe('AptabiComponent', () => {
  let component: AptabiComponent;
  let fixture: ComponentFixture<AptabiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptabiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
