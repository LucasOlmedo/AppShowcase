import { NgModule } from '@angular/core';
import { ArticlesPage } from './articles';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticlesPage),
  ],
})
export class ArticlesPageModule { }
