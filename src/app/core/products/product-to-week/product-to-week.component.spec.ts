import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductToWeekComponent } from './product-to-week.component';

describe('ProductToWeekComponent', () => {
  let component: ProductToWeekComponent;
  let fixture: ComponentFixture<ProductToWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductToWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductToWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
