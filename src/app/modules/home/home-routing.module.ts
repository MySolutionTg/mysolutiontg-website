import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent as RootComponent} from "./home.component";
import {HomeComponent} from "./components/home/home.component"
import {ProjectComponent} from "./components/project/project.component";
import {AboutComponent} from "./components/about/about.component";
import {ServiceComponent} from "./components/service/service.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {
    path: "",
    component: RootComponent,
    children: [
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
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
