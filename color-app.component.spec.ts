import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAppComponent } from './color-app.component';

describe('ColorAppComponent', () => {
  let component: ColorAppComponent;
  let fixture: ComponentFixture<ColorAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
