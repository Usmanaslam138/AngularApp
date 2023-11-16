import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcomponentComponent } from './productcomponent.component';

describe('ProductcomponentComponent', () => {
  let component: ProductcomponentComponent;
  let fixture: ComponentFixture<ProductcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductcomponentComponent]
    });
    fixture = TestBed.createComponent(ProductcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
