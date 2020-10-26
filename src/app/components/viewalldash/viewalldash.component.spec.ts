import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalldashComponent } from './viewalldash.component';

describe('ViewalldashComponent', () => {
  let component: ViewalldashComponent;
  let fixture: ComponentFixture<ViewalldashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewalldashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalldashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
