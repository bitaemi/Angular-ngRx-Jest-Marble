import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { ConsumingHttpServicesComponent } from './modules/consuming-http-services/consuming-http-services.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { DisplayFollowersComponent } from './modules/display-followers/display-followers.component';
import { FollowersService } from './services/followers.service';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GithubProfileComponent } from './modules/github-profile/github-profile.component';
import { RoutingNavigationComponent } from './modules/routing-navigation/routing-navigation.component';
import { NotFoudPageComponent } from './modules/not-foud-page/not-foud-page.component';
import { ArchiveComponent } from './modules/archive/archive.component';

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
    ChangePasswordFormComponent,
    ConsumingHttpServicesComponent,
    DisplayFollowersComponent,
    NavbarComponent,
    GithubProfileComponent,
    RoutingNavigationComponent,
    NotFoudPageComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'favorite',
        component: FavoriteComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'likes',
        component: LikesComponent
      },
      {
        path: 'authors',
        component: AuthorsComponent
      },
      {
        path: 'create-course',
        component: CreateCourseFormComponent
      },
      {
        path: 'contact',
        component: ContactFormComponent
      },
      {
        path: 'like-reusable',
        component: LikeReusableComponent
      },
      {
        path: 'zippy',
        component: ZippyComponent
      },
      {
        path: 'signup',
        component: SignupFormComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordFormComponent
      },
      {
        path: 'posts',
        component: ConsumingHttpServicesComponent
      },
      {
        path: 'followers/:id/:username',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: DisplayFollowersComponent
      },
      {
        path: 'archive/:year/:month',
        component: ArchiveComponent
      },
      {
        path: 'archives',
        component: RoutingNavigationComponent
      },
      {
        path: 'panel',
        component: PanelComponent
      },
      {
        path: '**',
        component: NotFoudPageComponent
      }
    ])
  ],
  providers: [
    AuthorsService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    FollowersService
  ],
  bootstrap: [AppComponent]
})

// export const metaReducers: MetaReducer<any>[] = !environment.production
// ? [storeFreeze]
// : [];
export class AppModule { }

