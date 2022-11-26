import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyTheoryComponent } from './destroy-theory.component';

describe('DestroyTheoryComponent', () => {
  let component: DestroyTheoryComponent;
  let fixture: ComponentFixture<DestroyTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestroyTheoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
