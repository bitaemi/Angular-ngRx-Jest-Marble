import { NotFoudPageComponent } from './../learning-module/components/not-foud-page/not-foud-page.component';
import { UsersComponent } from './components/user-component/users.component';
import { TodosComponent } from './components/06-services/todos.component';
import { UserDetailsComponent } from './components/07-user-details/user-details.component';
import { Routes, RouterModule } from '@angular/router';
import { TodoService } from './components/06-services/todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const learnUnitTestRoutes: Routes = [
  // we leave the parent path empty in order to enable lazy loading for curent module --> add in app routing
  { path: "", children: [
    { path: "users/:id", component: UserDetailsComponent },
    { path: "users", component: UsersComponent },
    { path: "todos", component: TodosComponent },
    { path: "not-found", component: NotFoudPageComponent },
  ]},
];
@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersComponent,
    TodosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(learnUnitTestRoutes)
  ],
  providers: [TodoService],
  exports: [TodoService]
})
export class LearnUnitTestingModule { }
