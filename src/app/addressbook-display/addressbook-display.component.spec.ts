import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressbookDisplayComponent } from './addressbook-display.component';

describe('AddressbookDisplayComponent', () => {
  let component: AddressbookDisplayComponent;
  let fixture: ComponentFixture<AddressbookDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressbookDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressbookDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
