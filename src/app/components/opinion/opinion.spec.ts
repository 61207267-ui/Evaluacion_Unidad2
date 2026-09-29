import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Opinion } from './opinion';

describe('Opinion', () => {
  let component: Opinion;
  let fixture: ComponentFixture<Opinion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opinion],
    }).compileComponents();

    fixture = TestBed.createComponent(Opinion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
