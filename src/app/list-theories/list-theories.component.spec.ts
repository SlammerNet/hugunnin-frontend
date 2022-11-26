import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTheoriesComponent } from './list-theories.component';

describe('ListTheoriesComponent', () => {
  let component: ListTheoriesComponent;
  let fixture: ComponentFixture<ListTheoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTheoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTheoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
