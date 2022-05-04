import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleSecurityComponent } from './toogle-security.component';

describe('ToogleSecurityComponent', () => {
  let component: ToogleSecurityComponent;
  let fixture: ComponentFixture<ToogleSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToogleSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
