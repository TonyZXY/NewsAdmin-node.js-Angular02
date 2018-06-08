import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgeniuneComponent } from './addgeniune.component';

describe('AddgeniuneComponent', () => {
  let component: AddgeniuneComponent;
  let fixture: ComponentFixture<AddgeniuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgeniuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgeniuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
