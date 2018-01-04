import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoursecomponentComponent } from './new-coursecomponent.component';

describe('NewCoursecomponentComponent', () => {
  let component: NewCoursecomponentComponent;
  let fixture: ComponentFixture<NewCoursecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoursecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoursecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
