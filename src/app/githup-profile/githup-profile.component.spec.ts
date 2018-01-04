import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithupProfileComponent } from './githup-profile.component';

describe('GithupProfileComponent', () => {
  let component: GithupProfileComponent;
  let fixture: ComponentFixture<GithupProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithupProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithupProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
