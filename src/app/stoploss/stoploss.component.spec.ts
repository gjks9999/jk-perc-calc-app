import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoplossComponent } from './stoploss.component';

describe('StoplossComponent', () => {
  let component: StoplossComponent;
  let fixture: ComponentFixture<StoplossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoplossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoplossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
