import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListgeniuneComponent} from './listgeniune.component';

describe('ListgeniuneComponent', () => {
  let component: ListgeniuneComponent;
  let fixture: ComponentFixture<ListgeniuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListgeniuneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgeniuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
