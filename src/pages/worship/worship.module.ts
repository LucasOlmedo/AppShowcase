import { NgModule } from '@angular/core';
import { WorshipPage } from './worship';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    WorshipPage,
  ],
  imports: [
    IonicPageModule.forChild(WorshipPage),
  ],
})
export class WorshipPageModule { }
