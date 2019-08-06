import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IffyPageComponent } from './iffy-page.component';

describe('IffyPageComponent', () => {
  let component: IffyPageComponent;
  let fixture: ComponentFixture<IffyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IffyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IffyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
