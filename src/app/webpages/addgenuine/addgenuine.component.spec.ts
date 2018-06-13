import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgenuineComponent } from './addgenuine.component';

describe('AddgenuineComponent', () => {
  let component: AddgenuineComponent;
  let fixture: ComponentFixture<AddgenuineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgenuineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgenuineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
