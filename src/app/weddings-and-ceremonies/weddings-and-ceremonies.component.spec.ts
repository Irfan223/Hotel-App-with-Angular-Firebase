import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingsAndCeremoniesComponent } from './weddings-and-ceremonies.component';

describe('WeddingsAndCeremoniesComponent', () => {
  let component: WeddingsAndCeremoniesComponent;
  let fixture: ComponentFixture<WeddingsAndCeremoniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingsAndCeremoniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingsAndCeremoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
