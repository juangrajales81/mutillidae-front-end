import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropTlsComponent } from './drop-tls.component';

describe('DropTlsComponent', () => {
  let component: DropTlsComponent;
  let fixture: ComponentFixture<DropTlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropTlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropTlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
