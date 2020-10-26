import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalleachinternComponent } from './viewalleachintern.component';

describe('ViewalleachinternComponent', () => {
  let component: ViewalleachinternComponent;
  let fixture: ComponentFixture<ViewalleachinternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewalleachinternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalleachinternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
