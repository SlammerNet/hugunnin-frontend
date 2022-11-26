import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTheoryComponent } from './create-theory.component';

describe('CreateTheoryComponent', () => {
  let component: CreateTheoryComponent;
  let fixture: ComponentFixture<CreateTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTheoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
