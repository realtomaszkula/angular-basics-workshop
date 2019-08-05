import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonNamePageComponent } from './person-name-page.component';

describe('PersonNamePageComponent', () => {
  let component: PersonNamePageComponent;
  let fixture: ComponentFixture<PersonNamePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonNamePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonNamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
