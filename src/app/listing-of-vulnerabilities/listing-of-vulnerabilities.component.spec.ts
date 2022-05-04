import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingOfVulnerabilitiesComponent } from './listing-of-vulnerabilities.component';

describe('ListingOfVulnerabilitiesComponent', () => {
  let component: ListingOfVulnerabilitiesComponent;
  let fixture: ComponentFixture<ListingOfVulnerabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingOfVulnerabilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingOfVulnerabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
