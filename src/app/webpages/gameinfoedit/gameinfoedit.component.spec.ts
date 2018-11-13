import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameinfoeditComponent } from './gameinfoedit.component';

describe('GameinfoeditComponent', () => {
  let component: GameinfoeditComponent;
  let fixture: ComponentFixture<GameinfoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameinfoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameinfoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
