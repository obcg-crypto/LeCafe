import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordonBleuComponent } from './cordon-bleu.component';

describe('CordonBleuComponent', () => {
  let component: CordonBleuComponent;
  let fixture: ComponentFixture<CordonBleuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CordonBleuComponent]
    });
    fixture = TestBed.createComponent(CordonBleuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
