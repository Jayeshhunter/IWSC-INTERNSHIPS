import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalleachadminComponent } from './viewalleachadmin.component';

describe('ViewalleachadminComponent', () => {
  let component: ViewalleachadminComponent;
  let fixture: ComponentFixture<ViewalleachadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewalleachadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalleachadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
