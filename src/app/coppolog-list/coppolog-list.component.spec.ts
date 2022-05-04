import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoppologListComponent } from './coppolog-list.component';

describe('CoppologListComponent', () => {
  let component: CoppologListComponent;
  let fixture: ComponentFixture<CoppologListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoppologListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoppologListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
