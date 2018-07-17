import { BiblePage } from './bible';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    BiblePage,
  ],
  imports: [
    IonicPageModule.forChild(BiblePage),
  ],
})
export class BiblePageModule { }
