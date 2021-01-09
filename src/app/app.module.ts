import { JwtModule } from '@auth0/angular-jwt';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './admin/about/about.component';
import { JwtUnAuthorizedInterceptorService } from './services/jwt-un-authorized-interceptor.service';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './to-sort-components/courses/courses.components';
import { LikesComponent } from './to-sort-components/features/likes/likes.component';
import { AuthorsComponent } from './to-sort-components/authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { FavoriteComponent } from './to-sort-components/favorite/favorite.component';
import { TitleCasingPipe } from './components/pipes/title-casing.pipe';
import { PanelComponent } from './components/panel/panel.component';
import { LikeReusableComponent } from './to-sort-components/like-reusable/like-reusable.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './to-sort-components/zippy/zippy.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CreateCourseFormComponent } from './to-sort-components/create-course-form/create-course-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { NewCourseFormComponent } from './to-sort-components/new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { ConsumingHttpServicesComponent } from './components/consuming-http-services/consuming-http-services.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { DisplayFollowersComponent } from './to-sort-components/display-followers/display-followers.component';
import { FollowersService } from './services/followers.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GithubProfileComponent } from './to-sort-components/github-profile/github-profile.component';
import { RoutingNavigationComponent } from './to-sort-components/routing-navigation/routing-navigation.component';
import { NotFoudPageComponent } from './components/not-foud-page/not-foud-page.component';
import { ArchiveComponent } from './to-sort-components/archive/archive.component';
import { environment } from '../environments/environment';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, CustomSerializer } from './store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertDirective } from './directives/alert.directive';
import { RepeaterDirective } from './directives/repeater.directive';
import { SharedModule } from './shared/shared.module';
import { EmployeeModule } from './employee/employee.module';


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
    ArchiveComponent,
    AboutComponent,
    LoginComponent,
    SignUpComponent,
    AlertDirective,
    RepeaterDirective,
  ],
  imports: [
    // DO NOT import here modules that are lazy loaded!!
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([]),
    environment.development ? StoreDevtoolsModule.instrument() : [],
    SharedModule,
    AppRoutingModule,
    EmployeeModule,
    JwtModule.forRoot( {
      config: {
        tokenGetter: () => {
          return (sessionStorage.getItem("currentUser")? JSON.parse(sessionStorage.getItem("currentUser")).token : null)
        }
      }
    })
  ],
  providers: [
    AuthorsService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    FollowersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtUnAuthorizedInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

