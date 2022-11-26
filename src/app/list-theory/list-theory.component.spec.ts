import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTheoryComponent } from './list-theory.component';

describe('ListTheoryComponent', () => {
  let component: ListTheoryComponent;
  let fixture: ComponentFixture<ListTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTheoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
