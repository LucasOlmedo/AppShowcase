import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorshipPage } from './worship';

@NgModule({
  declarations: [
    WorshipPage,
  ],
  imports: [
    IonicPageModule.forChild(WorshipPage),
  ],
})
export class WorshipPageModule {}
