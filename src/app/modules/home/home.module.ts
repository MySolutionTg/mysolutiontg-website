import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {MenuBarsComponent} from "../../components/menu-bars/menu-bars.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {ProjectComponent} from "./components/project/project.component";
import {ServiceComponent} from "./components/service/service.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {HeadingComponent} from "../../components/heading/heading.component";
import {AddressItemComponent} from "../../components/address-item/address-item.component";
import {GetContactComponent} from "../../components/get-contact/get-contact.component";
import {ServiceDetailsCardComponent} from "../../components/service-details-card/service-details-card.component";
import {ServiceImageCardComponent} from "../../components/service-image-card/service-image-card.component";
import {ProjectCardComponent} from "../../components/project-card/project-card.component";
import {SkillItemComponent} from "../../components/skill-item/skill-item.component";

@NgModule({
  declarations: [
    HomeComponent,
    MenuBarsComponent,
    NavbarComponent,
    ProjectComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    HeadingComponent,
    AddressItemComponent,
    GetContactComponent,
    ServiceDetailsCardComponent,
    ServiceImageCardComponent,
    ProjectCardComponent,
    SkillItemComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    NavbarComponent,
    MenuBarsComponent
  ],
})
export class HomeModule { }
