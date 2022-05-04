import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutillidaeLdifFileComponent } from './mutillidae-ldif-file.component';

describe('MutillidaeLdifFileComponent', () => {
  let component: MutillidaeLdifFileComponent;
  let fixture: ComponentFixture<MutillidaeLdifFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutillidaeLdifFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutillidaeLdifFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
