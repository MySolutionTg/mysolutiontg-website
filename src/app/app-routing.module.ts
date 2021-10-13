import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProjectComponent} from "./project/project.component";
import {AboutComponent} from "./about/about.component";
import {ServiceComponent} from "./service/service.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "projects",
    component: ProjectComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "services",
    component: ServiceComponent,
  },
  {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
