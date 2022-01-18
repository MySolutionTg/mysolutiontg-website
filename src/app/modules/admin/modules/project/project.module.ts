import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectComponent} from './project.component';
import {ProjectRoutingModule} from "./project-routing.module";
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    ProjectComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
  ]
})
export class ProjectModule {
}
