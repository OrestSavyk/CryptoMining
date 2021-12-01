import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorStateMatcherExampleComponent } from './input-error-state-matcher-example.component';

describe('InputErrorStateMatcherExampleComponent', () => {
  let component: InputErrorStateMatcherExampleComponent;
  let fixture: ComponentFixture<InputErrorStateMatcherExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputErrorStateMatcherExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorStateMatcherExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
