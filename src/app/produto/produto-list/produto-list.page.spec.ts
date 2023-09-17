import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotaListPage } from './produto-list.page';

describe('NotaListPage', () => {
  let component: NotaListPage;
  let fixture: ComponentFixture<NotaListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
