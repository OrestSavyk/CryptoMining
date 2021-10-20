import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmersionComponent } from './immersion.component';

describe('ImmersionComponent', () => {
  let component: ImmersionComponent;
  let fixture: ComponentFixture<ImmersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
