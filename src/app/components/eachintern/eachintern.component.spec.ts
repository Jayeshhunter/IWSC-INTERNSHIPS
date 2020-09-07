import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachinternComponent } from './eachintern.component';

describe('EachinternComponent', () => {
  let component: EachinternComponent;
  let fixture: ComponentFixture<EachinternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachinternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachinternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
