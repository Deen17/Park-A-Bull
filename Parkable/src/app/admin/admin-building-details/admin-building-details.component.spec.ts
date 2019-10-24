import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuildingDetailsComponent } from './admin-building-details.component';

describe('AdminBuildingDetailsComponent', () => {
  let component: AdminBuildingDetailsComponent;
  let fixture: ComponentFixture<AdminBuildingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBuildingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuildingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
