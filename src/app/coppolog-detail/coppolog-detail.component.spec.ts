import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoppologDetailComponent } from './coppolog-detail.component';

describe('CoppologDetailComponent', () => {
  let component: CoppologDetailComponent;
  let fixture: ComponentFixture<CoppologDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoppologDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoppologDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
