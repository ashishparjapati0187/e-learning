import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AInnovatorComponent } from './ainnovator.component';

describe('AInnovatorComponent', () => {
  let component: AInnovatorComponent;
  let fixture: ComponentFixture<AInnovatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AInnovatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AInnovatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
