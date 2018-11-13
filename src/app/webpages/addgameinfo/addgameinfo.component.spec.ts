import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgameinfoComponent } from './addgameinfo.component';

describe('AddgameinfoComponent', () => {
  let component: AddgameinfoComponent;
  let fixture: ComponentFixture<AddgameinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgameinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgameinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
