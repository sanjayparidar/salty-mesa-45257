import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstransactionComponent } from './detailstransaction.component';

describe('DetailstransactionComponent', () => {
  let component: DetailstransactionComponent;
  let fixture: ComponentFixture<DetailstransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailstransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
