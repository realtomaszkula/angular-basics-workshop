import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListPageComponent } from './filter-list-page.component';

describe('FilterListPageComponent', () => {
  let component: FilterListPageComponent;
  let fixture: ComponentFixture<FilterListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
