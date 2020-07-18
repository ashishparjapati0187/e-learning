import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AInnovatorSetComponent } from './ainnovator-set.component';

describe('AInnovatorSetComponent', () => {
  let component: AInnovatorSetComponent;
  let fixture: ComponentFixture<AInnovatorSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AInnovatorSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AInnovatorSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
