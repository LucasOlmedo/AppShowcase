import { EventsPage } from './events';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    EventsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsPage),
  ],
})
export class EventsPageModule { }
