import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesTable } from './messages-table';

describe('MessagesTable', () => {
  let component: MessagesTable;
  let fixture: ComponentFixture<MessagesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesTable],
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
