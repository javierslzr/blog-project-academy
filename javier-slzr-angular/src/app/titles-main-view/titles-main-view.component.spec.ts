import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesMainViewComponent } from './titles-main-view.component';

describe('TitlesMainViewComponent', () => {
  let component: TitlesMainViewComponent;
  let fixture: ComponentFixture<TitlesMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlesMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
