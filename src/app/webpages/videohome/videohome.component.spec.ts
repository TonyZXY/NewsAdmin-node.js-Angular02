import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideohomeComponent } from './videohome.component';

describe('VideohomeComponent', () => {
  let component: VideohomeComponent;
  let fixture: ComponentFixture<VideohomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideohomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
