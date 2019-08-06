import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassyPageComponent } from './classy-page.component';

describe('ClassyPageComponent', () => {
  let component: ClassyPageComponent;
  let fixture: ComponentFixture<ClassyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
