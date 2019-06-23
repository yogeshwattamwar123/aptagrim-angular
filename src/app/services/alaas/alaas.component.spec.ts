import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlaasComponent } from './alaas.component';

describe('AlaasComponent', () => {
  let component: AlaasComponent;
  let fixture: ComponentFixture<AlaasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlaasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
