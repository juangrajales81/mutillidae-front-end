import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetDbComponent } from './reset-db.component';

describe('ResetDbComponent', () => {
  let component: ResetDbComponent;
  let fixture: ComponentFixture<ResetDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
