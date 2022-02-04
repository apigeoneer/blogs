import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleCardListComponent } from './article-card-list/article-card-list.component';
import { MainComponent } from './main/main.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const appRoutes: Routes = [
  // { path: '', component: MainComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'post-detail:id', component: PostDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleCardComponent,
    ArticleCardListComponent,
    MainComponent,
    LeftNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
