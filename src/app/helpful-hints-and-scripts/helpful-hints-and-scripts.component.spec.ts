import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpfulHintsAndScriptsComponent } from './helpful-hints-and-scripts.component';

describe('HelpfulHintsAndScriptsComponent', () => {
  let component: HelpfulHintsAndScriptsComponent;
  let fixture: ComponentFixture<HelpfulHintsAndScriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpfulHintsAndScriptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpfulHintsAndScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
