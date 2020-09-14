import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DominicanFoodComponent } from './dominican-food.component';

describe('DominicanFoodComponent', () => {
  let component: DominicanFoodComponent;
  let fixture: ComponentFixture<DominicanFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DominicanFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DominicanFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
