import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciPageComponent } from './fibonacci-page.component';

describe('FibonacciPageComponent', () => {
  let component: FibonacciPageComponent;
  let fixture: ComponentFixture<FibonacciPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibonacciPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
