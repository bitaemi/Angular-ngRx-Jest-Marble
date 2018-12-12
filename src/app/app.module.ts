import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './modules/courses/courses.components';
import { LikesComponent } from './modules/features/likes/likes.component';
import { AuthorsComponent } from './modules/authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { FavoriteComponent } from './modules/favorite/favorite.component';
import { TitleCasingPipe } from './modules/pipes/title-casing.pipe';
import { PanelComponent } from './modules/panel/panel.component';
import { LikeReusableComponent } from './modules/like-reusable/like-reusable.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './modules/zippy/zippy.component';
import { ContactFormComponent } from './modules/contact-form/contact-form.component';
import { CreateCourseFormComponent } from './modules/create-course-form/create-course-form.component';
import { SignupFormComponent } from './modules/signup-form/signup-form.component';
import { NewCourseFormComponent } from './modules/new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './modules/change-password-form/change-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LikesComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCasingPipe,
    PanelComponent,
    LikeReusableComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CreateCourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
