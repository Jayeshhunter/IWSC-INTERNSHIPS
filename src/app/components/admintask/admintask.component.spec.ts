import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintaskComponent } from './admintask.component';

describe('AdmintaskComponent', () => {
  let component: AdmintaskComponent;
  let fixture: ComponentFixture<AdmintaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
