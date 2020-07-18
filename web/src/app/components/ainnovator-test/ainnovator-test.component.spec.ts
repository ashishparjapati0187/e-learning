import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AInnovatorTestComponent } from './ainnovator-test.component';

describe('AInnovatorTestComponent', () => {
  let component: AInnovatorTestComponent;
  let fixture: ComponentFixture<AInnovatorTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AInnovatorTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AInnovatorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
