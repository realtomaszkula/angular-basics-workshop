import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciSequenceComponent } from './fibonacci-sequence.component';

describe('FibonacciSequenceComponent', () => {
  let component: FibonacciSequenceComponent;
  let fixture: ComponentFixture<FibonacciSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibonacciSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
