import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceComponent} from './service.component';
import {ServiceRoutingModule} from "./service-routing.module";
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    ServiceComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
  ]
})
export class ServiceModule {
}
