import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdescriptionComponent } from './newsdescription.component';

describe('NewsdescriptionComponent', () => {
  let component: NewsdescriptionComponent;
  let fixture: ComponentFixture<NewsdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
