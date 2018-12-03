import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './modules/courses/courses.components';
import { LikesComponent } from './modules/features/likes/likes.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './modules/authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { FavoriteComponent } from './modules/favorite/favorite.component';
import { TitleCasingPipe } from './modules/pipes/title-casing.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LikesComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCasingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
