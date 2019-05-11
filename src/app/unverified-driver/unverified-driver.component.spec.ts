import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedDriverComponent } from './unverified-driver.component';

describe('UnverifiedDriverComponent', () => {
  let component: UnverifiedDriverComponent;
  let fixture: ComponentFixture<UnverifiedDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnverifiedDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnverifiedDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
