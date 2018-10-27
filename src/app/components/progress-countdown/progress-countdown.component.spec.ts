import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCountdownComponent } from './progress-countdown.component';

describe('ProgressCountdownComponent', () => {
  let component: ProgressCountdownComponent;
  let fixture: ComponentFixture<ProgressCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
