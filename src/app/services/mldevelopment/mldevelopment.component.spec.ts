import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MldevelopmentComponent } from './mldevelopment.component';

describe('MldevelopmentComponent', () => {
  let component: MldevelopmentComponent;
  let fixture: ComponentFixture<MldevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MldevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MldevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
