import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiandmlComponent } from './aiandml.component';

describe('AiandmlComponent', () => {
  let component: AiandmlComponent;
  let fixture: ComponentFixture<AiandmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiandmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiandmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
