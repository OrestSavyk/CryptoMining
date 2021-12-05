import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorStateMatcherComponent } from './error-state-matcher.component';

describe('ErrorStateMatcherComponent', () => {
  let component: ErrorStateMatcherComponent;
  let fixture: ComponentFixture<ErrorStateMatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorStateMatcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorStateMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
