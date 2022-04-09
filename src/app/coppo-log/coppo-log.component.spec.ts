import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoppoLogComponent } from './coppo-log.component';

describe('CoppoLogComponent', () => {
  let component: CoppoLogComponent;
  let fixture: ComponentFixture<CoppoLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoppoLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoppoLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
