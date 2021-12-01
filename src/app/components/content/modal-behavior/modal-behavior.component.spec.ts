import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBehaviorComponent } from './modal-behavior.component';

describe('ModalBehaviorComponent', () => {
  let component: ModalBehaviorComponent;
  let fixture: ComponentFixture<ModalBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
