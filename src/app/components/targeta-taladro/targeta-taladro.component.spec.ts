import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetaTaladroComponent } from './targeta-taladro.component';

describe('TargetaTaladroComponent', () => {
  let component: TargetaTaladroComponent;
  let fixture: ComponentFixture<TargetaTaladroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaTaladroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetaTaladroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
