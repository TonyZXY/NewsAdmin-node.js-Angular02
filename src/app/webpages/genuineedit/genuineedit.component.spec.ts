import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenuineeditComponent} from './genuineedit.component';

describe('GenuineeditComponent', () => {
  let component: GenuineeditComponent;
  let fixture: ComponentFixture<GenuineeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenuineeditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenuineeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
