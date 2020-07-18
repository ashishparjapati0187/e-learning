import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCertificateComponent } from './all-certificate.component';

describe('AllCertificateComponent', () => {
  let component: AllCertificateComponent;
  let fixture: ComponentFixture<AllCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
