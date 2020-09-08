import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFieldBuilderComponent } from './generic-field-builder.component';

describe('GenericFieldBuilderComponent', () => {
  let component: GenericFieldBuilderComponent;
  let fixture: ComponentFixture<GenericFieldBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericFieldBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFieldBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
