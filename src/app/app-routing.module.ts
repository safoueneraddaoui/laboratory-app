import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';
import {ToolsComponent} from "./tools/tools.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EventsComponent} from "./events/events.component";
import {ArticlesComponent} from "./articles/articles.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: 'members/:id/edit',
    pathMatch: 'full',
    component: MemberFormComponent
  },
  {
    path: 'members',
    pathMatch: 'full',
    component: MemberListComponent
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: MemberFormComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'members'
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'tools',
    pathMatch: 'full',
    component: ToolsComponent
  },
  {
    path: 'events',
    pathMatch: 'full',
    component: EventsComponent
  },
  {
    path: 'articles',
    pathMatch: 'full',
    component: ArticlesComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
