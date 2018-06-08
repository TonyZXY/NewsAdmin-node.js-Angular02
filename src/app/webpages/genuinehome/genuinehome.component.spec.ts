import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenuinehomeComponent } from './genuinehome.component';

describe('GenuinehomeComponent', () => {
  let component: GenuinehomeComponent;
  let fixture: ComponentFixture<GenuinehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenuinehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenuinehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
