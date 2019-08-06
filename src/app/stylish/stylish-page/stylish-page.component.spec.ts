import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishPageComponent } from './stylish-page.component';

describe('StylishPageComponent', () => {
  let component: StylishPageComponent;
  let fixture: ComponentFixture<StylishPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylishPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
