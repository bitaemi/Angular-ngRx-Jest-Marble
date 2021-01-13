import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./modules/admin/components/about/about.component";
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PreloadAllModules, NoPreloading } from '@angular/router';
import { CanDeactivateGuardService } from './guards/can-deactivate-guard.service';

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, data: { linkIndex: 2 } },
  { path: "signup", component: SignUpComponent, canDeactivate: [CanDeactivateGuardService], data: { linkIndex: 3 } },
  { path: "about", component: AboutComponent, data: { linkIndex: 1 } },
  // we  enable lazy loading for admin,employee modules and the other modules that we do not need loaded on the spot
  { path: "admin", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule) },
  { path: "employee", loadChildren: () => import("./modules/employee/employee.module").then(m => m.EmployeeModule) },
  { path: "learn-unit-testing", loadChildren: () => import("./modules/learn-unit-testing/learn-unit-testing.module").then(m => m.LearnUnitTestingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule
{
}

