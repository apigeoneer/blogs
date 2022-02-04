import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardListComponent } from './article-card-list.component';

describe('ArticleCardListComponent', () => {
  let component: ArticleCardListComponent;
  let fixture: ComponentFixture<ArticleCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
