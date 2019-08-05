import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundColorPageComponent } from './background-color-page.component';

describe('BackgroundColorPageComponent', () => {
  let component: BackgroundColorPageComponent;
  let fixture: ComponentFixture<BackgroundColorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundColorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundColorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
