import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgroupitemComponent } from './listgroupitem.component';

describe('ListgroupitemComponent', () => {
  let component: ListgroupitemComponent;
  let fixture: ComponentFixture<ListgroupitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListgroupitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgroupitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
