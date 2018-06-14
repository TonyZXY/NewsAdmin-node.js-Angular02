import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddflashComponent} from './addflash.component';

describe('AddflashComponent', () => {
  let component: AddflashComponent;
  let fixture: ComponentFixture<AddflashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddflashComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddflashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
