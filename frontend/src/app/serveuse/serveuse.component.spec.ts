import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeuseComponent } from './serveuse.component';

describe('ServeuseComponent', () => {
  let component: ServeuseComponent;
  let fixture: ComponentFixture<ServeuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServeuseComponent]
    });
    fixture = TestBed.createComponent(ServeuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
