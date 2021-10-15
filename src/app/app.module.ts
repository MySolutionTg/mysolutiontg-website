import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeadingComponent } from './components/heading/heading.component';
import { AddressItemComponent } from './components/address-item/address-item.component';
import { GetContactComponent } from './components/get-contact/get-contact.component';
import { ServiceDetailsCardComponent } from './components/service-details-card/service-details-card.component';
import { ServiceImageCardComponent } from './components/service-image-card/service-image-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
