import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotaCrudPage } from './nota-crud.page';

describe('NotaListPage', () => {
  let component: NotaCrudPage;
  let fixture: ComponentFixture<NotaCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotaCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
