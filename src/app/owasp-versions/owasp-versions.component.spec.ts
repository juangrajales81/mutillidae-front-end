import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwaspVersionsComponent } from './owasp-versions.component';

describe('OwaspVersionsComponent', () => {
  let component: OwaspVersionsComponent;
  let fixture: ComponentFixture<OwaspVersionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwaspVersionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwaspVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
