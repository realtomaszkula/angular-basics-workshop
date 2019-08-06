import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishComponent } from './stylish.component';

describe('StylishComponent', () => {
  let component: StylishComponent;
  let fixture: ComponentFixture<StylishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
