import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalleachtaskComponent } from './viewalleachtask.component';

describe('ViewalleachtaskComponent', () => {
  let component: ViewalleachtaskComponent;
  let fixture: ComponentFixture<ViewalleachtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewalleachtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalleachtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
