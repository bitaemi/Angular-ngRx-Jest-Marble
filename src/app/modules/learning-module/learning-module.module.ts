import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoursesComponent } from './components/courses/courses.components';
import { LikesComponent } from './components/features/likes/likes.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { TitleCasingPipe } from '../../pipes/title-casing.pipe';
import { PanelComponent } from './components/panel/panel.component';
import { LikeReusableComponent } from './components/like-reusable/like-reusable.component';
import { InputFormatDirective } from '../../directives/input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CreateCourseFormComponent } from './components/create-course-form/create-course-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { NewCourseFormComponent } from './components/new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { ConsumingHttpServicesComponent } from './components/consuming-http-services/consuming-http-services.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from '../../common/app-error-handler';
import { DisplayFollowersComponent } from './components/display-followers/display-followers.component';
import { FollowersService } from './services/followers.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { RoutingNavigationComponent } from './components/routing-navigation/routing-navigation.component';
import { NotFoudPageComponent } from './components/not-foud-page/not-foud-page.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { environment } from '../../../environments/environment';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, CustomSerializer } from '../../store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { AlertDirective } from '../../directives/alert.directive';
import { RepeaterDirective } from '../../directives/repeater.directive';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];


export const ROUTES = [
  {
    path: '', pathMatch: 'full', redirectTo: 'products'
  },
  {
    path: 'products',
    loadChildren: '../products/products.module#ProductsModule',
  },
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
];

@NgModule({
  declarations: [
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
    ArchiveComponent,
    AlertDirective,
    RepeaterDirective,
  ],
  imports: [
    // DO NOT import here modules that are lazy loaded!!
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([]),
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    AuthorsService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    FollowersService,
  ],
})


export class LearningModuleModule { }
