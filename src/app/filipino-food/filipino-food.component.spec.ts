import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilipinoFoodComponent } from './filipino-food.component';

describe('FilipinoFoodComponent', () => {
  let component: FilipinoFoodComponent;
  let fixture: ComponentFixture<FilipinoFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilipinoFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilipinoFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
