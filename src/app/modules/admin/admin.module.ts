import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { NavbarComponent } from './partials/navbar/navbar.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
