import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltaModuleComponent } from './delta-module.component';

describe('DeltaModuleComponent', () => {
  let component: DeltaModuleComponent;
  let fixture: ComponentFixture<DeltaModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeltaModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltaModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
