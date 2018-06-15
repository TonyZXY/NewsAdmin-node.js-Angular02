import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashsearchComponent } from './flashsearch.component';

describe('FlashsearchComponent', () => {
  let component: FlashsearchComponent;
  let fixture: ComponentFixture<FlashsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
