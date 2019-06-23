import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersecurityComponent } from './cybersecurity.component';

describe('CybersecurityComponent', () => {
  let component: CybersecurityComponent;
  let fixture: ComponentFixture<CybersecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CybersecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CybersecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
