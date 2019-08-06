import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IffyComponent } from './iffy.component';

describe('IffyComponent', () => {
  let component: IffyComponent;
  let fixture: ComponentFixture<IffyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IffyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IffyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
