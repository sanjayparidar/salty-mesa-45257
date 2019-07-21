import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationOfCostComponent } from './configuration-of-cost.component';

describe('ConfigurationOfCostComponent', () => {
  let component: ConfigurationOfCostComponent;
  let fixture: ComponentFixture<ConfigurationOfCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationOfCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationOfCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
