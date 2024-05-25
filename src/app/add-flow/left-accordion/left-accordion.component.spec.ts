import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftAccordionComponent } from './left-accordion.component';

describe('LeftAccordionComponent', () => {
  let component: LeftAccordionComponent;
  let fixture: ComponentFixture<LeftAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftAccordionComponent]
    });
    fixture = TestBed.createComponent(LeftAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
