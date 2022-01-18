import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'service',
        loadChildren: () =>
          import('./modules/service/service.module').then((m) => m.ServiceModule),
      },
      {
        path: 'project',
        loadChildren: () =>
          import('./modules/project/project.module').then((m) => m.ProjectModule),
      },
      {
        path: 'message',
        loadChildren: () =>
          import('./modules/message/message.module').then((m) => m.MessageModule),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
