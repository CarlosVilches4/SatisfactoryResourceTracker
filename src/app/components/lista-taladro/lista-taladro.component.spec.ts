import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTaladroComponent } from './lista-taladro.component';

describe('ListaTaladroComponent', () => {
  let component: ListaTaladroComponent;
  let fixture: ComponentFixture<ListaTaladroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTaladroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTaladroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
