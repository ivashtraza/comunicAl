import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeeComponent } from './cafee.component';

describe('CafeeComponent', () => {
  let component: CafeeComponent;
  let fixture: ComponentFixture<CafeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
