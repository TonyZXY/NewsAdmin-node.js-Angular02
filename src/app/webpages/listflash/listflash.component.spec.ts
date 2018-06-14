import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListflashComponent} from './listflash.component';

describe('ListflashComponent', () => {
  let component: ListflashComponent;
  let fixture: ComponentFixture<ListflashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListflashComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListflashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
