import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageComponent} from './message.component';
import {MessageRoutingModule} from "./message-routing.module";
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    MessageComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
  ],
  providers: [],
})
export class MessageModule {
}
