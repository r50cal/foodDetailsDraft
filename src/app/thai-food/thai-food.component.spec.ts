import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiFoodComponent } from './thai-food.component';

describe('ThaiFoodComponent', () => {
  let component: ThaiFoodComponent;
  let fixture: ComponentFixture<ThaiFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaiFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaiFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
