import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptadfComponent } from './aptadf.component';

describe('AptadfComponent', () => {
  let component: AptadfComponent;
  let fixture: ComponentFixture<AptadfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptadfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptadfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
