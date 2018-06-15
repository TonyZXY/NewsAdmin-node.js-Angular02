import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewssearchComponent } from './newssearch.component';

describe('NewssearchComponent', () => {
  let component: NewssearchComponent;
  let fixture: ComponentFixture<NewssearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewssearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
