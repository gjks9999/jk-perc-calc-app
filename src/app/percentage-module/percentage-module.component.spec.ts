import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageModuleComponent } from './percentage-module.component';

describe('PercentageModuleComponent', () => {
  let component: PercentageModuleComponent;
  let fixture: ComponentFixture<PercentageModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentageModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
