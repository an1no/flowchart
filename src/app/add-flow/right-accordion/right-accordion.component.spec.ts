import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAccordionComponent } from './right-accordion.component';

describe('RightAccordionComponent', () => {
  let component: RightAccordionComponent;
  let fixture: ComponentFixture<RightAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightAccordionComponent]
    });
    fixture = TestBed.createComponent(RightAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
