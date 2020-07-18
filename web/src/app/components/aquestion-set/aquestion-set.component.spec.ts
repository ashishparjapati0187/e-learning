import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AQuestionSetComponent } from './aquestion-set.component';

describe('AQuestionSetComponent', () => {
  let component: AQuestionSetComponent;
  let fixture: ComponentFixture<AQuestionSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AQuestionSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AQuestionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
