import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteBtnsComponent } from './edit-delete-btns.component';

describe('EditDeleteBtnsComponent', () => {
  let component: EditDeleteBtnsComponent;
  let fixture: ComponentFixture<EditDeleteBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeleteBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
