import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCostConfigurationComponent } from './driver-cost-configuration.component';

describe('DriverCostConfigurationComponent', () => {
  let component: DriverCostConfigurationComponent;
  let fixture: ComponentFixture<DriverCostConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCostConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCostConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
