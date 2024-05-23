import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationcrudComponent } from './populationcrud.component';

describe('PopulationcrudComponent', () => {
  let component: PopulationcrudComponent;
  let fixture: ComponentFixture<PopulationcrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopulationcrudComponent]
    });
    fixture = TestBed.createComponent(PopulationcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
