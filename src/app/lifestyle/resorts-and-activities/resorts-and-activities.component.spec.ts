import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortsAndActivitiesComponent } from './resorts-and-activities.component';

describe('ResortsAndActivitiesComponent', () => {
  let component: ResortsAndActivitiesComponent;
  let fixture: ComponentFixture<ResortsAndActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortsAndActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortsAndActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
