import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingGameInfoComponent } from './trading-game-info.component';

describe('TradingGameInfoComponent', () => {
  let component: TradingGameInfoComponent;
  let fixture: ComponentFixture<TradingGameInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingGameInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingGameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
