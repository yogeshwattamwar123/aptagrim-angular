import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptahrComponent } from './aptahr.component';

describe('AptahrComponent', () => {
  let component: AptahrComponent;
  let fixture: ComponentFixture<AptahrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptahrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptahrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
