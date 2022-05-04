import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSecurityComponent } from './toggle-security.component';

describe('ToggleSecurityComponent', () => {
  let component: ToggleSecurityComponent;
  let fixture: ComponentFixture<ToggleSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
