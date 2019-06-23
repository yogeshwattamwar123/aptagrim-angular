import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptaiComponent } from './aptai.component';

describe('AptaiComponent', () => {
  let component: AptaiComponent;
  let fixture: ComponentFixture<AptaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
