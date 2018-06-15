import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenuinesearchComponent } from './genuinesearch.component';

describe('GenuinesearchComponent', () => {
  let component: GenuinesearchComponent;
  let fixture: ComponentFixture<GenuinesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenuinesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenuinesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
